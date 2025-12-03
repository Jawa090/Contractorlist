import { useState } from "react";
import { 
  FolderKanban, 
  Users, 
  DollarSign, 
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Calendar,
  MessageSquare,
  Star,
  MoreVertical
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface ClientOverviewProps {
  setActiveTab: (tab: string) => void;
}

const ClientOverview = ({ setActiveTab }: ClientOverviewProps) => {
  const [timeRange, setTimeRange] = useState("month");

  const stats = [
    {
      title: "Active Projects",
      value: "8",
      change: "+2 this month",
      trend: "up",
      icon: FolderKanban,
      color: "blue",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Total Contractors",
      value: "24",
      change: "+5 this month",
      trend: "up",
      icon: Users,
      color: "green",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: "Total Spent",
      value: "$127,450",
      change: "+12% vs last month",
      trend: "up",
      icon: DollarSign,
      color: "purple",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Completion Rate",
      value: "94%",
      change: "+3% improvement",
      trend: "up",
      icon: TrendingUp,
      color: "orange",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  const activeProjects = [
    {
      id: 1,
      name: "Kitchen Renovation",
      contractor: "John's Construction",
      progress: 75,
      status: "In Progress",
      dueDate: "Dec 15, 2024",
      budget: "$45,000",
      avatar: "/contractor.jpg",
    },
    {
      id: 2,
      name: "Bathroom Remodel",
      contractor: "Smith Builders",
      progress: 45,
      status: "In Progress",
      dueDate: "Jan 10, 2025",
      budget: "$28,500",
      avatar: "/contractor-2.jpg",
    },
    {
      id: 3,
      name: "Backyard Landscaping",
      contractor: "Green Spaces LLC",
      progress: 90,
      status: "Near Completion",
      dueDate: "Dec 5, 2024",
      budget: "$15,200",
      avatar: "/contractor-3.png",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "proposal",
      title: "New proposal received",
      description: "Mike's Plumbing submitted a bid for Bathroom Remodel",
      time: "2 hours ago",
      icon: MessageSquare,
      color: "blue",
    },
    {
      id: 2,
      type: "milestone",
      title: "Milestone completed",
      description: "Kitchen Renovation - Phase 2 completed",
      time: "5 hours ago",
      icon: CheckCircle2,
      color: "green",
    },
    {
      id: 3,
      type: "payment",
      title: "Payment processed",
      description: "Invoice #1234 paid - $12,500",
      time: "1 day ago",
      icon: DollarSign,
      color: "purple",
    },
    {
      id: 4,
      type: "alert",
      title: "Attention required",
      description: "Review and approve change order for Kitchen Renovation",
      time: "2 days ago",
      icon: AlertCircle,
      color: "orange",
    },
  ];

  const topContractors = [
    {
      id: 1,
      name: "John's Construction",
      rating: 4.9,
      projects: 3,
      avatar: "/contractor.jpg",
      specialty: "General Contractor",
    },
    {
      id: 2,
      name: "Smith Builders",
      rating: 4.8,
      projects: 2,
      avatar: "/contractor-2.jpg",
      specialty: "Remodeling",
    },
    {
      id: 3,
      name: "Green Spaces LLC",
      rating: 5.0,
      projects: 1,
      avatar: "/contractor-3.png",
      specialty: "Landscaping",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back! 👋</h1>
            <p className="text-white/90 text-lg">Here's what's happening with your projects today</p>
          </div>
          <Button 
            onClick={() => setActiveTab('post-project')}
            className="bg-white text-orange-600 hover:bg-gray-50 font-semibold shadow-lg"
          >
            <FolderKanban className="w-4 h-4 mr-2" />
            Post New Project
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                    <div className="flex items-center gap-1 text-sm">
                      <ArrowUpRight className="w-4 h-4 text-green-600" />
                      <span className="text-green-600 font-medium">{stat.change}</span>
                    </div>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-xl`}>
                    <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Projects */}
        <Card className="lg:col-span-2 border-0 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <CardTitle className="text-xl font-bold">Active Projects</CardTitle>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setActiveTab('tracking')}
              className="text-yellow-600 hover:text-yellow-700"
            >
              View All
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeProjects.map((project) => (
              <div key={project.id} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3 flex-1">
                    <Avatar className="w-12 h-12 border-2 border-white shadow-md">
                      <AvatarImage src={project.avatar} />
                      <AvatarFallback>{project.contractor.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{project.name}</h4>
                      <p className="text-sm text-gray-600">{project.contractor}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {project.status}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold text-gray-900">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.dueDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{project.budget}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-yellow-600 hover:text-yellow-700">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`p-2 rounded-lg ${
                    activity.color === 'blue' ? 'bg-blue-50' :
                    activity.color === 'green' ? 'bg-green-50' :
                    activity.color === 'purple' ? 'bg-purple-50' :
                    'bg-orange-50'
                  }`}>
                    <Icon className={`w-4 h-4 ${
                      activity.color === 'blue' ? 'text-blue-600' :
                      activity.color === 'green' ? 'text-green-600' :
                      activity.color === 'purple' ? 'text-purple-600' :
                      'text-orange-600'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 mb-1">{activity.title}</p>
                    <p className="text-xs text-gray-600 mb-1">{activity.description}</p>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Top Contractors */}
      <Card className="border-0 shadow-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-bold">Your Top Contractors</CardTitle>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setActiveTab('contractors')}
            className="text-yellow-600 hover:text-yellow-700"
          >
            Find More
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topContractors.map((contractor) => (
              <div key={contractor.id} className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="w-12 h-12 border-2 border-yellow-400">
                    <AvatarImage src={contractor.avatar} />
                    <AvatarFallback>{contractor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{contractor.name}</h4>
                    <p className="text-xs text-gray-600">{contractor.specialty}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{contractor.rating}</span>
                  </div>
                  <span className="text-sm text-gray-600">{contractor.projects} projects</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientOverview;
