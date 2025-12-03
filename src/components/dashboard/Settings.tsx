import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone, MapPin, Building, Lock, Bell, CreditCard, Shield, ChevronRight, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Settings = () => {
  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Settings
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Manage your account preferences and security settings.
        </p>
      </div>

      {/* Profile Information */}
      <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50">
        <CardHeader className="bg-white/80 border-b">
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <User className="w-5 h-5 text-blue-600" /> Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-xs font-medium uppercase text-gray-600">
              First Name
            </Label>
            <Input
              id="firstName"
              placeholder="John"
              className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-xs font-medium uppercase text-gray-600">
              Last Name
            </Label>
            <Input
              id="lastName"
              placeholder="Doe"
              className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label
              htmlFor="email"
              className="flex items-center gap-2 text-xs font-medium uppercase text-gray-600"
            >
              <Mail className="w-4 h-4" /> Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label
              htmlFor="phone"
              className="flex items-center gap-2 text-xs font-medium uppercase text-gray-600"
            >
              <Phone className="w-4 h-4" /> Phone Number
            </Label>
            <Input
              id="phone"
              placeholder="(555) 123-4567"
              className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label
              htmlFor="company"
              className="flex items-center gap-2 text-xs font-medium uppercase text-gray-600"
            >
              <Building className="w-4 h-4" /> Company Name
            </Label>
            <Input
              id="company"
              placeholder="ABC Construction"
              className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label
              htmlFor="address"
              className="flex items-center gap-2 text-xs font-medium uppercase text-gray-600"
            >
              <MapPin className="w-4 h-4" /> Business Address
            </Label>
            <Input
              id="address"
              placeholder="123 Main St, City, State"
              className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
            />
          </div>
          <div className="md:col-span-2 flex justify-end pt-4">
            <Button className="bg-black hover:bg-gray-800 text-white shadow-lg transition-all font-semibold px-8">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Security & Preferences */}
      <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-indigo-50 text-purple-900">
        <CardHeader className="bg-white/80 border-b">
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <Shield className="w-5 h-5" /> Security & Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-6">
          <Button
            variant="outline"
            className="w-full justify-between h-12 hover:bg-purple-100 transition-colors"
          >
            <span className="flex items-center gap-3 text-purple-800">
              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                <Lock className="w-4 h-4" />
              </div>
              Change Password
            </span>
            <ChevronRight className="w-4 h-4 text-purple-600" />
          </Button>
          <Button
            variant="outline"
            className="w-full justify-between h-12 hover:bg-purple-100 transition-colors"
          >
            <span className="flex items-center gap-3 text-purple-800">
              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                <Bell className="w-4 h-4" />
              </div>
              Notification Settings
            </span>
            <ChevronRight className="w-4 h-4 text-purple-600" />
          </Button>
        </CardContent>
      </Card>

      {/* Billing Settings */}
      <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-green-50 to-emerald-50 text-green-900">
        <CardHeader className="bg-white/80 border-b">
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <CreditCard className="w-5 h-5" /> Billing Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-6">
          <Button
            variant="outline"
            className="w-full justify-between h-12 hover:bg-green-100 transition-colors"
          >
            <span className="flex items-center gap-3 text-green-800">
              <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                <CreditCard className="w-4 h-4" />
              </div>
              Manage Payment Methods
            </span>
            <ChevronRight className="w-4 h-4 text-green-600" />
          </Button>
          <Button
            variant="outline"
            className="w-full justify-between h-12 hover:bg-green-100 transition-colors"
          >
            <span className="flex items-center gap-3 text-green-800">
              <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-4 h-4" />
              </div>
              View Billing History
            </span>
            <ChevronRight className="w-4 h-4 text-green-600" />
          </Button>
        </CardContent>
      </Card>

      {/* Account Status */}
      <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-900 text-white">
        <CardHeader className="border-b border-gray-800 px-6 py-4">
          <CardTitle className="text-base font-bold">Account Status</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Current Plan</span>
            <span className="font-bold text-white">Professional</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Status</span>
            <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border-none">
              Active
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Member Since</span>
            <span className="font-medium text-white">Jan 2024</span>
          </div>
          <Button className="w-full bg-white text-black hover:bg-gray-200 font-bold mt-2">
            Upgrade Plan
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
