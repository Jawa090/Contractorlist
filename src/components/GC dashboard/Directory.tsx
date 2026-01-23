import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  Search,
  MapPin,
  Star,
  Filter,
  Phone,
  Mail,
  Building2,
  ShieldCheck,
  Trophy,
  CheckCircle2,
  Clock,
  Users,
  FileText,
  Zap,
  Award,
  CircleCheck,
  ChevronRight,
  ExternalLink,
  Briefcase
} from 'lucide-react';

const Directory = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState('Austin, TX');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContractor, setSelectedContractor] = useState<any>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState('best');

  const stats = [
    { label: 'Verified Pros', value: '1,248', icon: ShieldCheck, color: 'text-blue-500' },
    { label: 'Avg. Rating', value: '4.8', icon: Star, color: 'text-yellow-500' },
    { label: 'Active Trade Bids', value: '342', icon: Zap, color: 'text-purple-500' },
    { label: 'Insurance Compliant', value: '98%', icon: CircleCheck, color: 'text-green-500' },
  ];

  const contractors = [
    {
      id: 1,
      name: 'VoltMaster Electrical Services',
      location: 'Austin, TX',
      distance: '1.2 mi',
      rating: 4.9,
      reviews: 128,
      verified: true,
      tier: 'Gold',
      specialties: ['Electrical', 'Fire Alarm', 'Lighting'],
      status: 'Available',
      projects: 45,
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200&h=200',
      phone: '(512) 555-0123',
      email: 'info@voltmaster.com',
      yearsExperience: 15,
      bonded: true,
      insured: true,
      description: 'VoltMaster is a premier electrical contracting firm specializing in complex commercial and industrial power systems. Our team is fully certified for high-voltage and low-voltage installations.',
      complianceScore: 98,
    },
    {
      id: 2,
      name: 'Apex Wiring & Power',
      location: 'San Antonio, TX',
      distance: '45 mi',
      rating: 4.5,
      reviews: 42,
      verified: true,
      tier: 'Silver',
      specialties: ['Electrical', 'Low Voltage'],
      status: 'Busy',
      projects: 12,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
      phone: '(210) 555-0145',
      email: 'contact@apexwiring.com',
      yearsExperience: 8,
      bonded: true,
      insured: true,
      description: 'Apex provides reliable wiring solutions for residential and light commercial developments. We focus on speed and budget-friendly compliance.',
      complianceScore: 92,
    },
    {
      id: 3,
      name: 'Titan Concrete Pros',
      location: 'Dallas, TX',
      distance: '120 mi',
      rating: 4.7,
      reviews: 215,
      verified: true,
      tier: 'Platinum',
      specialties: ['Concrete', 'Foundation'],
      status: 'Available',
      projects: 89,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
      phone: '(214) 555-0189',
      email: 'info@titanconcrete.com',
      yearsExperience: 25,
      bonded: true,
      insured: true,
      description: 'Titan is a multi-generational concrete contracting company. We handle everything from high-rise foundations to decorative hardscaping with precision.',
      complianceScore: 100,
    },
    {
      id: 4,
      name: 'Bright Future Solar',
      location: 'Austin, TX',
      distance: '8 mi',
      rating: 4.8,
      reviews: 8,
      verified: true,
      tier: 'Bronze',
      specialties: ['Solar', 'Green Energy'],
      status: 'Available',
      projects: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200',
      phone: '(512) 555-0167',
      email: 'hello@brightfuture.com',
      yearsExperience: 5,
      bonded: true,
      insured: true,
      description: 'Specializing in sustainable energy transitions for commercial properties. We offer full design-build solar services across Central Texas.',
      complianceScore: 88,
    }
  ];

  const filteredContractors = contractors.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory.length === 0 ||
      c.specialties.some(s => selectedCategory.includes(s));
    return matchesSearch && matchesCategory;
  });

  const handleInvite = (name: string) => {
    toast({
      title: "Invitation Sent",
      description: `Successfully invited ${name} to bid on your project.`,
    });
  };

  const categories = ['Electrical', 'Plumbing', 'HVAC', 'Concrete', 'Masonry', 'Drywall', 'Roofing', 'Painting', 'Flooring'];

  return (
    <div className="flex h-full w-full flex-col bg-gray-50 dark:bg-[#0f1115] text-gray-900 dark:text-white font-sans transition-colors duration-300">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] left-[-20%] w-[50%] h-[50%] rounded-full bg-yellow-400/5 dark:bg-yellow-600/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/5 dark:bg-blue-600/5 blur-[100px]" />
      </div>

      {/* Header Section */}
      <div className="bg-white/80 dark:bg-[#1c1e24]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 px-6 py-8 sticky top-0 z-20 shadow-sm relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-yellow-400 dark:bg-yellow-500 text-black border-none font-bold px-3 py-1">
                    Verified Network
                  </Badge>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-green-500" /> All Pros Compliance Checked
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
                  Expert Subcontractor <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Directory</span>
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
                  Connect with Austin's highest-rated trades. Each professional in our network is fully insured, bonded, and has a proven track record of on-time project completion.
                </p>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 lg:w-72">
                {stats.slice(0, 4).map((stat, i) => (
                  <div key={i} className="bg-gray-100 dark:bg-black/20 p-3 rounded-2xl border border-gray-200 dark:border-white/5">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">{stat.label}</p>
                    <div className="flex items-center gap-2">
                      <stat.icon className={`w-4 h-4 ${stat.color}`} />
                      <span className="text-lg font-bold">{stat.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Search and Filters Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center bg-white dark:bg-[#14161b] p-2 rounded-2xl border border-gray-200 dark:border-white/5 shadow-xl shadow-black/5 dark:shadow-yellow-500/5">
              <div className="flex-1 relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 w-5 h-5" />
                <Input
                  placeholder="What trade or company are you looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 border-none bg-transparent text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-700 focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                />
              </div>
              <div className="hidden md:block w-[1px] h-8 bg-gray-200 dark:bg-white/10" />
              <div className="w-full md:w-[220px] relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 w-5 h-5" />
                <Input
                  placeholder="Location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="pl-12 h-14 border-none bg-transparent text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-700 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
                />
              </div>
              <Button className="h-14 w-full md:w-auto px-10 bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-400 text-black font-black uppercase tracking-tighter rounded-xl transition-all shadow-lg dark:shadow-yellow-500/20 active:scale-95">
                Search Network
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-6 py-10 relative z-0 custom-scrollbar">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Enhanced Filters Sidebar */}
          <div className="hidden lg:block space-y-8">
            <div className="sticky top-10 space-y-8">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <Filter className="h-5 w-5 text-yellow-500" />
                    Filters
                  </h3>
                  <button onClick={() => { setSearchQuery(''); setSelectedCategory([]); }} className="text-xs text-yellow-600 dark:text-yellow-400 font-bold hover:underline">Clear All</button>
                </div>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-[#1c1e24] p-6 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm">
                    <Label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 block underline decoration-yellow-500/50 underline-offset-4">
                      Primary Trades
                    </Label>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center group cursor-pointer" onClick={() => {
                          if (selectedCategory.includes(category)) {
                            setSelectedCategory(selectedCategory.filter(c => c !== category));
                          } else {
                            setSelectedCategory([...selectedCategory, category]);
                          }
                        }}>
                          <div className={cn(
                            "w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200 mr-3",
                            selectedCategory.includes(category)
                              ? "bg-yellow-500 border-yellow-500 text-black"
                              : "border-gray-300 dark:border-white/10 group-hover:border-yellow-400"
                          )}>
                            {selectedCategory.includes(category) && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                          <span className={cn(
                            "text-sm font-semibold transition-colors",
                            selectedCategory.includes(category) ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200"
                          )}>{category}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-[#1c1e24] p-6 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm">
                    <Label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 block underline decoration-yellow-500/50 underline-offset-4">
                      Account Status
                    </Label>
                    <div className="space-y-3">
                      {['Available Now', 'Accepting Bids', 'Busy'].map((s) => (
                        <div key={s} className="flex items-center group cursor-pointer">
                          <div className="w-5 h-5 rounded-md border border-gray-300 dark:border-white/10 group-hover:border-yellow-400 mr-3" />
                          <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-[#1c1e24] p-6 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm">
                    <Label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 block underline decoration-yellow-500/50 underline-offset-4">
                      Sort Results By
                    </Label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-full bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/10 font-bold rounded-xl text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/10 font-sans">
                        <SelectItem value="best">Best Match</SelectItem>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                        <SelectItem value="distance">Nearest First</SelectItem>
                        <SelectItem value="projects">Most Experience</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results List Redesign */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Showing <span className="text-gray-900 dark:text-white font-bold">{filteredContractors.length}</span> verified professionals found in <span className="underline decoration-yellow-500 underline-offset-2">{selectedLocation}</span>
              </p>
            </div>

            {filteredContractors.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {filteredContractors.map((contractor) => (
                  <Card
                    key={contractor.id}
                    className="group relative overflow-hidden bg-white dark:bg-[#1c1e24] border border-gray-200 dark:border-white/5 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgba(234,179,8,0.03)] cursor-pointer rounded-[2rem]"
                    onClick={() => {
                      setSelectedContractor(contractor);
                      setIsDetailModalOpen(true);
                    }}
                  >
                    {/* Visual Accents */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 blur-[80px] rounded-full group-hover:bg-yellow-400/10 transition-colors pointer-events-none" />

                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Profile Section */}
                        <div className="relative shrink-0">
                          <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-3xl overflow-hidden ring-4 ring-gray-100 dark:ring-white/5 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                            <img src={contractor.image} alt={contractor.name} className="w-full h-full object-cover" />
                            {contractor.status === 'Available' && (
                              <div className="absolute bottom-0 left-0 right-0 bg-green-500 text-white text-[10px] font-black uppercase tracking-tighter text-center py-1">Available Now</div>
                            )}
                          </div>
                          {contractor.verified && (
                            <div className="absolute -top-3 -right-3 bg-yellow-400 text-black rounded-full p-2 shadow-xl ring-4 ring-white dark:ring-[#1c1e24] z-10">
                              <ShieldCheck className="h-4 w-4" />
                            </div>
                          )}
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div>
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors tracking-tight leading-none mb-2">
                                  {contractor.name}
                                </h3>
                                <div className="flex items-center gap-4">
                                  <div className="flex items-center gap-1.5">
                                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                    <span className="font-black text-lg">{contractor.rating}</span>
                                    <span className="text-gray-400 text-sm font-bold">({contractor.reviews})</span>
                                  </div>
                                  <span className="text-gray-200 dark:text-white/10">|</span>
                                  <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-sm font-bold">
                                    <Building2 className="w-4 h-4" />
                                    {contractor.projects}+ Projects
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-wrap gap-2">
                                {contractor.tier === 'Platinum' && (
                                  <Badge className="bg-black text-white px-3 py-1 font-black text-[10px] uppercase tracking-widest border-none">
                                    <Trophy className="w-3 h-3 mr-1.5 text-yellow-500" /> Platinum Partner
                                  </Badge>
                                )}
                                {contractor.tier === 'Gold' && (
                                  <Badge className="bg-yellow-400 text-black px-3 py-1 font-black text-[10px] uppercase tracking-widest border-none">
                                    Gold Member
                                  </Badge>
                                )}
                              </div>
                            </div>

                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 italic font-medium">
                              "{contractor.description}"
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                              {contractor.specialties.map((s) => (
                                <span key={s} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-[10px] font-black uppercase text-gray-600 dark:text-gray-400 group-hover:bg-yellow-500/10 group-hover:text-yellow-600 transition-colors">
                                  {s}
                                </span>
                              ))}
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 mt-2 border-t border-gray-100 dark:border-white/5">
                              <div className="flex items-center gap-6 text-sm">
                                <div className="flex items-center gap-2 group/loc">
                                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover/loc:bg-yellow-400 transition-colors">
                                    <MapPin className="w-4 h-4 text-gray-400 dark:text-gray-600 group-hover/loc:text-black" />
                                  </div>
                                  <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Location</p>
                                    <p className="font-bold">{contractor.location}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 group/exp">
                                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover/exp:bg-yellow-400 transition-colors">
                                    <Briefcase className="w-4 h-4 text-gray-400 dark:text-gray-600 group-hover/exp:text-black" />
                                  </div>
                                  <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Experience</p>
                                    <p className="font-bold">{contractor.yearsExperience} Years</p>
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-3">
                                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-2xl bg-gray-100 dark:bg-white/5 text-gray-400 hover:bg-yellow-400 hover:text-black transition-all group-hover:scale-105 active:scale-95" onClick={(e) => { e.stopPropagation(); toast({ title: "Profile Linked", description: `Sharing profile for ${contractor.name}` }) }}>
                                  <ExternalLink className="w-5 h-5" />
                                </Button>
                                <Button
                                  className="h-12 px-8 bg-black dark:bg-yellow-500 text-white dark:text-black font-black uppercase tracking-tighter text-sm rounded-2xl transition-all shadow-xl shadow-black/10 dark:shadow-yellow-500/20 active:scale-95 hover:bg-yellow-500 dark:hover:bg-yellow-400 hover:text-black"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleInvite(contractor.name);
                                  }}
                                >
                                  Invite to Bid
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 bg-white dark:bg-[#1c1e24] rounded-[3rem] border-4 border-dashed border-gray-100 dark:border-white/5 animate-pulse">
                <Search className="w-20 h-20 text-gray-100 dark:text-white/5 mb-6" />
                <h3 className="text-2xl font-black tracking-tight">Expansion Needed</h3>
                <p className="text-gray-500 font-bold mt-2">No professionals found matching these specific filters.</p>
                <Button variant="link" onClick={() => { setSearchQuery(''); setSelectedCategory([]); }} className="mt-4 text-yellow-500 font-black uppercase text-sm tracking-widest">Widen Search Radius</Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contractor Detail Modal - Redesign */}
      <Dialog open={isDetailModalOpen} onOpenChange={setIsDetailModalOpen}>
        <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-white dark:bg-[#0f1115] border-none shadow-[0_0_100px_rgba(0,0,0,0.5)]">
          {selectedContractor && (
            <div className="flex flex-col">
              {/* Cover/Header */}
              <div className="relative h-48 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-70" />
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-40 grayscale" />

                <div className="absolute -bottom-10 left-10 z-20">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-[2rem] overflow-hidden ring-8 ring-white dark:ring-[#0f1115] shadow-2xl">
                      <img src={selectedContractor.image} className="w-full h-full object-cover" />
                    </div>
                    {selectedContractor.verified && (
                      <div className="absolute bottom-0 right-0 bg-yellow-400 text-black p-2 rounded-full ring-4 ring-white dark:ring-[#0f1115]">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="px-10 pt-16 pb-10">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                  <div className="flex-1 space-y-4">
                    <div>
                      <h2 className="text-4xl font-black tracking-tight leading-none mb-2">{selectedContractor.name}</h2>
                      <div className="flex flex-wrap items-center gap-4 text-gray-500 font-bold text-sm">
                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {selectedContractor.location}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5 text-yellow-500"><Star className="w-4 h-4 fill-current" /> {selectedContractor.rating} ({selectedContractor.reviews})</span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5 text-green-500 italic"><ShieldCheck className="w-4 h-4" /> Compliance Mastered</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-black/20 p-6 rounded-3xl border border-gray-100 dark:border-white/5">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">About the Professional</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                        {selectedContractor.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Primary Trade</h4>
                        <p className="font-black text-lg">{selectedContractor.specialties[0]}</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Compliance Score</h4>
                        <p className="font-black text-lg text-green-500">{selectedContractor.complianceScore}%</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-72 space-y-6">
                    <div className="flex flex-col gap-3">
                      <Button className="w-full h-14 bg-yellow-400 hover:bg-yellow-500 text-black font-black uppercase text-sm tracking-widest rounded-2xl shadow-xl shadow-yellow-500/20" onClick={() => {
                        handleInvite(selectedContractor.name);
                        setIsDetailModalOpen(false);
                      }}>Invite to Bid</Button>
                      <Button variant="outline" className="w-full h-14 border-gray-200 dark:border-white/10 font-black uppercase text-sm tracking-widest rounded-2xl group">
                        <MessageSquare className="w-4 h-4 mr-2 group-hover:text-yellow-500" /> Message
                      </Button>
                    </div>

                    <div className="space-y-4 pt-4">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Verifications</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 rounded-xl bg-green-500/10 text-green-600 dark:text-green-500 border border-green-500/20">
                          <span className="text-xs font-black uppercase tracking-tighter">Bonded & Insured</span>
                          <CircleCheck className="w-4 h-4" />
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-green-500/10 text-green-600 dark:text-green-500 border border-green-500/20">
                          <span className="text-xs font-black uppercase tracking-tighter">Safety Record Clear</span>
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-500 border border-blue-500/20">
                          <span className="text-xs font-black uppercase tracking-tighter">License #GC-99482</span>
                          <FileText className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-10 py-6 bg-gray-50 dark:bg-black/30 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <p className="text-xs font-bold text-gray-500">Contact Method Preference:</p>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <Mail className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <Button variant="ghost" className="text-gray-400 font-bold" onClick={() => setIsDetailModalOpen(false)}>Close Profile</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Directory;
