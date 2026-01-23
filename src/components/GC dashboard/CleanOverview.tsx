import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Building2,
  Users,
  Briefcase,
  MapPin,
  TrendingUp,
  MoreHorizontal,
  Plus,
  Calendar,
  DollarSign,
  Clock,
  ArrowRight,
  MessageSquare,
  FileText,
  Zap,
  Activity,
  ShieldCheck,
  Award,
  CircleCheck,
  ChevronRight,
  Layers,
  Star
} from 'lucide-react';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CleanOverview = () => {
  const navigate = useNavigate();
  const [projectFilter, setProjectFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const stats = [
    {
      title: 'Active Projects',
      value: '4',
      subtext: 'Operational',
      icon: Building2,
      progress: 85,
      color: '#EAB308',
      textColor: 'text-yellow-400'
    },
    {
      title: 'Bid Efficiency',
      value: '92%',
      subtext: 'Above Target',
      icon: TrendingUp,
      progress: 92,
      color: '#22C55E',
      textColor: 'text-green-500'
    },
    {
      title: 'Sub Network',
      value: '1.2K',
      subtext: 'Verified Pros',
      icon: ShieldCheck,
      progress: 100,
      color: '#3B82F6',
      textColor: 'text-blue-500'
    },
    {
      title: 'Pipeline ROI',
      value: '22%',
      subtext: 'Monthly Growth',
      icon: DollarSign,
      progress: 65,
      color: '#A855F7',
      textColor: 'text-purple-500'
    }
  ];

  const recentProjects = [
    {
      name: 'Downtown Office Renovation',
      client: 'Sample Client LLC',
      location: 'Austin, TX',
      status: 'Active',
      budget: '$2.4M',
      completion: 'Mar 2025',
      progress: 65,
      match: 98
    },
    {
      name: 'Modern Residence Expansion',
      client: 'Private Owner',
      location: 'Austin, TX',
      status: 'Planning',
      budget: '$0.8M',
      completion: 'Aug 2025',
      progress: 15,
      match: 92
    },
    {
      name: 'Retail Space Build-out',
      client: 'Metro Retail Group',
      location: 'Austin, TX',
      status: 'Completed',
      budget: '$1.2M',
      completion: 'Jan 2025',
      progress: 100,
      match: 100
    }
  ];

  const discoveryPulse = [
    { title: 'New Multi-Family Project', location: 'San Antonio', budget: '$12M', match: 94 },
    { title: 'Commercial Plaza Fit-out', location: 'Austin', budget: '$3.5M', match: 88 },
  ];

  const filteredProjects = projectFilter === 'All'
    ? recentProjects
    : recentProjects.filter(p => p.status === projectFilter);

  return (
    <div className="p-8 min-h-full bg-gray-50 dark:bg-[#0f1115] text-gray-900 dark:text-white flex flex-col gap-10 transition-colors duration-500 overflow-x-hidden font-sans">

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-yellow-400/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      {/* Welcome Banner */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-white dark:bg-[#1c1e24] p-10 rounded-[3rem] border border-gray-200 dark:border-white/5 shadow-2xl shadow-black/5">
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-yellow-400 text-black border-none font-black text-[10px] tracking-widest px-3">OPERATIONAL COMMAND</Badge>
            <span className="text-sm font-bold text-gray-400 flex items-center gap-1.5"><CircleCheck className="w-4 h-4 text-green-500" /> All Systems Online</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter leading-none italic">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Command Control</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl font-medium text-lg leading-relaxed">
            Your portfolio is currently performing at <span className="text-yellow-500 font-black">92% efficiency</span>. You have 2 new high-matching projects in your area ready for discovery.
          </p>
        </div>
        <div className="shrink-0 flex gap-4">
          <Button className="h-16 px-10 bg-black dark:bg-yellow-500 text-white dark:text-black font-black uppercase text-xs tracking-widest rounded-2xl shadow-xl shadow-black/20 hover:bg-yellow-500 dark:hover:bg-yellow-400 hover:text-black transition-all active:scale-95" onClick={() => navigate('/gc-dashboard/my-projects')}>
            Initialize Project
          </Button>
          <Button variant="outline" className="h-16 w-16 rounded-2xl border-gray-200 dark:border-white/10 group" onClick={() => navigate('/gc-dashboard/directory')}>
            <Users className="w-6 h-6 text-gray-400 group-hover:text-yellow-500 transition-colors" />
          </Button>
        </div>
      </div>

      {/* Critical Stats Radar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-[#1c1e24] p-8 rounded-[2.5rem] border border-gray-200 dark:border-white/5 shadow-sm hover:border-yellow-500/30 transition-all duration-500 overflow-hidden cursor-pointer"
            onClick={() => {
              if (stat.title === 'Active Projects') setProjectFilter('Active');
              if (stat.title === 'Sub Network') navigate('/gc-dashboard/directory');
              if (stat.title === 'Bid Efficiency') navigate('/gc-dashboard/my-projects');
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 blur-[60px] rounded-full pointer-events-none" />

            <div className="flex justify-between items-start mb-6">
              <div className="bg-gray-50 dark:bg-black/40 p-3 rounded-2xl group-hover:bg-yellow-500/10 transition-colors">
                <stat.icon size={24} style={{ color: stat.color }} className="group-hover:scale-110 transition-transform" />
              </div>
              <div className="w-14 h-14 relative flex items-center justify-center">
                <CircularProgressbar
                  value={stat.progress || 0}
                  styles={buildStyles({
                    pathColor: stat.color,
                    trailColor: "rgba(128,128,128,0.05)",
                    strokeLinecap: "round",
                  })}
                />
                <Activity size={12} className="absolute text-gray-200 dark:text-white/5" />
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.title}</p>
              <h4 className="text-4xl font-black text-gray-900 dark:text-white font-mono tracking-tighter">{stat.value}</h4>
              <div className="flex items-center gap-1.5 pt-2">
                <span className={cn("text-xs font-black italic", stat.textColor)}>{stat.subtext}</span>
                <ChevronRight size={12} className="text-gray-300 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Insights Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">

        {/* Live Portfolio Feed */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-2 bg-yellow-400 rounded-full" />
              <h2 className="text-2xl font-black tracking-tight">PORTFOLIO DECK</h2>
            </div>
            <div className="flex p-1 bg-gray-100 dark:bg-black/40 rounded-2xl border border-gray-100 dark:border-white/10">
              {['All', 'Active', 'Completed'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setProjectFilter(tab)}
                  className={cn(
                    "px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all",
                    projectFilter === tab ? "bg-white dark:bg-[#1c1e24] text-black dark:text-white shadow-xl" : "text-gray-400 hover:text-black dark:hover:text-white"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {filteredProjects.map((project, i) => (
              <div
                key={i}
                onClick={() => { setSelectedProject(project); setIsDetailModalOpen(true); }}
                className="group relative bg-white dark:bg-[#1c1e24] p-6 rounded-[2rem] border border-gray-200 dark:border-white/5 hover:border-yellow-500/30 transition-all cursor-pointer flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="h-24 w-24 rounded-3xl bg-gray-50 dark:bg-black/40 flex items-center justify-center font-black text-2xl group-hover:bg-yellow-400 group-hover:text-black transition-all shadow-inner">
                  {project.name.charAt(0)}
                </div>

                <div className="flex-1 space-y-4 w-full">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-black tracking-tight mb-1 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">{project.name}</h4>
                      <p className="text-xs text-gray-400 font-bold flex items-center gap-1.5 uppercase tracking-widest"><MapPin size={12} className="text-yellow-500" /> {project.location}</p>
                    </div>
                    <Badge className="bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 font-black text-[10px] tracking-widest px-3 border-none">{project.status.toUpperCase()}</Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Portfolio Match</p>
                      <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-black font-mono text-gray-900 dark:text-white">{project.match}%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Completion</p>
                      <div className="w-full h-2 bg-gray-100 dark:bg-black/40 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.3)]" style={{ width: `${project.progress}%` }} />
                      </div>
                    </div>
                    <div className="hidden md:block text-right">
                      <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Target</p>
                      <p className="text-sm font-black text-gray-900 dark:text-white">{project.completion}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Discovery Pulse - Side Panel */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-2 bg-blue-500 rounded-full" />
              <h2 className="text-2xl font-black tracking-tight uppercase">Discovery Pulse</h2>
            </div>

            <div className="space-y-4">
              {discoveryPulse.map((item, i) => (
                <div key={i} className="bg-black text-white p-6 rounded-[2rem] shadow-2xl relative overflow-hidden group cursor-pointer" onClick={() => navigate('/gc-dashboard/project-discovery')}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 blur-[40px] rounded-full pointer-events-none" />
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-yellow-500 text-black font-black text-[10px] mb-2 px-2 border-none">NEW SIGNAL</Badge>
                    <span className="text-xl font-black text-yellow-500 font-mono">{item.match}%</span>
                  </div>
                  <h5 className="font-black text-lg mb-1 leading-tight group-hover:text-yellow-400 transition-colors uppercase italic">{item.title}</h5>
                  <p className="text-[10px] font-bold text-gray-400 flex items-center gap-2 uppercase tracking-[0.2em] mb-4"><MapPin className="w-3 h-3" /> {item.location} • {item.budget}</p>
                  <Button size="sm" className="w-full bg-white/10 hover:bg-yellow-500 hover:text-black font-black text-[10px] uppercase tracking-widest rounded-xl transition-all border border-white/10">View Assignment</Button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-400 p-8 rounded-[2.5rem] shadow-xl text-black space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-[50px] rounded-full" />
            <div className="relative z-10">
              <h4 className="font-black text-2xl tracking-tighter leading-none italic uppercase">Upgrade Command</h4>
              <p className="font-bold text-sm leading-relaxed text-black/70">Unlock automated bid intelligence and enterprise-grade reporting modules today.</p>
              <Button className="mt-4 w-full bg-black text-white font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-black/90 h-12 shadow-2xl">Elite Upgrade</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal Redesign */}
      <Dialog open={isDetailModalOpen} onOpenChange={setIsDetailModalOpen}>
        <DialogContent className="sm:max-w-[750px] p-0 overflow-hidden bg-white dark:bg-[#0f1115] border-none shadow-[0_0_100px_rgba(0,0,0,0.4)]">
          {selectedProject && (
            <div className="flex flex-col">
              <div className="h-48 relative overflow-hidden bg-gray-900 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent z-10 opacity-60" />
                <TrendingUp size={100} className="text-white/5 absolute -bottom-10 right-10" />

                <div className="relative z-20 text-center space-y-3">
                  <Badge className="bg-yellow-500 text-black font-black uppercase text-[10px] tracking-[0.2em] px-4">Terminal: {selectedProject.status.toUpperCase()}</Badge>
                  <h2 className="text-4xl font-black tracking-tighter text-white leading-none uppercase italic">{selectedProject.name}</h2>
                </div>
              </div>

              <div className="p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/5">
                      <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 italic">Intelligence Overview</p>
                      <p className="text-gray-600 dark:text-gray-300 font-bold leading-relaxed">
                        This project is currently manifesting high performance signals. All sub-terminal coordination is within 5% of targeted deviation.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5">
                        <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Fiscal Depth</p>
                        <p className="font-black text-lg text-gray-900 dark:text-white font-mono">{selectedProject.budget}</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5">
                        <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Portfolio Slot</p>
                        <p className="font-black text-lg text-gray-900 dark:text-white">{selectedProject.completion}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 rounded-3xl bg-black text-white shadow-2xl space-y-4">
                      <p className="text-[10px] font-black text-yellow-500 uppercase tracking-widest italic">Action Hierarchy</p>
                      <div className="space-y-2">
                        <Button className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-black font-black uppercase text-[10px] tracking-[0.2em] rounded-xl shadow-lg shadow-yellow-400/20" onClick={() => navigate('/gc-dashboard/my-projects')}>
                          Manage Deployment
                        </Button>
                        <Button variant="outline" className="w-full h-12 border-white/10 text-white hover:bg-white/5 font-black uppercase text-[10px] tracking-[0.2em] rounded-xl" onClick={() => navigate('/gc-dashboard/communications')}>
                          Signal Team
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-400 border-t border-gray-100 dark:border-white/5 pt-6">
                      <p className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-green-500" /> Compliance Secure</p>
                      <p className="flex items-center gap-1.5"><Zap size={14} className="text-yellow-500" /> Priority Signal</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-10 py-6 bg-gray-50 dark:bg-black/40 flex items-center justify-between">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Operational Pulse Verified</p>
                <Button variant="ghost" className="font-black text-[10px] uppercase text-gray-400 tracking-widest" onClick={() => setIsDetailModalOpen(false)}>Exit Console</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CleanOverview;
