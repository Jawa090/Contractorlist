import { Building2, Shield, Award, Users, TrendingUp } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const PartnersSection = () => {
  const partners = [
    { 
      name: "Construction Pro", 
      logoSrc: "/logo1.png",
      type: "General Contracting",
      rating: "4.9/5",
      projects: "500+"
    },
    { 
      name: "BuildTech Solutions", 
      logoSrc: "/logo-v2-01.jpg",
      type: "Technology Partner",
      rating: "4.8/5",
      projects: "300+"
    },
    { 
      name: "Elite Builders", 
      logoSrc: "/logo-v2-03.jpg",
      type: "Premium Construction",
      rating: "4.9/5",
      projects: "750+"
    },
    { 
      name: "Modern Structures", 
      logoSrc: "/icon.png",
      type: "Architecture & Design",
      rating: "4.7/5",
      projects: "400+"
    },
    { 
      name: "Quality First", 
      logoSrc: "/fav-icon.png",
      type: "Quality Assurance",
      rating: "4.9/5",
      projects: "600+"
    },
    { 
      name: "Innovation Build", 
      logoSrc: "/main-logo.png",
      type: "Innovation Partner",
      rating: "4.8/5",
      projects: "450+"
    }
  ];

  const stats = [
    { icon: Building2, number: "2,000+", label: "Projects Completed" },
    { icon: Shield, number: "100%", label: "Verified Partners" },
    { icon: Award, number: "4.9/5", label: "Average Rating" },
    { icon: Users, number: "50+", label: "Partner Companies" }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Trusted Partners
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Verified Construction Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with the most trusted and experienced construction companies to deliver exceptional results for your projects.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-yellow-100 rounded-xl">
                    <IconComponent className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Partners Slider */}
        <Carousel className="relative" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                <div 
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 hover:border-yellow-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center overflow-hidden">
                        <img src="/icon.png" alt={`${partner.name} logo`} className="w-10 h-10 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                          {partner.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {partner.type}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < Math.floor(parseFloat(partner.rating)) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-gray-700">
                        {partner.rating}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {partner.projects} projects
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Become a Partner
            </h3>
            <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
              Join our network of trusted construction professionals and grow your business with Contractorlist.
            </p>
            <button className="bg-white text-yellow-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;