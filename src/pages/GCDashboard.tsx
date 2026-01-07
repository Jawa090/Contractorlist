import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '@/components/GC dashboard/Sidebar';
import Header from '@/components/GC dashboard/Header';
import CleanOverview from '@/components/GC dashboard/CleanOverview';
import AdvancedAnalytics from '@/components/GC dashboard/AdvancedAnalytics';
import CleanProjectManagement from '@/components/GC dashboard/CleanProjectManagement';
import EnterpriseTeamManagement from '@/components/GC dashboard/EnterpriseTeamManagement';
import CleanCommunications from '@/components/GC dashboard/CleanCommunications';
import EnhancedDocuments from '@/components/GC dashboard/EnhancedDocuments';
import EnhancedCalendar from '@/components/GC dashboard/EnhancedCalendar';
import BidBoard from '@/components/GC dashboard/BidBoard';
import Directory from '@/components/GC dashboard/Directory';
import EnhancedAITakeoff from '@/components/GC dashboard/EnhancedAITakeoff';
import Marketing from '@/components/GC dashboard/Marketing';
import MyProjects from '@/components/GC dashboard/MyProjects';
import EnhancedAICopilot from '@/components/GC dashboard/EnhancedAICopilot';
import AccountSettings from '@/components/GC dashboard/AccountSettings';
import HelpSupport from '@/components/GC dashboard/HelpSupport';
import ProjectDiscovery from '@/components/GC dashboard/ProjectDiscovery';

const GCDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="flex-1 flex flex-col h-full relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/50">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/gc-dashboard/overview" replace />} />
            <Route path="/overview" element={<CleanOverview />} />
            <Route path="/analytics" element={<AdvancedAnalytics />} />
            <Route path="/projects" element={<CleanProjectManagement />} />
            <Route path="/team" element={<EnterpriseTeamManagement />} />
            <Route path="/communications" element={<CleanCommunications />} />
            <Route path="/documents" element={<EnhancedDocuments />} />
            <Route path="/calendar" element={<EnhancedCalendar />} />
            <Route path="/project-discovery" element={<ProjectDiscovery />} />
            <Route path="/bid-board" element={<BidBoard />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/ai-takeoff" element={<EnhancedAITakeoff />} />
            <Route path="/ai-copilot" element={<EnhancedAICopilot />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/my-projects" element={<MyProjects />} />
            <Route path="/settings" element={<AccountSettings />} />
            <Route path="/help" element={<HelpSupport />} />
          </Routes>
        </div>
      </main>

      {/* Enhanced AI Copilot Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white size-16 rounded-full shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center group">
            <svg className="w-7 h-7 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default GCDashboard;