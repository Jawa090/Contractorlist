import { useState, useEffect } from "react";
import VendorSidebar from "@/components/vendor-dashboard/VendorSidebar";
import VendorOverview from "@/components/vendor-dashboard/VendorOverview";
import ProductManagement from "@/components/vendor-dashboard/ProductManagement";
import OrderManagement from "@/components/vendor-dashboard/OrderManagement";
import InventoryManagement from "@/components/vendor-dashboard/InventoryManagement";
import CustomerManagement from "@/components/vendor-dashboard/CustomerManagement";
import VendorAnalytics from "@/components/vendor-dashboard/VendorAnalytics";
import VendorMessages from "@/components/vendor-dashboard/VendorMessages";
import StoreSettings from "@/components/vendor-dashboard/StoreSettings";
import SalesManagement from "@/components/vendor-dashboard/SalesManagement";
import ReviewsManagement from "@/components/vendor-dashboard/ReviewsManagement";
import PromotionsManagement from "@/components/vendor-dashboard/PromotionsManagement";
import { useAppSelector } from "@/store/hooks";
import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const VendorDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const { user } = useAppSelector((state) => state.auth);

  // Persist active tab
  useEffect(() => {
    const saved = window.localStorage.getItem("vendorDashboard.activeTab");
    if (saved) {
      setActiveTab(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("vendorDashboard.activeTab", activeTab);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <VendorOverview setActiveTab={setActiveTab} />;
      case "products":
        return <ProductManagement />;
      case "orders":
        return <OrderManagement />;
      case "inventory":
        return <InventoryManagement />;
      case "sales":
        return <SalesManagement />;
      case "customers":
        return <CustomerManagement />;
      case "reviews":
        return <ReviewsManagement />;
      case "promotions":
        return <PromotionsManagement />;
      case "analytics":
        return <VendorAnalytics />;
      case "messages":
        return <VendorMessages />;
      case "settings":
        return <StoreSettings />;
      default:
        return <VendorOverview setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 flex font-sans">
      {/* Sidebar - Desktop */}
      <div className={`hidden lg:block transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <VendorSidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          isCollapsed={!isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>

      {/* Sidebar - Mobile */}
      {isMobileSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setIsMobileSidebarOpen(false)}>
          <div className="w-64 h-full bg-white" onClick={(e) => e.stopPropagation()}>
            <VendorSidebar 
              activeTab={activeTab} 
              setActiveTab={(tab) => {
                setActiveTab(tab);
                setIsMobileSidebarOpen(false);
              }}
              isCollapsed={false}
              onToggle={() => {}}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40 px-4 lg:px-8 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4 flex-1">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>

            {/* Search Bar */}
            <div className="relative w-full max-w-md hidden md:block">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, orders, customers..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative hover:bg-gray-100 rounded-xl">
                  <Bell className="h-5 w-5 text-gray-600" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-96 overflow-y-auto">
                  <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer">
                    <div className="flex items-start gap-3 w-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New order received</p>
                        <p className="text-xs text-gray-500 mt-1">Order #1234 - $245.00</p>
                        <p className="text-xs text-gray-400 mt-1">5 minutes ago</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer">
                    <div className="flex items-start gap-3 w-full">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Low stock alert</p>
                        <p className="text-xs text-gray-500 mt-1">5 products need restocking</p>
                        <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-center text-sm text-purple-600 font-medium cursor-pointer">
                  View all notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="h-8 w-px bg-gray-200 mx-2 hidden md:block"></div>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-xl p-2 transition-colors">
                  <div className="text-right hidden md:block">
                    <p className="text-sm font-bold text-gray-900">{user?.name || 'Vendor User'}</p>
                    <div className="flex items-center justify-end gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <p className="text-xs text-gray-500 font-medium">Online</p>
                    </div>
                  </div>
                  <Avatar className="h-10 w-10 border-2 border-yellow-400 cursor-pointer hover:shadow-lg transition-all">
                    <AvatarImage src={user?.avatar} />
                    <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white font-bold">
                      {user?.name?.charAt(0) || 'V'}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setActiveTab('settings')}>
                  Store Settings
                </DropdownMenuItem>
                <DropdownMenuItem>Billing & Subscription</DropdownMenuItem>
                <DropdownMenuItem>Help & Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default VendorDashboard;
