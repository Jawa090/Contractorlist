import { useEffect, useState, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Loader2,
  Save,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Building2,
  FileText,
  MapPin,
  Image as ImageIcon,
  Award,
  Star,
  Info,
} from "lucide-react";

type ContractorProfile = {
  company_name?: string;
  contact_name?: string;
  phone?: string;
  email?: string;
  website?: string;
  video_call_link?: string;
  address?: string;
  tagline?: string;
  description?: string;
  services_offered?: string[] | string;
  service_areas?: string[] | string;
  service_cities?: string[] | string;
  service_zip_codes?: string[] | string;
  specialties?: string[] | string;
  languages?: string[] | string;
  awards?: string[] | string;
  certifications?: string[] | string;
  clients?: string[] | string;
  budget_range?: string;
  years_in_business?: number | string | null;
  employees_count?: string;
  verified_hires?: number | string;
  reviews_count?: number | string;
  rating?: number | string;
  reviews?: Array<{
    reviewer?: string;
    rating?: number | string;
    text?: string;
  }>;
  image_url?: string;
  image_url_2?: string;
  image_url_3?: string;
  license_number?: string;
  verified_business?: boolean;
  responds_quickly?: boolean;
  hired_on_platform?: boolean;
  family_owned?: boolean;
  eco_friendly?: boolean;
  locally_owned?: boolean;
  offers_custom_work?: boolean;
  provides_3d_visualization?: boolean;
  professional_category?: string;
  featured_reviewer_name?: string;
  featured_review_text?: string;
  featured_review_rating?: number | string;
};

const PROGRESS_FIELDS: (keyof ContractorProfile)[] = [
  "company_name",
  "contact_name",
  "phone",
  "email",
  "website",
  "video_call_link",
  "address",
  "tagline",
  "description",
  "services_offered",
  "service_areas",
  "image_url",
  "image_url_2",
  "image_url_3",
];

const arrayToInputValue = (value?: string[] | string) => {
  if (!value) return "";
  if (Array.isArray(value)) {
    return value.join(", ");
  }
  if (typeof value === "string") {
    return value;
  }
  return "";
};

const parseCommaSeparated = (value: string) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const isFieldFilled = (value: any) => {
  if (value === null || value === undefined) return false;
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  if (typeof value === "string") {
    return value.trim().length > 0;
  }
  if (typeof value === "number") {
    return !Number.isNaN(value);
  }
  if (typeof value === "boolean") {
    return value;
  }
  return true;
};

