import { Button } from "@/components/ui/button";
import { Building2, DollarSign, Users, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
          {/* Left Content */}
          <div className="space-y-12">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl font-bold text-black mb-6">
                Our Products for Contractors
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg max-w-lg">
                Contractorlist.com is an indispensable resource within the construction
                industry, facilitating connections between project decision-makers,
                subcontractors and other service providers nationwide.
              </p>
            </div>

            {/* Service Icons Grid - 4 circles in a row */}
            <div className="grid grid-cols-4 gap-8 py-8">
              <div className="flex flex-col items-center">
                <div className="w-44 h-44 border-4 border-yellow-400 rounded-full bg-white flex flex-col items-center justify-center mb-4">
                  <Building2 className="w-12 h-12 text-gray-600 mb-2" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-500">60000+</div>
                    <div className="text-xs text-gray-600 font-medium">PROJECT COMPLETED</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-44 h-44 border-4 border-yellow-400 rounded-full bg-white flex flex-col items-center justify-center mb-4">
                  <DollarSign className="w-12 h-12 text-gray-600 mb-2" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-500">$3.5B+</div>
                    <div className="text-xs text-gray-600 font-medium">VALUE DELIVERED</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-44 h-44 border-4 border-yellow-400 rounded-full bg-white flex flex-col items-center justify-center mb-4">
                  <Users className="w-12 h-12 text-gray-600 mb-2" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-500">50000+</div>
                    <div className="text-xs text-gray-600 font-medium">HAPPY CUSTOMERS</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-44 h-44 border-4 border-yellow-400 rounded-full bg-white flex flex-col items-center justify-center mb-4">
                  <Star className="w-12 h-12 text-gray-600 mb-2" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-500">5000+</div>
                    <div className="text-xs text-gray-600 font-medium">HAPPY CUSTOMERS</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="space-y-4">
                <p className="text-gray-600 text-lg">
                  For complete end to end<br />
                  support we see<br />
                  our services offerings.
                </p>
              </div>

              <div className="flex-1 flex justify-end">
                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-12 py-4 rounded-full text-lg shadow-2xl border-2 border-black">
                  Complete Product Suite
                </Button>
              </div>
            </div>


          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-5xl font-bold text-black mb-6">
                Manage your <span className="text-yellow-500">free</span> listing.
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Update your business information in a few steps. Make it easy for your
                customers to find you on Contractorlist.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                <span className="bg-yellow-400 px-3 py-1 rounded-full text-sm font-bold text-black">New!</span>
                <span className="ml-2">Post a job opening on your free listing.</span>
              </p>
              <div className="mb-8">
                <p className="text-black font-bold text-xl mb-2">
                  Claim your free listing
                </p>
                <p className="text-gray-600 text-lg">
                  or Call @ 800 223 1891
                </p>
              </div>

              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-12 py-4 rounded-full text-lg shadow-2xl border-2 border-black mb-12">
                Claim now!
              </Button>
            </div>

            {/* Laptop Image */}
            <div className="flex justify-center">
              <img src="/a.png" alt="Laptop showing business management" className="w-full max-w-md" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-black leading-tight">
              We build <span className="text-yellow-500">websites</span>, <span className="text-yellow-500">marketing<br />campaigns</span> and <span className="text-yellow-500">full tech support</span><br />
              for Construction pros.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Stop investing in your website and marketing over and over again. No need to
              second guess what works, we already know.
            </p>

            {/* Awards/Badges */}
            <div className="pt-4">
              <img src="/l.png" alt="Awards and certifications" className="w-full max-w-lg" />
            </div>
          </div>

          {/* Right Content - Construction Worker Image */}
          <div className="flex justify-center lg:justify-end">
            <img src="/c.png" alt="Construction professional" className="w-full max-w-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;