import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  LayoutDashboard,
  Search,
  FileText,
  User,
  BarChart3,
  Bot,
  Briefcase,
  MessageSquare,
  Settings,
  HelpCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Building,
  Kanban,
  Zap,
  TrendingUp,
  Target,
  Award,
  Activity,
  DollarSign,
  Clock,
  Star
} from 'lucide-react';

interface SubcontractorSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubcontractorSidebar = ({ isOpen, onClose }: SubcontractorSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: 'Overview',
      path: '/subcontractor-dashboard/overview',
      badge: null
    },
    {
      icon: Search,
      label: 'Find Projects',
      path: '/subcontractor-dashboard/find-projects',
      badge: '24'
    },
    {
      icon: FileText,
      label: 'Bid Management',
      path: '/subcontractor-dashboard/bid-management',
      badge: '5'
    },
    {
      icon: Briefcase,
      label: 'My Projects',
      path: '/subcontractor-dashboard/my-projects',
      badge: '3'
    },
    {
      icon: Kanban,
      label: 'Project Management',
      path: '/subcontractor-dashboard/project-management',
      badge: 'Pro'
    },
    {
      icon: User,
      label: 'My Profile',
      path: '/subcontractor-dashboard/my-profile',
      badge: null
    },
    {
      icon: BarChart3,
      label: 'Marketing Analytics',
      path: '/subcontractor-dashboard/marketing-analytics',
      badge: null
    },
    {
      icon: Bot,
      label: 'AI Assistant',
      path: '/subcontractor-dashboard/ai-assistant',
      badge: 'Beta'
    },
    {
      icon: MessageSquare,
      label: 'Messages',
      path: '/subcontractor-dashboard/messages',
      badge: '12'
    },
    {
      icon: Settings,
      label: 'Settings',
      path: '/subcontractor-dashboard/settings',
      badge: null
    },
    {
      icon: HelpCircle,
      label: 'Help & Support',
      path: '/subcontractor-dashboard/help',
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
                <Building className="w-5 h-5 text-black" />
              </div>
              <div>
                <h2 className="font-bold text-base text-gray-900 dark:text-white">Acme Construction</h2>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-gray-600 dark:text-gray-400">HVAC Specialist</p>
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
                            : item.badge === 'Beta' || item.badge === 'Pro'
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0'
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

        {/* Enhanced AI Copilot Footer */}
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
                      <span className="text-sm font-bold text-white">AI Copilot</span>
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-0.5 font-bold">
                        Enhanced
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
                      <span className="text-gray-300">Win Rate Boost</span>
                    </div>
                    <span className="font-bold text-green-400">+15%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3 h-3 text-blue-400" />
                      <span className="text-gray-300">Revenue Impact</span>
                    </div>
                    <span className="font-bold text-blue-400">+$1.2M</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-purple-400" />
                      <span className="text-gray-300">Time Saved</span>
                    </div>
                    <span className="font-bold text-purple-400">156h</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black text-xs font-bold shadow-lg"
                    asChild
                  >
                    <Link to="/subcontractor-dashboard/ai-assistant">
                      <Zap className="w-3 h-3 mr-2" />
                      Open AI Copilot
                    </Link>
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="text-xs border-gray-600 text-gray-300 hover:bg-gray-800">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Optimize
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs border-gray-600 text-gray-300 hover:bg-gray-800">
                      <Target className="w-3 h-3 mr-1" />
                      Find Leads
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
                  <span className="text-sm font-bold">4.9</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Rating</p>
              </div>
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center justify-center gap-1 text-blue-600 mb-1">
                  <Award className="w-3 h-3" />
                  <span className="text-sm font-bold">24%</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Win Rate</p>
              </div>
              <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <div className="flex items-center justify-center gap-1 text-orange-600 mb-1">
                  <DollarSign className="w-3 h-3" />
                  <span className="text-sm font-bold">450k</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">YTD</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SubcontractorSidebar;