import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calendar, Clock, User, Tag, ArrowRight, Search, Filter, TrendingUp, BookOpen, Award } from 'lucide-react';

const Articles = () => {
  const categories = [
    { name: "All", count: 45, active: true },
    { name: "Project Management", count: 12, active: false },
    { name: "Construction Technology", count: 8, active: false },
    { name: "Industry Trends", count: 15, active: false },
    { name: "Best Practices", count: 10, active: false }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "The Future of Construction: AI and Machine Learning in 2024",
      excerpt: "Discover how artificial intelligence and machine learning are revolutionizing construction project management, from automated scheduling to predictive analytics and quality control.",
      category: "Construction Technology",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      tags: ["AI", "Machine Learning", "Innovation", "Technology"],
      featured: true,
      image: "/thumbnail-1.jpg"
    },
    {
      id: 2,
      title: "Sustainable Building Materials: What's New and Why It Matters",
      excerpt: "Explore the latest sustainable building materials that are not only environmentally friendly but also cost-effective and durable for modern construction projects.",
      category: "Industry Trends",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      tags: ["Sustainability", "Materials", "Green Building", "Cost-Effective"],
      featured: true,
      image: "/thumbnail-2.jpg"
    }
  ];

  const articles = [
    {
      id: 3,
      title: "5 Essential Project Management Strategies for Large-Scale Construction",
      excerpt: "Learn the proven project management strategies that successful construction managers use to deliver complex projects on time and under budget.",
      category: "Project Management",
      author: "Robert Davis",
      date: "March 10, 2024",
      readTime: "10 min read",
      tags: ["Project Management", "Strategy", "Large-Scale", "Best Practices"],
      image: "/thumbnail-3.jpg"
    },
    {
      id: 4,
      title: "BIM Technology: Transforming Construction Planning and Execution",
      excerpt: "How Building Information Modeling (BIM) is changing the way construction projects are planned, designed, and executed for better efficiency and accuracy.",
      category: "Construction Technology",
      author: "Lisa Anderson",
      date: "March 8, 2024",
      readTime: "7 min read",
      tags: ["BIM", "Technology", "Planning", "Efficiency"],
      image: "/thumbnail-4.jpg"
    },
    {
      id: 5,
      title: "Cost Estimation Best Practices: Avoiding Common Pitfalls",
      excerpt: "Master the art of accurate cost estimation with these proven strategies and learn how to avoid the most common mistakes that lead to budget overruns.",
      category: "Best Practices",
      author: "David Thompson",
      date: "March 5, 2024",
      readTime: "9 min read",
      tags: ["Cost Estimation", "Budget", "Best Practices", "Planning"],
      image: "/thumbnail-5.jpg"
    },
    {
      id: 6,
      title: "Supply Chain Management in Construction: Challenges and Solutions",
      excerpt: "Navigate the complexities of construction supply chain management with innovative solutions for material sourcing, logistics, and cost optimization.",
      category: "Industry Trends",
      author: "Jennifer Williams",
      date: "March 3, 2024",
      readTime: "11 min read",
      tags: ["Supply Chain", "Logistics", "Materials", "Optimization"],
      image: "/thumbnail-6.jpg"
    },
    {
      id: 7,
      title: "Safety Protocols for High-Rise Construction Projects",
      excerpt: "Comprehensive guide to implementing effective safety protocols for high-rise construction projects, ensuring worker safety and regulatory compliance.",
      category: "Best Practices",
      author: "Mark Rodriguez",
      date: "March 1, 2024",
      readTime: "8 min read",
      tags: ["Safety", "High-Rise", "Protocols", "Compliance"],
      image: "/thumbnail-7.jpg"
    },
    {
      id: 8,
      title: "The Impact of Climate Change on Construction Industry",
      excerpt: "Understanding how climate change is affecting construction practices and what the industry is doing to adapt and become more resilient.",
      category: "Industry Trends",
      author: "Emily Chen",
      date: "February 28, 2024",
      readTime: "12 min read",
      tags: ["Climate Change", "Sustainability", "Resilience", "Adaptation"],
      image: "/thumbnail-7.jpg"
    }
  ];

  const popularArticles = [
    {
      id: 9,
      title: "Modular Construction: The Future of Affordable Housing",
      readTime: "6 min read",
      views: "15.2K"
    },
    {
      id: 10,
      title: "Digital Twins in Construction: Real-Time Project Monitoring",
      readTime: "8 min read",
      views: "12.8K"
    },
    {
      id: 11,
      title: "Green Building Certification: LEED vs. BREEAM",
      readTime: "7 min read",
      views: "11.5K"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Construction Articles</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay informed with the latest insights, trends, and best practices in construction 
            from industry experts and thought leaders.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-gray-600">Filter by:</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.active
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <div key={article.id} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{article.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{article.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-white text-gray-600 text-xs rounded border">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <button className="flex items-center space-x-1 text-yellow-600 hover:text-yellow-700 font-medium">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      {article.date}
                    </div>
                    <button className="flex items-center space-x-1 text-yellow-600 hover:text-yellow-700 font-medium text-sm">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles Sidebar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Trending Topics</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-8 rounded-2xl text-white">
                  <TrendingUp className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">AI in Construction</h3>
                  <p className="text-yellow-100 mb-4">
                    Explore how artificial intelligence is transforming construction project management and efficiency.
                  </p>
                  <button className="bg-white text-yellow-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Learn More
                  </button>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-2xl text-white">
                  <BookOpen className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Sustainable Building</h3>
                  <p className="text-blue-100 mb-4">
                    Discover the latest trends in sustainable construction and green building practices.
                  </p>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Articles</h3>
              <div className="space-y-4">
                {popularArticles.map((article) => (
                  <div key={article.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{article.title}</h4>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{article.readTime}</span>
                      <span>{article.views} views</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated with Our Latest Insights</h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our newsletter and get the latest construction articles, industry trends, and expert insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-yellow-600"
            />
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles; 