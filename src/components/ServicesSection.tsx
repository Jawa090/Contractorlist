import { Button } from "@/components/ui/button";
import { 
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
  Square
} from "lucide-react";

const ServicesSection = () => {
  const popularServices = [
    {
      name: "Additions & Remodels",
      icon: Home,
      description: "Complete home renovation and expansion services",
      projects: "2,500+ completed"
    },
    {
      name: "Appliances",
      icon: Zap,
      description: "Professional appliance installation and repair",
      projects: "1,800+ completed"
    },
    {
      name: "Architects & Engineers",
      icon: Building2,
      description: "Expert architectural and engineering services",
      projects: "3,200+ completed"
    },
    {
      name: "Cabinets & Countertops",
      icon: Palette,
      description: "Custom cabinet and countertop solutions",
      projects: "1,900+ completed"
    },
    {
      name: "Carpentry",
      icon: Hammer,
      description: "Skilled carpentry and woodworking services",
      projects: "4,100+ completed"
    },
    {
      name: "Driveways & Patios",
      icon: Car,
      description: "Concrete and paving solutions",
      projects: "2,800+ completed"
    },
    {
      name: "Drywall & Insulation",
      icon: Shield,
      description: "Professional drywall and insulation work",
      projects: "3,500+ completed"
    },
    {
      name: "Fencing Services",
      icon: TreePine,
      description: "Custom fencing and outdoor structures",
      projects: "2,200+ completed"
    },
    {
      name: "Flooring & Hardwood",
      icon: Square,
      description: "Premium flooring installation services",
      projects: "3,800+ completed"
    },
    {
      name: "Garages & Sheds",
      icon: Warehouse,
      description: "Custom garage and storage solutions",
      projects: "1,600+ completed"
    },
    {
      name: "Heating & Cooling",
      icon: Snowflake,
      description: "HVAC installation and maintenance",
      projects: "2,900+ completed"
    },
    {
      name: "Plumbing Services",
      icon: Wrench,
      description: "Professional plumbing and pipe work",
      projects: "4,300+ completed"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
            <Wrench className="w-4 h-4 mr-2" />
            Professional Services
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Popular Construction Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of construction services delivered by verified professionals with proven track records.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {popularServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-yellow-500/20 rounded-xl mr-4 group-hover:bg-yellow-500/30 transition-colors">
                    <IconComponent className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    {service.name}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-yellow-400 text-xs font-medium">
                  {service.projects}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Browse All Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;