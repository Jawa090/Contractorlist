import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Star, Phone, Mail, Globe, BadgeCheck, Calendar } from "lucide-react";

type ContractorDetailsResponse = {
  success: boolean;
  data?: any;
  message?: string;
};

const ContractorDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [contractor, setContractor] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchById = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`http://localhost:5000/api/contractors/${id}`);
        const json: ContractorDetailsResponse = await res.json();
        if (!json.success) {
          throw new Error(json.message || "Failed to load contractor");
        }
        setContractor(json.data);
      } catch (e: any) {
        setError(e.message || "Failed to load contractor");
      } finally {
        setLoading(false);
      }
    };
    fetchById();
  }, [id]);

  const email = contractor?.contact?.email || contractor?.email || '';
  const phone = contractor?.contact?.phone || contractor?.phone || '';
  const website = contractor?.website || contractor?.contact?.website || '';
  const licenseNumber = contractor?.licenseNumber || contractor?.license || contractor?.credentials?.licenseNumber || '';
  const yearsInBusiness = contractor?.yearsInBusiness || contractor?.experienceYears || contractor?.experience?.years || null;
  const serviceAreas: string[] = contractor?.serviceAreas || contractor?.service_areas || [];
  const address = contractor?.address;
  const addressLine = address
    ? `${address.street || ''}${address.street ? ', ' : ''}${address.city || contractor?.location?.city || ''}, ${address.state || contractor?.location?.state || ''} ${address.zipCode || address.zip || contractor?.location?.zip || contractor?.location?.zipCode || ''}`
    : (contractor?.location?.address || `${contractor?.location?.city || ''}, ${contractor?.location?.state || ''}`);
  const reviewCount = (typeof contractor?.reviewCount === 'number' ? contractor?.reviewCount : undefined) ?? contractor?.rating?.count ?? (Array.isArray(contractor?.reviews) ? contractor?.reviews.length : undefined);
  const isVerified = contractor?.credentials?.isVerified || contractor?.badges?.isVerified || false;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  if (window.history.length > 1) {
                    navigate(-1);
                  } else {
                    navigate('/contractors');
                  }
                }}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="ml-2">Back to results</span>
              </button>
            </div>
            <Link to="/">
              <img src="/main-logo.png" alt="Contractorlist Logo" className="h-8 w-auto" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {loading && (
          <div className="text-center text-gray-600">Loading contractor...</div>
        )}
        {error && (
          <div className="text-center text-red-600">{error}</div>
        )}
        {!loading && !error && contractor && (
          <Card className="bg-white border">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={`/thumbnail-${(Number(id) || 1) % 7 || 1}.jpg`}
                    alt={contractor.name}
                    className="w-32 h-32 rounded-lg object-cover border border-gray-200"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">{contractor.name}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {addressLine}
                    </span>
                     <span className="inline-flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                       {(contractor.rating?.average ?? contractor.rating ?? 0).toFixed ? (contractor.rating?.average ?? contractor.rating ?? 0).toFixed(1) : Number(contractor.rating?.average ?? contractor.rating ?? 0).toFixed(1)}
                      {typeof reviewCount === 'number' && (
                        <span className="text-gray-500">({reviewCount})</span>
                      )}
                    </span>
                  </div>
                  {contractor.description && (
                    <p className="text-gray-700 mb-4">{contractor.description}</p>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-4">
                    <div className="inline-flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">Years in Business:</span>
                      <span className="font-medium">{yearsInBusiness ?? 'N/A'}</span>
                    </div>
                    {licenseNumber && (
                      <div className="inline-flex items-center gap-2">
                        <BadgeCheck className="w-4 h-4 text-green-600" />
                        <span className="text-gray-600">License:</span>
                        <span className="font-medium">{licenseNumber}</span>
                      </div>
                    )}
                  </div>

                  {isVerified && (
                    <div className="mb-4">
                      <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">Verified Business</Badge>
                    </div>
                  )}

                  {(contractor.services || []).length > 0 && (
                    <div className="mb-4">
                      <div className="text-xs font-medium text-gray-600 mb-1 inline-flex items-center gap-2">
                        <BadgeCheck className="w-3.5 h-3.5 text-gray-500" />
                        Services
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {(contractor.services || []).map((s: string) => (
                          <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {serviceAreas && serviceAreas.length > 0 && (
                    <div className="mb-4">
                      <div className="text-xs font-medium text-gray-600 mb-1 inline-flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-gray-500" />
                        Service Areas
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {serviceAreas.map((a: string) => (
                          <Badge key={a} variant="outline" className="text-xs">{a}</Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-3">
                    {phone && (
                      <Button onClick={() => (window.location.href = `tel:${phone}`)} className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium">
                        <Phone className="w-4 h-4 mr-2" /> Call
                      </Button>
                    )}
                    {email && (
                      <a href={`mailto:${email}`} className="inline-flex items-center px-3 py-2 text-sm border rounded-md hover:bg-gray-50">
                        <Mail className="w-4 h-4 mr-2" /> Email
                      </a>
                    )}
                    {website && (
                      <a href={website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm border rounded-md hover:bg-gray-50">
                        <Globe className="w-4 h-4 mr-2" /> Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
              {/* Reviews / Testimonials */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Client Reviews</h2>
                {/* Overall rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => {
                      const avg = Number(contractor?.rating?.average ?? contractor?.rating ?? 0);
                      const filled = i < Math.round(avg);
                      return (
                        <Star key={i} className={`w-5 h-5 ${filled ? 'text-yellow-500' : 'text-gray-300'}`} />
                      );
                    })}
                  </div>
                  <div className="text-sm text-gray-700">
                    <span className="font-medium">{(contractor?.rating?.average ?? contractor?.rating ?? 0).toFixed ? (contractor?.rating?.average ?? contractor?.rating ?? 0).toFixed(1) : Number(contractor?.rating?.average ?? contractor?.rating ?? 0).toFixed(1)}</span>
                    {typeof reviewCount === 'number' && (
                      <span className="text-gray-500"> • {reviewCount} reviews</span>
                    )}
                  </div>
                </div>

                {Array.isArray(contractor?.testimonials) || Array.isArray(contractor?.reviews) ? (
                  <div className="space-y-3">
                    {(contractor.testimonials || contractor.reviews || []).map((r: any, idx: number) => {
                      const reviewer = r.clientName || r.reviewer || r.author || r.name || 'Client';
                      const location = r.clientLocation || r.location || '';
                      const text = r.comment || r.text || r.review || '';
                      const stars = Number(r.rating ?? r.stars ?? 0);
                      const date = r.reviewDate || r.date || r.createdAt || null;
                      return (
                        <div key={idx} className="border rounded-lg bg-white p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="font-medium text-gray-900">{reviewer}</div>
                              {location && <div className="text-xs text-gray-500">{location}</div>}
                              {date && <div className="text-xs text-gray-500">{new Date(date).toLocaleDateString()}</div>}
                            </div>
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < Math.round(stars) ? 'text-yellow-500' : 'text-gray-300'}`} />
                              ))}
                            </div>
                          </div>
                          {text && <p className="text-sm text-gray-700 mt-2">{text}</p>}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-sm text-gray-600">No reviews yet.</div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ContractorDetails;


