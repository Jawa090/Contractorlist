import { Users, Building2, Award, TrendingUp } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Active Contractors",
      description: "Verified professionals across the country"
    },
    {
      icon: Building2,
      number: "25,000+",
      label: "Completed Projects",
      description: "Successfully delivered construction projects"
    },
    {
      icon: Award,
      number: "98%",
      label: "Client Satisfaction",
      description: "Based on verified customer reviews"
    },
    {
      icon: TrendingUp,
      number: "$500M+",
      label: "Project Value",
      description: "Total value of managed projects"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-yellow-50 to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Thousands of Construction Professionals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform has revolutionized how construction projects are managed and delivered across the industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <IconComponent className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsSection; 