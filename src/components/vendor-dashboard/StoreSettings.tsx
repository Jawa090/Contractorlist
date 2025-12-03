import { useState } from "react";
import { Store, MapPin, Phone, Mail, Globe, Clock, DollarSign, Truck, CreditCard, Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

const StoreSettings = () => {
  const { toast } = useToast();
  const [storeName, setStoreName] = useState("BuildMart Pro");
  const [storeDescription, setStoreDescription] = useState("Your trusted construction materials supplier");
  const [storeAddress, setStoreAddress] = useState("123 Construction Ave, Builder City");
  const [storePhone, setStorePhone] = useState("+1 (555) 123-4567");
  const [storeEmail, setStoreEmail] = useState("contact@buildmart.com");
  const [storeWebsite, setStoreWebsite] = useState("www.buildmart.com");
  const [businessHours, setBusinessHours] = useState("Mon-Fri: 8AM-6PM, Sat: 9AM-4PM");
  const [taxRate, setTaxRate] = useState("8.5");
  const [shippingFee, setShippingFee] = useState("15.00");
  const [freeShippingThreshold, setFreeShippingThreshold] = useState("500");
  const [acceptsOrders, setAcceptsOrders] = useState(true);
  const [autoApproveOrders, setAutoApproveOrders] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your store settings have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Store Settings</h1>
        <p className="text-gray-600 mt-1">Manage your store information and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Store Information */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Store className="w-5 h-5 text-orange-600" />
              Store Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="storeName">Store Name</Label>
              <Input
                id="storeName"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="storeDescription">Description</Label>
              <Textarea
                id="storeDescription"
                value={storeDescription}
                onChange={(e) => setStoreDescription(e.target.value)}
                className="mt-1"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="storeAddress" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Address
              </Label>
              <Input
                id="storeAddress"
                value={storeAddress}
                onChange={(e) => setStoreAddress(e.target.value)}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-orange-600" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="storePhone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </Label>
              <Input
                id="storePhone"
                value={storePhone}
                onChange={(e) => setStorePhone(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="storeEmail" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </Label>
              <Input
                id="storeEmail"
                type="email"
                value={storeEmail}
                onChange={(e) => setStoreEmail(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="storeWebsite" className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Website
              </Label>
              <Input
                id="storeWebsite"
                value={storeWebsite}
                onChange={(e) => setStoreWebsite(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="businessHours" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Business Hours
              </Label>
              <Input
                id="businessHours"
                value={businessHours}
                onChange={(e) => setBusinessHours(e.target.value)}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Pricing & Shipping */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-orange-600" />
              Pricing & Shipping
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="taxRate">Tax Rate (%)</Label>
              <Input
                id="taxRate"
                type="number"
                step="0.1"
                value={taxRate}
                onChange={(e) => setTaxRate(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="shippingFee" className="flex items-center gap-2">
                <Truck className="w-4 h-4" />
                Standard Shipping Fee ($)
              </Label>
              <Input
                id="shippingFee"
                type="number"
                step="0.01"
                value={shippingFee}
                onChange={(e) => setShippingFee(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="freeShippingThreshold">Free Shipping Threshold ($)</Label>
              <Input
                id="freeShippingThreshold"
                type="number"
                step="0.01"
                value={freeShippingThreshold}
                onChange={(e) => setFreeShippingThreshold(e.target.value)}
                className="mt-1"
              />
              <p className="text-xs text-gray-500 mt-1">Orders above this amount get free shipping</p>
            </div>
          </CardContent>
        </Card>

        {/* Store Preferences */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-orange-600" />
              Store Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <Label htmlFor="acceptsOrders" className="font-medium">Accept New Orders</Label>
                <p className="text-xs text-gray-500">Allow customers to place orders</p>
              </div>
              <Switch
                id="acceptsOrders"
                checked={acceptsOrders}
                onCheckedChange={setAcceptsOrders}
              />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <Label htmlFor="autoApproveOrders" className="font-medium">Auto-Approve Orders</Label>
                <p className="text-xs text-gray-500">Automatically approve incoming orders</p>
              </div>
              <Switch
                id="autoApproveOrders"
                checked={autoApproveOrders}
                onCheckedChange={setAutoApproveOrders}
              />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <Label htmlFor="emailNotifications" className="font-medium">Email Notifications</Label>
                <p className="text-xs text-gray-500">Receive email alerts for new orders</p>
              </div>
              <Switch
                id="emailNotifications"
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleSave} className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default StoreSettings;
