import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeownerSidebar from '@/components/homeowner/HomeownerSidebar';
import HomeownerHeader from '@/components/homeowner/HomeownerHeader';
import HomeownerOverview from '@/components/homeowner/HomeownerOverview';
import MyProjects from '@/components/homeowner/MyProjects';
import BidManagement from '@/components/homeowner/BidManagement';
import ContractorDirectory from '@/components/homeowner/ContractorDirectory';
import Messages from '@/components/homeowner/Messages';
import AccountSettings from '@/components/homeowner/AccountSettings';
import HelpSupport from '@/components/homeowner/HelpSupport';

const HomeownerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50">
      <HomeownerSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className="flex-1 flex flex-col h-full relative overflow-hidden lg:ml-0">
        <HomeownerHeader onMenuClick={() => setSidebarOpen(true)} />
        
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/homeowner-dashboard/overview" replace />} />
            <Route path="/overview" element={<HomeownerOverview />} />
            <Route path="/projects" element={<MyProjects />} />
            <Route path="/bids" element={<BidManagement />} />
            <Route path="/contractors" element={<ContractorDirectory />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<AccountSettings />} />
            <Route path="/help" element={<HelpSupport />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default HomeownerDashboard;