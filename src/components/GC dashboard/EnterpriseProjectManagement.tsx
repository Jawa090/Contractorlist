import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Building,
  Users,
  Calendar,
  DollarSign,
  MapPin,
  Clock,
  AlertTriangle,
  CheckCircle,
  Target,
  BarChart3,
  TrendingUp,
  Filter,
  Search,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  FileText,
  MessageSquare,
  Phone,
  Video,
  Settings,
  Zap,
  Shield,
  Activity,
  Globe,
  Star,
  Award,
  Briefcase,
  Calculator,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Wifi,
  Battery,
  Signal,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Play,
  Pause,
  Square
} from 'lucide-react';

interface Project {
  id: string;
  name: string;
  client: string;
  description: string;
  status: 'planning' | 'active' | 'on-hold' | 'completed' | 'cancelled' | 'at-risk';
  priority: 'low' | 'medium' | 'high' | 'critical';
  progress: number;
  startDate: Date;
  endDate: Date;
  budget: number;
  spent: number;
  team: TeamMember[];
  location: string;
  riskLevel: 'low' | 'medium' | 'high';
  clientSatisfaction: number;
  milestones: Milestone[];
  tasks: Task[];
  documents: Document[];
  tags: string[];
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  workload: number;
  availability: 'available' | 'busy' | 'offline';
}

interface Milestone {
  id: string;
  name: string;
  date: Date;
  status: 'upcoming' | 'completed' | 'overdue';
  description: string;
}

interface Task {
  id: string;
  name: string;
  status: 'todo' | 'in-progress' | 'review' | 'completed';
  assignee: string;
  dueDate: Date;
  priority: 'low' | 'medium' | 'high' | 'critical';
}

interface Document {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadedBy: string;
  uploadedAt: Date;
}

