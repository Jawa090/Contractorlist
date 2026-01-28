import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Sparkles,
  Search,
  FileText,
  BarChart3,
  Building2,
  ArrowRight,
  Users,
  CheckCircle,
  Zap,
  Globe,
  HeadphonesIcon,
  TrendingUp,
  Shield,
  ClipboardList,
  Wrench,
  TreePine,
  Package,
  Droplets,
  Paintbrush,
  Wind,
  Home,
  Hammer,
  Layers,
  HardHat,
  Gauge,
  Power,
  Settings,
  Box,
  ChevronRight,
  Phone,
  Target,
  Clock,
} from "lucide-react";
import VoiceAgentDemo from "./VoiceAgentDemo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PopularCategoriesSection = () => {
  const [activeTab, setActiveTab] = useState("ai-powered-project");
  const [activeCategory, setActiveCategory] = useState<string | null>("Plumbers");

  const scrollRight = (rowId: string) => {
    const container = document.getElementById(`category-scroll-container-${rowId}`);
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // All 30 categories for 2 rows (15 each) - including Welding
  const allCategories = [
    { name: "Cleaners", icon: Sparkles, color: "text-gray-700" },
    { name: "Handymen", icon: Wrench, color: "text-gray-700" },
    { name: "Landscapers", icon: TreePine, color: "text-gray-700" },
    { name: "Movers", icon: Package, color: "text-gray-700" },
    { name: "Plumbers", icon: Droplets, color: "text-gray-700" },
    { name: "Electrical pros", icon: Zap, color: "text-gray-700" },
    { name: "Painters", icon: Paintbrush, color: "text-gray-700" },
    { name: "HVA", icon: Wind, color: "text-gray-700" },
    { name: "Roofing", icon: Home, color: "text-gray-700" },
    { name: "Carpentry", icon: Hammer, color: "text-gray-700" },
    { name: "Flooring", icon: Layers, color: "text-gray-700" },
    { name: "Drywall", icon: Building2, color: "text-gray-700" },
    { name: "Concrete", icon: Shield, color: "text-gray-700" },
    { name: "Masonry", icon: HardHat, color: "text-gray-700" },
    { name: "Insulation", icon: Box, color: "text-gray-700" },
    { name: "Windows", icon: Home, color: "text-gray-700" },
    { name: "Doors", icon: Building2, color: "text-gray-700" },
    { name: "Siding", icon: Gauge, color: "text-gray-700" },
    { name: "Gutters", icon: Droplets, color: "text-gray-700" },
    { name: "Decking", icon: Building2, color: "text-gray-700" },
    { name: "Fencing", icon: TreePine, color: "text-gray-700" },
    { name: "Paving", icon: Building2, color: "text-gray-700" },
    { name: "Demolition", icon: Hammer, color: "text-gray-700" },
    { name: "Excavation", icon: HardHat, color: "text-gray-700" },
    { name: "Foundation", icon: Building2, color: "text-gray-700" },
    { name: "Welding", icon: Zap, color: "text-gray-700" },
    { name: "Tiling", icon: Layers, color: "text-gray-700" },
    { name: "Countertops", icon: Settings, color: "text-gray-700" },
    { name: "Cabinetry", icon: Box, color: "text-gray-700" },
    { name: "Appliances", icon: Power, color: "text-gray-700" },
  ];

  // Split into 2 rows of 15 each
  const firstRowCategories = allCategories.slice(0, 15);
  const secondRowCategories = allCategories.slice(15, 30);

  const tabs = [
    {
      id: "ai-powered-project",
      label: "AI-Powered Project Prospecting",
      icon: Sparkles,
    },
    {
      id: "ai-digital",
      label: "AI Digital Solutions",
      icon: Zap,
    },
    {
      id: "ai-assistant",
      label: "AI Assistant for Contractors",
      icon: Users,
    },
    {
      id: "web-design",
      label: "Professional Web Design",
      icon: Globe,
    },
    {
      id: "technical",
      label: "24/7 Technical Support",
      icon: HeadphonesIcon,
    },
  ];

  const services = {
    "ai-powered-project": {
      main: {
        title: "AI-Powered Project Prospecting",
        description:
          "Discover opportunities before your competition with intelligent lead generation and automated prospecting tools that give you the edge.",
        icon: Search,
        gradient: "from-[#fce011] to-[#fce011]",
      },
      cards: [
        {
          title: "Public/Private Lead Aggregator",
          description:
            "Advanced crawler that scrapes public planning commission records, building permits, and news reports in real-time",
          icon: FileText,
        },
        {
          title: "Bid Management Dashboard",
          description:
            "Comprehensive CRM-style interface for tracking pipelines from lead discovery to contract award",
          icon: BarChart3,
        },
        {
          title: "Company Tracking",
          description:
            "Follow specific Developers or Architects and get instant notifications for new project announcements",
          icon: ClipboardList,
        },
      ],
    },
    "ai-digital": {
      main: {
        title: "AI Digital Solutions",
        description:
          "Transform your digital presence with AI-powered marketing, automation, and optimization tools designed for construction professionals.",
        icon: Zap,
        gradient: "from-[#fce011] to-[#fce011]",
      },
      cards: [
        {
          title: "Digital Marketing",
          description:
            "AI-driven campaigns that target the right audience at the right time with personalized messaging",
          icon: Globe,
        },
        {
          title: "SEO Optimization",
          description:
            "Automated SEO strategies powered by AI to improve your online visibility and search rankings",
          icon: Search,
        },
        {
          title: "Social Media Management",
          description:
            "AI-powered content creation and intelligent scheduling for maximum engagement and reach",
          icon: Users,
        },
      ],
    },
    "ai-assistant": {
      main: {
        title: "AI Assistant for Contractors",
        description:
          "Your intelligent 24/7 assistant that helps with project management, decision-making, and workflow optimization.",
        icon: Users,
        gradient: "from-[#fce011] to-[#fce011]",
      },
      cards: [
        {
          title: "Project Planning",
          description:
            "AI-assisted project planning and timeline optimization for better outcomes and efficiency",
          icon: FileText,
        },
        {
          title: "Cost Estimation",
          description:
            "Intelligent cost estimation using historical data, market trends, and predictive analytics",
          icon: TrendingUp,
        },
        {
          title: "Document Management",
          description:
            "Automated document organization, retrieval, and version control for faster workflows",
          icon: Building2,
        },
      ],
    },
    "web-design": {
      main: {
        title: "Professional Web Design",
        description:
          "Custom websites designed to showcase your work, attract new clients, and establish your professional online presence.",
        icon: Globe,
        gradient: "from-[#fce011] to-[#fce011]",
      },
      cards: [
        {
          title: "Responsive Design",
          description:
            "Mobile-friendly websites that look stunning on all devices and screen sizes",
          icon: Globe,
        },
        {
          title: "Portfolio Showcase",
          description:
            "Beautiful galleries to display your completed projects and build trust with potential clients",
          icon: Building2,
        },
        {
          title: "Lead Generation Forms",
          description:
            "Optimized contact forms that capture and qualify leads automatically",
          icon: FileText,
        },
      ],
    },
    technical: {
      main: {
        title: "24/7 Technical Support",
        description:
          "Round-the-clock technical assistance from expert support team to keep your business running smoothly without interruption.",
        icon: HeadphonesIcon,
        gradient: "from-[#fce011] to-[#fce011]",
      },
      cards: [
        {
          title: "Remote Support",
          description:
            "Get instant help with technical issues from our expert support team, anytime you need it",
          icon: HeadphonesIcon,
        },
        {
          title: "System Maintenance",
          description:
            "Proactive monitoring and maintenance to prevent downtime and ensure optimal performance",
          icon: Shield,
        },
        {
          title: "Training & Onboarding",
          description:
            "Comprehensive training programs to help you maximize platform features and productivity",
          icon: Users,
        },
      ],
    },
  };

  const currentServices = services[activeTab as keyof typeof services];

  return (
    <div className="relative py-8 bg-gradient-to-br from-gray-50 via-white to-yellow-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unified Categories & AI Tools Section */}
        <div className="mb-12">
          {/* Consolidated Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-4 shadow-sm" style={{ backgroundColor: '#fce011' }}>
              <Sparkles className="w-4 h-4 text-black" />
              <span className="text-xs font-bold text-black uppercase tracking-tight">
                All-in-One Construction Intelligence Platform
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              Explore <span style={{ color: '#fce011' }}>Professional Categories</span> & <span style={{ color: '#fce011' }}>AI Tools</span>
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Find reliable subcontractors and use AI-powered insights to win more projects and scale your business.
            </p>
          </div>

          {/* Single Unified Container */}
          <div className="bg-[#f5f5f0] rounded-3xl p-5 sm:p-7 shadow-lg border border-gray-200/50">
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {/* Top Part: Categories - Now more compact */}
            <div className="mb-6 pb-6 border-b border-gray-300/30">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Popular Trade Categories</h3>
              </div>

              {/* Row 1 */}
              <div className="relative mb-3">
                <div
                  id="category-scroll-container-row1"
                  className="flex items-center gap-5 overflow-x-auto pb-2 scrollbar-hide scroll-smooth pr-10"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {firstRowCategories.map((category, index) => {
                    const IconComponent = category.icon;
                    const isActive = activeCategory === category.name;
                    return (
                      <button
                        key={`row1-${index}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveCategory(category.name);
                        }}
                        className="flex flex-col items-center gap-2 min-w-[70px] flex-shrink-0 transition-all duration-200 group"
                      >
                        <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-[#fce011]' : 'bg-white group-hover:bg-yellow-50 shadow-sm'}`}>
                          <IconComponent
                            className={`w-5 h-5 ${isActive ? 'text-black' : 'text-gray-700'}`}
                            strokeWidth={2}
                          />
                        </div>
                        <span className={`text-[10px] text-center leading-tight whitespace-nowrap ${isActive ? "text-gray-900 font-bold" : "text-gray-600 font-medium"}`}>
                          {category.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => scrollRight('row1')}
                  className="absolute right-0 top-[18px] flex items-center justify-center w-6 h-6 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-colors z-10"
                >
                  <ChevronRight className="w-4 h-4 text-gray-700" />
                </button>
              </div>

              {/* Row 2 */}
              <div className="relative">
                <div
                  id="category-scroll-container-row2"
                  className="flex items-center gap-5 overflow-x-auto pb-2 scrollbar-hide scroll-smooth pr-10"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {secondRowCategories.map((category, index) => {
                    const IconComponent = category.icon;
                    const isActive = activeCategory === category.name;
                    return (
                      <button
                        key={`row2-${index}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveCategory(category.name);
                        }}
                        className="flex flex-col items-center gap-2 min-w-[70px] flex-shrink-0 transition-all duration-200 group"
                      >
                        <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-[#fce011]' : 'bg-white group-hover:bg-yellow-50 shadow-sm'}`}>
                          <IconComponent
                            className={`w-5 h-5 ${isActive ? 'text-black' : 'text-gray-700'}`}
                            strokeWidth={2}
                          />
                        </div>
                        <span className={`text-[10px] text-center leading-tight whitespace-nowrap ${isActive ? "text-gray-900 font-bold" : "text-gray-600 font-medium"}`}>
                          {category.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => scrollRight('row2')}
                  className="absolute right-0 top-[18px] flex items-center justify-center w-6 h-6 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-colors z-10"
                >
                  <ChevronRight className="w-4 h-4 text-gray-700" />
                </button>
              </div>
            </div>

            {/* Bottom Part: AI Tools Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch">
              {/* Left Side - Vertical Tabs */}
              <div className="lg:col-span-2 flex flex-col space-y-1.5">
                <h3 className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mb-1 px-1">AI-Powered Solutions</h3>
                <div className="flex flex-col gap-1.5 flex-1">
                  {tabs.map((tab) => {
                    const TabIcon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left font-bold transition-all duration-200 flex-1 ${isActive
                          ? "bg-[#fce011] text-black shadow-sm"
                          : "bg-black/5 text-gray-700 hover:bg-black/10 border border-transparent"
                          }`}
                      >
                        <TabIcon className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? 'text-black' : 'text-gray-500'}`} />
                        <span className="text-[11px] sm:text-xs">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Side - Cards aligned to Left Height */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 h-full">
                  {currentServices.cards.map((card, index) => {
                    const cardImages = [
                      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
                      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop",
                      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop",
                    ];

                    return (
                      <div
                        key={index}
                        className="relative rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:border-[#fce011] hover:shadow-md transition-all duration-300 group h-full min-h-[140px]"
                      >
                        <img
                          src={cardImages[index] || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop"}
                          alt={card.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Text Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3">
                          <h4 className="text-[10px] font-bold text-white text-center leading-tight uppercase tracking-tight group-hover:text-[#fce011] transition-colors leading-relaxed">
                            {card.title}
                          </h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated GC Voice Agent Section */}
        <div className="mb-24 mt-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Description */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[#fce011] text-black font-black px-4 py-1.5 rounded-full uppercase tracking-widest text-[10px]">
                  NEW: GC VOICE TERMINAL
                </Badge>
                <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight uppercase tracking-tighter">
                  MEET <span className="text-[#fce011]">MORGAN</span>: YOUR 24/7 AI General Contractor
                </h2>
                <p className="text-lg text-gray-600 font-medium leading-relaxed">
                  <b> Call Now +1 (321) 237 9018</b>
                </p>
                <p className="text-lg text-gray-600 font-medium leading-relaxed">
                  Our advanced AI voice agent handles all your incoming construction calls with professional precision. From estimate requests to subcontractor coordination, Morgan is always on duty.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Smart Estimator", desc: "Calculates material and labor costs on the fly.", icon: Zap },
                  { title: "Lead Processor", desc: "Identifies and qualifies new project signals instantly.", icon: Target },
                  { title: "24/7 Availability", desc: "Never miss a critical call or emergency again.", icon: Clock },
                  { title: "CSI Divisions", desc: "Fluent in all trades from concrete to finishing.", icon: Building2 },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 dark:bg-gray-800/50 dark:border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-[#fce011]/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-[#fce011]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 dark:text-white uppercase tracking-tight">{feature.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Button
                  className="h-14 px-8 bg-black text-white hover:bg-gray-800 font-bold uppercase tracking-widest text-xs rounded-2xl group transition-all"
                  onClick={() => {
                    const el = document.getElementById('voice-demo-terminal');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Experience the Demo <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Right Column: Mobile Demo Terminal */}
            <div id="voice-demo-terminal" className="relative flex justify-center lg:justify-end">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#fce011]/20 blur-[100px] rounded-full -z-10" />
              <VoiceAgentDemo />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#fce011] via-[#fce011]/90 to-[#fce011] rounded-2xl p-8 sm:p-10 shadow-xl mb-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span className="text-black font-semibold text-sm">
                Trusted by 10,000+ contractors nationwide
              </span>
            </div>

            {/* Heading */}
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 leading-tight">
              Ready to Transform Your Pre-Construction Process?
            </h3>

            {/* Description */}
            <p className="text-base text-black/95 mb-8 max-w-2xl mx-auto">
              Join thousands of contractors using AI to discover leads, automate
              takeoffs, and win more profitable projects.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-black font-semibold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black hover:bg-black/90 text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Schedule Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-black">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-black" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-black" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-black" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PopularCategoriesSection;
