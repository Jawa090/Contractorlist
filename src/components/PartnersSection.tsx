import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const PartnersSection = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const additionalServices = [
    "concrete contractors near me",
    "drywall repair near me", 
    "electrical contractors near me",
    "fence installation near me",
    "flooring contractors near me",
    "gutter cleaning near me",
    "handyman services near me",
    "insulation contractors near me",
    "kitchen remodeling near me",
    "landscaping contractors near me",
    "painting contractors near me",
    "tile installation near me",
    "window replacement near me",
    "deck builders near me",
    "pool contractors near me",
    "solar panel installation near me",
    "HVAC contractors near me",
    "carpet installation near me",
    "cabinet installation near me",
    "countertop installation near me"
  ];
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top note with upper line */}
        <div className="border-t border-gray-200 pt-2">
          <div className="text-center text-[15px] font-extrabold text-black tracking-tight">
            Join Over 1M+ Network of Construction Professionals!
          </div>
          <div className="text-center text-[13px] text-gray-600 mt-1">
            Best place for General Contractors to find suitable, reliable & economical sub-contractors
          </div>
        </div>

        {/* Divider */}
        <div className="mt-4 border-t border-gray-200 relative">
          <button 
            onClick={() => setShowAllServices(!showAllServices)}
            className="absolute right-0 -top-4 flex flex-col items-center leading-none hover:opacity-80 transition-opacity"
          >
            <span className="text-[12px] font-extrabold text-black">
              {showAllServices ? 'show less' : 'expand more'}
            </span>
            <span className="mt-0.5 block w-14 h-3 bg-yellow-400 rounded-sm" />
            <span className={`-mt-1 block w-3 h-3 bg-yellow-400 rounded-[2px] transition-transform duration-300 ${showAllServices ? 'rotate-225' : 'rotate-45'}`} />
          </button>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-gray-900">
          <span className="text-black">Popular </span>
          <span className="text-yellow-500">Construction Professional </span>
          <span className="text-black">Categories</span>
        </h2>

        {/* Bullet columns */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <ul className="space-y-2 text-gray-800">
            <li className="list-disc list-inside">roofing contractors near me</li>
            <li className="list-disc list-inside">asbestos abatement near me</li>
            <li className="list-disc list-inside">basement leak repair near me</li>
            <li className="list-disc list-inside">basement waterproofing near me</li>
            <li className="list-disc list-inside">new roofing installation near me</li>
          </ul>
          <ul className="space-y-2 text-gray-800">
            <li className="list-disc list-inside">garage remodeling near me</li>
            <li className="list-disc list-inside">awning contractors near me</li>
            <li className="list-disc list-inside">repair home audio near me</li>
            <li className="list-disc list-inside">repair patio furniture near me</li>
            <li className="list-disc list-inside">plumbing contractor near me</li>
          </ul>
          <ul className="space-y-2 text-gray-800">
            <li className="list-disc list-inside">power washing near me</li>
            <li className="list-disc list-inside">recliner repair near me</li>
            <li className="list-disc list-inside">basement remodeling near me</li>
            <li className="list-disc list-inside">roof siding near me</li>
            <li className="list-disc list-inside">facade repair near me</li>
          </ul>
          <ul className="space-y-2 text-gray-800">
            <li className="list-disc list-inside">roofing contractors near me</li>
            <li className="list-disc list-inside">asbestos abatement near me</li>
            <li className="list-disc list-inside">basement leak repair near me</li>
            <li className="list-disc list-inside">repair home audio near me</li>
            <li className="list-disc list-inside">basement leak repair near me</li>
          </ul>
        </div>

        {/* Expandable additional services */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showAllServices ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            {[0, 1, 2, 3].map(colIndex => (
              <ul key={colIndex} className="space-y-2 text-gray-800">
                {additionalServices.slice(colIndex * 5, (colIndex + 1) * 5).map((service, index) => (
                  <li key={index} className="list-disc list-inside">{service}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-6 border-t border-gray-200" />
      </div>
    </div>
  );
};

export default PartnersSection;