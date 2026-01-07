import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  LayoutDashboard,
  FolderOpen,
  Gavel,
  Users,
  MessageSquare,
  Settings,
  HelpCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Home,
  Bot,
  Sparkles,
  Zap
} from 'lucide-react';

interface HomeownerSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const HomeownerSidebar = ({ isOpen, onClose }: HomeownerSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      path: '/homeowner-dashboard/overview',
      badge: null,
      color: 'text-orange-600'
    },
    {
      icon: FolderOpen,
      label: 'My Projects',
      path: '/homeowner-dashboard/projects',
      badge: '3',
      color: 'text-green-600'
    },
    {
      icon: Gavel,
      label: 'Bid Management',
      path: '/homeowner-dashboard/bids',
      badge: '5',
      color: 'text-purple-600'
    },
    {
      icon: Users,
      label: 'Contractor Directory',
      path: '/homeowner-dashboard/contractors',
      badge: null,
      color: 'text-blue-600'
    },
    {
      icon: MessageSquare,
      label: 'Messages',
      path: '/homeowner-dashboard/messages',
      badge: '2',
      color: 'text-pink-600'
    },
    {
      icon: Settings,
      label: 'Account Settings',
      path: '/homeowner-dashboard/settings',
      badge: null,
      color: 'text-gray-600'
    },
    {
      icon: HelpCircle,
      label: 'Help & Support',
      path: '/homeowner-dashboard/help',
      badge: null,
      color: 'text-indigo-600'
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-50 shadow-2xl transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${isCollapsed ? 'w-20' : 'w-80'}
        lg:relative lg:translate-x-0
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-yellow-50 to-orange-50">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-lg text-gray-900">ContractorsList</h2>
                <p className="text-sm text-gray-600 font-medium">Homeowner Portal</p>
              </div>
            </div>
          )}
          
          <div className="flex items-center gap-2">
            {/* Desktop Collapse Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:flex p-2 hover:bg-yellow-50 rounded-lg"
            >
              {isCollapsed ? (
                <ChevronRight className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              )}
            </Button>
            
            {/* Mobile Close */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-yellow-50 rounded-lg"
            >
              <X className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
        </div>

        {/* User Profile */}
        {!isCollapsed && (
          <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-yellow-50/30">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg ring-4 ring-yellow-100">
                A
              </div>
              <div className="flex flex-col overflow-hidden">
                <p className="text-gray-900 text-base font-semibold truncate">Alex Johnson</p>
                <p className="text-gray-600 text-sm truncate">Premium Homeowner</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-green-600 font-medium">Active</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    onClose();
                  }
                }}
                className={`
                  group flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 relative overflow-hidden
                  ${isActive(item.path)
                    ? 'bg-gradient-to-r from-yellow-50 to-orange-50 text-orange-700 shadow-lg border border-orange-200'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-yellow-50/50 hover:text-gray-900'
                  }
                  ${isCollapsed ? 'justify-center px-3' : ''}
                `}
              >
                {isActive(item.path) && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-r-full" />
                )}
                
                <item.icon className={`w-6 h-6 flex-shrink-0 transition-all duration-200 ${
                  isActive(item.path) 
                    ? 'text-orange-600 scale-110' 
                    : `${item.color} group-hover:scale-105`
                }`} />
                
                {!isCollapsed && (
                  <div className="flex items-center justify-between flex-1">
                    <span className="flex-1 text-base">{item.label}</span>
                    {item.badge && (
                      <Badge 
                        className={`
                          text-xs px-2.5 py-1 font-bold transition-all duration-200 shadow-sm
                          ${isActive(item.path)
                            ? 'bg-orange-100 text-orange-700 border-orange-300'
                            : 'bg-gray-100 text-gray-600 group-hover:bg-yellow-100 group-hover:text-yellow-700'
                          }
                        `}
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </nav>

        {/* AI Assistant Footer */}
        {!isCollapsed && (
          <div className="p-4 border-t border-gray-100">
            <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded-2xl p-5 border border-orange-200 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-md">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <span className="text-base font-bold text-gray-900">AI Assistant</span>
                  <Badge className="ml-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs border-0 shadow-sm">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Pro
                  </Badge>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed font-medium">
                Get intelligent insights for project planning and contractor selection
              </p>
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 border-0"
              >
                <Zap className="w-4 h-4 mr-2" />
                Ask AI Assistant
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeownerSidebar;