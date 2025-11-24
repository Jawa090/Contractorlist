import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Megaphone, Mail, Share2, BarChart3, Plus,
    TrendingUp, Users, MousePointer, Calendar,
    Facebook, Instagram, Linkedin, Twitter
} from "lucide-react";

const Marketing = () => {
    const campaigns = [
        { id: 1, name: "Summer Renovation Special", type: "Email", status: "Active", sent: 1250, openRate: "45%", clicks: 320 },
        { id: 2, name: "Kitchen Remodel Promo", type: "Social", status: "Scheduled", sent: 0, openRate: "-", clicks: 0 },
        { id: 3, name: "Referral Program", type: "Email", status: "Draft", sent: 0, openRate: "-", clicks: 0 },
    ];

    const socialStats = [
        { platform: "Facebook", followers: "2.4k", engagement: "+12%", icon: Facebook, color: "text-blue-600", bg: "bg-blue-50" },
        { platform: "Instagram", followers: "1.8k", engagement: "+25%", icon: Instagram, color: "text-pink-600", bg: "bg-pink-50" },
        { platform: "LinkedIn", followers: "850", engagement: "+5%", icon: Linkedin, color: "text-blue-700", bg: "bg-blue-50" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Marketing Hub</h1>
                    <p className="text-gray-600 mt-1">Manage campaigns, track performance, and grow your brand</p>
                </div>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Campaign
                </Button>
            </div>

            {/* Analytics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Total Reach</p>
                                <p className="text-2xl font-bold text-gray-900 mt-2">12.5k</p>
                                <span className="text-xs text-green-600 flex items-center mt-1">
                                    <TrendingUp className="w-3 h-3 mr-1" /> +15% this month
                                </span>
                            </div>
                            <div className="bg-blue-50 p-3 rounded-full">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Ad Clicks</p>
                                <p className="text-2xl font-bold text-gray-900 mt-2">842</p>
                                <span className="text-xs text-green-600 flex items-center mt-1">
                                    <TrendingUp className="w-3 h-3 mr-1" /> +8% this month
                                </span>
                            </div>
                            <div className="bg-green-50 p-3 rounded-full">
                                <MousePointer className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Leads Generated</p>
                                <p className="text-2xl font-bold text-gray-900 mt-2">45</p>
                                <span className="text-xs text-green-600 flex items-center mt-1">
                                    <TrendingUp className="w-3 h-3 mr-1" /> +12% this month
                                </span>
                            </div>
                            <div className="bg-purple-50 p-3 rounded-full">
                                <Megaphone className="w-6 h-6 text-purple-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Ad Spend</p>
                                <p className="text-2xl font-bold text-gray-900 mt-2">$1,250</p>
                                <span className="text-xs text-gray-500 mt-1">
                                    Budget: $2,000
                                </span>
                            </div>
                            <div className="bg-yellow-50 p-3 rounded-full">
                                <BarChart3 className="w-6 h-6 text-yellow-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Campaign Management */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Active Campaigns</CardTitle>
                        <CardDescription>Manage your email and social media campaigns</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {campaigns.map((campaign) => (
                                <div key={campaign.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-lg ${campaign.type === 'Email' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'}`}>
                                            {campaign.type === 'Email' ? <Mail className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{campaign.name}</h4>
                                            <div className="flex items-center gap-3 mt-1">
                                                <Badge variant={campaign.status === 'Active' ? 'default' : 'secondary'}>
                                                    {campaign.status}
                                                </Badge>
                                                <span className="text-xs text-gray-500">
                                                    {campaign.sent > 0 ? `${campaign.sent} sent` : 'Not sent yet'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right hidden sm:block">
                                        <div className="flex gap-6 text-sm">
                                            <div>
                                                <p className="text-gray-500">Open Rate</p>
                                                <p className="font-semibold">{campaign.openRate}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500">Clicks</p>
                                                <p className="font-semibold">{campaign.clicks}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="sm">Edit</Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Social Media Connect */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Social Media</CardTitle>
                            <CardDescription>Connected accounts performance</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {socialStats.map((social, idx) => {
                                const Icon = social.icon;
                                return (
                                    <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-full ${social.bg}`}>
                                                <Icon className={`w-4 h-4 ${social.color}`} />
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm">{social.platform}</p>
                                                <p className="text-xs text-gray-500">{social.followers} followers</p>
                                            </div>
                                        </div>
                                        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                            {social.engagement}
                                        </span>
                                    </div>
                                );
                            })}
                            <Button variant="outline" className="w-full mt-2">
                                <Plus className="w-4 h-4 mr-2" /> Connect Account
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                        <CardContent className="p-6">
                            <h3 className="text-lg font-bold mb-2">Need Marketing Help?</h3>
                            <p className="text-blue-100 text-sm mb-4">
                                Our team of experts can manage your campaigns and boost your leads.
                            </p>
                            <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                                Contact Expert
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Marketing;
