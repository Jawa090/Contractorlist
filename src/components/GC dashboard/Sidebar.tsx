import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  BarChart3,
  Building2,
  Users,
  MessageSquare,
  FileText,
  Calendar,
  Search,
  Gavel,
  Building,
  Megaphone,
  FolderOpen,
  Bot,
  Zap,
  Settings,
  HelpCircle,
  X,
  ChevronRight,
  ChevronLeft,
  Crown,
  Sparkles,
  Activity,
  DollarSign,
  TrendingUp,
  Star,
  Award,
  Target
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { 
      name: 'Overview', 
      href: '/gc-dashboard/overview', 
      icon: LayoutDashboard,
      badge: null,
      description: 'Dashboard home'
    },
    { 
      name: 'Analytics', 
      href: '/gc-dashboard/analytics', 
      icon: BarChart3,
      badge: null,
      description: 'Performance metrics'
    },
    { 
      name: 'Projects', 
      href: '/gc-dashboard/projects', 
      icon: Building2,
      badge: '24',
      description: 'Active projects'
    },
    { 
      name: 'Team', 
      href: '/gc-dashboard/team', 
      icon: Users,
      badge: null,
      description: 'Team management'
    },
    { 
      name: 'Communications', 
      href: '/gc-dashboard/communications', 
      icon: MessageSquare,
      badge: '8',
      description: 'Messages & updates'
    },
    { 
      name: 'Documents', 
      href: '/gc-dashboard/documents', 
      icon: FileText,
      badge: null,
      description: 'Project documents'
    },
    { 
      name: 'Calendar', 
      href: '/gc-dashboard/calendar', 
      icon: Calendar,
      badge: null,
      description: 'Schedule & meetings'
    },
  ];

  const businessItems = [
    { 
      name: 'Project Discovery', 
      href: '/gc-dashboard/project-discovery', 
      icon: Search,
      badge: 'New',
      description: 'Find opportunities'
    },
    { 
      name: 'Bid Board', 
      href: '/gc-dashboard/bid-board', 
      icon: Gavel,
      badge: '12',
      description: 'Active bids'
    },
    { 
      name: 'Directory', 
      href: '/gc-dashboard/directory', 
      icon: Building,
      badge: null,
      description: 'Contractor network'
    },
    { 
      name: 'Marketing', 
      href: '/gc-dashboard/marketing', 
      icon: Megaphone,
      badge: null,
      description: 'Promote services'
    },
    { 
      name: 'My Projects', 
      href: '/gc-dashboard/my-projects', 
      icon: FolderOpen,
      badge: null,
      description: 'Personal projects'
    },
  ];

  const aiItems = [
    { 
      name: 'AI Takeoff', 
      href: '/gc-dashboard/ai-takeoff', 
      icon: Bot,
      badge: 'Pro',
      description: 'Smart estimations',
      isPro: true
    },
    { 
      name: 'AI Copilot', 
      href: '/gc-dashboard/ai-copilot', 
      icon: Zap,
      badge: 'Pro',
      description: 'AI assistant',
      isPro: true
    },
  ];

  const bottomItems = [
    { 
      name: 'Settings', 
      href: '/gc-dashboard/settings', 
      icon: Settings,
      badge: null,
      description: 'Account settings'
    },
    { 
      name: 'Help & Support', 
      href: '/gc-dashboard/help', 
      icon: HelpCircle,
      badge: null,
      description: 'Get assistance'
    },
  ];

  const renderNavItem = (item: any) => {
    const isActive = location.pathname === item.href;
    return (
      <Link
        key={item.name}
        to={item.href}
        onClick={onClose}
        className={cn(
          "group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 relative",
          isActive
            ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg transform scale-[1.02]"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white",
          isCollapsed ? 'justify-center px-3' : ''
        )}
      >
        <div className={cn(
          "flex items-center justify-center w-5 h-5 transition-colors",
          item.isPro && !isActive && "text-purple-500"
        )}>
          <item.icon className="w-5 h-5" />
        </div>
        {!isCollapsed && (
          <>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="truncate">{item.name}</span>
                {item.isPro && (
                  <Crown className="w-3 h-3 text-purple-500" />
                )}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {item.description}
              </p>
            </div>
            {item.badge && (
              <Badge 
                variant={item.badge === 'Pro' ? 'default' : 'secondary'} 
                className={cn(
                  "text-xs px-2 py-1 font-semibold",
                  isActive && 'bg-black/20 text-black border-black/20',
                  item.badge === 'Pro' && !isActive && "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
                  item.badge === 'New' && !isActive && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
                  !isActive && !['Pro', 'New'].includes(item.badge) && "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                )}
              >
                {item.badge}
              </Badge>
            )}
          </>
        )}
        {isActive && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-black rounded-r-full" />
        )}
      </Link>
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:static inset-y-0 left-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-300 ease-out flex flex-col shadow-xl lg:shadow-none",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        isCollapsed ? "w-16" : "w-72"
      )}>
        {/* Enhanced Header */}
        <div className="p-6 flex items-center justify-between border-b border-gray-200/50 dark:border-gray-700/50 h-20 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black shadow-lg">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-lg font-black tracking-tight text-gray-900 dark:text-white">
                  Acme Construction
                </h1>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-gray-600 dark:text-gray-400">General Contractor</p>
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
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Enhanced Navigation */}
        <div className="flex-1 flex flex-col gap-6 p-6 overflow-y-auto">
          {/* Main Navigation */}
          <div className="space-y-2">
            {!isCollapsed && (
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3">
                Dashboard
              </h3>
            )}
            <div className="space-y-1">
              {navigationItems.map((item) => renderNavItem(item))}
            </div>
          </div>

          {/* Business Tools */}
          <div className="space-y-2">
            {!isCollapsed && (
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3">
                Business Tools
              </h3>
            )}
            <div className="space-y-1">
              {businessItems.map((item) => renderNavItem(item))}
            </div>
          </div>

          {/* AI Features */}
          <div className="space-y-2">
            {!isCollapsed && (
              <div className="flex items-center gap-2 px-3">
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  AI Features
                </h3>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-xs px-2 py-0.5">
                  Pro
                </Badge>
              </div>
            )}
            <div className="space-y-1">
              {aiItems.map((item) => renderNavItem(item))}
            </div>
          </div>
        </div>

        {/* Enhanced Bottom section */}
        <div className="p-6 border-t border-gray-200/50 dark:border-gray-700/50 space-y-4">
          {/* Settings */}
          <div className="space-y-1">
            {bottomItems.map((item) => renderNavItem(item))}
          </div>

          {!isCollapsed && (
            <>
              {/* User profile */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
                  <span className="text-sm font-bold">AC</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                      Acme Construction
                    </span>
                    <Crown className="w-3 h-3 text-purple-500" />
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Enterprise Plan
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>

              {/* Enhanced AI Assistant Footer */}
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
                          Pro
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
                      <span className="font-bold text-green-400">+15.2%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-3 h-3 text-blue-400" />
                        <span className="text-gray-300">Total Revenue</span>
                      </div>
                      <span className="font-bold text-blue-400">$12.5M</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-3 h-3 text-purple-400" />
                        <span className="text-gray-300">Active Projects</span>
                      </div>
                      <span className="font-bold text-purple-400">24</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button 
                      size="sm" 
                      className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black text-xs font-bold shadow-lg"
                    >
                      <Zap className="w-3 h-3 mr-2" />
                      Open AI Copilot
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
              <div className="grid grid-cols-3 gap-2 text-center">
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
                    <span className="text-sm font-bold">87%</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Capacity</p>
                </div>
                <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="flex items-center justify-center gap-1 text-orange-600 mb-1">
                    <Building2 className="w-3 h-3" />
                    <span className="text-sm font-bold">24</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Projects</p>
                </div>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;