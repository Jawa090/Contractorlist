import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "@/components/GC dashboard/AppLayout";
import { AuthProvider } from "@/context/GC dashboard/contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import ProtectedRoute from "@/components/GC dashboard/ProtectedRoute";

// New Pages
import DashboardPage from "@/pages/GC dashboard/DashboardPage";
import ProjectsPage from "@/pages/GC dashboard/ProjectsPage";
import ProjectDetailPage from "@/pages/GC dashboard/ProjectDetailPage";
import SchedulePage from "@/pages/GC dashboard/SchedulePage";
import DailyLogsPage from "@/pages/GC dashboard/DailyLogsPage";
import RFIManagementPage from "@/pages/GC dashboard/RFIManagementPage";
import PhotosPage from "@/pages/GC dashboard/PhotosPage";
import AnalyticsPage from "@/pages/GC dashboard/AnalyticsPage";
import FinancialsPage from "@/pages/GC dashboard/FinancialsPage";
import BillingPage from "@/pages/GC dashboard/BillingPage";
import ChangeOrdersPage from "@/pages/GC dashboard/ChangeOrdersPage";
import SignatureHistoryPage from "@/pages/GC dashboard/SignatureHistoryPage";
import LienWaiverManagementPage from "@/pages/GC dashboard/LienWaiverManagementPage";
import SafetyTrackingPage from "@/pages/GC dashboard/SafetyTrackingPage";
import InsuranceTrackingPage from "@/pages/GC dashboard/InsuranceTrackingPage";
import CertifiedPayrollPage from "@/pages/GC dashboard/CertifiedPayrollPage";
import ResourceManagementPage from "@/pages/GC dashboard/ResourceManagementPage";
import SettingsPage from "@/pages/GC dashboard/SettingsPage";
import ExternalSigningPage from "@/pages/GC dashboard/ExternalSigningPage";
import FindProjectsPage from "@/pages/GC dashboard/FindProjectsPage";
import DirectoryPage from "@/pages/GC dashboard/DirectoryPage";
import BidsPage from "@/pages/GC dashboard/BidsPage";
import CompleteProfilePage from "@/pages/GC dashboard/CompleteProfilePage";



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
