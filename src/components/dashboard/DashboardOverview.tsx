import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, ArrowUpRight, ArrowDownRight, Target, Briefcase, Zap, Upload, Calculator, MessageSquare, FileText, MapPin } from "lucide-react";
import { stats, recentLeads, activeProjects } from "@/data/dashboardData";

interface DashboardOverviewProps {
    setActiveTab: (tab: string) => void;
}

const DashboardOverview = ({ setActiveTab }: DashboardOverviewProps) => {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
                    <p className="text-gray-600 mt-1">Track your business performance and manage projects</p>
                </div>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                    <Bell className="w-4 h-4 mr-2" />
                    Notifications (3)
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    const TrendIcon = stat.trend === "up" ? ArrowUpRight : ArrowDownRight;
                    return (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-600 font-medium">{stat.title}</p>
                                        <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                                        <div className="flex items-center mt-2">
                                            <TrendIcon className={`w-4 h-4 mr-1 ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`} />
                                            <p className={`text-sm font-semibold ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                                                {stat.change} this month
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`${stat.bg} p-4 rounded-full`}>
                                        <Icon className={`w-8 h-8 ${stat.color}`} />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-blue-100">
                        <CardTitle className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Target className="w-5 h-5 mr-2 text-blue-600" />
                                Recent Leads (AI Scored)
                            </div>
                            <Badge variant="secondary">{recentLeads.length} Active</Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="space-y-3">
                            {recentLeads.slice(0, 3).map((lead) => (
                                <div key={lead.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900">{lead.name}</h4>
                                        <p className="text-sm text-gray-600 mt-1">{lead.client} • {lead.budget}</p>
                                        <p className="text-xs text-gray-500 mt-1 flex items-center">
                                            <MapPin className="w-3 h-3 mr-1" />
                                            {lead.location}
                                        </p>
                                    </div>
                                    <div className="text-right ml-4">
                                        <Badge variant={lead.status === 'Hot' ? 'default' : lead.status === 'Warm' ? 'secondary' : 'outline'} className="mb-2">
                                            {lead.score}% Match
                                        </Badge>
                                        <p className="text-xs font-semibold text-gray-700">{lead.status} Lead</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button variant="outline" className="w-full mt-4 font-semibold" onClick={() => setActiveTab("leads")}>
                            View All Leads →
                        </Button>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader className="border-b bg-gradient-to-r from-green-50 to-green-100">
                        <CardTitle className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Briefcase className="w-5 h-5 mr-2 text-green-600" />
                                Active Projects
                            </div>
                            <Badge variant="secondary">{activeProjects.length} Running</Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="space-y-3">
                            {activeProjects.slice(0, 3).map((project) => (
                                <div key={project.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-semibold text-gray-900">{project.name}</h4>
                                        <Badge variant={project.status === "Ahead" ? "default" : "secondary"}>
                                            {project.status}
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3">{project.client} • Due: {project.deadline}</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                                        <div
                                            className={`h-2.5 rounded-full ${project.progress >= 75 ? 'bg-green-500' : project.progress >= 50 ? 'bg-blue-500' : 'bg-yellow-500'}`}
                                            style={{ width: `${project.progress}%` }}
                                        ></div>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-gray-600 font-medium">{project.progress}% Complete</span>
                                        <span className="text-gray-500">{project.spent} / {project.budget}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button variant="outline" className="w-full mt-4 font-semibold" onClick={() => setActiveTab("projects")}>
                            View All Projects →
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="border-b">
                    <CardTitle className="flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-yellow-600" />
                        Quick Actions
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Button variant="outline" className="h-24 flex-col hover:bg-yellow-50 hover:border-yellow-500 transition-all" onClick={() => setActiveTab("takeoff")}>
                            <Upload className="w-6 h-6 mb-2 text-blue-600" />
                            <span className="font-semibold">Upload Drawings</span>
                        </Button>
                        <Button variant="outline" className="h-24 flex-col hover:bg-yellow-50 hover:border-yellow-500 transition-all" onClick={() => setActiveTab("takeoff")}>
                            <Calculator className="w-6 h-6 mb-2 text-green-600" />
                            <span className="font-semibold">Create Estimate</span>
                        </Button>
                        <Button variant="outline" className="h-24 flex-col hover:bg-yellow-50 hover:border-yellow-500 transition-all" onClick={() => setActiveTab("messages")}>
                            <MessageSquare className="w-6 h-6 mb-2 text-purple-600" />
                            <span className="font-semibold">Message Client</span>
                        </Button>
                        <Button variant="outline" className="h-24 flex-col hover:bg-yellow-50 hover:border-yellow-500 transition-all" onClick={() => setActiveTab("analytics")}>
                            <FileText className="w-6 h-6 mb-2 text-orange-600" />
                            <span className="font-semibold">Generate Report</span>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default DashboardOverview;
