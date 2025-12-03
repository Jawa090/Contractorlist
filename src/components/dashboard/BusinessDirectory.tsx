import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, Mail, Phone, Eye } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface Business {
  id: number;
  name: string;
  location: string;
  specialty: string;
  services: string[];
  contact: {
    email: string;
    phone: string;
  };
  rating: number;
  reviews: number;
  logo: string;
}

const BusinessDirectory = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  
  const businesses: Business[] = [
    { id: 1, name: "John Doe Construction", location: "123 Main St, New York, NY 10001", specialty: "General Contracting", services: ["General Contracting", "Renovations"], contact: { email: "john.doe@email.com", phone: "(212) 555-0123" }, rating: 4.9, reviews: 124, logo: "JD" },
    { id: 2, name: "Smith's Roofing", location: "456 Oak Ave, Los Angeles, CA 90001", specialty: "Roofing", services: ["Roofing", "Repairs", "Installation"], contact: { email: "jane.smith@email.com", phone: "(310) 555-0145" }, rating: 4.8, reviews: 98, logo: "SR" },
    { id: 3, name: "Johnson & Sons Plumbing", location: "789 Pine Rd, Chicago, IL 60601", specialty: "Plumbing", services: ["Plumbing", "Emergency"], contact: { email: "bob.j@email.com", phone: "(312) 555-0187" }, rating: 4.7, reviews: 75, logo: "JS" },
    { id: 4, name: "Emily's Electrical", location: "101 Maple St, Houston, TX 77001", specialty: "Electrical", services: ["Electrical", "Wiring", "Lighting"], contact: { email: "emily.e@email.com", phone: "(713) 555-0165" }, rating: 5.0, reviews: 55, logo: "EE" },
    { id: 5, name: "Green Scapes Landscaping", location: "202 Birch Ln, Seattle, WA 98101", specialty: "Landscaping", services: ["Landscaping", "Design", "Maintenance"], contact: { email: "info@greenscapes.com", phone: "(206) 555-0199" }, rating: 4.6, reviews: 42, logo: "GS" },
  ];

  const handleAction = (action: string, business: Business) => {
    toast({
      title: action,
      description: business.name,
      duration: 3000,
    });
  };

  const filteredBusinesses = businesses.filter(business =>
    business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    business.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Business Directory</h1>
          <p className="text-sm text-gray-500 mt-1">Connect with trusted contractors and suppliers</p>
        </div>
      </div>

      <Card className="bg-white shadow-sm border-gray-200">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="company-search" className="text-xs font-semibold uppercase text-gray-500">Company Name</Label>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <Input 
                  id="company-search" 
                  placeholder="Search by name..." 
                  className="pl-9 bg-gray-50 border-gray-200 h-9 focus:bg-white transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location-search" className="text-xs font-semibold uppercase text-gray-500">Location</Label>
              <Input id="location-search" placeholder="City, State or ZIP" className="bg-gray-50 border-gray-200 h-9 focus:bg-white transition-colors" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialty-filter" className="text-xs font-semibold uppercase text-gray-500">Specialty</Label>
              <select id="specialty-filter" className="w-full h-9 p-2 border border-gray-200 rounded-md bg-gray-50 focus:bg-white transition-colors text-sm">
                <option>All Specialties</option>
                <option>General Contracting</option>
                <option>Roofing</option>
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>Landscaping</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase text-gray-500 block">&nbsp;</Label>
              <Button className="w-full bg-black hover:bg-gray-800 text-white h-9">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBusinesses.map((business) => (
          <Card key={business.id} className="hover:shadow-xl transition-all duration-300 border-gray-200">
            <CardHeader className="border-b bg-gradient-to-br from-gray-50 to-white p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-yellow-500/20">
                  {business.logo}
                </div>
                <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg shadow-sm border border-gray-100">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-sm">{business.rating}</span>
                  <span className="text-xs text-gray-500">({business.reviews})</span>
                </div>
              </div>
              <CardTitle className="text-lg font-bold text-gray-900 mb-1">{business.name}</CardTitle>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 w-fit">
                {business.specialty}
              </Badge>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5 text-gray-400 shrink-0" />
                <span>{business.location}</span>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Services</p>
                <div className="flex flex-wrap gap-2">
                  {business.services.map((service) => (
                    <Badge key={service} variant="secondary" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="truncate">{business.contact.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>{business.contact.phone}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" className="flex-1" onClick={() => handleAction("View Profile", business)}>
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </Button>
                <Button className="flex-1 bg-black hover:bg-gray-800 text-white" onClick={() => handleAction("Contact", business)}>
                  Contact
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BusinessDirectory;
