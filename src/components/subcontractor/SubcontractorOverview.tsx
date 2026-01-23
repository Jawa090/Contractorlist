import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import {
  TrendingUp,
  Clock,
  Eye,
  DollarSign,
  Plus,
  MapPin,
  Calendar,
  Building,
  Star,
  Bot,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Users,
  FileText,
  BarChart3,
  Target,
  Zap,
  Award,
  Activity,
  Filter,
  ExternalLink,
  Timer,
  AlertCircle,
  Briefcase,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Layers,
  CheckCircle2,
  ShieldCheck,
  Building2,
  MessageSquare,
  SearchCode
} from 'lucide-react';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SubcontractorOverview = () => {
  const navigate = useNavigate();
  const [isLive, setIsLive] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [activeTab, setActiveTab] = useState('All');

  // Real-time data state
  const [realTimeStats, setRealTimeStats] = useState({
    winRate: 24,
    activeBids: 12,
    profileViews: 1240,
    revenueYTD: 450000
  });

  // Real-time updates simulation
  useEffect(() => {
    if (!isLive) return;
    const interval = setInterval(() => {
      setRealTimeStats(prev => ({
        winRate: Math.min(30, prev.winRate + Math.random() * 0.1),
        activeBids: prev.activeBids + (Math.random() > 0.8 ? 1 : 0),
        profileViews: prev.profileViews + Math.floor(Math.random() * 3),
        revenueYTD: prev.revenueYTD + Math.floor(Math.random() * 500)
      }));
      setLastUpdate(new Date());
    }, 5000);
    return () => clearInterval(interval);
  }, [isLive]);

  const stats = [
    {
      title: 'Win Rate',
      value: `${realTimeStats.winRate.toFixed(1)}%`,
      subtext: 'SIGNAL STRENGTH: HIGH',
      icon: TrendingUp,
      progress: 75,
      color: '#EAB308', // Yellow
      textColor: 'text-yellow-400'
    },
    {
      title: 'Active Bids',
      value: realTimeStats.activeBids.toString(),
      subtext: 'PENDING TRANSMISSIONS',
      icon: Clock,
      progress: 45,
      color: '#3b82f6', // Blue
      textColor: 'text-blue-400'
    },
    {
      title: 'Profile Views',
      value: (realTimeStats.profileViews / 1000).toFixed(1) + 'k',
      subtext: 'INCOMING SIGNALS',
      icon: Eye,
      progress: 88,
      color: '#10b981', // Emerald
      textColor: 'text-emerald-400'
    },
    {
      title: 'Revenue YTD',
      value: `$${(realTimeStats.revenueYTD / 1000).toFixed(0)}k`,
      subtext: 'CAPITAL SECURED',
      icon: DollarSign,
      progress: 62,
      color: '#a855f7', // Purple
      textColor: 'text-purple-400'
    }
  ];

  const projects = [
    {
      id: 'SIG-9022',
      title: 'Downtown Medical Center Expansion',
      category: 'Commercial',
      trade: 'HVAC',
      location: 'Austin, TX',
      gc: 'Turner Construction',
      budget: '$2.4M - $3M',
      dueDate: 'Oct 24, 2024',
      aiMatch: 98,
      status: 'hot',
      urgency: 'high'
    },
    {
      id: 'SIG-4410',
      title: 'Riverside High School Renovation',
      category: 'Public Works',
      trade: 'HVAC',
      location: 'San Marcos, TX',
      gc: 'Skanska',
      budget: '$850k',
      dueDate: 'Oct 28, 2024',
      aiMatch: 92,
      status: 'new',
      urgency: 'medium'
    },
    {
      id: 'SIG-3190',
      title: 'The Aurora Apartments Phase 2',
      category: 'Multi-Family',
      trade: 'Plumbing',
      location: 'Austin, TX',
      gc: 'D.R. Horton',
      budget: '$1.2M',
      dueDate: 'Nov 02, 2024',
      aiMatch: 88,
      status: 'trending',
      urgency: 'low'
    }
  ];

  return (
    <div className="flex h-full w-full flex-col bg-white dark:bg-[#0f1115] text-gray-900 dark:text-white transition-all duration-500 overflow-hidden font-sans">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-yellow-400/10 dark:bg-yellow-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-400/5 dark:bg-blue-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="flex-1 overflow-y-auto px-8 py-10 relative z-10 custom-scrollbar">
        <div className="max-w-7xl mx-auto space-y-10">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-yellow-400 text-black font-black uppercase text-[10px] tracking-widest border-none px-3">Sub Terminal</Badge>
                <div className="flex items-center gap-2 px-3 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-widest">MISSION STATUS: OPERATIONAL</span>
                </div>
              </div>
              <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white leading-none">
                GOOD MORNING, <span className="text-yellow-600 dark:text-yellow-500">PARTNER</span>
              </h1>
              <p className="text-gray-500 dark:text-gray-400 font-bold text-sm mt-3 max-w-lg">Execute your bids and stabilize your revenue stream. Monitoring 5 high-priority mission matches.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="h-12 px-6 border-gray-200 dark:border-white/10 dark:bg-black/20 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all">
                <SearchCode className="w-4 h-4 mr-2" /> Find Missions
              </Button>
              <Button className="h-12 px-8 bg-black dark:bg-yellow-500 text-white dark:text-black font-black uppercase text-xs tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl shadow-yellow-500/10" onClick={() => navigate('/subcontractor-dashboard/find-projects')}>
                <Plus className="w-4 h-4 mr-2" /> New Proposal
              </Button>
            </div>
          </div>

          {/* Core Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-[#1c1e24] border border-gray-200 dark:border-white/5 rounded-[2rem] p-6 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-gray-50 dark:bg-black/30 border border-gray-100 dark:border-white/5 shadow-sm group-hover:bg-yellow-400 transition-colors">
                    <stat.icon className="w-5 h-5 text-gray-600 dark:text-yellow-500 group-hover:text-black" />
                  </div>
                  <div className="w-12 h-12">
                    <CircularProgressbar
                      value={stat.progress}
                      styles={buildStyles({
                        pathColor: stat.progress > 0 ? stat.color : '#e2e8f0',
                        trailColor: 'transparent',
                        strokeLinecap: 'round'
                      })}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.title}</p>
                  <p className="text-3xl font-black tracking-tight mb-2">{stat.value}</p>
                  <div className="flex items-center gap-2">
                    <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter", index % 2 === 0 ? "bg-yellow-400/10 text-yellow-600" : "bg-blue-400/10 text-blue-600")}>
                      {stat.subtext}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="absolute bottom-6 right-6 w-5 h-5 opacity-0 group-hover:opacity-40 transition-opacity" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Target Signals Area */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black tracking-tight flex items-center gap-3 uppercase">
                  <Target className="w-6 h-6 text-yellow-500" />
                  Target Signals
                </h3>
                <div className="flex gap-2 bg-gray-100 dark:bg-black/30 p-1 rounded-xl border border-gray-200 dark:border-white/5">
                  {['All', 'Hot', 'Near Me'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={cn("px-4 py-1.5 text-[10px] font-black uppercase rounded-lg transition-all", activeTab === tab ? "bg-white dark:bg-[#1c1e24] shadow-sm text-yellow-600" : "text-gray-400 hover:text-black")}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {projects.map((prj) => (
                  <div
                    key={prj.id}
                    className="group bg-white dark:bg-[#1c1e24] border border-gray-200 dark:border-white/5 rounded-3xl p-6 transition-all hover:bg-gray-50 dark:hover:bg-white/[0.02] hover:shadow-xl cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-50 dark:bg-black/20 text-yellow-500 font-bold border border-gray-100 dark:border-white/5">
                        <span className="text-[10px] font-black">{prj.trade.toUpperCase().slice(0, 3)}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] font-black text-yellow-600 uppercase tracking-widest">{prj.id}</span>
                              <span className="text-gray-300 dark:text-gray-700">•</span>
                              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{prj.gc}</span>
                            </div>
                            <h4 className="text-xl font-bold tracking-tight mb-2 group-hover:text-yellow-600 transition-colors uppercase">{prj.title}</h4>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-black text-gray-900 dark:text-white font-mono">{prj.budget}</p>
                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Estimated Value</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-100 dark:border-white/5">
                          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-tighter">
                            <MapPin className="w-3.5 h-3.5" /> {prj.location}
                          </div>
                          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-tighter">
                            <Clock className="w-3.5 h-3.5" /> Due {prj.dueDate}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between mb-1">
                              <span className="text-[9px] font-black uppercase tracking-widest">Match Rating</span>
                              <span className="text-[9px] font-black text-yellow-600">{prj.aiMatch}%</span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-black/20 h-1 rounded-full overflow-hidden">
                              <div className="bg-yellow-400 h-full transition-all duration-1000" style={{ width: `${prj.aiMatch}%` }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar: AI Co-Pilot Terminal */}
            <div className="space-y-6">
              <h3 className="text-xl font-black tracking-tight flex items-center gap-3 uppercase">
                <Bot className="w-6 h-6 text-yellow-500" />
                AI CO-PILOT
              </h3>

              <div className="bg-black text-white rounded-[2.5rem] p-8 overflow-hidden relative group border border-white/5 shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 blur-3xl rounded-full" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-yellow-400 rounded-lg">
                      <Lightbulb className="w-5 h-5 text-black" />
                    </div>
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase">Tactical Update</span>
                  </div>

                  <p className="text-sm font-bold leading-relaxed mb-6 text-gray-300">
                    Your win rate on <span className="text-yellow-400">Commercial HVAC</span> projects in Austin is up 15%. I've identified 3 high-value target signals for immediate transmission.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Insurance Verified</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <span className="text-[10px] font-black uppercase tracking-widest">3 Prime Proposals</span>
                    </div>
                  </div>

                  <Button className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-black font-black uppercase text-[10px] tracking-widest rounded-xl shadow-xl shadow-yellow-500/20">
                    REVIEW OPPORTUNITIES
                  </Button>
                </div>
              </div>

              {/* Performance Logs */}
              <div className="bg-white dark:bg-[#1c1e24] border border-gray-200 dark:border-white/5 rounded-[2.5rem] p-8 space-y-6">
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">PERFORMANCE LOGS</h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-500">Rating Stream</span>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-sm font-black tracking-tighter">4.9 / 5.0</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-500">Verified Reviews</span>
                    <span className="text-sm font-black tracking-tighter">156 OPS</span>
                  </div>
                  <div className="pt-4 border-t border-gray-100 dark:border-white/5 mt-4">
                    <div className="flex justify-between items-end mb-4">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Win Radius</span>
                      <span className="text-xs font-black text-green-500">+12% MONTHLY</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-16">
                      {[40, 65, 30, 85, 50, 95, 45].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-yellow-400 dark:bg-yellow-500/50 rounded-sm hover:bg-yellow-500 transition-colors"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Protocols */}
              <div className="grid grid-cols-2 gap-3 pb-10">
                <Button variant="outline" className="h-20 flex-col gap-2 rounded-2xl border-gray-200 dark:border-white/5 hover:bg-yellow-400/5 hover:border-yellow-400/20 group">
                  <FileText className="w-5 h-5 text-gray-400 group-hover:text-yellow-500" />
                  <span className="text-[9px] font-black uppercase tracking-widest">Bids</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 rounded-2xl border-gray-200 dark:border-white/5 hover:bg-yellow-400/5 hover:border-yellow-400/20 group">
                  <MessageSquare className="w-5 h-5 text-gray-400 group-hover:text-yellow-500" />
                  <span className="text-[9px] font-black uppercase tracking-widest">Comms</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubcontractorOverview;