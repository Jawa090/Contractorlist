import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LayoutGrid, List, Plus, Eye, Edit, Calendar, Users } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { KanbanBoard, ProjectCard } from "./KanbanBoard";

interface Project {
  id: number;
  name: string;
  client: string;
  progress: number;
  deadline: string;
  budget: string;
  spent: string;
  status: string;
  team: number;
  image: string;
}

const Projects = () => {
  const { toast } = useToast();
  const [projectView, setProjectView] = useState("kanban");
  const [activeProjects, setActiveProjects] = useState<Project[]>([
    { id: 1, name: "Modern Kitchen Remodel", client: "Johnson Residence", progress: 75, deadline: "Dec 15, 2024", budget: "$25,000", spent: "$18,750", status: "On Track", team: 4, image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&auto=format&fit=crop&q=60" },
    { id: 2, name: "Master Bath Renovation", client: "Chen Family", progress: 45, deadline: "Jan 20, 2025", budget: "$15,000", spent: "$6,750", status: "On Track", team: 3, image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&auto=format&fit=crop&q=60" },
    { id: 3, name: "Outdoor Deck Build", client: "Brown House", progress: 90, deadline: "Dec 10, 2024", budget: "$8,000", spent: "$7,200", status: "Ahead", team: 2, image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?w=800&auto=format&fit=crop&q=60" },
    { id: 4, name: "Full Home Renovation", client: "Wilson Estate", progress: 30, deadline: "Mar 15, 2025", budget: "$85,000", spent: "$25,500", status: "On Track", team: 8, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=60" },
    { id: 5, name: "Basement Finishing", client: "Davis Home", progress: 60, deadline: "Feb 28, 2025", budget: "$32,000", spent: "$19,200", status: "On Track", team: 5, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=60" }
  ]);

  const handleAction = (action: string, project: Project) => {
    toast({
      title: "Action Performed",
      description: `${action} for ${project.name}`,
      duration: 3000,
    });
  };

  const handleNewProject = () => {
    toast({
      title: "New Project",
      description: "Project creation form would open here",
      duration: 3000,
    });
  };

  return (
    <>
      <Toaster />
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Active Projects</h1>
          <p className="text-sm text-gray-500 mt-1">Monitor progress, budgets, and timelines</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-white border border-gray-200 rounded-lg p-1 flex shadow-sm">
            <button
              onClick={() => setProjectView("kanban")}
              className={`p-2 rounded-md transition-all ${projectView === "kanban" ? "bg-gray-100 text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setProjectView("list")}
              className={`p-2 rounded-md transition-all ${projectView === "list" ? "bg-gray-100 text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
          <Button className="bg-black hover:bg-gray-800 text-white shadow-lg shadow-black/20 transition-all" onClick={handleNewProject}>
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      {projectView === "kanban" ? (
        <KanbanBoard
          items={activeProjects}
          columns={[
            { id: "Ahead", title: "Ahead of Schedule", color: "border-green-500" },
            { id: "On Track", title: "On Track", color: "border-blue-500" },
            { id: "Delayed", title: "Delayed", color: "border-red-500" },
            { id: "Completed", title: "Completed", color: "border-gray-500" }
          ]}
          onStatusChange={(id, status) => {
            setActiveProjects(activeProjects.map(p => p.id === Number(id) ? { ...p, status } : p));
            toast({
              title: "Project Status Updated",
              description: `Project moved to ${status}`,
              duration: 2000,
            });
          }}
          renderCard={(project) => <ProjectCard project={project} />}
        />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {activeProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="border-b bg-white p-0">
                <div className="relative h-32 bg-gray-100 group-hover:opacity-90 transition-opacity">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className={`${project.status === "Ahead" ? "bg-green-500" : project.status === "On Track" ? "bg-blue-500" : "bg-yellow-500"} text-white border-none shadow-sm`}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <div className="p-6 pb-2">
                  <CardTitle className="text-lg font-bold text-gray-900">{project.name}</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">{project.client}</p>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Budget</p>
                    <p className="text-lg font-bold text-gray-900">{project.budget}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Spent</p>
                    <p className="text-lg font-bold text-gray-900">{project.spent}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Deadline</p>
                    <p className="text-sm font-semibold text-gray-700 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.deadline}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Team Size</p>
                    <p className="text-sm font-semibold text-gray-700 flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {project.team} Members
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-700">Progress</p>
                    <p className="text-sm font-bold text-gray-900">{project.progress}%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all ${project.progress >= 75 ? 'bg-green-500' :
                        project.progress >= 50 ? 'bg-blue-500' : 'bg-yellow-500'
                        }`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" className="flex-1" onClick={() => handleAction("View Details", project)}>
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={() => handleAction("Update", project)}>
                    <Edit className="w-4 h-4 mr-2" />
                    Update
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Projects;
