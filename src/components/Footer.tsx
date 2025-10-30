import { HardHat, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Popular Services",
      links: [
        "Additions & Remodels",
        "Appliances",
        "Architects & Engineers",
        "Cabinets Countertops",
        "Carpentry",
        "Flooring & Hardwood",
        "Heating & Cooling",
        "Plumbing Services"
      ]
    },
    {
      title: "For Contractors",
      links: [
        "Complete Website",
        "Get Leads",
        "Digital Marketing",
        "Graphic Designing",
        "Social Marketing",
        "Email Marketing",
        "SEO Services",
        "Support Center"
      ]
    },
    {
      title: "Quick Links",
      links: [
        "Browse by Category",
        "Browse by Location",
        "Add Free Listing",
        "Advertise with Us",
        "Smart Tips",
        "Articles",
        "Case Studies",
        "Testimonials"
      ]
    },
    {
      title: "Popular Cities",
      links: [
        "Calgary",
        "Edmonton",
        "Toronto",
        "Vancouver",
        "Montreal",
        "Ottawa",
        "Winnipeg",
        "Hamilton"
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Company Info Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-br from-[#fce011] to-yellow-400 rounded-2xl mr-4">
                <HardHat className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-white">Contractor List</h2>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Your trusted platform connecting homeowners with verified, professional contractors. 
              Quality work, reliable service, guaranteed satisfaction.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-bold text-[#fce011] mb-6 text-lg">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-gray-300 hover:text-[#fce011] hover:underline underline-offset-4 transition-colors text-sm leading-relaxed"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact & Social Section */}
          <div className="bg-gray-800/50 rounded-3xl p-8 mb-12 border border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#fce011] mr-3" />
                    <span className="text-gray-300">info@contractorlist.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-[#fce011] mr-3" />
                    <span className="text-gray-300">1-800-CONTRACTOR</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-[#fce011] mr-3" />
                    <span className="text-gray-300">Serving All Major Cities</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="text-center lg:text-right">
                <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
                <div className="flex justify-center lg:justify-end space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="p-3 bg-gray-700 hover:bg-[#fce011] text-gray-300 hover:text-black rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Contractor List. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#fce011] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#fce011] text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#fce011] text-sm transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#fce011] text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;