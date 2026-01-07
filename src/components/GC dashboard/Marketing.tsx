import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  UserPlus,
  Globe,
  DollarSign,
  BarChart3,
  Download,
  Calendar,
  TrendingUp,
  TrendingDown,
  Edit,
  Settings,
  AlertTriangle,
  Mail,
  Phone,
  Bot,
  Lightbulb,
  AlertCircle
} from 'lucide-react';

const Marketing = () => {
  const stats = [
    {
      title: 'Total Leads (30d)',
      value: '142',
      change: '+15%',
      changeType: 'positive',
      subtitle: 'vs last month',
      icon: UserPlus,
      color: 'blue'
    },
    {
      title: 'Website Visits',
      value: '3.4k',
      change: '+5%',
      changeType: 'positive',
      subtitle: 'vs last month',
      icon: Globe,
      color: 'blue'
    },
    {
      title: 'Cost Per Lead',
      value: '$42.50',
      change: '-8%',
      changeType: 'positive',
      subtitle: 'optimization effect',
      icon: DollarSign,
      color: 'emerald'
    },
    {
      title: 'Marketing ROI',
      value: '380%',
      change: '0%',
      changeType: 'neutral',
      subtitle: 'consistent',
      icon: BarChart3,
      color: 'purple'
    }
  ];

  const services = [
    {
      name: 'Website & Hosting',
      description: 'Premium WordPress Care Plan',
      status: 'Active',
      icon: Globe,
      color: 'indigo',
      actions: ['Edit Content', 'Logs']
    },
    {
      name: 'Google Ads (PPC)',
      description: 'Budget: $2,500/mo',
      status: 'Active',
      icon: UserPlus,
      color: 'orange',
      actions: ['Campaigns', 'Top up']
    },
    {
      name: 'Local SEO Pro',
      description: 'Ranking for 24 keywords',
      status: 'Active',
      icon: BarChart3,
      color: 'emerald',
      actions: ['Keywords', 'Report']
    }
  ];

  const leads = [
    {
      name: 'Robert Davis',
      email: 'davis.r@gmail.com',
      service: 'Office Renovation',
      source: 'Google Ads',
      sourceColor: 'blue',
      date: 'Oct 24, 2:30 PM',
      status: 'New',
      statusColor: 'green'
    },
    {
      name: 'Sarah Miller',
      email: 'sarah@millercorp.com',
      service: 'Commercial Build',
      source: 'SEO / Organic',
      sourceColor: 'purple',
      date: 'Oct 23, 9:15 AM',
      status: 'Contacted',
      statusColor: 'gray'
    },
    {
      name: 'TechFlow Inc.',
      email: 'facilities@techflow.io',
      service: 'Warehouse Exp.',
      source: 'Direct',
      sourceColor: 'orange',
      date: 'Oct 22, 4:45 PM',
      status: 'In Progress',
      statusColor: 'yellow'
    }
  ];

  const weeklyData = [
    { week: 'Week 1', leads: 42, height: '40%' },
    { week: 'Week 2', leads: 58, height: '55%' },
    { week: 'Week 3', leads: 82, height: '75%', active: true },
    { week: 'Week 4', leads: 65, height: '60%' }
  ];

  const campaigns = [
    { name: 'Commercial Reno', spend: '$840', color: 'green' },
    { name: 'Kitchen Remodel', spend: '$520', color: 'blue' },
    { name: 'Brand Awareness', spend: '$310', color: 'yellow' }
  ];

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Marketing Center
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Manage your subscriptions, track campaign performance, and grow your business.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
            <Button>
              <Calendar className="w-4 h-4 mr-2" />
              Strategy Call
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  </div>
                  <div className={`p-2 bg-${stat.color}-50 text-${stat.color}-600 rounded-lg`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {stat.changeType === 'positive' ? (
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  ) : stat.changeType === 'negative' ? (
                    <TrendingDown className="w-4 h-4 text-red-600" />
                  ) : (
                    <div className="w-4 h-4" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 
                    stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-500'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-gray-400 text-xs ml-1">{stat.subtitle}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Subscriptions */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Active Subscriptions</CardTitle>
                <Button variant="link" className="text-blue-600">
                  Manage Services
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex gap-4 p-4 rounded-xl border hover:border-blue-300 transition-colors bg-gray-50">
                      <div className={`size-12 rounded-lg bg-${service.color}-100 flex items-center justify-center shrink-0 text-${service.color}-600`}>
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <h5 className="font-bold text-gray-900 truncate">{service.name}</h5>
                          <Badge className="bg-green-50 text-green-700 text-xs">
                            {service.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-500 mb-3">{service.description}</p>
                        <div className="flex gap-2">
                          {service.actions.map((action, actionIndex) => (
                            <Button key={actionIndex} variant="outline" size="sm" className="text-xs">
                              {action}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Add Service Card */}
                  <div className="flex gap-4 p-4 rounded-xl border-2 border-dashed hover:border-blue-300 transition-colors bg-transparent flex items-center justify-center cursor-pointer group">
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors text-gray-400">
                        <UserPlus className="w-5 h-5" />
                      </div>
                      <p className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors">
                        Add Service
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lead Generation Performance */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Lead Generation Performance</CardTitle>
                <select className="bg-gray-50 border-none text-xs rounded-lg py-1.5 pl-2 pr-8 text-gray-600">
                  <option>Last 30 Days</option>
                  <option>Last Quarter</option>
                  <option>Year to Date</option>
                </select>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between h-48 w-full gap-2 sm:gap-4">
                  {weeklyData.map((week, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 w-full group cursor-pointer">
                      <div 
                        className={`w-full rounded-t-sm transition-colors relative ${
                          week.active 
                            ? 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.3)]' 
                            : 'bg-blue-200 group-hover:bg-blue-400'
                        }`}
                        style={{ height: week.height }}
                      >
                        <div className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded ${
                          week.active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        } transition-opacity`}>
                          {week.leads} Leads
                        </div>
                      </div>
                      <span className={`text-xs ${week.active ? 'font-bold text-gray-900' : 'text-gray-400'}`}>
                        {week.week}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Web Inquiries */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Web Inquiries</CardTitle>
                <Button variant="link" className="text-blue-600">
                  View CRM
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-500 font-medium">
                      <tr>
                        <th className="px-4 py-3">Lead Name</th>
                        <th className="px-4 py-3">Service Interest</th>
                        <th className="px-4 py-3">Source</th>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {leads.map((lead, index) => (
                        <tr key={index} className="hover:bg-gray-50 cursor-pointer">
                          <td className="px-4 py-4">
                            <div className="font-medium text-gray-900">{lead.name}</div>
                            <div className="text-xs text-gray-500">{lead.email}</div>
                          </td>
                          <td className="px-4 py-4 text-gray-600">{lead.service}</td>
                          <td className="px-4 py-4">
                            <Badge className={`bg-${lead.sourceColor}-50 text-${lead.sourceColor}-700`}>
                              <div className={`size-1.5 rounded-full bg-${lead.sourceColor}-600 mr-1.5`} />
                              {lead.source}
                            </Badge>
                          </td>
                          <td className="px-4 py-4 text-gray-500">{lead.date}</td>
                          <td className="px-4 py-4 text-right">
                            <Badge className={`bg-${lead.statusColor === 'green' ? 'green' : lead.statusColor === 'yellow' ? 'yellow' : 'gray'}-50 text-${lead.statusColor === 'green' ? 'green' : lead.statusColor === 'yellow' ? 'yellow' : 'gray'}-700`}>
                              {lead.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Account Manager */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="size-20 rounded-full border-4 border-white/10 shadow-xl bg-gray-300 mb-4" />
                  <h3 className="font-bold text-lg">Sarah Jenkins</h3>
                  <p className="text-indigo-200 text-sm mb-6">Senior Account Manager</p>
                  <div className="w-full grid grid-cols-2 gap-3 mb-6">
                    <Button variant="ghost" className="bg-white/10 hover:bg-white/20 text-sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                    <Button className="bg-white text-indigo-900 hover:bg-indigo-50 text-sm font-bold">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                  <div className="w-full bg-white/5 rounded-lg p-3 text-left border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                        Next Review
                      </span>
                      <Badge className="bg-green-500/20 text-green-300 text-xs">
                        Confirmed
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Calendar className="w-4 h-4 text-indigo-300" />
                      Nov 2, 2023 • 10:00 AM
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Monthly Ad Budget */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Monthly Ad Budget</CardTitle>
                <Button variant="link" size="sm" className="text-blue-600">
                  Adjust
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-xs text-gray-500">Total Spend</span>
                    <span className="text-sm font-bold">
                      $1,850 <span className="text-gray-400 text-xs font-normal">/ $2,500</span>
                    </span>
                  </div>
                  <Progress value={74} className="h-2" />
                  <p className="text-xs text-gray-400 mt-1 text-right">
                    74% utilized (6 days left)
                  </p>
                </div>

                <div className="pt-5 border-t">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    Top Campaigns
                  </h4>
                  <div className="space-y-3">
                    {campaigns.map((campaign, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className={`size-2 rounded-full bg-${campaign.color}-500`} />
                          <span className="text-sm text-gray-900">{campaign.name}</span>
                        </div>
                        <span className="text-xs font-medium text-gray-500">{campaign.spend}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Marketing Copilot */}
            <Card className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white border-purple-500/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">AI Marketing Copilot</h3>
                    <p className="text-xs text-purple-200">Opportunities found</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Keyword Opportunity</p>
                        <p className="text-xs text-gray-300 mt-1">
                          "Medical Office Construction" is trending in Austin.{' '}
                          <button className="underline text-purple-300">Add to campaign?</button>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Missing Reviews</p>
                        <p className="text-xs text-gray-300 mt-1">
                          You completed 3 projects recently but received 0 Google reviews.{' '}
                          <button className="underline text-purple-300">Send requests?</button>
                        </p>
                      </div>
                    </div>
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

export default Marketing;