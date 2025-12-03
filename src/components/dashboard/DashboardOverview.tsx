import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  Users,
  Briefcase,
  CheckSquare,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Plus,
  FileText,
  MessageSquare,
  Clock,
  DollarSign,
  Bell
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const revenueData = [
  { name: 'Jan', value: 12500 },
  { name: 'Feb', value: 18900 },
  { name: 'Mar', value: 15600 },
  { name: 'Apr', value: 22400 },
  { name: 'May', value: 28900 },
  { name: 'Jun', value: 24500 },
  { name: 'Jul', value: 32800 },
];

const recentProjects = [
  {
    id: 1,
    name: "Modern Kitchen Reno",
    client: "Sarah Johnson",
    status: "In Progress",
    progress: 65,
    dueDate: "Oct 24, 2024",
    budget: "$45,000",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "Office Expansion",
    client: "TechFlow Inc.",
    status: "Planning",
    progress: 25,
    dueDate: "Nov 15, 2024",
    budget: "$120,000",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "Backyard Landscape",
    client: "Mike Peters",
    status: "Completed",
    progress: 100,
    dueDate: "Sep 30, 2024",
    budget: "$28,000",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&auto=format&fit=crop&q=60"
  }
];

const activities = [
  {
    id: 1,
    user: "Alex Chen",
    action: "updated the blueprint for",
    target: "Kitchen Reno",
    time: "2 hours ago",
    icon: FileText,
    color: "text-blue-500 bg-blue-50"
  },
  {
    id: 2,
    user: "Sarah Johnson",
    action: "approved the estimate for",
    target: "Master Bath",
    time: "5 hours ago",
    icon: CheckSquare,
    color: "text-green-500 bg-green-50"
  },
  {
    id: 3,
    user: "System",
    action: "received new lead",
    target: "Downtown Loft",
    time: "Yesterday",
    icon: Users,
    color: "text-purple-500 bg-purple-50"
  }
];

interface DashboardOverviewProps {
  setActiveTab: (tab: string) => void;
}

