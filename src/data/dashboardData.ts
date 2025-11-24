import {
    Users, Briefcase, DollarSign, TrendingUp, CheckCircle, Star, Clock,
    Package, BarChart3, Building, MessageSquare, Settings, CreditCard, HelpCircle,
    Layout, Megaphone, Bot, Calculator, ShoppingCart
} from "lucide-react";

export const notifications = [
    { id: 1, title: "New Lead Match", message: "A new lead matches your profile: Kitchen Renovation in Downtown.", time: "10 min ago", unread: true },
    { id: 2, title: "Project Update", message: "Johnson Residence project status updated to 'In Progress'.", time: "1 hour ago", unread: true },
    { id: 3, title: "Message Received", message: "New message from Sarah Johnson regarding materials.", time: "2 hours ago", unread: false },
    { id: 4, title: "System Alert", message: "Maintenance scheduled for tonight at 2 AM EST.", time: "5 hours ago", unread: false },
];

export const businessDirectoryData = [
    { id: 1, name: "John Doe Construction", location: "123 Main St, New York, NY 10001", specialty: "General Contracting", services: ["General Contracting", "Renovations"], contact: { email: "john.doe@email.com", phone: "(212) 555-0123" }, rating: 4.9, reviews: 124, logo: "JD" },
    { id: 2, name: "Smith's Roofing", location: "456 Oak Ave, Los Angeles, CA 90001", specialty: "Roofing", services: ["Roofing", "Repairs", "Installation"], contact: { email: "jane.smith@email.com", phone: "(310) 555-0145" }, rating: 4.8, reviews: 98, logo: "SR" },
    { id: 3, name: "Johnson & Sons Plumbing", location: "789 Pine Rd, Chicago, IL 60601", specialty: "Plumbing", services: ["Plumbing", "Emergency"], contact: { email: "bob.j@email.com", phone: "(312) 555-0187" }, rating: 4.7, reviews: 75, logo: "JS" },
    { id: 4, name: "Emily's Electrical", location: "101 Maple St, Houston, TX 77001", specialty: "Electrical", services: ["Electrical", "Wiring", "Lighting"], contact: { email: "emily.e@email.com", phone: "(713) 555-0165" }, rating: 5.0, reviews: 55, logo: "EE" },
    { id: 5, name: "Green Scapes Landscaping", location: "202 Birch Ln, Seattle, WA 98101", specialty: "Landscaping", services: ["Landscaping", "Design", "Maintenance"], contact: { email: "info@greenscapes.com", phone: "(206) 555-0199" }, rating: 4.6, reviews: 42, logo: "GS" },
];

export const stats = [
    { title: "New Leads", value: "12", change: "+3", trend: "up", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Active Projects", value: "8", change: "+2", trend: "up", icon: Briefcase, color: "text-green-600", bg: "bg-green-50" },
    { title: "Monthly Revenue", value: "$45,200", change: "+15%", trend: "up", icon: DollarSign, color: "text-yellow-600", bg: "bg-yellow-50" },
    { title: "Conversion Rate", value: "68%", change: "+5%", trend: "up", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" }
];

export const recentLeads = [
    { id: 1, name: "Kitchen Renovation", client: "Sarah Johnson", email: "sarah.j@email.com", phone: "(555) 123-4567", budget: "$25,000", score: 95, status: "Hot", date: "2024-11-08", location: "Downtown, NY" },
    { id: 2, name: "Bathroom Remodel", client: "Mike Chen", email: "mike.c@email.com", phone: "(555) 234-5678", budget: "$15,000", score: 82, status: "Warm", date: "2024-11-07", location: "Brooklyn, NY" },
    { id: 3, name: "Deck Installation", client: "Lisa Brown", email: "lisa.b@email.com", phone: "(555) 345-6789", budget: "$8,000", score: 71, status: "Cold", date: "2024-11-06", location: "Queens, NY" },
    { id: 4, name: "Full Home Renovation", client: "David Wilson", email: "david.w@email.com", phone: "(555) 456-7890", budget: "$85,000", score: 98, status: "Hot", date: "2024-11-09", location: "Manhattan, NY" },
    { id: 5, name: "Basement Finishing", client: "Emma Davis", email: "emma.d@email.com", phone: "(555) 567-8901", budget: "$32,000", score: 88, status: "Warm", date: "2024-11-05", location: "Bronx, NY" }
];

export const activeProjects = [
    { id: 1, name: "Modern Kitchen Remodel", client: "Johnson Residence", progress: 75, deadline: "Dec 15, 2024", budget: "$25,000", spent: "$18,750", status: "On Track", team: 4 },
    { id: 2, name: "Master Bath Renovation", client: "Chen Family", progress: 45, deadline: "Jan 20, 2025", budget: "$15,000", spent: "$6,750", status: "On Track", team: 3 },
    { id: 3, name: "Outdoor Deck Build", client: "Brown House", progress: 90, deadline: "Dec 10, 2024", budget: "$8,000", spent: "$7,200", status: "Ahead", team: 2 },
    { id: 4, name: "Full Home Renovation", client: "Wilson Estate", progress: 30, deadline: "Mar 15, 2025", budget: "$85,000", spent: "$25,500", status: "On Track", team: 8 },
    { id: 5, name: "Basement Finishing", client: "Davis Home", progress: 60, deadline: "Feb 28, 2025", budget: "$32,000", spent: "$19,200", status: "On Track", team: 5 }
];

export const messages = [
    { id: 1, from: "Sarah Johnson", subject: "Kitchen Design Approval", preview: "I love the new design! Can we proceed with...", time: "2 hours ago", unread: true, avatar: "SJ" },
    { id: 2, from: "Mike Chen", subject: "Material Selection", preview: "I've reviewed the tile options and I prefer...", time: "5 hours ago", unread: true, avatar: "MC" },
    { id: 3, from: "Lisa Brown", subject: "Project Timeline", preview: "When can we schedule the final walkthrough?", time: "1 day ago", unread: false, avatar: "LB" },
    { id: 4, from: "David Wilson", subject: "Budget Discussion", preview: "I'd like to discuss some additional features...", time: "2 days ago", unread: false, avatar: "DW" }
];

export const materials = [
    { id: 1, name: "Premium Hardwood Flooring", category: "Flooring", supplier: "BuildMart", price: "$8.50/sqft", stock: "In Stock", rating: 4.8 },
    { id: 2, name: "Granite Countertop", category: "Kitchen", supplier: "Stone World", price: "$65/sqft", stock: "In Stock", rating: 4.9 },
    { id: 3, name: "Ceramic Tile - Porcelain", category: "Bathroom", supplier: "Tile Pro", price: "$4.25/sqft", stock: "Limited", rating: 4.7 },
    { id: 4, name: "Composite Decking", category: "Outdoor", supplier: "Deck Supply Co", price: "$12/sqft", stock: "In Stock", rating: 4.6 },
    { id: 5, name: "LED Recessed Lighting", category: "Electrical", supplier: "Light House", price: "$45/unit", stock: "In Stock", rating: 4.8 }
];

export const menuItems = [
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
