import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layout, Palette, Smartphone, Zap, Globe, Star, CheckCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const WebsiteDesign = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Website Design</h1>
          <p className="text-sm text-gray-500 mt-1">Professional website design services for contractors</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Basic Package */}
        <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 shadow-sm flex flex-col">
          <CardHeader className="bg-gray-50/50 border-b border-gray-100 pb-8">
            <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-4 shadow-sm">
              <Layout className="w-6 h-6 text-gray-900" />
            </div>
            <CardTitle className="text-xl font-bold text-gray-900">Basic Package</CardTitle>
            <div className="flex items-baseline mt-2">
              <span className="text-3xl font-bold text-gray-900">$999</span>
              <span className="text-sm text-gray-500 ml-1">/one-time</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">Perfect for small businesses just getting started.</p>
          </CardHeader>
          <CardContent className="p-6 flex-1 flex flex-col">
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "5-Page Website",
                "Mobile Responsive",
                "Contact Form",
                "Basic SEO Setup",
                "1 Month Support"
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50 text-gray-900 font-semibold">
              Get Started
            </Button>
          </CardContent>
        </Card>

        {/* Professional Package */}
        <Card className="hover:shadow-xl transition-all duration-300 border-black shadow-md relative flex flex-col transform md:-translate-y-2">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
            MOST POPULAR
          </div>
          <CardHeader className="bg-gray-50/50 border-b border-gray-100 pb-8">
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-black/20">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-xl font-bold text-gray-900">Professional</CardTitle>
            <div className="flex items-baseline mt-2">
              <span className="text-3xl font-bold text-gray-900">$1,999</span>
              <span className="text-sm text-gray-500 ml-1">/one-time</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">Everything you need to grow your online presence.</p>
          </CardHeader>
          <CardContent className="p-6 flex-1 flex flex-col">
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "10-Page Website",
                "Custom Design & Branding",
                "Portfolio Gallery",
                "Advanced SEO",
                "Blog Integration",
                "Google Maps Integration",
                "3 Months Support"
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-black mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full bg-black hover:bg-gray-800 text-white shadow-lg shadow-black/20 transition-all font-semibold">
              Get Started
            </Button>
          </CardContent>
        </Card>

        {/* Premium Package */}
        <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 shadow-sm flex flex-col">
          <CardHeader className="bg-gray-50/50 border-b border-gray-100 pb-8">
            <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-4 shadow-sm">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <CardTitle className="text-xl font-bold text-gray-900">Premium</CardTitle>
            <div className="flex items-baseline mt-2">
              <span className="text-3xl font-bold text-gray-900">$3,499</span>
              <span className="text-sm text-gray-500 ml-1">/one-time</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">For contractors who want to dominate their market.</p>
          </CardHeader>
          <CardContent className="p-6 flex-1 flex flex-col">
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Unlimited Pages",
                "Premium Custom Design",
                "E-commerce / Payment Ready",
                "Premium SEO Package",
                "Content Writing Included",
                "Booking System Integration",
                "6 Months Priority Support"
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50 text-gray-900 font-semibold">
              Get Started
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <CardContent className="p-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Why Choose Our Website Design?</h3>
              <p className="text-gray-300 mb-6">We build websites specifically for contractors, focusing on lead generation and showcasing your best work.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Mobile-First</h4>
                    <p className="text-xs text-gray-400 mt-1">Optimized for all devices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Fast Loading</h4>
                    <p className="text-xs text-gray-400 mt-1">Lightning speed performance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button className="bg-white text-black hover:bg-gray-100 font-bold px-8">
                Schedule a Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WebsiteDesign;
