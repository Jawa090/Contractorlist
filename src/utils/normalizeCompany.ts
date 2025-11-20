const defaultImages = ["/home1.jpeg", "/home2.jpeg", "/home3.jpeg"];

const toNumber = (value: any) => {
  if (typeof value === "number" && !Number.isNaN(value)) return value;
  const parsed = Number(value);
  return Number.isNaN(parsed) ? undefined : parsed;
};

const ensureArray = (value: any): any[] => {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [value];
};

const buildImages = (raw: any): string[] => {
  if (Array.isArray(raw?.images) && raw.images.length) {
    return raw.images;
  }

  const candidates = [
    raw?.image_url,
    raw?.image_url_2,
    raw?.image_url_3,
    raw?.imageUrl,
    raw?.imageUrl2,
    raw?.imageUrl3,
  ].filter(Boolean);

  if (candidates.length > 0) {
    return candidates;
  }

  return defaultImages;
};

export const normalizeCompanyData = (raw: any = {}) => {
  const company = raw.company || raw;
  const details = company.details || {};

  const serviceAreas = ensureArray(
    company.service_areas ||
      company.serviceAreas ||
      details.service_areas ||
      details.serviceAreas ||
      company.service_cities ||
      company.serviceCities
  );

  const normalized = {
    id:
      company.id ||
      company.company_id ||
      company.companyId ||
      company.name?.toLowerCase().replace(/\s+/g, "-") ||
      company.company_name?.toLowerCase().replace(/\s+/g, "-"),
    name: company.name || company.company_name || "Unknown Company",
    rating:
      toNumber(company.rating) ??
      toNumber(company.company_rating) ??
      toNumber(details.rating) ??
      0,
    reviewsCount:
      toNumber(company.reviews_count) ??
      toNumber(company.reviews) ??
      toNumber(company.reviewCount) ??
      0,
    verifiedHires:
      toNumber(company.verified_hires) ??
      toNumber(company.verifiedHires) ??
      0,
    tagline: company.tagline || details.tagline || "",
    featuredReview: company.featured_review
      ? {
          reviewer: company.featured_review.reviewer,
          reviewText:
            company.featured_review.review_text ||
            company.featured_review.reviewText,
        }
      : company.featured_reviewer_name || company.featured_review_text
      ? {
          reviewer: company.featured_reviewer_name,
          reviewText: company.featured_review_text,
        }
      : undefined,
    address:
      company.address ||
      details.address ||
      company.location ||
      company.city ||
      "",
    verifiedBusiness:
      company.verified_business ||
      details.verified_business ||
      false,
    description:
      company.description || details.description || company.bio || "",
    yearsInBusiness:
      toNumber(company.years_in_business) ??
      toNumber(details.years_in_business) ??
      toNumber(company.yearsInBusiness) ??
      null,
    licenseNumber:
      company.license_number ||
      details.license_number ||
      company.licenseNumber ||
      "",
    certifications:
      ensureArray(
        company.certifications ||
          details.certifications ||
          company.certs
      ) || [],
    awards:
      ensureArray(
        company.awards || details.awards || company.recognitions
      ) || [],
    servicesOffered:
      ensureArray(
        company.services_offered ||
          details.services_offered ||
          company.services
      ) || [],
    specialties:
      ensureArray(company.specialties || details.specialties) || [],
    serviceAreas,
    respondsQuickly:
      company.responds_quickly ||
      details.responds_quickly ||
      false,
    hiredOnPlatform:
      company.hired_on_platform ||
      details.hired_on_platform ||
      false,
    provides3d:
      company.provides_3d_visualization ||
      company.provides_3d ||
      details.provides_3d ||
      false,
    ecoFriendly:
      company.eco_friendly || details.eco_friendly || false,
    familyOwned:
      company.family_owned || details.family_owned || false,
    locallyOwned:
      company.locally_owned || details.locally_owned || false,
    offersCustomWork:
      company.offers_custom_work ||
      details.offers_custom_work ||
      false,
    languages:
      ensureArray(
        company.languages ||
          details.languages ||
          (company.language ? [company.language] : [])
      ) || [],
    budgetRange: company.budget_range || details.budget_range || "",
    professionalCategory:
      company.professional_category ||
      details.professional_category ||
      company.category ||
      "",
    images: buildImages(company),
    bannerText: company.bannerText || company.banner_text || "",
    sponsored: company.sponsored || false,
    email:
      company.email ||
      company.contact?.email ||
      details.email ||
      "",
    phone:
      company.phone ||
      company.contact?.phone ||
      details.phone ||
      "",
    website:
      company.website ||
      company.contact?.website ||
      details.website ||
      "",
    testimonials: company.testimonials || company.reviews || [],
    reviews: company.reviews || [],
    raw: company,
  };

  return normalized;
};

export type NormalizedCompany = ReturnType<typeof normalizeCompanyData>;

