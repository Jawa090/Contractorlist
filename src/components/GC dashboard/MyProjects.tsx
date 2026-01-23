import React, { useState, useEffect } from 'react';
import { getProjects, createProject as createProjectAPI, initializeFreshUserData } from '@/services/gcDashboardService';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Plus,
  MapPin,
  MoreHorizontal,
  Grid3x3,
  List,
  UserPlus,
  ArrowRight,
  Avatar,
  Building2,
  Calendar,
  Briefcase,
  TrendingUp,
  Clock,
  MessageSquare,
  FileText,
  Users,
  CheckCircle2,
  AlertCircle,
  Trophy,
  Activity
} from 'lucide-react';
import { Avatar as UIAvatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';


// Mock existing team members (In a real app, this would come from an API)
const existingTeamMembers = [
  { id: '1', name: 'Gorde Omkar', role: 'Project Manager', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100&h=100' },
  { id: '2', name: 'Darrell Steward', role: 'Site Supervisor', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100' },
  { id: '3', name: 'Robert Fox', role: 'Coordinator', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100' },
  { id: '4', name: 'Courtney Henry', role: 'Estimator', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100' },
];

const MyProjects = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showNewProject, setShowNewProject] = useState(false);
  const [viewMode, setViewMode] = useState<'table' | 'card'>('card');
  const [invitedMembers, setInvitedMembers] = useState<string[]>([]);

  // New Project Form State
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectLocation, setNewProjectLocation] = useState('');
  const [newProjectClient, setNewProjectClient] = useState('');
  const [newProjectBudget, setNewProjectBudget] = useState('');
  const [newProjectDuration, setNewProjectDuration] = useState('');
  const [newProjectStatus, setNewProjectStatus] = useState('Planning');
  const [newProjectDescription, setNewProjectDescription] = useState('');

  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProjectData, setSelectedProjectData] = useState<any>(null);
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  // Load Projects from Service
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getProjects();
        if (data.length === 0) {
          await initializeFreshUserData();
          const newData = await getProjects();
          setProjects(newData);
        } else {
          setProjects(data);
        }
      } catch (error) {
        console.error("Failed to load projects", error);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  // Listen for 'openNewProjectModal' event
  useEffect(() => {
    const handleOpenModal = () => setShowNewProject(true);
    window.addEventListener('openNewProjectModal', handleOpenModal);
    return () => window.removeEventListener('openNewProjectModal', handleOpenModal);
  }, []);

  const handleCreateProject = async () => {
    try {
      const newProject = {
        name: newProjectName,
        location: newProjectLocation,
        client: newProjectClient,
        status: newProjectStatus,
        budget: Number(newProjectBudget) || 0,
        duration: Number(newProjectDuration) || 0,
        description: newProjectDescription
      };

      const created = await createProjectAPI(newProject);
      setProjects([created, ...projects]);
      setShowNewProject(false);
      toast({
        title: "Project Created",
        description: "Your new project has been successfully initialized.",
      });
      // Reset form
      setNewProjectName('');
      setNewProjectLocation('');
      setNewProjectClient('');
      setNewProjectBudget('');

      // Ask to invite team/subcontractors
      setInvitedMembers([]); // Reset invited list
      setTimeout(() => setShowInviteModal(true), 500);

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create project",
        variant: "destructive"
      });
    }
  };

  const goToDirectory = () => {
    setShowInviteModal(false);
    navigate('/gc-dashboard/directory');
  };

  const toggleInvite = (memberId: string) => {
    setInvitedMembers(prev =>
      prev.includes(memberId)
        ? prev.filter(id => id !== memberId)
        : [...prev, memberId]
    );
  };

  const filteredProjects = projects.filter(p =>
    p.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.client?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.location?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewDetails = (project: any) => {
    setSelectedProjectData(project);
    setShowProjectDetails(true);
  };

  return (
    <div className="min-h-full bg-gray-50 dark:bg-[#0f1115] text-gray-900 dark:text-white p-8 font-sans transition-colors duration-500 overflow-x-hidden">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-yellow-400/5 dark:bg-yellow-600/5 blur-[120px]" />
        <div className="absolute bottom-[0%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-500/5 dark:bg-blue-600/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">

        {/* Dynamic Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-1">
              <div className="h-2 w-10 bg-yellow-400 rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Portfolio Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Active Pipeline</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-medium text-lg max-w-lg">
              Real-time monitoring and coordination of your entire construction fleet.
            </p>
          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="hidden sm:flex bg-white dark:bg-[#1c1e24] p-1.5 rounded-2xl border border-gray-200 dark:border-white/5 shadow-xl">
              <button
                onClick={() => setViewMode('card')}
                className={cn("p-2 rounded-xl transition-all", viewMode === 'card' ? "bg-gray-100 dark:bg-white/10 text-black dark:text-white shadow-inner" : "text-gray-400 hover:text-black dark:hover:text-white")}
              >
                <Grid3x3 size={20} />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={cn("p-2 rounded-xl transition-all", viewMode === 'table' ? "bg-gray-100 dark:bg-white/10 text-black dark:text-white shadow-inner" : "text-gray-400 hover:text-black dark:hover:text-white")}
              >
                <List size={20} />
              </button>
            </div>
            <Button
              onClick={() => setShowNewProject(true)}
              className="h-14 px-8 bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-400 text-black font-black uppercase text-xs tracking-widest rounded-2xl shadow-xl shadow-yellow-500/20 active:scale-95 transition-all w-full lg:w-auto"
            >
              <Plus size={20} className="mr-2 stroke-[3]" /> Initialize Project
            </Button>
          </div>
        </div>

        {/* Global Pipeline Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Projects', value: projects.length, icon: Building2, color: 'text-blue-500' },
            { label: 'On Schedule', value: projects.filter(p => p.status === 'On Track').length, icon: CheckCircle2, color: 'text-green-500' },
            { label: 'Pending Bids', value: projects.filter(p => p.status === 'Bidding').length, icon: Clock, color: 'text-yellow-500' },
            { label: 'Pipeline Value', value: '$84.2M', icon: TrendingUp, color: 'text-purple-500' }
          ].map((stat, i) => (
            <div key={i} className="bg-white/50 dark:bg-[#1c1e24]/50 backdrop-blur-xl p-6 rounded-[2rem] border border-gray-200 dark:border-white/5 shadow-sm group hover:border-yellow-500/30 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className={cn("p-3 rounded-2xl bg-gray-100 dark:bg-black/20 group-hover:bg-yellow-500/10 transition-colors", stat.color.replace('text', 'text-'))}>
                  <stat.icon size={20} className={stat.color} />
                </div>
                <Activity size={16} className="text-gray-200 dark:text-white/5" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{stat.label}</p>
              <div className="text-3xl font-black text-gray-900 dark:text-white">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Content Controls */}
        <div className="flex items-center gap-4 relative">
          <div className="relative flex-1">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search by project name, client, or site location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-14 pl-14 pr-6 bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/5 rounded-[1.25rem] text-lg focus:ring-yellow-500/20 shadow-sm"
            />
          </div>
        </div>

        {/* Projects Render */}
        {viewMode === 'card' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id || index}
                className="group relative bg-white dark:bg-[#1c1e24] rounded-[2.5rem] border border-gray-200 dark:border-white/5 hover:border-yellow-400 dark:hover:border-yellow-500/30 transition-all duration-500 overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-1"
                onClick={() => handleViewDetails(project)}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 blur-[80px] rounded-full group-hover:bg-yellow-400/10 transition-colors" />

                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-gray-400">
                        <Layers className="w-3 h-3 text-yellow-500" />
                        ID: #PJ-00{index + 1}2
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors leading-tight truncate max-w-[200px]">
                        {project.name}
                      </h3>
                    </div>
                    <Badge className={cn(
                      "rounded-xl px-3 py-1 font-black text-[10px] uppercase tracking-tighter border-none",
                      project.status === 'On Track' ? "bg-green-500/10 text-green-500" :
                        project.status === 'Planning' ? "bg-yellow-500/10 text-yellow-500" :
                          project.status === 'Delayed' ? "bg-red-500/10 text-red-500" : "bg-gray-100 dark:bg-white/5 text-gray-500"
                    )}>
                      {project.status === 'On Track' ? 'ACTIVE' : project.status.toUpperCase()}
                    </Badge>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 dark:bg-black/20 p-4 rounded-2xl border border-gray-100 dark:border-white/5">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Owner</p>
                        <p className="text-sm font-bold truncate">{project.client}</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-black/20 p-4 rounded-2xl border border-gray-100 dark:border-white/5">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Budget</p>
                        <p className="text-sm font-black font-mono">
                          {typeof project.budget === 'object' ? project.budget.estimated : project.budget}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-1 text-gray-400">
                        <span>Completion Depth</span>
                        <span className="text-gray-900 dark:text-white">{project.progress}%</span>
                      </div>
                      <div className="h-3 bg-gray-100 dark:bg-black/40 rounded-full overflow-hidden p-0.5">
                        <div
                          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.3)] transition-all duration-1000"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-100 dark:border-white/5">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500 font-bold">
                        <MapPin size={14} className="text-yellow-500" />
                        {project.location}
                      </div>
                      <div className="flex -space-x-3">
                        {existingTeamMembers.slice(0, 3).map((m, i) => (
                          <UIAvatar key={i} className="h-8 w-8 border-4 border-white dark:border-[#1c1e24] ring-1 ring-gray-100 dark:ring-white/5">
                            <AvatarImage src={m.avatar} />
                            <AvatarFallback>{m.name.charAt(0)}</AvatarFallback>
                          </UIAvatar>
                        ))}
                        <div className="h-8 w-8 rounded-full bg-yellow-400 text-black flex items-center justify-center text-[10px] font-black border-4 border-white dark:border-[#1c1e24] ring-1 ring-gray-100 dark:ring-white/5">+2</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Premium Table View */
          <div className="bg-white dark:bg-[#1c1e24] rounded-[2rem] border border-gray-200 dark:border-white/5 overflow-hidden shadow-2xl">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/50 dark:bg-black/20 border-b border-gray-100 dark:border-white/5">
                  <th className="px-8 py-5 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest pr-0">Project / Site</th>
                  <th className="px-8 py-5 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Client</th>
                  <th className="px-8 py-5 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Efficiency</th>
                  <th className="px-8 py-5 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Budget</th>
                  <th className="px-8 py-5 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                {filteredProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-all cursor-pointer group" onClick={() => handleViewDetails(project)}>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-black flex items-center justify-center font-black text-xl group-hover:scale-110 transition-transform">
                          {project.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-lg font-black text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 tracking-tight leading-none mb-2">{project.name}</p>
                          <p className="text-xs text-gray-400 font-bold flex items-center gap-1.5"><MapPin size={12} className="text-yellow-500" /> {project.location}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-sm font-bold text-gray-600 dark:text-gray-300">{project.client}</p>
                      <Badge variant="outline" className="mt-1.5 border-none bg-gray-100 dark:bg-white/5 text-gray-500 text-[10px] font-black px-2">{project.status}</Badge>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-1 w-32 h-2 bg-gray-100 dark:bg-black/40 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500 rounded-full" style={{ width: `${project.progress}%` }} />
                        </div>
                        <span className="text-sm font-black text-gray-900 dark:text-white">{project.progress}%</span>
                      </div>
                      <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-widest">{project.completion}</p>
                    </td>
                    <td className="px-8 py-6 font-black font-mono text-gray-900 dark:text-white">
                      {typeof project.budget === 'object' ? project.budget.estimated : project.budget}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <Button variant="ghost" size="icon" className="h-12 w-12 rounded-2xl bg-gray-50 dark:bg-white/5 text-gray-400 hover:bg-yellow-400 hover:text-black transition-all">
                        <MoreHorizontal size={20} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Project Detail Modal Redesign */}
        <Dialog open={showProjectDetails} onOpenChange={setShowProjectDetails}>
          <DialogContent className="bg-white dark:bg-[#0f1115] border-none text-gray-900 dark:text-white sm:max-w-4xl p-0 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.4)]">
            {selectedProjectData && (
              <div className="flex flex-col">
                {/* Modal Header Cover */}
                <div className="relative h-64 bg-gray-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent z-10 opacity-60" />
                  <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-30 grayscale" />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent z-20" />

                  <div className="absolute bottom-10 left-10 z-30 space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-yellow-500 text-black border-none font-black text-[10px] tracking-widest px-3 py-1">
                        PROJECT {selectedProjectData.status.toUpperCase()}
                      </Badge>
                      <span className="text-gray-300 font-black text-lg">/ {selectedProjectData.client}</span>
                    </div>
                    <h2 className="text-5xl font-black tracking-tighter text-white leading-none">{selectedProjectData.name}</h2>
                    <p className="flex items-center gap-2 text-gray-400 font-bold text-sm">
                      <MapPin className="w-4 h-4 text-yellow-500" /> {selectedProjectData.location}
                    </p>
                  </div>
                </div>

                <div className="p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 space-y-8">
                      {/* Stats Summary */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/5">
                          <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">Total Budget</p>
                          <p className="text-2xl font-black text-gray-900 dark:text-white font-mono">
                            {typeof selectedProjectData.budget === 'object' ? selectedProjectData.budget.estimated : selectedProjectData.budget}
                          </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/5">
                          <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">Timeline</p>
                          <p className="text-xl font-black text-gray-900 dark:text-white leading-tight">
                            {selectedProjectData.completion}
                          </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/5">
                          <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">Efficiency</p>
                          <div className="flex items-center gap-3">
                            <div className="relative h-10 w-10 flex items-center justify-center">
                              <svg className="w-full h-full -rotate-90">
                                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-gray-100 dark:text-white/5" />
                                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-yellow-500" strokeDasharray={113} strokeDashoffset={113 - (113 * selectedProjectData.progress) / 100} />
                              </svg>
                              <span className="absolute text-[8px] font-black">{selectedProjectData.progress}%</span>
                            </div>
                            <span className="text-xs font-black text-green-500 italic">ON TRACK</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-2xl font-black tracking-tight flex items-center gap-3">
                          <Activity className="w-6 h-6 text-yellow-500" /> Site Intelligence
                        </h4>
                        <div className="bg-gray-50 dark:bg-black/20 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5">
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium text-lg">
                            {selectedProjectData.description || "Project specifications are active. The site is currently cleared and undergoing foundation preparation. Subcontractor scheduling is 85% complete."}
                          </p>
                        </div>
                      </div>

                      {/* Active Team */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-black tracking-tight">Assigned Command</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {existingTeamMembers.slice(0, 2).map((member, i) => (
                            <div key={i} className="flex items-center gap-4 bg-white dark:bg-white/5 p-4 rounded-2xl border border-gray-100 dark:border-white/5">
                              <UIAvatar className="h-12 w-12 rounded-xl ring-2 ring-yellow-500/20">
                                <AvatarImage src={member.avatar} />
                                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                              </UIAvatar>
                              <div>
                                <p className="font-black text-sm leading-none mb-1">{member.name}</p>
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{member.role}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Side Panel Actions */}
                    <div className="space-y-8">
                      <div className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-xl space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-100 dark:border-white/5 pb-4">Project Terminal</h4>
                        <div className="space-y-3">
                          <Button className="w-full h-14 bg-yellow-400 hover:bg-yellow-500 text-black font-black uppercase text-[10px] tracking-widest rounded-2xl shadow-xl shadow-yellow-500/20" onClick={() => navigate('/gc-dashboard/communications')}>
                            Open Communications
                          </Button>
                          <Button variant="outline" className="w-full h-14 border-gray-200 dark:border-white/10 font-black uppercase text-[10px] tracking-widest rounded-2xl group" onClick={() => navigate('/gc-dashboard/directory')}>
                            <Users className="w-4 h-4 mr-2 group-hover:text-yellow-500" /> Deploy Subcontractors
                          </Button>
                        </div>

                        <div className="space-y-4 pt-4">
                          <div className="flex items-center justify-between group cursor-pointer hover:bg-gray-100 dark:hover:bg-white/5 p-2 rounded-xl transition-all">
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                                <FileText size={16} />
                              </div>
                              <span className="text-xs font-bold">Project Plans</span>
                            </div>
                            <ArrowRight size={14} className="text-gray-300 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all" />
                          </div>
                          <div className="flex items-center justify-between group cursor-pointer hover:bg-gray-100 dark:hover:bg-white/5 p-2 rounded-xl transition-all">
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center">
                                <Trophy size={16} />
                              </div>
                              <span className="text-xs font-bold">Milestone Reports</span>
                            </div>
                            <ArrowRight size={14} className="text-gray-300 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      </div>

                      <div className="p-6 rounded-2xl bg-yellow-400/5 border border-yellow-400/20">
                        <p className="text-[10px] font-black text-yellow-600 dark:text-yellow-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                          <AlertCircle size={14} /> Attention Required
                        </p>
                        <p className="text-xs font-bold text-gray-600 dark:text-gray-400 leading-relaxed">
                          Insurance certificate for Electrical Sub is expiring in 8 days. Renewal required for site access.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-10 py-6 bg-gray-50 dark:bg-black/30 border-t border-gray-100 dark:border-white/5 flex items-center justify-between overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-2 h-full bg-yellow-500" />
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <Trophy size={14} className="text-yellow-500" /> Elite Project Status Verified
                  </p>
                  <Button variant="ghost" className="text-gray-400 font-black uppercase text-[10px] tracking-widest" onClick={() => setShowProjectDetails(false)}>
                    Exit Project Deck
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* New Project Dialog Redesign */}
        <Dialog open={showNewProject} onOpenChange={setShowNewProject}>
          <DialogContent className="bg-white dark:bg-[#1c1e24] border-none text-gray-900 dark:text-white sm:max-w-2xl p-0 overflow-hidden shadow-2xl rounded-[2.5rem]">
            <div className="bg-yellow-400 p-8 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-black text-black tracking-tighter leading-none">INITIALIZE PROJECT</h2>
                <p className="text-black/60 font-bold text-sm mt-2">Deploying new construction assets to the pipeline.</p>
              </div>
              <div className="h-16 w-16 rounded-[1.5rem] bg-black text-white flex items-center justify-center shadow-2xl">
                <Briefcase size={32} />
              </div>
            </div>

            <div className="p-10 space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Project Identifier</Label>
                  <Input
                    placeholder="e.g. Skyline Towers Phase 1"
                    className="h-14 bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/10 rounded-2xl px-6 focus:ring-yellow-500/20"
                    value={newProjectName}
                    onChange={(e) => setNewProjectName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Geographic Location</Label>
                  <Input
                    placeholder="Austin, TX"
                    className="h-14 bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/10 rounded-2xl px-6 focus:ring-yellow-500/20"
                    value={newProjectLocation}
                    onChange={(e) => setNewProjectLocation(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Stakeholder / Client Name</Label>
                <Input
                  placeholder="The Millennial Group LLC"
                  className="h-14 bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/10 rounded-2xl px-6 focus:ring-yellow-500/20"
                  value={newProjectClient}
                  onChange={(e) => setNewProjectClient(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Estimated Budgetary Cap</Label>
                  <Input
                    placeholder="$2.5M"
                    className="h-14 bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/10 rounded-2xl px-6 focus:ring-yellow-500/20 font-mono font-bold"
                    value={newProjectBudget}
                    onChange={(e) => setNewProjectBudget(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Operational Status</Label>
                  <Select value={newProjectStatus} onValueChange={setNewProjectStatus}>
                    <SelectTrigger className="h-14 bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/10 rounded-2xl px-6 font-bold">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/10 rounded-2xl">
                      <SelectItem value="Planning">PLANNING PHASE</SelectItem>
                      <SelectItem value="In Progress">IN PROGRESS</SelectItem>
                      <SelectItem value="Bidding">BIDDING OPEN</SelectItem>
                      <SelectItem value="On Hold">ON HOLD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Strategic Overview</Label>
                <Textarea
                  placeholder="Primary project objectives and constraints..."
                  className="bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 min-h-[120px] focus:ring-yellow-500/20"
                  value={newProjectDescription}
                  onChange={(e) => setNewProjectDescription(e.target.value)}
                />
              </div>
            </div>

            <div className="flex bg-gray-50 dark:bg-white/5 p-8 gap-4">
              <Button variant="ghost" onClick={() => setShowNewProject(false)} className="h-14 flex-1 font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-red-500/10 hover:text-red-500">
                Cancel
              </Button>
              <Button onClick={handleCreateProject} className="h-14 flex-[2] bg-black text-white hover:bg-yellow-500 hover:text-black font-black uppercase text-xs tracking-widest rounded-2xl transition-all shadow-xl shadow-black/20">
                Deploy Project
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Invite Team Modal Redesign */}
        <Dialog open={showInviteModal} onOpenChange={setShowInviteModal}>
          <DialogContent className="bg-white dark:bg-[#1c1e24] border-none text-gray-900 dark:text-white sm:max-w-lg p-0 overflow-hidden shadow-2xl rounded-[2.5rem]">
            <div className="h-32 bg-yellow-400 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-black/10 rounded-full -mr-16 -mt-16" />
              <div className="p-4 rounded-3xl bg-black text-white shadow-2xl">
                <UserPlus className="w-8 h-8" />
              </div>
            </div>

            <div className="p-10 text-center space-y-8">
              <div className="space-y-2">
                <h3 className="text-3xl font-black tracking-tight leading-none">ASSIGN COMMAND</h3>
                <p className="text-gray-500 dark:text-gray-400 font-bold">Deploy leadership assets to maintain operational efficiency.</p>
              </div>

              <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                {existingTeamMembers.map(member => (
                  <div key={member.id} className="flex items-center justify-between p-4 rounded-3xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 hover:border-yellow-500/30 transition-all group">
                    <div className="flex items-center gap-4">
                      <UIAvatar className='h-12 w-12 rounded-2xl ring-2 ring-transparent group-hover:ring-yellow-500/20 transition-all'>
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </UIAvatar>
                      <div className="text-left">
                        <p className="text-sm font-black group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors uppercase tracking-tight">{member.name}</p>
                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{member.role}</p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant={invitedMembers.includes(member.id) ? "secondary" : "outline"}
                      className={cn(
                        "h-10 px-4 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all",
                        invitedMembers.includes(member.id)
                          ? "bg-yellow-400 text-black border-none shadow-lg shadow-yellow-400/20"
                          : "border-gray-200 dark:border-white/10 hover:border-yellow-400 hover:text-black hover:bg-yellow-400"
                      )}
                      onClick={() => toggleInvite(member.id)}
                    >
                      {invitedMembers.includes(member.id) ? 'DEPLOYED' : 'DEPLOY'}
                    </Button>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <Button className="h-14 w-full bg-black text-white hover:bg-yellow-500 hover:text-black font-black uppercase text-xs tracking-widest rounded-2xl shadow-xl shadow-black/20 transition-all" onClick={() => {
                  toast({ title: "Command Assigned", description: `${invitedMembers.length} assets deployed to project board.` });
                  setShowInviteModal(false);
                }}> Confirm Assignments </Button>
                <Button variant="ghost" onClick={() => setShowInviteModal(false)} className="text-gray-400 font-black uppercase text-[10px] tracking-widest"> Skip Configuration </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

      </div>
    </div>
  );
};

export default MyProjects;
