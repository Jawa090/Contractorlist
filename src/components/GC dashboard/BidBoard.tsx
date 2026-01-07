import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import {
  Search,
  Filter,
  Calendar,
  Download,
  Plus,
  MoreHorizontal,
  Clock,
  Send,
  Trophy,
  DollarSign,
  FileText,
  Bot,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  MapPin,
  Building2
} from 'lucide-react';

const BidBoard = () => {
  const [viewMode, setViewMode] = useState<'list' | 'board'>('list');

  const stats = [
    {
      label: 'Active Pipeline',
      value: '$4.2M',
      change: '+12%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
    },
    {
      label: 'Win Rate (YTD)',
      value: '24%',
      change: '+2%',
      trend: 'up',
      icon: Trophy,
      color: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400'
    },
    {
      label: 'Bids Due (7d)',
      value: '8',
      change: 'Urgent',
      trend: 'neutral',
      icon: Clock,
      color: 'bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400'
    },
    {
      label: 'Pending Review',
      value: '5',
      change: '-1',
      trend: 'down',
      icon: FileText,
      color: 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400'
    }
  ];

  const bids = [
    {
      id: 1,
      name: 'Downtown Office Reno',
      client: 'BuildCorp Inc.',
      location: 'Austin, TX',
      amount: '$450,000',
      deadline: '2 Days',
      status: 'review',
      probability: 'High',
      progress: 85
    },
    {
      id: 2,
      name: 'Riverside Apartments',
      client: 'Apex Developers',
      location: 'San Antonio, TX',
      amount: '$2.1M',
      deadline: 'Oct 28',
      status: 'submitted',
      probability: 'Medium',
      progress: 100
    },
    {
      id: 3,
      name: 'City Library Expansion',
      client: 'Municipality',
      location: 'Dallas, TX',
      amount: '$145k',
      deadline: 'Oct 20',
      status: 'awarded',
      probability: 'Won',
      progress: 100
    },
    {
      id: 4,
      name: 'West High School Annex',
      client: 'EduBuild Partners',
      location: 'Fort Worth, TX',
      amount: '$850k',
      deadline: 'Oct 15',
      status: 'lost',
      probability: 'Lost',
      progress: 100
    },
    {
      id: 5,
      name: 'Northside Medical Center',
      client: 'HealthFirst',
      location: 'Houston, TX',
      amount: '$3.2M',
      deadline: 'Nov 12',
      status: 'draft',
      probability: 'Medium',
      progress: 40
    }
  ];

  return (
    <div className="flex h-full w-full flex-col bg-slate-50/50 dark:bg-slate-950/50">

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Bid Board</h1>
          <p className="text-sm text-slate-500 mt-1">Manage your estimates and track opportunities.</p>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <Button variant="outline" className="bg-white dark:bg-slate-900">
            <Calendar className="mr-2 h-4 w-4" /> Schedule
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-200 dark:shadow-none">
            <Plus className="mr-2 h-4 w-4" /> New Bid
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <Card key={i} className="border-slate-200 dark:border-slate-800 shadow-sm">
              <CardContent className="p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stat.value}</h3>
                  </div>
                  <div className={`p-2 rounded-lg ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-xs">
                  <span className={`font-medium ${stat.trend === 'up' ? 'text-green-600' :
                      stat.trend === 'down' ? 'text-red-600' : 'text-slate-600'
                    }`}>
                    {stat.change}
                  </span>
                  <span className="text-slate-400 ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Bids List */}
          <div className="xl:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Tabs defaultValue="all" className="w-[400px]">
                  <TabsList className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <TabsTrigger value="all">All Bids</TabsTrigger>
                    <TabsTrigger value="active">Active</TabsTrigger>
                    <TabsTrigger value="submitted">Submitted</TabsTrigger>
                    <TabsTrigger value="awarded">Awarded</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Search bids..."
                    className="w-[200px] pl-9 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                  />
                </div>
                <Button variant="ghost" size="icon" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Card className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Project Name</th>
                      <th className="px-6 py-4 font-semibold">Amount</th>
                      <th className="px-6 py-4 font-semibold">Deadline</th>
                      <th className="px-6 py-4 font-semibold">Status</th>
                      <th className="px-6 py-4 font-semibold">Completion</th>
                      <th className="px-6 py-4 font-semibold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {bids.map((bid) => (
                      <tr key={bid.id} className="group hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                              <Building2 className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors cursor-pointer">
                                {bid.name}
                              </div>
                              <div className="text-xs text-slate-500 flex items-center gap-1">
                                {bid.client} • {bid.location}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-300">
                          {bid.amount}
                        </td>
                        <td className="px-6 py-4">
                          <div className={`flex items-center gap-1.5 ${bid.deadline.includes('Days') ? 'text-orange-600 font-medium' : 'text-slate-600 dark:text-slate-400'
                            }`}>
                            <Clock className="h-3.5 w-3.5" />
                            <span className="text-xs">{bid.deadline}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <Badge variant="secondary" className={`
                                       capitalize font-medium border
                                       ${bid.status === 'awarded' ? 'bg-green-50 text-green-700 border-green-200' : ''}
                                       ${bid.status === 'lost' ? 'bg-slate-100 text-slate-600 border-slate-200' : ''}
                                       ${bid.status === 'review' ? 'bg-purple-50 text-purple-700 border-purple-200' : ''}
                                       ${bid.status === 'submitted' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                                       ${bid.status === 'draft' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : ''}
                                    `}>
                            {bid.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 min-w-[120px]">
                          <div className="flex items-center gap-2">
                            <Progress value={bid.progress} className="h-1.5" />
                            <span className="text-xs text-slate-500">{bid.progress}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-900">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Sidebar Assistant */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white border-0 shadow-lg relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 p-12 bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <Bot className="h-5 w-5 text-indigo-200" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Bid Assistant</CardTitle>
                    <CardDescription className="text-indigo-200 text-xs">AI-Powered Insights</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="flex gap-3">
                    <TrendingUp className="h-5 w-5 text-emerald-400 shrink-0" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Win Probability High</p>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Competitor analysis suggests your bid for <span className="text-white font-medium">Riverside Apts</span> is competitive.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Material Cost Alert</p>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Copper prices spiked 2%. Review <span className="text-white font-medium">Downtown Office</span> materials budget.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="relative">
                    <Input
                      placeholder="Ask AI about specs..."
                      className="bg-white/10 border-white/10 text-white placeholder:text-slate-400 pr-8"
                    />
                    <ArrowUpRight className="absolute right-2.5 top-2.5 h-4 w-4 text-slate-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Recent Activity</CardTitle>
                  <Button variant="link" size="sm" className="h-auto p-0 text-blue-600">View All</Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">
                    AD
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Apex Developers</p>
                      <span className="text-[10px] text-slate-400">2h ago</span>
                    </div>
                    <p className="text-xs text-slate-500">Requested plumbing revision for Riverside project.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center text-xs font-bold">
                    MP
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Metro Props</p>
                      <span className="text-[10px] text-slate-400">1d ago</span>
                    </div>
                    <p className="text-xs text-slate-500">Viewed your proposal for Downtown Complex.</p>
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

export default BidBoard;