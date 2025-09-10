import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, Users, Building2, Award, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Rodriguez",
      position: "Project Manager",
      company: "ABC Construction Co.",
      rating: 5,
      content: "Contractorlist transformed how we manage our projects. The platform's efficiency tools helped us complete our downtown office complex 3 months ahead of schedule while saving 15% on costs. The team's expertise and support are unmatched.",
      project: "Downtown Office Complex",
      value: "$25M",
      duration: "18 months",
      avatar: "/client-1.jpg"
    },
    {
      id: 2,
      name: "Sarah Chen",
      position: "Director of Operations",
      company: "Healthcare Facilities Inc.",
      rating: 5,
      content: "Working with Contractorlist on our hospital renovation was exceptional. They maintained full operational capacity while ensuring zero safety incidents. Their attention to healthcare regulations and patient safety was outstanding.",
      project: "Hospital Wing Renovation",
      value: "$18M",
      duration: "12 months",
      avatar: "/client-1.jpg"
    },
    {
      id: 3,
      name: "David Thompson",
      position: "CEO",
      company: "Urban Development Group",
      rating: 5,
      content: "The residential community project exceeded our expectations. Contractorlist's innovative approach to supply chain management and sustainable building practices resulted in LEED Gold certification and 95% occupancy rate.",
      project: "Residential Community",
      value: "$45M",
      duration: "24 months",
      avatar: "/client-1.jpg"
    },
    {
      id: 4,
      name: "Jennifer Williams",
      position: "Construction Manager",
      company: "Infrastructure Solutions",
      rating: 5,
      content: "Contractorlist's project management expertise is world-class. They helped us navigate complex regulatory requirements and delivered our infrastructure project on time and under budget. Highly recommended!",
      project: "Highway Infrastructure",
      value: "$32M",
      duration: "16 months",
      avatar: "/client-1.jpg"
    },
    {
      id: 5,
      name: "Robert Kim",
      position: "Property Developer",
      company: "Metro Properties",
      rating: 5,
      content: "The retail center development was a huge success. Contractorlist's cost estimating accuracy and procurement management saved us significant time and money. Their team is professional, responsive, and delivers results.",
      project: "Retail Center Development",
      value: "$28M",
      duration: "14 months",
      avatar: "/client-1.jpg"
    },
    {
      id: 6,
      name: "Lisa Anderson",
      position: "Facility Manager",
      company: "Educational Institutions Corp.",
      rating: 5,
      content: "Our university campus expansion project was completed flawlessly. Contractorlist's attention to detail and ability to work within academic schedules while maintaining quality standards was impressive.",
      project: "Campus Expansion",
      value: "$38M",
      duration: "20 months",
      avatar: "/client-1.jpg"
    }
  ];

  const stats = [
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "Projects Completed", value: "500+", icon: CheckCircle },
    { label: "Cost Savings Average", value: "15%", icon: Award },
    { label: "Repeat Clients", value: "85%", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Client Testimonials</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience working with Contractorlist 
            and the exceptional results we've delivered together.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-yellow-200 mb-3" />
                  <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
                </div>

                {/* Project Details */}
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{testimonial.project}</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-500">Value:</span>
                      <span className="ml-1 font-medium text-gray-700">{testimonial.value}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Duration:</span>
                      <span className="ml-1 font-medium text-gray-700">{testimonial.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-yellow-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl p-12 text-center text-white">
            <Quote className="h-16 w-16 text-white/20 mx-auto mb-6" />
            <blockquote className="text-2xl font-medium mb-8 max-w-4xl mx-auto leading-relaxed">
              "Contractorlist has revolutionized our construction management approach. Their innovative solutions, 
              expert team, and commitment to excellence have made them our trusted partner for all major projects. 
              The results speak for themselves - we've never been more efficient or satisfied with our construction outcomes."
            </blockquote>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-xl">James Mitchell</h4>
                <p className="text-white/90">President, Construction Excellence Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Clients Choose Contractorlist</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Track record of delivering projects on time, under budget, and exceeding quality expectations.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Experienced professionals with deep industry knowledge and cutting-edge technical expertise.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Continuous innovation in construction technology and project management methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help you achieve exceptional results with your next construction project.
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="inline-block bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              to="/case-studies"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials; 