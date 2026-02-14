import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FolderKanban,
  CalendarDays,
  DollarSign,
  HardHat,
  ClipboardList,
  BarChart3,
  Receipt,
  ArrowLeftRight,
  MessageSquare,
  Camera,
  Scale,
  AlertTriangle,
  FileCheck,
  Landmark,
  ChevronLeft,
  ChevronRight,
  Settings,
  HelpCircle,
  Search,
  FileSignature,
  Gavel,
  Package,
  Wrench,
  Users,
  Lock as LockIcon,
} from "lucide-react";

interface NavItem {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  newTab?: boolean;
  subItems?: NavItem[];
}

interface NavSection {
  label: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    label: "Main",
    items: [
      { to: "/subcontractor-dashboard", icon: LayoutDashboard, label: "Dashboard" },
    ],
  },
  {
    label: "Project Management",
    items: [
      {
        to: "/project-management",
        icon: ClipboardList,
        label: "Project Management",
        subItems: [
          { to: "/subcontractor-dashboard/directory", icon: Users, label: "Directory" },
          { to: "/subcontractor-dashboard/project-discovery", icon: Search, label: "Project Discovery" },
          { to: "/subcontractor-dashboard/projects", icon: FolderKanban, label: "My Projects" },
          { to: "/subcontractor-dashboard/bids", icon: Gavel, label: "Bid Management" },
          { to: "/subcontractor-dashboard/schedule", icon: CalendarDays, label: "Schedule" },
          { to: "/subcontractor-dashboard/daily-logs", icon: ClipboardList, label: "Daily Log" },
          { to: "/subcontractor-dashboard/rfi", icon: FileSignature, label: "RFIs" },
          { to: "/subcontractor-dashboard/photos", icon: Camera, label: "Photos" },
          { to: "/subcontractor-dashboard/resources", icon: Package, label: "Resource Management" },
          { to: "/subcontractor-dashboard/analytics", icon: BarChart3, label: "Analytics" },
          { to: "/subcontractor-dashboard/financials", icon: DollarSign, label: "Budget" },
          { to: "/subcontractor-dashboard/billing", icon: Receipt, label: "Pay Applications" },
          { to: "/subcontractor-dashboard/change-orders", icon: ArrowLeftRight, label: "Change Events" },
          { to: "/subcontractor-dashboard/signature-history", icon: FileCheck, label: "Signatures" },
          { to: "/subcontractor-dashboard/liens", icon: Scale, label: "Commitments" },
          { to: "/subcontractor-dashboard/safety", icon: HardHat, label: "Incidents" },
          { to: "/subcontractor-dashboard/insurance", icon: AlertTriangle, label: "Insurances" },
          { to: "/subcontractor-dashboard/payroll", icon: Landmark, label: "Certified Payroll" },
        ],
      },
    ],
  },
  {
    label: "Network",
    items: [
      { to: "/subcontractor-dashboard/communications", icon: MessageSquare, label: "Communications" },
    ],
  },
  {
    label: "Marketplace",
    items: [
      { to: "/subcontractor-dashboard/products", icon: Package, label: "Products" },
      { to: "/subcontractor-dashboard/services", icon: Wrench, label: "Services" },
    ],
  },
];

export default function AppSidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [pmExpanded, setPmExpanded] = useState(false);

  return (
    <aside
      className={cn(
        "flex flex-col h-screen bg-sidebar border-r border-sidebar-border transition-all duration-200",
        collapsed ? "w-16" : "w-70"
      )}
    >
      {/* Logo */}
      <div className={cn("flex items-center h-14 px-4 border-b border-sidebar-border", collapsed && "justify-center px-2")}>
        {collapsed ? (
          <span className="text-primary font-black text-xl tracking-tighter">SC</span>
        ) : (
          <div className="flex flex-col">
            <p className="text-sm font-black text-white uppercase tracking-tight">ContractorsList</p>
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest -mt-0.5">Subcontractor Dashboard</p>
          </div>
        )}
      </div>

      {/* Search */}
      {!collapsed && (
        <div className="px-3 py-3 border-b border-sidebar-border">
          <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-sidebar-accent/50 text-sidebar-foreground text-sm border border-sidebar-border">
            <Search className="w-4 h-4 text-sidebar-foreground/40" />
            <span>Search</span>
            <span className="ml-auto text-xs opacity-60">⌘K</span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-2">
        {navSections.map((section) => (
          <div key={section.label} className="mb-2">
            {!collapsed && (
              <p className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-sidebar-foreground/60">
                {section.label}
              </p>
            )}
            <div className="space-y-0.5 px-2">
              {section.items.map((item) => {
                const isDashboard = item.to === "/gc-dashboard" || item.to === "/subcontractor-dashboard";
                const isActive = isDashboard
                  ? location.pathname === item.to
                  : location.pathname === item.to || location.pathname.startsWith(item.to + "/");
                const hasSubItems = item.subItems && item.subItems.length > 0;
                const isPm = item.label === "Project Management";

                return (
                  <div key={item.label} className="flex flex-col">
                    {hasSubItems ? (
                      <button
                        onClick={() => isPm && setPmExpanded(!pmExpanded)}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full text-left",
                          isActive && !pmExpanded
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                          collapsed && "justify-center px-2"
                        )}
                      >
                        <item.icon className="w-4 h-4 shrink-0" />
                        {!collapsed && (
                          <>
                            <span className="flex-1 whitespace-nowrap truncate">{item.label}</span>
                            {pmExpanded ? (
                              <ChevronDown className="w-3 h-3 opacity-60 shrink-0" />
                            ) : (
                              <ChevronRight className="w-3 h-3 opacity-60 shrink-0" />
                            )}
                          </>
                        )}
                      </button>
                    ) : (
                      <Link
                        to={item.to}
                        target={item.newTab ? "_blank" : undefined}
                        rel={item.newTab ? "noopener noreferrer" : undefined}
                        title={collapsed ? item.label : undefined}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                          isActive
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                          collapsed && "justify-center px-2"
                        )}
                      >
                        <item.icon className="w-4 h-4 shrink-0" />
                        {!collapsed && <span className="whitespace-nowrap truncate">{item.label}</span>}
                      </Link>
                    )}

                    {hasSubItems && pmExpanded && !collapsed && (
                      <div className="mt-1 ml-4 border-l border-sidebar-border space-y-0.5">
                        {item.subItems?.map((subItem) => {
                          const isSubActive = location.pathname === subItem.to;
                          return (
                            <Link
                              key={subItem.to}
                              to={subItem.to}
                              className={cn(
                                "flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ml-2",
                                isSubActive
                                  ? "text-primary bg-primary/10"
                                  : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                              )}
                            >
                              <subItem.icon className="w-3 h-3 shrink-0" />
                              <span>{subItem.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      < div className="border-t border-sidebar-border p-2" >
        {!collapsed && (
          <div className="space-y-0.5 mb-2">
            <Link to="/subcontractor-dashboard/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </Link>
            <Link to="/subcontractor-dashboard/customer-support" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
              <HelpCircle className="w-4 h-4" />
              <span>Customer Support</span>
            </Link>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 py-2 text-xs text-sidebar-foreground/40 hover:text-sidebar-foreground transition-colors"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <><ChevronLeft className="w-4 h-4" /><span>Collapse</span></>}
        </button>
      </div>
    </aside>
  );
}
