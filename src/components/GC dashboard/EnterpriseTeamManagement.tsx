import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Users,
  Search,
  Filter,
  Plus,
  MoreVertical,
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  Award,
  TrendingUp,
  Clock,
  Target,
  Activity,
  Star,
  Building,
  MapPin,
  Briefcase,
  Settings,
  Edit,
  UserPlus
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  avatar?: string;
  status: 'online' | 'busy' | 'away' | 'offline';
  workload: number;
  performance: number;
  projects: string[];
  skills: string[];
  joinDate: Date;
  location: string;
  certifications: string[];
}

const EnterpriseTeamManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'John Smith',
      role: 'Senior Project Manager',
      department: 'Project Management',
      email: 'john.smith@company.com',
      phone: '+1 (555) 123-4567',
      status: 'online',
      workload: 85,
      performance: 94,
      projects: ['Austin Medical Center', 'Office Complex'],
      skills: ['Project Management', 'Risk Assessment', 'Team Leadership'],
      joinDate: new Date('2020-03-15'),
      location: 'Austin, TX',
      certifications: ['PMP', 'OSHA 30']
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      role: 'Site Supervisor',
      department: 'Construction',
      email: 'sarah.johnson@company.com',
      phone: '+1 (555) 234-5678',
      status: 'busy',
      workload: 78,
      performance: 91,
      projects: ['Austin Medical Center', 'Riverside Shopping Center'],
      skills: ['Site Management', 'Quality Control', 'Safety Management'],
      joinDate: new Date('2019-07-22'),
      location: 'Austin, TX',
      certifications: ['OSHA 30', 'First Aid/CPR']
    },
    {
      id: '3',
      name: 'Mike Davis',
      role: 'Lead Electrician',
      department: 'Electrical',
      email: 'mike.davis@company.com',
      phone: '+1 (555) 345-6789',
      status: 'online',
      workload: 92,
      performance: 88,
      projects: ['Austin Medical Center', 'Industrial Warehouse'],
      skills: ['Electrical Systems', 'HVAC', 'Troubleshooting'],
      joinDate: new Date('2018-11-10'),
      location: 'Houston, TX',
      certifications: ['Master Electrician', 'HVAC Certified']
    },
    {
      id: '4',
      name: 'Lisa Rodriguez',
      role: 'Project Manager',
      department: 'Project Management',
      email: 'lisa.rodriguez@company.com',
      phone: '+1 (555) 456-7890',
      status: 'away',
      workload: 95,
      performance: 96,
      projects: ['Downtown Office Complex'],
      skills: ['Project Planning', 'Budget Management', 'Client Relations'],
      joinDate: new Date('2021-01-08'),
      location: 'Dallas, TX',
      certifications: ['PMP', 'Agile Certified']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'busy': return 'bg-red-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getPerformanceColor = (performance: number) => {
    if (performance >= 90) return 'text-green-600';
    if (performance >= 80) return 'text-blue-600';
    if (performance >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Team Management
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Enterprise workforce management and performance tracking
            </p>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">Team Dashboard Active</span>
              </div>
              <div className="text-sm text-gray-500">
                {teamMembers.length} active team members
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="border-gray-300 hover:border-gray-400">
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filter
            </Button>
            <Button variant="outline" className="border-gray-300 hover:border-gray-400">
              <Settings className="w-4 h-4 mr-2" />
              Team Settings
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
              <UserPlus className="w-4 h-4 mr-2" />
              Add Team Member
            </Button>
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  Active
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{teamMembers.length}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Team Members</p>
                <p className="text-xs text-gray-500 mt-1">Across all departments</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <Activity className="w-6 h-6 text-green-600" />
                </div>
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  Online
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {teamMembers.filter(m => m.status === 'online').length}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Currently Online</p>
                <p className="text-xs text-gray-500 mt-1">Available for work</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                  Average
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {Math.round(teamMembers.reduce((sum, m) => sum + m.performance, 0) / teamMembers.length)}%
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Team Performance</p>
                <p className="text-xs text-gray-500 mt-1">Above industry standard</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                  Utilization
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {Math.round(teamMembers.reduce((sum, m) => sum + m.workload, 0) / teamMembers.length)}%
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Average Workload</p>
                <p className="text-xs text-gray-500 mt-1">Optimal capacity</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Team Interface */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Left Column - Team List */}
          <div className="xl:col-span-3">
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">Team Directory</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Bulk Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input 
                      placeholder="Search team members, roles, departments..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-gray-50 dark:bg-gray-900" 
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="performance">Performance</TabsTrigger>
                    <TabsTrigger value="workload">Workload</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-4">
                    <div className="space-y-4">
                      {teamMembers.map((member) => (
                        <div key={member.id} className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-4">
                            <div className="relative">
                              <Avatar className="w-16 h-16">
                                <AvatarImage src={member.avatar} />
                                <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold text-lg">
                                  {member.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div className={`absolute -bottom-1 -right-1 w-5 h-5 ${getStatusColor(member.status)} rounded-full border-2 border-white`}></div>
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-3">
                                <div>
                                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                                  <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
                                  <p className="text-sm text-gray-500">{member.department}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge variant="outline" className="capitalize">
                                    {member.status}
                                  </Badge>
                                  <div className="flex gap-1">
                                    <Button variant="ghost" size="sm">
                                      <Phone className="w-4 h-4" />
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                      <Mail className="w-4 h-4" />
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                      <MessageSquare className="w-4 h-4" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Performance</p>
                                  <div className="flex items-center gap-2">
                                    <Progress value={member.performance} className="h-2 flex-1" />
                                    <span className={`text-sm font-semibold ${getPerformanceColor(member.performance)}`}>
                                      {member.performance}%
                                    </span>
                                  </div>
                                </div>
                                
                                <div>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Workload</p>
                                  <div className="flex items-center gap-2">
                                    <Progress value={member.workload} className="h-2 flex-1" />
                                    <span className="text-sm font-semibold">{member.workload}%</span>
                                  </div>
                                </div>
                                
                                <div>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Projects</p>
                                  <p className="text-sm font-semibold">{member.projects.length} active</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    <span>{member.location}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Briefcase className="w-4 h-4" />
                                    <span>{member.certifications.length} certifications</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>Joined {member.joinDate.getFullYear()}</span>
                                  </div>
                                </div>
                                
                                <div className="flex flex-wrap gap-1">
                                  {member.skills.slice(0, 3).map((skill) => (
                                    <Badge key={skill} variant="outline" className="text-xs">
                                      {skill}
                                    </Badge>
                                  ))}
                                  {member.skills.length > 3 && (
                                    <Badge variant="outline" className="text-xs">
                                      +{member.skills.length - 3} more
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="performance" className="space-y-4">
                    <div className="text-center py-12">
                      <Award className="w-20 h-20 text-gray-400 mx-auto mb-6" />
                      <h3 className="text-xl font-bold mb-2">Performance Analytics</h3>
                      <p className="text-gray-500">Detailed performance metrics and team analytics</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="workload" className="space-y-4">
                    <div className="text-center py-12">
                      <Activity className="w-20 h-20 text-gray-400 mx-auto mb-6" />
                      <h3 className="text-xl font-bold mb-2">Workload Distribution</h3>
                      <p className="text-gray-500">Team capacity planning and workload optimization</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="skills" className="space-y-4">
                    <div className="text-center py-12">
                      <Star className="w-20 h-20 text-gray-400 mx-auto mb-6" />
                      <h3 className="text-xl font-bold mb-2">Skills Matrix</h3>
                      <p className="text-gray-500">Team skills assessment and development tracking</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Team Insights */}
          <div className="xl:col-span-1 space-y-6">
            {/* Department Overview */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">Department Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Project Management</span>
                    <Badge variant="outline">2 members</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Construction</span>
                    <Badge variant="outline">1 member</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Electrical</span>
                    <Badge variant="outline">1 member</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start gap-3 bg-green-600 hover:bg-green-700 text-white">
                  <UserPlus className="w-4 h-4" />
                  Add Team Member
                </Button>
                <Button className="w-full justify-start gap-3" variant="outline">
                  <MessageSquare className="w-4 h-4" />
                  Team Broadcast
                </Button>
                <Button className="w-full justify-start gap-3" variant="outline">
                  <Calendar className="w-4 h-4" />
                  Schedule Meeting
                </Button>
                <Button className="w-full justify-start gap-3" variant="outline">
                  <Award className="w-4 h-4" />
                  Performance Review
                </Button>
              </CardContent>
            </Card>

            {/* Team Activity */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">John Smith completed milestone</p>
                      <p className="text-xs text-gray-500">Medical Center - 2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Sarah Johnson updated status</p>
                      <p className="text-xs text-gray-500">Site inspection complete - 4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Mike Davis joined project</p>
                      <p className="text-xs text-gray-500">Industrial Warehouse - 1 day ago</p>
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

export default EnterpriseTeamManagement;