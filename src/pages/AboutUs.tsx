import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Target, TrendingUp, CheckCircle, Star } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Contractorlist</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Connecting construction professionals with opportunities, driving industry growth, and building the future of construction management.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To revolutionize the construction industry by providing innovative digital solutions that streamline project management, 
                enhance collaboration, and drive efficiency across all construction phases.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-yellow-500" />
                  <span className="text-gray-700">Streamline construction processes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-yellow-500" />
                  <span className="text-gray-700">Connect professionals seamlessly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-yellow-500" />
                  <span className="text-gray-700">Drive industry innovation</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To become the leading digital platform that transforms how construction projects are planned, 
                executed, and managed worldwide.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">Growth</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <Target className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Impact in Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-500 mb-2">500+</div>
              <p className="text-gray-600">Active Projects</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-500 mb-2">1000+</div>
              <p className="text-gray-600">Professionals</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-500 mb-2">50+</div>
              <p className="text-gray-600">Cities Served</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-500 mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">John Smith</h3>
              <p className="text-yellow-600 font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                20+ years in construction management and digital innovation
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="h-12 w-12 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-yellow-600 font-medium mb-2">CTO</p>
              <p className="text-gray-600 text-sm">
                Technology expert with deep construction industry knowledge
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Star className="h-12 w-12 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mike Davis</h3>
              <p className="text-yellow-600 font-medium mb-2">Head of Operations</p>
              <p className="text-gray-600 text-sm">
                Operations specialist with 15+ years in project management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, ensuring the highest quality standards and customer satisfaction.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and building strong partnerships with our clients and stakeholders.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate and adapt to new technologies to stay ahead in the construction industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of construction professionals who trust Contractorlist for their project needs.
          </p>
          <div className="space-x-4">
            <Link
              to="/join-network"
              className="inline-block bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Join Our Network
            </Link>
            <Link
              to="/contact"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 