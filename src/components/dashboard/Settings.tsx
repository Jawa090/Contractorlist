import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, CheckCircle, AlertTriangle, CreditCard } from "lucide-react";

const SettingsPage = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                <p className="text-gray-600 mt-1">Manage your profile, account, and notification preferences.</p>
            </div>

            <Tabs defaultValue="profile" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none bg-transparent p-0 h-auto">
                    <TabsTrigger
                        value="profile"
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2 text-gray-600 data-[state=active]:text-blue-600"
                    >
                        My Profile
                    </TabsTrigger>
                    <TabsTrigger
                        value="account"
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2 text-gray-600 data-[state=active]:text-blue-600"
                    >
                        Account & Security
                    </TabsTrigger>
                    <TabsTrigger
                        value="notifications"
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2 text-gray-600 data-[state=active]:text-blue-600"
                    >
                        Notifications
                    </TabsTrigger>
                    <TabsTrigger
                        value="integrations"
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2 text-gray-600 data-[state=active]:text-blue-600"
                    >
                        Integrations
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="profile" className="mt-6 space-y-8">
                    {/* Profile Header */}
                    <div className="flex items-center justify-between bg-white border rounded-lg p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <Avatar className="h-16 w-16 border-2 border-gray-100">
                                <AvatarImage src="/placeholder-avatar.jpg" />
                                <AvatarFallback className="bg-yellow-100 text-yellow-700 text-xl font-bold">CW</AvatarFallback>
                            </Avatar>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">Cameron Williamson</h2>
                                <p className="text-gray-500">Project Manager at BuildRight AI</p>
                            </div>
                        </div>
                        <Button variant="outline" className="border-gray-200 hover:bg-gray-50">
                            Upload new photo
                        </Button>
                    </div>

                    {/* Personal Information */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input id="fullName" defaultValue="Cameron Williamson" className="bg-white border-gray-200" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="jobTitle">Job Title</Label>
                                <Input id="jobTitle" defaultValue="Project Manager" className="bg-white border-gray-200" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" defaultValue="cameron.w@buildright.ai" className="bg-white border-gray-200" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" defaultValue="(555) 123-4567" className="bg-white border-gray-200" />
                            </div>
                        </div>
                    </div>

                    {/* Company Information */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Company Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="companyName">Company Name</Label>
                                <Input id="companyName" defaultValue="BuildRight AI" className="bg-white border-gray-200" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="timezone">Timezone</Label>
                                <Select defaultValue="est">
                                    <SelectTrigger className="bg-white border-gray-200">
                                        <SelectValue placeholder="Select timezone" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="est">(GMT-05:00) Eastern Time</SelectItem>
                                        <SelectItem value="cst">(GMT-06:00) Central Time</SelectItem>
                                        <SelectItem value="mst">(GMT-07:00) Mountain Time</SelectItem>
                                        <SelectItem value="pst">(GMT-08:00) Pacific Time</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-4 pt-4">
                        <Button variant="outline" className="border-gray-200 hover:bg-gray-50">
                            Cancel
                        </Button>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                            Save Changes
                        </Button>
                    </div>
                </TabsContent>

                <TabsContent value="account" className="mt-6 space-y-8">
                    {/* Password Section */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Password</h3>
                            <p className="text-sm text-gray-500">Update your password regularly to keep your account secure.</p>
                        </div>
                        <div className="space-y-4 max-w-md">
                            <div className="space-y-2">
                                <Label htmlFor="currentPassword">Current Password</Label>
                                <Input id="currentPassword" type="password" className="bg-white border-gray-200" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="newPassword">New Password</Label>
                                <Input id="newPassword" type="password" className="bg-white border-gray-200" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                <Input id="confirmPassword" type="password" className="bg-white border-gray-200" />
                            </div>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                Change Password
                            </Button>
                        </div>
                    </div>

                    <div className="border-t border-gray-200"></div>

                    {/* 2FA Section */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Two-Factor Authentication (2FA)</h3>
                            <p className="text-sm text-gray-500">Add an extra layer of security to your account.</p>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <div className="flex items-center gap-3">
                                <Shield className="h-5 w-5 text-green-600" />
                                <span className="text-sm font-medium text-gray-900">2FA is currently <span className="text-green-600">Enabled</span></span>
                            </div>
                            <Button variant="outline" className="border-gray-300 hover:bg-white">
                                Disable
                            </Button>
                        </div>
                    </div>

                    <div className="border-t border-gray-200"></div>

                    {/* Security Log */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Security Log</h3>
                            <p className="text-sm text-gray-500">Review recent security-related activity on your account.</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-4 py-3 font-medium text-gray-500">EVENT</th>
                                        <th className="px-4 py-3 font-medium text-gray-500">IP ADDRESS</th>
                                        <th className="px-4 py-3 font-medium text-gray-500">DATE & TIME</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-gray-900">Successful Login</td>
                                        <td className="px-4 py-3 text-gray-500">192.168.1.1</td>
                                        <td className="px-4 py-3 text-gray-500">July 20, 2023, 10:00 AM</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-gray-900">Password Changed</td>
                                        <td className="px-4 py-3 text-gray-500">192.168.1.1</td>
                                        <td className="px-4 py-3 text-gray-500">July 19, 2023, 02:30 PM</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-gray-900">Failed Login Attempt</td>
                                        <td className="px-4 py-3 text-gray-500">10.0.0.5</td>
                                        <td className="px-4 py-3 text-gray-500">July 18, 2023, 09:15 AM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="border-t border-gray-200"></div>

                    {/* Billing & Subscription */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Billing & Subscription</h3>
                            <p className="text-sm text-gray-500">Manage your subscription plan and payment methods.</p>
                        </div>

                        <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-semibold text-gray-900">Pro Plan</h4>
                                    <p className="text-sm text-gray-500">$99 / month. Next bill on August 1, 2023.</p>
                                </div>
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                    Change Plan
                                </Button>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h4 className="font-medium text-gray-900 mb-4">Payment Methods</h4>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-12 bg-white border border-gray-200 rounded flex items-center justify-center">
                                            <CreditCard className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <span className="text-sm text-gray-600">Visa ending in 1234</span>
                                    </div>
                                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                                        Manage
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="notifications">
                    <Card>
                        <CardHeader>
                            <CardTitle>Notifications</CardTitle>
                            <CardDescription>Manage how you receive notifications.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-500">Notification settings content goes here.</p>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="integrations">
                    <Card>
                        <CardHeader>
                            <CardTitle>Integrations</CardTitle>
                            <CardDescription>Manage your connected apps and services.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-500">Integration settings content goes here.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default SettingsPage;
