import { 
  Monitor, 
  TrendingUp, 
  MapPin, 
  Calculator,
  Users,
  Mail,
  Megaphone,
  MessageSquare,
  Scissors,
  BarChart3,
  Building2,
  Zap,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionsSection = () => {
  const solutions = [
    { 
      icon: Monitor, 
      title: "Professional Websites", 
      description: "Custom websites designed to showcase your work and attract clients",
      features: ["Portfolio galleries", "Contact forms", "Mobile responsive"]
    },
    { 
      icon: TrendingUp, 
      title: "Digital Marketing", 
      description: "Comprehensive marketing strategies to grow your business",
      features: ["SEO optimization", "Content marketing", "Analytics tracking"]
    },
    { 
      icon: MapPin, 
      title: "Graphic Design", 
      description: "Professional branding and visual identity solutions",
      features: ["Logo design", "Business cards", "Marketing materials"]
    },
    { 
      icon: Calculator, 
      title: "Quote Management", 
      description: "Streamlined quoting and estimation tools",
      features: ["Project calculators", "Template library", "Client proposals"]
    },
    { 
      icon: Users, 
      title: "Business Consulting", 
      description: "Expert advice to optimize your construction business",
      features: ["Process optimization", "Financial planning", "Growth strategies"]
    },
    { 
      icon: Mail, 
      title: "Email Marketing", 
      description: "Targeted email campaigns to nurture client relationships",
      features: ["Automated sequences", "Newsletter templates", "Performance tracking"]
    },
    { 
      icon: Megaphone, 
      title: "Social Media Marketing", 
      description: "Social media presence management and advertising",
      features: ["Content creation", "Paid advertising", "Community engagement"]
    },
    { 
      icon: MessageSquare, 
      title: "SMS Marketing", 
      description: "Direct text messaging for client communication",
      features: ["Appointment reminders", "Project updates", "Promotional offers"]
    },
    { 
      icon: Scissors, 
      title: "Customer Support", 
      description: "24/7 customer support and help desk solutions",
      features: ["Live chat", "Ticket system", "Knowledge base"]
    },
    { 
      icon: BarChart3, 
      title: "Lead Generation", 
      description: "Proven strategies to attract qualified leads",
      features: ["Local SEO", "Referral programs", "Online directories"]
    },
    { 
      icon: Building2, 
      title: "Google Advertising", 
      description: "Targeted Google Ads campaigns for maximum ROI",
      features: ["Search ads", "Display ads", "Performance optimization"]
    },
    { 
      icon: Zap, 
      title: "Custom Solutions", 
      description: "Tailored solutions for your specific business needs",
      features: ["API integration", "Custom development", "Third-party tools"]
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-blue-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Business Solutions
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Complete Business Solutions for Contractors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to grow your construction business, from digital presence to client management and marketing automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-yellow-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                    {solution.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-yellow-600 font-semibold group-hover:text-yellow-700 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-600 hover:to-yellow-700 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Explore All Solutions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;