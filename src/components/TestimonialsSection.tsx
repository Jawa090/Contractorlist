import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Property Manager",
      company: "Urban Development Co.",
      rating: 5,
      content: "Contractorlist has transformed how we manage our construction projects. The quality of contractors and the efficiency of the platform have exceeded our expectations.",
      avatar: "/client-1.jpg"
    },
    {
      name: "Michael Chen",
      position: "Project Director",
      company: "Construction Solutions Inc.",
      rating: 5,
      content: "The platform's project management tools and contractor verification process have streamlined our operations significantly. Highly recommended!",
      avatar: "/contractor-2.jpg"
    },
    {
      name: "Emily Rodriguez",
      position: "Business Owner",
      company: "Retail Spaces LLC",
      rating: 5,
      content: "Finding reliable contractors was always a challenge until we discovered Contractorlist. The service quality and professionalism are outstanding.",
      avatar: "/contractor-3.png"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what construction professionals and property owners have to say about their experience with Contractorlist.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="mb-6">
                <Quote className="w-8 h-8 text-yellow-400 mb-4" />
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-700 font-semibold">4.9/5</span>
            <span className="text-gray-500">from 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection; 