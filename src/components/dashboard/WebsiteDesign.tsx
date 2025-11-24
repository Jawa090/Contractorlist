import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Layout, Globe, Edit, Eye, CheckCircle,
    Smartphone, Monitor, ArrowUpRight, Palette
} from "lucide-react";

const WebsiteDesign = () => {
    const templates = [
        { id: 1, name: "Modern Builder", category: "Construction", image: "bg-slate-200" },
        { id: 2, name: "Luxury Home", category: "Renovation", image: "bg-stone-200" },
        { id: 3, name: "Fix It Fast", category: "Repairs", image: "bg-blue-100" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Website Management</h1>
                    <p className="text-gray-600 mt-1">Manage your online presence and portfolio</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        View Live Site
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Content
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Preview Area */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="overflow-hidden">
                        <CardHeader className="border-b bg-gray-50">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="ml-4 bg-white px-3 py-1 rounded-md text-xs text-gray-500 border flex items-center min-w-[200px]">
                                        <Globe className="w-3 h-3 mr-2" />
                                        contractorlist.com/johndoe-construction
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                        <Monitor className="w-4 h-4" />
                                    </Button>
                                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                        <Smartphone className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="aspect-video bg-gray-100 flex items-center justify-center border-b">
                                <div className="text-center">
                                    <Layout className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                    <p className="text-gray-500">Website Preview Loading...</p>
                                </div>
                            </div>
                            <div className="p-6 grid grid-cols-3 gap-6">
                                <div className="text-center p-4 bg-green-50 rounded-lg">
                                    <p className="text-2xl font-bold text-green-700">98%</p>
                                    <p className="text-xs text-green-600 font-medium mt-1">Performance Score</p>
                                </div>
                                <div className="text-center p-4 bg-blue-50 rounded-lg">
                                    <p className="text-2xl font-bold text-blue-700">1.2k</p>
                                    <p className="text-xs text-blue-600 font-medium mt-1">Monthly Visitors</p>
                                </div>
                                <div className="text-center p-4 bg-purple-50 rounded-lg">
                                    <p className="text-2xl font-bold text-purple-700">4.8</p>
                                    <p className="text-xs text-purple-600 font-medium mt-1">SEO Rating</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Updates</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[
                                    { action: "Updated Gallery", date: "2 days ago", status: "Live" },
                                    { action: "Changed Hero Image", date: "1 week ago", status: "Live" },
                                    { action: "Added 'Services' Page", date: "2 weeks ago", status: "Live" }
                                ].map((update, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-3 border-b last:border-0">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-gray-100 p-2 rounded-full">
                                                <CheckCircle className="w-4 h-4 text-green-600" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm text-gray-900">{update.action}</p>
                                                <p className="text-xs text-gray-500">{update.date}</p>
                                            </div>
                                        </div>
                                        <Badge variant="outline" className="text-green-600 bg-green-50 border-green-200">
                                            {update.status}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Theme & Design</CardTitle>
                            <CardDescription>Current Theme: Modern Builder</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                {templates.map((template) => (
                                    <div key={template.id} className="group relative rounded-lg overflow-hidden border cursor-pointer hover:ring-2 ring-purple-500 transition-all">
                                        <div className={`h-24 ${template.image} flex items-center justify-center`}>
                                            <Palette className="w-8 h-8 text-gray-400 opacity-50" />
                                        </div>
                                        <div className="p-3 bg-white">
                                            <p className="font-medium text-sm">{template.name}</p>
                                            <p className="text-xs text-gray-500">{template.category}</p>
                                        </div>
                                        {template.id === 1 && (
                                            <div className="absolute top-2 right-2 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                                                ACTIVE
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <Button variant="outline" className="w-full">
                                Browse All Templates
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-900 text-white">
                        <CardContent className="p-6">
                            <h3 className="text-lg font-bold mb-2">Custom Domain</h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Get a professional domain name (e.g., yourname.com) to build trust.
                            </p>
                            <Button className="w-full bg-white text-black hover:bg-gray-200">
                                <ArrowUpRight className="w-4 h-4 mr-2" />
                                Connect Domain
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default WebsiteDesign;
