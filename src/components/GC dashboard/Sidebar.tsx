import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Building2,
  MessageSquare,
  FolderOpen,
  FileText,
  Users,
  Search,
  Building,
  Settings,
  HelpCircle,
  X,
  ChevronRight,
  ChevronLeft,
  LayoutDashboard,
  Gavel,
  Sparkles,
  Truck,
  PhoneCall
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const { toast } = useToast();
  const navigate = useNavigate();


  const navGroups = [
    {
      label: 'Main',
      items: [
        { name: 'Overview', href: '/gc-dashboard/overview', icon: LayoutDashboard },
        {
          name: 'Projects',
          href: '/gc-dashboard/my-projects',
          icon: FolderOpen,
          subItems: [
            { name: 'Teams', href: '/gc-dashboard/my-projects?tab=team', icon: Users },
            { name: 'Documents', href: '/gc-dashboard/my-projects?tab=documents', icon: FileText },
          ]
        },
      ]
    },
    {
      label: 'Management',
      items: [
        { name: 'Bids', href: '/gc-dashboard/bids', icon: Gavel },
        { name: 'Messages', href: '/gc-dashboard/communications', icon: MessageSquare },
      ]
    },
    {
      label: 'Platform',
      items: [
        { name: 'Project Finder', href: '/gc-dashboard/project-discovery', icon: Search },
        {
          name: 'Directory',
          href: '/gc-dashboard/directory',
          icon: Building,
          subItems: [
            { name: 'Sub Contractors', href: '/gc-dashboard/directory?tab=sc', icon: Building2 },
            { name: 'Suppliers', href: '/gc-dashboard/directory?tab=suppliers', icon: Truck },
          ]
        },
        { name: 'Marketplace', href: '/gc-dashboard/marketplace', icon: Sparkles },
      ]
    },
    {
      label: 'System',
      items: [
        { name: 'Talk to Sales', href: '#', icon: PhoneCall, onClick: () => toast({ title: "Sales Connection", description: "Request received. A dedicated representative will reach out shortly." }) },
        { name: 'Settings', href: '/gc-dashboard/settings', icon: Settings },
      ]
    }
  ];

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
        "fixed lg:static inset-y-0 left-0 z-50 bg-gray-50 dark:bg-[#0f1115] border-r border-gray-200 dark:border-white/5 transform transition-all duration-500 ease-out flex flex-col",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        isCollapsed ? "w-20" : "w-72"
      )}>
        {/* Header */}
        <div className={cn(
          "flex items-center justify-between border-b border-gray-200 dark:border-gray-800 h-20 transition-all duration-300",
          isCollapsed ? "justify-center px-2" : "px-6"
        )}>
          {isCollapsed ? (
            <div className="w-10 h-10 rounded-xl bg-yellow-400 dark:bg-yellow-500 flex items-center justify-center text-gray-900 shadow-md shrink-0 mb-2 mt-2">
              <Building2 className="w-6 h-6" />
            </div>
          ) : (
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-yellow-400 dark:bg-yellow-500 flex items-center justify-center text-gray-900 shadow-md shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white truncate">
                  GC Dashboard
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400 truncate font-bold">General Contractor</p>
              </div>
            </div>
          )}

          <div className={cn("flex items-center gap-1", isCollapsed ? "absolute top-1/2 -translate-y-1/2 -right-3 z-50 pointer-events-auto" : "")}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={cn(
                "hidden lg:flex p-1.5 transition-all duration-300",
                isCollapsed ? "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm hover:bg-gray-100 h-6 w-6 items-center justify-center p-0" : ""
              )}
            >
              {isCollapsed ? (
                <ChevronRight className="w-3 h-3" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </Button>

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

        {/* Navigation */}
        <div className={cn("flex-1 flex flex-col gap-6 overflow-y-auto overflow-x-hidden p-4 scrollbar-hide", isCollapsed ? "items-center" : "")}>
          {navGroups.map((group) => (
            <div key={group.label} className="space-y-1 w-full">
              {!isCollapsed && (
                <h3 className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-600 mb-2">
                  {group.label}
                </h3>
              )}
              {group.items.map((item: any) => {
                const isActive = location.pathname === item.href;
                const hasSubItems = item.subItems && item.subItems.length > 0;

                return (
                  <div key={item.name} className="space-y-1">
                    <Link
                      to={item.href}
                      onClick={(e: any) => {
                        if (item.onClick) {
                          e.preventDefault();
                          item.onClick();
                        }
                        if (!hasSubItems) {
                          onClose();
                        }
                      }}
                      className={cn(
                        "group flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 relative",
                        isActive
                          ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/20"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white",
                        isCollapsed ? 'justify-center px-0 h-10 w-10 mx-auto' : ''
                      )}
                      title={isCollapsed ? item.name : ''}
                    >
                      <item.icon className={cn(
                        "w-5 h-5 transition-all duration-200 shrink-0",
                        isActive && "scale-110"
                      )} />
                      {!isCollapsed && (
                        <span className="truncate">{item.name}</span>
                      )}
                      {isActive && !isCollapsed && (
                        <div className="absolute left-0 w-1 h-4 bg-black rounded-r-full" />
                      )}
                      {!isCollapsed && hasSubItems && (
                        <ChevronRight className={cn(
                          "w-4 h-4 ml-auto transition-transform duration-200 text-gray-400",
                          isActive && "rotate-90 text-black"
                        )} />
                      )}
                    </Link>

                    {!isCollapsed && hasSubItems && (isActive || location.pathname.startsWith(item.href)) && (
                      <div className="ml-9 space-y-1 mt-1 border-l border-gray-200 dark:border-white/5 pl-2 animate-in slide-in-from-left-2 duration-200">
                        {item.subItems.map((subItem: any) => {
                          const isSubActive = (location.pathname + location.search) === subItem.href;
                          return (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={onClose}
                              className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-bold transition-all duration-200",
                                isSubActive
                                  ? "bg-yellow-400/10 text-yellow-600 dark:text-yellow-400"
                                  : "text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                              )}
                            >
                              <subItem.icon className="w-4 h-4" />
                              <span>{subItem.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}

        </div>
      </aside>
    </>
  );
};

export default Sidebar;
