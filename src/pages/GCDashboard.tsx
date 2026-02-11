import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "@/apps/gc/AppLayout";
import { AuthProvider } from "@/apps/gc/contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import ProtectedRoute from "@/apps/gc/ProtectedRoute";

// New Pages
import DashboardPage from "@/apps/gc/pages/DashboardPage";
import ProjectsPage from "@/apps/gc/pages/ProjectsPage";
import ProjectDetailPage from "@/apps/gc/pages/ProjectDetailPage";
import SchedulePage from "@/apps/gc/pages/SchedulePage";
import DailyLogsPage from "@/apps/gc/pages/DailyLogsPage";
import RFIManagementPage from "@/apps/gc/pages/RFIManagementPage";
import PhotosPage from "@/apps/gc/pages/PhotosPage";
import AnalyticsPage from "@/apps/gc/pages/AnalyticsPage";
import FinancialsPage from "@/apps/gc/pages/FinancialsPage";
import BillingPage from "@/apps/gc/pages/BillingPage";
import ChangeOrdersPage from "@/apps/gc/pages/ChangeOrdersPage";
import SignatureHistoryPage from "@/apps/gc/pages/SignatureHistoryPage";
import LienWaiverManagementPage from "@/apps/gc/pages/LienWaiverManagementPage";
import SafetyTrackingPage from "@/apps/gc/pages/SafetyTrackingPage";
import InsuranceTrackingPage from "@/apps/gc/pages/InsuranceTrackingPage";
import CertifiedPayrollPage from "@/apps/gc/pages/CertifiedPayrollPage";
import ResourceManagementPage from "@/apps/gc/pages/ResourceManagementPage";
import SettingsPage from "@/apps/gc/pages/SettingsPage";
import ExternalSigningPage from "@/apps/gc/pages/ExternalSigningPage";
import FindProjectsPage from "@/apps/gc/pages/FindProjectsPage";
import DirectoryPage from "@/apps/gc/pages/DirectoryPage";
import BidsPage from "@/apps/gc/pages/BidsPage";
import CompleteProfilePage from "@/apps/gc/pages/CompleteProfilePage";


// Old Preserved Pages
import Communications from "@/components/common/Communications";
import ProductsOverview from "@/components/GC dashboard/Products/ProductsOverview";
import ServicesOverview from "@/components/GC dashboard/Services/ServicesOverview";
import EnterpriseTeamManagement from "@/components/GC dashboard/EnterpriseTeamManagement";
import EnhancedDocuments from "@/components/GC dashboard/EnhancedDocuments";
import AccountSettings from "@/components/GC dashboard/AccountSettings";
import CustomerSupport from "@/components/GC dashboard/CustomerSupport";

const queryClient = new QueryClient();

export default function GCDashboard() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes>
          <Route
            path="complete-profile"
            element={
              <ProtectedRoute requireProfile={false}>
                <CompleteProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Routes>
                    <Route index element={<DashboardPage />} />
                    <Route path="projects" element={<ProjectsPage />} />
                    <Route path="projects/:projectId" element={<ProjectDetailPage />} />
                    <Route path="schedule" element={<SchedulePage />} />
                    <Route path="daily-logs" element={<DailyLogsPage />} />
                    <Route path="rfi" element={<RFIManagementPage />} />
                    <Route path="photos" element={<PhotosPage />} />
                    <Route path="analytics" element={<AnalyticsPage />} />
                    <Route path="financials" element={<FinancialsPage />} />
                    <Route path="billing" element={<BillingPage />} />
                    <Route path="change-orders" element={<ChangeOrdersPage />} />
                    <Route path="signature-history" element={<SignatureHistoryPage />} />
                    <Route path="liens" element={<LienWaiverManagementPage />} />
                    <Route path="safety" element={<SafetyTrackingPage />} />
                    <Route path="insurance" element={<InsuranceTrackingPage />} />
                    <Route path="payroll" element={<CertifiedPayrollPage />} />

                    {/* NewCL GC Dashboard Pages */}
                    <Route path="team" element={<EnterpriseTeamManagement />} />
                    <Route path="documents" element={<EnhancedDocuments />} />
                    <Route path="settings" element={<SettingsPage />} />
                    <Route path="customer-support" element={<CustomerSupport />} />
                    <Route path="resources" element={<ResourceManagementPage />} />
                    <Route path="sign/:token" element={<ExternalSigningPage />} />


                    {/* Preserved Routes */}
                    <Route path="project-discovery" element={<FindProjectsPage />} />
                    <Route path="directory" element={<DirectoryPage />} />
                    <Route path="bids" element={<BidsPage />} />
                    <Route path="products" element={<ProductsOverview />} />
                    <Route path="services" element={<ServicesOverview />} />
                    <Route path="communications" element={<Communications />} />

                    <Route path="*" element={<Navigate to="/gc-dashboard" replace />} />
                  </Routes>
                </AppLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}