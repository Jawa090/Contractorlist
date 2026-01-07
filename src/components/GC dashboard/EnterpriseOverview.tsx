import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Building,
  Users,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  Target,
  BarChart3,
  PieChart,
  Activity,
  Zap,
  Globe,
  MapPin,
  Phone,
  Mail,
  FileText,
  MessageSquare,
  Video,
  Settings,
  Filter,
  Download,
  Upload,
  Search,
  MoreVertical,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Star,
  Award,
  Shield,
  Briefcase,
  Calculator,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Wifi,
  Battery,
  Signal,
  Plus
} from 'lucide-react';

interface DashboardMetrics {
  totalRevenue: number;
  revenueGrowth: number;
  activeProjects: number;
  projectsGrowth: number;
  teamMembers: number;
  teamGrowth: number;
  clientSatisfaction: number;
  satisfactionGrowth: number;
  bidWinRate: number;
  winRateGrowth: number;
  avgProjectValue: number;
  valueGrowth: number;
}

interface Project {
  id: string;
  name: string;
  client: string;
  value: number;
  progress: number;
  status: 'planning' | 'active' | 'on-hold' | 'completed' | 'at-risk';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: Date;
  endDate: Date;
  team: number;
  location: string;
  riskLevel: 'low' | 'medium' | 'high';
}

const EnterpriseOverview = () => {
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    totalRevenue: 12500000,
    revenueGrowth: 15.2,
    activeProjects: 24,
    projectsGrowth: 8.5,
    teamMembers: 156,
    teamGrowth: 12.3,
    clientSatisfaction: 4.8,
    satisfactionGrowth: 5.1,
    bidWinRate: 68.5,
    winRateGrowth: 3.2,
    avgProjectValue: 520000,
    valueGrowth: 18.7
  });

  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      name: 'Austin Medical Center Expansion',
      client: 'Austin Healthcare Group',
      value: 2800000,
      progress: 75,
      status: 'active',
      priority: 'high',
      startDate: new Date('2024-01-15'),
      endDate: new Date('2024-06-30'),
      team: 18,
      location: 'Austin, TX',
      riskLevel: 'low'
    },
    {
      id: '2',
      name: 'Downtown Office Complex',
      client: 'Metro Properties LLC',
      value: 4200000,
      progress: 45,
      status: 'active',
      priority: 'critical',
      startDate: new Date('2024-02-01'),
      endDate: new Date('2024-08-15'),
      team: 32,
      location: 'Dallas, TX',
      riskLevel: 'medium'
    },
    {
      id: '3',
      name: 'Riverside Shopping Center',
      client: 'Retail Ventures Inc',
      value: 1650000,
      progress: 90,
      status: 'active',
      priority: 'medium',
      startDate: new Date('2023-10-01'),
      endDate: new Date('2024-03-30'),
      team: 12,
      location: 'San Antonio, TX',
      riskLevel: 'low'
    },
    {
      id: '4',
      name: 'Industrial Warehouse Phase 2',
      client: 'LogiCorp Solutions',
      value: 980000,
      progress: 25,
      status: 'at-risk',
      priority: 'high',
      startDate: new Date('2024-03-01'),
      endDate: new Date('2024-07-15'),
      team: 8,
      location: 'Houston, TX',
      riskLevel: 'high'
    }
  ]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'active': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'planning': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'on-hold': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'at-risk': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-600 bg-red-100 dark:bg-red-900/30';
      case 'high': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/30';
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30';
      case 'low': return 'text-green-600 bg-green-100 dark:bg-green-900/30';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30';
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              General Contractor Dashboard
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Enterprise construction management platform
            </p>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">System Online</span>
              </div>
              <div className="text-sm text-gray-500">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="border-gray-300 hover:border-gray-400">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline" className="border-gray-300 hover:border-gray-400">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </div>
        </div>

        {/* Enhanced KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  metrics.revenueGrowth > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {metrics.revenueGrowth > 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                  {Math.abs(metrics.revenueGrowth)}%
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(metrics.totalRevenue)}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Revenue</p>
                <p className="text-xs text-gray-500 mt-1">YTD Performance</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <Building className="w-6 h-6 text-green-600" />
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  metrics.projectsGrowth > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {metrics.projectsGrowth > 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                  {Math.abs(metrics.projectsGrowth)}%
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{metrics.activeProjects}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Active Projects</p>
                <p className="text-xs text-gray-500 mt-1">Currently in progress</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  metrics.teamGrowth > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {metrics.teamGrowth > 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                  {Math.abs(metrics.teamGrowth)}%
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{metrics.teamMembers}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Team Members</p>
                <p className="text-xs text-gray-500 mt-1">Across all projects</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  metrics.satisfactionGrowth > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {metrics.satisfactionGrowth > 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                  {Math.abs(metrics.satisfactionGrowth)}%
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{metrics.clientSatisfaction}/5</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</p>
                <p className="text-xs text-gray-500 mt-1">Average rating</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-teal-50 dark:bg-teal-900/20 rounded-xl">
                  <Target className="w-6 h-6 text-teal-600" />
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  metrics.winRateGrowth > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {metrics.winRateGrowth > 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                  {Math.abs(metrics.winRateGrowth)}%
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{metrics.bidWinRate}%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Bid Win Rate</p>
                <p className="text-xs text-gray-500 mt-1">Last 12 months</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <Calculator className="w-6 h-6 text-indigo-600" />
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  metrics.valueGrowth > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {metrics.valueGrowth > 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                  {Math.abs(metrics.valueGrowth)}%
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(metrics.avgProjectValue)}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Avg Project Value</p>
                <p className="text-xs text-gray-500 mt-1">Per project</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Left Column - Projects & Analytics */}
          <div className="xl:col-span-3 space-y-8">
            {/* Project Portfolio */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">Active Project Portfolio</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold">{project.name}</h3>
                            <Badge className={getStatusColor(project.status)}>
                              {project.status}
                            </Badge>
                            <Badge className={getPriorityColor(project.priority)}>
                              {project.priority}
                            </Badge>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">{project.client}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {project.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {project.team} team members
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              {formatCurrency(project.value)}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">{project.progress}%</p>
                          <p className="text-sm text-gray-500">Complete</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                              project.riskLevel === 'low' ? 'bg-green-100 text-green-700' :
                              project.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              <Shield className="w-3 h-3" />
                              {project.riskLevel} risk
                            </div>
                            <span className="text-xs text-gray-500">
                              Due: {project.endDate.toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <FileText className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Analytics Dashboard */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="revenue" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="revenue">Revenue</TabsTrigger>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                    <TabsTrigger value="team">Team</TabsTrigger>
                    <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="revenue" className="space-y-4">
                    <div className="h-64 bg-gray-50 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">Revenue Analytics Chart</p>
                        <p className="text-sm text-gray-400">Interactive charts coming soon</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="projects" className="space-y-4">
                    <div className="h-64 bg-gray-50 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <PieChart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">Project Distribution Chart</p>
                        <p className="text-sm text-gray-400">Interactive charts coming soon</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="team" className="space-y-4">
                    <div className="h-64 bg-gray-50 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Activity className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">Team Performance Chart</p>
                        <p className="text-sm text-gray-400">Interactive charts coming soon</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="efficiency" className="space-y-4">
                    <div className="h-64 bg-gray-50 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">Efficiency Metrics Chart</p>
                        <p className="text-sm text-gray-400">Interactive charts coming soon</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - AI Assistant & Quick Actions */}
          <div className="xl:col-span-1 space-y-6">
            {/* AI Enterprise Assistant */}
            <Card className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-600 rounded-xl shadow-sm">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-gray-900 dark:text-white">AI Business Intelligence</CardTitle>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Powered by Advanced Analytics</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                    Enterprise
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Risk Alert</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          Industrial Warehouse project showing potential delays
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Growth Opportunity</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          3 new high-value projects available for bidding
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Milestone Achievement</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          Medical Center reached 75% completion ahead of schedule
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Open AI Assistant
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start gap-3" variant="outline">
                  <Building className="w-4 h-4" />
                  Create New Project
                </Button>
                <Button className="w-full justify-start gap-3" variant="outline">
                  <Users className="w-4 h-4" />
                  Manage Team
                </Button>
                <Button className="w-full justify-start gap-3" variant="outline">
                  <FileText className="w-4 h-4" />
                  Generate Report
                </Button>
                <Button className="w-full justify-start gap-3" variant="outline">
                  <Calendar className="w-4 h-4" />
                  Schedule Meeting
                </Button>
                <Button className="w-full justify-start gap-3" variant="outline">
                  <Settings className="w-4 h-4" />
                  System Settings
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Project milestone completed</p>
                      <p className="text-xs text-gray-500">Medical Center - 2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">New team member added</p>
                      <p className="text-xs text-gray-500">Sarah Johnson - 4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Budget alert triggered</p>
                      <p className="text-xs text-gray-500">Office Complex - 6 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Client meeting scheduled</p>
                      <p className="text-xs text-gray-500">Retail Ventures - 1 day ago</p>
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

export default EnterpriseOverview;