const DashboardOverview = ({ setActiveTab }: DashboardOverviewProps) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-gray-500 mt-1">Welcome back! Here's what's happening with your projects today.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden sm:flex">
            <Calendar className="w-4 h-4 mr-2" />
            Last 30 Days
          </Button>
          <Button className="bg-black hover:bg-gray-800 text-white shadow-lg shadow-gray-200/50">
            <ArrowDownRight className="w-4 h-4 mr-2" />
            Download Report
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Total Revenue",
            value: "$124,500",
            change: "+12.5%",
            trend: "up",
            icon: DollarSign,
            color: "text-green-600",
            bgColor: "bg-green-50"
          },
          {
            title: "Active Projects",
            value: "12",
            change: "+2",
            trend: "up",
            icon: Briefcase,
            color: "text-blue-600",
            bgColor: "bg-blue-50"
          },
          {
            title: "Pending Leads",
            value: "28",
            change: "+5.2%",
            trend: "up",
            icon: Users,
            color: "text-purple-600",
            bgColor: "bg-purple-50"
          },
          {
            title: "Tasks Due",
            value: "8",
            change: "-2",
            trend: "down",
            icon: CheckSquare,
            color: "text-orange-600",
            bgColor: "bg-orange-50"
          }
        ].map((stat, index) => (
          <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</h3>
                </div>
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>
              <div className="flex items-center mt-4 text-xs">
                <span className={`flex items-center font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                  {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                  {stat.change}
                </span>
                <span className="text-gray-400 ml-2">vs last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Revenue Chart */}
          <Card className="border-none shadow-md shadow-gray-100/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-lg font-bold text-gray-900">Revenue Analytics</CardTitle>
                <CardDescription>Monthly revenue performance for 2024</CardDescription>
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="w-5 h-5 text-gray-400" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1} />
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#9ca3af', fontSize: 12 }}
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#9ca3af', fontSize: 12 }}
                      tickFormatter={(value) => `$${value / 1000}k`}
                    />
                    <Tooltip
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#2563eb"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorRevenue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Recent Projects */}
          <Card className="border-none shadow-md shadow-gray-100/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-bold text-gray-900">Recent Projects</CardTitle>
                <CardDescription>Status updates on active jobs</CardDescription>
              </div>
              <Button variant="outline" size="sm" onClick={() => setActiveTab("projects")}>View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recentProjects.map((project) => (
                  <div key={project.id} className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-xl transition-colors">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-16 h-16 rounded-lg object-cover shadow-sm"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <h4 className="font-semibold text-gray-900 truncate">{project.name}</h4>
                          <p className="text-sm text-gray-500">{project.client}</p>
                        </div>
                        <Badge variant={
                          project.status === "Completed" ? "default" :
                            project.status === "In Progress" ? "secondary" : "outline"
                        } className={
                          project.status === "Completed" ? "bg-green-500 hover:bg-green-600" : ""
                        }>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex-1">
                          <div className="flex justify-between text-xs mb-1.5">
                            <span className="text-gray-500">Progress</span>
                            <span className="font-medium text-gray-900">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-1.5" />
                        </div>
                        <div className="text-xs text-gray-500 flex items-center gap-1 min-w-[80px] justify-end">
                          <Clock className="w-3 h-3" />
                          {project.dueDate}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          {/* Quick Actions */}
          <Card className="border-none shadow-md shadow-gray-100/50 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-yellow-400" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              <Button
                variant="secondary"
                className="h-20 flex flex-col items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border-none text-white"
                onClick={() => setActiveTab("projects")}
              >
                <Plus className="w-5 h-5" />
                <span className="text-xs font-medium">New Project</span>
              </Button>
              <Button
                variant="secondary"
                className="h-20 flex flex-col items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border-none text-white"
                onClick={() => setActiveTab("leads")}
              >
                <Users className="w-5 h-5" />
                <span className="text-xs font-medium">Add Lead</span>
              </Button>
              <Button
                variant="secondary"
                className="h-20 flex flex-col items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border-none text-white"
                onClick={() => setActiveTab("billing")}
              >
                <FileText className="w-5 h-5" />
                <span className="text-xs font-medium">Create Invoice</span>
              </Button>
              <Button
                variant="secondary"
                className="h-20 flex flex-col items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border-none text-white"
                onClick={() => setActiveTab("messages")}
              >
                <MessageSquare className="w-5 h-5" />
                <span className="text-xs font-medium">Send Quote</span>
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border-none shadow-md shadow-gray-100/50">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-900">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100">
                {activities.map((activity) => (
                  <div key={activity.id} className="relative flex gap-4">
                    <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-sm ${activity.color}`}>
                      <activity.icon className="w-4 h-4" />
                    </div>
                    <div className="pt-1">
                      <p className="text-sm text-gray-900">
                        <span className="font-semibold">{activity.user}</span> {activity.action} <span className="font-medium text-gray-700">{activity.target}</span>
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-sm text-gray-500" onClick={() => setActiveTab("projects")}>
                View All Activity
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Schedule */}
          <Card className="border-none shadow-md shadow-gray-100/50">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-900">Today's Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { time: "09:00 AM", title: "Site Visit: Johnson Residence", type: "Meeting" },
                  { time: "11:30 AM", title: "Material Delivery Check", type: "Task" },
                  { time: "02:00 PM", title: "Client Call: TechFlow", type: "Call" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                    <div className="flex flex-col items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm border border-gray-100 shrink-0">
                      <span className="text-xs font-bold text-gray-900">{item.time.split(' ')[0]}</span>
                      <span className="text-[10px] text-gray-400">{item.time.split(' ')[1]}</span>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-900">{item.title}</h5>
                      <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full mt-1 inline-block">
                        {item.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
