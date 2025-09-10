import { HardHat } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Popular Searches:",
      links: [
        "Restaurants, Pizza, Bars",
        "Beauty Salons, Hotels",
        "Hospitals, Medical Clinics",
        "Doctors, Dentists, Lawyers"
      ],
      subsection: {
        title: "Popular Cities:",
        links: [
          "Calgary, Edmonton, Gatineau",
          "Hamilton, Toronto, Winnipeg",
          "Vancouver, Montreal",
          "Ottawa, Quebec"
        ]
      }
    },
    {
      title: "Quick links:",
      links: [
        "Browse by category",
        "Browse by location",
        "Browse by neighbourhood",
        "Browse by products",
        "Smart Tips",
        "Toronto Articles",
        "CL Smart Lists"
      ],
      subsection: {
        title: "Advertisers:",
        links: [
          "Advertise with us",
          "Add a free listing",
          "Fraud Prevention"
        ]
      }
    },
    {
      title: "Popular Services:",
      links: [
        "Additions & Remodels",
        "Appliances",
        "Architects & Engineers",
        "Cabinets Countertops",
        "Carpentry",
        "Carpet",
        "Driveways, Patios & Walks",
        "Drywall & insulation",
        "Fences",
        "Flooring & Hardwood",
        "Garages, Doors, Openers",
        "Heating & Cooling"
      ]
    },
    {
      title: "For Contractor:",
      links: [
        "Complete Website",
        "Get Leads",
        "Digital Marketing",
        "Graphic Designing",
        "Get Quotations",
        "Social Marketing",
        "Email Marketing",
        "SMS Marketing",
        "Consultation",
        "Google Advertisement",
        "Seo",
        "Support Center",
        "Other Services"
      ]
    }
  ];

  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-800 mb-4 text-base">
                {section.title}
              </h3>
              <ul className="space-y-2 mb-6">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-gray-800 hover:underline underline-offset-4 decoration-2 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              
              {section.subsection && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm">
                    {section.subsection.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.subsection.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href="#" 
                          className="text-gray-600 hover:text-gray-800 hover:underline underline-offset-4 decoration-2 transition-colors text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex justify-center">
            <p className="text-gray-600 text-sm text-center">
              Copyright © 2004-2021 Contractor List - All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;