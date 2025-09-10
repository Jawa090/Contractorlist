import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FileText,
  Calculator,
  ClipboardList,
  ShoppingCart,
  Calendar,
  ShieldCheck,
  HardHat,
  PenTool,
  Layers,
  FileCog,
  Briefcase,
  FileSearch,
  Home,
  Wrench,
  Building2,
  Hammer,
  Car,
  Shield,
  Palette,
  TreePine,
  Snowflake,
  Warehouse,
  Zap,
  Square,
  Globe,
  Users,
  Mail,
  Phone,
  Search,
  TrendingUp,
} from "lucide-react";

type ServiceItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
};

const Services = () => {
  const preconstruction: ServiceItem[] = [
    { name: "Bid Management", icon: FileText, description: "Streamlined bidding processes" },
    { name: "Cost Estimating", icon: Calculator, description: "Accurate project cost analysis" },
    { name: "Tenders Management", icon: ClipboardList, description: "Efficient tender workflows" },
    { name: "Procurement & Pre-Contract", icon: ShoppingCart, description: "Strategic procurement solutions" },
    { name: "Project Scheduling", icon: Calendar, description: "Optimized timelines and milestones" },
    { name: "Quality Control", icon: ShieldCheck, description: "Standards, testing and compliance" },
    { name: "Safety Management", icon: HardHat, description: "On-site safety programs" },
    { name: "Contract Administration", icon: FileCog, description: "Contracts, changes and docs" },
    { name: "Site Supervision", icon: Briefcase, description: "Daily coordination and oversight" },
    { name: "Permits & Approvals", icon: FileSearch, description: "Regulatory submissions" },
  ];

  const designAndModeling: ServiceItem[] = [
    { name: "Design & Drafting", icon: PenTool, description: "CAD drafting and detailing" },
    { name: "BIM & 3D Modeling", icon: Layers, description: "Coordination and clash checks" },
    { name: "Architects & Engineers", icon: Building2, description: "Full design and engineering" },
  ];

  const constructionTrades: ServiceItem[] = [
    { name: "Additions & Remodels", icon: Home, description: "Home expansion and renovation" },
    { name: "Carpentry", icon: Hammer, description: "Framing and finish carpentry" },
    { name: "Plumbing", icon: Wrench, description: "Installations and repairs" },
    { name: "Driveways & Patios", icon: Car, description: "Concrete and paving" },
    { name: "Drywall & Insulation", icon: Shield, description: "Walls, ceilings and insulation" },
    { name: "Flooring & Hardwood", icon: Square, description: "Install and refinishing" },
    { name: "Cabinets & Countertops", icon: Palette, description: "Custom fabrication and install" },
    { name: "Garages & Sheds", icon: Warehouse, description: "Storage and accessory buildings" },
    { name: "Heating & Cooling", icon: Snowflake, description: "HVAC install and service" },
    { name: "Appliances", icon: Zap, description: "Installation and maintenance" },
    { name: "Fencing & Landscaping", icon: TreePine, description: "Outdoor structures and yards" },
  ];

  const marketingAndGrowth: ServiceItem[] = [
    { name: "Complete Website", icon: Globe, description: "Design, build and launch" },
    { name: "Get Leads", icon: Users, description: "Targeted lead generation" },
    { name: "Digital Marketing", icon: TrendingUp, description: "SEO, SEM and campaigns" },
    { name: "Graphic Designing", icon: Palette, description: "Logos, ads and creatives" },
    { name: "Get Quotations", icon: FileText, description: "Request and compare quotes" },
    { name: "Social Marketing", icon: Users, description: "Social media growth" },
    { name: "Email Marketing", icon: Mail, description: "Automations and newsletters" },
    { name: "SMS Marketing", icon: Phone, description: "Promotions by text" },
    { name: "Consultation", icon: Users, description: "Strategy and planning" },
    { name: "Google Ads", icon: TrendingUp, description: "High‑intent traffic" },
    { name: "SEO", icon: Search, description: "Rank and grow organically" },
    { name: "Support Center", icon: Users, description: "Help when you need it" },
    { name: "Other Services", icon: ClipboardList, description: "Custom requests" },
  ];

  const sections: { title: string; items: ServiceItem[] }[] = [
    { title: "Preconstruction & Management", items: preconstruction },
    { title: "Design & Modeling", items: designAndModeling },
    { title: "Construction Trades", items: constructionTrades },
    { title: "Marketing & Growth", items: marketingAndGrowth },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
            All Services
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Everything we offer</h1>
          <p className="text-lg text-gray-600 mt-3">Browse every service in one place — each card includes a short description.</p>
        </div>

        {sections.map((section, sIdx) => (
          <div key={sIdx} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {section.items.map((svc, idx) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-yellow-300 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-yellow-100 rounded-xl">
                        <Icon className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 group-hover:text-yellow-700 transition-colors">{svc.name}</h3>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">{svc.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Services;

