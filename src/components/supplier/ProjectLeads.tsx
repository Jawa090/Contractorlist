import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Search,
  Filter,
  MapPin,
  Calendar,
  DollarSign,
  Building2,
  Users,
  MessageSquare,
  Mail,
  Phone,
  ChevronRight,
  TrendingUp,
  Briefcase,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  LayoutGrid,
  List as ListIcon
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const ProjectLeads = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [showContactModal, setShowContactModal] = useState(false);

  // Expanded mock data with GCs and Sub GCs
  const leads = [
    {
      id: 1,
      title: 'Downtown Commercial Plaza',
      location: 'Austin, TX',
      valuation: '$24M - $30M',
      posted: '2 days ago',
      category: 'Commercial',
      status: 'Bidding',
      description: 'Mixed-use development featuring retail spaces and premium offices. GCs are currently finalizing material procurement schedules.',
      biddingGCs: [
        { name: 'Turner Construction', contact: 'Mike Wilson', role: 'Project Manager', email: 'mike@turner.com', phone: '+1 555-101-2020', whatsapp: '+15551012020' },
        { name: 'Skanska USA', contact: 'Sarah Chen', role: 'Estimating Lead', email: 'sarah@skanska.com', phone: '+1 555-101-3030', whatsapp: '+15551013030' }
      ],
      awardedSubs: [
        { name: 'VoltMaster Electric', trade: 'Electrical', contact: 'James Smith', email: 'james@voltmaster.com' }
      ],
      metrics: { match: 98, distance: '2.4 mi' }
    },
    {
      id: 2,
      title: 'Medical Center Expansion',
      location: 'Round Rock, TX',
      valuation: '$45M - $55M',
      posted: '5 hours ago',
      category: 'Healthcare',
      status: 'Open',
      description: 'Phase 2 expansion of the Oak Ridge Health campus. Highly specialized equipment and sterile environment materials needed.',
      biddingGCs: [
        { name: 'McCarthy Building', contact: 'Robert Fox', role: 'PM', email: 'robert@mccarthy.com', phone: '+1 555-202-4040' },
        { name: 'DPR Construction', contact: 'Emily Blunt', role: 'Senior Estimator', email: 'emily@dpr.com', phone: '+1 555-202-5050' }
      ],
      awardedSubs: [],
      metrics: { match: 92, distance: '15 mi' }
    },
    {
      id: 3,
      title: 'Riverside High Modernization',
      location: 'Houston, TX',
      valuation: '$12M - $18M',
      posted: '1 day ago',
      category: 'Education',
      status: 'Bidding',
      description: 'Modernization of existing school buildings. Focus on sustainable materials and energy-efficient systems.',
      biddingGCs: [
        { name: 'Gilbane Building Company', contact: 'Tom Hardy', role: 'Operations Manager', email: 'tom@gilbane.com', phone: '+1 555-303-6060' }
      ],
      awardedSubs: [
        { name: 'Titan Concrete Pros', trade: 'Concrete', contact: 'Mike Ross', email: 'mike@titan.com' }
      ],
      metrics: { match: 85, distance: '42 mi' }
    }
  ];

  const handleContactAction = (type: string, contact: any) => {
    switch (type) {
      case 'email':
        window.location.href = `mailto:${contact.email}?subject=Inquiry regarding ${selectedLead.title}`;
        break;
      case 'whatsapp':
        if (contact.whatsapp) {
          window.open(`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
        } else {
          toast({ title: "WhatsApp Unavailable", description: "Mobile number not verified for WhatsApp.", variant: "destructive" });
        }
        break;
      case 'message':
        toast({ title: "Internal Message Opened", description: `Starting secure thread with ${contact.name}.` });
        break;
    }
  };

  return (
    <div className="flex h-full w-full flex-col bg-white dark:bg-[#0f1115] text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden font-sans">

      {/* Header Section */}
      <div className="relative bg-gray-50/80 dark:bg-[#1c1e24]/80 border-b border-gray-200 dark:border-white/5 px-8 py-8 z-20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-black tracking-tight uppercase mb-2">Project Opportunity Directory</h1>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Connect with Bidding GCs & Awarded Subs</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-accent w-4 h-4" />
                <Input
                  placeholder="Search projects, GCs, or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80 h-11 bg-white dark:bg-black/20 border-gray-200 dark:border-white/10 rounded-xl pl-10 text-xs font-semibold"
                />
              </div>
              <div className="flex bg-gray-100 dark:bg-white/5 p-1 rounded-xl border border-gray-200 dark:border-white/10">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={cn("h-8 px-3 rounded-lg", viewMode === 'grid' ? "bg-white dark:bg-white/10 text-accent shadow-sm" : "text-gray-400")}
                >
                  <LayoutGrid size={16} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={cn("h-8 px-3 rounded-lg", viewMode === 'list' ? "bg-white dark:bg-white/10 text-accent shadow-sm" : "text-gray-400")}
                >
                  <ListIcon size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Feed */}
      <ScrollArea className="flex-1">
        <div className="max-w-7xl mx-auto p-8">
          <div className={cn(
            "grid gap-8",
            viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
          )}>
            {leads.map((lead) => (
              <Card
                key={lead.id}
                className="group relative overflow-hidden bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/5 hover:border-accent/50 transition-all duration-500 rounded-[2rem] hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
                onClick={() => { setSelectedLead(lead); setShowContactModal(true); }}
              >
                <div className="absolute top-0 right-0 p-4">
                  <Badge className="bg-accent text-accent-foreground font-black text-[9px] px-2 py-0.5 rounded-full">{lead.metrics.match}% MATCH</Badge>
                </div>

                <CardContent className="p-8">
                  <div className="flex flex-col h-full gap-6">
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-[9px] border-none bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 uppercase font-black">{lead.category}</Badge>
                      <h3 className="text-xl font-black tracking-tight leading-tight group-hover:text-accent transition-colors">{lead.title}</h3>
                      <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400">
                        <span className="flex items-center gap-1"><MapPin size={12} className="text-accent" /> {lead.location}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-green-500" /> {lead.status}</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 italic">"{lead.description}"</p>

                    <div className="space-y-3">
                      <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Active Bidders (GCs)</p>
                      <div className="flex flex-wrap gap-2">
                        {lead.biddingGCs.map(gc => (
                          <Badge key={gc.name} className="bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-300 border-none font-bold text-[10px] px-3 py-1">{gc.name}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                      <div>
                        <p className="text-[9px] font-black uppercase text-gray-400 tracking-widest mb-1">Project Valuation</p>
                        <p className="text-lg font-black font-mono text-gray-900 dark:text-white">{lead.valuation}</p>
                      </div>
                      <Button className="h-10 px-6 rounded-xl bg-black dark:bg-accent text-white dark:text-accent-foreground font-black uppercase text-[10px] tracking-widest">Reach Out</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </ScrollArea>

      {/* Contact & Details Modal */}
      <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
        <DialogContent className="max-w-3xl bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/10 rounded-[2.5rem] p-0 overflow-hidden shadow-2xl">
          {selectedLead && (
            <div className="flex flex-col h-full">
              <div className="p-8 bg-black dark:bg-accent text-white dark:text-accent-foreground">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-white/20 dark:bg-black/10 text-white dark:text-black border-none font-black text-[10px] uppercase tracking-widest">{selectedLead.category}</Badge>
                  <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Posted {selectedLead.posted}</p>
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight leading-none mb-2">{selectedLead.title}</h2>
                <div className="flex items-center gap-4 text-xs font-bold opacity-80 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> {selectedLead.location}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5"><DollarSign size={14} /> {selectedLead.valuation}</span>
                </div>
              </div>

              <ScrollArea className="max-h-[60vh] p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[10px] font-black uppercase text-accent tracking-widest mb-4">Project Overview</h4>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300 leading-relaxed">{selectedLead.description}</p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-4">Awarded Subcontractors</h4>
                      <div className="space-y-3">
                        {selectedLead.awardedSubs.length > 0 ? selectedLead.awardedSubs.map(sub => (
                          <div key={sub.name} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/5">
                            <div>
                              <p className="text-xs font-black uppercase tracking-tight">{sub.name}</p>
                              <p className="text-[10px] font-bold text-gray-500">{sub.trade} • {sub.contact}</p>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-indigo-500" onClick={() => handleContactAction('email', sub)}><Mail size={16} /></Button>
                          </div>
                        )) : (
                          <p className="text-xs font-bold text-gray-400 italic">No subcontractors awarded for this phase yet.</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <h4 className="text-[10px] font-black uppercase text-accent tracking-widest mb-4">Reach Bidding General Contractors</h4>
                    <div className="space-y-4">
                      {selectedLead.biddingGCs.map(gc => (
                        <div key={gc.name} className="p-6 bg-white dark:bg-black/20 rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm relative group overflow-hidden">
                          <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-bl-[2rem] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <TrendingUp size={24} className="text-accent" />
                          </div>

                          <p className="text-[8px] font-black uppercase text-indigo-500 mb-1">{gc.role}</p>
                          <h5 className="text-lg font-black uppercase tracking-tight mb-4">{gc.name}</h5>
                          <div className="space-y-3">
                            <p className="text-[10px] font-bold text-gray-400 flex items-center gap-2"><Users size={12} /> {gc.contact}</p>
                            <div className="flex gap-2 pt-2">
                              <Button variant="outline" className="h-9 flex-1 rounded-xl text-[10px] font-black uppercase tracking-wider gap-2 hover:bg-accent hover:text-accent-foreground transition-all" onClick={() => handleContactAction('email', gc)}>
                                <Mail size={14} /> Email
                              </Button>
                              <Button variant="outline" className="h-9 flex-1 rounded-xl text-[10px] font-black uppercase tracking-wider gap-2 hover:bg-green-500 hover:text-white transition-all" onClick={() => handleContactAction('whatsapp', gc)}>
                                <Phone size={14} /> WhatsApp
                              </Button>
                            </div>
                            <Button className="w-full h-10 bg-black dark:bg-white text-white dark:text-black rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 shadow-xl" onClick={() => handleContactAction('message', gc)}>
                              <MessageSquare size={14} /> Secure Message
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollArea>

              <div className="p-8 border-t border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-black/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={24} className="text-green-500" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest">Supplier Guaranteed</p>
                      <p className="text-[9px] font-bold text-gray-400">Your connection is encrypted and verified by Antigravity SC Hub.</p>
                    </div>
                  </div>
                  <Button variant="ghost" onClick={() => setShowContactModal(false)} className="font-black uppercase text-[10px] tracking-widest">Close Browser</Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectLeads;
