import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Gavel,
  Trophy,
  DollarSign,
  Globe,
  TrendingUp,
  Calendar,
  MapPin,
  MoreVertical,
  Star,
  Bot,
  Building,
  Users,
  FileText,
  MessageSquare,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';

const Overview = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Welcome back, Acme Construction
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Here is an overview of your projects and marketing performance.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm font-medium text-gray-500">Active Bids</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">12</p>
                </div>
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Gavel className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-green-600 text-sm font-medium">+2%</span>
                <span className="text-gray-400 text-xs">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm font-medium text-gray-500">Projects Won</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">4</p>
                </div>
                <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                  <Trophy className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-green-600 text-sm font-medium">+1%</span>
                <span className="text-gray-400 text-xs">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm font-medium text-gray-500">Revenue YTD</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">$1.2M</p>
                </div>
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                  <DollarSign className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-green-600 text-sm font-medium">+5%</span>
                <span className="text-gray-400 text-xs">vs last year</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm font-medium text-gray-500">Web Leads</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">28</p>
                </div>
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                  <Globe className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-green-600 text-sm font-medium">+12%</span>
                <span className="text-gray-400 text-xs">vs last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Discovery */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <CardTitle>Project Discovery</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    Powered by Planhub
                  </Badge>
                </div>
                <Button variant="link" className="text-blue-600">
                  View All
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Project 1 */}
                <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-lg bg-gray-200 bg-cover bg-center" />
                      <div>
                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          Downtown Office Renovation
                        </h4>
                        <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            Austin, TX
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Due: Oct 24
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge className="bg-green-50 text-green-700 hover:bg-green-50">
                        Open for Bidding
                      </Badge>
                      <Button size="sm">Bid Now</Button>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-lg bg-gray-200 bg-cover bg-center" />
                      <div>
                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          Riverside Apartments Phase 2
                        </h4>
                        <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            San Antonio, TX
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Due: Oct 28
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge className="bg-green-50 text-green-700 hover:bg-green-50">
                        Open for Bidding
                      </Badge>
                      <Button size="sm">Bid Now</Button>
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-lg bg-gray-200 bg-cover bg-center" />
                      <div>
                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          West High School Annex
                        </h4>
                        <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            Dallas, TX
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Due: Nov 02
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50">
                        Closing Soon
                      </Badge>
                      <Button size="sm">Bid Now</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Active Bids Table */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Active Bids</CardTitle>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-500 font-medium">
                      <tr>
                        <th className="px-4 py-3">Project Name</th>
                        <th className="px-4 py-3">Amount</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Deadline</th>
                        <th className="px-4 py-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-4 font-medium">City Library Expansion</td>
                        <td className="px-4 py-4 text-gray-600">$145,000</td>
                        <td className="px-4 py-4">
                          <Badge className="bg-blue-50 text-blue-700">Under Review</Badge>
                        </td>
                        <td className="px-4 py-4 text-gray-500">Oct 20, 2023</td>
                        <td className="px-4 py-4 text-right">
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-4 font-medium">Green Valley Retail Park</td>
                        <td className="px-4 py-4 text-gray-600">$2.1M</td>
                        <td className="px-4 py-4">
                          <Badge className="bg-yellow-50 text-yellow-700">Pending Docs</Badge>
                        </td>
                        <td className="px-4 py-4 text-gray-500">Oct 22, 2023</td>
                        <td className="px-4 py-4 text-right">
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-4 font-medium">Northside Medical Center</td>
                        <td className="px-4 py-4 text-gray-600">$850,000</td>
                        <td className="px-4 py-4">
                          <Badge className="bg-purple-50 text-purple-700">Draft</Badge>
                        </td>
                        <td className="px-4 py-4 text-gray-500">Oct 25, 2023</td>
                        <td className="px-4 py-4 text-right">
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-3 border-t bg-gray-50 text-center">
                  <Button variant="link" className="text-blue-600">
                    View all bids
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Project Copilot */}
            <Card className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white border-purple-500/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-purple-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">AI Project Copilot</h3>
                      <p className="text-xs text-purple-200">Intelligent Insights</p>
                    </div>
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-100 border-purple-500/30">
                    Beta
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Bid Strategy Opportunity</p>
                        <p className="text-xs text-gray-300 mt-1">
                          Increase margin by 4% on <span className="font-medium">West High School</span> annex based on competitor analysis.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Compliance Check</p>
                        <p className="text-xs text-gray-300 mt-1">
                          New OSHA silica standard applies to the <span className="font-medium">Downtown Office</span> project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-4 overflow-x-auto">
                  <Button size="sm" variant="ghost" className="bg-white/10 hover:bg-white/20 border-white/5 text-xs shrink-0">
                    <Building className="w-3 h-3 mr-1" />
                    Resource Alloc.
                  </Button>
                  <Button size="sm" variant="ghost" className="bg-white/10 hover:bg-white/20 border-white/5 text-xs shrink-0">
                    <FileText className="w-3 h-3 mr-1" />
                    Take-off
                  </Button>
                  <Button size="sm" variant="ghost" className="bg-white/10 hover:bg-white/20 border-white/5 text-xs shrink-0">
                    <Gavel className="w-3 h-3 mr-1" />
                    Bidding
                  </Button>
                </div>

                <div className="relative mt-4">
                  <input
                    className="w-full h-10 pl-4 pr-10 rounded-lg bg-black/20 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-purple-400"
                    placeholder="Ask Copilot regarding your projects..."
                  />
                  <Button size="sm" className="absolute right-2 top-1/2 -translate-y-1/2 p-1 h-6 w-6">
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Find Subcontractors */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Find Subcontractors</h3>
                  <Badge className="bg-white/20 text-xs">THE BLUEBOOK</Badge>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  Search the largest construction directory.
                </p>
                <div className="relative mb-4">
                  <input
                    className="w-full h-10 pl-4 pr-4 rounded-lg bg-white text-gray-900 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Electrician in Miami"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary" className="cursor-pointer hover:bg-white/20">
                    Plumbers
                  </Badge>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-white/20">
                    HVAC
                  </Badge>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-white/20">
                    Concrete
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* AI Take-off */}
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">AI Take-off</h3>
                    <p className="text-xs text-gray-500">Powered by ConstructConnect</p>
                  </div>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer group">
                  <FileText className="w-8 h-8 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <p className="text-sm font-medium">Drop blueprints here</p>
                  <p className="text-xs text-gray-500">PDF, DWG, or DXF supported</p>
                </div>
              </CardContent>
            </Card>

            {/* Marketing Hub */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Marketing Hub</CardTitle>
                <Button variant="link" size="sm" className="text-blue-600">
                  Analytics
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-xs text-gray-500">Website Traffic</span>
                    <span className="text-sm font-bold">
                      1.2k <span className="text-green-500 text-xs">↑ 8%</span>
                    </span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-xs text-gray-500">SEO Ranking</span>
                    <span className="text-sm font-bold">
                      Top 10 <span className="text-green-500 text-xs">↑ 2</span>
                    </span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div className="pt-2">
                  <div className="p-3 bg-gray-50 rounded-lg flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                    <div className="flex-1">
                      <p className="text-xs font-semibold">Hosting Renewal</p>
                      <p className="text-xs text-gray-500">Expires in 12 days</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Renew
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;