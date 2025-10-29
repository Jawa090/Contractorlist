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
    { name: "Risk Management", icon: Shield, description: "Project risk assessment and mitigation" },
    { name: "Value Engineering", icon: TrendingUp, description: "Cost optimization and efficiency" },
    { name: "Feasibility Studies", icon: Search, description: "Project viability analysis" },
    { name: "Environmental Planning", icon: TreePine, description: "Environmental impact assessments" },
    { name: "Zoning & Land Use", icon: Building2, description: "Land development planning" },
  ];

  const designAndModeling: ServiceItem[] = [
    { name: "Design & Drafting", icon: PenTool, description: "CAD drafting and detailing" },
    { name: "BIM & 3D Modeling", icon: Layers, description: "Coordination and clash checks" },
    { name: "Architects & Engineers", icon: Building2, description: "Full design and engineering" },
    { name: "Structural Engineering", icon: Building2, description: "Structural design and analysis" },
    { name: "MEP Engineering", icon: Zap, description: "Mechanical, electrical, plumbing design" },
    { name: "Interior Design", icon: Palette, description: "Interior space planning and design" },
    { name: "Landscape Architecture", icon: TreePine, description: "Outdoor space design" },
    { name: "3D Visualization", icon: Layers, description: "Photorealistic renderings" },
    { name: "Virtual Reality Tours", icon: Globe, description: "Immersive project walkthroughs" },
    { name: "Drone Surveying", icon: Search, description: "Aerial site mapping and surveys" },
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
    { name: "Electrical Services", icon: Zap, description: "Wiring, panels, and fixtures" },
    { name: "Roofing & Gutters", icon: Home, description: "Roof installation and repair" },
    { name: "Windows & Doors", icon: Square, description: "Installation and replacement" },
    { name: "Painting & Finishing", icon: Palette, description: "Interior and exterior painting" },
    { name: "Tile & Stone Work", icon: Square, description: "Ceramic, marble, and stone installation" },
    { name: "Demolition Services", icon: Hammer, description: "Safe structure removal" },
    { name: "Waterproofing", icon: Shield, description: "Basement and foundation sealing" },
    { name: "Pool & Spa Construction", icon: Snowflake, description: "Swimming pool installation" },
    { name: "Solar Installation", icon: Zap, description: "Solar panel systems" },
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
    { name: "Content Marketing", icon: FileText, description: "Blog posts and articles" },
    { name: "Video Production", icon: Globe, description: "Promotional and training videos" },
    { name: "Photography Services", icon: Palette, description: "Professional project photography" },
    { name: "Brand Development", icon: TrendingUp, description: "Brand identity and positioning" },
    { name: "CRM Integration", icon: Users, description: "Customer relationship management" },
    { name: "Analytics & Reporting", icon: TrendingUp, description: "Performance tracking and insights" },
    { name: "Online Reputation", icon: Users, description: "Review management and monitoring" },
    { name: "Trade Show Marketing", icon: Globe, description: "Event marketing and displays" },
    { name: "Print Marketing", icon: FileText, description: "Brochures, flyers, and catalogs" },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 rounded-full text-sm font-bold mb-8 shadow-lg">
            ✨ All Services
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Everything we offer</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Browse every service in one place — each card includes a detailed description to help you find exactly what you need.
          </p>
        </div>

        {sections.map((section, sIdx) => (
          <div key={sIdx} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {section.items.map((svc, idx) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-yellow-300 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:scale-105"
                  >
                    <div className="text-center">
                      <div className="inline-flex p-4 bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 rounded-2xl mb-6 group-hover:from-yellow-200 group-hover:via-yellow-300 group-hover:to-yellow-400 transition-all duration-300 shadow-md">
                        <Icon className="w-8 h-8 text-yellow-700" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors mb-3">
                        {svc.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {svc.description}
                      </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-center text-sm text-yellow-600 font-medium group-hover:text-yellow-700 transition-colors">
                        Learn More →
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