import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Verified,
  Shield,
  Star,
  Eye,
  Mail,
  Video,
} from "lucide-react";

interface CompanyCardProps {
  id?: string;
  name?: string;
  rating?: number;
  reviewsCount?: number;
  verifiedHires?: number;
  tagline?: string;
  featuredReview?: {
    reviewer?: string;
    reviewText?: string;
  };
  address?: string;
  verifiedBusiness?: boolean;
  description?: string;
  yearsInBusiness?: number | null;
  licenseNumber?: string;
  certifications?: string[];
  awards?: string[];
  servicesOffered?: string[];
  specialties?: string[];
  serviceAreas?: any[];
  respondsQuickly?: boolean;
  hiredOnPlatform?: boolean;
  provides3d?: boolean;
  ecoFriendly?: boolean;
  familyOwned?: boolean;
  locallyOwned?: boolean;
  offersCustomWork?: boolean;
  languages?: string[];
  budgetRange?: string;
  professionalCategory?: string;
  images?: string[];
  sponsored?: boolean;
  bannerText?: string;
  email?: string;
  phone?: string;
  website?: string;
  testimonials?: any[];
  reviews?: any[];
}

const CompanyCard = (props: CompanyCardProps) => {
  const {
    id,
    name = "Company Name",
    rating = 0,
    reviewsCount = 0,
    verifiedHires = 0,
    tagline = "",
    featuredReview,
    address,
    verifiedBusiness = false,
    images = [],
  } = props;

  const navigate = useNavigate();
  const defaultImages = ["/home1.jpeg", "/home2.jpeg", "/home3.jpeg"];
  const displayImages = images && images.length > 0 ? images : defaultImages;

  // Ensure rating is always treated as a number to avoid runtime errors
  const numericRating =
    typeof rating === "number" && !Number.isNaN(rating)
      ? rating
      : Number(rating) || 0;

  const handleReadMore = () => {
    navigate(`/companies/${id || name.toLowerCase().replace(/\s+/g, "-")}`, {
      state: { company: props }
    });
  };

  const handleSendMessage = () => {
    if (props.email) {
      window.location.href = `mailto:${props.email}`;
      return;
    }
    // Fallback – take the user to the detailed company view
    handleReadMore();
  };

  const handleVideoCall = () => {
    // Placeholder behaviour – swap this with your video platform integration
    const videoUrl = "https://meet.google.com";
    window.open(videoUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full max-w-6xl border border-gray-200 shadow-lg overflow-hidden bg-white my-4 rounded-xl hover:shadow-xl transition-shadow">
      {/* Company Card - Compact Preview */}
      <div className="p-6">
        {/* Company Header - Compact Preview */}
        <div className="flex items-start gap-4 mb-4">
          {/* Company Image/Logo */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-gray-200">
              <img
                src={displayImages[0] || defaultImages[0]}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Company Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-xl font-bold text-gray-900">{name}</h2>
              {verifiedBusiness && (
                <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                  <Shield className="w-3 h-3" />
                  Verified Business
                </span>
              )}
            </div>

            <div className="flex items-center flex-wrap gap-4 text-sm text-gray-600 mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="font-semibold text-gray-900">
                  {numericRating.toFixed(1)}
                </span>
                <span className="text-gray-500">({reviewsCount} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <Verified className="w-4 h-4 text-green-600" />
                <span>{verifiedHires} Verified Hires</span>
              </div>
              {address && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">{address}</span>
                </div>
              )}
            </div>

            {tagline && (
              <p className="text-gray-700 text-sm font-medium leading-relaxed mb-2 line-clamp-3">
                {tagline}
              </p>
            )}

            {/* Featured Review - Compact */}
            {featuredReview?.reviewText && (
              <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-primary mt-2">
                <p className="text-gray-700 italic text-sm mb-1">
                  "{featuredReview.reviewText}"
                </p>
                <p className="text-xs text-gray-600 font-medium">
                  – {featuredReview.reviewer || "Client"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="border-t border-gray-200 bg-gradient-to-r from-gray-50 via-white to-gray-50 px-6 py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Highlights */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
            {typeof verifiedHires === "number" && verifiedHires > 0 && (
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-black border border-primary/20">
                <Verified className="w-3 h-3" />
                {verifiedHires} Hires on Platform
              </span>
            )}
            {reviewsCount > 0 && numericRating > 0 && (
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-black border border-gray-200 shadow-sm">
                <Star className="w-3 h-3 text-primary fill-primary" />
                Top Rated • {numericRating.toFixed(1)} ({reviewsCount} reviews)
              </span>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-end gap-2">
            <button
              onClick={handleSendMessage}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-black shadow-md hover:bg-primary/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 transition-all"
            >
              <Mail className="w-4 h-4" />
              Send Message
            </button>

            <button
              onClick={handleVideoCall}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-xs sm:text-sm font-medium text-gray-800 shadow-sm hover:border-primary hover:text-primary hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 transition-all"
            >
              <Video className="w-4 h-4" />
              Video Call
            </button>

            <button
              onClick={handleReadMore}
              className="inline-flex items-center justify-center gap-1 px-3 py-2 text-xs sm:text-sm font-semibold text-gray-700 hover:text-primary hover:underline"
            >
              <Eye className="w-4 h-4" />
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
