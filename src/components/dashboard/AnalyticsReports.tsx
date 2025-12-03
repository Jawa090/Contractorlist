import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, DollarSign, CheckCircle, Star, Clock, ArrowUpRight, Activity, Award } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const AnalyticsReports = () => {
  const { toast } = useToast();

  const handleExport = () => {
    toast({
      title: "Exporting Report",
      description: "Your analytics report is being generated...",
      duration: 3000,
    });
  };

  const stats = [
    { title: "Total Revenue", value: "$542,300", change: "+18.2%", icon: DollarSign, color: "text-green-600", bg: "bg-green-50" },
    { title: "Projects Completed", value: "47", change: "+12", icon: CheckCircle, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Client Satisfaction", value: "4.8/5", change: "+0.3", icon: Star, color: "text-yellow-600", bg: "bg-yellow-50" },
    { title: "Avg. Project Time", value: "42 days", change: "-5 days", icon: Clock, color: "text-purple-600", bg: "bg-purple-50" }
  ];

  const revenueData = [
    { month: "June", revenue: 72000, projects: 8 },
    { month: "July", revenue: 85000, projects: 9 },
    { month: "August", revenue: 78000, projects: 7 },
    { month: "September", revenue: 92000, projects: 10 },
    { month: "October", revenue: 88000, projects: 9 },
    { month: "November", revenue: 95000, projects: 11 }
  ];

  const topProjects = [
    { name: "Luxury Kitchen Remodel", profit: "$12,500", margin: "28%", rating: 5.0 },
    { name: "Master Suite Addition", profit: "$18,200", margin: "32%", rating: 4.9 },
    { name: "Modern Bathroom", profit: "$8,900", margin: "25%", rating: 4.8 },
    { name: "Outdoor Living Space", profit: "$15,600", margin: "30%", rating: 4.9 },
    { name: "Home Office Build", profit: "$6,800", margin: "22%", rating: 4.7 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Analytics & Reports</h1>
          <p className="text-sm text-gray-500 mt-1">Performance metrics and business insights</p>
        </div>
        <Button className="bg-black hover:bg-gray-800 text-white shadow-lg shadow-black/20 transition-all" onClick={handleExport}>
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Card key={idx} className="hover:shadow-xl transition-all duration-300 border-none shadow-sm group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.bg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    {stat.change}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1 tracking-tight">{stat.value}</h3>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="border-b">
            <CardTitle className="flex items-center">
              <Activity className="w-5 h-5 mr-2 text-blue-600" />
              Revenue Trend (Last 6 Months)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {revenueData.map((data, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <p className="text-sm font-medium text-gray-700 w-24">{data.month}</p>
                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-8 relative">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-8 rounded-full flex items-center justify-end pr-3"
                        style={{ width: `${(data.revenue / 100000) * 100}%` }}
                      >
                        <span className="text-xs font-bold text-white">${(data.revenue / 1000).toFixed(0)}k</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 w-20">{data.projects} projects</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="border-b">
            <CardTitle className="flex items-center">
              <Award className="w-5 h-5 mr-2 text-yellow-600" />
              Top Performing Projects
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {topProjects.map((project, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{project.name}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <p className="text-sm text-gray-600">Profit: <span className="font-bold text-green-600">{project.profit}</span></p>
                      <p className="text-sm text-gray-600">Margin: <span className="font-bold">{project.margin}</span></p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-sm">{project.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsReports;
