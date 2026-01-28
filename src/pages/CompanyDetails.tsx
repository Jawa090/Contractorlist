import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  MapPin,
  Star,
  Phone,
  Mail,
  Globe,
  Shield,
  Calendar,
  Award,
  Briefcase,
  CheckCircle,
  Sparkles,
  Building,
  Languages,
  DollarSign,
  Verified,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { normalizeCompanyData } from "@/utils/normalizeCompany";

// Mock data for demonstration
const mockCompanyData = {
  name: "Grandeur Hills Group, Inc.",
  rating: 5.0,
  reviewsCount: 54,
  verifiedHires: 12,
  address: "123 Madison Avenue, New York, NY 10016",
  verifiedBusiness: true,
  description: "Manhattan's premier luxury home renovation and construction company. With over 15 years of experience, we specialize in high-end residential projects that transform houses into dream homes. Our award-winning team has been recognized as a 5X Best of Houzz Winner.",
  yearsInBusiness: 15,
  licenseNumber: "NYC-GC-2024-001",
  certifications: [
    "Licensed General Contractor",
    "EPA Lead-Safe Certified",
    "OSHA 30-Hour Certified",
  ],
  awards: [
    "Best of Houzz 2024 - Design",
    "Best of Houzz 2024 - Service",
    "Best of Houzz 2023 - Design",
    "Best of Houzz 2022 - Service",
    "Best of Houzz 2021 - Design",
  ],
  servicesOffered: [
    "Full House Renovation",
    "Kitchen Remodeling",
    "Bathroom Remodeling",
    "Custom Home Building",
    "Interior Design",
    "Exterior Remodeling",
  ],
  specialties: [
    "Luxury Remodeling",
    "Historic Preservation",
    "Custom Millwork",
    "High-End Finishes",
    "Smart Home Integration",
  ],
  serviceAreas: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"],
  phone: "NYC-GC-2024-001",
  email: "info@grandeurhills.com",
  website: "https://grandeurhills.com",
  images: ["/home1.jpeg", "/home2.jpeg", "/home3.jpeg", "/home4.jpeg", "/home5.jpeg"],
  testimonials: [
    {
      reviewer: "Daniel Martinez",
      location: "Upper East Side, Manhattan",
      rating: 5,
      reviewText: "The results were truly mind-blowing. The moment I saw the finished house, The entire Grandeur Hills Team went above and beyond. They transformed our outdated brownstone into a modern masterpiece while preserving its historic charm.",
    },
    {
      reviewer: "Sarah Johnson",
      location: "Brooklyn Heights",
      rating: 5,
      reviewText: "Outstanding craftsmanship and attention to detail. The team was professional, punctual, and kept us informed throughout the entire renovation process. Highly recommend!",
    },
    {
      reviewer: "Michael Chen",
      location: "Tribeca, Manhattan",
      rating: 5,
      reviewText: "We couldn't be happier with our kitchen renovation. Grandeur Hills turned our vision into reality and exceeded all expectations. The quality of work is exceptional.",
    },
  ],
};

const CompanyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [company, setCompany] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      if (!id) return;

      // Check if company data was passed via navigation state
      if (location.state?.company) {
        setCompany(normalizeCompanyData(location.state.company));
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
        const res = await fetch(`${API_URL}/companies/${id}`);
        const json = await res.json();

        if (!json.success) {
          // If API fails, use mock data for demonstration
          console.log("API failed, using mock data");
          setCompany(normalizeCompanyData(mockCompanyData));
          return;
        }
        setCompany(normalizeCompanyData(json.data));
      } catch (e: any) {
        // If fetch fails, use mock data for demonstration
        console.log("Fetch failed, using mock data:", e.message);
        setCompany(normalizeCompanyData(mockCompanyData));
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyDetails();
  }, [id, location.state]);

  const defaultImages = ["/home1.jpeg", "/home2.jpeg", "/home3.jpeg"];
  const displayImages = company?.images && company.images.length > 0 ? company.images : defaultImages;

  // Normalize rating to a safe number to avoid `.toFixed` runtime errors
  const rawRating = company?.rating;
  const numericRating =
    typeof rawRating === "number" && !Number.isNaN(rawRating)
      ? rawRating
      : Number(rawRating) || 0;

  // Ensure service areas are always an array before mapping
  const serviceAreasArray = Array.isArray(company?.serviceAreas)
    ? company?.serviceAreas
    : company?.serviceAreas
      ? [company.serviceAreas]
      : [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="ml-2 font-medium">Back to results</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {loading && (
          <div className="text-center text-gray-600 py-12">Loading company details...</div>
        )}

        {error && (
          <div className="text-center text-red-600 py-12">{error}</div>
        )}

        {!loading && !error && company && (
          <>
            {/* Image Gallery with Navigation */}
            <div className="mb-6 rounded-xl overflow-hidden shadow-lg relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet",
                  bulletActiveClass: "swiper-pagination-bullet-active",
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="h-96"
              >
                {displayImages.map((img: string, idx: number) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${company.name} project ${idx + 1}`}
                      className="w-full h-96 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all">
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all">
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            {/* Company Information Card */}
            <Card className="bg-white border shadow-lg mb-6">
              <CardContent className="p-8">
                {/* Header Section */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-3">{company.name}</h1>

                    <div className="flex items-center gap-1 mb-3">
                      <MapPin className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-600">{company.address || company.location}</span>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-primary fill-primary" />
                        <span className="text-xl font-bold text-gray-900">
                          {numericRating > 0 ? numericRating.toFixed(1) : "5.0"}
                        </span>
                        <span className="text-gray-500">
                          ({company.reviewsCount || company.reviews_count || 0} reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  {company.verifiedBusiness && (
                    <Badge className="bg-green-100 text-green-800 border-green-300 flex items-center gap-1 px-3 py-1.5">
                      <Shield className="w-4 h-4" />
                      Verified Business
                    </Badge>
                  )}
                </div>

                {/* Description */}
                {company.description && (
                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    {company.description}
                  </p>
                )}

                {/* Key Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-5 bg-gray-50 rounded-lg">
                  {company.yearsInBusiness && (
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <div>
                        <span className="text-sm text-gray-600">Years in Business</span>
                        <p className="font-semibold text-gray-900">{company.yearsInBusiness} years</p>
                      </div>
                    </div>
                  )}
                  {company.licenseNumber && (
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-600" />
                      <div>
                        <span className="text-sm text-gray-600">License Number</span>
                        <p className="font-semibold text-gray-900">{company.licenseNumber}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Certifications & Credentials */}
                {company.certifications && company.certifications.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      Certifications & Credentials
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {company.certifications.map((cert: string, idx: number) => (
                        <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 px-3 py-1">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Awards & Recognition */}
                {company.awards && company.awards.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      Awards & Recognition
                    </h3>
                    <ul className="space-y-2">
                      {company.awards.map((award: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <Star className="w-4 h-4 text-primary fill-primary" />
                          {award}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Services Offered */}
                {company.servicesOffered && company.servicesOffered.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Services Offered</h3>
                    <div className="flex flex-wrap gap-2">
                      {company.servicesOffered.map((service: string, idx: number) => (
                        <Badge key={idx} className="bg-primary/10 text-black border-primary/30 hover:bg-primary/20 px-3 py-1">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Specialties */}
                {company.specialties && company.specialties.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {company.specialties.map((specialty: string, idx: number) => (
                        <Badge key={idx} variant="secondary" className="text-sm px-3 py-1">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Service Areas */}
                {serviceAreasArray.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-red-600" />
                      Service Areas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {serviceAreasArray.map((area: any, idx: number) => (
                        <Badge key={idx} variant="outline" className="text-sm px-3 py-1">
                          {typeof area === "string" ? area : area.city || area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-6 border-t">
                  {company.phone && (
                    <Button
                      onClick={() => (window.location.href = `tel:${company.phone}`)}
                      className="bg-primary hover:bg-primary/90 text-black font-semibold"
                    >
                      <Phone className="w-4 h-4 mr-2" /> Call Now
                    </Button>
                  )}
                  {company.email && (
                    <Button
                      variant="outline"
                      onClick={() => (window.location.href = `mailto:${company.email}`)}
                      className="font-medium"
                    >
                      <Mail className="w-4 h-4 mr-2" /> Send Email
                    </Button>
                  )}
                  {company.website && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(company.website, "_blank")}
                      className="font-medium"
                    >
                      <Globe className="w-4 h-4 mr-2" /> Visit Website
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Client Reviews & Testimonials */}
            <Card className="bg-white border shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Reviews & Testimonials</h2>

                {/* Overall Rating Summary */}
                <div className="flex items-center gap-6 mb-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gray-900 mb-2">
                      {numericRating > 0 ? numericRating.toFixed(1) : "5.0"}
                    </div>
                    <div className="flex items-center justify-center mb-1">
                      {Array.from({ length: 5 }).map((_, i) => {
                        const filled = i < Math.round(numericRating || 5);
                        return (
                          <Star
                            key={i}
                            className={`w-6 h-6 ${filled ? "text-primary fill-primary" : "text-gray-300"
                              }`}
                          />
                        );
                      })}
                    </div>
                    <div className="text-sm text-gray-600">
                      {company.reviewsCount || company.reviews_count || 0} reviews
                    </div>
                  </div>
                  <div className="flex-1 text-gray-700">
                    <p className="text-lg">
                      Highly rated by clients for quality work, professionalism, and excellent customer service.
                    </p>
                  </div>
                </div>

                {/* Individual Reviews */}
                {company.testimonials || company.reviews ? (
                  <div className="space-y-6">
                    {(company.testimonials || company.reviews || []).map((review: any, idx: number) => {
                      const reviewer = review.clientName || review.reviewer || review.author || "Client";
                      const text = review.comment || review.text || review.review || review.reviewText || "";
                      const rating = review.rating || review.stars || 5;

                      return (
                        <div
                          key={idx}
                          className="border-2 border-gray-100 rounded-xl bg-white p-6 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black font-bold text-lg">
                                {reviewer.charAt(0).toUpperCase()}
                              </div>
                              <div>
                                <div className="font-semibold text-gray-900 text-lg">{reviewer}</div>
                                {review.location && (
                                  <div className="text-sm text-gray-500 flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    {review.location}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-5 h-5 ${i < rating ? "text-primary fill-primary" : "text-gray-300"
                                    }`}
                                />
                              ))}
                            </div>
                          </div>
                          {text && (
                            <p className="text-gray-700 leading-relaxed text-base italic">
                              "{text}"
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Star className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p>No reviews yet. Be the first to review this company!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default CompanyDetails;
