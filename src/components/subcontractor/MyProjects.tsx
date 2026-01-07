import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Briefcase,
  Calendar,
  MapPin,
  Building,
  DollarSign,
  CheckCircle,
  Users,
  FileText,
  Eye,
  Edit,
  MoreHorizontal
} from 'lucide-react';

const MyProjects = () => {
  const [activeTab, setActiveTab] = useState('active');

  const activeProjects = [
    {
      id: '1',
      name: 'City Center Office Complex',
      client: 'Hensel Phelps',
      location: 'Dallas, TX',
      value: '$1,950,000',
      startDate: '2023-09-15',
      endDate: '2024-02-28',
      progress: 65,
      status: 'on-track',
      phase: 'Installation',
      team: 8,
      lastUpdate: '2 days ago'
    },
    {
      id: '2',
      name: 'Riverside Elementary HVAC',
      client: 'Turner Construction',
      location: 'Austin, TX',
      value: '$750,000',
      startDate: '2023-10-01',
      endDate: '2024-01-15',
      progress: 45,
      status: 'at-risk',
      phase: 'Rough-in',
      team: 5,
      lastUpdate: '1 day ago'
    },
    {
      id: '3',
      name: 'Medical Plaza Expansion',
      client: 'Skanska',
      location: 'San Antonio, TX',
      value: '$2,200,000',
      startDate: '2023-08-20',
      endDate: '2024-03-30',
      progress: 80,
      status: 'ahead',
      phase: 'Final Testing',
      team: 12,
      lastUpdate: '4 hours ago'
    }
  ];

  const completedProjects = [
    {
      id: '4',
      name: 'Downtown Shopping Center',
      client: 'McCarthy Building',
      location: 'Houston, TX',
      value: '$1,400,000',
      completedDate: '2023-09-30',
      duration: '4 months',
      rating: 4.9,
      testimonial: 'Excellent work quality and on-time delivery.'
    },
    {
      id: '5',
      name: 'University Dormitory',
      client: 'Balfour Beatty',
      location: 'College Station, TX',
      value: '$980,000',
      completedDate: '2023-08-15',
      duration: '3 months',
      rating: 4.8,
      testimonial: 'Professional team with great attention to detail.'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'on-track':
        return <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">On Track</Badge>;
      case 'at-risk':
        return <Badge className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300">At Risk</Badge>;
      case 'ahead':
        return <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">Ahead</Badge>;
      case 'delayed':
        return <Badge className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">Delayed</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getProgressColor = (status: string) => {
    if (status === 'ahead') return 'bg-blue-500';
    if (status === 'at-risk') return 'bg-yellow-500';
    if (status === 'delayed') return 'bg-red-500';
    return 'bg-green-500';
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-black tracking-tight mb-2">My Projects</h1>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              Manage and track all your active and completed projects
            </p>
          </div>
          <Button className="bg-primary hover:bg-yellow-400 text-black font-semibold">
            <Briefcase className="w-4 h-4 mr-2" />
            Project Report
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Active Projects</p>
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <p className="text-2xl font-bold">3</p>
              <p className="text-xs font-medium text-green-600 mt-1">$4.9M total value</p>
            </CardContent>
          </Card>

          <Card className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Avg Progress</p>
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-2xl font-bold">63%</p>
              <p className="text-xs font-medium text-green-600 mt-1">+5% this week</p>
            </CardContent>
          </Card>

          <Card className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Team Members</p>
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-2xl font-bold">25</p>
              <p className="text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark mt-1">Across all projects</p>
            </CardContent>
          </Card>

          <Card className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Client Rating</p>
                <CheckCircle className="w-5 h-5 text-yellow-600" />
              </div>
              <p className="text-2xl font-bold">4.9</p>
              <p className="text-xs font-medium text-green-600 mt-1">Average rating</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <TabsList className="grid w-full sm:w-auto grid-cols-3">
              <TabsTrigger value="active">Active Projects</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
            </TabsList>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by: Progress" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="progress">Progress</SelectItem>
                <SelectItem value="value">Project Value</SelectItem>
                <SelectItem value="deadline">Deadline</SelectItem>
                <SelectItem value="status">Status</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <TabsContent value="active" className="space-y-4">
            {activeProjects.map((project) => (
              <Card key={project.id} className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-bold text-xl">{project.name}</h3>
                            {getStatusBadge(project.status)}
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                            <span className="flex items-center gap-1">
                              <Building className="w-4 h-4" />
                              {project.client}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {project.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              {project.value}
                            </span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-1">Current Phase</p>
                          <p className="font-semibold">{project.phase}</p>
                        </div>
                        <div>
                          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-1">Team Size</p>
                          <p className="font-semibold">{project.team} members</p>
                        </div>
                        <div>
                          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-1">Last Update</p>
                          <p className="font-semibold">{project.lastUpdate}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Progress</span>
                          <span className="text-sm font-bold">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all ${getProgressColor(project.status)}`}
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.startDate} - {project.endDate}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 min-w-[200px]">
                      <Button className="bg-primary text-black font-semibold hover:bg-yellow-400">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline">
                        <Edit className="w-4 h-4 mr-2" />
                        Update Progress
                      </Button>
                      <Button variant="outline" size="sm">
                        <FileText className="w-4 h-4 mr-2" />
                        Documents
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {completedProjects.map((project) => (
              <Card key={project.id} className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-bold text-xl">{project.name}</h3>
                            <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Completed
                            </Badge>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                            <span className="flex items-center gap-1">
                              <Building className="w-4 h-4" />
                              {project.client}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {project.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              {project.value}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-1">Completed</p>
                          <p className="font-semibold">{project.completedDate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-1">Duration</p>
                          <p className="font-semibold">{project.duration}</p>
                        </div>
                        <div>
                          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-1">Client Rating</p>
                          <p className="font-semibold text-yellow-600">★ {project.rating}</p>
                        </div>
                      </div>

                      {project.testimonial && (
                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <p className="text-sm italic">"{project.testimonial}"</p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 min-w-[200px]">
                      <Button variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                      <Button variant="outline" size="sm">
                        <FileText className="w-4 h-4 mr-2" />
                        Final Report
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="pipeline" className="space-y-4">
            <Card className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
              <CardContent className="p-6 text-center">
                <Briefcase className="w-12 h-12 text-text-secondary-light dark:text-text-secondary-dark mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">No Projects in Pipeline</h3>
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                  Projects you've won but haven't started yet will appear here
                </p>
                <Button className="bg-primary hover:bg-yellow-400 text-black font-semibold">
                  Find New Projects
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MyProjects;