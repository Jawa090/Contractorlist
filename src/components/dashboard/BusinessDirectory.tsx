import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, ChevronDown, Eye, Edit, Star } from "lucide-react";
import { businessDirectoryData } from "@/data/dashboardData";

const BusinessDirectory = () => {
    return (
        <div className="space-y-6">
            {/* Filters */}
            <Card className="bg-white shadow-sm border-gray-200">
                <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div className="space-y-2">
                            <Label htmlFor="company-search">Company Name</Label>
                            <div className="relative">
                                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input id="company-search" placeholder="Search by name..." className="pl-9 bg-gray-50 border-gray-200" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="location-search">Location</Label>
                            <Input id="location-search" placeholder="City, State, or Zip" className="bg-gray-50 border-gray-200" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="specialty-filter">Specialty</Label>
                            <div className="relative">
                                <select id="specialty-filter" className="w-full h-10 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent appearance-none">
                                    <option>All Specialties</option>
                                    <option>General Contracting</option>
                                    <option>Roofing</option>
                                    <option>Plumbing</option>
                                    <option>Electrical</option>
                                    <option>Landscaping</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="services-filter">Services Offered</Label>
                            <Input id="services-filter" placeholder="e.g. Kitchen Remodel" className="bg-gray-50 border-gray-200" />
                        </div>
                    </div>
                    <div className="flex justify-end items-center gap-3">
                        <button className="text-gray-500 hover:text-gray-700 text-sm font-medium">Clear Filters</button>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                            <Search className="w-4 h-4 mr-2" />
                            Search
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Results Header */}
            <div className="flex justify-between items-center">
                <p className="text-gray-600">Showing <span className="font-semibold text-gray-900">1-10</span> of <span className="font-semibold text-gray-900">1,204</span> results</p>
                <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">Sort by:</span>
                    <div className="relative">
                        <select className="h-9 pl-3 pr-8 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent appearance-none">
                            <option>Company Name (A-Z)</option>
                            <option>Rating (High to Low)</option>
                            <option>Newest Added</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Results List */}
            <Card className="bg-white shadow-sm border-gray-200">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-1/3">Company</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Services</th>
                                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {businessDirectoryData.map((business) => (
                                <tr key={business.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-white font-bold text-lg shrink-0">
                                                {business.logo}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">{business.name}</h3>
                                                <p className="text-sm text-gray-500">{business.location}</p>
                                                <div className="flex items-center gap-1 mt-1">
                                                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                                    <span className="text-sm font-medium text-gray-900">{business.rating}</span>
                                                    <span className="text-sm text-gray-500">({business.reviews} reviews)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="space-y-1">
                                            <p className="text-sm text-gray-900">{business.contact.email}</p>
                                            <p className="text-sm text-gray-500">{business.contact.phone}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-wrap gap-2">
                                            {business.services.map((service, index) => (
                                                <span key={index} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-sm text-gray-500">Page <span className="font-medium text-gray-900">1</span> of <span className="font-medium text-gray-900">121</span></p>
                    <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-50" disabled>
                            <span className="sr-only">Previous</span>
                            &lt;
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-blue-600 bg-blue-50 text-blue-600 font-medium">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50">3</button>
                        <span className="text-gray-400">...</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50">121</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50">
                            <span className="sr-only">Next</span>
                            &gt;
                        </button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default BusinessDirectory;
