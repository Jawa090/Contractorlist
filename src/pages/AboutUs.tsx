import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from 'react-router-dom';
import { Users, Award, Target, TrendingUp, CheckCircle, Star, Building2, Globe, Shield, Clock, Heart, Lightbulb, Handshake, Trophy, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const AboutUs = () => {
  const milestones = [
    { year: "2015", title: "Company Founded", description: "Started with a vision to revolutionize construction management" },
    { year: "2017", title: "First Major Project", description: "Completed our first $10M+ commercial development" },
    { year: "2019", title: "Technology Integration", description: "Launched our proprietary project management platform" },
    { year: "2021", title: "National Expansion", description: "Extended operations to 25+ major cities across the country" },
    { year: "2023", title: "Industry Recognition", description: "Awarded 'Construction Company of the Year' by Industry Leaders" },
    { year: "2024", title: "Sustainability Focus", description: "Achieved carbon-neutral operations and LEED certification" }
  ];

  const leadership = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      experience: "25+ years",
      education: "MBA, Harvard Business School",
      specialization: "Strategic Leadership & Business Development",
      image: "/api/placeholder/300/300",
      bio: "John founded Contractorlist with a vision to transform the construction industry through technology and innovation. His extensive background in both construction and technology has been instrumental in the company's growth."
    },
    {
      name: "Sarah Johnson",
      position: "Chief Technology Officer",
      experience: "20+ years",
      education: "MS Computer Science, MIT",
      specialization: "Construction Technology & Digital Innovation",
      image: "/api/placeholder/300/300",
      bio: "Sarah leads our technology initiatives, developing cutting-edge solutions that streamline construction processes. Her expertise in both software development and construction workflows drives our digital transformation."
    },
    {
      name: "Mike Davis",
      position: "Head of Operations",
      experience: "22+ years",
      education: "BS Civil Engineering, Stanford",
      specialization: "Project Management & Operations Excellence",
      image: "/api/placeholder/300/300",
      bio: "Mike oversees all operational aspects of our projects, ensuring quality delivery and client satisfaction. His field experience and operational expertise ensure seamless project execution."
    },
    {
      name: "Lisa Chen",
      position: "Chief Financial Officer",
      experience: "18+ years",
      education: "CPA, MBA Finance, Wharton",
      specialization: "Financial Strategy & Risk Management",
      image: "/api/placeholder/300/300",
      bio: "Lisa manages our financial strategy and ensures sustainable growth. Her expertise in construction finance and risk management has been crucial to our expansion and profitability."
    }
  ];

  const achievements = [
    { icon: Trophy, title: "Industry Awards", count: "25+", description: "Recognition for excellence and innovation" },
    { icon: Star, title: "Client Satisfaction", count: "98%", description: "Consistently high client satisfaction ratings" },
    { icon: Building2, title: "Projects Completed", count: "500+", description: "Successfully delivered projects of all sizes" },
    { icon: Globe, title: "Cities Served", count: "50+", description: "Nationwide presence and local expertise" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/api/placeholder/1920/600" 
            alt="Construction team at work" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center px-6 py-3 bg-yellow-500/20 backdrop-blur-sm rounded-full text-yellow-300 text-sm font-medium mb-8">
            🏗️ Building Excellence Since 2015
          </div>
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            Transforming Construction
            <span className="block text-yellow-400">Through Innovation</span>
          </h1>
          <p className="text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            We are more than just a construction company. We are visionaries, innovators, and builders 
            who are reshaping the future of construction through cutting-edge technology, sustainable practices, 
            and unwavering commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Services
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-8">
                Our Story
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Building Tomorrow's 
                <span className="text-yellow-500"> Infrastructure Today</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded in 2015 with a revolutionary vision, Contractorlist has grown from a small team of passionate 
                construction professionals to a leading force in the industry. We combine decades of construction expertise 
                with cutting-edge technology to deliver exceptional results that exceed expectations.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our commitment goes beyond just building structures – we build relationships, communities, and a sustainable 
                future. Every project we undertake reflects our dedication to quality, innovation, and environmental responsibility.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-yellow-500 mb-2">$2.5B+</div>
                  <div className="text-gray-600 font-medium">Total Project Value</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-yellow-500 mb-2">1000+</div>
                  <div className="text-gray-600 font-medium">Team Members</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/api/placeholder/600/500" 
                alt="Modern construction site" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-yellow-500 text-black p-8 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold mb-2">9 Years</div>
                <div className="font-medium">of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong principles that guide every decision we make and every project we deliver.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                To revolutionize the construction industry by delivering innovative, sustainable, and high-quality 
                solutions that exceed client expectations while fostering long-term partnerships and community development.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700">Excellence in every project</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700">Sustainable construction practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700">Client-centric approach</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-8">
                <Lightbulb className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                To become the global leader in construction innovation, setting new standards for quality, 
                sustainability, and technological advancement while creating lasting positive impact on communities worldwide.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-yellow-50 rounded-xl">
                  <Globe className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">Global Reach</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">Innovation</p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-8">
                <Heart className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our core values shape our culture and guide our actions, ensuring we maintain the highest 
                standards of integrity, quality, and professionalism in everything we do.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Integrity & Trust</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Teamwork & Collaboration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Quality & Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership - discover the milestones that shaped our success.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-200"></div>
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                      <div className="text-3xl font-bold text-yellow-500 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-6 h-6 bg-yellow-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Leadership Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders who drive our success and shape the future of construction.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-10">
                  <div className="flex items-start space-x-6">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-24 h-24 rounded-2xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                      <p className="text-yellow-600 font-bold mb-2">{leader.position}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {leader.experience}
                        </span>
                        <span>{leader.education}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="inline-flex px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
                      {leader.specialization}
                    </div>
                    <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and results that demonstrate our commitment to excellence and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl border border-yellow-200">
                  <div className="inline-flex p-4 bg-yellow-500 rounded-2xl mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-3">{achievement.count}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-8">Ready to Build Something Amazing?</h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Partner with industry leaders who bring vision, expertise, and innovation to every project. 
            Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              to="/join-network"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Join Our Network
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              View Our Projects
            </Link>
          </div>
          
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <MapPin className="w-6 h-6 text-yellow-500" />
              <span>Nationwide Coverage</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Phone className="w-6 h-6 text-yellow-500" />
              <span>1-800-CONTRACTOR</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Mail className="w-6 h-6 text-yellow-500" />
              <span>info@contractorlist.com</span>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;