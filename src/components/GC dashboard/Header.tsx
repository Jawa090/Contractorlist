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
  Briefcase,
  Zap
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const [isDark, setIsDark] = useState(false);

  // Enhanced real-time stats for GC
  const [stats] = useState({
    activeProjects: 24,
    newMessages: 8,
    totalRevenue: 12500000,
    monthlyGrowth: 15.2,
    teamCapacity: 87,
    unreadNotifications: 6
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </Button>

          {/* Live Status Indicator */}
          <div className="hidden md:flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Live Dashboard</span>
          </div>

          {/* Search */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search projects, bids, or trades..."
              className="pl-10 w-64 lg:w-80"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Enhanced Quick Stats */}
          <div className="hidden lg:flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2 px-3 py-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <Briefcase className="w-4 h-4 text-green-600" />
              <div>
                <span className="font-bold text-green-600">{stats.activeProjects}</span>
                <span className="text-gray-600 dark:text-gray-400 ml-1">Projects</span>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <DollarSign className="w-4 h-4 text-blue-600" />
              <div>
                <span className="font-bold text-blue-600">${(stats.totalRevenue / 1000000).toFixed(1)}M</span>
                <span className="text-gray-600 dark:text-gray-400 ml-1">Revenue</span>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <TrendingUp className="w-4 h-4 text-orange-600" />
              <div>
                <span className="font-bold text-orange-600">+{stats.monthlyGrowth}%</span>
                <span className="text-gray-600 dark:text-gray-400 ml-1">Growth</span>
              </div>
            </div>
          </div>

          {/* AI Assistant Quick Access */}
          <Button variant="ghost" size="sm" className="text-orange-600 hover:bg-orange-50 border border-orange-200 hidden sm:flex">
            <Zap className="w-4 h-4" />
          </Button>

          {/* Calendar */}
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <Calendar className="w-4 h-4" />
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="hidden sm:flex"
          >
            {isDark ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>

          {/* Enhanced Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-4 h-4" />
                {stats.unreadNotifications > 0 && (
                  <Badge className="absolute -top-1 -right-1 size-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center p-0">
                    {stats.unreadNotifications}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel className="flex items-center justify-between">
                Notifications
                <Badge className="bg-orange-100 text-orange-800">{stats.unreadNotifications} new</Badge>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-64 overflow-y-auto">
                <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer">
                  <div className="flex items-start justify-between w-full">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-sm font-semibold">New Project Bid</h4>
                        <div className="size-2 rounded-full bg-orange-500"></div>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">
                        Austin Medical Center project bid submitted successfully
                      </p>
                      <p className="text-xs text-gray-500">2 min ago</p>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer">
                  <div className="flex items-start justify-between w-full">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-sm font-semibold">Team Update</h4>
                        <div className="size-2 rounded-full bg-blue-500"></div>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">
                        Downtown Office project milestone completed
                      </p>
                      <p className="text-xs text-gray-500">15 min ago</p>
                    </div>
                  </div>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-center text-orange-600 font-medium">
                View All Notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Enhanced Messages */}
          <Button variant="ghost" size="sm" className="relative">
            <MessageSquare className="w-4 h-4" />
            {stats.newMessages > 0 && (
              <Badge className="absolute -top-1 -right-1 size-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center p-0">
                {stats.newMessages}
              </Badge>
            )}
          </Button>

          {/* Enhanced Profile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
                  <User className="w-5 h-5 text-black" />
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Acme Construction</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">General Contractor</p>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 p-2">
              <DropdownMenuLabel className="p-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
                    <User className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">Acme Construction</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">john@acmeconstruction.com</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600 font-medium">Active</span>
                    </div>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
                <User className="w-4 h-4 mr-3" />
                Company Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
                <Settings className="w-4 h-4 mr-3" />
                Account Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
                <Activity className="w-4 h-4 mr-3" />
                Business Analytics
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600 p-3 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
                <LogOut className="w-4 h-4 mr-3" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="sm:hidden mt-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search projects, bids..."
            className="pl-10 w-full"
          />
        </div>
      </div>

      {/* Mobile Stats */}
      <div className="lg:hidden mt-4 grid grid-cols-3 gap-3">
        <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <Briefcase className="w-4 h-4 text-green-600" />
          <div>
            <span className="font-bold text-green-600 text-sm">{stats.activeProjects}</span>
            <p className="text-xs text-gray-600 dark:text-gray-400">Projects</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <DollarSign className="w-4 h-4 text-blue-600" />
          <div>
            <span className="font-bold text-blue-600 text-sm">${(stats.totalRevenue / 1000000).toFixed(1)}M</span>
            <p className="text-xs text-gray-600 dark:text-gray-400">Revenue</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
          <TrendingUp className="w-4 h-4 text-orange-600" />
          <div>
            <span className="font-bold text-orange-600 text-sm">+{stats.monthlyGrowth}%</span>
            <p className="text-xs text-gray-600 dark:text-gray-400">Growth</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;