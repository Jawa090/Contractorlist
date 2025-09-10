import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { 
  Building, 
  Hammer, 
  Home, 
  Wrench,
  ArrowRight,
  DoorOpen,
  Bath,
  Search,
  MapPin
} from "lucide-react";
// dummy data consumed on the /contractors page

const HeroSection = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [serviceQuery, setServiceQuery] = useState("");

  const categories = [
    { icon: Bath, label: "Bathroom Remodel" },
    { icon: DoorOpen, label: "Windows & Doors" },
    { icon: Home, label: "Roofing & Gutters" },
    { icon: Building, label: "Masonry & Concrete" },
    { icon: Wrench, label: "Plumbing" },
    // Additional categories (hidden initially)
    { icon: Hammer, label: "Painting" },
    { icon: Building, label: "Building Remodeling" },
    { icon: Wrench, label: "Electrician" },
    { icon: Home, label: "HVAC Services" },
    { icon: Hammer, label: "Carpentry" },
    { icon: Building, label: "Flooring" },
    { icon: DoorOpen, label: "Kitchen Remodel" },
    { icon: Bath, label: "Landscaping" },
    { icon: Home, label: "Deck & Patio" }
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-yellow-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                One Platform.{" "}
                <span className="text-yellow-600">Multiple Solutions.</span>
              </h1>
            </div>

            {/* Search Section */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input 
                      placeholder="Zip Code"
                      className="pl-12 h-14 border-2 border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base rounded-xl bg-gray-50"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                    />
                  </div>
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input 
                      placeholder="Search"
                      className="pl-12 h-14 border-2 border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base rounded-xl bg-gray-50"
                      value={serviceQuery}
                      onChange={(e) => setServiceQuery(e.target.value)}
                    />
                  </div>
                  <a
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap py-2 bg-[#fce011] hover:bg-[#fce011]/90 text-black font-bold px-8 h-14 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    href={`/contractors?zip=${encodeURIComponent(zipCode)}${serviceQuery ? `&service=${encodeURIComponent(serviceQuery)}` : ""}`}
                    onClick={(e) => { if (!zipCode) e.preventDefault(); }}
                  >
                    Find Contractor
                  </a>
                </div>
              </div>
              {/* Inline Results removed: separate page handles listing */}
              <div className="text-center text-gray-600 font-semibold text-lg">OR</div>
            </div>

            <div>
              <Link to="/services" className="text-xl font-semibold text-gray-800 mb-4 underline decoration-2 underline-offset-4 cursor-pointer hover:text-yellow-600 transition-colors">
                Get Our Services.
              </Link>
              <p className="text-lg text-gray-600 mb-6">
                Most Popular Categories
              </p>

              {/* Service categories */}
              <div className="space-y-4">
                {/* First row of categories */}
                <div className="flex flex-row gap-4">
                  {categories.slice(0, 5).map((category, index) => {
                    const IconComponent = category.icon;
                    return (
                      <div key={index} className="flex flex-col items-center bg-white rounded-xl px-4 py-4 min-w-[120px] border border-gray-200 shadow-md hover:shadow-lg hover:border-yellow-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                        <div className="p-2 bg-yellow-100 rounded-lg mb-2">
                          <IconComponent className="w-5 h-5 text-yellow-600" />
                        </div>
                        <span className="text-xs text-gray-700 font-medium text-center leading-tight">
                          {category.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
                
                {/* +9 button below the row */}
                {!showAllCategories && (
                  <button 
                    onClick={() => setShowAllCategories(true)}
                    className="bg-[#fce011] hover:bg-[#fce011]/90 text-black font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    +9 More Services
                  </button>
                )}
                
                {/* Additional categories row (shown when +9 is clicked) */}
                {showAllCategories && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {categories.slice(5).map((category, index) => {
                      const IconComponent = category.icon;
                      return (
                        <div key={index + 5} className="flex flex-col items-center bg-white rounded-xl px-4 py-4 border border-gray-200 shadow-md hover:shadow-lg hover:border-yellow-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                          <div className="p-2 bg-yellow-100 rounded-lg mb-2">
                            <IconComponent className="w-5 h-5 text-yellow-600" />
                          </div>
                          <span className="text-xs text-gray-700 font-medium text-center leading-tight">
                            {category.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="lg:col-span-1 flex justify-end -mr-32 lg:-mr-96">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/b9965203-96b6-4c77-92c6-2a3bbd331d98.png"
                alt="Professional contractor with tools"
                className="w-auto h-auto max-w-none lg:max-w-4xl transform hover:scale-105 transition-transform duration-500"
                style={{maxHeight: '500px'}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;