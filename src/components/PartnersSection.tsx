import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Home,
  Shield,
  Droplets,
  Building2,
  Radio,
  Sofa,
  Wrench,
  Power,
  Sparkles,
  Users,
  ChevronRight,
  ChevronLeft,
  Hammer,
  Paintbrush,
  HardHat,
  Zap,
  Wind,
  Car,
  TreePine,
  Sprout,
  Palette,
  Layers,
  Gauge,
  FileText,
  Settings,
  Box,
} from "lucide-react";

const PartnersSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const scrollRight = () => {
    const container = document.getElementById('category-scroll-container');
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    const container = document.getElementById('category-scroll-container');
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const categories = [
    {
      name: "roofing contractors near me",
      icon: Home,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
    },
    {
      name: "asbestos abatement near me",
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-50",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
    },
    {
      name: "basement leak repair near me",
      icon: Droplets,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
    },
    {
      name: "basement waterproofing near me",
      icon: Layers,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
    },
    {
      name: "new roofing installation near me",
      icon: Hammer,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
    },
    {
      name: "garage remodeling near me",
      icon: Building2,
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    },
    {
      name: "awning contractors near me",
      icon: Car,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
    },
    {
      name: "repair home audio near me",
      icon: Radio,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      image: "https://images.unsplash.com/photo-1563297007-0686b8b4a8c7?w=800&h=600&fit=crop",
    },
    {
      name: "repair patio furniture near me",
      icon: Sofa,
      color: "text-green-600",
      bgColor: "bg-green-50",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    },
    {
      name: "plumbing contractor near me",
      icon: Wrench,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
    },
    {
      name: "power washing near me",
      icon: Power,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    },
    {
      name: "recliner repair near me",
      icon: Settings,
      color: "text-green-600",
      bgColor: "bg-green-50",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    },
    {
      name: "basement remodeling near me",
      icon: HardHat,
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    },
    {
      name: "roof siding near me",
      icon: Gauge,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
    },
    {
      name: "facade repair near me",
      icon: Paintbrush,
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    },
    {
      name: "electrical contractors near me",
      icon: Zap,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    },
    {
      name: "HVAC contractors near me",
      icon: Wind,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    },
    {
      name: "painting contractors near me",
      icon: Palette,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
    },
  ];

  const additionalServices = [
    { name: "concrete contractors near me", icon: Building2, color: "text-gray-600", bgColor: "bg-gray-50", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop" },
    { name: "drywall repair near me", icon: Building2, color: "text-gray-600", bgColor: "bg-gray-50", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop" },
    { name: "electrical contractors near me", icon: Power, color: "text-yellow-600", bgColor: "bg-yellow-50", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop" },
    { name: "fence installation near me", icon: Building2, color: "text-gray-600", bgColor: "bg-gray-50", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop" },
    { name: "flooring contractors near me", icon: Building2, color: "text-gray-600", bgColor: "bg-gray-50", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop" },
    { name: "gutter cleaning near me", icon: Droplets, color: "text-blue-600", bgColor: "bg-blue-50", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop" },
    { name: "handyman services near me", icon: Wrench, color: "text-blue-600", bgColor: "bg-blue-50", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop" },
    { name: "insulation contractors near me", icon: Building2, color: "text-gray-600", bgColor: "bg-gray-50", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop" },
    { name: "kitchen remodeling near me", icon: Home, color: "text-orange-600", bgColor: "bg-orange-50", image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=800&h=600&fit=crop" },
    { name: "landscaping contractors near me", icon: Building2, color: "text-green-600", bgColor: "bg-green-50", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop" },
    { name: "painting contractors near me", icon: Home, color: "text-orange-600", bgColor: "bg-orange-50", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop" },
    { name: "tile installation near me", icon: Building2, color: "text-gray-600", bgColor: "bg-gray-50", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop" },
    { name: "window replacement near me", icon: Home, color: "text-orange-600", bgColor: "bg-orange-50", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop" },
    { name: "deck builders near me", icon: Building2, color: "text-gray-600", bgColor: "bg-gray-50", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop" },
    { name: "pool contractors near me", icon: Droplets, color: "text-blue-600", bgColor: "bg-blue-50", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop" },
    { name: "solar panel installation near me", icon: Power, color: "text-yellow-600", bgColor: "bg-yellow-50", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop" },
    { name: "HVAC contractors near me", icon: Power, color: "text-yellow-600", bgColor: "bg-yellow-50", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop" },
    { name: "carpet installation near me", icon: Building2, color: "text-gray-600", bgColor: "bg-gray-50", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop" },
    { name: "cabinet installation near me", icon: Building2, color: "text-gray-600", bgColor: "bg-gray-50", image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=800&h=600&fit=crop" },
    { name: "countertop installation near me", icon: Building2, color: "text-gray-600", bgColor: "bg-gray-50", image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=800&h=600&fit=crop" },
  ];

  const displayedCategories = [...categories, ...additionalServices];

  // Get related services based on active category
  const getRelatedServices = () => {
    if (!activeCategory) {
      return categories.slice(0, 4);
    }
    
    const activeIndex = categories.findIndex(cat => cat.name === activeCategory);
    if (activeIndex === -1) return categories.slice(0, 4);
    
    // Get 4 related services starting from the active one
    const related = [];
    for (let i = 0; i < 4; i++) {
      const index = (activeIndex + i) % categories.length;
      related.push(categories[index]);
    }
    return related;
  };

  const featuredServices = getRelatedServices();

  return (
    <div className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-yellow-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-50 rounded-full mb-6 shadow-sm">
            <Users className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-600">
              Join Over 1M+ Network of Construction Professionals!
            </span>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Best place for General Contractors to find suitable, reliable &
            economical sub-contractors
          </p>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            <span className="text-gray-900">Popular Construction Professional </span>
            <span className="text-orange-600">Categories</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-2">
            Explore our comprehensive directory of verified construction professionals
          </p>
        </div>

        {/* Horizontal Category Navigation Bar */}
        <div className="mb-8 relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-gray-50 shadow-md z-10"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div 
            id="category-scroll-container"
            className="flex items-center gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth px-12" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {categories.slice(0, 18).map((category, index) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.name || (activeCategory === null && index === 0);
              return (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveCategory(category.name);
                  }}
                  className={`flex flex-col items-center gap-2 min-w-[80px] pb-2 transition-all duration-200 flex-shrink-0 ${
                    isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`${category.bgColor} w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:opacity-90`}
                    style={{
                      transform: isActive ? "scale(1.1)" : "scale(1)",
                      boxShadow: isActive ? "0 4px 12px rgba(0,0,0,0.15)" : "none"
                    }}
                  >
                    <IconComponent
                      className={`w-6 h-6 ${category.color}`}
                      strokeWidth={2}
                    />
                  </div>
                  <span
                    className={`text-xs font-medium text-center leading-tight px-1 ${
                      isActive
                        ? "text-orange-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {category.name.replace(" near me", "")}
                  </span>
                  {isActive && (
                    <div className="w-full h-0.5 bg-orange-600 rounded-full mt-1"></div>
                  )}
                </button>
              );
            })}
          </div>
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-gray-50 shadow-md z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Featured Service Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {featuredServices.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={`${category.name}-${index}`}
                to={`/contractors?service=${encodeURIComponent(
                  category.name.replace(" near me", "")
                )}`}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: category.image ? `url(${category.image})` : 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)'
                  }}
                >
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
                
                {/* Icon overlay */}
                <div className="absolute top-4 right-4">
                  <div className={`${category.bgColor} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent
                      className={`w-6 h-6 ${category.color}`}
                      strokeWidth={2}
                    />
                  </div>
                </div>
                
                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm sm:text-base drop-shadow-lg">
                    {category.name.replace(" near me", "")}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>


        {/* Bottom divider */}
        <div className="mt-16 border-t-2 border-gray-200" />
      </div>
    </div>
  );
};

export default PartnersSection;
