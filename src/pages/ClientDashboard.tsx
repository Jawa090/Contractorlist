import { useState, useEffect } from "react";
import ClientSidebar from "@/components/client-dashboard/ClientSidebar";
import ClientOverview from "@/components/client-dashboard/ClientOverview";
import PostProject from "@/components/client-dashboard/PostProject";
import FindContractors from "@/components/client-dashboard/FindContractors";
import ProjectTracking from "@/components/client-dashboard/ProjectTracking";
import ClientMessages from "@/components/client-dashboard/ClientMessages";
import ClientPayments from "@/components/client-dashboard/ClientPayments";
import ClientSettings from "@/components/client-dashboard/ClientSettings";
import { useAppSelector } from "@/store/hooks";
import { Bell, Search, Menu, X } from "lucide-react";
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

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const { user } = useAppSelector((state) => state.auth);

  // Persist active tab
  useEffect(() => {
    const saved = window.localStorage.getItem("clientDashboard.activeTab");
    if (saved) {
      setActiveTab(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("clientDashboard.activeTab", activeTab);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <ClientOverview setActiveTab={setActiveTab} />;
      case "post-project":
        return <PostProject />;
      case "contractors":
        return <FindContractors setActiveTab={setActiveTab} />;
      case "tracking":
        return <ProjectTracking />;
      case "messages":
        return <ClientMessages />;
      case "payments":
        return <ClientPayments />;
      case "settings":
        return <ClientSettings />;
      default:
        return <ClientOverview setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex font-sans">
      {/* Sidebar - Desktop */}
      <div className={`hidden lg:block transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <ClientSidebar 
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
            <ClientSidebar 
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
                placeholder="Search projects, contractors, invoices..."
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
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New contractor proposal</p>
                        <p className="text-xs text-gray-500 mt-1">John's Construction submitted a bid for your kitchen renovation</p>
                        <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer">
                    <div className="flex items-start gap-3 w-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Project milestone completed</p>
                        <p className="text-xs text-gray-500 mt-1">Bathroom renovation Phase 1 is complete</p>
                        <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer">
                    <div className="flex items-start gap-3 w-full">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Payment reminder</p>
                        <p className="text-xs text-gray-500 mt-1">Invoice #1234 is due in 3 days</p>
                        <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-center text-sm text-yellow-600 font-medium cursor-pointer">
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
                    <p className="text-sm font-bold text-gray-900">{user?.name || 'Client User'}</p>
                    <div className="flex items-center justify-end gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <p className="text-xs text-gray-500 font-medium">Online</p>
                    </div>
                  </div>
                  <Avatar className="h-10 w-10 border-2 border-yellow-400 cursor-pointer hover:shadow-lg transition-all">
                    <AvatarImage src={user?.avatar} />
                    <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white font-bold">
                      {user?.name?.charAt(0) || 'C'}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setActiveTab('settings')}>
                  Profile Settings
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

export default ClientDashboard;
