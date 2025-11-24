import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar, Users, Eye, Edit } from "lucide-react";
import { activeProjects } from "@/data/dashboardData";
import { useToast } from "@/hooks/use-toast";

const Projects = () => {
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
                    <h1 className="text-3xl font-bold text-gray-900">Active Projects</h1>
                    <p className="text-gray-600 mt-1">Manage and track all your construction projects</p>
                </div>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                    <Plus className="w-4 h-4 mr-2" />
                    New Project
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {activeProjects.map((project) => (
                    <Card key={project.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader className="border-b bg-gradient-to-r from-gray-50 to-gray-100">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">{project.name}</CardTitle>
                                <Badge variant={project.status === "Ahead" ? "default" : "secondary"}>
                                    {project.status}
                                </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{project.client}</p>
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
        </div>
    );
};

export default Projects;