const EnterpriseProjectManagement = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'kanban'>('grid');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // Mock data
  useEffect(() => {
    const mockProjects: Project[] = [
      {
        id: '1',
        name: 'Austin Medical Center Expansion',
        client: 'Austin Healthcare Group',
        description: 'Complete renovation and expansion of the medical center including new patient wings and updated HVAC systems.',
        status: 'active',
        priority: 'high',
        progress: 75,
        startDate: new Date('2024-01-15'),
        endDate: new Date('2024-06-30'),
        budget: 2800000,
        spent: 2100000,
        location: 'Austin, TX',
        riskLevel: 'low',
        clientSatisfaction: 4.8,
        tags: ['Healthcare', 'Renovation', 'HVAC'],
        team: [
          { id: '1', name: 'John Smith', role: 'Project Manager', workload: 85, availability: 'busy' },
          { id: '2', name: 'Sarah Johnson', role: 'Site Supervisor', workload: 70, availability: 'available' },
          { id: '3', name: 'Mike Davis', role: 'Lead Electrician', workload: 90, availability: 'busy' }
        ],
        milestones: [
          { id: '1', name: 'Foundation Complete', date: new Date('2024-02-15'), status: 'completed', description: 'Foundation work completed' },
          { id: '2', name: 'Structural Work', date: new Date('2024-04-01'), status: 'completed', description: 'All structural work finished' },
          { id: '3', name: 'Final Inspection', date: new Date('2024-06-15'), status: 'upcoming', description: 'Final building inspection' }
        ],
        tasks: [
          { id: '1', name: 'HVAC Installation', status: 'in-progress', assignee: 'Mike Davis', dueDate: new Date('2024-03-15'), priority: 'high' },
          { id: '2', name: 'Electrical Wiring', status: 'completed', assignee: 'Sarah Johnson', dueDate: new Date('2024-02-28'), priority: 'medium' }
        ],
        documents: [
          { id: '1', name: 'Project_Plans.pdf', type: 'application/pdf', size: 2048000, uploadedBy: 'John Smith', uploadedAt: new Date('2024-01-10') }
        ]
      },
      {
        id: '2',
        name: 'Downtown Office Complex',
        client: 'Metro Properties LLC',
        description: 'Construction of a 15-story office complex with retail space on ground floor and underground parking.',
        status: 'active',
        priority: 'critical',
        progress: 45,
        startDate: new Date('2024-02-01'),
        endDate: new Date('2024-08-15'),
        budget: 4200000,
        spent: 1890000,
        location: 'Dallas, TX',
        riskLevel: 'medium',
        clientSatisfaction: 4.2,
        tags: ['Commercial', 'High-rise', 'Retail'],
        team: [
          { id: '4', name: 'Lisa Rodriguez', role: 'Project Manager', workload: 95, availability: 'busy' },
          { id: '5', name: 'David Wilson', role: 'Structural Engineer', workload: 80, availability: 'available' }
        ],
        milestones: [
          { id: '4', name: 'Excavation Complete', date: new Date('2024-03-01'), status: 'completed', description: 'Site excavation finished' },
          { id: '5', name: 'Ground Floor Complete', date: new Date('2024-05-01'), status: 'upcoming', description: 'Ground floor construction' }
        ],
        tasks: [
          { id: '3', name: 'Steel Framework', status: 'in-progress', assignee: 'David Wilson', dueDate: new Date('2024-04-15'), priority: 'critical' }
        ],
        documents: []
      },
      {
        id: '3',
        name: 'Riverside Shopping Center',
        client: 'Retail Ventures Inc',
        description: 'Development of a modern shopping center with anchor stores, restaurants, and entertainment facilities.',
        status: 'active',
        priority: 'medium',
        progress: 90,
        startDate: new Date('2023-10-01'),
        endDate: new Date('2024-03-30'),
        budget: 1650000,
        spent: 1485000,
        location: 'San Antonio, TX',
        riskLevel: 'low',
        clientSatisfaction: 4.9,
        tags: ['Retail', 'Entertainment', 'Restaurants'],
        team: [
          { id: '6', name: 'Robert Brown', role: 'Project Manager', workload: 60, availability: 'available' }
        ],
        milestones: [
          { id: '6', name: 'Tenant Fit-out', date: new Date('2024-03-15'), status: 'upcoming', description: 'Final tenant improvements' }
        ],
        tasks: [],
        documents: []
      },
      {
        id: '4',
        name: 'Industrial Warehouse Phase 2',
        client: 'LogiCorp Solutions',
        description: 'Second phase of warehouse construction including automated storage systems and loading docks.',
        status: 'at-risk',
        priority: 'high',
        progress: 25,
        startDate: new Date('2024-03-01'),
        endDate: new Date('2024-07-15'),
        budget: 980000,
        spent: 245000,
        location: 'Houston, TX',
        riskLevel: 'high',
        clientSatisfaction: 3.8,
        tags: ['Industrial', 'Warehouse', 'Automation'],
        team: [
          { id: '7', name: 'Emma Davis', role: 'Project Manager', workload: 75, availability: 'busy' }
        ],
        milestones: [],
        tasks: [],
        documents: []
      }
    ];

    setProjects(mockProjects);
    setSelectedProject('1');
  }, []);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const currentProject = projects.find(p => p.id === selectedProject);

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
      case 'cancelled': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
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

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-lg ${
        selectedProject === project.id ? 'ring-2 ring-primary' : ''
      }`}
      onClick={() => setSelectedProject(project.id)}
    >
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{project.client}</p>
            </div>
            <div className="flex gap-2">
              <Badge className={getStatusColor(project.status)}>
                {project.status}
              </Badge>
              <Badge className={getPriorityColor(project.priority)}>
                {project.priority}
              </Badge>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2" />
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              <span>{formatCurrency(project.budget)}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500">{project.team.length} members</span>
            </div>
            <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
              project.riskLevel === 'low' ? 'bg-green-100 text-green-700' :
              project.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              <Shield className="w-3 h-3" />
              {project.riskLevel} risk
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2">Project Management</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Enterprise-level project tracking and team collaboration
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="planning">Planning</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="at-risk">At Risk</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex gap-1 border rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <BarChart3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <FileText className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'kanban' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('kanban')}
              >
                <Target className="w-4 h-4" />
              </Button>
            </div>
            
            <Button className="bg-primary hover:bg-yellow-400 text-black">
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </div>
        </div>

        {/* Project Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Projects</p>
                  <p className="text-3xl font-bold text-blue-600">{projects.length}</p>
                </div>
                <Building className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Active Projects</p>
                  <p className="text-3xl font-bold text-green-600">
                    {projects.filter(p => p.status === 'active').length}
                  </p>
                </div>
                <Activity className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Budget</p>
                  <p className="text-3xl font-bold text-purple-600">
                    {formatCurrency(projects.reduce((sum, p) => sum + p.budget, 0))}
                  </p>
                </div>
                <DollarSign className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Team Members</p>
                  <p className="text-3xl font-bold text-orange-600">
                    {projects.reduce((sum, p) => sum + p.team.length, 0)}
                  </p>
                </div>
                <Users className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Projects List */}
          <div className="xl:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Projects Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                {viewMode === 'grid' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                )}
                
                {viewMode === 'list' && (
                  <div className="space-y-4">
                    {filteredProjects.map((project) => (
                      <div
                        key={project.id}
                        className={`p-4 border rounded-lg cursor-pointer hover:shadow-md transition-all ${
                          selectedProject === project.id ? 'ring-2 ring-primary' : ''
                        }`}
                        onClick={() => setSelectedProject(project.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-4">
                              <div>
                                <h3 className="font-semibold">{project.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{project.client}</p>
                              </div>
                              <div className="flex gap-2">
                                <Badge className={getStatusColor(project.status)}>
                                  {project.status}
                                </Badge>
                                <Badge className={getPriorityColor(project.priority)}>
                                  {project.priority}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-6 text-sm">
                            <div className="text-center">
                              <p className="font-semibold">{project.progress}%</p>
                              <p className="text-gray-500">Progress</p>
                            </div>
                            <div className="text-center">
                              <p className="font-semibold">{formatCurrency(project.budget)}</p>
                              <p className="text-gray-500">Budget</p>
                            </div>
                            <div className="text-center">
                              <p className="font-semibold">{project.team.length}</p>
                              <p className="text-gray-500">Team</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {viewMode === 'kanban' && (
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {['planning', 'active', 'at-risk', 'completed'].map((status) => (
                      <div key={status} className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold capitalize">{status.replace('-', ' ')}</h3>
                          <Badge variant="outline">
                            {filteredProjects.filter(p => p.status === status).length}
                          </Badge>
                        </div>
                        <div className="space-y-3">
                          {filteredProjects
                            .filter(p => p.status === status)
                            .map((project) => (
                              <div
                                key={project.id}
                                className="p-4 bg-white dark:bg-gray-800 border rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                                onClick={() => setSelectedProject(project.id)}
                              >
                                <h4 className="font-medium text-sm mb-2">{project.name}</h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">{project.client}</p>
                                <div className="space-y-2">
                                  <div className="flex justify-between text-xs">
                                    <span>Progress</span>
                                    <span>{project.progress}%</span>
                                  </div>
                                  <Progress value={project.progress} className="h-1" />
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Project Details Sidebar */}
          <div className="xl:col-span-1">
            {currentProject ? (
              <div className="space-y-6">
                {/* Project Overview */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{currentProject.name}</CardTitle>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Client</p>
                      <p className="font-medium">{currentProject.client}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Description</p>
                      <p className="text-sm">{currentProject.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Budget</p>
                        <p className="font-semibold">{formatCurrency(currentProject.budget)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Spent</p>
                        <p className="font-semibold">{formatCurrency(currentProject.spent)}</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{currentProject.progress}%</span>
                      </div>
                      <Progress value={currentProject.progress} className="h-2" />
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {currentProject.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Team Members */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Team Members</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {currentProject.team.map((member) => (
                        <div key={member.id} className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium">{member.name.charAt(0)}</span>
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{member.name}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{member.role}</p>
                          </div>
                          <div className={`w-3 h-3 rounded-full ${
                            member.availability === 'available' ? 'bg-green-500' :
                            member.availability === 'busy' ? 'bg-yellow-500' : 'bg-gray-500'
                          }`}></div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Milestones */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Milestones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {currentProject.milestones.map((milestone) => (
                        <div key={milestone.id} className="flex items-start gap-3">
                          <div className={`w-3 h-3 rounded-full mt-2 ${
                            milestone.status === 'completed' ? 'bg-green-500' :
                            milestone.status === 'overdue' ? 'bg-red-500' : 'bg-blue-500'
                          }`}></div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{milestone.name}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              {milestone.date.toLocaleDateString()}
                            </p>
                          </div>
                          <Badge className={getStatusColor(milestone.status)}>
                            {milestone.status}
                          </Badge>
                        </div>
                      ))}
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
                      <MessageSquare className="w-4 h-4" />
                      Send Message
                    </Button>
                    <Button className="w-full justify-start gap-3" variant="outline">
                      <Calendar className="w-4 h-4" />
                      Schedule Meeting
                    </Button>
                    <Button className="w-full justify-start gap-3" variant="outline">
                      <FileText className="w-4 h-4" />
                      View Documents
                    </Button>
                    <Button className="w-full justify-start gap-3" variant="outline">
                      <BarChart3 className="w-4 h-4" />
                      View Analytics
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Project Selected</h3>
                  <p className="text-gray-500">Select a project to view details</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseProjectManagement;