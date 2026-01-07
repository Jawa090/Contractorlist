import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  TrendingUp,
  Clock,
  DollarSign,
  Calendar,
  Star,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

// Simple interfaces for clean code
interface Project {
  id: string;
  name: string;
  status: 'In Progress' | 'Planning' | 'Bidding' | 'Completed';
  progress: number;
  contractor: string;
  budget: string;
  dueDate: string;
}

interface Contractor {
  name: string;
  rating: number;
  specialty: string;
  responseTime: string;
}

const HomeownerOverview = () => {
  // Simple data - no complex state management
  const stats = [
    { title: 'Active Projects', value: '3', icon: TrendingUp },
    { title: 'Pending Bids', value: '5', icon: Clock },
    { title: 'Budget Used', value: '$12,500', icon: DollarSign },
    { title: 'Next Milestone', value: '2 days', icon: Calendar }
  ];

  const activeProjects: Project[] = [
    {
      id: 'PRJ-001',
      name: 'Kitchen Renovation',
      status: 'In Progress',
      progress: 65,
      contractor: 'Elite Builders',
      budget: '$25,000',
      dueDate: 'Feb 15, 2025'
    },
    {
      id: 'PRJ-002',
      name: 'Backyard ADU',
      status: 'Planning',
      progress: 15,
      contractor: 'Metro Builders',
      budget: '$45,000',
      dueDate: 'Jun 30, 2025'
    },
    {
      id: 'PRJ-003',
      name: 'Master Bath',
      status: 'Bidding',
      progress: 5,
      contractor: 'TBD',
      budget: '$18,000',
      dueDate: 'Apr 20, 2025'
    }
  ];

  const recommendedPros: Contractor[] = [
    {
      name: 'Summit Roofing',
      rating: 4.9,
      specialty: 'Licensed • 12 Years Exp.',
      responseTime: '< 2 hours'
    },
    {
      name: 'A1 Construction',
      rating: 4.7,
      specialty: 'General Contractor • 8 Years',
      responseTime: '< 4 hours'
    },
    {
      name: 'Modern Interiors',
      rating: 4.8,
      specialty: 'Interior Design • 15 Years',
      responseTime: '< 1 hour'
    }
  ];

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      case 'Bidding': return 'bg-purple-100 text-purple-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Clean Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Manage your home improvement projects</p>
      </div>

      {/* Simple Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6 bg-white hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg">
                <stat.icon className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Projects - Clean Layout */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Active Projects</h2>
            <Button variant="outline" size="sm" className="text-orange-600 border-orange-200 hover:bg-orange-50">
              View All
            </Button>
          </div>
          
          <div className="space-y-4">
            {activeProjects.map((project) => (
              <Card key={project.id} className="p-6 bg-white hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{project.name}</h3>
                    <p className="text-sm text-gray-600">{project.contractor}</p>
                  </div>
                  <div className="text-right">
                    <Badge className={`${getStatusColor(project.status)} mb-2`}>
                      {project.status}
                    </Badge>
                    <p className="text-sm font-medium text-gray-900">{project.budget}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2">
                    <div 
                      className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    />
                  </Progress>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Due: {project.dueDate}</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommended Contractors - Simple List */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recommended Pros</h2>
          </div>
          
          <Card className="p-6 bg-white">
            <div className="space-y-4">
              {recommendedPros.map((pro, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:border-orange-200 transition-colors">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{pro.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{pro.specialty}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{pro.rating}</span>
                      </div>
                      <span>Responds in {pro.responseTime}</span>
                    </div>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white">
                    Contact
                  </Button>
                </div>
              ))}
              
              <Button variant="outline" className="w-full mt-4 text-orange-600 border-orange-200 hover:bg-orange-50">
                Browse All Contractors
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomeownerOverview;