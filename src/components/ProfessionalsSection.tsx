import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, MapPin, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProfessionalsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const professionals = [
    {
      image: "/lovable-uploads/3ab6fc71-908d-4f8b-93ff-4dd70ced331d.png",
      title: "Architecture & Building Designers",
      category: "Design & Planning",
      rating: 4.9,
      reviews: 284,
      location: "New York, NY",
      experience: "15+ years",
      projects: "150+ completed"
    },
    {
      image: "/lovable-uploads/8e4131cc-4e5b-4ddd-973b-575864713228.png", 
      title: "General Contractors",
      category: "Construction",
      rating: 4.8,
      reviews: 456,
      location: "Los Angeles, CA",
      experience: "12+ years",
      projects: "200+ completed"
    },
    {
      image: "/lovable-uploads/dec61d66-ecf0-4ea4-84af-45bfd142290e.png",
      title: "Interior Builders",
      category: "Interior Construction",
      rating: 4.7,
      reviews: 189,
      location: "Chicago, IL",
      experience: "10+ years",
      projects: "120+ completed"
    },
    {
      image: "/lovable-uploads/31137019-10ab-4c85-806a-3e0a055ba13e.png",
      title: "Interior Designers & Decorators", 
      category: "Design & Decor",
      rating: 4.9,
      reviews: 312,
      location: "Miami, FL",
      experience: "8+ years",
      projects: "95+ completed"
    },
    {
      image: "/lovable-uploads/c3dd6d5a-2102-4189-bb40-49744c82dca1.png",
      title: "Landscape Contractors",
      category: "Landscaping",
      rating: 4.6,
      reviews: 167,
      location: "Seattle, WA",
      experience: "14+ years",
      projects: "180+ completed"
    },
    {
      image: "/lovable-uploads/a84a1e01-8197-4647-bb09-4b82d3d24f0b.png",
      title: "Kitchen & Bathroom Remodeling",
      category: "Remodeling",
      rating: 4.8,
      reviews: 398,
      location: "Austin, TX",
      experience: "11+ years",
      projects: "220+ completed"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === professionals.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? professionals.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Verified Professionals
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Top-Rated Construction Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with verified, experienced professionals who have proven track records and excellent client satisfaction ratings.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-xl rounded-full p-4 transition-all duration-300 hover:scale-110 border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-xl rounded-full p-4 transition-all duration-300 hover:scale-110 border border-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden px-16">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {professionals.map((professional, index) => (
                <div key={index} className="group cursor-pointer flex-shrink-0 w-1/3 px-4">
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2 h-[560px] flex flex-col">
                    <div className="relative overflow-hidden">
                      <img 
                        src={professional.image}
                        alt={professional.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                          {professional.category}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center mb-3">
                        <div className="flex items-center mr-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(professional.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {professional.rating} ({professional.reviews} reviews)
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                        {professional.title}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-yellow-500" />
                          {professional.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Award className="w-4 h-4 mr-2 text-yellow-500" />
                          {professional.experience} experience
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-2 text-yellow-500" />
                          {professional.projects}
                        </div>
                      </div>
                      
                      <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-600 font-semibold transition-colors mt-auto">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: Math.ceil(professionals.length / 3) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === Math.floor(currentIndex / 3) 
                    ? 'bg-yellow-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-600 hover:to-yellow-700 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Browse All Professionals
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalsSection;
