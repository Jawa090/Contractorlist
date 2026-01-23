import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog';
import {
  Search,
  MapPin,
  Filter,
  Building2,
  Calendar,
  ArrowUpRight,
  DollarSign,
  Briefcase,
  Star,
  Zap,
  List as ListIcon,
  Gavel,
  Clock,
  FileText,
  Users,
  Grid3x3,
  X,
  Phone,
  Mail,
  Square,
  Ruler,
  HardHat,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Compass,
  Layers,
  MoreHorizontal
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const ProjectDiscovery = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [locationSearch, setLocationSearch] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('austin');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedBudgetRange, setSelectedBudgetRange] = useState<string[]>([]);
  const [selectedTrade, setSelectedTrade] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'table' | 'card'>('card');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showBidModal, setShowBidModal] = useState(false);
  const [bidAmount, setBidAmount] = useState('');
  const [bidDuration, setBidDuration] = useState('');
  const [bidProposal, setBidProposal] = useState('');

  const projects = [
    {
      id: 1,
      name: 'Downtown Commercial Plaza Renovation',
      location: 'Austin, TX',
      zipCode: '78701',
      distance: '2.4 mi',
      budget: '$2.4M - $3.1M',
      budgetMin: 2400000,
      budgetMax: 3100000,
      type: 'Commercial',
      posted: '2 days ago',
      deadline: 'Oct 30, 2024',
      matchScore: 94,
      isHot: true,
      tags: ['Renovation', 'Electrical', 'HVAC'],
      trade: ['Electrical', 'HVAC', 'General Construction'],
      description: 'Complete renovation of 3-story commercial plaza including new electrical systems, HVAC overhaul, and exterior facade updates. Project requires GC with experience in commercial renovations.',
      owner: 'Metro Properties LLC',
      ownerEmail: 'contact@metroproperties.com',
      ownerPhone: '(512) 555-0100',
      sqft: '45,000',
      duration: '12-18 months',
      status: 'Bidding',
      requirements: ['Commercial license', '5+ years experience', 'Bonding capacity $3M+'],
      documents: ['Project Plans.pdf', 'Specifications.pdf', 'Bid Package.zip'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      name: 'Oak Ridge Medical Center Annex',
      location: 'Round Rock, TX',
      zipCode: '78681',
      distance: '15 mi',
      budget: '$8.5M - $10M',
      budgetMin: 8500000,
      budgetMax: 10000000,
      type: 'Healthcare',
      posted: '5 hours ago',
      deadline: 'Nov 15, 2024',
      matchScore: 88,
      isHot: false,
      tags: ['New Construction', 'Healthcare'],
      trade: ['General Construction', 'Plumbing', 'Electrical'],
      description: 'New construction of a 20,000 sq ft medical annex. Requires specialized healthcare construction experience and medical gas certification.',
      owner: 'Oak Ridge Health',
      ownerEmail: 'facilities@oakridge.org',
      ownerPhone: '(512) 555-0250',
      sqft: '20,000',
      duration: '18 months',
      status: 'Open',
      requirements: ['Healthcare construction certification', 'Safety record < 0.8 EMR'],
      documents: ['Schematics.pdf'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 3,
      name: 'Residential Complex Phase 2',
      location: 'San Marcos, TX',
      zipCode: '78666',
      distance: '30 mi',
      budget: '$12M - $15M',
      budgetMin: 12000000,
      budgetMax: 15000000,
      type: 'Multi-Family',
      posted: '1 week ago',
      deadline: 'Nov 01, 2024',
      matchScore: 76,
      isHot: true,
      tags: ['New Construction', 'Residential'],
      trade: ['General Construction', 'Concrete', 'Framing'],
      description: 'Phase 2 of Riverside Apartments. 4 buildings, 120 units total. Wood frame construction on slab on grade.',
      owner: 'Riverside Development',
      ownerEmail: 'bids@riverside.com',
      sqft: '145,000',
      duration: '24 months',
      status: 'Bidding',
      requirements: ['Multi-family experience', 'Bonding capacity $15M+'],
      documents: [],
      image: 'https://images.unsplash.com/photo-1448630321823-8cd7f4289fe2?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const projectTypes = ['Commercial', 'Residential', 'Industrial', 'Healthcare', 'Educational', 'Multi-Family', 'Government'];
  const budgetRanges = [
    { label: '< $100k', value: '0-100000' },
    { label: '$100k - $500k', value: '100000-500000' },
    { label: '$500k - $1M', value: '500000-1000000' },
    { label: '$1M - $5M', value: '1000000-5000000' },
    { label: '$5M+', value: '5000000+' }
  ];
  const tradeCategories = ['General Construction', 'Electrical', 'Plumbing', 'HVAC', 'Concrete', 'Masonry', 'Roofing', 'Flooring', 'Painting', 'Landscaping'];

  const filteredProjects = projects.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(p.type);
    const matchesLocation = locationSearch === '' || p.location.toLowerCase().includes(locationSearch.toLowerCase());

    return matchesSearch && matchesType && matchesLocation;
  });

  const handleViewDetails = (project: any) => {
    setSelectedProject(project);
    setShowDetailsModal(true);
  };

  const handleAddBid = (project: any) => {
    setSelectedProject(project);
    setShowBidModal(true);
  };

  const submitBid = () => {
    toast({
      title: "Bid Submitted Successfully",
      description: `Your bid of $${parseFloat(bidAmount).toLocaleString()} has been submitted for ${selectedProject?.name}.`,
    });
    setShowBidModal(false);
    setBidAmount('');
    setBidDuration('');
    setBidProposal('');
  };

  return (
    <div className="flex h-full w-full flex-col bg-white dark:bg-[#0f1115] text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden font-sans">

      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none opacity-50">
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-yellow-400/10 dark:bg-yellow-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-blue-400/5 dark:bg-blue-600/5 blur-[100px] rounded-full" />
      </div>

      {/* Header & Search Banner */}
      <div className="relative bg-gray-50 dark:bg-[#1c1e24] border-b border-gray-200 dark:border-white/5 px-8 py-10 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-yellow-400 text-black shadow-lg shadow-yellow-400/20">
                  <Compass className="w-5 h-5 animate-spin-slow" />
                </div>
                <Badge variant="outline" className="border-yellow-500/30 text-yellow-600 dark:text-yellow-500 font-black uppercase tracking-widest text-[10px] px-3">Live Feed: 42 New Projects Today</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 dark:text-white leading-[0.9] mb-4">
                PROJECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">DISCOVERY</span>
              </h1>
              <p className="text-gray-500 dark:text-gray-400 font-medium max-w-xl text-lg">
                Unlock high-value opportunities in your area. Our AI-powered discovery engine matches you with projects that fit your capacity and expertise.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="bg-white dark:bg-black/20 p-5 rounded-3xl border border-gray-200 dark:border-white/5 shadow-xl text-center min-w-[140px]">
                <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Total Market Value</p>
                <p className="text-3xl font-black text-gray-900 dark:text-white">$4.2B</p>
              </div>
              <div className="bg-white dark:bg-black/20 p-5 rounded-3xl border border-gray-200 dark:border-white/5 shadow-xl text-center min-w-[140px]">
                <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Active Tenders</p>
                <p className="text-3xl font-black text-yellow-500">1.2K</p>
              </div>
            </div>
          </div>

          {/* Unified Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 p-2 bg-white dark:bg-black/40 rounded-[2rem] border border-gray-200 dark:border-white/5 shadow-2xl backdrop-blur-xl">
            <div className="flex-1 relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 w-5 h-5" />
              <Input
                placeholder="Keywords (e.g. 'Renovation', 'Commercial', 'Steel')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-14 h-16 border-none bg-transparent text-lg focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-700"
              />
            </div>
            <div className="hidden md:block w-[1px] h-10 bg-gray-200 dark:bg-white/10 self-center" />
            <div className="w-full md:w-[280px] relative">
              <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 w-5 h-5" />
              <Input
                placeholder="Search Location"
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
                className="pl-14 h-16 border-none bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-700 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Button className="h-16 px-12 bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-400 text-black font-black uppercase text-sm tracking-tighter rounded-[1.5rem] shadow-xl shadow-yellow-500/20 active:scale-95 transition-all">
              Refresh Pulse
            </Button>
          </div>
        </div>
      </div>

      {/* Main Grid View */}
      <div className="flex-1 flex overflow-hidden relative z-10">
        {/* Left Filters - Slimmer Premium Version */}
        <aside className="hidden xl:flex w-80 flex-col border-r border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-black/20 overflow-y-auto p-8 custom-scrollbar">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black tracking-tight">FILTERS</h3>
            <button
              onClick={() => { setSelectedTypes([]); setSelectedBudgetRange([]); setSelectedTrade([]); }}
              className="text-[10px] font-black uppercase text-yellow-600 dark:text-yellow-500 hover:underline"
            >
              Reset
            </button>
          </div>

          <div className="space-y-10">
            <div>
              <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 block underline decoration-yellow-500/30 underline-offset-4">Project Categories</Label>
              <div className="space-y-3">
                {projectTypes.map(type => (
                  <div key={type} className="flex items-center group cursor-pointer" onClick={() => {
                    setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
                  }}>
                    <div className={cn(
                      "w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200 mr-3",
                      selectedTypes.includes(type) ? "bg-yellow-500 border-yellow-500 text-black" : "border-gray-300 dark:border-white/10 group-hover:border-yellow-400"
                    )}>
                      {selectedTypes.includes(type) && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                    <span className={cn("text-xs font-bold transition-all", selectedTypes.includes(type) ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400 group-hover:pl-1")}>{type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 block underline decoration-yellow-500/30 underline-offset-4">Financial Class</Label>
              <div className="space-y-3">
                {budgetRanges.map(range => (
                  <div key={range.value} className="flex items-center group cursor-pointer">
                    <div className="w-5 h-5 rounded-md border border-gray-300 dark:border-white/10 group-hover:border-yellow-400 mr-3" />
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400 group-hover:pl-1 transition-all">{range.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 block underline decoration-yellow-500/30 underline-offset-4">Compliance Tiers</Label>
              <div className="space-y-3">
                {['Public Works Only', 'Union Signatory', 'HUB / Minority Owned'].map(tier => (
                  <div key={tier} className="flex items-center group cursor-pointer">
                    <div className="w-5 h-5 rounded-md border border-gray-300 dark:border-white/10 group-hover:border-yellow-400 mr-3" />
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400 group-hover:pl-1 transition-all">{tier}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Middle Feed */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold text-gray-500">Trending in <span className="text-gray-900 dark:text-white underline decoration-yellow-500 decoration-2 underline-offset-4">{locationSearch || 'Central Texas'}</span></span>
              </div>

              <div className="flex items-center bg-gray-100 dark:bg-black/40 p-1.5 rounded-2xl border border-gray-200 dark:border-white/5">
                <button onClick={() => setViewMode('card')} className={cn("p-2 rounded-xl transition-all", viewMode === 'card' ? "bg-white dark:bg-[#1c1e24] text-black dark:text-white shadow-xl" : "text-gray-400 hover:text-black dark:hover:text-white")}>
                  <Grid3x3 className="w-4 h-4" />
                </button>
                <button onClick={() => setViewMode('table')} className={cn("p-2 rounded-xl transition-all", viewMode === 'table' ? "bg-white dark:bg-[#1c1e24] text-black dark:text-white shadow-xl" : "text-gray-400 hover:text-black dark:hover:text-white")}>
                  <ListIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            {filteredProjects.length > 0 ? (
              <div className={cn("grid gap-8", viewMode === 'card' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1")}>
                {filteredProjects.map((project) => (
                  <Card
                    key={project.id}
                    className={cn(
                      "group relative overflow-hidden bg-white dark:bg-[#1c1e24] border border-gray-200 dark:border-white/5 transition-all duration-500 hover:scale-[1.02] cursor-pointer rounded-[2.5rem] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] cursor-pointer",
                      viewMode === 'table' ? "flex flex-row items-center p-2 rounded-3xl" : ""
                    )}
                    onClick={() => handleViewDetails(project)}
                  >
                    {/* Image Header for Cards */}
                    {viewMode === 'card' && (
                      <div className="h-48 relative overflow-hidden">
                        <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                        <div className="absolute top-4 left-4 flex gap-2">
                          {project.isHot && (
                            <Badge className="bg-red-500 text-white font-black text-[10px] uppercase tracking-tighter border-none px-2 shadow-lg">HOT</Badge>
                          )}
                          <Badge className="bg-yellow-400 text-black font-black text-[10px] uppercase tracking-tighter border-none px-2 shadow-lg">{project.type}</Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                          <div className="flex items-center gap-1.5">
                            <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white ring-2 ring-white/20">
                              <Star className="w-4 h-4 fill-white" />
                            </div>
                            <span className="text-white font-black text-lg">{project.matchScore}% Match</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <CardContent className={cn("p-8", viewMode === 'table' ? "flex-1 py-4" : "")}>
                      <div className="flex flex-col h-full">
                        <div className="mb-6 flex-1">
                          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-yellow-600 dark:text-yellow-500 tracking-widest mb-2">
                            <Layers className="w-3.5 h-3.5" />
                            ID: #DISC-{project.id}0922
                          </div>
                          <h4 className="text-xl font-black text-gray-900 dark:text-white leading-tight mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                            {project.name}
                          </h4>
                          <div className="flex items-center gap-3 text-xs text-gray-400 font-bold">
                            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {project.location}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {project.posted}</span>
                          </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-white/5">
                          <div className="flex justify-between items-end">
                            <div>
                              <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Target Budget</p>
                              <p className="text-lg font-black font-mono">{project.budget}</p>
                            </div>
                            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-400 hover:text-black dark:hover:text-white">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button className="flex-1 bg-black dark:bg-yellow-500 text-white dark:text-black font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-yellow-500 dark:hover:bg-yellow-400 transition-all h-10 shadow-lg" onClick={(e) => { e.stopPropagation(); handleAddBid(project) }}>
                              Submit Intent
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-32 bg-gray-50/50 dark:bg-black/20 rounded-[3rem] border-4 border-dashed border-gray-200 dark:border-white/5">
                <AlertCircle className="w-16 h-16 text-gray-200 dark:text-white/5 mb-6" />
                <h3 className="text-2xl font-black tracking-tight mb-2">Expanding Feed...</h3>
                <p className="text-gray-500 font-bold max-w-xs text-center">We couldn't find matches for this specific query. Try broadening your location or budget range.</p>
                <Button variant="link" onClick={() => { setSearchQuery(''); setSelectedTypes([]); }} className="mt-4 text-yellow-500 font-black uppercase tracking-widest text-xs">Clear Signals</Button>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Detail Modal Redesign */}
      <Dialog open={showDetailsModal} onOpenChange={setShowDetailsModal}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-white dark:bg-[#0f1115] border-none shadow-2xl">
          {selectedProject && (
            <div className="flex flex-col">
              <div className="h-64 relative overflow-hidden bg-gray-900">
                <img src={selectedProject.image} className="w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] to-transparent" />
                <div className="absolute bottom-8 left-10 right-10 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-yellow-500 text-black font-black uppercase text-[10px] tracking-widest border-none">Active Bidding</Badge>
                    <span className="flex items-center gap-1.5 text-yellow-500 font-black">
                      <Star className="w-4 h-4 fill-current" /> {selectedProject.matchScore}% Match
                    </span>
                  </div>
                  <h2 className="text-4xl font-black text-white tracking-tighter leading-none">{selectedProject.name}</h2>
                </div>
              </div>

              <div className="p-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2 space-y-8">
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-gray-50 dark:bg-white/5 px-6 py-4 rounded-3xl border border-gray-100 dark:border-white/5 min-w-[150px]">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Budget Allocation</p>
                        <p className="text-xl font-black text-gray-900 dark:text-white font-mono">{selectedProject.budget}</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-white/5 px-6 py-4 rounded-3xl border border-gray-100 dark:border-white/5 min-w-[150px]">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Project Scale</p>
                        <p className="text-xl font-black text-gray-900 dark:text-white font-mono">{selectedProject.sqft} SQFT</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-white/5 px-6 py-4 rounded-3xl border border-gray-100 dark:border-white/5 min-w-[150px]">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Timeline</p>
                        <p className="text-xl font-black text-gray-900 dark:text-white font-mono">{selectedProject.duration}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-black tracking-tight">Scope of Work</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium bg-gray-50 dark:bg-black/20 p-6 rounded-[2rem] border border-gray-100 dark:border-white/5">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-black tracking-tight">Project Stakeholders</h4>
                      <div className="flex items-center gap-6 bg-white dark:bg-white/5 p-6 rounded-[2rem] border border-gray-100 dark:border-white/5">
                        <div className="h-16 w-16 rounded-2xl bg-yellow-400 text-black flex items-center justify-center font-black text-xl">
                          {selectedProject.owner.charAt(0)}
                        </div>
                        <div>
                          <p className="font-black text-xl leading-none mb-2">{selectedProject.owner}</p>
                          <div className="flex gap-4 text-xs font-bold text-gray-400">
                            <span className="flex items-center gap-1.5 hover:text-yellow-500 cursor-pointer"><Mail className="w-4 h-4" /> Email Owner</span>
                            <span className="flex items-center gap-1.5 hover:text-yellow-500 cursor-pointer"><Phone className="w-4 h-4" /> Call Request</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="p-8 rounded-[2rem] bg-black text-white space-y-6 shadow-2xl">
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Submission Status</h4>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                          <span className="text-xs font-bold">Proposal Deadline</span>
                          <Badge className="bg-yellow-500 text-black border-none">{selectedProject.deadline}</Badge>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <Button className="w-full h-14 bg-yellow-400 hover:bg-yellow-500 text-black font-black uppercase text-xs tracking-widest rounded-2xl" onClick={() => { setShowDetailsModal(false); handleAddBid(selectedProject); }}>Add Bid Package</Button>
                        <Button variant="outline" className="w-full h-14 border-white/10 text-white hover:bg-white/5 font-black uppercase text-xs tracking-widest rounded-2xl">Save for Later</Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 underline decoration-yellow-500 underline-offset-4">Critical Requirements</h4>
                      <div className="space-y-3">
                        {selectedProject.requirements.map((req: any, i: number) => (
                          <div key={i} className="flex gap-3 text-sm font-bold items-start leading-tight">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-gray-600 dark:text-gray-300">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-10 py-6 bg-gray-50 dark:bg-black/40 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                <p className="text-xs font-bold text-gray-400">Security Clearance: <span className="text-green-500">LEVEL 1 VERIFIED</span></p>
                <Button variant="ghost" className="font-black uppercase text-[10px] tracking-widest text-gray-400" onClick={() => setShowDetailsModal(false)}>Close Inspector</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDiscovery;
