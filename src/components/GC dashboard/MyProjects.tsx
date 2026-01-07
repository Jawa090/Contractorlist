import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Building,
  Clock,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Users,
  FileText,
  MessageSquare,
  ArrowRight,
  Filter,
  Bot,
  Lightbulb,
  AlertCircle,
  Search,
  Calendar,
  MoreHorizontal
} from 'lucide-react';

const MyProjects = () => {
  const stats = [
    {
      title: 'Active Projects',
      value: '8',
      subtitle: '6 On Track',
      icon: Building,
      color: 'blue'
    },
    {
      title: 'Schedule Status',
      value: '2',
      subtitle: 'Projects Delayed',
      detail: 'needs attention',
      icon: Clock,
      color: 'orange'
    },
    {
      title: 'Budget Health',
      value: '98.5%',
      subtitle: 'Under Budget',
      detail: 'aggregate',
      icon: DollarSign,
      color: 'emerald'
    },
    {
      title: 'Open RFIs',
      value: '14',
      subtitle: '3 Critical',
      detail: 'pending reply',
      icon: AlertTriangle,
      color: 'purple'
    }
  ];

  const projects = [
    {
      id: 1,
      name: 'Downtown Office Renovation',
      location: 'Austin, TX',
      jobNumber: 'Job #23-401',
      status: 'In Progress',
      statusColor: 'green',
      timeline: { current: 12, total: 24, percentage: 50 },
      budget: { spent: 650000, total: 1200000, percentage: 54, variance: '+2.1%' },
      completion: 'Dec 15',
      teamSize: 11,
      aiInsight: {
        type: 'positive',
        message: 'Electrical rough-in is 2 days ahead. Recommend scheduling drywall crew for Monday.'
      },
      image: '/api/placeholder/64/64'
    },
    {
      id: 2,
      name: 'Riverside Apartments Phase 2',
      location: 'San Antonio, TX',
      jobNumber: 'Job #23-405',
      status: 'At Risk',
      statusColor: 'yellow',
      timeline: { current: 4, total: 36, percentage: 10 },
      budget: { spent: 450000, total: 4500000, percentage: 10, variance: '0%' },
      completion: 'Est. Delay: 5 Days',
      teamSize: 25,
      alert: {
        type: 'error',
        message: 'Framing subcontractor \'TexBuild\' has expired insurance certificate. Stop work order risk.'
      },
      image: '/api/placeholder/64/64'
    }
  ];

  const tasks = [
    { task: 'Submit Riverside Invoice', due: 'Due Today', completed: false },
    { task: 'Subcontractor Review', due: 'Tomorrow at 10:00 AM', completed: false }
  ];

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            <span>Dashboard</span>
            <ArrowRight className="w-3 h-3" />
            <span className="text-blue-600 font-medium">My Projects</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Active Projects Overview
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Manage timelines, track budgets, and monitor compliance for your awarded projects.
          </p>
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
                  {stat.title === 'Budget Health' && (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  )}
                  <span className="text-gray-600 text-sm font-medium">{stat.subtitle}</span>
                  {stat.detail && (
                    <span className="text-gray-400 text-xs ml-1">{stat.detail}</span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Projects Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Active Construction</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  Sort by: Priority
                </Button>
              </div>
            </div>

            {/* Project Cards */}
            <div className="space-y-6">
              {projects.map((project) => (
                <Card key={project.id}>
                  <CardContent className="p-6">
                    {/* Project Header */}
                    <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                      <div className="flex gap-4">
                        <div className="size-16 rounded-lg bg-gray-200 bg-cover bg-center shrink-0" />
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">{project.name}</h4>
                          <p className="text-sm text-gray-500 mt-1">
                            {project.location} • {project.jobNumber}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={`${
                          project.statusColor === 'green' 
                            ? 'bg-green-50 text-green-700 ring-green-600/20' 
                            : 'bg-yellow-50 text-yellow-700 ring-yellow-600/20'
                        } ring-1 ring-inset`}>
                          <div className={`size-1.5 rounded-full ${
                            project.statusColor === 'green' ? 'bg-green-500' : 'bg-yellow-500'
                          } mr-1.5 ${project.statusColor === 'yellow' ? 'animate-pulse' : ''}`} />
                          {project.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-xs font-medium text-gray-500">
                            Timeline (Wk {project.timeline.current}/{project.timeline.total})
                          </span>
                          <span className={`text-xs font-bold ${
                            project.status === 'At Risk' ? 'text-red-500' : 'text-gray-900'
                          }`}>
                            {project.status === 'At Risk' ? 'Delayed' : 'On Track'}
                          </span>
                        </div>
                        <Progress 
                          value={project.timeline.percentage} 
                          className={`h-2 ${project.status === 'At Risk' ? '[&>div]:bg-yellow-500' : ''}`}
                        />
                        <p className="text-xs text-gray-400 mt-1.5 text-right">
                          {project.status === 'At Risk' ? project.completion : `Completion: ${project.completion}`}
                        </p>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-xs font-medium text-gray-500">Budget Consumed</span>
                          <span className="text-xs font-bold text-gray-900">
                            ${(project.budget.spent / 1000).toFixed(0)}k / ${(project.budget.total / 1000000).toFixed(1)}M
                          </span>
                        </div>
                        <Progress value={project.budget.percentage} className="h-2 [&>div]:bg-green-500" />
                        <p className="text-xs text-gray-400 mt-1.5 text-right">
                          Variance: {project.budget.variance}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-gray-500 block mb-2">Site Team</span>
                        <div className="flex -space-x-2">
                          <div className="size-7 rounded-full border-2 border-white bg-gray-300" />
                          <div className="size-7 rounded-full border-2 border-white bg-gray-400" />
                          <div className="size-7 rounded-full border-2 border-white bg-gray-500" />
                          <div className="size-7 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">
                            +{project.teamSize - 3}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* AI Insight or Alert */}
                    {project.aiInsight && (
                      <div className="bg-purple-50 border border-purple-100 rounded-lg p-3 flex items-start gap-3 mb-4">
                        <Bot className="w-5 h-5 text-purple-600 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-purple-900">AI Resource Insight</p>
                          <p className="text-xs text-purple-700 mt-0.5">{project.aiInsight.message}</p>
                        </div>
                      </div>
                    )}

                    {project.alert && (
                      <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex items-start gap-3 mb-4">
                        <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-red-900">Compliance Alert</p>
                          <p className="text-xs text-red-700 mt-0.5">{project.alert.message}</p>
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-4 border-t">
                      <Button variant="ghost" size="sm" className="flex items-center gap-1.5 text-xs">
                        <FileText className="w-4 h-4" />
                        Documents
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center gap-1.5 text-xs">
                        <Calendar className="w-4 h-4" />
                        Daily Logs
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center gap-1.5 text-xs">
                        <MessageSquare className="w-4 h-4" />
                        Team Chat
                        {project.id === 1 && (
                          <Badge className="bg-red-500 text-white text-xs ml-0.5">2</Badge>
                        )}
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center gap-1.5 text-xs ml-auto">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View All Projects */}
            <div className="p-3 border-t bg-gray-50 text-center rounded-xl">
              <Button variant="link" className="text-blue-600">
                View all 8 active projects
              </Button>
            </div>
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
                      <p className="text-xs text-purple-200">Execution Assistant</p>
                    </div>
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-100 border-purple-500/30 text-xs">
                    Live
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-orange-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Resource Allocation</p>
                        <p className="text-xs text-gray-300 mt-1">
                          Crew B finishing at <span className="font-medium">West High</span> tomorrow. 
                          Reassign to <span className="font-medium">Riverside</span> to mitigate delay?
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-blue-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Smart Take-off</p>
                        <p className="text-xs text-gray-300 mt-1">
                          Change Order #4 for <span className="font-medium">Downtown</span> requires 
                          new material take-off. Start analysis?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-1 mt-4">
                  <Button size="sm" variant="ghost" className="bg-white/10 hover:bg-white/20 border-white/5 text-xs shrink-0">
                    <CheckCircle className="w-3 h-3 mr-1 text-green-300" />
                    Compliance
                  </Button>
                  <Button size="sm" variant="ghost" className="bg-white/10 hover:bg-white/20 border-white/5 text-xs shrink-0">
                    <Clock className="w-3 h-3 mr-1 text-yellow-300" />
                    Schedule
                  </Button>
                  <Button size="sm" variant="ghost" className="bg-white/10 hover:bg-white/20 border-white/5 text-xs shrink-0">
                    <Building className="w-3 h-3 mr-1 text-blue-300" />
                    Bidding
                  </Button>
                </div>

                <div className="relative mt-4">
                  <input
                    className="w-full h-10 pl-4 pr-10 rounded-lg bg-black/20 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-purple-400"
                    placeholder="Ask Copilot about project status..."
                  />
                  <Button size="sm" className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0">
                    ↑
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Subcontractor Search */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Subcontractor Search</h3>
                  <Badge className="bg-white/20 text-xs">THE BLUEBOOK</Badge>
                </div>
                <p className="text-sm text-gray-300 mb-4">Find qualified labor for active sites.</p>
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    className="w-full h-10 pl-10 pr-4 rounded-lg bg-white text-gray-900 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Drywall in Austin"
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
                    Electricians
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Quick Take-off */}
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Quick Take-off</h3>
                    <p className="text-xs text-gray-500">Powered by ConstructConnect</p>
                  </div>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer group">
                  <FileText className="w-8 h-8 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <p className="text-sm font-medium">Upload revision</p>
                  <p className="text-xs text-gray-500">Analyze change orders</p>
                </div>
              </CardContent>
            </Card>

            {/* Site Safety */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Site Safety</CardTitle>
                <Button variant="link" size="sm" className="text-blue-600">
                  Logs
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-xs text-gray-500">Days without Incident</span>
                    <span className="text-sm font-bold">
                      42 <span className="text-green-500 text-xs">Safe</span>
                    </span>
                  </div>
                  <Progress value={80} className="h-2 [&>div]:bg-green-500" />
                </div>
                <div className="pt-2">
                  <div className="p-3 bg-gray-50 rounded-lg flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                    <div className="flex-1">
                      <p className="text-xs font-semibold">Pending Inspection</p>
                      <p className="text-xs text-gray-500">Downtown Office - Electrical</p>
                    </div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm uppercase tracking-wide text-gray-400">
                  Upcoming Tasks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tasks.map((task, index) => (
                    <li key={index} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">{task.task}</p>
                        <p className="text-xs text-gray-500">{task.due}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;