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
  Crown,
  Sparkles
} from 'lucide-react';

interface EnhancedSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnhancedSidebar = ({ isOpen, onClose }: EnhancedSidebarProps) => {
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
          "group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 relative",
          isActive
            ? "bg-primary text-black shadow-lg shadow-primary/20"
            : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800/50 hover:shadow-sm"
        )}
      >
        <div className={cn(
          "flex items-center justify-center w-5 h-5 transition-colors",
          item.isPro && !isActive && "text-purple-500"
        )}>
          <item.icon className="w-5 h-5" />
        </div>
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
              "text-xs px-2 py-0.5 h-5",
              item.badge === 'Pro' && "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
              item.badge === 'New' && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
            )}
          >
            {item.badge}
          </Badge>
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
        "fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-300 ease-out flex flex-col shadow-xl lg:shadow-none",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-gray-200/50 dark:border-gray-700/50 h-20">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-gradient-to-br from-primary to-yellow-400 flex items-center justify-center text-black shadow-lg">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight text-gray-900 dark:text-white">
                ContractorsPro
              </h1>
              <div className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-purple-500" />
                <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                  Enterprise
                </span>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Navigation */}
        <div className="flex-1 flex flex-col gap-6 p-6 overflow-y-auto">
          {/* Main Navigation */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3">
              Dashboard
            </h3>
            <div className="space-y-1">
              {navigationItems.map((item) => renderNavItem(item))}
            </div>
          </div>

          {/* Business Tools */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3">
              Business Tools
            </h3>
            <div className="space-y-1">
              {businessItems.map((item) => renderNavItem(item))}
            </div>
          </div>

          {/* AI Features */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 px-3">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                AI Features
              </h3>
              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-xs px-2 py-0.5">
                Pro
              </Badge>
            </div>
            <div className="space-y-1">
              {aiItems.map((item) => renderNavItem(item))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="p-6 border-t border-gray-200/50 dark:border-gray-700/50 space-y-4">
          {/* Settings */}
          <div className="space-y-1">
            {bottomItems.map((item) => renderNavItem(item))}
          </div>

          {/* User profile */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors">
            <div className="size-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
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

          {/* Upgrade prompt */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200/50 dark:border-purple-700/50">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">
                AI Features
              </span>
            </div>
            <p className="text-xs text-purple-700 dark:text-purple-300 mb-3">
              Unlock advanced AI takeoff and copilot features
            </p>
            <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              View Pricing
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default EnhancedSidebar;