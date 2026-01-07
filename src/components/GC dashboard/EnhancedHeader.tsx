import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  Bell,
  Menu,
  Sun,
  Moon,
  User,
  Settings,
  LogOut,
  MessageSquare,
  Calendar,
  DollarSign,
  Activity,
  TrendingUp,
  Shield,
  ChevronDown,
  Plus,
  Building,
  FileText,
  Users,
  Crown,
  Sparkles
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface EnhancedHeaderProps {
  onMenuClick: () => void;
}

const EnhancedHeader = ({ onMenuClick }: EnhancedHeaderProps) => {
  const [isDark, setIsDark] = useState(false);

  // Real-time stats
  const [systemStatus] = useState({
    activeBids: 12,
    newMessages: 8,
    todayRevenue: 125000,
    weeklyGrowth: 18.5,
    activeProjects: 24,
    unreadNotifications: 15
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-3 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="lg:hidden hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Menu className="w-5 h-5" />
          </Button>

          {/* Company Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-yellow-400 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-black font-bold text-sm">GC</span>
            </div>
            <div className="hidden md:block">
              <h1 className="font-bold text-lg text-gray-900 dark:text-white">
                ContractorsPro
              </h1>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600 dark:text-gray-400">Enterprise System</span>
                <Crown className="w-3 h-3 text-purple-500" />
              </div>
            </div>
          </div>

          {/* Enhanced Search */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
            <Input
              placeholder="Search projects, bids, teams, AI insights..."
              className="pl-10 w-80 lg:w-96 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <kbd className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">⌘K</kbd>
            </div>
          </div>
        </div>

        {/* Center Section - Key Metrics */}
        <div className="hidden xl:flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
            <TrendingUp className="w-4 h-4" />
            <div>
              <span className="font-semibold">{systemStatus.activeBids}</span>
              <span className="text-gray-500 dark:text-gray-400 ml-1">Active Bids</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <DollarSign className="w-4 h-4" />
            <div>
              <span className="font-semibold">${systemStatus.todayRevenue.toLocaleString()}</span>
              <span className="text-gray-500 dark:text-gray-400 ml-1">Today</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
            <Activity className="w-4 h-4" />
            <div>
              <span className="font-semibold">+{systemStatus.weeklyGrowth}%</span>
              <span className="text-gray-500 dark:text-gray-400 ml-1">Growth</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="hidden sm:flex hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative hover:bg-gray-100 dark:hover:bg-gray-800">
                <Bell className="w-4 h-4" />
                {systemStatus.unreadNotifications > 0 && (
                  <Badge className="absolute -top-1 -right-1 size-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center p-0">
                    {systemStatus.unreadNotifications > 99 ? '99+' : systemStatus.unreadNotifications}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel className="flex items-center justify-between">
                <span>Notifications</span>
                <Badge variant="outline">{systemStatus.unreadNotifications} new</Badge>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              <div className="max-h-96 overflow-y-auto">
                <DropdownMenuItem className="flex items-start gap-3 p-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Budget Alert</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Industrial Warehouse project exceeding budget by 15%
                    </p>
                    <p className="text-xs text-gray-500 mt-1">5 minutes ago</p>
                  </div>
                </DropdownMenuItem>
                
                <DropdownMenuItem className="flex items-start gap-3 p-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">AI Insight Available</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      New optimization opportunity detected for Medical Center
                    </p>
                    <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                  </div>
                </DropdownMenuItem>
                
                <DropdownMenuItem className="flex items-start gap-3 p-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">New Bid Opportunity</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      3 new high-value projects available for bidding
                    </p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                  </div>
                </DropdownMenuItem>
              </div>
              
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-center text-blue-600 dark:text-blue-400">
                View All Notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Messages */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative hover:bg-gray-100 dark:hover:bg-gray-800">
                <MessageSquare className="w-4 h-4" />
                {systemStatus.newMessages > 0 && (
                  <Badge className="absolute -top-1 -right-1 size-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center p-0">
                    {systemStatus.newMessages}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel className="flex items-center justify-between">
                <span>Messages</span>
                <Badge variant="outline">{systemStatus.newMessages} new</Badge>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              <div className="max-h-96 overflow-y-auto">
                <DropdownMenuItem className="flex items-start gap-3 p-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-blue-700 dark:text-blue-300">SJ</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Sarah Johnson</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Updated the project timeline for Medical Center...
                    </p>
                    <p className="text-xs text-gray-500 mt-1">10 minutes ago</p>
                  </div>
                </DropdownMenuItem>
                
                <DropdownMenuItem className="flex items-start gap-3 p-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-green-700 dark:text-green-300">MD</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Mike Davis</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      HVAC installation completed ahead of schedule
                    </p>
                    <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                  </div>
                </DropdownMenuItem>
              </div>
              
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-center text-blue-600 dark:text-blue-400">
                View All Messages
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Profile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                <div className="size-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Acme Construction</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Enterprise Plan</p>
                </div>
                <ChevronDown className="w-3 h-3 text-gray-400 dark:text-gray-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Acme Construction</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">john@acmeconstruction.com</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600 dark:text-green-400">Online</span>
                      <Crown className="w-3 h-3 text-purple-500" />
                    </div>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              <DropdownMenuItem>
                <User className="w-4 h-4 mr-3" />
                My Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="w-4 h-4 mr-3" />
                Account Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Activity className="w-4 h-4 mr-3" />
                Performance Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Shield className="w-4 h-4 mr-3" />
                Security Settings
              </DropdownMenuItem>
              
              <DropdownMenuSeparator />
              
              <DropdownMenuItem>
                <Sparkles className="w-4 h-4 mr-3 text-purple-500" />
                AI Features
              </DropdownMenuItem>
              
              <DropdownMenuSeparator />
              
              <DropdownMenuItem className="text-red-600 dark:text-red-400">
                <LogOut className="w-4 h-4 mr-3" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Quick Create Button */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-gradient-to-r from-primary to-yellow-400 hover:from-yellow-400 hover:to-primary text-black shadow-lg">
                <Plus className="w-4 h-4 mr-2" />
                Create
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <Building className="w-4 h-4 mr-3" />
                New Project
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="w-4 h-4 mr-3" />
                New Bid
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Users className="w-4 h-4 mr-3" />
                Add Team Member
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Calendar className="w-4 h-4 mr-3" />
                Schedule Meeting
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-purple-600 dark:text-purple-400">
                <Sparkles className="w-4 h-4 mr-3" />
                AI Takeoff
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="sm:hidden mt-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
          <Input
            placeholder="Search projects, bids..."
            className="pl-10 w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
          />
        </div>
      </div>

      {/* Mobile Stats */}
      <div className="xl:hidden mt-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
          <TrendingUp className="w-4 h-4" />
          <span className="font-semibold">{systemStatus.activeBids}</span>
          <span className="text-gray-600 dark:text-gray-400">Bids</span>
        </div>
        <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
          <DollarSign className="w-4 h-4" />
          <span className="font-semibold">${systemStatus.todayRevenue.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400">
          <Activity className="w-4 h-4" />
          <span className="font-semibold">+{systemStatus.weeklyGrowth}%</span>
        </div>
      </div>
    </header>
  );
};

export default EnhancedHeader;