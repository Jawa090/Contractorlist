import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  MapPin,
  Building2,
  Star,
  List as ListIcon,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Layers,
  MoreHorizontal,
  Globe,
  Navigation,
  Hammer,
  RotateCcw,
  Clock,
  Briefcase,
  DollarSign,
  Phone,
  Mail,
  Calendar,
  ShieldCheck,
  Tag,
  Bookmark,
  FileSearch,
  ChevronDown
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const ProjectDiscovery = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [locationSearch, setLocationSearch] = useState('');
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [selectedProjectTypes, setSelectedProjectTypes] = useState<string[]>([]);
  const [maxMileage, setMaxMileage] = useState<string>('100');
  const [selectedTrades, setSelectedTrades] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [nigpCode, setNigpCode] = useState('');
  const [viewMode, setViewMode] = useState<'table' | 'card'>('card');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showAllTrades, setShowAllTrades] = useState(false);
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [minSize, setMinSize] = useState('');
  const [maxSize, setMaxSize] = useState('');
  const [dueWithin, setDueWithin] = useState('any');
  const [multipleKeywords, setMultipleKeywords] = useState('');

  // Mock projects with industry-standard data points (PlanHub inspired)
  const [projects] = useState([
    {
      id: 1,
      name: 'Downtown Commercial Plaza Renovation',
      location: 'Austin, TX',
      distanceValue: 2.4,
      distance: '2.4 mi',
      budget: '$2.4M - $3.1M',
      category: 'Commercial',
      projectType: 'Renovation',
      source: 'PlanHub',
      posted: '2 days ago',
      deadline: '2026-02-15',
      nigpCode: '910-00',
      matchScore: 98,
      isProfileMatch: true,
      trades: ['Electrical', 'HVAC', 'General Construction'],
      description: 'Complete renovation of 3-story commercial plaza. Project requires GC with experience in commercial renovations. Interior fit-out and exterior facade.',
      owner: 'Metro Properties LLC',
      sqft: '45,000',
      duration: '12-18 months',
      status: 'Bidding'
    },
    {
      id: 2,
      name: 'Oak Ridge Medical Center Annex',
      location: 'Round Rock, TX',
      distanceValue: 15,
      distance: '15 mi',
      budget: '$8.5M - $10M',
      category: 'Healthcare',
      projectType: 'New Project',
      source: 'Dodge Construction',
      posted: '5 hours ago',
      deadline: '2026-03-01',
      nigpCode: '906-00',
      matchScore: 88,
      isProfileMatch: true,
      trades: ['General Construction', 'Plumbing', 'Electrical'],
      description: 'New construction of a 20,000 sq ft medical annex. Requires specialized healthcare construction experience and medical gas line installation.',
      owner: 'Oak Ridge Health',
      sqft: '20,000',
      duration: '18 months',
      status: 'Open'
    },
    {
      id: 3,
      name: 'Residential Complex Phase 2',
      location: 'San Marcos, TX',
      distanceValue: 30,
      distance: '30 mi',
      budget: '$12M - $15M',
      category: 'Multi-Family',
      projectType: 'New Project',
      source: 'PlanHub',
      posted: '1 week ago',
      deadline: '2026-02-10',
      nigpCode: '909-00',
      matchScore: 76,
      isProfileMatch: false,
      trades: ['General Construction', 'Concrete', 'Framing'],
      description: 'Phase 2 of Riverside Apartments. 4 buildings, 120 units total. Wood frame construction on slab on grade.',
      owner: 'Riverside Development',
      sqft: '145,000',
      duration: '24 months',
      status: 'Bidding'
    },
    {
      id: 4,
      name: 'Public Library Modernization',
      location: 'Austin, TX',
      distanceValue: 4.8,
      distance: '4.8 mi',
      budget: '$5.5M',
      category: 'Government',
      projectType: 'Renovation',
      source: 'Dodge Construction',
      posted: 'Yesterday',
      deadline: '2026-02-28',
      nigpCode: '910-65',
      matchScore: 94,
      isProfileMatch: true,
      trades: ['Asbestos Abatement', 'IT Infrastructure', 'Interior Finishes'],
      description: 'Public works project for city library. Requires strict adherence to public procurement guidelines and prevailing wage.',
      owner: 'City of Austin',
      sqft: '32,000',
      duration: '12 months',
      status: 'Open'
    }
  ]);

  const projectCategories = ['Commercial', 'Residential', 'Industrial', 'Healthcare', 'Educational', 'Multi-Family', 'Government'];
  const sources = ['PlanHub', 'Dodge Construction'];
  const projectStatuses = ['Open', 'Bidding', 'Awarded', 'Closed'];
  const mileageOptions = ['10', '25', '50', '100', '250'];
  const trades = [
    'Procurement & Contracting',
    'General Requirements',
    'Existing Conditions',
    'Concrete',
    'Masonry',
    'Metals',
    'Wood, Plastics & Composites',
    'Thermal & Moisture Protection',
    'Openings',
    'Finishes',
    'Specialties',
    'Equipment',
    'Furnishings',
    'Special Construction',
    'Conveying Equipment',
    'Fire Suppression',
    'Plumbing',
    'HVAC',
    'Integrated Automation',
    'Electrical',
    'Communications',
    'Electronic Safety & Security',
    'Earthwork',
    'Exterior Improvements',
    'Utilities',
    'Transportation',
    'Waterway & Marine',
    'Process Interconnections',
    'Material Processing',
    'Process Heating/Cooling',
    'Gas/Liquid Handling',
    'Pollution Control',
    'Electrical Power Generation'
  ];

  // Consolidated Advanced Filtering Logic
  const filteredProjects = projects
    .filter(p => {
      // 1. Header Search Phrase (OR match across title/description/trades)
      const matchesSearch = !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.trades.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      // 2. Multiple Keywords (AND match - all terms must exist somewhere)
      const keywordsList = multipleKeywords.split(',').map(k => k.trim().toLowerCase()).filter(k => k !== '');
      const matchesMultipleKeywords = keywordsList.length === 0 ||
        keywordsList.every(k =>
          p.name.toLowerCase().includes(k) ||
          p.description.toLowerCase().includes(k) ||
          p.trades.some(t => t.toLowerCase().includes(k))
        );

      // 3. Service Region
      const matchesLocation = !locationSearch || locationSearch === 'AllRegions' ||
        p.location.toLowerCase().includes(locationSearch.toLowerCase());

      // 4. NIGP Code (Prefix match)
      const matchesNigp = !nigpCode || p.nigpCode.includes(nigpCode);

      // 5. Project Category
      const matchesType = selectedProjectTypes.length === 0 || selectedProjectTypes.includes(p.category);

      // 6. Solicitation Status
      const matchesStatus = selectedStatus.length === 0 || selectedStatus.includes(p.status);

      // 7. Marketplace Source
      const matchesSource = selectedSources.length === 0 || selectedSources.includes(p.source);

      // 8. Operational Radius
      const matchesMileage = p.distanceValue <= parseInt(maxMileage);

      // 9. CSI Divisions / Trades
      const matchesTrades = selectedTrades.length === 0 || p.trades.some(t => selectedTrades.includes(t));

      // 10. Budget Range
      const getBudgetValue = (b: string) => {
        // Handle "$2.4M", "$100k", etc.
        const numeric = parseFloat(b.replace(/[^0-9.]/g, ''));
        if (isNaN(numeric)) return 0;
        if (b.toLowerCase().includes('m')) return numeric * 1000000;
        if (b.toLowerCase().includes('k')) return numeric * 1000;
        return numeric;
      };
      // For range values take the min
      const projectPrice = getBudgetValue(p.budget.split('-')[0]);
      const filterMin = minBudget ? parseFloat(minBudget) : -Infinity;
      const filterMax = maxBudget ? parseFloat(maxBudget) : Infinity;
      const matchesBudget = projectPrice >= filterMin && projectPrice <= filterMax;

      // 11. Size Range (SQFT)
      const projectSqft = parseInt(p.sqft.replace(/[^0-9]/g, '')) || 0;
      const filterMinSize = minSize ? parseInt(minSize) : -Infinity;
      const filterMaxSize = maxSize ? parseInt(maxSize) : Infinity;
      const matchesSize = projectSqft >= filterMinSize && projectSqft <= filterMaxSize;

      // 12. Bid Due Urgency
      const deadlineDate = new Date(p.deadline);
      const today = new Date();
      const diffDays = Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      const matchesUrgency = dueWithin === 'any' ||
        (dueWithin === '7' && diffDays <= 7) ||
        (dueWithin === '30' && diffDays <= 30);

      return matchesSearch && matchesMultipleKeywords && matchesLocation && matchesNigp &&
        matchesType && matchesStatus && matchesSource && matchesMileage &&
        matchesTrades && matchesBudget && matchesSize && matchesUrgency;
    })
    .sort((a, b) => {
      // Prioritize Profile Matches, then by score
      if (a.isProfileMatch && !b.isProfileMatch) return -1;
      if (!a.isProfileMatch && b.isProfileMatch) return 1;
      return b.matchScore - a.matchScore;
    });

  const toggleFilter = (item: string, state: string[], setState: (val: string[]) => void) => {
    setState(state.includes(item) ? state.filter(i => i !== item) : [...state, item]);
  };

  const handleSaveSearch = () => {
    toast({
      title: "Search Criteria Saved",
      description: "You will receive alerts for new projects matching these industry filters.",
    });
  };

  return (
    <div className="flex h-full w-full flex-col bg-white dark:bg-[#0f1115] text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden font-sans">

      {/* Re-themed Industry Search Header */}
      <div className="relative bg-gray-50/80 dark:bg-[#1c1e24]/80 border-b border-gray-200 dark:border-white/5 px-8 py-8 z-20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end gap-6">
            {/* Search Phrase */}
            <div className="flex-1 min-w-[280px] space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Search Phrase</label>
              <div className="relative">
                <Input
                  placeholder="Enter keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-11 bg-white dark:bg-black/20 border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-yellow-400 pr-10 shadow-sm"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-yellow-600 w-5 h-5 pointer-events-none" />
              </div>
            </div>


            {/* Region Dropdown */}
            <div className="w-64 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Service Region</label>
              <Select
                value={locationSearch}
                onValueChange={setLocationSearch}
              >
                <SelectTrigger className="h-11 bg-white dark:bg-black/20 border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 shadow-sm">
                  <SelectValue placeholder="Select Region" />
                </SelectTrigger>
                <SelectContent className="dark:bg-[#1c1e24] dark:border-white/10">
                  <SelectItem value="AllRegions">All Regions</SelectItem>
                  <SelectItem value="Austin">Austin, TX</SelectItem>
                  <SelectItem value="Round Rock">Round Rock, TX</SelectItem>
                  <SelectItem value="San Marcos">San Marcos, TX</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-end gap-2">
              <Button
                className="h-11 px-10 bg-yellow-400 hover:bg-yellow-500 text-black font-black uppercase text-[11px] tracking-widest rounded-xl shadow-lg shadow-yellow-400/20 transition-all"
                onClick={() => {
                  toast({
                    title: "Fetching Results",
                    description: "Updating bid feed with real-time market signals.",
                  });
                }}
              >
                Search Market
              </Button>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedProjectTypes([]);
                  setSelectedSources([]);
                  setSelectedStatus([]);
                  setSelectedTrades([]);
                  setLocationSearch('');
                  setNigpCode('');
                  setMinBudget('');
                  setMaxBudget('');
                  setMinSize('');
                  setMaxSize('');
                  setDueWithin('any');
                  setMultipleKeywords('');
                }}
                className="text-yellow-600 dark:text-yellow-500 text-[10px] font-black uppercase tracking-widest hover:underline flex items-center gap-1"
              >
                Clear Search
              </button>
            </div>

            {/* View Toggles */}
            <div className="ml-auto flex items-center self-center gap-2 bg-gray-100 dark:bg-black/20 p-1 rounded-lg border border-gray-200 dark:border-white/10">
              <Button variant="ghost" size="sm" onClick={() => setViewMode('card')} className={cn("rounded-md h-8 w-8 p-0", viewMode === 'card' ? "bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm" : "text-gray-400")}><Layers size={16} /></Button>
              <Button variant="ghost" size="sm" onClick={() => setViewMode('table')} className={cn("rounded-md h-8 w-8 p-0", viewMode === 'table' ? "bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm" : "text-gray-400")}><ListIcon size={16} /></Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden relative z-10">
        {/* Industry Advanced Filters Sidebar */}
        <aside className="hidden xl:flex w-80 flex-col border-r border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-black/10 overflow-y-auto p-6 scrollbar-hide space-y-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Advanced Filters</h3>
            <Button variant="link" size="sm" onClick={() => {
              setSelectedProjectTypes([]); setSelectedSources([]); setSelectedStatus([]);
              setSelectedTrades([]); setMaxMileage('100'); setNigpCode('');
              setMinBudget(''); setMaxBudget(''); setMinSize(''); setMaxSize('');
              setDueWithin('any'); setMultipleKeywords('');
            }} className="text-[9px] uppercase font-bold text-yellow-600">Reset Signals</Button>
          </div>

          <div className="space-y-7">
            {/* NIGP / Category Codes */}
            <div className="space-y-3 p-4 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <Label className="text-[10px] font-black uppercase tracking-widest text-gray-900 dark:text-white flex items-center gap-2">
                <Tag size={12} /> NIGP/Classification Code
              </Label>
              <Input
                placeholder="Ex: 910-00, 906-00"
                value={nigpCode}
                onChange={(e) => setNigpCode(e.target.value)}
                className="h-9 bg-white dark:bg-black/20 border-gray-200 dark:border-white/10 text-xs rounded-xl"
              />
              <p className="text-[9px] text-gray-500 italic">Standardized Procurement Codes</p>
            </div>

            {/* Keyword Search (Multiple) */}
            <div className="space-y-3">
              <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <FileSearch size={12} className="text-yellow-600" /> Multiple Key Terms
              </Label>
              <Input
                placeholder="Comma separated: retail, HVAC, hospital"
                value={multipleKeywords}
                onChange={(e) => setMultipleKeywords(e.target.value)}
                className="h-9 bg-white dark:bg-black/20 border-gray-200 dark:border-white/10 text-xs rounded-xl"
              />
            </div>

            {/* Budget Range (PlanHub centric) */}
            <div className="space-y-3">
              <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <DollarSign size={12} className="text-yellow-600" /> Project Value Range
              </Label>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  placeholder="Min $"
                  value={minBudget}
                  onChange={(e) => setMinBudget(e.target.value)}
                  className="h-9 bg-white dark:bg-black/20 border-gray-200 dark:border-white/10 text-xs rounded-xl"
                />
                <Input
                  placeholder="Max $"
                  value={maxBudget}
                  onChange={(e) => setMaxBudget(e.target.value)}
                  className="h-9 bg-white dark:bg-black/20 border-gray-200 dark:border-white/10 text-xs rounded-xl"
                />
              </div>
            </div>

            {/* Project Size Range */}
            <div className="space-y-3">
              <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <Building2 size={12} className="text-yellow-600" /> Size Range (SQFT)
              </Label>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  placeholder="Min SQFT"
                  value={minSize}
                  onChange={(e) => setMinSize(e.target.value)}
                  className="h-9 bg-white dark:bg-black/20 border-gray-200 dark:border-white/10 text-xs rounded-xl"
                />
                <Input
                  placeholder="Max SQFT"
                  value={maxSize}
                  onChange={(e) => setMaxSize(e.target.value)}
                  className="h-9 bg-white dark:bg-black/20 border-gray-200 dark:border-white/10 text-xs rounded-xl"
                />
              </div>
            </div>

            {/* Bid Urgency */}
            <div className="space-y-3">
              <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <Clock size={12} className="text-yellow-600" /> Bid Due Urgency
              </Label>
              <Select value={dueWithin} onValueChange={setDueWithin}>
                <SelectTrigger className="h-9 bg-white dark:bg-black/20 border-gray-200 dark:border-white/10 text-xs rounded-xl">
                  <SelectValue placeholder="All Timelines" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">All Timelines</SelectItem>
                  <SelectItem value="7">Due within 7 days</SelectItem>
                  <SelectItem value="30">Due within 30 days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* PlanHub Style: Proximity/Mileage */}
            <div className="space-y-3">
              <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <Navigation size={12} className="text-yellow-600" /> Operational Radius
              </Label>
              <div className="flex flex-wrap gap-1.5">
                {mileageOptions.map(m => (
                  <button
                    key={m}
                    onClick={() => setMaxMileage(m)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-[9px] font-bold border transition-all",
                      maxMileage === m ? "bg-yellow-400 border-yellow-400 text-black" : "border-gray-200 dark:border-white/5 text-gray-500 hover:border-yellow-400"
                    )}
                  >
                    {m} mi
                  </button>
                ))}
              </div>
            </div>

            {/* Status Filters */}
            <div className="space-y-3">
              <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <ShieldCheck size={12} className="text-yellow-600" /> Solictation Status
              </Label>
              <div className="grid grid-cols-2 gap-2">
                {projectStatuses.map(status => (
                  <button
                    key={status}
                    onClick={() => toggleFilter(status, selectedStatus, setSelectedStatus)}
                    className={cn(
                      "py-1.5 rounded-lg text-[9px] font-bold border transition-all",
                      selectedStatus.includes(status) ? "bg-black dark:bg-white border-black dark:border-white text-white dark:text-black" : "border-gray-200 dark:border-white/5 text-gray-500"
                    )}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Categories (PlanHub style) */}
            <div className="space-y-3">
              <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <Building2 size={12} className="text-yellow-600" /> Project Categories
              </Label>
              <div className="flex flex-wrap gap-2">
                {['Commercial', 'Residential', 'Industrial', 'Institutional', 'Infrastructure', 'Healthcare'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => toggleFilter(cat, selectedProjectTypes, setSelectedProjectTypes)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-[9px] font-bold border transition-all",
                      selectedProjectTypes.includes(cat) ? "bg-black dark:bg-white border-black dark:border-white text-white dark:text-black" : "border-gray-200 dark:border-white/5 text-gray-500"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>



            {/* Trade Specialty (PlanHub centric) */}
            <div className="space-y-3">
              <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <Hammer size={12} className="text-yellow-600" /> Trades
              </Label>
              <div className="grid grid-cols-1 gap-1">
                {(showAllTrades ? trades : trades.slice(0, 10)).map(t => (
                  <div key={t} className="flex items-center gap-2 cursor-pointer group py-1" onClick={() => toggleFilter(t, selectedTrades, setSelectedTrades)}>
                    <div className={cn("w-3.5 h-3.5 rounded border flex items-center justify-center transition-all", selectedTrades.includes(t) ? "bg-yellow-500 border-yellow-500" : "border-gray-300 dark:border-white/10 group-hover:border-yellow-400")}>
                      {selectedTrades.includes(t) && <CheckCircle2 size={10} className="text-black" />}
                    </div>
                    <span className={cn("text-[11px] font-bold transition-all", selectedTrades.includes(t) ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400 group-hover:pl-0.5")}>{t}</span>
                  </div>
                ))}
                <Button
                  variant="link"
                  size="sm"
                  onClick={(e) => { e.stopPropagation(); setShowAllTrades(!showAllTrades); }}
                  className="h-auto p-0 text-[10px] font-black uppercase text-yellow-600 dark:text-yellow-500 hover:no-underline flex items-center gap-1 mt-2 w-fit"
                >
                  {showAllTrades ? 'Show Less' : `+${trades.length - 10} More Divisions`}
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Project Feed */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-white dark:bg-[#0f1115]">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-yellow-500" />
                <h2 className="text-xl font-black">Consolidated Bid Feed</h2>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-[9px] border-none text-gray-500 bg-gray-100 dark:bg-white/5 px-3 py-1 uppercase">{filteredProjects.length} Projects Available</Badge>
                  {selectedSources.length > 0 && <Badge className="bg-black dark:bg-white text-white dark:text-black text-[9px] px-2">{selectedSources.join(' + ')}</Badge>}
                </div>
              </div>
            </div>

            <div className={cn("grid gap-8", viewMode === 'card' ? "grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3" : "grid-cols-1")}>
              {filteredProjects.map((p) => (
                <Card
                  key={p.id}
                  className={cn(
                    "group relative overflow-hidden bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/5 transition-all duration-500 hover:scale-[1.02] cursor-pointer rounded-[2rem] hover:shadow-2xl",
                    p.isProfileMatch ? "ring-2 ring-yellow-400/30" : ""
                  )}
                  onClick={() => { setSelectedProject(p); setShowDetailsModal(true); }}
                >
                  <div className="absolute top-0 right-0 p-4 flex gap-2">
                    {p.isProfileMatch && (
                      <div className="bg-yellow-400 text-black text-[8px] font-black px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1">
                        <Star size={9} className="fill-current" /> PROFILE MATCH
                      </div>
                    )}
                    <div className="bg-black/60 backdrop-blur-md text-white text-[8px] font-black px-2 py-0.5 rounded-full">
                      DUE: {p.deadline}
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <div className="flex flex-col h-full gap-6">
                      <div className="flex justify-between items-start">
                        <Badge className="bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white border-none font-black text-[9px] h-5 tracking-widest">{p.source.toUpperCase()}</Badge>
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{p.posted}</span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[10px] text-gray-400 font-mono">
                          NIGP: {p.nigpCode}
                        </div>
                        <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight leading-tight group-hover:text-yellow-600 transition-colors line-clamp-2">{p.name}</h3>
                        <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold text-gray-400">
                          <span className="flex items-center gap-1"><MapPin size={12} className="text-yellow-600" /> {p.location} ({p.distance})</span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-gray-900 dark:text-white"><ShieldCheck size={12} /> {p.status}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {p.trades.map(t => (
                          <span key={t} className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 text-gray-500">{t}</span>
                        ))}
                      </div>

                      <div className="pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                        <div>
                          <p className="text-[9px] font-black uppercase text-gray-400 tracking-widest mb-1">Project Valuation</p>
                          <p className="text-lg font-black font-mono text-gray-900 dark:text-white">{p.budget}</p>
                        </div>
                        <Button className="h-10 px-6 rounded-xl bg-black dark:bg-yellow-500 text-white dark:text-black font-black uppercase text-[10px] tracking-widest">View Bid Package</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {filteredProjects.length === 0 && (
                <div className="col-span-full py-24 flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-white/[0.02] rounded-[3rem] border-2 border-dashed border-gray-200 dark:border-white/5">
                  <FileSearch size={48} className="text-gray-300 mb-4" />
                  <h4 className="text-2xl font-black tracking-tight mb-2">No Market Signals Found</h4>
                  <p className="text-gray-500 max-w-sm font-bold text-sm">No solicitations match your NIGP codes or multiple keyword criteria. Try clearing some industry signals.</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Industry Standard Details Modal */}
      <Dialog open={showDetailsModal} onOpenChange={setShowDetailsModal}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden bg-white dark:bg-[#111318] border-gray-200 dark:border-white/10 shadow-3xl rounded-[2rem]">
          {selectedProject && (
            <div className="flex flex-col">
              <div className="bg-gray-100/50 dark:bg-black/30 p-8 border-b border-gray-100 dark:border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    <Badge className="bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white border-none font-black text-[9px] uppercase tracking-widest px-3">{selectedProject.source}</Badge>
                    <Badge className="bg-yellow-400 text-black border-none font-black text-[9px] uppercase tracking-widest px-3">verified solicitation</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-black dark:text-white" />
                    <span className="text-[10px] font-black uppercase text-black dark:text-white">Bids Due: {selectedProject.deadline}</span>
                  </div>
                </div>
                <h2 className="text-3xl font-black tracking-tighter text-gray-900 dark:text-white leading-tight mb-2">
                  {selectedProject.name}
                </h2>
                <div className="flex items-center gap-4 text-xs font-bold text-gray-500">
                  <span className="flex items-center gap-1.5"><MapPin size={14} className="text-yellow-500" /> {selectedProject.location}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 border-l border-gray-300 dark:border-white/10 pl-4"><Tag size={14} className="text-gray-900 dark:text-white" /> NIGP Code: {selectedProject.nigpCode}</span>
                </div>
              </div>

              <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
                    <p className="text-[9px] font-black uppercase text-gray-400 tracking-widest mb-1">Est. Value</p>
                    <p className="text-sm font-black font-mono">{selectedProject.budget}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
                    <p className="text-[9px] font-black uppercase text-gray-400 tracking-widest mb-1">Operational Area</p>
                    <p className="text-sm font-black">{selectedProject.sqft} SQFT</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
                    <p className="text-[9px] font-black uppercase text-gray-400 tracking-widest mb-1">Phase</p>
                    <p className="text-sm font-black uppercase text-gray-900 dark:text-white">{selectedProject.status}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
                    <p className="text-[9px] font-black uppercase text-gray-400 tracking-widest mb-1">Urgency</p>
                    <p className="text-sm font-black uppercase text-yellow-600 dark:text-yellow-500">Active</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Executive Summary</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-semibold">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Classification Details</h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-white/5 text-[10px] font-bold text-gray-500">
                      NIGP Code: {selectedProject.nigpCode}
                    </div>
                    <div className="px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-white/5 text-[10px] font-bold text-gray-500">
                      Sector: {selectedProject.category}
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-900 dark:text-white">Market Integration</h4>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 font-bold italic">This lead is synchronized with external procurement networks. View matching documents below.</span>
                    <Button variant="link" className="h-auto p-0 text-black dark:text-white font-black text-[10px] uppercase">Analyze Solicitation</Button>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gray-100 dark:bg-black/30 border-t border-gray-100 dark:border-white/5 flex gap-4">
                <Button onClick={() => setShowDetailsModal(false)} variant="outline" className="flex-1 h-12 rounded-xl text-[10px] font-black uppercase tracking-widest dark:border-white/10">Dismiss</Button>
                <Button className="flex-[2] h-12 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-black uppercase text-[10px] tracking-widest shadow-xl">Submit Intent To Bid</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDiscovery;
