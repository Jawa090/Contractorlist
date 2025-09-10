import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Users, Calendar, MapPin, ArrowRight, Star, CheckCircle } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Downtown Office Complex Development",
      category: "Commercial Construction",
      location: "New York, NY",
      duration: "18 months",
      budget: "$25M",
      results: "Completed 3 months ahead of schedule with 15% cost savings",
      description: "A state-of-the-art 15-story office complex featuring sustainable design, smart building technology, and premium amenities.",
      challenges: ["Complex zoning requirements", "Historic district restrictions", "Tight timeline"],
      solutions: ["Advanced BIM modeling", "Modular construction techniques", "24/7 project management"],
      metrics: {
        completion: "3 months early",
        savings: "15%",
        quality: "98%",
        satisfaction: "5.0/5.0"
      }
    },
    {
      id: 2,
      title: "Healthcare Facility Renovation",
      category: "Healthcare Construction",
      location: "Los Angeles, CA",
      duration: "12 months",
      budget: "$18M",
      results: "Zero safety incidents, 20% energy efficiency improvement",
      description: "Complete renovation of a 200-bed hospital wing while maintaining full operational capacity and patient safety.",
      challenges: ["Operating facility during construction", "Strict healthcare regulations", "Infection control protocols"],
      solutions: ["Phased construction approach", "Advanced air filtration systems", "24/7 safety monitoring"],
      metrics: {
        completion: "On time",
        safety: "0 incidents",
        efficiency: "20% improvement",
        satisfaction: "4.9/5.0"
      }
    },
    {
      id: 3,
      title: "Residential Community Project",
      category: "Residential Development",
      location: "Austin, TX",
      duration: "24 months",
      budget: "$45M",
      results: "500 units delivered with 95% occupancy rate",
      description: "A mixed-use residential community featuring luxury apartments, townhomes, and retail spaces with sustainable design.",
      challenges: ["Supply chain disruptions", "Labor shortages", "Environmental regulations"],
      solutions: ["Local supplier partnerships", "Advanced scheduling systems", "Green building certification"],
      metrics: {
        completion: "2 months early",
        occupancy: "95%",
        sustainability: "LEED Gold",
        satisfaction: "4.8/5.0"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Case Studies</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover how we've successfully delivered complex construction projects across various sectors, 
            showcasing our expertise and commitment to excellence.
          </p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">$200M+</div>
              <p className="text-gray-600">Total Value</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">15%</div>
              <p className="text-gray-600">Average Cost Savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="md:grid md:grid-cols-2">
                  <div className="p-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                        {study.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h2>
                    <p className="text-gray-600 mb-6">{study.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-yellow-500" />
                        <span className="text-gray-600">{study.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-yellow-500" />
                        <span className="text-gray-600">{study.duration}</span>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                      <p className="text-gray-700">{study.results}</p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Challenges:</h4>
                      <ul className="space-y-2">
                        {study.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <span className="text-gray-600">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Metrics</h3>
                    
                    <div className="space-y-6">
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-3xl font-bold text-yellow-500 mb-1">{study.metrics.completion}</div>
                        <p className="text-gray-600 text-sm">Completion</p>
                      </div>
                      
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-3xl font-bold text-yellow-500 mb-1">{study.metrics.savings}</div>
                        <p className="text-gray-600 text-sm">Cost Savings</p>
                      </div>
                      
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-3xl font-bold text-yellow-500 mb-1">{study.metrics.quality}</div>
                        <p className="text-gray-600 text-sm">Quality Score</p>
                      </div>
                      
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="flex items-center justify-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-5 w-5 ${i < Math.floor(parseFloat(study.metrics.satisfaction)) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <p className="text-gray-600 text-sm mt-1">Client Satisfaction</p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h4 className="font-semibold text-gray-900 mb-3">Solutions Implemented:</h4>
                      <ul className="space-y-2">
                        {study.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-gray-600 text-sm">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help you achieve similar success with your construction project.
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="inline-block bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies; 