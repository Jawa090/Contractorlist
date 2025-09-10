import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock, Users, Eye, Calendar, Building2, Award, CheckCircle } from 'lucide-react';

const Videos = () => {
  const videoCategories = [
    {
      id: 1,
      name: "Project Showcases",
      count: 25,
      icon: Building2,
      description: "See our completed projects in action"
    },
    {
      id: 2,
      name: "Construction Tips",
      count: 18,
      icon: Award,
      description: "Expert advice and best practices"
    },
    {
      id: 3,
      name: "Company Culture",
      count: 12,
      icon: Users,
      description: "Meet our team and company values"
    },
    {
      id: 4,
      name: "Industry Insights",
      count: 20,
      icon: CheckCircle,
      description: "Latest trends and innovations"
    }
  ];

  const featuredVideos = [
    {
      id: 1,
      title: "Downtown Office Complex - Construction Journey",
      category: "Project Showcase",
      duration: "8:45",
      views: "2.5K",
      date: "2 weeks ago",
      thumbnail: "/thumbnail-1.jpg",
      description: "Follow the complete construction journey of our flagship downtown office complex project, from groundbreaking to completion.",
      tags: ["Commercial", "Office", "Sustainable Design"]
    },
    {
      id: 2,
      title: "Healthcare Facility Renovation - Behind the Scenes",
      category: "Project Showcase",
      duration: "12:30",
      views: "1.8K",
      date: "1 month ago",
      thumbnail: "/thumbnail-2.jpg",
      description: "Exclusive behind-the-scenes look at our hospital renovation project, showcasing our healthcare construction expertise.",
      tags: ["Healthcare", "Renovation", "Safety"]
    },
    {
      id: 3,
      title: "5 Essential Project Management Tips for Construction",
      category: "Construction Tips",
      duration: "15:20",
      views: "3.2K",
      date: "3 weeks ago",
      thumbnail: "/thumbnail-3.jpg",
      description: "Learn the top 5 project management strategies that successful construction managers use to deliver projects on time and budget.",
      tags: ["Project Management", "Tips", "Best Practices"]
    },
    {
      id: 4,
      title: "Sustainable Building Materials - What's New in 2024",
      category: "Industry Insights",
      duration: "22:15",
      views: "4.1K",
      date: "1 week ago",
      thumbnail: "/thumbnail-4.jpg",
      description: "Explore the latest sustainable building materials and technologies that are revolutionizing the construction industry.",
      tags: ["Sustainability", "Innovation", "Materials"]
    },
    {
      id: 5,
      title: "Meet Our Team - Day in the Life of a Project Manager",
      category: "Company Culture",
      duration: "18:45",
      views: "2.9K",
      date: "2 weeks ago",
      thumbnail: "/thumbnail-5.jpg",
      description: "Get to know our project management team and see what a typical day looks like at Contractorlist.",
      tags: ["Team", "Culture", "Project Management"]
    },
    {
      id: 6,
      title: "Cost Estimation Masterclass - Advanced Techniques",
      category: "Construction Tips",
      duration: "28:30",
      views: "5.6K",
      date: "4 days ago",
      thumbnail: "/thumbnail-6.jpg",
      description: "Master advanced cost estimation techniques used by industry experts to ensure project profitability.",
      tags: ["Cost Estimation", "Advanced", "Techniques"]
    }
  ];

  const latestVideos = [
    {
      id: 7,
      title: "BIM Technology in Modern Construction",
      category: "Industry Insights",
      duration: "16:20",
      views: "1.2K",
      date: "1 day ago",
      thumbnail: "/thumbnail-7.jpg"
    },
    {
      id: 8,
      title: "Safety Protocols for High-Rise Projects",
      category: "Construction Tips",
      duration: "14:15",
      views: "980",
      date: "3 days ago",
      thumbnail: "/thumbnail-7.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Construction Videos</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our video library showcasing project showcases, construction tips, industry insights, 
            and behind-the-scenes content from Contractorlist.
          </p>
        </div>
      </section>

      {/* Video Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Browse by Category</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {videoCategories.map((category) => (
              <div key={category.id} className="bg-gray-50 p-6 rounded-xl text-center hover:bg-yellow-50 transition-colors cursor-pointer">
                <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <category.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                <div className="text-2xl font-bold text-yellow-500">{category.count}</div>
                <p className="text-gray-500 text-sm">Videos</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Videos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Thumbnail */}
                <div className="relative">
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <Play className="h-16 w-16 text-white drop-shadow-lg" />
                  </div>
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                      {video.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{video.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {video.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{video.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Videos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {latestVideos.map((video) => (
              <div key={video.id} className="flex space-x-4">
                <div className="relative flex-shrink-0">
                  <div className="w-32 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute bottom-1 right-1 bg-black/70 text-white px-1 py-0.5 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {video.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{video.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Production Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">How We Create Our Videos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="text-2xl font-bold text-yellow-600">1</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Planning & Scripting</h3>
              <p className="text-gray-600">
                We carefully plan each video to ensure it delivers maximum value to our audience with clear messaging and engaging content.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="text-2xl font-bold text-yellow-600">2</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Production</h3>
              <p className="text-gray-600">
                High-quality video production with professional equipment and experienced videographers to ensure crisp, clear content.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="text-2xl font-bold text-yellow-600">3</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Editing & Distribution</h3>
              <p className="text-gray-600">
                Expert editing to create engaging final content, then strategic distribution across our platforms for maximum reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated with Our Latest Content</h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our channel and never miss our latest construction insights, project showcases, and industry updates.
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="inline-block bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe Now
            </Link>
            <Link
              to="/case-studies"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos; 