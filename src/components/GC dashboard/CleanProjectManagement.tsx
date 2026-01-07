import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  MoreHorizontal,
  Plus,
  Search,
  Filter,
  Calendar,
  MapPin,
  DollarSign,
  Users,
  Briefcase,
  LayoutGrid,
  List as ListIcon,
  ChevronRight,
  MoreVertical,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';

interface Project {
  id: string;
  name: string;
  client: string;
  description: string;
  status: 'planning' | 'active' | 'on-hold' | 'completed' | 'at-risk';
  priority: 'low' | 'medium' | 'high' | 'critical';
  progress: number;
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  location: string;
  team: string[];
}

const CleanProjectManagement = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [selectedProject, setSelectedProject] = useState<string | null>('1');

  // Mock Data
  const projects: Project[] = [
    {
      id: '1',
      name: 'Austin Medical Center Expansion',
      client: 'Austin Healthcare',
      description: 'Complete renovation and expansion of the medical center including new patient wings.',
      status: 'active',
      priority: 'high',
      progress: 75,
      startDate: 'Jan 15, 2024',
      endDate: 'Jun 30, 2024',
      budget: 2800000,
      spent: 2100000,
      location: 'Austin, TX',
      team: ['SJ', 'MD', 'JD']
    },
    {
      id: '2',
      name: 'Downtown Office Complex',
      client: 'Metro Properties',
      description: 'Construction of a 15-story office complex with retail space.',
      status: 'active',
      priority: 'critical',
      progress: 45,
      startDate: 'Feb 01, 2024',
      endDate: 'Aug 15, 2024',
      budget: 4200000,
      spent: 1890000,
      location: 'Dallas, TX',
      team: ['LR', 'DW', 'KP', 'AM']
    },
    {
      id: '3',
      name: 'Riverside Shopping Center',
      client: 'Retail Ventures',
      description: 'Development of a modern shopping center with anchor stores.',
      status: 'active',
      priority: 'medium',
      progress: 90,
      startDate: 'Oct 01, 2023',
      endDate: 'Mar 30, 2024',
      budget: 1650000,
      spent: 1485000,
      location: 'San Antonio, TX',
      team: ['RB']
    },
    {
      id: '4',
      name: 'Industrial Warehouse Ph2',
      client: 'LogiCorp',
      description: 'Second phase of warehouse construction with automated storage.',
      status: 'at-risk',
      priority: 'high',
      progress: 25,
      startDate: 'Mar 01, 2024',
      endDate: 'Jul 15, 2024',
      budget: 980000,
      spent: 245000,
      location: 'Houston, TX',
      team: ['ED', 'TS']
    }
  ];

  const currentProject = projects.find(p => p.id === selectedProject) || projects[0];

  return (
    <div className="flex h-full w-full flex-col bg-slate-50/50 dark:bg-slate-950/50">
      {/* Header Actions */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Projects</h1>
          <p className="text-sm text-slate-500">Manage and track your construction portfolio</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input
              placeholder="Search projects..."
              className="w-[250px] pl-9 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
            />
          </div>

          <div className="flex items-center border border-slate-200 dark:border-slate-800 rounded-md p-1 bg-slate-50 dark:bg-slate-900">
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 rounded-sm ${viewMode === 'list' ? 'bg-white dark:bg-slate-800 shadow-sm' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <ListIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 rounded-sm ${viewMode === 'grid' ? 'bg-white dark:bg-slate-800 shadow-sm' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
          </div>

          <Button className="bg-yellow-500 hover:bg-yellow-600 text-yellow-950 font-semibold shadow-sm shadow-yellow-200 dark:shadow-none">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Main List Area */}
        <div className={`flex-1 overflow-y-auto p-6 transition-all duration-300 ${selectedProject ? 'mr-[400px]' : ''}`}>

          {viewMode === 'list' ? (
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Project Name</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold">Timeline</th>
                    <th className="px-6 py-4 font-semibold">Team</th>
                    <th className="px-6 py-4 font-semibold">Progress</th>
                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {projects.map((project) => (
                    <tr
                      key={project.id}
                      className={`
                                group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors
                              ${selectedProject === project.id ? 'bg-yellow-50/50 dark:bg-yellow-900/10 border-l-4 border-l-yellow-400' : ''}
                              `}
                      onClick={() => setSelectedProject(project.id)}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                            <Briefcase className="h-4 w-4" />
                          </div>
                          <div>
                            <div className={`font-semibold ${selectedProject === project.id ? 'text-blue-700 dark:text-blue-400' : 'text-slate-900 dark:text-slate-100'}`}>
                              {project.name}
                            </div>
                            <div className="text-xs text-slate-500">{project.client}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="secondary" className={`
                                    ${project.status === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200 animate-pulse' : ''}
                                    ${project.status === 'at-risk' ? 'bg-red-50 text-red-700 border-red-200' : ''}
                                    font-medium relative pl-4
                                   `}>
                          {project.status === 'active' && <span className="absolute left-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>}
                          {project.status.replace('-', ' ')}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                        <div className="space-y-1">
                          <div className="text-xs flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {project.startDate}
                          </div>
                          <div className="text-xs flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {project.endDate}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex -space-x-2">
                          {project.team.map((member, i) => (
                            <div key={i} className="h-7 w-7 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold text-slate-600">
                              {member}
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 min-w-[150px]">
                        <div className="flex items-center gap-3">
                          <Progress value={project.progress} className="h-1.5 w-full bg-slate-100 dark:bg-slate-800" />
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{project.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-900">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className={`
                          cursor-pointer hover:shadow-md transition-all border-slate-200 dark:border-slate-800
                          ${selectedProject === project.id ? 'ring-2 ring-blue-600 dark:ring-blue-500' : ''}
                        `}
                  onClick={() => setSelectedProject(project.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <Badge variant="secondary" className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                        {project.location}
                      </Badge>
                      <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2 -mt-2">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardTitle className="text-lg font-bold pt-2 line-clamp-1">{project.name}</CardTitle>
                    <CardDescription className="line-clamp-1">{project.client}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />

                      <div className="flex justify-between items-center pt-2">
                        <div className="flex -space-x-2">
                          {project.team.slice(0, 3).map((member, i) => (
                            <div key={i} className="h-7 w-7 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold border-2 border-white">
                              {member}
                            </div>
                          ))}
                          {project.team.length > 3 && (
                            <div className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center text-[10px] text-slate-600 border-2 border-white">
                              +{project.team.length - 3}
                            </div>
                          )}
                        </div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          ${(project.budget / 1000000).toFixed(1)}M
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Project Sidebar Detail */}
        <div className={`
             fixed right-0 top-[64px] bottom-0 w-[400px] bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 
             transform transition-transform duration-300 shadow-xl overflow-y-auto
             ${selectedProject ? 'translate-x-0' : 'translate-x-full'}
         `}>
          {currentProject && (
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                <div className="flex justify-between items-start mb-4">
                  <Badge
                    className={`
                             ${currentProject.priority === 'critical' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'}
                             border-0
                           `}
                  >
                    {currentProject.priority} Priority
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setSelectedProject(null)}>
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">{currentProject.name}</h2>
                <p className="text-slate-500 text-sm mb-4">{currentProject.client}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-md border border-slate-200 dark:border-slate-800">
                    <p className="text-xs text-slate-500 mb-1">Total Budget</p>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">${(currentProject.budget / 1000000).toFixed(2)}M</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-md border border-slate-200 dark:border-slate-800">
                    <p className="text-xs text-slate-500 mb-1">Spent to Date</p>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">${(currentProject.spent / 1000000).toFixed(2)}M</p>
                  </div>
                </div>
              </div>

              <ScrollArea className="flex-1 p-6 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Project Status
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Completion</span>
                      <span className="font-medium">{currentProject.progress}%</span>
                    </div>
                    <Progress value={currentProject.progress} className="h-2" />
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {currentProject.description}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="justify-start h-auto py-3 px-4">
                      <div className="text-left">
                        <div className="font-medium text-slate-900 dark:text-slate-100">Update</div>
                        <div className="text-xs text-slate-500">Log progress</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-3 px-4">
                      <div className="text-left">
                        <div className="font-medium text-slate-900 dark:text-slate-100">Expense</div>
                        <div className="text-xs text-slate-500">Add cost</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-3 px-4">
                      <div className="text-left">
                        <div className="font-medium text-slate-900 dark:text-slate-100">Team</div>
                        <div className="text-xs text-slate-500">Manage</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-3 px-4">
                      <div className="text-left">
                        <div className="font-medium text-slate-900 dark:text-slate-100">Report</div>
                        <div className="text-xs text-slate-500">Export PDF</div>
                      </div>
                    </Button>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </div>
                      Live Feed
                    </h3>
                    <Badge variant="outline" className="text-[10px] uppercase font-bold text-slate-500">Real-time</Badge>
                  </div>
                  <div className="relative pl-4 border-l border-slate-200 dark:border-slate-800 space-y-6">
                    <div className="relative">
                      <div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-yellow-500 ring-4 ring-white dark:ring-slate-950"></div>
                      <p className="text-sm font-medium">Milestone Completed</p>
                      <p className="text-xs text-slate-500">Foundation phase finished ahead of schedule.</p>
                      <p className="text-xs text-slate-400 mt-1">Today, 2:30 PM</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700 ring-4 ring-white dark:ring-slate-950"></div>
                      <p className="text-sm font-medium">New Document Added</p>
                      <p className="text-xs text-slate-500">Sarah uploaded "Site Safety Report_v2.pdf"</p>
                      <p className="text-xs text-slate-400 mt-1">Yesterday, 4:15 PM</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700 ring-4 ring-white dark:ring-slate-950"></div>
                      <p className="text-sm font-medium">Budget Updated</p>
                      <p className="text-xs text-slate-500">Approved Q2 material costs.</p>
                      <p className="text-xs text-slate-400 mt-1">Jan 12, 10:00 AM</p>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CleanProjectManagement;