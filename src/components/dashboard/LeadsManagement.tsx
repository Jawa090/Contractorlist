import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { LayoutGrid, List, Plus, Search, Filter, Eye, Send, MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { KanbanBoard, LeadCard } from "./KanbanBoard";

interface Lead {
  id: number;
  name: string;
  client: string;
  email: string;
  phone: string;
  budget: string;
  score: number;
  status: string;
  date: string;
  location: string;
}

const LeadsManagement = () => {
  const { toast } = useToast();
  const [leadView, setLeadView] = useState("kanban");
  const [searchTerm, setSearchTerm] = useState("");
  const [recentLeads, setRecentLeads] = useState<Lead[]>([
    { id: 1, name: "Kitchen Renovation", client: "Sarah Johnson", email: "sarah.j@email.com", phone: "(555) 123-4567", budget: "$25,000", score: 95, status: "Hot", date: "2024-11-08", location: "Downtown, NY" },
    { id: 2, name: "Bathroom Remodel", client: "Mike Chen", email: "mike.c@email.com", phone: "(555) 234-5678", budget: "$15,000", score: 82, status: "Warm", date: "2024-11-07", location: "Brooklyn, NY" },
    { id: 3, name: "Deck Installation", client: "Lisa Brown", email: "lisa.b@email.com", phone: "(555) 345-6789", budget: "$8,000", score: 71, status: "Cold", date: "2024-11-06", location: "Queens, NY" },
    { id: 4, name: "Full Home Renovation", client: "David Wilson", email: "david.w@email.com", phone: "(555) 456-7890", budget: "$85,000", score: 98, status: "Hot", date: "2024-11-09", location: "Manhattan, NY" },
    { id: 5, name: "Basement Finishing", client: "Emma Davis", email: "emma.d@email.com", phone: "(555) 567-8901", budget: "$32,000", score: 88, status: "Warm", date: "2024-11-05", location: "Bronx, NY" }
  ]);

  const handleAction = (action: string, lead: Lead) => {
    toast({
      title: "Action Performed",
      description: `${action} for ${lead.name}`,
      duration: 3000,
    });
  };

  const handleAddLead = () => {
    toast({
      title: "Add New Lead",
      description: "Lead creation form would open here",
      duration: 3000,
    });
  };

  const handleFilter = () => {
    toast({
      title: "Filter Leads",
      description: "Filter options would open here",
      duration: 3000,
    });
  };

  const filteredLeads = recentLeads.filter(lead =>
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Toaster />
      <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Leads Management</h1>
          <p className="text-sm text-gray-500 mt-1">AI-powered lead scoring and pipeline management</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-white border border-gray-200 rounded-lg p-1 flex shadow-sm">
            <button
              onClick={() => setLeadView("kanban")}
              className={`p-2 rounded-md transition-all ${leadView === "kanban" ? "bg-gray-100 text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLeadView("list")}
              className={`p-2 rounded-md transition-all ${leadView === "list" ? "bg-gray-100 text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
          <Button className="bg-black hover:bg-gray-800 text-white shadow-lg shadow-black/20 transition-all" onClick={handleAddLead}>
            <Plus className="w-4 h-4 mr-2" />
            Add New Lead
          </Button>
        </div>
      </div>

      {leadView === "kanban" ? (
        <KanbanBoard
          items={filteredLeads}
          columns={[
            { id: "Hot", title: "Hot Leads", color: "border-red-500" },
            { id: "Warm", title: "Warm Leads", color: "border-yellow-500" },
            { id: "Cold", title: "Cold Leads", color: "border-blue-500" }
          ]}
          onStatusChange={(id, status) => {
            setRecentLeads(recentLeads.map(l => l.id === Number(id) ? { ...l, status } : l));
            toast({
              title: "Lead Status Updated",
              description: `Lead moved to ${status}`,
              duration: 2000,
            });
          }}
          renderCard={(lead) => <LeadCard lead={lead} />}
        />
      ) : (
        <Card>
          <CardHeader className="border-b bg-white px-6 py-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold text-gray-900">All Leads ({filteredLeads.length})</CardTitle>
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                  <Input
                    placeholder="Search leads..."
                    className="pl-9 w-64 h-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="sm" className="h-9" onClick={handleFilter}>
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
                  {filteredLeads.map((lead) => (
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
      )}
    </div>
    </>
  );
};

export default LeadsManagement;
