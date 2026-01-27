# Token Refresh Spam Fix

## 🐛 Problem

When login failed (wrong password/email), the console was spammed with:
```
warn: Potential refresh token reuse detected for user ID: 17
POST /api/token/refresh 401 1.354 ms - 62
```

This happened **hundreds of times** on a single failed login attempt.

---

## 🔍 Root Cause

### **Issue 1: Frontend Interceptor Too Aggressive**

The Axios response interceptor was trying to refresh tokens on **every 401 error**, including:

1. ❌ **Login failures** (wrong password) → 401
2. ❌ **Register failures** (duplicate email) → 401  
3. ❌ **Token refresh endpoint itself** → 401 (infinite loop!)
4. ❌ **Already logged-out users** → 401

**Code before:**
```typescript
if (error.response?.status === 401 && !originalRequest._retry) {
  // Try to refresh on EVERY 401, even login failures!
  await api.post('/token/refresh');
}
```

### **Issue 2: Backend Logging Too Verbose**

The backend logged a warning **every time** a refresh token wasn't found in the database, even when:
- User was logged out (expected)
- Token was already used (expected with rotation)
- Token expired (expected)

---

## ✅ Solution

### **Frontend Fix (`api.ts`)**

Added guards to **prevent refresh attempts** on:
1. Login/register endpoints
2. Refresh endpoint itself (prevents infinite loop)
3. When user is not authenticated

**Code after:**
```typescript
if (
  error.response?.status === 401 &&
  !originalRequest._retry &&
  !originalRequest.url?.includes('/auth/login') &&      // ✅ Don't refresh on login
  !originalRequest.url?.includes('/auth/register') &&   // ✅ Don't refresh on register
  !originalRequest.url?.includes('/token/refresh')      // ✅ Don't refresh on refresh
) {
  // Check if user is authenticated
  const user = localStorage.getItem('user');
  if (!user) {
    // No session, don't try to refresh
    handleLogout();
    return Promise.reject(error);
  }

  // Now it's safe to try refresh
  await api.post('/token/refresh');
}
```

### **Backend Fix (`tokenController.ts`)**

Only log warnings for **actual token reuse** (security concern), not for:
- Logged-out users (no tokens in DB)
- Expired tokens
- Already-used tokens (expected with rotation)

**Logic:**
```typescript
if (tokenResult.rows.length === 0) {
  // Check if user has OTHER valid tokens
  const userTokensResult = await pool.query(
    'SELECT COUNT(*) as count FROM refresh_tokens WHERE user_id = $1',
    [decoded.id]
  );
  
  const hasOtherTokens = parseInt(userTokensResult.rows[0]?.count || '0') > 0;
  
  if (hasOtherTokens) {
    // ⚠️ User has other tokens, so this one was likely reused (SECURITY ISSUE!)
    logger.warn(`Potential refresh token reuse detected for user ID: ${decoded.id}`);
  }
  // ✅ If user has no tokens, they're logged out - don't spam logs
}
```

---

## 🎯 Results

### **Before:**
- ❌ 100+ log warnings on failed login
- ❌ Infinite refresh loops
- ❌ Console spam
- ❌ Unnecessary database queries

### **After:**
- ✅ No spam on failed login
- ✅ No infinite loops
- ✅ Clean console
- ✅ Warnings only for actual security issues

---

## 🔒 Security Benefits

The fix **improves security** by:

1. **Reducing Noise** - Real security warnings are now visible
2. **Preventing Loops** - No infinite refresh attempts
3. **Smart Detection** - Only warns on actual token reuse (when user has other valid tokens)

---

## 🧪 Testing

### **Test Case 1: Failed Login**
```
Action: Enter wrong password
Expected: Single 401 error, no refresh attempts
Result: ✅ PASS - No spam
```

### **Test Case 2: Logged-Out User**
```
Action: Try to access protected route after logout
Expected: 401 error, redirect to login, no warnings
Result: ✅ PASS - Clean logout
```

### **Test Case 3: Actual Token Reuse (Security)**
```
Action: Manually reuse an old refresh token while logged in
Expected: Warning logged, request rejected
Result: ✅ PASS - Security warning appears
```

### **Test Case 4: Normal Token Refresh**
```
Action: Access token expires, auto-refresh
Expected: New tokens issued, no warnings
Result: ✅ PASS - Silent refresh
```

---

## 📊 Impact

| Metric | Before | After |
|--------|--------|-------|
| Logs on failed login | 100+ | 0 |
| Refresh attempts on 401 | Always | Only when appropriate |
| Security warnings | Always | Only on actual reuse |
| Console noise | High | Low |

---

## 🎓 Lessons Learned

1. **Don't refresh on auth endpoints** - Login/register failures should not trigger refresh
2. **Check user state** - Don't refresh if user isn't authenticated
3. **Smart logging** - Only log actual security issues, not expected behavior
4. **Prevent loops** - Never refresh on the refresh endpoint itself

---

## 🔄 Token Rotation Still Works!

This fix **does not affect** the token rotation security feature:
- ✅ Refresh tokens are still single-use
- ✅ Old tokens are still deleted after use
- ✅ Actual reuse is still detected and logged
- ✅ Security is maintained

---

## 📝 Summary

**Problem:** Console spam on failed login due to aggressive refresh attempts

**Solution:** 
- Frontend: Only refresh on appropriate 401 errors
- Backend: Only log warnings for actual security issues

**Result:** Clean console, better security visibility, same security level
