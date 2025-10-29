import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const SolutionsSection = () => {
  const testimonials = [
    {
      name: "Mike",
      role: "Home Owner",
      avatar: "M",
      avatarBg: "bg-teal-500",
      rating: 5,
      review: "It's such a relief to have these trusted resource when looking for reliable, honest, and professional contractors. The contractors are knowledgeable.",
      readMore: "Read more"
    },
    {
      name: "Adrian Charles",
      role: "Home Owner",
      avatar: "A",
      avatarBg: "bg-orange-500",
      rating: 5,
      review: "What a blessing it is to have Randy and David providing such an amazing service for homeowners. Putting them first is why I chose...",
      readMore: "Read more"
    },
    {
      name: "Tactical Mav",
      role: "Home Owner",
      avatar: "T",
      avatarBg: "bg-yellow-600",
      rating: 5,
      review: "The Door Contractor List is a top-tier service for homeowners! They set contractors for licensing and reliability, ensuring quality work. The...",
      readMore: "Read more"
    },
    {
      name: "Cesar Gonzalez",
      role: "Home Owner",
      avatar: "C",
      avatarBg: "bg-amber-700",
      rating: 5,
      review: "We learned of ways to service our customers and became a bigger blessing to them. Here at MOMENTOUS Construction Group we...",
      readMore: "Read more"
    },
    {
      name: "Admin Office",
      role: "Construction Pro",
      avatar: "A",
      avatarBg: "bg-purple-600",
      rating: 5,
      review: "Great company to be a part of. Randy and David were extremely informative and have a heart of protecting the consumer.",
      readMore: "Read more"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-black mb-4">
            Home Owners & Construction Pros Love Us!
          </h2>
        </div>

        {/* Testimonials with Navigation Arrows */}
        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex-shrink-0">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonials Horizontal Scroll */}
          <div className="overflow-x-auto scrollbar-hide flex-1">
            <div className="flex gap-4 pb-4" style={{width: 'max-content'}}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-lg border border-gray-200 w-80 h-48 flex-shrink-0">
                  {/* Avatar and Name */}
                  <div className="flex items-center mb-3">
                    <div className={`w-10 h-10 ${testimonial.avatarBg} rounded-full flex items-center justify-center text-white font-bold text-sm mr-3`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{testimonial.name}</h3>
                      <p className="text-xs text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-xs text-gray-600">5</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 text-xs leading-relaxed mb-3 line-clamp-4">
                    {testimonial.review}
                  </p>

                  {/* Read More Link */}
                  <button className="text-blue-600 text-xs font-medium hover:text-blue-700 transition-colors">
                    {testimonial.readMore}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex-shrink-0">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;