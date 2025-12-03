import { 
  LayoutDashboard, 
  PlusCircle, 
  Users, 
  FolderKanban, 
  MessageSquare, 
  CreditCard, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Home
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ClientSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isCollapsed: boolean;
  onToggle: () => void;
}

const ClientSidebar = ({ activeTab, setActiveTab, isCollapsed, onToggle }: ClientSidebarProps) => {
  const menuItems = [
    { id: "overview", label: "Dashboard", icon: LayoutDashboard },
    { id: "post-project", label: "Post Project", icon: PlusCircle },
    { id: "contractors", label: "Find Contractors", icon: Users },
    { id: "tracking", label: "My Projects", icon: FolderKanban },
    { id: "messages", label: "Messages", icon: MessageSquare, badge: 3 },
    { id: "payments", label: "Payments", icon: CreditCard },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white shadow-2xl transition-all duration-300 z-50 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6 border-b border-gray-700/50">
          <Link to="/" className="flex items-center gap-3">
            {!isCollapsed ? (
              <>
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    ContractorList
                  </h1>
                  <p className="text-xs text-gray-400">Client Portal</p>
                </div>
              </>
            ) : (
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg mx-auto">
                <Home className="w-6 h-6 text-white" />
              </div>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative ${
                  isActive
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg shadow-yellow-500/30'
                    : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'} transition-colors ${isCollapsed ? 'mx-auto' : ''}`} />
                {!isCollapsed && (
                  <>
                    <span className="font-medium text-sm flex-1 text-left">{item.label}</span>
                    {item.badge && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
                {isCollapsed && item.badge && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Collapse Toggle */}
        <div className="p-4 border-t border-gray-700/50 hidden lg:block">
          <Button
            onClick={onToggle}
            variant="ghost"
            className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <>
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm">Collapse</span>
              </>
            )}
          </Button>
        </div>

        {/* User Quick Actions */}
        {!isCollapsed && (
          <div className="p-4 border-t border-gray-700/50 bg-gray-800/50">
            <div className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 rounded-xl p-4">
              <p className="text-xs font-semibold text-yellow-400 mb-2">🎉 Premium Member</p>
              <p className="text-xs text-gray-300 mb-3">Unlimited project posts & priority support</p>
              <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:shadow-lg transition-all text-xs py-2">
                Upgrade Plan
              </Button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default ClientSidebar;
