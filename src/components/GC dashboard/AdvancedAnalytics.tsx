import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  Download,
  Calendar,
  Filter,
  ArrowUpRight,
  TrendingUp,
  DollarSign,
  Briefcase,
  Users,
  Activity,
  Layers,
  ArrowDownRight,
  CheckCircle2
} from 'lucide-react';

const revenueData = [
  { name: 'Jan', revenue: 45000, profit: 12000 },
  { name: 'Feb', revenue: 52000, profit: 15000 },
  { name: 'Mar', revenue: 48000, profit: 11000 },
  { name: 'Apr', revenue: 61000, profit: 18000 },
  { name: 'May', revenue: 55000, profit: 16000 },
  { name: 'Jun', revenue: 67000, profit: 21000 },
];

const projectTypeData = [
  { name: 'Commercial', value: 45, color: '#3b82f6' },
  { name: 'Residential', value: 30, color: '#10b981' },
  { name: 'Industrial', value: 15, color: '#8b5cf6' },
  { name: 'Infrastructure', value: 10, color: '#f59e0b' },
];

const AdvancedAnalytics = () => {
  const [timeRange, setTimeRange] = useState('6m');

  return (
    <div className="flex-1 w-full bg-slate-50/50 dark:bg-slate-950/50 p-6 lg:p-8 overflow-y-auto">
      <div className="max-w-[1600px] mx-auto space-y-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Analytics
            </h1>
            <p className="text-muted-foreground mt-1">
              Deep dive into your project performance and financial metrics.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[140px] bg-white dark:bg-slate-900">
                <Calendar className="mr-2 h-4 w-4 text-slate-500" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30d">Last 30 Days</SelectItem>
                <SelectItem value="3m">Last 3 Months</SelectItem>
                <SelectItem value="6m">Last 6 Months</SelectItem>
                <SelectItem value="1y">Last Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="bg-white dark:bg-slate-900">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  <TrendingUp className="w-3 h-3 mr-1" /> +12.4%
                </Badge>
              </div>
              <div className="mt-4">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">$328.5k</h3>
                <p className="text-sm text-slate-500 mt-1">Total Revenue</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  <TrendingUp className="w-3 h-3 mr-1" /> +4
                </Badge>
              </div>
              <div className="mt-4">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">24</h3>
                <p className="text-sm text-slate-500 mt-1">Active Projects</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <Activity className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                  <ArrowDownRight className="w-3 h-3 mr-1" /> -2.1%
                </Badge>
              </div>
              <div className="mt-4">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">87%</h3>
                <p className="text-sm text-slate-500 mt-1">On-Time Completion</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <Badge variant="outline" className="bg-slate-100 text-slate-600 border-slate-200">
                  0%
                </Badge>
              </div>
              <div className="mt-4">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">156</h3>
                <p className="text-sm text-slate-500 mt-1">Total Hours Logged</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Charts Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Financial Trends */}
          <Card className="lg:col-span-2 border-slate-200 dark:border-slate-800 shadow-sm">
            <CardHeader>
              <CardTitle>Financial Performance</CardTitle>
              <CardDescription>Revenue vs Profit over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#64748b', fontSize: 12 }}
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#64748b', fontSize: 12 }}
                      tickFormatter={(value) => `$${value / 1000}k`}
                    />
                    <Tooltip
                      cursor={{ fill: '#f1f5f9' }}
                      contentStyle={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="revenue" name="Revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="profit" name="Profit" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Project Distribution */}
          <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
            <CardHeader>
              <CardTitle>Portfolio Distribution</CardTitle>
              <CardDescription>Projects by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] w-full flex justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={projectTypeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {projectTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2">
                {projectTypeData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-slate-600 dark:text-slate-300">{item.name}</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-white">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Resource Utilization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-500">Engineering</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 w-[92%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-500">Design</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 w-[78%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-500">Management</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-600 w-[85%]"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Safety Incidents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">0</p>
                  <p className="text-sm text-green-600 mt-1">98 Days incident-free</p>
                </div>
                <div className="h-16 w-16 rounded-full border-4 border-green-500 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs text-slate-500">Last incident reported on Oct 12, 2023</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Bidding Win Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">34%</span>
                <span className="text-sm text-slate-500 mb-1">conversion</span>
              </div>
              <div className="h-[100px] w-full mt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={[
                    { val: 30 }, { val: 32 }, { val: 28 }, { val: 34 }, { val: 38 }, { val: 34 }
                  ]}>
                    <Line type="monotone" dataKey="val" stroke="#8b5cf6" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default AdvancedAnalytics;