const ContractorUpdate = () => {
  const { token } = useParams<{ token: string }>();
  const [data, setData] = useState<ContractorProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  const fetchProfile = async () => {
    if (!token) return;
    setLoading(true);
    setErrorMessage(null);
    try {
      const res = await fetch(
        `${API_URL}/contractor/profile/${encodeURIComponent(token)}`
      );
      const json = await res.json();
      if (!json.success) {
        throw new Error(json.message || "Unable to load profile");
      }
      setData(json.data || {});
    } catch (error: any) {
      setErrorMessage(error.message || "Failed to load profile");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleChange = (
    field: keyof ContractorProfile,
    value: string | number
  ) => {
    setData((prev) => ({
      ...(prev || {}),
      [field]: value,
    }));
  };

  const calculateProgress = () => {
    const filled = PROGRESS_FIELDS.filter((field) => {
      const value = data?.[field];
      return isFieldFilled(value);
    }).length;
    return Math.round((filled / PROGRESS_FIELDS.length) * 100);
  };
  const progressValue = calculateProgress();

  const handleArrayChange = (field: keyof ContractorProfile, value: string) => {
    const arrayValue = parseCommaSeparated(value);
    setData((prev) => ({
      ...(prev || {}),
      [field]: arrayValue,
    }));
  };

  const handleBooleanChange = (
    field: keyof ContractorProfile,
    checked: boolean
  ) => {
    setData((prev) => ({
      ...(prev || {}),
      [field]: checked,
    }));
  };

  const handleReviewChange = (
    index: number,
    field: "reviewer" | "rating" | "text",
    value: string
  ) => {
    setData((prev) => {
      const existingReviews = prev?.reviews ? [...prev.reviews] : [];
      if (!existingReviews[index]) {
        existingReviews[index] = {};
      }
      existingReviews[index] = {
        ...existingReviews[index],
        [field]: value,
      };
      return { ...(prev || {}), reviews: existingReviews };
    });
  };

  const addReview = () => {
    setData((prev) => ({
      ...(prev || {}),
      reviews: [...(prev?.reviews || []), { reviewer: "", rating: "", text: "" }],
    }));
  };

  const removeReview = (index: number) => {
    setData((prev) => {
      const existing = prev?.reviews ? [...prev.reviews] : [];
      existing.splice(index, 1);
      return { ...(prev || {}), reviews: existing };
    });
  };

  const handleSave = async () => {
    if (!token || !data) return;
    setSaving(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const res = await fetch(
        `${API_URL}/contractor/profile/${encodeURIComponent(token)}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const json = await res.json();
      if (!json.success) {
        throw new Error(json.message || "Unable to save profile");
      }
      setSuccessMessage("Profile updated successfully.");
    } catch (error: any) {
      setErrorMessage(error.message || "Failed to save changes");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-3 text-gray-600">
          <Loader2 className="w-8 h-8 animate-spin" />
          <p>Loading contractor profile…</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <Card className="max-w-lg w-full border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="w-5 h-5" />
              Unable to load contractor profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              {errorMessage ||
                "The update link is invalid or has expired. Please contact support for assistance."}
            </p>
            <Button onClick={fetchProfile} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Try again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-wide text-yellow-600 font-semibold">
              Contractor Portal
            </p>
            <h1 className="text-3xl font-bold text-gray-900 mt-1">
              Update Your Contractor Profile
            </h1>
            <p className="text-gray-600 mt-2">
              Keep your business information up to date so homeowners know what
              makes you stand out.
            </p>
          </div>
          <div className="bg-gradient-to-r from-yellow-100 via-white to-white border border-yellow-200 rounded-xl px-4 py-3 shadow-sm max-w-lg">
            <p className="text-sm text-yellow-900 leading-relaxed">
              <span className="font-semibold">Possibility Alert:</span> your
              current data may be inaccurate or incomplete. Please verify every
              detail to stay ahead—updated profiles get featured first across
              the AI-powered ContractorList platform. Good luck!
            </p>
          </div>
        </div>

        <Card className="shadow-sm">
          <CardContent className="space-y-4 pt-6">
            <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
              <div className="flex-1 space-y-2">
                <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">
                  Profile Completion
                </p>
                <h2 className="text-2xl font-bold text-gray-900">
                  Keep your profile up to date
                </h2>
                <p className="text-sm text-gray-600">
                  Complete the highlighted sections to boost homeowner trust and
                  appear higher in search results.
                </p>
              </div>
              <div className="relative flex items-center justify-center">
                <svg
                  width={180}
                  height={180}
                  viewBox="0 0 180 180"
                  className="transform -rotate-90"
                >
                  <circle
                    cx="90"
                    cy="90"
                    r="80"
                    stroke="#E5E7EB"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="90"
                    cy="90"
                    r="80"
                    stroke="url(#progressGradient)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 80}
                    strokeDashoffset={
                      2 * Math.PI * 80 * (1 - progressValue / 100)
                    }
                    className="transition-all duration-500"
                  />
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#facc15" />
                      <stop offset="100%" stopColor="#eab308" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-bold text-gray-900">
                    {progressValue}%
                  </span>
                  <span className="text-sm text-gray-500">Complete</span>
                </div>
              </div>
            </div>
            {successMessage && (
              <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 flex items-center gap-2 text-green-800 animate-in slide-in-from-top">
            <CheckCircle2 className="w-5 h-5" />
            <span>{successMessage}</span>
          </div>
            )}

            {errorMessage && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 flex items-center gap-2 text-red-800">
                <AlertTriangle className="w-5 h-5" />
                <span>{errorMessage}</span>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-yellow-500" />
              Company Information
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Company Name
              </label>
              <Input
                value={data.company_name || ""}
                onChange={(e) =>
                  handleChange("company_name", e.target.value)
                }
                placeholder="Grandeur Hills Group"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Contact Name
              </label>
              <Input
                value={data.contact_name || ""}
                onChange={(e) =>
                  handleChange("contact_name", e.target.value)
                }
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Phone
              </label>
              <Input
                value={data.phone || ""}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="(555) 123-4567"
              />
              <p className="text-xs text-gray-500 mt-1">
                This number will be visible to homeowners.
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                value={data.email || ""}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="hello@contractor.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Website
              </label>
              <Input
                value={data.website || ""}
                onChange={(e) => handleChange("website", e.target.value)}
                placeholder="https://yourcompany.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Video Call Link (Zoom/Meet/etc.)
              </label>
              <Input
                value={data.video_call_link || ""}
                onChange={(e) =>
                  handleChange("video_call_link", e.target.value)
                }
                placeholder="https://meet.google.com/..."
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Address
              </label>
              <Input
                value={data.address || ""}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder="123 Main St, Tampa, FL"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-yellow-500" />
              About Your Business
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Tagline
              </label>
              <Input
                value={data.tagline || ""}
                onChange={(e) => handleChange("tagline", e.target.value)}
                placeholder="Award-winning design-build firm"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Description
                </label>
                <span className="text-xs text-gray-500">
                  {(data.description?.length || 0)}/500
                </span>
              </div>
              <Textarea
                value={data.description || ""}
                maxLength={500}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  handleChange("description", e.target.value)
                }
                rows={5}
                placeholder="Tell homeowners about your experience, specialties, and what makes your team unique."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Years in Business
                </label>
                <Input
                  type="number"
                  min={0}
                  value={
                    data.years_in_business !== null &&
                    data.years_in_business !== undefined
                      ? data.years_in_business
                      : ""
                  }
                  onChange={(e) =>
                    handleChange("years_in_business", e.target.value)
                  }
                  placeholder="15"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Employees
                </label>
                <Input
                  value={data.employees_count || ""}
                  onChange={(e) =>
                    handleChange("employees_count", e.target.value)
                  }
                  placeholder="10-50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Budget Range
                </label>
                <Input
                  value={data.budget_range || ""}
                  onChange={(e) =>
                    handleChange("budget_range", e.target.value)
                  }
                  placeholder="$$ (Mid-range)"
                />
              </div>
              <div>
                <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
                  Professional Category
                  <Info
                    className="w-4 h-4 text-gray-400 cursor-help"
                    aria-label="e.g., General Contractor, Electrician, Plumber"
                    role="img"
                  />
                </label>
                <Input
                  value={data.professional_category || ""}
                  onChange={(e) =>
                    handleChange("professional_category", e.target.value)
                  }
                  placeholder="General Contractors"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-yellow-500" />
              Images & Media
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["image_url", "image_url_2", "image_url_3"].map((field, idx) => {
              const url = (data as any)[field] || "";
              return (
                <div key={field} className="space-y-3">
                  {url && (
                    <img
                      src={url}
                      alt={`Preview ${idx + 1}`}
                      className="w-full h-40 object-cover rounded-lg border"
                    />
                  )}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Image URL {idx + 1}
                    </label>
                    <Input
                      value={url}
                      onChange={(e) =>
                        handleChange(
                          field as keyof ContractorProfile,
                          e.target.value
                        )
                      }
                      placeholder={`https://example.com/image${idx + 1}.jpg`}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      💡 Tip: Use high-quality photos (1200x800px recommended).
                    </p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              Credentials & Highlights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  License Number
                </label>
                <Input
                  value={data.license_number || ""}
                  onChange={(e) =>
                    handleChange("license_number", e.target.value)
                  }
                  placeholder="EC13013307"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Verified Hires
                </label>
                <Input
                  type="number"
                  min={0}
                  value={data.verified_hires || ""}
                  onChange={(e) =>
                    handleChange("verified_hires", e.target.value)
                  }
                  placeholder="12"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Rating
                </label>
                <Input
                  type="number"
                  step="0.1"
                  min={0}
                  max={5}
                  value={data.rating || ""}
                  onChange={(e) => handleChange("rating", e.target.value)}
                  placeholder="4.7"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Reviews Count
                </label>
                <Input
                  type="number"
                  min={0}
                  value={data.reviews_count || ""}
                  onChange={(e) =>
                    handleChange("reviews_count", e.target.value)
                  }
                  placeholder="32"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { field: "verified_business", label: "Verified Business" },
                { field: "responds_quickly", label: "Responds Quickly" },
                { field: "hired_on_platform", label: "Hired on Platform" },
                { field: "family_owned", label: "Family Owned" },
                { field: "eco_friendly", label: "Eco-friendly" },
                { field: "locally_owned", label: "Locally Owned" },
                { field: "offers_custom_work", label: "Offers Custom Work" },
                {
                  field: "provides_3d_visualization",
                  label: "Provides 3D Visualization",
                },
              ].map((item) => (
                <label
                  key={item.field}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-yellow-500"
                    checked={Boolean((data as any)[item.field])}
                    onChange={(e) =>
                      handleBooleanChange(
                        item.field as keyof ContractorProfile,
                        e.target.checked
                      )
                    }
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-yellow-500" />
              Services & Coverage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Services Offered (comma separated)
              </label>
              <Textarea
                value={arrayToInputValue(data.services_offered)}
                onChange={(e) =>
                  handleArrayChange("services_offered", e.target.value)
                }
                rows={3}
                placeholder="Kitchen Remodel, Bathroom Remodel, Custom Homes"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Specialties (comma separated)
              </label>
              <Textarea
                value={arrayToInputValue(data.specialties)}
                onChange={(e) =>
                  handleArrayChange("specialties", e.target.value)
                }
                rows={3}
                placeholder="Luxury Remodeling, Historic Preservation"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Service Areas (comma separated)
              </label>
              <Textarea
                value={arrayToInputValue(data.service_areas)}
                onChange={(e) =>
                  handleArrayChange("service_areas", e.target.value)
                }
                rows={2}
                placeholder="Tampa (33602), Orlando (32801)"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Service Cities (comma separated)
                </label>
                <Textarea
                  value={arrayToInputValue(data.service_cities)}
                  onChange={(e) =>
                    handleArrayChange("service_cities", e.target.value)
                  }
                  rows={2}
                  placeholder="Tampa, Orlando"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Service Zip Codes (comma separated)
                </label>
                <Textarea
                  value={arrayToInputValue(data.service_zip_codes)}
                  onChange={(e) =>
                    handleArrayChange("service_zip_codes", e.target.value)
                  }
                  rows={2}
                  placeholder="33602, 32801"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Languages (comma separated)
              </label>
              <Textarea
                value={arrayToInputValue(data.languages)}
                onChange={(e) =>
                  handleArrayChange("languages", e.target.value)
                }
                rows={2}
                placeholder="English, Spanish"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Notable Clients (comma separated)
              </label>
              <Textarea
                value={arrayToInputValue(data.clients)}
                onChange={(e) => handleArrayChange("clients", e.target.value)}
                rows={2}
                placeholder="Client A, Client B"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Awards & Certifications</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Awards (comma separated)
              </label>
              <Textarea
                value={arrayToInputValue(data.awards)}
                onChange={(e) => handleArrayChange("awards", e.target.value)}
                rows={3}
                placeholder="Award 1, Award 2"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Certifications (comma separated)
              </label>
              <Textarea
                value={arrayToInputValue(data.certifications)}
                onChange={(e) =>
                  handleArrayChange("certifications", e.target.value)
                }
                rows={3}
                placeholder="Cert 1, Cert 2"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Featured Review
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Reviewer Name
              </label>
              <Input
                value={data.featured_reviewer_name || ""}
                onChange={(e) =>
                  handleChange("featured_reviewer_name", e.target.value)
                }
                placeholder="John M."
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Reviewer Rating
              </label>
              <Input
                type="number"
                step="0.1"
                min={0}
                max={5}
                value={data.featured_review_rating || ""}
                onChange={(e) =>
                  handleChange("featured_review_rating", e.target.value)
                }
                placeholder="5.0"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-700">
                Review Text
              </label>
              <Textarea
                value={data.featured_review_text || ""}
                onChange={(e) =>
                  handleChange("featured_review_text", e.target.value)
                }
                rows={4}
                placeholder="Great service!"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Additional Client Reviews
            </CardTitle>
            <p className="text-sm text-gray-500">
              Add as many testimonials as you like. These will appear on your
              profile alongside the featured review.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {(data.reviews || []).map((review, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg p-4 space-y-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-semibold text-gray-800">
                    Review #{idx + 1}
                  </h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeReview(idx)}
                  >
                    Remove
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Reviewer Name
                    </label>
                    <Input
                      value={review.reviewer || ""}
                      onChange={(e) =>
                        handleReviewChange(idx, "reviewer", e.target.value)
                      }
                      placeholder="Client Name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Rating
                    </label>
                    <Input
                      type="number"
                      step="0.1"
                      min={0}
                      max={5}
                      value={review.rating || ""}
                      onChange={(e) =>
                        handleReviewChange(idx, "rating", e.target.value)
                      }
                      placeholder="4.9"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Review Text
                  </label>
                  <Textarea
                    value={review.text || ""}
                    onChange={(e) =>
                      handleReviewChange(idx, "text", e.target.value)
                    }
                    rows={3}
                    placeholder="Describe the client's experience..."
                  />
                </div>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={addReview}>
              Add Another Review
            </Button>
          </CardContent>
        </Card>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 shadow-lg">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              Need help? Email{" "}
              <a
                href="mailto:support@contractorlist.com"
                className="text-yellow-600 font-medium"
              >
                support@contractorlist.com
              </a>
            </p>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={fetchProfile}
                disabled={loading || saving}
                className="transition-all duration-200 hover:shadow-md"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Preview / Reset
              </Button>
              <Button
                onClick={handleSave}
                disabled={saving}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white transition-all duration-200 hover:shadow-md"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving…
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractorUpdate;

