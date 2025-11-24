import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Filter, MapPin, Mail, Phone, Eye, Send } from "lucide-react";
import { recentLeads } from "@/data/dashboardData";
import { useToast } from "@/hooks/use-toast";

const LeadsManagement = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { toast } = useToast();

    const handleAction = (action: string, item?: any) => {
        toast({
            title: "Action Performed",
            description: `${action} ${item ? `for ${item.name || item.client}` : 'successfully'}`,
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Leads Management</h1>
                    <p className="text-gray-600 mt-1">AI-powered lead scoring and management</p>
                </div>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Lead
                </Button>
            </div>

            <Card>
                <CardHeader className="border-b">
                    <div className="flex items-center justify-between">
                        <CardTitle>All Leads ({recentLeads.length})</CardTitle>
                        <div className="flex gap-3">
                            <div className="relative">
                                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                                <Input
                                    placeholder="Search leads..."
                                    className="pl-10 w-64"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <Button variant="outline">
                                <Filter className="w-4 h-4 mr-2" />
                                Filter
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Project</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Client</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Contact</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Budget</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">AI Score</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {recentLeads.map((lead) => (
                                    <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="font-semibold text-gray-900">{lead.name}</p>
                                                <p className="text-sm text-gray-500 flex items-center mt-1">
                                                    <MapPin className="w-3 h-3 mr-1" />
                                                    {lead.location}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="font-medium text-gray-900">{lead.client}</p>
                                            <p className="text-sm text-gray-500">{lead.date}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="space-y-1">
                                                <p className="text-sm text-gray-600 flex items-center">
                                                    <Mail className="w-3 h-3 mr-1" />
                                                    {lead.email}
                                                </p>
                                                <p className="text-sm text-gray-600 flex items-center">
                                                    <Phone className="w-3 h-3 mr-1" />
                                                    {lead.phone}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="font-semibold text-gray-900">{lead.budget}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                                                    <div
                                                        className={`h-2 rounded-full ${lead.score >= 90 ? 'bg-green-500' : lead.score >= 75 ? 'bg-blue-500' : 'bg-yellow-500'}`}
                                                        style={{ width: `${lead.score}%` }}
                                                    ></div>
                                                </div>
                                                <span className="font-semibold text-sm">{lead.score}%</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant={lead.status === 'Hot' ? 'default' : lead.status === 'Warm' ? 'secondary' : 'outline'}>
                                                {lead.status}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                <Button size="sm" variant="outline" onClick={() => handleAction("View", lead)}>
                                                    <Eye className="w-4 h-4" />
                                                </Button>
                                                <Button size="sm" variant="outline" onClick={() => handleAction("Contact", lead)}>
                                                    <Send className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default LeadsManagement;
