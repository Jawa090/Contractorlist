import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Calculator, Download, Plus, Clock, CheckCircle, AlertCircle, Search, LayoutGrid, List } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { KanbanBoard } from "./KanbanBoard";

const AITakeoff = () => {
  const [view, setView] = useState("kanban");
  const [projects, setProjects] = useState([
    { id: "1", title: "Kitchen Floor Plan", client: "Smith Residence", status: "Processing", priority: "High", date: "2h ago", type: "PDF" },
    { id: "2", title: "Master Bath Layout", client: "Johnson Project", status: "Completed", priority: "Medium", date: "1d ago", type: "DWG" },
    { id: "3", title: "Deck Extension", client: "Davis Home", status: "Queued", priority: "Low", date: "3h ago", type: "PDF" },
    { id: "4", title: "Basement Finish", client: "Wilson Reno", status: "Review", priority: "High", date: "4h ago", type: "DXF" },
  ]);

  const columns = [
    { id: "Queued", title: "Queued", color: "bg-gray-100" },
    { id: "Processing", title: "Processing", color: "bg-blue-100" },
    { id: "Review", title: "Needs Review", color: "bg-yellow-100" },
    { id: "Completed", title: "Completed", color: "bg-green-100" },
  ];

  const handleStatusChange = (itemId: string, newStatus: string) => {
    setProjects(projects.map(p => p.id === itemId ? { ...p, status: newStatus } : p));
  };

  const renderProjectCard = (project: any) => (
    <Card className="mb-3 cursor-move hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="bg-white">{project.type}</Badge>
          <span className="text-xs text-gray-400">{project.date}</span>
        </div>
        <h4 className="font-bold text-gray-900 mb-1">{project.title}</h4>
        <p className="text-sm text-gray-500 mb-3">{project.client}</p>
        <div className="flex items-center justify-between">
          <Badge className={`${project.priority === 'High' ? 'bg-red-100 text-red-700' :
              project.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                'bg-green-100 text-green-700'
            } border-none`}>
            {project.priority}
          </Badge>
          <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
            <Download className="w-3 h-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8">
      {/* Hero Section with Background Image */}
      <div className="relative rounded-2xl overflow-hidden bg-gray-900 text-white shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 p-10 md:p-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">AI Takeoff & Estimation</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Upload your blueprints and let our AI automatically generate detailed quantity takeoffs and cost estimates in minutes.
          </p>

          <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all cursor-pointer group">
            <Upload className="w-12 h-12 mx-auto text-white mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Drop your blueprints here</h3>
            <p className="text-sm text-gray-300 mb-6">Supports PDF, DWG, DXF (Max 50MB)</p>
            <Button className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-6 text-lg shadow-lg">
              Select Files to Upload
            </Button>
          </div>
        </div>
      </div>

      {/* Kanban / List Toggle Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Project Pipeline</h2>
          <p className="text-gray-500">Manage your estimation requests</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setView("kanban")}
              className={`p-2 rounded-md transition-all ${view === "kanban" ? "bg-white shadow-sm text-black" : "text-gray-500 hover:text-gray-900"}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 rounded-md transition-all ${view === "list" ? "bg-white shadow-sm text-black" : "text-gray-500 hover:text-gray-900"}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
          <Button className="bg-black hover:bg-gray-800 text-white">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      {/* Kanban Board Area */}
      {view === "kanban" ? (
        <KanbanBoard
          items={projects}
          columns={columns}
          onStatusChange={handleStatusChange}
          renderCard={renderProjectCard}
        />
      ) : (
        <Card>
          <CardContent className="p-0">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-500 text-sm">Project Name</th>
                  <th className="text-left p-4 font-medium text-gray-500 text-sm">Client</th>
                  <th className="text-left p-4 font-medium text-gray-500 text-sm">Status</th>
                  <th className="text-left p-4 font-medium text-gray-500 text-sm">Priority</th>
                  <th className="text-left p-4 font-medium text-gray-500 text-sm">Date</th>
                  <th className="text-right p-4 font-medium text-gray-500 text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50">
                    <td className="p-4 font-medium text-gray-900">{project.title}</td>
                    <td className="p-4 text-gray-600">{project.client}</td>
                    <td className="p-4">
                      <Badge variant="outline" className={`
                        ${project.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-200' :
                          project.status === 'Processing' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                            'bg-gray-50 text-gray-700 border-gray-200'}
                      `}>
                        {project.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Badge className={`
                        ${project.priority === 'High' ? 'bg-red-100 text-red-700' :
                          project.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'} border-none
                      `}>
                        {project.priority}
                      </Badge>
                    </td>
                    <td className="p-4 text-gray-500 text-sm">{project.date}</td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AITakeoff;
