import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SubcontractorSidebar from '@/components/subcontractor/SubcontractorSidebar';
import SubcontractorHeader from '@/components/subcontractor/SubcontractorHeader';
import SubcontractorOverview from '@/components/subcontractor/SubcontractorOverview';
import FindProjects from '@/components/subcontractor/FindProjects';
import BidManagement from '@/components/subcontractor/BidManagement';
import MyProfile from '@/components/subcontractor/MyProfile';
import MarketingAnalytics from '@/components/subcontractor/MarketingAnalytics';
import AIAssistant from '@/components/subcontractor/AIAssistant';
import EnhancedAICopilot from '@/components/subcontractor/EnhancedAICopilot';
import MyProjects from '@/components/subcontractor/MyProjects';
import Messages from '@/components/subcontractor/Messages';
import EnhancedMessages from '@/components/subcontractor/EnhancedMessages';
import AdvancedProjectManagement from '@/components/subcontractor/AdvancedProjectManagement';
import AccountSettings from '@/components/subcontractor/AccountSettings';
import HelpSupport from '@/components/subcontractor/HelpSupport';
import FloatingAICopilot from '@/components/common/FloatingAICopilot';

const SubcontractorDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
      <SubcontractorSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        <SubcontractorHeader onMenuClick={() => setSidebarOpen(true)} />
        
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/subcontractor-dashboard/overview" replace />} />
            <Route path="/overview" element={<SubcontractorOverview />} />
            <Route path="/find-projects" element={<FindProjects />} />
            <Route path="/bid-management" element={<BidManagement />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/marketing-analytics" element={<MarketingAnalytics />} />
            <Route path="/ai-assistant" element={<EnhancedAICopilot />} />
            <Route path="/ai-assistant-basic" element={<AIAssistant />} />
            <Route path="/my-projects" element={<MyProjects />} />
            <Route path="/project-management" element={<AdvancedProjectManagement />} />
            <Route path="/messages" element={<EnhancedMessages />} />
            <Route path="/messages-basic" element={<Messages />} />
            <Route path="/settings" element={<AccountSettings />} />
            <Route path="/help" element={<HelpSupport />} />
          </Routes>
        </div>
      </main>

      {/* Floating AI Copilot - Available on all pages */}
      <FloatingAICopilot />
    </div>
  );
};

export default SubcontractorDashboard;