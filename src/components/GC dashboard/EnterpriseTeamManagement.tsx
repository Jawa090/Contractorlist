import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Search,
  Filter,
  MoreVertical,
  Plus,
  PlayCircle,
  Mail,
  UserPlus,
  ShieldCheck,
  Globe,
  Building2,
  Users,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  MessageSquare,
  Smartphone
} from 'lucide-react';

/* 
  Rebuilding Team Management to align with the "Dark Glass" theme while keeping the 
  "Onboarding" table structure requested in the previous step, but dark mode.
*/

interface TeamMember {
  id: string;
  name: string;
  role: string;
  employeeId: string;
  type: string;
  status: 'In-Progress' | 'Draft' | 'Completed';
  progress: number;
  country: string;
  avatar?: string;
}

const EnterpriseTeamManagement = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isOnboardingModalOpen, setIsOnboardingModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [discoveryView, setDiscoveryView] = useState<'team' | 'directory'>('team');
  const [selectedCategory, setSelectedCategory] = useState('All Trades');
  const [inviteMethod, setInviteMethod] = useState<'email' | 'sms' | 'both'>('email');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [selectedSub, setSelectedSub] = useState<any>(null);
  const [messageType, setMessageType] = useState<'default' | 'custom'>('default');
  const [customMessage, setCustomMessage] = useState('');

  const defaultMessage = selectedSub ? `Hello ${selectedSub.name}, we've selected you for our upcoming project. Please complete your onboarding to get started.` : '';

  const mockSubcontractors = [
    { id: 's1', name: 'VoltMaster Electrical', trade: 'Division 26 - Electrical', rating: 4.8, projects: 12, avatar: 'VM', location: 'Austin, TX', verified: true, email: 'contact@voltmaster.com', phone: '(512) 555-0321' },
    { id: 's2', name: 'Apex Communications', trade: 'Division 27 - Communications', rating: 4.9, projects: 8, avatar: 'AC', location: 'Houston, TX', verified: true, email: 'bids@apexcomm.com', phone: '(713) 555-0988' },
    { id: 's3', name: 'Titan Concrete Pros', trade: 'Division 03 - Concrete', rating: 4.7, projects: 24, avatar: 'TC', location: 'Dallas, TX', verified: false, email: 'admin@titanconcrete.com', phone: '(214) 555-0766' },
    { id: 's4', name: 'AquaFlow Utilities', trade: 'Division 33 - Utilities', rating: 4.6, projects: 15, avatar: 'AF', location: 'Austin, TX', verified: true, email: 'service@aquaflow.com', phone: '(512) 555-0444' },
  ];

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Gorde Omkar',
      role: 'You',
      employeeId: 'GOADS01',
      type: 'Direct Employee',
      status: 'In-Progress',
      progress: 20,
      country: 'India',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100&h=100'
    },
    {
      id: '2',
      name: 'Darrell Steward',
      role: 'Direct Employee',
      employeeId: 'GOADS02',
      type: 'Direct Employee',
      status: 'In-Progress',
      progress: 80,
      country: 'United States',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
    },
    {
      id: '3',
      name: 'Darlene Robertson',
      role: 'Contractor',
      employeeId: 'GOADS03',
      type: 'Contractor',
      status: 'In-Progress',
      progress: 40,
      country: 'United States',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100'
    },
    {
      id: '4',
      name: 'Robert Fox',
      role: 'Direct Employee',
      employeeId: 'GOADS04',
      type: 'Direct Employee',
      status: 'Draft',
      progress: 100,
      country: 'United States',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100'
    },
    {
      id: '5',
      name: 'Courtney Henry',
      role: 'Direct Employee',
      employeeId: 'GOADS05',
      type: 'Direct Employee',
      status: 'Draft',
      progress: 20,
      country: 'United States',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100'
    }
  ];

  const filteredMembers = teamMembers.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.employeeId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' ||
      (activeTab === 'employees' && m.type === 'Direct Employee') ||
      (activeTab === 'contractors' && m.type === 'Contractor') ||
      (activeTab === 'pending' && m.status === 'In-Progress');
    return matchesSearch && matchesTab;
  });

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    const methods = inviteMethod === 'both' ? 'Email and SMS' : inviteMethod.toUpperCase();
    toast({
      title: "Invitation Sent",
      description: `Invitation has been sent to ${name} via ${methods}.`,
    });
    setIsAddModalOpen(false);
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setRole('');
  };

  const handleHireSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const methods = inviteMethod === 'both' ? 'Email and SMS' : inviteMethod.toUpperCase();
    const messageContent = messageType === 'custom' ? 'your custom message' : 'the default project invitation';

    toast({
      title: "Hiring Notification Sent",
      description: `Official hire notification sent to ${selectedSub?.name} via ${methods} with ${messageContent}.`,
    });
    setIsHireModalOpen(false);
    setIsOnboardingModalOpen(true);
    // Reset message state
    setMessageType('default');
    setCustomMessage('');
  };

  return (
    <div className="space-y-8">

      {/* Discovery & Search Hub */}
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-[#1c1e24] p-6 border border-gray-200 dark:border-white/5 shadow-sm">
        <div className="relative z-10 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 leading-tight">Team Hub</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium max-w-md">
                Manage your staff or discover new verified partners for your upcoming projects.
              </p>
            </div>

            <div className="flex bg-gray-100 dark:bg-white/5 p-1 rounded-xl border border-gray-200 dark:border-white/10">
              <button
                onClick={() => setDiscoveryView('team')}
                className={cn(
                  "flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors",
                  discoveryView === 'team' ? "bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                )}
              >
                <Users size={14} /> My Team
              </button>
              <button
                onClick={() => setDiscoveryView('directory')}
                className={cn(
                  "flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors",
                  discoveryView === 'directory' ? "bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                )}
              >
                <Globe size={14} /> Sub Contractor Directory
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-yellow-500 transition-colors" />
              <Input
                placeholder={discoveryView === 'team' ? "Search by name or employee ID..." : "Search trades (e.g. Electrical, Plumbing)..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-gray-50 dark:bg-black/30 border-gray-200 dark:border-white/10 rounded-xl text-base font-medium focus:ring-yellow-500/20"
              />
            </div>
            {discoveryView === 'directory' && (
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-64 h-12 bg-gray-50 dark:bg-black/30 border-gray-200 dark:border-white/10 rounded-xl font-bold">
                  <SelectValue placeholder="All Trades" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/10 font-bold max-h-80 overflow-y-auto">
                  <SelectItem value="All Trades">All Trades</SelectItem>
                  <SelectItem value="Division 01 - General Requirements">01 General Requirements</SelectItem>
                  <SelectItem value="Division 02 - Existing Conditions">02 Existing Conditions</SelectItem>
                  <SelectItem value="Division 03 - Concrete">03 Concrete</SelectItem>
                  <SelectItem value="Division 04 - Masonry">04 Masonry</SelectItem>
                  <SelectItem value="Division 05 - Metals">05 Metals</SelectItem>
                  <SelectItem value="Division 06 - Wood, Plastics, Composites">06 Wood, Plastics, Composites</SelectItem>
                  <SelectItem value="Division 07 - Thermal & Moisture Protection">07 Thermal & Moisture Protection</SelectItem>
                  <SelectItem value="Division 08 - Openings">08 Openings</SelectItem>
                  <SelectItem value="Division 09 - Finishes">09 Finishes</SelectItem>
                  <SelectItem value="Division 10 - Specialties">10 Specialties</SelectItem>
                  <SelectItem value="Division 11 - Equipment">11 Equipment</SelectItem>
                  <SelectItem value="Division 12 - Furnishings">12 Furnishings</SelectItem>
                  <SelectItem value="Division 13 - Special Construction">13 Special Construction</SelectItem>
                  <SelectItem value="Division 14 - Conveying Equipment">14 Conveying Equipment</SelectItem>
                  <SelectItem value="Division 21 - Fire Suppression">21 Fire Suppression</SelectItem>
                  <SelectItem value="Division 22 - Plumbing">22 Plumbing</SelectItem>
                  <SelectItem value="Division 23 - HVAC">23 HVAC</SelectItem>
                  <SelectItem value="Division 25 - Integrated Automation">25 Integrated Automation</SelectItem>
                  <SelectItem value="Division 26 - Electrical">26 Electrical</SelectItem>
                  <SelectItem value="Division 27 - Communications">27 Communications</SelectItem>
                  <SelectItem value="Division 28 - Electronic Safety & Security">28 Electronic Safety & Security</SelectItem>
                  <SelectItem value="Division 31 - Earthwork">31 Earthwork</SelectItem>
                  <SelectItem value="Division 32 - Exterior Improvements">32 Exterior Improvements</SelectItem>
                  <SelectItem value="Division 33 - Utilities">33 Utilities</SelectItem>
                </SelectContent>
              </Select>
            )}
            <Button
              className="h-12 px-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold uppercase tracking-widest rounded-xl shadow-sm border-0"
              onClick={() => discoveryView === 'team' ? setIsAddModalOpen(true) : navigate('/gc-dashboard/directory')}
            >
              {discoveryView === 'team' ? <><Plus className="mr-2" size={18} /> Add Member</> : <><Sparkles className="mr-2" size={18} /> Discover Partner</>}
            </Button>
          </div>
        </div>
      </div>

      {discoveryView === 'team' ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/10 pb-4">
            <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
              {[
                { label: 'All Members', id: 'all' },
                { label: 'Employees', id: 'employees' },
                { label: 'Contractors', id: 'contractors' },
                { label: 'Pending', id: 'pending' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative pb-4 text-sm font-bold uppercase tracking-tight transition-colors ${activeTab === tab.id
                    ? 'text-yellow-600 dark:text-yellow-400'
                    : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                    }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-[#1c1e24] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest">Team Member</th>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest">Role & ID</th>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest">Progress</th>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                  {filteredMembers.map((member) => (
                    <tr key={member.id} className="group hover:bg-gray-50 dark:hover:bg-white/5">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10 border border-gray-200 dark:border-white/10 shadow-sm">
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback className="bg-yellow-400/20 text-yellow-700 dark:text-yellow-400 font-bold text-xs">{member.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-bold text-gray-900 dark:text-white text-sm leading-none mb-1">{member.name}</div>
                            <Badge variant="outline" className="h-4 rounded-full bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white border-none text-[8px] font-bold uppercase tracking-tighter">
                              Internal Team
                            </Badge>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{member.role}</span>
                          <span className="text-[10px] text-gray-400 uppercase tracking-widest">{member.employeeId}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-1.5 w-24 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400"
                              style={{ width: `${member.progress}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold text-gray-900 dark:text-white">{member.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge
                          className={cn(
                            "rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest border-none",
                            member.status === 'In-Progress' ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400' :
                              member.status === 'Completed' ? 'bg-gray-900/10 text-gray-900 dark:text-white' :
                                'bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400'
                          )}
                        >
                          {member.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-yellow-500 hover:bg-yellow-400/10 rounded-lg">
                              <MoreVertical className="w-5 h-5" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48 bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/10 p-1 rounded-xl shadow-lg">
                            <DropdownMenuItem className="rounded-lg font-bold" onClick={() => toast({ title: "Edit", description: `Editing ${member.name}` })}>
                              Edit Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem className="rounded-lg font-bold" onClick={() => toast({ title: "Reminder", description: "Compliance request sent" })}>
                              Send Reminder
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-gray-100 dark:bg-white/5" />
                            <DropdownMenuItem className="rounded-lg font-bold text-gray-900 dark:text-white focus:bg-gray-100 dark:focus:bg-white/10">
                              Deactivate
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {mockSubcontractors
            .filter(sub => {
              const matchesSearch = sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                sub.trade.toLowerCase().includes(searchQuery.toLowerCase());
              const matchesTrade = selectedCategory === 'All Trades' || sub.trade === selectedCategory;
              return matchesSearch && matchesTrade;
            })
            .map(sub => (
              <Card key={sub.id} className="group relative overflow-hidden bg-white dark:bg-[#1c1e24] border border-gray-200 dark:border-white/5 rounded-2xl shadow-sm">
                <div className="absolute top-0 right-0 p-3">
                  {sub.verified && (
                    <div className="bg-yellow-500/10 text-yellow-500 p-1.5 rounded-lg">
                      <ShieldCheck size={16} />
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12 border border-white dark:border-white/10 shadow-sm rounded-lg">
                      <AvatarFallback className="bg-yellow-400 text-black font-bold text-base">
                        {sub.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-3 flex-1">
                      <div>
                        <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-none text-[9px] font-bold uppercase tracking-widest mb-1 px-2">
                          Licensed Partner
                        </Badge>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{sub.name}</h3>
                        <p className="text-xs font-bold text-gray-500 dark:text-gray-400 flex items-center gap-1.5 pt-0.5 uppercase tracking-tighter">
                          <Building2 size={12} /> {sub.trade} Specialist
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Rating</span>
                          <span className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1">
                            {sub.rating} <Zap size={12} className="fill-yellow-500 text-yellow-500" />
                          </span>
                        </div>
                        <div className="flex flex-col border-l border-gray-200 dark:border-white/10 pl-4">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Projects</span>
                          <span className="text-sm font-bold text-gray-900 dark:text-white">{sub.projects}+</span>
                        </div>
                      </div>

                      <div className="pt-2 flex gap-2">
                        <Button
                          className="flex-1 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-[10px] h-10 rounded-xl"
                          onClick={() => {
                            setSelectedSub(sub);
                            setIsHireModalOpen(true);
                          }}
                        >
                          Hire & Notify
                        </Button>
                        <Button variant="outline" className="flex-1 border-gray-200 dark:border-white/10 font-bold h-10 rounded-xl text-[10px] uppercase">
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          {mockSubcontractors.filter(sub => {
            const matchesSearch = sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              sub.trade.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTrade = selectedCategory === 'All Trades' || sub.trade === selectedCategory;
            return matchesSearch && matchesTrade;
          }).length === 0 && (
              <div className="col-span-full py-20 text-center bg-gray-50/50 dark:bg-white/5 rounded-2xl border border-dashed border-gray-200 dark:border-white/10">
                <Sparkles className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No matching partners found</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Try broadening your trade criteria or search for a specific trade.</p>
              </div>
            )}
        </div>
      )}

      {/* Add Member Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent className="bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/10 text-gray-900 dark:text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Team Member</DialogTitle>
            <DialogDescription>
              Invite a new person to join your GC dashboard team.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAddMember} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-100 dark:bg-black/20 border-gray-200 dark:border-white/10"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required={inviteMethod !== 'sms'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-100 dark:bg-black/20 border-gray-200 dark:border-white/10"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">Phone Number</Label>
                <div className="relative">
                  <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    required={inviteMethod !== 'email'}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-9 bg-gray-100 dark:bg-black/20 border-gray-200 dark:border-white/10"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="role" className="text-gray-700 dark:text-gray-300">Position / Role</Label>
              <Input
                id="role"
                placeholder="e.g. Project Manager, Site Supervisor"
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="bg-gray-100 dark:bg-black/20 border-gray-200 dark:border-white/10"
              />
            </div>

            <div className="space-y-3 pt-2">
              <Label className="text-gray-700 dark:text-gray-300">Invitation Method</Label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setInviteMethod('email')}
                  className={cn(
                    "flex flex-col items-center justify-center py-3 rounded-xl border transition-all gap-1",
                    inviteMethod === 'email' ? "bg-yellow-400/10 border-yellow-500 text-yellow-600 dark:text-yellow-400" : "bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/5 text-gray-400"
                  )}
                >
                  <Mail size={16} />
                  <span className="text-[10px] font-bold uppercase">Email</span>
                </button>
                <button
                  type="button"
                  onClick={() => setInviteMethod('sms')}
                  className={cn(
                    "flex flex-col items-center justify-center py-3 rounded-xl border transition-all gap-1",
                    inviteMethod === 'sms' ? "bg-yellow-400/10 border-yellow-500 text-yellow-600 dark:text-yellow-400" : "bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/5 text-gray-400"
                  )}
                >
                  <MessageSquare size={16} />
                  <span className="text-[10px] font-bold uppercase">SMS</span>
                </button>
                <button
                  type="button"
                  onClick={() => setInviteMethod('both')}
                  className={cn(
                    "flex flex-col items-center justify-center py-3 rounded-xl border transition-all gap-1",
                    inviteMethod === 'both' ? "bg-yellow-400/10 border-yellow-500 text-yellow-600 dark:text-yellow-400" : "bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/5 text-gray-400"
                  )}
                >
                  <div className="flex gap-1">
                    <Mail size={12} />
                    <MessageSquare size={12} />
                  </div>
                  <span className="text-[10px] font-bold uppercase">Both</span>
                </button>
              </div>
            </div>

            <DialogFooter className="pt-4">
              <Button type="button" variant="ghost" onClick={() => setIsAddModalOpen(false)} className="text-gray-500">Cancel</Button>
              <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold h-11 px-8 rounded-xl shadow-lg shadow-yellow-500/10 transition-all active:scale-95">
                Send Invitation
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Hire Subcontractor Modal */}
      <Dialog open={isHireModalOpen} onOpenChange={setIsHireModalOpen}>
        <DialogContent className="bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/10 text-gray-900 dark:text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Hire Subcontractor</DialogTitle>
            <DialogDescription>
              Notify {selectedSub?.name} of their selection and initiate onboarding.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleHireSubmit} className="space-y-4 py-4">
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/5 space-y-2">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Partner Details</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center text-black font-bold">
                  {selectedSub?.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold">{selectedSub?.name}</p>
                  <p className="text-xs text-gray-500">{selectedSub?.email} • {selectedSub?.phone}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <Label className="text-gray-700 dark:text-gray-300">Notify Method</Label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setInviteMethod('email')}
                  className={cn(
                    "flex flex-col items-center justify-center py-3 rounded-xl border transition-all gap-1",
                    inviteMethod === 'email' ? "bg-yellow-400/10 border-yellow-500 text-yellow-600 dark:text-yellow-400" : "bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/5 text-gray-400"
                  )}
                >
                  <Mail size={16} />
                  <span className="text-[10px] font-bold uppercase">Email</span>
                </button>
                <button
                  type="button"
                  onClick={() => setInviteMethod('sms')}
                  className={cn(
                    "flex flex-col items-center justify-center py-3 rounded-xl border transition-all gap-1",
                    inviteMethod === 'sms' ? "bg-yellow-400/10 border-yellow-500 text-yellow-600 dark:text-yellow-400" : "bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/5 text-gray-400"
                  )}
                >
                  <MessageSquare size={16} />
                  <span className="text-[10px] font-bold uppercase">SMS</span>
                </button>
                <button
                  type="button"
                  onClick={() => setInviteMethod('both')}
                  className={cn(
                    "flex flex-col items-center justify-center py-3 rounded-xl border transition-all gap-1",
                    inviteMethod === 'both' ? "bg-yellow-400/10 border-yellow-500 text-yellow-600 dark:text-yellow-400" : "bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/5 text-gray-400"
                  )}
                >
                  <div className="flex gap-1">
                    <Mail size={12} />
                    <MessageSquare size={12} />
                  </div>
                  <span className="text-[10px] font-bold uppercase">Both</span>
                </button>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <Label className="text-gray-700 dark:text-gray-300 font-bold">Message Content</Label>
                <div className="flex bg-gray-100 dark:bg-black/40 p-1 rounded-lg border border-gray-200 dark:border-white/5">
                  <button
                    type="button"
                    onClick={() => setMessageType('default')}
                    className={cn(
                      "px-3 py-1 text-[10px] font-bold uppercase rounded-md transition-all",
                      messageType === 'default' ? "bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm" : "text-gray-400"
                    )}
                  >
                    Default
                  </button>
                  <button
                    type="button"
                    onClick={() => setMessageType('custom')}
                    className={cn(
                      "px-3 py-1 text-[10px] font-bold uppercase rounded-md transition-all",
                      messageType === 'custom' ? "bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm" : "text-gray-400"
                    )}
                  >
                    Custom
                  </button>
                </div>
              </div>

              {messageType === 'default' ? (
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5 italic text-xs text-gray-500">
                  "{defaultMessage}"
                </div>
              ) : (
                <Textarea
                  placeholder="Type your personal hire notification message here..."
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  className="min-h-[100px] bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/10 text-sm focus:border-yellow-500"
                  required
                />
              )}
            </div>

            <DialogFooter className="pt-4">
              <Button type="button" variant="ghost" onClick={() => setIsHireModalOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-black dark:bg-white text-white dark:text-black font-bold h-11 px-8 rounded-xl shadow-lg transition-all active:scale-95">
                Confirm Hire & Notify
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Start Onboarding Modal */}
      <Dialog open={isOnboardingModalOpen} onOpenChange={setIsOnboardingModalOpen}>
        <DialogContent className="bg-[#1c1e24] border-white/10 text-white sm:max-w-lg overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-3xl rounded-full"></div>
          <DialogHeader>
            <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-yellow-500" />
            </div>
            <DialogTitle className="text-2xl font-bold">Launch Onboarding Flow</DialogTitle>
            <DialogDescription className="text-gray-400">
              Select the type of subcontractor or employee you're onboarding to start the compliance and documentation flow.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 py-6">
            <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-yellow-500/30 transition-all text-left group">
              <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/10 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-white/20">
                <Building2 className="w-5 h-5 text-gray-900 dark:text-white" />
              </div>
              <div>
                <p className="font-bold text-lg text-white">Project Subcontractor</p>
                <p className="text-sm text-gray-400">Insurance, licensing, and safety certs required.</p>
              </div>
            </button>
            <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-yellow-500/30 transition-all text-left group">
              <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/10 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-white/20">
                <UserPlus className="w-5 h-5 text-gray-900 dark:text-white" />
              </div>
              <div>
                <p className="font-bold text-lg text-white">Full-time Employee</p>
                <p className="text-sm text-gray-400">W-4, I-9, and benefits enrollment.</p>
              </div>
            </button>
          </div>
          <DialogFooter>
            <Button variant="ghost" className="text-gray-400 hover:text-white" onClick={() => setIsOnboardingModalOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EnterpriseTeamManagement;
