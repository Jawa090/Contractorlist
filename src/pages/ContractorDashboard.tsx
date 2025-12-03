import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LayoutDashboard, Users, Briefcase, Calculator, ShoppingCart,
  MessageSquare, BarChart3, Settings, CreditCard, HelpCircle,
  LogOut, Bell, Search, Menu, X, Building, Layout, Megaphone, Bot,
  DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight, Target, MapPin,
  Zap, Upload, FileText, Plus, Filter, Eye, Send, Calendar, Edit, Download,
  Package, Star, CheckCircle, Clock, Activity, Award, ChevronDown, Phone, Mail,
  LayoutGrid, List
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
// Import Dashboard Components
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import LeadsManagement from "@/components/dashboard/LeadsManagement";
import Projects from "@/components/dashboard/Projects";
import AITakeoff from "@/components/dashboard/AITakeoff";
import MaterialPricing from "@/components/dashboard/MaterialPricing";
import Messages from "@/components/dashboard/Messages";
import AnalyticsReports from "@/components/dashboard/AnalyticsReports";
import ProfileSettings from "@/components/dashboard/ProfileSettings";
import SubscriptionBilling from "@/components/dashboard/SubscriptionBilling";
import SupportCenter from "@/components/dashboard/SupportCenter";
import BusinessDirectory from "@/components/dashboard/BusinessDirectory";
import CostEstimation from "@/components/dashboard/CostEstimation";
import Marketing from "@/components/dashboard/Marketing";
import AIChatbot from "@/components/dashboard/AIChatbot";
import AIAssistant from "@/components/dashboard/AIAssistant";
import WebsiteDesign from "@/components/dashboard/WebsiteDesign";
import SettingsPage from "@/components/dashboard/Settings";
import { KanbanBoard, ProjectCard, LeadCard } from "@/components/dashboard/KanbanBoard";

const ContractorDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [projectView, setProjectView] = useState("kanban");
  const [leadView, setLeadView] = useState("kanban");

  const notifications = [
    { id: 1, title: "New Lead Match", message: "A new lead matches your profile: Kitchen Renovation in Downtown.", time: "10 min ago", unread: true },
    { id: 2, title: "Project Update", message: "Johnson Residence project status updated to 'In Progress'.", time: "1 hour ago", unread: true },
    { id: 3, title: "Message Received", message: "New message from Sarah Johnson regarding materials.", time: "2 hours ago", unread: false },
    { id: 4, title: "System Alert", message: "Maintenance scheduled for tonight at 2 AM EST.", time: "5 hours ago", unread: false },
  ];

  const businessDirectoryData = [
    { id: 1, name: "John Doe Construction", location: "123 Main St, New York, NY 10001", specialty: "General Contracting", services: ["General Contracting", "Renovations"], contact: { email: "john.doe@email.com", phone: "(212) 555-0123" }, rating: 4.9, reviews: 124, logo: "JD" },
    { id: 2, name: "Smith's Roofing", location: "456 Oak Ave, Los Angeles, CA 90001", specialty: "Roofing", services: ["Roofing", "Repairs", "Installation"], contact: { email: "jane.smith@email.com", phone: "(310) 555-0145" }, rating: 4.8, reviews: 98, logo: "SR" },
    { id: 3, name: "Johnson & Sons Plumbing", location: "789 Pine Rd, Chicago, IL 60601", specialty: "Plumbing", services: ["Plumbing", "Emergency"], contact: { email: "bob.j@email.com", phone: "(312) 555-0187" }, rating: 4.7, reviews: 75, logo: "JS" },
    { id: 4, name: "Emily's Electrical", location: "101 Maple St, Houston, TX 77001", specialty: "Electrical", services: ["Electrical", "Wiring", "Lighting"], contact: { email: "emily.e@email.com", phone: "(713) 555-0165" }, rating: 5.0, reviews: 55, logo: "EE" },
    { id: 5, name: "Green Scapes Landscaping", location: "202 Birch Ln, Seattle, WA 98101", specialty: "Landscaping", services: ["Landscaping", "Design", "Maintenance"], contact: { email: "info@greenscapes.com", phone: "(206) 555-0199" }, rating: 4.6, reviews: 42, logo: "GS" },
  ];

  const stats = [
    { title: "New Leads", value: "12", change: "+3", trend: "up", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Active Projects", value: "8", change: "+2", trend: "up", icon: Briefcase, color: "text-green-600", bg: "bg-green-50" },
    { title: "Monthly Revenue", value: "$45,200", change: "+15%", trend: "up", icon: DollarSign, color: "text-yellow-600", bg: "bg-yellow-50" },
    { title: "Conversion Rate", value: "68%", change: "+5%", trend: "up", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" }
  ];

  const [recentLeads, setRecentLeads] = useState([
    { id: 1, name: "Kitchen Renovation", client: "Sarah Johnson", email: "sarah.j@email.com", phone: "(555) 123-4567", budget: "$25,000", score: 95, status: "Hot", date: "2024-11-08", location: "Downtown, NY" },
    { id: 2, name: "Bathroom Remodel", client: "Mike Chen", email: "mike.c@email.com", phone: "(555) 234-5678", budget: "$15,000", score: 82, status: "Warm", date: "2024-11-07", location: "Brooklyn, NY" },
    { id: 3, name: "Deck Installation", client: "Lisa Brown", email: "lisa.b@email.com", phone: "(555) 345-6789", budget: "$8,000", score: 71, status: "Cold", date: "2024-11-06", location: "Queens, NY" },
    { id: 4, name: "Full Home Renovation", client: "David Wilson", email: "david.w@email.com", phone: "(555) 456-7890", budget: "$85,000", score: 98, status: "Hot", date: "2024-11-09", location: "Manhattan, NY" },
    { id: 5, name: "Basement Finishing", client: "Emma Davis", email: "emma.d@email.com", phone: "(555) 567-8901", budget: "$32,000", score: 88, status: "Warm", date: "2024-11-05", location: "Bronx, NY" }
  ]);

  const [activeProjects, setActiveProjects] = useState([
    { id: 1, name: "Modern Kitchen Remodel", client: "Johnson Residence", progress: 75, deadline: "Dec 15, 2024", budget: "$25,000", spent: "$18,750", status: "On Track", team: 4, image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&auto=format&fit=crop&q=60" },
    { id: 2, name: "Master Bath Renovation", client: "Chen Family", progress: 45, deadline: "Jan 20, 2025", budget: "$15,000", spent: "$6,750", status: "On Track", team: 3, image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&auto=format&fit=crop&q=60" },
    { id: 3, name: "Outdoor Deck Build", client: "Brown House", progress: 90, deadline: "Dec 10, 2024", budget: "$8,000", spent: "$7,200", status: "Ahead", team: 2, image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?w=800&auto=format&fit=crop&q=60" },
    { id: 4, name: "Full Home Renovation", client: "Wilson Estate", progress: 30, deadline: "Mar 15, 2025", budget: "$85,000", spent: "$25,500", status: "On Track", team: 8, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=60" },
    { id: 5, name: "Basement Finishing", client: "Davis Home", progress: 60, deadline: "Feb 28, 2025", budget: "$32,000", spent: "$19,200", status: "On Track", team: 5, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=60" }
  ]);

  const messages = [
    { id: 1, from: "Sarah Johnson", subject: "Kitchen Design Approval", preview: "I love the new design! Can we proceed with...", time: "2 hours ago", unread: true, avatar: "SJ" },
    { id: 2, from: "Mike Chen", subject: "Material Selection", preview: "I've reviewed the tile options and I prefer...", time: "5 hours ago", unread: true, avatar: "MC" },
    { id: 3, from: "Lisa Brown", subject: "Project Timeline", preview: "When can we schedule the final walkthrough?", time: "1 day ago", unread: false, avatar: "LB" },
    { id: 4, from: "David Wilson", subject: "Budget Discussion", preview: "I'd like to discuss some additional features...", time: "2 days ago", unread: false, avatar: "DW" }
  ];

  const materials = [
    { id: 1, name: "Premium Hardwood Flooring", category: "Flooring", supplier: "BuildMart", price: "$8.50/sqft", stock: "In Stock", rating: 4.8 },
    { id: 2, name: "Granite Countertop", category: "Kitchen", supplier: "Stone World", price: "$65/sqft", stock: "In Stock", rating: 4.9 },
    { id: 3, name: "Ceramic Tile - Porcelain", category: "Bathroom", supplier: "Tile Pro", price: "$4.25/sqft", stock: "Limited", rating: 4.7 },
    { id: 4, name: "Composite Decking", category: "Outdoor", supplier: "Deck Supply Co", price: "$12/sqft", stock: "In Stock", rating: 4.6 },
    { id: 5, name: "LED Recessed Lighting", category: "Electrical", supplier: "Light House", price: "$45/unit", stock: "In Stock", rating: 4.8 }
  ];

  const menuItems = [
    { id: "overview", label: "Dashboard", icon: BarChart3 },
    { id: "directory", label: "Business Directory", icon: Building },
    { id: "leads", label: "Leads Management", icon: Users },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "takeoff", label: "AI Takeoff & Estimation", icon: Calculator },
    { id: "materials", label: "Material Pricing", icon: ShoppingCart },
    { id: "messages", label: "Messages", icon: MessageSquare },
    { id: "analytics", label: "Analytics & Reports", icon: BarChart3 },
    { id: "profile", label: "Profile Settings", icon: Settings },
    { id: "billing", label: "Subscription & Billing", icon: CreditCard },
    { id: "support", label: "Support", icon: HelpCircle }
  ];

  const handleAction = (action: string, item?: any) => {
    const itemName = item?.name || item?.client || item?.title || '';
    const description = itemName ? `${action} for ${itemName}` : `${action} completed successfully`;
    
    toast({
      title: "Action Performed",
      description: description,
      duration: 3000,
    });
    
    // Log action for debugging
    console.log(`Action: ${action}`, item);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#0F172A] shadow-2xl fixed h-full overflow-y-auto flex flex-col border-r border-gray-800">
        <div className="p-6 flex items-center gap-3 border-b border-gray-800">
          <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-yellow-500/20">
            <Building className="w-6 h-6 text-black" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white leading-tight tracking-wide">CONTRACTOR<span className="text-yellow-500">LIST</span></h2>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">Enterprise Suite</p>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-6 overflow-y-auto pb-6">
          {/* Main Group */}
          <div className="space-y-1">
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${activeTab === "overview"
                ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
            >
              <BarChart3 className={`w-5 h-5 mr-3 transition-colors ${activeTab === "overview" ? "text-black" : "text-gray-500 group-hover:text-white"}`} />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("directory")}
              className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${activeTab === "directory"
                ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
            >
              <Building className={`w-5 h-5 mr-3 transition-colors ${activeTab === "directory" ? "text-black" : "text-gray-500 group-hover:text-white"}`} />
              Business Directory
            </button>
          </div>

          {/* Products Group */}
          <div>
            <h3 className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2 mt-4">
              Products
            </h3>
            <div className="space-y-1">
              <button
                onClick={() => setActiveTab("takeoff")}
                className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${activeTab === "takeoff"
                  ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                <Calculator className={`w-5 h-5 mr-3 transition-colors ${activeTab === "takeoff" ? "text-black" : "text-gray-500 group-hover:text-white"}`} />
                AI Take off & Estimation
              </button>

              <button
                onClick={() => setActiveTab("assistant")}
                className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${activeTab === "assistant"
                  ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                <MessageSquare className={`w-5 h-5 mr-3 transition-colors ${activeTab === "assistant" ? "text-black" : "text-gray-500 group-hover:text-white"}`} />
                AI Assistant
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${activeTab === "projects"
                  ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                <Briefcase className={`w-5 h-5 mr-3 transition-colors ${activeTab === "projects" ? "text-black" : "text-gray-500 group-hover:text-white"}`} />
                Project Management
              </button>
              <button
                onClick={() => setActiveTab("leads")}
                className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${activeTab === "leads"
                  ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                <BarChart3 className={`w-5 h-5 mr-3 transition-colors ${activeTab === "leads" ? "text-black" : "text-gray-500 group-hover:text-white"}`} />
                Project Leads Mgt
              </button>
            </div>
          </div>

          {/* On Demand Services Group */}
          <div>
            <h3 className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2 mt-4">
              On Demand Services
            </h3>
            <div className="space-y-1">
              <button
                onClick={() => setActiveTab("cost-estimation")}
                className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${activeTab === "cost-estimation"
                  ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                <DollarSign className={`w-5 h-5 mr-3 transition-colors ${activeTab === "cost-estimation" ? "text-black" : "text-gray-500 group-hover:text-white"}`} />
                Cost Estimation & Take Off
              </button>
            </div>
          </div>

          {/* Services Group */}
          <div>
            <h3 className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2 mt-4">
              Services
            </h3>
            <div className="space-y-1">
              <button
                onClick={() => setActiveTab("website")}
                className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${activeTab === "website"
                  ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                <Layout className={`w-5 h-5 mr-3 transition-colors ${activeTab === "website" ? "text-black" : "text-gray-500 group-hover:text-white"}`} />
                Website Design
              </button>
              <button
                onClick={() => setActiveTab("marketing")}
                className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${activeTab === "marketing"
                  ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                <Megaphone className={`w-5 h-5 mr-3 transition-colors ${activeTab === "marketing" ? "text-black" : "text-gray-500 group-hover:text-white"}`} />
                Marketing
              </button>
              <button
                onClick={() => setActiveTab("chatbot")}
                className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${activeTab === "chatbot"
                  ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                <Bot className={`w-5 h-5 mr-3 transition-colors ${activeTab === "chatbot" ? "text-black" : "text-gray-500 group-hover:text-white"}`} />
                AI Chat Bot
              </button>
            </div>
          </div>
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-gray-800 space-y-1">
          <button
            onClick={() => setActiveTab("settings")}
            className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${activeTab === "settings"
              ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20'
              : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
          >
            <Settings className={`w-5 h-5 mr-3 transition-colors ${activeTab === "settings" ? "text-black" : "text-gray-500 group-hover:text-white"}`} />
            Settings
          </button>
          <button
            onClick={() => {
              toast({
                title: "Logging Out",
                description: "You are being logged out...",
                duration: 2000,
              });
              setTimeout(() => {
                window.location.href = '/login';
              }, 1500);
            }}
            className="w-full flex items-center px-3 py-2.5 text-sm font-medium text-gray-400 rounded-lg hover:bg-white/5 hover:text-white transition-all duration-200 group"
          >
            <LogOut className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col h-screen overflow-hidden bg-gray-50/50">
        {/* Top Header */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-8 shrink-0 relative z-20 shadow-sm">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">Dashboard</h1>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1.5 py-1 px-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider">System Live</span>
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                className="p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-600 rounded-full transition-colors relative"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white shadow-sm"></span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50">
                  <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                    <span className="text-xs text-blue-600 cursor-pointer hover:underline">Mark all as read</span>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className={`p-4 border-b hover:bg-gray-50 transition-colors cursor-pointer ${notification.unread ? 'bg-blue-50/50' : ''}`}>
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-sm font-semibold text-gray-900">{notification.title}</h4>
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </div>
                        <p className="text-xs text-gray-600 line-clamp-2">{notification.message}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 text-center border-t bg-gray-50">
                    <button className="text-sm text-blue-600 font-medium hover:underline">View All Notifications</button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 pl-4 border-l">
              <div className="w-9 h-9 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 leading-none">Alex Morgan</p>
                <p className="text-xs text-gray-500 mt-1">Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {/* OVERVIEW TAB */}
          {activeTab === "overview" && (
            <DashboardOverview setActiveTab={setActiveTab} />
          )}

          {/* LEADS MANAGEMENT TAB */}
          {activeTab === "leads" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Leads Management</h1>
                  <p className="text-sm text-gray-500 mt-1">AI-powered lead scoring and pipeline management</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-white border border-gray-200 rounded-lg p-1 flex shadow-sm">
                    <button
                      onClick={() => setLeadView("kanban")}
                      className={`p-2 rounded-md transition-all ${leadView === "kanban" ? "bg-gray-100 text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setLeadView("list")}
                      className={`p-2 rounded-md transition-all ${leadView === "list" ? "bg-gray-100 text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                  <Button className="bg-black hover:bg-gray-800 text-white shadow-lg shadow-black/20 transition-all">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Lead
                  </Button>
                </div>
              </div>

              {leadView === "kanban" ? (
                <KanbanBoard
                  items={recentLeads}
                  columns={[
                    { id: "Hot", title: "Hot Leads", color: "border-red-500" },
                    { id: "Warm", title: "Warm Leads", color: "border-yellow-500" },
                    { id: "Cold", title: "Cold Leads", color: "border-blue-500" }
                  ]}
                  onStatusChange={(id, status) => {
                    setRecentLeads(recentLeads.map(l => l.id === id ? { ...l, status } : l));
                  }}
                  renderCard={(lead) => <LeadCard lead={lead} />}
                />
              ) : (
                <Card>
                  <CardHeader className="border-b bg-white px-6 py-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-semibold text-gray-900">All Leads ({recentLeads.length})</CardTitle>
                      <div className="flex gap-3">
                        <div className="relative">
                          <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                          <Input
                            placeholder="Search leads..."
                            className="pl-9 w-64 h-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>
                        <Button variant="outline" size="sm" className="h-9">
                          <Filter className="w-4 h-4 mr-2" />
                          Filter
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                          <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Project</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Client</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Contact</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Budget</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">AI Score</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {recentLeads.map((lead) => (
                            <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4">
                                <div>
                                  <p className="font-semibold text-gray-900">{lead.name}</p>
                                  <p className="text-sm text-gray-500 flex items-center mt-1">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    {lead.location}
                                  </p>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <p className="font-medium text-gray-900">{lead.client}</p>
                                <p className="text-sm text-gray-500">{lead.date}</p>
                              </td>
                              <td className="px-6 py-4">
                                <div className="space-y-1">
                                  <p className="text-sm text-gray-600 flex items-center">
                                    <Mail className="w-3 h-3 mr-1" />
                                    {lead.email}
                                  </p>
                                  <p className="text-sm text-gray-600 flex items-center">
                                    <Phone className="w-3 h-3 mr-1" />
                                    {lead.phone}
                                  </p>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <p className="font-semibold text-gray-900">{lead.budget}</p>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                                    <div
                                      className={`h-2 rounded-full ${lead.score >= 90 ? 'bg-green-500' : lead.score >= 75 ? 'bg-blue-500' : 'bg-yellow-500'}`}
                                      style={{ width: `${lead.score}%` }}
                                    ></div>
                                  </div>
                                  <span className="font-semibold text-sm">{lead.score}%</span>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <Badge variant={lead.status === 'Hot' ? 'default' : lead.status === 'Warm' ? 'secondary' : 'outline'}>
                                  {lead.status}
                                </Badge>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex gap-2">
                                  <Button size="sm" variant="outline" onClick={() => handleAction("View", lead)}>
                                    <Eye className="w-4 h-4" />
                                  </Button>
                                  <Button size="sm" variant="outline" onClick={() => handleAction("Contact", lead)}>
                                    <Send className="w-4 h-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* PROJECTS TAB */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Active Projects</h1>
                  <p className="text-sm text-gray-500 mt-1">Monitor progress, budgets, and timelines</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-white border border-gray-200 rounded-lg p-1 flex shadow-sm">
                    <button
                      onClick={() => setProjectView("kanban")}
                      className={`p-2 rounded-md transition-all ${projectView === "kanban" ? "bg-gray-100 text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setProjectView("list")}
                      className={`p-2 rounded-md transition-all ${projectView === "list" ? "bg-gray-100 text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                  <Button className="bg-black hover:bg-gray-800 text-white shadow-lg shadow-black/20 transition-all">
                    <Plus className="w-4 h-4 mr-2" />
                    New Project
                  </Button>
                </div>
              </div>

              {projectView === "kanban" ? (
                <KanbanBoard
                  items={activeProjects}
                  columns={[
                    { id: "Ahead", title: "Ahead of Schedule", color: "border-green-500" },
                    { id: "On Track", title: "On Track", color: "border-blue-500" },
                    { id: "Delayed", title: "Delayed", color: "border-red-500" },
                    { id: "Completed", title: "Completed", color: "border-gray-500" }
                  ]}
                  onStatusChange={(id, status) => {
                    setActiveProjects(activeProjects.map(p => p.id === id ? { ...p, status } : p));
                  }}
                  renderCard={(project) => <ProjectCard project={project} />}
                />
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {activeProjects.map((project) => (
                    <Card key={project.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="border-b bg-white p-0">
                        <div className="relative h-32 bg-gray-100 group-hover:opacity-90 transition-opacity">
                          <img
                            src={project.image || "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=60"}
                            alt={project.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 right-3">
                            <Badge className={`${project.status === "Ahead" ? "bg-green-500" : project.status === "On Track" ? "bg-blue-500" : "bg-yellow-500"} text-white border-none shadow-sm`}>
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-6 pb-2">
                          <CardTitle className="text-lg font-bold text-gray-900">{project.name}</CardTitle>
                          <p className="text-sm text-gray-500 mt-1">{project.client}</p>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-gray-500 font-medium">Budget</p>
                            <p className="text-lg font-bold text-gray-900">{project.budget}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-medium">Spent</p>
                            <p className="text-lg font-bold text-gray-900">{project.spent}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-medium">Deadline</p>
                            <p className="text-sm font-semibold text-gray-700 flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {project.deadline}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-medium">Team Size</p>
                            <p className="text-sm font-semibold text-gray-700 flex items-center">
                              <Users className="w-3 h-3 mr-1" />
                              {project.team} Members
                            </p>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-medium text-gray-700">Progress</p>
                            <p className="text-sm font-bold text-gray-900">{project.progress}%</p>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className={`h-3 rounded-full transition-all ${project.progress >= 75 ? 'bg-green-500' :
                                project.progress >= 50 ? 'bg-blue-500' : 'bg-yellow-500'
                                }`}
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" className="flex-1" onClick={() => handleAction("View Details", project)}>
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                          <Button variant="outline" className="flex-1" onClick={() => handleAction("Update", project)}>
                            <Edit className="w-4 h-4 mr-2" />
                            Update
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* AI TAKEOFF & ESTIMATION TAB */}
          {activeTab === "takeoff" && <AITakeoff />}



          {/* MATERIAL PRICING TAB */}
          {
            activeTab === "materials" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Material Pricing Database</h1>
                    <p className="text-gray-600 mt-1">Real-time pricing from trusted suppliers</p>
                  </div>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Material
                  </Button>
                </div>

                <Card>
                  <CardHeader className="border-b">
                    <div className="flex items-center justify-between">
                      <CardTitle>Material Catalog</CardTitle>
                      <div className="flex gap-3">
                        <div className="relative">
                          <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                          <Input placeholder="Search materials..." className="pl-10 w-64" />
                        </div>
                        <select className="p-2 border rounded-md">
                          <option>All Categories</option>
                          <option>Flooring</option>
                          <option>Kitchen</option>
                          <option>Bathroom</option>
                          <option>Outdoor</option>
                          <option>Electrical</option>
                        </select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                          <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Material</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Category</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Supplier</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Price</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Stock</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Rating</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {materials.map((material) => (
                            <tr key={material.id} className="hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <Package className="w-8 h-8 text-gray-400 mr-3" />
                                  <p className="font-semibold text-gray-900">{material.name}</p>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <Badge variant="outline">{material.category}</Badge>
                              </td>
                              <td className="px-6 py-4">
                                <p className="text-gray-700">{material.supplier}</p>
                              </td>
                              <td className="px-6 py-4">
                                <p className="font-bold text-gray-900">{material.price}</p>
                              </td>
                              <td className="px-6 py-4">
                                <Badge variant={material.stock === "In Stock" ? "default" : "secondary"}>
                                  {material.stock}
                                </Badge>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                                  <span className="font-semibold">{material.rating}</span>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex gap-2">
                                  <Button size="sm" variant="outline" onClick={() => handleAction("Add to Quote", material)}>
                                    <Plus className="w-4 h-4" />
                                  </Button>
                                  <Button size="sm" variant="outline" onClick={() => handleAction("View Details", material)}>
                                    <Eye className="w-4 h-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          }

          {/* MESSAGES TAB */}
          {
            activeTab === "messages" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Messages</h1>
                    <p className="text-sm text-gray-500 mt-1">Secure client communication</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="lg:col-span-1">
                    <CardHeader className="border-b px-6 py-4">
                      <CardTitle className="text-base font-semibold">Conversations</CardTitle>
                      <div className="relative mt-3">
                        <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                        <Input placeholder="Search messages..." className="pl-9 h-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y max-h-[600px] overflow-y-auto">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${message.unread ? 'bg-blue-50' : ''}`}
                            onClick={() => handleAction("View Message", message)}
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold shadow-sm">
                                {message.avatar}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                  <p className="font-semibold text-gray-900 truncate">{message.from}</p>
                                  {message.unread && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                                </div>
                                <p className="text-sm font-medium text-gray-700 truncate">{message.subject}</p>
                                <p className="text-sm text-gray-500 truncate">{message.preview}</p>
                                <p className="text-xs text-gray-400 mt-1">{message.time}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="lg:col-span-2">
                    <CardHeader className="border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold shadow-sm">
                            SJ
                          </div>
                          <div>
                            <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                            <p className="text-sm text-gray-500">Kitchen Design Approval</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Phone className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Mail className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                            SJ
                          </div>
                          <div className="flex-1">
                            <div className="bg-gray-100 rounded-lg p-4">
                              <p className="text-sm text-gray-900">Hi! I love the new kitchen design you sent over. The layout looks perfect for our space. Can we proceed with the installation?</p>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                          </div>
                        </div>

                        <div className="flex gap-3 justify-end">
                          <div className="flex-1 max-w-md">
                            <div className="bg-gray-900 rounded-lg p-4 text-white">
                              <p className="text-sm">That's great to hear! Yes, we can start the installation next week. I'll send over the final contract and timeline today.</p>
                            </div>
                            <p className="text-xs text-gray-500 mt-1 text-right">1 hour ago</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                            ME
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex gap-3">
                          <Textarea
                            placeholder="Type your message..."
                            className="flex-1 min-h-[80px]"
                            value={formData.message || ''}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          />
                          <Button className="bg-black hover:bg-gray-800 text-white font-semibold h-[80px] w-[80px]" onClick={() => handleAction("Send Message")}>
                            <Send className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )
          }

          {/* ANALYTICS & REPORTS TAB */}
          {
            activeTab === "analytics" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Analytics & Reports</h1>
                    <p className="text-sm text-gray-500 mt-1">Performance metrics and business insights</p>
                  </div>
                  <Button className="bg-black hover:bg-gray-800 text-white shadow-lg shadow-black/20 transition-all">
                    <Download className="w-4 h-4 mr-2" />
                    Export Report
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Total Revenue", value: "$542,300", change: "+18.2%", icon: DollarSign, color: "text-green-600", bg: "bg-green-50" },
                    { title: "Projects Completed", value: "47", change: "+12", icon: CheckCircle, color: "text-blue-600", bg: "bg-blue-50" },
                    { title: "Client Satisfaction", value: "4.8/5", change: "+0.3", icon: Star, color: "text-yellow-600", bg: "bg-yellow-50" },
                    { title: "Avg. Project Time", value: "42 days", change: "-5 days", icon: Clock, color: "text-purple-600", bg: "bg-purple-50" }
                  ].map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <Card key={idx} className="hover:shadow-xl transition-all duration-300 border-none shadow-sm group">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`${stat.bg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
                              <ArrowUpRight className="w-3 h-3" />
                              {stat.change}
                            </Badge>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1 tracking-tight">{stat.value}</h3>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="border-b">
                      <CardTitle className="flex items-center">
                        <Activity className="w-5 h-5 mr-2 text-blue-600" />
                        Revenue Trend (Last 6 Months)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {[
                          { month: "June", revenue: 72000, projects: 8 },
                          { month: "July", revenue: 85000, projects: 9 },
                          { month: "August", revenue: 78000, projects: 7 },
                          { month: "September", revenue: 92000, projects: 10 },
                          { month: "October", revenue: 88000, projects: 9 },
                          { month: "November", revenue: 95000, projects: 11 }
                        ].map((data, idx) => (
                          <div key={idx} className="flex items-center gap-4">
                            <p className="text-sm font-medium text-gray-700 w-24">{data.month}</p>
                            <div className="flex-1">
                              <div className="w-full bg-gray-200 rounded-full h-8 relative">
                                <div
                                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-8 rounded-full flex items-center justify-end pr-3"
                                  style={{ width: `${(data.revenue / 100000) * 100}%` }}
                                >
                                  <span className="text-xs font-bold text-white">${(data.revenue / 1000).toFixed(0)}k</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 w-20">{data.projects} projects</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="border-b">
                      <CardTitle className="flex items-center">
                        <Award className="w-5 h-5 mr-2 text-yellow-600" />
                        Top Performing Projects
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {[
                          { name: "Luxury Kitchen Remodel", profit: "$12,500", margin: "28%", rating: 5.0 },
                          { name: "Master Suite Addition", profit: "$18,200", margin: "32%", rating: 4.9 },
                          { name: "Modern Bathroom", profit: "$8,900", margin: "25%", rating: 4.8 },
                          { name: "Outdoor Living Space", profit: "$15,600", margin: "30%", rating: 4.9 },
                          { name: "Home Office Build", profit: "$6,800", margin: "22%", rating: 4.7 }
                        ].map((project, idx) => (
                          <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex-1">
                              <p className="font-semibold text-gray-900">{project.name}</p>
                              <div className="flex items-center gap-4 mt-1">
                                <p className="text-sm text-gray-600">Profit: <span className="font-bold text-green-600">{project.profit}</span></p>
                                <p className="text-sm text-gray-600">Margin: <span className="font-bold">{project.margin}</span></p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                              <span className="font-bold text-sm">{project.rating}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )
          }

          {/* PROFILE SETTINGS TAB */}
          {
            activeTab === "profile" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Profile Settings</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage your contractor profile and business information</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="lg:col-span-2">
                    <CardHeader className="border-b">
                      <CardTitle>Business Information</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="company-name">Company Name</Label>
                          <Input id="company-name" defaultValue="Elite Construction Co." className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="license-number">License Number</Label>
                          <Input id="license-number" defaultValue="LC-2024-12345" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" defaultValue="(555) 123-4567" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" defaultValue="contact@eliteconstruction.com" className="mt-1" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="address">Business Address</Label>
                        <Input id="address" defaultValue="123 Construction Ave, New York, NY 10001" className="mt-1" />
                      </div>

                      <div>
                        <Label htmlFor="bio">Company Bio</Label>
                        <Textarea
                          id="bio"
                          className="mt-1 min-h-[120px]"
                          defaultValue="Elite Construction Co. has been serving the New York area for over 15 years. We specialize in residential renovations, kitchen and bathroom remodels, and custom home builds. Our team of certified professionals is committed to delivering exceptional quality and customer satisfaction."
                        />
                      </div>

                      <div>
                        <Label>Specializations</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                          {["Kitchen Remodeling", "Bathroom Renovation", "Deck Building", "Home Additions", "Basement Finishing", "Custom Homes"].map((spec) => (
                            <div key={spec} className="flex items-center gap-2">
                              <input type="checkbox" defaultChecked className="rounded" />
                              <label className="text-sm text-gray-700">{spec}</label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button className="bg-black hover:bg-gray-800 text-white shadow-lg shadow-black/20 transition-all font-semibold" onClick={() => handleAction("Save Profile")}>
                          Save Changes
                        </Button>
                        <Button variant="outline">Cancel</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="border-b">
                      <CardTitle>Profile Photo</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white text-4xl font-bold mb-4 shadow-lg shadow-yellow-500/20">
                          EC
                        </div>
                        <Button variant="outline" className="w-full">
                          <Upload className="w-4 h-4 mr-2" />
                          Upload Photo
                        </Button>
                      </div>

                      <div className="border-t pt-4 space-y-3">
                        <h4 className="font-semibold text-gray-900">Quick Stats</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Member Since</span>
                            <span className="text-sm font-semibold">Jan 2020</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Projects Completed</span>
                            <span className="text-sm font-semibold">47</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Client Rating</span>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                              <span className="text-sm font-semibold">4.8</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Response Time</span>
                            <span className="text-sm font-semibold">2 hours</span>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <h4 className="font-semibold text-gray-900 mb-3">Certifications</h4>
                        <div className="space-y-2">
                          {["Licensed Contractor", "Insured & Bonded", "EPA Lead-Safe Certified"].map((cert) => (
                            <div key={cert} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-gray-700">{cert}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )
          }

          {/* BILLING TAB */}
          {
            activeTab === "billing" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Subscription & Billing</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage your subscription plan and payment methods</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="lg:col-span-2 border-yellow-500 shadow-lg shadow-yellow-500/10">
                    <CardHeader className="border-b bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-xl font-bold text-white">Enterprise Plan</CardTitle>
                            <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 border-none">Top Tier</Badge>
                          </div>
                          <p className="text-sm text-gray-400 mt-1">Your current subscription</p>
                        </div>
                        <Badge className="bg-green-500 text-white shadow-sm border-none px-3 py-1">Active</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <p className="text-sm text-gray-600">Monthly Cost</p>
                          <p className="text-3xl font-bold text-gray-900 mt-1">$299</p>
                          <p className="text-xs text-gray-500 mt-1">per month</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Next Billing Date</p>
                          <p className="text-lg font-semibold text-gray-900 mt-1">Dec 10, 2024</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Payment Method</p>
                          <p className="text-lg font-semibold text-gray-900 mt-1">•••• 4242</p>
                        </div>
                      </div>

                      <div className="border-t pt-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Enterprise Features</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            "Unlimited AI Takeoffs & Estimates",
                            "Advanced Lead Scoring & Matching",
                            "Priority 24/7 Dedicated Support",
                            "Custom API Integrations",
                            "White-label Reports",
                            "Multi-User Team Access (Unlimited)",
                            "Advanced Analytics & Forecasting",
                            "Dedicated Account Manager"
                          ].map((feature) => (
                            <div key={feature} className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-yellow-500" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button className="bg-black hover:bg-gray-800 text-white shadow-lg shadow-black/20 transition-all" onClick={() => handleAction("Manage Plan")}>
                          Manage Plan
                        </Button>
                        <Button variant="outline" onClick={() => handleAction("Change Payment Method")}>
                          Change Payment Method
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="border-b">
                      <CardTitle>Billing History</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        {[
                          { date: "Nov 10, 2024", amount: "$299.00", status: "Paid" },
                          { date: "Oct 10, 2024", amount: "$299.00", status: "Paid" },
                          { date: "Sep 10, 2024", amount: "$99.00", status: "Paid" },
                          { date: "Aug 10, 2024", amount: "$99.00", status: "Paid" }
                        ].map((invoice, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-semibold text-gray-900">{invoice.amount}</p>
                              <p className="text-xs text-gray-500">{invoice.date}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-green-600 border-green-600">
                                {invoice.status}
                              </Badge>
                              <Button size="sm" variant="ghost">
                                <Download className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        View All Invoices
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader className="border-b">
                    <CardTitle>Available Plans</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { name: "Starter", price: "$49", features: ["10 AI Takeoffs/month", "Basic Estimation", "Lead Management", "Email Support"] },
                        { name: "Professional", price: "$99", features: ["Unlimited AI Takeoffs", "Advanced Estimation", "Lead Scoring", "Priority Support"] },
                        { name: "Enterprise", price: "$299", features: ["Everything in Pro", "Custom Integrations", "Dedicated Account Manager", "24/7 Phone Support"], current: true }
                      ].map((plan) => (
                        <Card key={plan.name} className={`${plan.current ? 'border-2 border-yellow-500 shadow-xl shadow-yellow-500/10 transform scale-105' : 'opacity-75 hover:opacity-100 transition-opacity'}`}>
                          <CardHeader className={`${plan.current ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' : ''}`}>
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-xl">{plan.name}</CardTitle>
                              {plan.current && <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 border-none">Current</Badge>}
                            </div>
                            <p className={`text-3xl font-bold mt-2 ${plan.current ? 'text-white' : 'text-gray-900'}`}>{plan.price}<span className={`text-sm font-normal ${plan.current ? 'text-gray-400' : 'text-gray-600'}`}>/month</span></p>
                          </CardHeader>
                          <CardContent className="p-6">
                            <ul className="space-y-3 mb-6">
                              {plan.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2 text-sm">
                                  <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.current ? 'text-yellow-500' : 'text-green-600'}`} />
                                  <span className="text-gray-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <Button
                              className={`w-full ${plan.current ? 'bg-yellow-500 hover:bg-yellow-600 text-black font-bold' : ''}`}
                              variant={plan.current ? 'default' : 'outline'}
                              disabled={plan.current}
                            >
                              {plan.current ? 'Current Plan' : 'Downgrade'}
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          }

          {/* SUPPORT TAB */}
          {
            activeTab === "support" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Support Center</h1>
                    <p className="text-sm text-gray-500 mt-1">Get help and find answers to your questions</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="lg:col-span-2">
                    <CardHeader className="border-b">
                      <CardTitle>Submit a Support Ticket</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <Label htmlFor="ticket-subject">Subject</Label>
                        <Input
                          id="ticket-subject"
                          placeholder="Brief description of your issue"
                          className="mt-1"
                          value={formData.subject || ''}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label htmlFor="ticket-category">Category</Label>
                        <select
                          id="ticket-category"
                          className="w-full mt-1 p-2 border rounded-md"
                          value={formData.category || ''}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        >
                          <option value="">Select a category</option>
                          <option>Technical Issue</option>
                          <option>Billing Question</option>
                          <option>Feature Request</option>
                          <option>Account Management</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="ticket-priority">Priority</Label>
                        <select
                          id="ticket-priority"
                          className="w-full mt-1 p-2 border rounded-md"
                          value={formData.priority || ''}
                          onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                        >
                          <option value="">Select priority</option>
                          <option>Low</option>
                          <option>Medium</option>
                          <option>High</option>
                          <option>Urgent</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="ticket-description">Description</Label>
                        <Textarea
                          id="ticket-description"
                          placeholder="Please provide detailed information about your issue..."
                          className="mt-1 min-h-[150px]"
                          value={formData.description || ''}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label>Attachments (Optional)</Label>
                        <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-yellow-500 transition-colors cursor-pointer">
                          <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                          <p className="text-sm text-gray-600">Click to upload screenshots or files</p>
                          <p className="text-xs text-gray-500 mt-1">Max file size: 10MB</p>
                        </div>
                      </div>

                      <Button
                        className="w-full bg-black hover:bg-gray-800 text-white shadow-lg shadow-black/20 transition-all font-semibold"
                        onClick={() => {
                          handleAction("Submit Ticket");
                          setFormData({});
                        }}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Submit Ticket
                      </Button>
                    </CardContent>
                  </Card>

                  <div className="space-y-6">
                    <Card>
                      <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-blue-100">
                        <CardTitle className="flex items-center">
                          <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
                          Quick Help
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Contact Options</h4>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                              <Mail className="w-4 h-4 text-gray-600" />
                              <div>
                                <p className="font-medium text-gray-900">Email Support</p>
                                <p className="text-gray-600">support@platform.com</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <Phone className="w-4 h-4 text-gray-600" />
                              <div>
                                <p className="font-medium text-gray-900">Phone Support</p>
                                <p className="text-gray-600">(555) 999-8888</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <Clock className="w-4 h-4 text-gray-600" />
                              <div>
                                <p className="font-medium text-gray-900">Business Hours</p>
                                <p className="text-gray-600">Mon-Fri, 9AM-6PM EST</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border-t pt-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Response Times</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Urgent:</span>
                              <span className="font-semibold">1-2 hours</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">High:</span>
                              <span className="font-semibold">4-6 hours</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Medium:</span>
                              <span className="font-semibold">24 hours</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Low:</span>
                              <span className="font-semibold">48 hours</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="border-b">
                        <CardTitle>Popular Resources</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          {[
                            "Getting Started Guide",
                            "AI Takeoff Tutorial",
                            "Lead Management Tips",
                            "Billing & Payments FAQ",
                            "Video Tutorials"
                          ].map((resource) => (
                            <button
                              key={resource}
                              className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-between group"
                              onClick={() => handleAction("View Resource", { name: resource })}
                            >
                              <span className="text-sm font-medium text-gray-900">{resource}</span>
                              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-600" />
                            </button>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Card>
                  <CardHeader className="border-b">
                    <CardTitle>Recent Tickets</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                          <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Ticket ID</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Subject</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Category</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Priority</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {[
                            { id: "#TK-1234", subject: "AI Takeoff not processing", category: "Technical", priority: "High", status: "In Progress", date: "Nov 9, 2024" },
                            { id: "#TK-1233", subject: "Billing question about upgrade", category: "Billing", priority: "Medium", status: "Resolved", date: "Nov 7, 2024" },
                            { id: "#TK-1232", subject: "Feature request: Export to Excel", category: "Feature Request", priority: "Low", status: "Under Review", date: "Nov 5, 2024" }
                          ].map((ticket) => (
                            <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4">
                                <p className="font-semibold text-blue-600">{ticket.id}</p>
                              </td>
                              <td className="px-6 py-4">
                                <p className="font-medium text-gray-900">{ticket.subject}</p>
                              </td>
                              <td className="px-6 py-4">
                                <Badge variant="outline">{ticket.category}</Badge>
                              </td>
                              <td className="px-6 py-4">
                                <Badge variant={ticket.priority === "High" ? "default" : "secondary"}>
                                  {ticket.priority}
                                </Badge>
                              </td>
                              <td className="px-6 py-4">
                                <Badge variant={ticket.status === "Resolved" ? "default" : "secondary"}>
                                  {ticket.status}
                                </Badge>
                              </td>
                              <td className="px-6 py-4">
                                <p className="text-sm text-gray-600">{ticket.date}</p>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          }
          {/* BUSINESS DIRECTORY TAB */}
          {
            activeTab === "directory" && (
              <div className="space-y-6">
                {/* Filters */}
                <Card className="bg-white shadow-sm border-gray-200">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-search" className="text-xs font-semibold uppercase text-gray-500">Company Name</Label>
                        <div className="relative">
                          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                          <Input id="company-search" placeholder="Search by name..." className="pl-9 bg-gray-50 border-gray-200 h-9 focus:bg-white transition-colors" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location-search" className="text-xs font-semibold uppercase text-gray-500">Location</Label>
                        <Input id="location-search" placeholder="City, State, or Zip" className="bg-gray-50 border-gray-200 h-9 focus:bg-white transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="specialty-filter" className="text-xs font-semibold uppercase text-gray-500">Specialty</Label>
                        <div className="relative">
                          <select id="specialty-filter" className="w-full h-9 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent appearance-none transition-colors">
                            <option>All Specialties</option>
                            <option>General Contracting</option>
                            <option>Roofing</option>
                            <option>Plumbing</option>
                            <option>Electrical</option>
                            <option>Landscaping</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="services-filter" className="text-xs font-semibold uppercase text-gray-500">Services Offered</Label>
                        <Input id="services-filter" placeholder="e.g. Kitchen Remodel" className="bg-gray-50 border-gray-200 h-9 focus:bg-white transition-colors" />
                      </div>
                    </div>
                    <div className="flex justify-end items-center gap-3 pt-2">
                      <button className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">Clear Filters</button>
                      <Button className="bg-black hover:bg-gray-800 text-white shadow-lg shadow-black/20 transition-all">
                        <Search className="w-4 h-4 mr-2" />
                        Search Directory
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Results Header */}
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">Showing <span className="font-semibold text-gray-900">1-10</span> of <span className="font-semibold text-gray-900">1,204</span> results</p>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">Sort by:</span>
                    <div className="relative">
                      <select className="h-9 pl-3 pr-8 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent appearance-none">
                        <option>Company Name (A-Z)</option>
                        <option>Rating (High to Low)</option>
                        <option>Newest Added</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Results List */}
                <Card className="bg-white shadow-sm border-gray-200">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-1/3">Company</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Services</th>
                          <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {businessDirectoryData.map((business) => (
                          <tr key={business.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-white font-bold text-lg shrink-0">
                                  {business.logo}
                                </div>
                                <div>
                                  <h3 className="font-semibold text-gray-900">{business.name}</h3>
                                  <p className="text-sm text-gray-500">{business.location}</p>
                                  <div className="flex items-center gap-1 mt-1">
                                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                    <span className="text-sm font-medium text-gray-900">{business.rating}</span>
                                    <span className="text-sm text-gray-500">({business.reviews} reviews)</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="space-y-1">
                                <p className="text-sm text-gray-900">{business.contact.email}</p>
                                <p className="text-sm text-gray-500">{business.contact.phone}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex flex-wrap gap-2">
                                {business.services.map((service, index) => (
                                  <span key={index} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                    {service}
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                                  <Eye className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                                  <Edit className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-sm text-gray-500">Page <span className="font-medium text-gray-900">1</span> of <span className="font-medium text-gray-900">121</span></p>
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-50" disabled>
                        <span className="sr-only">Previous</span>
                        &lt;
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded border border-blue-600 bg-blue-50 text-blue-600 font-medium">1</button>
                      <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50">2</button>
                      <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50">3</button>
                      <span className="text-gray-400">...</span>
                      <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50">121</button>
                      <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50">
                        <span className="sr-only">Next</span>
                        &gt;
                      </button>
                    </div>
                  </div>
                </Card>
              </div>
            )
          }


          {/* MARKETING TAB */}
          {activeTab === "marketing" && <Marketing />}

          {/* WEBSITE DESIGN TAB */}
          {activeTab === "website" && <WebsiteDesign />}

          {/* AI ASSISTANT TAB */}
          {activeTab === "assistant" && <AIAssistant />}

          {/* AI CHATBOT TAB */}
          {activeTab === "chatbot" && <AIChatbot />}

          {/* SETTINGS TAB */}
          {activeTab === "settings" && <SettingsPage />}

          {/* COST ESTIMATION TAB */}
          {
            activeTab === "cost-estimation" && (
              <CostEstimation />
            )
          }
        </div >
      </div >
      <Toaster />
    </div >
  );
};

export default ContractorDashboard;
