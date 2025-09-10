import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Users, Award } from "lucide-react";

const AboutSection = () => {
  const services = [
    {
      title: "Comprehensive Business Solutions",
      description: "End-to-end contractor management platform with advanced project tracking and financial tools."
    },
    {
      title: "Digital Transformation",
      description: "Modernize your construction business with cutting-edge digital tools and automation."
    },
    {
      title: "Marketing & Lead Generation",
      description: "Powerful marketing solutions to help you attract and retain high-value clients."
    }
  ];

  const achievements = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Cities Served" },
    { number: "50K+", label: "Happy Clients" }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200/10 rounded-full -translate-y-48 translate-x-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Images */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative group">
                  <img 
                    src="/lovable-uploads/945e2e38-629d-4189-a5a8-cc875ee41ed7.png"
                    alt="Construction worker pouring concrete"
                    className="w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="relative group">
                  <img 
                    src="/lovable-uploads/945e2e38-629d-4189-a5a8-cc875ee41ed7.png"
                    alt="Professional working on laptop"
                    className="w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
            
            {/* Achievement stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                <TrendingUp className="w-4 h-4 mr-2" />
                Industry Leader
              </div>
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Transforming Construction Business with{" "}
                <span className="text-yellow-600">Innovative Solutions</span>
              </h2>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Contractorlist revolutionizes how construction professionals manage projects, connect with clients, and grow their businesses. Our comprehensive platform combines cutting-edge technology with industry expertise to deliver exceptional results.
            </p>

            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-yellow-500 text-black hover:bg-yellow-600 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Today
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;