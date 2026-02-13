# 🖥️ Your VPS Configuration

## Server Details

**VPS IP Address:** `167.88.38.179`

---

## Ports Information

### Port 8090 - CyberPanel Admin Panel
- **URL:** https://167.88.38.179:8090/
- **Purpose:** CyberPanel web interface (website management)
- **Login:** Browser mein open karke admin login
- **Use:** Websites create/manage karne ke liye

### Port 22 - SSH (Deployment Port)
- **Purpose:** Server par command line access
- **Use:** CI/CD deployment ke liye yeh port use hoga
- **Connection:** `ssh root@167.88.38.179`

---

## 🔐 GitHub Secrets (Exact Values)

Yeh values GitHub mein add karni hain:

### 1. VPS_HOST
```
167.88.38.179
```

### 2. VPS_USERNAME
```
root
```

### 3. VPS_PORT
```
22
```
**Note:** Yeh SSH port hai, 8090 nahi!

### 4. SSH_PRIVATE_KEY
```
(Aapki private key - generate karni hogi)
```

### 5. CYBERPANEL_USER
```
(CyberPanel mein jo website user hai - check karna hoga)
```

---

## 📝 Setup Steps

### Step 1: SSH Key Generate Karein (Local Machine)

```bash
# Windows PowerShell:
ssh-keygen -t ed25519 -C "github-deploy" -f $env:USERPROFILE\.ssh\github_deploy_key

# Linux/Mac:
ssh-keygen -t ed25519 -C "github-deploy" -f ~/.ssh/github_deploy_key
```

### Step 2: VPS Par SSH Karein

```bash
ssh root@167.88.38.179
```

**First time connect karne par:**
- "Are you sure you want to continue connecting?" → Type `yes` and press Enter
- Password enter karein (jo aapke hosting provider ne diya)

### Step 3: CyberPanel User Find Karein

VPS par yeh command run karein:
```bash
ls -la /home/
```

**Output Example:**
```
drwxr-xr-x  5 example.com  example.com  4096 Feb 13 10:30 example.com
```

Yahan `example.com` aapka CYBERPANEL_USER hai.

### Step 4: Public Key VPS Par Add Karein

**Local machine par (PowerShell):**
```bash
# Public key copy karein
Get-Content $env:USERPROFILE\.ssh\github_deploy_key.pub
```

**VPS par (SSH session mein):**
```bash
# Paste karein (right click ya Ctrl+Shift+V)
mkdir -p ~/.ssh
echo "YOUR_PUBLIC_KEY_HERE" >> ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

### Step 5: Test SSH Connection

**Local machine se:**
```bash
# Windows PowerShell:
ssh -i $env:USERPROFILE\.ssh\github_deploy_key root@167.88.38.179

# Agar password ke bina connect ho gaya = Success! ✓
```

---

## 🎯 GitHub Secrets Summary

| Secret Name | Your Value |
|-------------|------------|
| VPS_HOST | `167.88.38.179` |
| VPS_USERNAME | `root` |
| VPS_PORT | `22` |
| SSH_PRIVATE_KEY | Content of `github_deploy_key` file |
| CYBERPANEL_USER | Check with: `ls -la /home/` on VPS |

---

## 🔗 Important URLs

- **CyberPanel Admin:** https://167.88.38.179:8090/
- **Your Website:** http://your-domain.com (jo domain aapne CyberPanel mein add kiya)
- **SSH Access:** `ssh root@167.88.38.179`

---

## ⚠️ Important Notes

1. **Port 8090** sirf browser ke liye hai (CyberPanel admin)
2. **Port 22** deployment ke liye use hoga (GitHub Actions)
3. SSH key **without passphrase** generate karein (deployment ke liye)
4. Private key kabhi share mat karein (sirf GitHub secrets mein)
5. Public key VPS par safely add kar sakte hain

---

## 🆘 Quick Troubleshooting

### Can't SSH to VPS?
```bash
# Check if SSH port is open
telnet 167.88.38.179 22

# Or use:
ssh -v root@167.88.38.179
# -v flag detailed error dikhayega
```

### Forgot CyberPanel Password?
```bash
# VPS par SSH karke:
adminPass YOUR_EMAIL@example.com
# New password set ho jayega
```

### Check if CyberPanel is Running?
```bash
# VPS par:
systemctl status lscpd
```

---

**Ready to Deploy! 🚀**
