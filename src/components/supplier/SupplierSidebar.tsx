import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Target,
  MessageSquare,
  BarChart3,
  Settings,
  HelpCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Truck,
  Bot,
  Activity,
  DollarSign,
  TrendingUp,
  Star,
  Award,
  Zap
} from 'lucide-react';

interface SupplierSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupplierSidebar = ({ isOpen, onClose }: SupplierSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: 'Overview',
      path: '/supplier-dashboard/overview',
      badge: null
    },
    {
      icon: Package,
      label: 'Product Catalog',
      path: '/supplier-dashboard/catalog',
      badge: '1,247'
    },
    {
      icon: ShoppingCart,
      label: 'Orders & RFQs',
      path: '/supplier-dashboard/orders',
      badge: '18'
    },
    {
      icon: Target,
      label: 'Project Leads',
      path: '/supplier-dashboard/leads',
      badge: '42'
    },
    {
      icon: MessageSquare,
      label: 'Messages',
      path: '/supplier-dashboard/messages',
      badge: '7'
    },
    {
      icon: BarChart3,
      label: 'Analytics',
      path: '/supplier-dashboard/analytics',
      badge: null
    },
    {
      icon: Settings,
      label: 'Settings',
      path: '/supplier-dashboard/settings',
      badge: null
    },
    {
      icon: HelpCircle,
      label: 'Help & Support',
      path: '/supplier-dashboard/help',
      badge: null
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark z-50
        transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${isCollapsed ? 'w-16' : 'w-64'}
        lg:relative lg:translate-x-0
      `}>
        {/* Enhanced Header */}
        <div className="flex items-center justify-between p-4 border-b border-border-light dark:border-border-dark bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
                <Truck className="w-5 h-5 text-black" />
              </div>
              <div>
                <h2 className="font-bold text-base text-gray-900 dark:text-white">BuildMart Supply</h2>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-gray-600 dark:text-gray-400">Material Supplier</p>
                  <Badge className="bg-green-100 text-green-800 text-xs px-2 py-0.5">
                    <Activity className="w-3 h-3 mr-1" />
                    Active
                  </Badge>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex items-center gap-1">
            {/* Desktop Collapse Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:flex p-1.5"
            >
              {isCollapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </Button>
            
            {/* Mobile Close */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="lg:hidden p-1.5"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Enhanced Navigation */}
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
                  flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                  ${isActive(item.path)
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg transform scale-[1.02]'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  }
                  ${isCollapsed ? 'justify-center px-3' : ''}
                `}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && (
                  <>
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <Badge 
                        className={`
                          text-xs px-2 py-1 font-semibold
                          ${isActive(item.path)
                            ? 'bg-black/20 text-black border-black/20'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                          }
                        `}
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </>
                )}
              </Link>
            ))}
          </div>
        </nav>

        {/* Enhanced AI Assistant Footer */}
        {!isCollapsed && (
          <div className="p-4 border-t border-border-light dark:border-border-dark">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 border border-gray-700 shadow-2xl overflow-hidden relative">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -left-4 bottom-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
                    <Bot className="w-5 h-5 text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">AI Supply Intelligence</span>
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-0.5 font-bold">
                        Smart
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-400">Active & Learning</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-3 h-3 text-green-400" />
                      <span className="text-gray-300">Revenue Growth</span>
                    </div>
                    <span className="font-bold text-green-400">+12.5%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3 h-3 text-blue-400" />
                      <span className="text-gray-300">Monthly Revenue</span>
                    </div>
                    <span className="font-bold text-blue-400">$156K</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Package className="w-3 h-3 text-purple-400" />
                      <span className="text-gray-300">Active Products</span>
                    </div>
                    <span className="font-bold text-purple-400">1,247</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black text-xs font-bold shadow-lg"
                  >
                    <Zap className="w-3 h-3 mr-2" />
                    Ask AI Assistant
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="text-xs border-gray-600 text-gray-300 hover:bg-gray-800">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Forecast
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs border-gray-600 text-gray-300 hover:bg-gray-800">
                      <Target className="w-3 h-3 mr-1" />
                      Optimize
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center justify-center gap-1 text-green-600 mb-1">
                  <Star className="w-3 h-3" />
                  <span className="text-sm font-bold">4.8</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Rating</p>
              </div>
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center justify-center gap-1 text-blue-600 mb-1">
                  <Award className="w-3 h-3" />
                  <span className="text-sm font-bold">89</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Clients</p>
              </div>
              <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <div className="flex items-center justify-center gap-1 text-orange-600 mb-1">
                  <ShoppingCart className="w-3 h-3" />
                  <span className="text-sm font-bold">18</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Orders</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SupplierSidebar;