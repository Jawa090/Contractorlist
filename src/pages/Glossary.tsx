import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Building2, Hammer, Wrench, Calculator, FileText, Users } from 'lucide-react';

const Glossary = () => {
  const [searchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: "All", count: 150, icon: BookOpen },
    { name: "Project Management", count: 35, icon: FileText },
    { name: "Construction Methods", count: 28, icon: Hammer },
    { name: "Materials & Equipment", count: 25, icon: Wrench },
    { name: "Cost & Estimation", count: 22, icon: Calculator },
    { name: "Safety & Regulations", count: 20, icon: Building2 },
    { name: "Team & Roles", count: 20, icon: Users }
  ];

  const glossaryTerms = [
    {
      term: "BIM (Building Information Modeling)",
      definition: "A digital representation of physical and functional characteristics of a facility. BIM serves as a shared knowledge resource for information about a facility, forming a reliable basis for decisions during its life-cycle.",
      category: "Project Management",
      example: "Using BIM software to create 3D models that include structural, mechanical, and electrical systems."
    },
    {
      term: "Change Order",
      definition: "A written document that modifies the plans, specifications, or price of a construction contract. Change orders are used to document changes to the original scope of work.",
      category: "Project Management",
      example: "Adding an extra bathroom to the original floor plan requires a change order to update the contract."
    },
    {
      term: "Critical Path",
      definition: "The sequence of project activities that determines the minimum time needed to complete the project. Any delay in critical path activities will delay the entire project.",
      category: "Project Management",
      example: "Foundation work is on the critical path because subsequent activities cannot begin until it's completed."
    },
    {
      term: "Subcontractor",
      definition: "A person or company hired by the general contractor to perform specific work on a construction project. Subcontractors are specialists in particular trades or types of work.",
      category: "Team & Roles",
      example: "An electrical subcontractor is hired to install all electrical systems in a building."
    },
    {
      term: "RFI (Request for Information)",
      definition: "A formal request for clarification about project plans, specifications, or other documents. RFIs are used to resolve ambiguities or conflicts in construction documents.",
      category: "Project Management",
      example: "Submitting an RFI to clarify the exact specifications for a custom door installation."
    },
    {
      term: "Punch List",
      definition: "A document listing work that doesn't conform to contract specifications and needs to be corrected before final payment. Also called a snag list or deficiency list.",
      category: "Project Management",
      example: "Creating a punch list of minor repairs needed before the client accepts the completed project."
    },
    {
      term: "Precast Concrete",
      definition: "Concrete elements that are cast in a factory or plant and then transported to the construction site for installation. This method improves quality control and reduces construction time.",
      category: "Construction Methods",
      example: "Using precast concrete wall panels that are manufactured off-site and then lifted into place."
    },
    {
      term: "Load-Bearing Wall",
      definition: "A wall that supports the weight of the structure above it, including the roof, floors, and other walls. Load-bearing walls cannot be removed without structural modifications.",
      category: "Construction Methods",
      example: "The exterior walls of a house are typically load-bearing and support the roof structure."
    },
    {
      term: "R-Value",
      definition: "A measure of thermal resistance used in the building and construction industry. Higher R-values indicate better insulating properties.",
      category: "Materials & Equipment",
      example: "Fiberglass insulation with an R-value of 13 provides better thermal resistance than insulation with an R-value of 8."
    },
    {
      term: "Change Management",
      definition: "The systematic approach to dealing with changes in a project, including identifying, evaluating, and implementing changes while minimizing disruption.",
      category: "Project Management",
      example: "Implementing a change management process to handle scope changes without affecting project timeline and budget."
    },
    {
      term: "Safety Factor",
      definition: "A factor applied to design calculations to ensure structures can handle loads beyond their expected maximum. It provides a margin of safety against failure.",
      category: "Safety & Regulations",
      example: "Using a safety factor of 2.0 means a beam designed to hold 1,000 pounds can actually support 2,000 pounds."
    },
    {
      term: "Value Engineering",
      definition: "A systematic method to improve the value of goods or products by examining function and cost. The goal is to reduce costs while maintaining or improving performance.",
      category: "Cost & Estimation",
      example: "Replacing expensive imported tiles with locally sourced alternatives that meet the same quality standards."
    },
    {
      term: "Submittal",
      definition: "Documents, samples, and other information submitted by contractors for review and approval before work begins. Submittals ensure compliance with project specifications.",
      category: "Project Management",
      example: "Submitting paint color samples and material specifications for client approval before painting begins."
    },
    {
      term: "Retention",
      definition: "A percentage of the contract amount withheld by the client until the project is completed and accepted. Retention provides security for the client and motivates timely completion.",
      category: "Cost & Estimation",
      example: "Withholding 10% of each payment until the project is fully completed and accepted."
    },
    {
      term: "As-Built Drawings",
      definition: "Drawings that show the actual construction of a project as it was built, including any changes made during construction. These are important for future maintenance and renovations.",
      category: "Project Management",
      example: "Updating the original plans to reflect the actual location of electrical outlets and plumbing fixtures."
    }
  ];

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Construction Glossary</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A comprehensive guide to construction terms, definitions, and industry terminology. 
            Find explanations for common and specialized construction concepts.
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.name
                      ? 'bg-yellow-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name} ({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {selectedCategory === 'All' ? 'All Terms' : `${selectedCategory} Terms`}
            </h2>
            <p className="text-gray-600">
              {filteredTerms.length} terms found
            </p>
          </div>

          <div className="space-y-6">
            {filteredTerms.map((term, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{term.term}</h3>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                        {term.category}
                      </span>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Definition:</h4>
                      <p className="text-gray-700 leading-relaxed">{term.definition}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Example:</h4>
                      <p className="text-gray-600 italic">{term.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-500 mb-2">No terms found</h3>
              <p className="text-gray-400">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Reference Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Quick Reference Guide</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Management</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• BIM (Building Information Modeling)</li>
                <li>• Change Order</li>
                <li>• Critical Path</li>
                <li>• RFI (Request for Information)</li>
                <li>• Punch List</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Construction Methods</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Precast Concrete</li>
                <li>• Load-Bearing Wall</li>
                <li>• Modular Construction</li>
                <li>• Tilt-Up Construction</li>
                <li>• Cast-in-Place</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Materials & Equipment</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• R-Value</li>
                <li>• Concrete Strength</li>
                <li>• Steel Grade</li>
                <li>• Load Capacity</li>
                <li>• Material Properties</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Expand Your Knowledge</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <BookOpen className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Construction Articles</h3>
              <p className="text-gray-600 mb-6">
                Read in-depth articles about construction techniques, industry trends, and best practices.
              </p>
              <Link
                to="/articles"
                className="inline-flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 font-medium"
              >
                <span>Browse Articles</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <Building2 className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Case Studies</h3>
              <p className="text-gray-600 mb-6">
                Learn from real-world construction projects and see these terms in action.
              </p>
              <Link
                to="/case-studies"
                className="inline-flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 font-medium"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <Users className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Consultation</h3>
              <p className="text-gray-600 mb-6">
                Need clarification on specific terms? Our construction experts are here to help.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 font-medium"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Need Help Understanding Construction Terms?</h2>
          <p className="text-xl text-white/90 mb-8">
            Our team of construction professionals is here to help clarify any terms or concepts you encounter.
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="inline-block bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Ask an Expert
            </Link>
            <Link
              to="/services"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Glossary; 