import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Bell, 
  Plus, 
  Menu,
  Moon,
  Sun,
  Settings,
  User,
  LogOut,
  HelpCircle
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';

interface HomeownerHeaderProps {
  onMenuClick: () => void;
}

const HomeownerHeader = ({ onMenuClick }: HomeownerHeaderProps) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [notifications] = useState(3); // Mock notification count

  return (
    <header className="h-16 flex items-center justify-between border-b bg-white/95 backdrop-blur-sm px-4 md:px-8 z-20 shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuClick}
          className="lg:hidden hover:bg-yellow-50"
        >
          <Menu className="w-5 h-5" />
        </Button>

        {/* Mobile Logo */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className="size-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="font-bold text-sm text-gray-900">ContractorsList</span>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4">
          <div className="relative w-full">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors ${
              searchFocused ? 'text-orange-500' : 'text-gray-400'
            }`} />
            <Input
              placeholder="Find contractors, services, or projects..."
              className={`pl-10 bg-gray-50 border-gray-200 focus:bg-white focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-all ${
                searchFocused ? 'shadow-sm' : ''
              }`}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Search Button - Mobile */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden hover:bg-yellow-50"
        >
          <Search className="w-5 h-5" />
        </Button>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="relative hover:bg-yellow-50"
            >
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 border-2 border-white text-white">
                  {notifications}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="flex items-center justify-between">
              Notifications
              <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                {notifications} new
              </Badge>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="space-y-1">
              <div className="p-3 hover:bg-yellow-50 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">New bid received</p>
                    <p className="text-xs text-gray-600">Elite Builders submitted a bid for Kitchen Renovation</p>
                    <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                  </div>
                </div>
              </div>
              <div className="p-3 hover:bg-yellow-50 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Project milestone completed</p>
                    <p className="text-xs text-gray-600">Demolition phase finished ahead of schedule</p>
                    <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                  </div>
                </div>
              </div>
              <div className="p-3 hover:bg-yellow-50 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Payment reminder</p>
                    <p className="text-xs text-gray-600">Next payment due for Backyard ADU project</p>
                    <p className="text-xs text-gray-400 mt-1">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-center justify-center text-orange-600 hover:text-orange-700">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="sm"
          className="hidden sm:flex hover:bg-yellow-50"
        >
          <Sun className="w-5 h-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute w-5 h-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>

        {/* Post Project Button */}
        <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white shadow-lg transition-all hover:shadow-xl font-semibold">
          <Plus className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Post Project</span>
          <span className="sm:hidden">Post</span>
        </Button>

        {/* User Avatar & Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0 hover:ring-2 hover:ring-orange-100">
              <div className="size-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 bg-cover bg-center border-2 border-white shadow-lg cursor-pointer flex items-center justify-center">
                <span className="text-white font-semibold text-sm">A</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Alex Johnson</p>
                <p className="text-xs leading-none text-gray-600">
                  alex.johnson@email.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Help & Support</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default HomeownerHeader;