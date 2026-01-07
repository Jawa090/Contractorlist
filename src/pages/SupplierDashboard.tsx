import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SupplierSidebar from '@/components/supplier/SupplierSidebar';
import SupplierHeader from '@/components/supplier/SupplierHeader';
import SupplierOverview from '@/components/supplier/SupplierOverview';
import ProductCatalog from '@/components/supplier/ProductCatalog';
import OrdersRFQs from '@/components/supplier/OrdersRFQs';
import ProjectLeads from '@/components/supplier/ProjectLeads';
import SupplierMessages from '@/components/supplier/SupplierMessages';
import SupplierAnalytics from '@/components/supplier/SupplierAnalytics';
import SupplierSettings from '@/components/supplier/SupplierSettings';
import SupplierHelp from '@/components/supplier/SupplierHelp';

const SupplierDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
      <SupplierSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        <SupplierHeader onMenuClick={() => setSidebarOpen(true)} />
        
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/supplier-dashboard/overview" replace />} />
            <Route path="/overview" element={<SupplierOverview />} />
            <Route path="/catalog" element={<ProductCatalog />} />
            <Route path="/orders" element={<OrdersRFQs />} />
            <Route path="/leads" element={<ProjectLeads />} />
            <Route path="/messages" element={<SupplierMessages />} />
            <Route path="/analytics" element={<SupplierAnalytics />} />
            <Route path="/settings" element={<SupplierSettings />} />
            <Route path="/help" element={<SupplierHelp />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default SupplierDashboard;