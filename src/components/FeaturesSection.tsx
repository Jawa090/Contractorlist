import { Shield, Clock, DollarSign, Users, FileText, Award } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Professionals",
      description: "All contractors are thoroughly vetted and background-checked for your peace of mind."
    },
    {
      icon: Clock,
      title: "Quick Response Time",
      description: "Get quotes and responses from contractors within 24 hours on average."
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Compare multiple quotes to ensure you get the best value for your project."
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Access to specialized contractors for every type of construction project."
    },
    {
      icon: FileText,
      title: "Project Management",
      description: "Comprehensive tools to track progress and manage your construction projects."
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "Our satisfaction guarantee ensures your project meets the highest standards."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Contractorlist?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive solutions that streamline your construction projects from start to finish.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-yellow-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-yellow-100 rounded-lg mr-4">
                    <IconComponent className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection; 
