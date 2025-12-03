import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Star, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ProfileSettings = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile has been saved successfully",
      duration: 3000,
    });
  };

  const handleUpload = () => {
    toast({
      title: "Upload Photo",
      description: "Photo upload dialog would open here",
      duration: 2000,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Profile Settings</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your contractor profile and business information</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="border-b">
            <CardTitle>Business Information</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" defaultValue="Elite Construction Co." className="mt-1" />
              </div>
              <div>
                <Label htmlFor="license-number">License Number</Label>
                <Input id="license-number" defaultValue="LC-2024-12345" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="(555) 123-4567" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="contact@eliteconstruction.com" className="mt-1" />
              </div>
            </div>

            <div>
              <Label htmlFor="address">Business Address</Label>
              <Input id="address" defaultValue="123 Construction Ave, New York, NY 10001" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="bio">Company Bio</Label>
              <Textarea
                id="bio"
                className="mt-1 min-h-[120px]"
                defaultValue="Elite Construction Co. has been serving the New York area for over 15 years. We specialize in residential renovations, kitchen and bathroom remodels, and custom home builds. Our team of certified professionals is committed to delivering exceptional quality and customer satisfaction."
              />
            </div>

            <div>
              <Label>Specializations</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                {["Kitchen Remodeling", "Bathroom Renovation", "Deck Building", "Home Additions", "Basement Finishing", "Custom Homes"].map((spec) => (
                  <div key={spec} className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <label className="text-sm text-gray-700">{spec}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button className="bg-black hover:bg-gray-800 text-white shadow-lg shadow-black/20 transition-all font-semibold" onClick={handleSave}>
                Save Changes
              </Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="border-b">
            <CardTitle>Profile Photo</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white text-4xl font-bold mb-4 shadow-lg shadow-yellow-500/20">
                EC
              </div>
              <Button variant="outline" className="w-full" onClick={handleUpload}>
                <Upload className="w-4 h-4 mr-2" />
                Upload Photo
              </Button>
            </div>

            <div className="border-t pt-4 space-y-3">
              <h4 className="font-semibold text-gray-900">Quick Stats</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Member Since</span>
                  <span className="text-sm font-semibold">Jan 2020</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Projects Completed</span>
                  <span className="text-sm font-semibold">47</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Client Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold">4.8</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Response Time</span>
                  <span className="text-sm font-semibold">2 hours</span>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-semibold text-gray-900 mb-3">Certifications</h4>
              <div className="space-y-2">
                {["Licensed Contractor", "Insured & Bonded", "EPA Lead-Safe Certified"].map((cert) => (
                  <div key={cert} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileSettings;
