import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, TrendingUp, Users, Mail, Share2, Target, BarChart3, ArrowUpRight, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Marketing = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Marketing</h1>
          <p className="text-sm text-gray-500 mt-1">Grow your business with our marketing tools</p>
        </div>
        <Button className="bg-black hover:bg-gray-800 text-white shadow-lg shadow-black/20 transition-all">
          <Plus className="w-4 h-4 mr-2" />
          Create Campaign
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: "Total Reach", value: "12,450", change: "+15%", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
          { title: "Leads Generated", value: "342", change: "+23%", icon: Target, color: "text-green-600", bg: "bg-green-50" },
          { title: "Email Opens", value: "68%", change: "+5%", icon: Mail, color: "text-yellow-600", bg: "bg-yellow-50" },
          { title: "Conversion Rate", value: "4.2%", change: "+1.2%", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" },
        ].map((stat, idx) => {
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
        <Card className="border-none shadow-sm">
          <CardHeader className="border-b bg-white px-6 py-4">
            <CardTitle className="flex items-center gap-2 text-base font-bold">
              <Megaphone className="w-5 h-5 text-blue-600" />
              Active Campaigns
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {[
                { name: "Summer Renovation Special", status: "Active", reach: "2,450", budget: "$500" },
                { name: "Kitchen Remodel Promo", status: "Active", reach: "1,890", budget: "$350" },
                { name: "New Customer Discount", status: "Paused", reach: "980", budget: "$200" },
              ].map((campaign, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{campaign.name}</h4>
                    <Badge variant={campaign.status === "Active" ? "default" : "secondary"} className={campaign.status === "Active" ? "bg-green-500 hover:bg-green-600" : ""}>
                      {campaign.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-3">
                    <div className="flex items-center gap-4">
                      <span>Reach: <span className="font-medium text-gray-900">{campaign.reach}</span></span>
                      <span>Budget: <span className="font-medium text-gray-900">{campaign.budget}</span></span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader className="border-b bg-white px-6 py-4">
            <CardTitle className="flex items-center gap-2 text-base font-bold">
              <BarChart3 className="w-5 h-5 text-purple-600" />
              Marketing Tools
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 gap-3">
              <Button variant="outline" className="w-full justify-start h-14 hover:border-blue-200 hover:bg-blue-50/50 group">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Email Marketing</div>
                  <div className="text-xs text-gray-500">Create and send newsletters</div>
                </div>
              </Button>
              <Button variant="outline" className="w-full justify-start h-14 hover:border-green-200 hover:bg-green-50/50 group">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors">
                  <Share2 className="w-4 h-4 text-green-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Social Media</div>
                  <div className="text-xs text-gray-500">Manage your social presence</div>
                </div>
              </Button>
              <Button variant="outline" className="w-full justify-start h-14 hover:border-yellow-200 hover:bg-yellow-50/50 group">
                <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center mr-3 group-hover:bg-yellow-200 transition-colors">
                  <Target className="w-4 h-4 text-yellow-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Google Ads</div>
                  <div className="text-xs text-gray-500">Run paid search campaigns</div>
                </div>
              </Button>
              <Button variant="outline" className="w-full justify-start h-14 hover:border-purple-200 hover:bg-purple-50/50 group">
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center mr-3 group-hover:bg-purple-200 transition-colors">
                  <TrendingUp className="w-4 h-4 text-purple-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">SEO Optimization</div>
                  <div className="text-xs text-gray-500">Improve your search ranking</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Marketing;
