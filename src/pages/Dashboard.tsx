import { useEffect, useMemo, useRef, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Settings, Bell, Search, Plus, Image as ImageIcon, Upload, MapPin, Phone, Globe, Award, Star, Edit2, CheckCircle, XCircle, Building, Calendar, DollarSign, Users, Target, Briefcase, Clock, Shield, FileText } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { DUMMY_CONTRACTORS_NY } from '@/data/contractors';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectImages, setProjectImages] = useState<string[]>([]);
  const [savedProjects, setSavedProjects] = useState<Array<{ id: string; title: string; description: string; images: string[] }>>([]);
  const [isListed, setIsListed] = useState(true);
  const [contractorProfile, setContractorProfile] = useState({
    companyName: '',
    profileImage: '',
    phone: '',
    website: '',
    location: '',
    about: '',
    experience: '',
    specialties: [] as string[],
    certifications: [] as string[],
    insured: false,
    bonded: false,
    licensed: false,
    yearsInBusiness: '',
    teamSize: '',
    averageProjectCost: '',
    documents: [] as Array<{ id: string; name: string; type: string; status: 'pending' | 'verified' | 'rejected'; uploadedAt: string; file?: File }>,
    // New editable fields for expertise section
    experienceLevel: 'Expert',
    experiencePercentage: 85,
    yearsOfExperience: '15+',
    projectsCompleted: '500+',
    specializations: 'Kitchen & Bath Remodeling, Custom Cabinetry, Luxury Home Renovations',
    languages: [
      { name: 'English', level: 'Native', color: 'blue' },
      { name: 'Spanish', level: 'Fluent', color: 'green' },
      { name: 'French', level: 'Intermediate', color: 'purple' }
    ],
    availabilityStatus: 'Available Now',
    acceptingProjects: true,
    responseTime: '2 Hours',
    emergencySupport: '24/7',
    nextProjectSlot: 'March 15th',
    emergencyCalls: '24/7 available',
    weekendConsultations: 'Available',
    totalProjectsCompleted: '150+',
    averageRating: '4.9★',
    satisfactionRate: '98%',
    totalProjectValue: '$2.5M+',
    supportAvailability: '24/7',
    backgroundChecked: true,
  });
  const projectSectionRef = useRef<HTMLDivElement | null>(null);
  const profileSectionRef = useRef<HTMLDivElement | null>(null);
  const publicListingDetailsRef = useRef<HTMLDivElement | null>(null);
  const [isListingOpen, setIsListingOpen] = useState(false);

  // Editable dashboard metrics
  const [metrics, setMetrics] = useState({
    activeLeads: 8,
    activeLeadsDelta: 3,
    activeProjects: 5,
    activeProjectsDelta: 2,
    revenue: '$24,500',
    revenueDelta: '+12%',
    rating: '4.8',
    ratingDelta: '+0.2',
  });
  const metricsKey = `metrics:${user.id}`;
  const saveMetrics = (m: typeof metrics) => {
    setMetrics(m);
    localStorage.setItem(metricsKey, JSON.stringify(m));
  };
  useEffect(() => {
    try {
      const raw = localStorage.getItem(metricsKey);
      if (raw) setMetrics(JSON.parse(raw));
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  const [isEditingMetrics, setIsEditingMetrics] = useState(false);

  // Client dashboard metrics (editable)
  const [clientMetrics, setClientMetrics] = useState({
    activeProjects: 3,
    activeProjectsSubtitle: '2 in progress',
    requestedQuotes: 5,
    requestedQuotesSubtitle: '3 awaiting response',
    savedContractors: 12,
    savedContractorsSubtitle: '4 new this week',
    totalSpent: '$18,500',
    totalSpentSubtitle: 'This year',
  });
  const [isEditingClientMetrics, setIsEditingClientMetrics] = useState(false);
  const [clientProfile, setClientProfile] = useState({
    name: '',
    email: '',
    phone: '',
    photo: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    about: '',
    notifyEmail: true,
    notifySms: false,
    marketingEmails: false,
  });
  const clientProfileKey = `clientProfile:${user.id}`;
  const clientMetricsKey = `clientMetrics:${user.id}`;
  const saveClientMetrics = (m: typeof clientMetrics) => {
    setClientMetrics(m);
    localStorage.setItem(clientMetricsKey, JSON.stringify(m));
  };
  useEffect(() => {
    try {
      const raw = localStorage.getItem(clientMetricsKey);
      if (raw) setClientMetrics(JSON.parse(raw));
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(clientProfileKey);
      if (raw) setClientProfile(JSON.parse(raw));
      else setClientProfile({
        name: user.name || '',
        email: user.email || '',
        phone: '',
        photo: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        about: '',
        notifyEmail: true,
        notifySms: false,
        marketingEmails: false,
      });
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  const saveClientProfile = (p: typeof clientProfile) => {
    setClientProfile(p);
    localStorage.setItem(clientProfileKey, JSON.stringify(p));
  };

  const handleClientPhotoUpload: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      saveClientProfile({ ...clientProfile, photo: String(reader.result || '') });
    };
    reader.readAsDataURL(file);
    e.currentTarget.value = '';
  };

  const isClientProfileValid = useMemo(() => {
    const nameOk = (clientProfile?.name || '').trim().length > 1;
    const emailOk = (clientProfile?.email || '').includes('@');
    const phoneOk = (clientProfile?.phone || '').trim().length >= 7;
    return nameOk && emailOk && phoneOk;
  }, [clientProfile]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return null;
  }

  // Local storage helpers for contractor projects
  const projectsKey = `projects:${user.id}`;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(projectsKey);
      if (raw) {
        setSavedProjects(JSON.parse(raw));
      }
    } catch {
      setSavedProjects([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  // Load contractor profile from localStorage
  useEffect(() => {
    try {
      const profileKey = `contractorProfile:${user.id}`;
      const raw = localStorage.getItem(profileKey);
      if (raw) {
        const profile = JSON.parse(raw);
        // Ensure all arrays exist
        if (!profile.documents) {
          profile.documents = [];
        }
        if (!profile.languages) {
          profile.languages = [];
        }
        if (!profile.specialties) {
          profile.specialties = [];
        }
        if (!profile.certifications) {
          profile.certifications = [];
        }
        setContractorProfile(profile);
      }
      const listedKey = `isListed:${user.id}`;
      const listed = localStorage.getItem(listedKey);
      if (listed !== null) {
        setIsListed(JSON.parse(listed));
      }
    } catch {
      // Use defaults
    }
  }, [user.id]);

  const persistProjects = (projects: typeof savedProjects) => {
    setSavedProjects(projects);
    localStorage.setItem(projectsKey, JSON.stringify(projects));
  };

  const saveContractorProfile = (profile: typeof contractorProfile) => {
    setContractorProfile(profile);
    localStorage.setItem(`contractorProfile:${user.id}`, JSON.stringify(profile));
  };

  const toggleListing = () => {
    const newStatus = !isListed;
    setIsListed(newStatus);
    localStorage.setItem(`isListed:${user.id}`, JSON.stringify(newStatus));
    toast({
      title: newStatus ? 'Profile Listed' : 'Profile Unlisted',
      description: newStatus ? 'Your profile is now visible to clients.' : 'Your profile is now hidden from clients.',
    });
  };

  const addSpecialty = (specialty: string) => {
    if (specialty.trim() && !contractorProfile.specialties.includes(specialty.trim())) {
      const updated = { ...contractorProfile, specialties: [...contractorProfile.specialties, specialty.trim()] };
      saveContractorProfile(updated);
    }
  };

  const removeSpecialty = (specialty: string) => {
    const updated = { ...contractorProfile, specialties: contractorProfile.specialties.filter(s => s !== specialty) };
    saveContractorProfile(updated);
  };

  const addCertification = (cert: string) => {
    if (cert.trim() && !contractorProfile.certifications.includes(cert.trim())) {
      const updated = { ...contractorProfile, certifications: [...contractorProfile.certifications, cert.trim()] };
      saveContractorProfile(updated);
    }
  };

  const removeCertification = (cert: string) => {
    const updated = { ...contractorProfile, certifications: contractorProfile.certifications.filter(c => c !== cert) };
    saveContractorProfile(updated);
  };

  const handleDocumentUpload = (files: FileList | null, documentType: string) => {
    if (!files || files.length === 0) return;
    
    const file = files[0];
    const newDocument = {
      id: Date.now().toString(),
      name: file.name,
      type: documentType,
      status: 'pending' as const,
      uploadedAt: new Date().toISOString(),
      file: file,
    };
    
    const updated = { 
      ...contractorProfile, 
      documents: [...contractorProfile.documents, newDocument] 
    };
    saveContractorProfile(updated);
    
    toast({
      title: 'Document Uploaded',
      description: `${file.name} has been uploaded for verification.`,
    });
  };

  const removeDocument = (documentId: string) => {
    const updated = { 
      ...contractorProfile, 
      documents: contractorProfile.documents.filter(d => d.id !== documentId) 
    };
    saveContractorProfile(updated);
  };

  const handleProfileImageUpload: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const updated = { ...contractorProfile, profileImage: String(reader.result || '') };
      saveContractorProfile(updated);
    };
    reader.readAsDataURL(file);
    e.currentTarget.value = '';
  };

  const addLanguage = (language: string, level: string, color: string) => {
    const newLanguage = { name: language, level, color };
    const updated = { 
      ...contractorProfile, 
      languages: [...contractorProfile.languages, newLanguage] 
    };
    saveContractorProfile(updated);
  };

  const removeLanguage = (languageName: string) => {
    const updated = { 
      ...contractorProfile, 
      languages: contractorProfile.languages.filter(l => l.name !== languageName) 
    };
    saveContractorProfile(updated);
  };

  const getDocumentStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  const getDocumentStatusIcon = (status: string) => {
    switch (status) {
      case 'verified': return <CheckCircle className="w-4 h-4" />;
      case 'rejected': return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const handleSelectImages: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    const readers = await Promise.all(files.map(f => new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.onerror = reject;
      reader.readAsDataURL(f);
    })));
    setProjectImages(prev => [...prev, ...readers].slice(0, 12));
    e.currentTarget.value = '';
  };

  const handleAddProject = () => {
    if (!projectTitle.trim()) return;
    const newProject = {
      id: Date.now().toString(),
      title: projectTitle.trim(),
      description: projectDescription.trim(),
      images: projectImages.slice(),
    };
    const updated = [newProject, ...savedProjects];
    persistProjects(updated);
    setProjectTitle('');
    setProjectDescription('');
    setProjectImages([]);
  };

  const handleDeleteProject = (id: string) => {
    const updated = savedProjects.filter(p => p.id !== id);
    persistProjects(updated);
  };

  const featuredContractors = useMemo(() => DUMMY_CONTRACTORS_NY.slice(0, 9), []);
  const [clientQuery, setClientQuery] = useState('');
  const [clientSort, setClientSort] = useState<'best' | 'rating' | 'name'>('best');
  const [clientFilterService, setClientFilterService] = useState('');
  const [clientFilterCity, setClientFilterCity] = useState('');
  const [clientMinRating, setClientMinRating] = useState<number>(0);

  const getCardImage = (idx: number) => {
    const n = (idx % 7) + 1;
    return `/thumbnail-${n}.jpg`;
  };

  const visibleContractors = useMemo(() => {
    const q = clientQuery.trim().toLowerCase();
    let list = featuredContractors.filter(c => {
      if (!q) return true;
      const hay = `${c.name} ${c.address.city} ${c.address.state} ${c.services.join(' ')}`.toLowerCase();
      return hay.includes(q);
    });
    // Apply sidebar filters
    const svc = clientFilterService.trim().toLowerCase();
    if (svc) {
      list = list.filter(c => c.services.some(s => s.toLowerCase().includes(svc)));
    }
    const city = clientFilterCity.trim().toLowerCase();
    if (city) {
      list = list.filter(c => c.address.city.toLowerCase().includes(city));
    }
    if (clientMinRating > 0) {
      list = list.filter(c => (c.rating || 0) >= clientMinRating);
    }
    if (clientSort === 'rating') list = list.slice().sort((a, b) => (b.rating || 0) - (a.rating || 0));
    if (clientSort === 'name') list = list.slice().sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [clientQuery, clientSort, clientFilterService, clientFilterCity, clientMinRating, featuredContractors]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
       <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
             <div className="flex items-center space-x-6">
               <img src="/main-logo.png" alt="Contractorlist Logo" className="h-9 w-auto" />
              <div className="hidden md:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search professionals, services..."
                     className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent w-80"
                  />
                </div>
              </div>
            </div>

             <div className="flex items-center space-x-3">
               <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                 <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-5 h-5" />
              </Button>
               <div className="flex items-center space-x-3 ml-4">
                 <Avatar className="h-9 w-9">
                  <AvatarImage src={user.avatar} alt={user.name} />
                   <AvatarFallback className="text-sm font-medium">{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                   <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                   <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                </div>
                 <Button variant="ghost" size="sm" onClick={handleLogout} className="ml-2">
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
         <div className="mb-10">
           <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name}! 👋
          </h1>
           <p className="text-lg text-gray-600">
            Here's what's happening with your {user.role} account today.
          </p>
        </div>

        {/* Stats Grid (role specific) */}
        {user.role === 'contractor' ? (
          <>
          <div className="flex justify-end mb-2">
            {!isEditingMetrics ? (
              <Button size="sm" variant="outline" onClick={()=>setIsEditingMetrics(true)}>Edit</Button>
            ) : (
              <div className="flex items-center gap-2">
                <Button size="sm" variant="default" onClick={()=>{ saveMetrics(metrics); setIsEditingMetrics(false); }}>Save</Button>
                <Button size="sm" variant="outline" onClick={()=>setIsEditingMetrics(false)}>Cancel</Button>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-blue-900">Active Leads</CardTitle>
                <div className="h-8 w-8 text-blue-600 bg-blue-200 rounded-lg flex items-center justify-center">
                  <Users className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                {!isEditingMetrics ? (
                  <>
                    <div className="text-3xl font-bold text-blue-900 mb-1">{metrics.activeLeads}</div>
                    <p className="text-sm text-blue-700 font-medium">+{metrics.activeLeadsDelta} new this week</p>
                  </>
                ) : (
                  <div className="flex items-center gap-2">
                    <Input className="h-9 w-24" value={metrics.activeLeads} onChange={(e)=>setMetrics({ ...metrics, activeLeads: Number(e.target.value)||0 })} />
                    <span className="text-sm text-blue-700">+<Input className="h-9 w-20 inline" value={metrics.activeLeadsDelta} onChange={(e)=>setMetrics({ ...metrics, activeLeadsDelta: Number(e.target.value)||0 })} /> new</span>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-green-900">Active Projects</CardTitle>
                <div className="h-8 w-8 text-green-600 bg-green-200 rounded-lg flex items-center justify-center">
                  <Briefcase className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                {!isEditingMetrics ? (
                  <>
                    <div className="text-3xl font-bold text-green-900 mb-1">{metrics.activeProjects}</div>
                    <p className="text-sm text-green-700 font-medium">{metrics.activeProjectsDelta} due this week</p>
                  </>
                ) : (
                  <div className="flex items-center gap-2">
                    <Input className="h-9 w-24" value={metrics.activeProjects} onChange={(e)=>setMetrics({ ...metrics, activeProjects: Number(e.target.value)||0 })} />
                    <span className="text-sm text-green-700"><Input className="h-9 w-20 inline" value={metrics.activeProjectsDelta} onChange={(e)=>setMetrics({ ...metrics, activeProjectsDelta: Number(e.target.value)||0 })} /> due</span>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-purple-900">Revenue</CardTitle>
                <div className="h-8 w-8 text-purple-600 bg-purple-200 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                {!isEditingMetrics ? (
                  <>
                    <div className="text-3xl font-bold text-purple-900 mb-1">{metrics.revenue}</div>
                    <p className="text-sm text-purple-700 font-medium">{metrics.revenueDelta} from last month</p>
                  </>
                ) : (
                  <div className="flex items-center gap-2">
                    <Input className="h-9 w-32" value={metrics.revenue} onChange={(e)=>setMetrics({ ...metrics, revenue: e.target.value })} />
                    <span className="text-sm text-purple-700"><Input className="h-9 w-24 inline" value={metrics.revenueDelta} onChange={(e)=>setMetrics({ ...metrics, revenueDelta: e.target.value })} /> MoM</span>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-yellow-100">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-yellow-900">Rating</CardTitle>
                <div className="h-8 w-8 text-yellow-600 bg-yellow-200 rounded-lg flex items-center justify-center">
                  <Star className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                {!isEditingMetrics ? (
                  <>
                    <div className="text-3xl font-bold text-yellow-900 mb-1">{metrics.rating}</div>
                    <p className="text-sm text-yellow-700 font-medium">{metrics.ratingDelta} from last month</p>
                  </>
                ) : (
                  <div className="flex items-center gap-2">
                    <Input className="h-9 w-20" value={metrics.rating} onChange={(e)=>setMetrics({ ...metrics, rating: e.target.value })} />
                    <span className="text-sm text-yellow-700"><Input className="h-9 w-24 inline" value={metrics.ratingDelta} onChange={(e)=>setMetrics({ ...metrics, ratingDelta: e.target.value })} /> MoM</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          </>
          ) : (
          <></>
        )}

        {/* Role-specific main sections */}
        {user.role === 'contractor' ? (
           <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mb-10" ref={projectSectionRef}>
            {/* Add Project */}
             <Card className="xl:col-span-1 border-0 shadow-lg">
               <CardHeader className="pb-6">
                 <div className="flex items-center gap-3 mb-2">
                   <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                     <Plus className="h-5 w-5 text-blue-600" />
                   </div>
                   <div>
                     <CardTitle className="text-xl font-bold text-gray-900">Add New Project</CardTitle>
                     <CardDescription className="text-gray-600">Showcase your recent work with photos</CardDescription>
                   </div>
                 </div>
              </CardHeader>
               <CardContent className="space-y-6">
                <div>
                   <label className="block text-sm font-semibold text-gray-700 mb-2">Project Title</label>
                   <Input 
                     value={projectTitle} 
                     onChange={(e) => setProjectTitle(e.target.value)} 
                     placeholder="e.g., Kitchen remodel in Brooklyn" 
                     className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                   />
                </div>
                <div>
                   <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder="Short description of the work, materials, timeline, etc."
                     className="w-full min-h-[120px] rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  />
                </div>
                <div>
                   <label className="block text-sm font-semibold text-gray-700 mb-3">Project Photos</label>
                   <div className="flex items-center gap-3 mb-3">
                     <label className="inline-flex items-center gap-2 h-11 px-4 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors">
                       <Upload className="w-4 h-4" /> Upload Images
                      <input type="file" accept="image/*" multiple className="hidden" onChange={handleSelectImages} />
                    </label>
                     <span className="text-sm text-gray-500">Up to 12 images</span>
                  </div>
                  {projectImages.length > 0 && (
                     <div className="grid grid-cols-3 gap-3">
                      {projectImages.map((src, i) => (
                         <div key={i} className="relative group">
                           <img src={src} alt="preview" className="h-24 w-full object-cover rounded-lg border border-gray-200" />
                           <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                             <Button size="sm" variant="destructive" className="h-8 w-8 p-0">
                               <XCircle className="h-4 w-4" />
                             </Button>
                           </div>
                         </div>
                      ))}
                    </div>
                  )}
                </div>
                 <Button 
                   className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-semibold" 
                   onClick={handleAddProject} 
                   disabled={!projectTitle.trim()}
                 >
                  <Plus className="w-4 h-4 mr-2" /> Add Project
                </Button>
              </CardContent>
            </Card>

            {/* Projects Gallery */}
             <Card className="xl:col-span-3 border-0 shadow-lg">
               <CardHeader className="pb-6">
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                       <ImageIcon className="h-5 w-5 text-green-600" />
                     </div>
                     <div>
                       <CardTitle className="text-xl font-bold text-gray-900">My Projects</CardTitle>
                       <CardDescription className="text-gray-600">Your portfolio shown to clients</CardDescription>
                     </div>
                   </div>
                   <Badge variant="secondary" className="text-sm font-medium">
                     {savedProjects.length} {savedProjects.length === 1 ? 'Project' : 'Projects'}
                   </Badge>
                 </div>
              </CardHeader>
              <CardContent>
                {savedProjects.length === 0 ? (
                   <div className="flex flex-col items-center justify-center text-center py-16 text-gray-500">
                     <div className="h-20 w-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                       <ImageIcon className="w-8 h-8 text-gray-400" />
                     </div>
                     <div className="text-lg font-semibold text-gray-700 mb-2">No projects yet</div>
                     <div className="text-sm text-gray-500 max-w-md">Add your first project using the form on the left to showcase your work to potential clients.</div>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {savedProjects.map((p) => (
                       <div key={p.id} className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow duration-200">
                        {p.images[0] ? (
                           <div className="relative h-48">
                             <img src={p.images[0]} alt={p.title} className="h-full w-full object-cover" />
                             <div className="absolute top-3 right-3">
                               <Button 
                                 variant="destructive" 
                                 size="sm" 
                                 onClick={() => handleDeleteProject(p.id)}
                                 className="h-8 w-8 p-0 bg-red-500 hover:bg-red-600"
                               >
                                 <XCircle className="h-4 w-4" />
                               </Button>
                             </div>
                           </div>
                         ) : (
                           <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                             <ImageIcon className="w-12 h-12 text-gray-400" />
                          </div>
                        )}
                         <div className="p-6">
                           <div className="mb-3">
                             <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                             {p.description ? (
                               <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
                             ) : (
                               <p className="text-sm text-gray-500 italic">No description provided</p>
                             )}
                          </div>
                          {p.images.length > 1 && (
                             <div className="grid grid-cols-4 gap-2">
                              {p.images.slice(1, 5).map((src, i) => (
                                 <img key={i} src={src} alt="thumb" className="h-16 w-full object-cover rounded-lg border border-gray-200" />
                              ))}
                               {p.images.length > 5 && (
                                 <div className="h-16 w-full bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-500 font-medium">
                                   +{p.images.length - 5} more
                                 </div>
                               )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ) : null}

        {/* Contractor Profile Section */}
         {user.role === 'contractor' ? (
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            {/* Profile Overview */}
             <Card className="lg:col-span-2 border-0 shadow-lg">
               <CardHeader className="pb-6">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                       <User className="h-5 w-5 text-purple-600" />
                     </div>
                  <div>
                       <CardTitle className="text-xl font-bold text-gray-900">Professional Profile</CardTitle>
                       <CardDescription className="text-gray-600">Manage your public profile and business information</CardDescription>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <Badge variant={isListed ? "default" : "secondary"} className="flex items-center gap-1 px-3 py-1">
                      {isListed ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                      {isListed ? "Listed" : "Unlisted"}
                    </Badge>
                     <Button variant="outline" size="sm" onClick={toggleListing} className="h-9">
                      {isListed ? "Unlist Profile" : "List Profile"}
                    </Button>
                  </div>
                </div>
              </CardHeader>
                             <CardContent className="space-y-8">
                {/* Profile Photo - OLX Style */}
                <div className="max-w-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Photo</h3>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <Avatar className="h-20 w-20 border-2 border-white shadow-md">
                      <AvatarImage src={contractorProfile.profileImage || user.avatar} />
                      <AvatarFallback className="text-lg font-semibold">{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <label className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-white border border-gray-300 text-sm text-gray-700 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
                        <ImageIcon className="w-4 h-4" /> Upload new photo
                        <input type="file" accept="image/*" className="hidden" onChange={handleProfileImageUpload} />
                      </label>
                      <p className="text-xs text-gray-500 mt-2">Shown in your public listing when no project cover is set.</p>
                    </div>
                  </div>
                </div>

                {/* Basic Information */}
                  <div>
                   <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                       <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                    <Input
                      value={contractorProfile.companyName}
                      onChange={(e) => saveContractorProfile({ ...contractorProfile, companyName: e.target.value })}
                      placeholder="Your company name"
                         className="h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                       <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <Input
                      value={contractorProfile.phone}
                      onChange={(e) => saveContractorProfile({ ...contractorProfile, phone: e.target.value })}
                      placeholder="(555) 555-5555"
                         className="h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                       <label className="block text-sm font-semibold text-gray-700 mb-2">Website</label>
                    <Input
                      value={contractorProfile.website}
                      onChange={(e) => saveContractorProfile({ ...contractorProfile, website: e.target.value })}
                      placeholder="https://yourwebsite.com"
                         className="h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                       <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                    <Input
                      value={contractorProfile.location}
                      onChange={(e) => saveContractorProfile({ ...contractorProfile, location: e.target.value })}
                      placeholder="City, State"
                         className="h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                     </div>
                  </div>
                </div>

                {/* About Section */}
                <div>
                   <h3 className="text-lg font-semibold text-gray-900 mb-4">About Your Business</h3>
                  <Textarea
                    value={contractorProfile.about}
                    onChange={(e) => saveContractorProfile({ ...contractorProfile, about: e.target.value })}
                    placeholder="Tell clients about your business, experience, and what makes you unique..."
                     rows={5}
                     className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 resize-none"
                  />
                </div>

                {/* Business Details */}
                  <div>
                   <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Details</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                     <div>
                       <label className="block text-sm font-semibold text-gray-700 mb-2">Years in Business</label>
                    <Input
                      value={contractorProfile.yearsInBusiness}
                      onChange={(e) => saveContractorProfile({ ...contractorProfile, yearsInBusiness: e.target.value })}
                      placeholder="5+ years"
                         className="h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                       <label className="block text-sm font-semibold text-gray-700 mb-2">Team Size</label>
                    <Input
                      value={contractorProfile.teamSize}
                      onChange={(e) => saveContractorProfile({ ...contractorProfile, teamSize: e.target.value })}
                      placeholder="1-5 employees"
                         className="h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                       <label className="block text-sm font-semibold text-gray-700 mb-2">Average Project Cost</label>
                    <Input
                      value={contractorProfile.averageProjectCost}
                      onChange={(e) => saveContractorProfile({ ...contractorProfile, averageProjectCost: e.target.value })}
                      placeholder="$5k-$25k"
                         className="h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                       <label className="block text-sm font-semibold text-gray-700 mb-2">Response Time</label>
                    <Input
                      value={contractorProfile.responseTime}
                      onChange={(e) => saveContractorProfile({ ...contractorProfile, responseTime: e.target.value })}
                      placeholder="Within 24 hours"
                         className="h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                     </div>
                  </div>
                </div>

                {/* Certifications & Insurance */}
                  <div>
                     <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Credentials</h3>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       <div className="space-y-4">
                         <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={contractorProfile.licensed}
                          onChange={(e) => saveContractorProfile({ ...contractorProfile, licensed: e.target.checked })}
                             className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                        />
                           <div>
                             <span className="text-sm font-medium text-gray-900">Licensed</span>
                             <p className="text-xs text-gray-500">State-licensed contractor</p>
                           </div>
                      </label>
                         <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={contractorProfile.insured}
                          onChange={(e) => saveContractorProfile({ ...contractorProfile, insured: e.target.checked })}
                             className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                        />
                           <div>
                             <span className="text-sm font-medium text-gray-900">Insured</span>
                             <p className="text-xs text-gray-500">General liability insurance</p>
                           </div>
                      </label>
                         <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={contractorProfile.bonded}
                          onChange={(e) => saveContractorProfile({ ...contractorProfile, bonded: e.target.checked })}
                             className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                        />
                           <div>
                             <span className="text-sm font-medium text-gray-900">Bonded</span>
                             <p className="text-xs text-gray-500">Surety bond protection</p>
                           </div>
                      </label>
                    </div>
                       <div className="md:col-span-2">
                         <label className="block text-sm font-semibold text-gray-700 mb-2">Experience Level</label>
                    <Input
                      value={contractorProfile.experience}
                      onChange={(e) => saveContractorProfile({ ...contractorProfile, experience: e.target.value })}
                      placeholder="e.g., 10+ years in residential remodeling"
                           className="h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                     </div>
                   </div>

                                       {/* Document Verification Section */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Document Verification</h3>
                      <p className="text-sm text-gray-600 mb-4">Upload important documents for verification to build trust with clients.</p>
                      
                      {/* Document Upload Areas */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                       {/* License Upload */}
                       <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-purple-400 transition-colors">
                         <div className="text-center">
                           <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                             <Award className="h-5 w-5 text-purple-600" />
                           </div>
                           <h4 className="font-semibold text-gray-900 text-sm mb-1">Business License</h4>
                           <label className="inline-flex items-center gap-1 px-3 py-1 bg-purple-600 text-white rounded text-xs hover:bg-purple-700 cursor-pointer transition-colors">
                             <Upload className="w-3 h-3" />
                             Upload
                             <input 
                               type="file" 
                               accept=".pdf,.jpg,.jpeg,.png" 
                               className="hidden" 
                               onChange={(e) => handleDocumentUpload(e.target.files, 'license')}
                             />
                           </label>
                         </div>
                       </div>

                       {/* Insurance Certificate Upload */}
                       <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-purple-400 transition-colors">
                         <div className="text-center">
                           <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                             <Shield className="h-5 w-5 text-green-600" />
                           </div>
                           <h4 className="font-semibold text-gray-900 text-sm mb-1">Insurance</h4>
                           <label className="inline-flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700 cursor-pointer transition-colors">
                             <Upload className="w-3 h-3" />
                             Upload
                             <input 
                               type="file" 
                               accept=".pdf,.jpg,.jpeg,.png" 
                               className="hidden" 
                               onChange={(e) => handleDocumentUpload(e.target.files, 'insurance')}
                             />
                           </label>
                         </div>
                       </div>

                       {/* Bond Certificate Upload */}
                       <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-purple-400 transition-colors">
                         <div className="text-center">
                           <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                             <FileText className="h-5 w-5 text-blue-600" />
                           </div>
                           <h4 className="font-semibold text-gray-900 text-sm mb-1">Bond</h4>
                           <label className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 cursor-pointer transition-colors">
                             <Upload className="w-3 h-3" />
                             Upload
                             <input 
                               type="file" 
                               accept=".pdf,.jpg,.jpeg,.png" 
                               className="hidden" 
                               onChange={(e) => handleDocumentUpload(e.target.files, 'bond')}
                             />
                           </label>
                         </div>
                       </div>

                       {/* W9 Form Upload */}
                       <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-purple-400 transition-colors">
                         <div className="text-center">
                           <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                             <FileText className="h-5 w-5 text-red-600" />
                           </div>
                           <h4 className="font-semibold text-gray-900 text-sm mb-1">W9 Form</h4>
                           <label className="inline-flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700 cursor-pointer transition-colors">
                             <Upload className="w-3 h-3" />
                             Upload
                             <input 
                               type="file" 
                               accept=".pdf,.jpg,.jpeg,.png" 
                               className="hidden" 
                               onChange={(e) => handleDocumentUpload(e.target.files, 'w9')}
                             />
                           </label>
                         </div>
                       </div>
                     </div>

                     {/* Uploaded Documents List */}
                     {contractorProfile.documents && contractorProfile.documents.length > 0 && (
                       <div>
                         <h4 className="font-semibold text-gray-900 mb-3">Uploaded Documents</h4>
                         <div className="space-y-2">
                           {contractorProfile.documents.map((doc) => (
                             <div key={doc.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50">
                               <div className="flex items-center gap-3">
                                 <div className="h-8 w-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                   <FileText className="h-4 w-4 text-purple-600" />
                                 </div>
                                 <div>
                                   <p className="font-medium text-gray-900 text-sm">{doc.name}</p>
                                   <p className="text-xs text-gray-600 capitalize">{doc.type} • {new Date(doc.uploadedAt).toLocaleDateString()}</p>
                                 </div>
                               </div>
                               <div className="flex items-center gap-2">
                                 <Badge className={`${getDocumentStatusColor(doc.status)} border text-xs`}>
                                   <div className="flex items-center gap-1">
                                     {getDocumentStatusIcon(doc.status)}
                                     <span className="capitalize">{doc.status}</span>
                                   </div>
                                 </Badge>
                                 <Button
                                   variant="outline"
                                   size="sm"
                                   onClick={() => removeDocument(doc.id)}
                                   className="h-7 w-7 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                                 >
                                   <XCircle className="h-3 w-3" />
                                 </Button>
                               </div>
                             </div>
                           ))}
                         </div>
                       </div>
                     )}
                </div>
              </CardContent>
            </Card>

            {/* Specialties & Certifications */}
              <Card className="lg:col-span-1 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Award className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">Expertise & Credentials</CardTitle>
                      <CardDescription className="text-gray-600">Showcase your specialties and certifications</CardDescription>
                    </div>
                  </div>
              </CardHeader>
              <CardContent className="space-y-6">
                                                                           {/* Experience Level */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Experience Level</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full" style={{ width: `${contractorProfile.experiencePercentage}%` }}></div>
                          </div>
                          <span className="text-sm font-bold text-orange-700">{contractorProfile.experienceLevel}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="text-center p-2 bg-orange-50 rounded-lg border border-orange-200">
                            <div className="font-bold text-orange-900">{contractorProfile.yearsOfExperience}</div>
                            <div className="text-orange-700">Industry Experience</div>
                          </div>
                          <div className="text-center p-2 bg-orange-50 rounded-lg border border-orange-200">
                            <div className="font-bold text-orange-900">{contractorProfile.projectsCompleted}</div>
                            <div className="text-orange-700">Projects Completed</div>
                          </div>
                        </div>
                        <div className="p-2 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
                          <div className="text-xs font-medium text-orange-800 mb-1">🏆 Specializations</div>
                          <div className="text-xs text-orange-700">{contractorProfile.specializations}</div>
                        </div>
                        <div className="space-y-2">
                          <Input
                            placeholder="Experience Level (e.g., Expert, Master)"
                            value={contractorProfile.experienceLevel}
                            onChange={(e) => saveContractorProfile({ ...contractorProfile, experienceLevel: e.target.value })}
                            className="h-8 text-xs border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                          />
                          <div className="flex gap-2">
                            <Input
                              placeholder="Years (e.g., 15+)"
                              value={contractorProfile.yearsOfExperience}
                              onChange={(e) => saveContractorProfile({ ...contractorProfile, yearsOfExperience: e.target.value })}
                              className="h-8 text-xs border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            />
                            <Input
                              placeholder="Projects (e.g., 500+)"
                              value={contractorProfile.projectsCompleted}
                              onChange={(e) => saveContractorProfile({ ...contractorProfile, projectsCompleted: e.target.value })}
                              className="h-8 text-xs border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            />
                          </div>
                          <Input
                            placeholder="Specializations"
                            value={contractorProfile.specializations}
                            onChange={(e) => saveContractorProfile({ ...contractorProfile, specializations: e.target.value })}
                            className="h-8 text-xs border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                          />
                        </div>
                      </div>
                    </div>

                {/* Specialties */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Specialties</h3>
                  <div className="flex gap-2 mb-3">
                    <Input
                      placeholder="Add specialty"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          addSpecialty(e.currentTarget.value);
                          e.currentTarget.value = '';
                        }
                      }}
                        className="flex-1 h-8 text-sm border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                    <Button size="sm" onClick={() => {
                      const input = document.querySelector('input[placeholder="Add specialty"]') as HTMLInputElement;
                      if (input) {
                        addSpecialty(input.value);
                        input.value = '';
                      }
                      }} className="h-8 px-3 bg-orange-600 hover:bg-orange-700 text-xs">
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {contractorProfile.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1 px-2 py-1 text-xs bg-orange-100 text-orange-800 hover:bg-orange-200">
                        {specialty}
                        <XCircle
                          className="w-3 h-3 cursor-pointer hover:text-red-500"
                          onClick={() => removeSpecialty(specialty)}
                        />
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Certifications</h3>
                  <div className="flex gap-2 mb-3">
                    <Input
                      placeholder="Add certification"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          addCertification(e.currentTarget.value);
                          e.currentTarget.value = '';
                        }
                      }}
                        className="flex-1 h-8 text-sm border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                    <Button size="sm" onClick={() => {
                      const input = document.querySelector('input[placeholder="Add certification"]') as HTMLInputElement;
                      if (input) {
                        addCertification(input.value);
                        input.value = '';
                      }
                      }} className="h-8 px-3 bg-orange-600 hover:bg-orange-700 text-xs">
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {contractorProfile.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs border-orange-300 text-orange-700">
                        <Award className="w-3 h-3" />
                        {cert}
                        <XCircle
                          className="w-3 h-3 cursor-pointer hover:text-red-500"
                          onClick={() => removeCertification(cert)}
                        />
                      </Badge>
                    ))}
                    </div>
                  </div>

                                                                           {/* Languages */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Languages Spoken</h3>
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 gap-2">
                          {contractorProfile.languages.map((lang, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                              <div className="flex items-center gap-3">
                                <div className={`w-3 h-3 bg-${lang.color}-500 rounded-full`}></div>
                                <div>
                                  <span className={`text-sm font-bold text-${lang.color}-900`}>{lang.name}</span>
                                  <div className={`text-xs text-${lang.color}-700`}>{lang.level}</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge className={`px-3 py-1 text-xs bg-${lang.color}-600 text-white font-semibold`}>{lang.level}</Badge>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => removeLanguage(lang.name)}
                                  className="h-6 w-6 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                                >
                                  <XCircle className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="p-2 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="text-xs font-medium text-gray-700 mb-1">🌍 Communication</div>
                          <div className="text-xs text-gray-600">Professional communication in all languages. Technical terms explained clearly.</div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            <Input
                              placeholder="Language name"
                              className="h-8 text-xs border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                              onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                  const input = e.currentTarget;
                                  const levelInput = input.parentElement?.nextElementSibling?.querySelector('input') as HTMLInputElement;
                                  const colorSelect = input.parentElement?.nextElementSibling?.nextElementSibling?.querySelector('select') as HTMLSelectElement;
                                  if (input.value && levelInput?.value && colorSelect?.value) {
                                    addLanguage(input.value, levelInput.value, colorSelect.value);
                                    input.value = '';
                                    levelInput.value = '';
                                    colorSelect.value = 'blue';
                                  }
                                }
                              }}
                            />
                            <Input
                              placeholder="Level (Native, Fluent, etc.)"
                              className="h-8 text-xs border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            />
                            <select className="h-8 text-xs border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded">
                              <option value="blue">Blue</option>
                              <option value="green">Green</option>
                              <option value="purple">Purple</option>
                              <option value="red">Red</option>
                              <option value="yellow">Yellow</option>
                            </select>
                          </div>
                          <Button 
                            size="sm" 
                            className="h-8 px-3 bg-orange-600 hover:bg-orange-700 text-xs"
                            onClick={() => {
                              const nameInput = document.querySelector('input[placeholder="Language name"]') as HTMLInputElement;
                              const levelInput = document.querySelector('input[placeholder="Level (Native, Fluent, etc.)"]') as HTMLInputElement;
                              const colorSelect = document.querySelector('select') as HTMLSelectElement;
                              if (nameInput?.value && levelInput?.value && colorSelect?.value) {
                                addLanguage(nameInput.value, levelInput.value, colorSelect.value);
                                nameInput.value = '';
                                levelInput.value = '';
                                colorSelect.value = 'blue';
                              }
                            }}
                          >
                            Add Language
                          </Button>
                        </div>
                      </div>
                    </div>

                                                                           {/* Availability Status */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Availability & Response</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                            <div>
                              <span className="text-sm font-bold text-green-900">{contractorProfile.availabilityStatus}</span>
                              <div className="text-xs text-green-700">Ready for new projects</div>
                            </div>
                          </div>
                          <Badge className="px-3 py-1 text-xs bg-green-600 text-white font-semibold">
                            {contractorProfile.acceptingProjects ? 'Accepting Projects' : 'Not Available'}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                            <div className="text-lg font-bold text-blue-900">{contractorProfile.responseTime}</div>
                            <div className="text-xs text-blue-700 font-medium">Response Time</div>
                            <div className="text-xs text-blue-600 mt-1">Average</div>
                          </div>
                          <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                            <div className="text-lg font-bold text-purple-900">{contractorProfile.emergencySupport}</div>
                            <div className="text-xs text-purple-700 font-medium">Emergency</div>
                            <div className="text-xs text-purple-600 mt-1">Support</div>
                          </div>
                        </div>
                        <div className="p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                          <div className="flex items-center gap-2 text-xs font-bold text-yellow-800 mb-2">
                            <span>📅</span>
                            <span>Current Availability</span>
                          </div>
                          <div className="text-xs text-yellow-700 space-y-1">
                            <div>• Next project slot: {contractorProfile.nextProjectSlot}</div>
                            <div>• Emergency calls: {contractorProfile.emergencyCalls}</div>
                            <div>• Weekend consultations: {contractorProfile.weekendConsultations}</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Input
                            placeholder="Availability Status"
                            value={contractorProfile.availabilityStatus}
                            onChange={(e) => saveContractorProfile({ ...contractorProfile, availabilityStatus: e.target.value })}
                            className="h-8 text-xs border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                          />
                          <div className="flex gap-2">
                            <Input
                              placeholder="Response Time"
                              value={contractorProfile.responseTime}
                              onChange={(e) => saveContractorProfile({ ...contractorProfile, responseTime: e.target.value })}
                              className="h-8 text-xs border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            />
                            <Input
                              placeholder="Emergency Support"
                              value={contractorProfile.emergencySupport}
                              onChange={(e) => saveContractorProfile({ ...contractorProfile, emergencySupport: e.target.value })}
                              className="h-8 text-xs border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            />
                          </div>
                          <div className="flex gap-2">
                            <Input
                              placeholder="Next Project Slot"
                              value={contractorProfile.nextProjectSlot}
                              onChange={(e) => saveContractorProfile({ ...contractorProfile, nextProjectSlot: e.target.value })}
                              className="h-8 text-xs border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            />
                            <Input
                              placeholder="Weekend Consultations"
                              value={contractorProfile.weekendConsultations}
                              onChange={(e) => saveContractorProfile({ ...contractorProfile, weekendConsultations: e.target.value })}
                              className="h-8 text-xs border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                                     {/* Quick Stats */}
                   <div className="pt-4 border-t border-gray-200">
                     <h3 className="text-sm font-semibold text-gray-900 mb-3">Performance Metrics</h3>
                     <div className="grid grid-cols-2 gap-4">
                       <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                         <div className="text-xl font-bold text-blue-900 mb-1">{contractorProfile.totalProjectsCompleted}</div>
                         <div className="text-xs text-blue-700 font-medium">Projects Completed</div>
                         <div className="text-xs text-blue-600 mt-1">Last 3 years</div>
                       </div>
                       <div className="text-center p-3 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg">
                         <div className="text-xl font-bold text-yellow-900 mb-1">{contractorProfile.averageRating}</div>
                         <div className="text-xs text-yellow-700 font-medium">Average Rating</div>
                         <div className="text-xs text-yellow-600 mt-1">{contractorProfile.satisfactionRate} satisfaction</div>
                       </div>
                     </div>
                     <div className="mt-3 grid grid-cols-2 gap-3">
                       <div className="text-center p-2 bg-gray-50 rounded-lg">
                         <div className="text-lg font-bold text-gray-900">{contractorProfile.totalProjectValue}</div>
                         <div className="text-xs text-gray-600">Total Project Value</div>
                       </div>
                       <div className="text-center p-2 bg-gray-50 rounded-lg">
                         <div className="text-lg font-bold text-gray-900">{contractorProfile.supportAvailability}</div>
                         <div className="text-xs text-gray-600">Support Available</div>
                       </div>
                     </div>
                     <div className="mt-3 p-2 bg-green-50 rounded-lg border border-green-200">
                       <div className="flex items-center gap-2 text-xs">
                         <CheckCircle className="w-3 h-3 text-green-600" />
                         <span className="font-medium text-green-800">Verified Professional</span>
                         <span className="text-green-600">• Background checked</span>
                       </div>
                     </div>
                     <div className="space-y-2 mt-3">
                       <div className="flex gap-2">
                         <Input
                           placeholder="Total Projects (e.g., 150+)"
                           value={contractorProfile.totalProjectsCompleted}
                           onChange={(e) => saveContractorProfile({ ...contractorProfile, totalProjectsCompleted: e.target.value })}
                           className="h-8 text-xs border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                         />
                         <Input
                           placeholder="Average Rating (e.g., 4.9★)"
                           value={contractorProfile.averageRating}
                           onChange={(e) => saveContractorProfile({ ...contractorProfile, averageRating: e.target.value })}
                           className="h-8 text-xs border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                         />
                       </div>
                       <div className="flex gap-2">
                         <Input
                           placeholder="Satisfaction Rate (e.g., 98%)"
                           value={contractorProfile.satisfactionRate}
                           onChange={(e) => saveContractorProfile({ ...contractorProfile, satisfactionRate: e.target.value })}
                           className="h-8 text-xs border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                         />
                         <Input
                           placeholder="Total Project Value (e.g., $2.5M+)"
                           value={contractorProfile.totalProjectValue}
                           onChange={(e) => saveContractorProfile({ ...contractorProfile, totalProjectValue: e.target.value })}
                           className="h-8 text-xs border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                         />
                       </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
                 ) : (
           <div className="space-y-10">
            {/* Client quick metrics */}
            <div className="mb-2 flex justify-end">
              {!isEditingClientMetrics ? (
                <Button size="sm" variant="outline" onClick={() => setIsEditingClientMetrics(true)}>Edit</Button>
              ) : (
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="default" onClick={() => { saveClientMetrics(clientMetrics); setIsEditingClientMetrics(false); }}>Save</Button>
                  <Button size="sm" variant="outline" onClick={() => { try { const raw = localStorage.getItem(clientMetricsKey); if (raw) setClientMetrics(JSON.parse(raw)); } catch {}; setIsEditingClientMetrics(false); }}>Cancel</Button>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Active Projects */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-violet-50 to-violet-100">
                <CardHeader className="space-y-1 pb-3">
                  <CardTitle className="text-sm font-semibold text-violet-900">Active Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  {!isEditingClientMetrics ? (
                    <>
                      <div className="text-3xl font-bold text-violet-900 mb-1">{clientMetrics.activeProjects}</div>
                      <div className="text-sm text-violet-800/80">{clientMetrics.activeProjectsSubtitle}</div>
                    </>
                  ) : (
                    <div className="space-y-2">
                      <Input type="number" value={clientMetrics.activeProjects} onChange={(e) => setClientMetrics({ ...clientMetrics, activeProjects: Number(e.target.value || 0) })} className="h-9" />
                      <Input value={clientMetrics.activeProjectsSubtitle} onChange={(e) => setClientMetrics({ ...clientMetrics, activeProjectsSubtitle: e.target.value })} className="h-9" />
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Requested Quotes */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-amber-100">
                <CardHeader className="space-y-1 pb-3">
                  <CardTitle className="text-sm font-semibold text-amber-900">Requested Quotes</CardTitle>
                </CardHeader>
                <CardContent>
                  {!isEditingClientMetrics ? (
                    <>
                      <div className="text-3xl font-bold text-amber-900 mb-1">{clientMetrics.requestedQuotes}</div>
                      <div className="text-sm text-amber-800/80">{clientMetrics.requestedQuotesSubtitle}</div>
                    </>
                  ) : (
                    <div className="space-y-2">
                      <Input type="number" value={clientMetrics.requestedQuotes} onChange={(e) => setClientMetrics({ ...clientMetrics, requestedQuotes: Number(e.target.value || 0) })} className="h-9" />
                      <Input value={clientMetrics.requestedQuotesSubtitle} onChange={(e) => setClientMetrics({ ...clientMetrics, requestedQuotesSubtitle: e.target.value })} className="h-9" />
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Saved Contractors */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-sky-50 to-sky-100">
                <CardHeader className="space-y-1 pb-3">
                  <CardTitle className="text-sm font-semibold text-sky-900">Saved Contractors</CardTitle>
                </CardHeader>
                <CardContent>
                  {!isEditingClientMetrics ? (
                    <>
                      <div className="text-3xl font-bold text-sky-900 mb-1">{clientMetrics.savedContractors}</div>
                      <div className="text-sm text-sky-800/80">{clientMetrics.savedContractorsSubtitle}</div>
                    </>
                  ) : (
                    <div className="space-y-2">
                      <Input type="number" value={clientMetrics.savedContractors} onChange={(e) => setClientMetrics({ ...clientMetrics, savedContractors: Number(e.target.value || 0) })} className="h-9" />
                      <Input value={clientMetrics.savedContractorsSubtitle} onChange={(e) => setClientMetrics({ ...clientMetrics, savedContractorsSubtitle: e.target.value })} className="h-9" />
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Total Spent */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-emerald-100">
                <CardHeader className="space-y-1 pb-3">
                  <CardTitle className="text-sm font-semibold text-emerald-900">Total Spent</CardTitle>
                </CardHeader>
                <CardContent>
                  {!isEditingClientMetrics ? (
                    <>
                      <div className="text-3xl font-bold text-emerald-900 mb-1">{clientMetrics.totalSpent}</div>
                      <div className="text-sm text-emerald-800/80">{clientMetrics.totalSpentSubtitle}</div>
                    </>
                  ) : (
                    <div className="space-y-2">
                      <Input value={clientMetrics.totalSpent} onChange={(e) => setClientMetrics({ ...clientMetrics, totalSpent: e.target.value })} className="h-9" />
                      <Input value={clientMetrics.totalSpentSubtitle} onChange={(e) => setClientMetrics({ ...clientMetrics, totalSpentSubtitle: e.target.value })} className="h-9" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
             {/* Projects */}
             <div className="flex items-center justify-between mt-8">
               <h3 className="text-base font-semibold text-gray-900">Projects</h3>
             </div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {/* Project Request Form */}
               <Card className="lg:col-span-2 border-0 shadow-lg">
                 <CardHeader className="pb-6">
                   <div className="flex items-center gap-3">
                     <div className="h-10 w-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                       <Plus className="h-5 w-5 text-yellow-600" />
                     </div>
                     <div>
                       <CardTitle className="text-xl font-bold text-gray-900">New Project Request</CardTitle>
                       <CardDescription className="text-gray-600">Get quotes from qualified contractors</CardDescription>
                     </div>
                   </div>
                 </CardHeader>
                 <CardContent className="space-y-6">
                   <div>
                     <label className="block text-sm font-semibold text-gray-700 mb-2">Project Type</label>
                     <select className="w-full h-11 rounded-lg border border-gray-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500">
                       <option value="">Select project type</option>
                       <option value="kitchen">Kitchen Remodeling</option>
                       <option value="bathroom">Bathroom Remodeling</option>
                       <option value="roofing">Roofing</option>
                       <option value="plumbing">Plumbing</option>
                       <option value="electrical">Electrical</option>
                       <option value="painting">Painting</option>
                       <option value="landscaping">Landscaping</option>
                       <option value="other">Other</option>
                     </select>
                   </div>
                   <div>
                     <label className="block text-sm font-semibold text-gray-700 mb-2">Project Description</label>
                     <textarea
                       placeholder="Describe your project in detail..."
                       className="w-full min-h-[120px] rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 resize-none"
                     />
                   </div>
                   <div>
                     <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range</label>
                     <select className="w-full h-11 rounded-lg border border-gray-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500">
                       <option value="">Select budget range</option>
                       <option value="under-5k">Under $5,000</option>
                       <option value="5k-15k">$5,000 - $15,000</option>
                       <option value="15k-30k">$15,000 - $30,000</option>
                       <option value="30k-50k">$30,000 - $50,000</option>
                       <option value="over-50k">Over $50,000</option>
                     </select>
                   </div>
                   <div>
                     <label className="block text-sm font-semibold text-gray-700 mb-2">Timeline</label>
                     <select className="w-full h-11 rounded-lg border border-gray-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500">
                       <option value="">Select timeline</option>
                       <option value="asap">ASAP</option>
                       <option value="1-2-weeks">1-2 weeks</option>
                       <option value="1-month">1 month</option>
                       <option value="2-3-months">2-3 months</option>
                       <option value="flexible">Flexible</option>
                     </select>
                   </div>
                   <Button 
                     className="w-full h-11 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold" 
                   >
                     <Plus className="w-4 h-4 mr-2" /> Request Quotes
                   </Button>
                 </CardContent>
               </Card>
               <div className="lg:col-span-1">
                 <div className="lg:sticky lg:top-6 space-y-6">
                   <Card className="border-0 shadow-lg">
                     <CardHeader className="pb-4">
                       <CardTitle className="text-base font-semibold text-gray-900">Profile Preview</CardTitle>
                       <CardDescription className="text-gray-600">What contractors see</CardDescription>
                 </CardHeader>
                     <CardContent className="space-y-4">
                       <div className="flex items-center gap-3">
                         <Avatar className="h-12 w-12 border border-gray-200">
                           <AvatarImage src={clientProfile.photo || user.avatar} />
                           <AvatarFallback>{(clientProfile.name || user.name || 'U').charAt(0).toUpperCase()}</AvatarFallback>
                         </Avatar>
                         <div className="min-w-0">
                           <div className="text-sm font-semibold text-gray-900 truncate">{clientProfile.name || user.name}</div>
                           <div className="text-xs text-gray-600 truncate">{clientProfile.email || user.email}</div>
                       </div>
                     </div>
                       <div className="grid grid-cols-2 gap-3 text-sm">
                         <div>
                           <div className="text-xs text-gray-500">Phone</div>
                           <div className="font-medium text-gray-900 truncate">{clientProfile.phone || '—'}</div>
                         </div>
                         <div>
                           <div className="text-xs text-gray-500">Location</div>
                           <div className="font-medium text-gray-900 truncate">{[clientProfile.city, clientProfile.state].filter(Boolean).join(', ') || '—'}</div>
                     </div>

                   </div>
                 </CardContent>
               </Card>
                   <Card className="border-0 shadow-lg">
                     <CardHeader className="pb-4">
                       <CardTitle className="text-base font-semibold text-gray-900">Quick Links</CardTitle>
                       <CardDescription className="text-gray-600">Shortcuts for common actions</CardDescription>
                     </CardHeader>
                     <CardContent className="space-y-3">
                       <Button variant="outline" className="w-full justify-start h-10" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Edit Personal Details</Button>
                       <Button variant="outline" className="w-full justify-start h-10" onClick={() => navigate('/contractors')}>Find Professionals</Button>
                       <Button variant="outline" className="w-full justify-start h-10">Saved Contractors</Button>
                     </CardContent>
                   </Card>
                 </div>
               </div>
             </div>

             {/* Contractor Discovery */}
             <Card className="border-0 shadow-lg">
               <CardHeader className="pb-6">
                <div className="flex items-start justify-between gap-6">
                   <div className="flex items-center gap-4">
                     <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                       <Search className="h-6 w-6 text-white" />
                     </div>
                  <div>
                       <CardTitle className="text-2xl font-bold text-gray-900">Find Qualified Contractors</CardTitle>
                       <CardDescription className="text-gray-600 text-base">Browse vetted professionals with ratings and detailed profiles</CardDescription>
                     </div>
                  </div>
                  <div className="flex items-center gap-4 w-full md:w-auto">
                     <div className="relative flex-1 md:w-80">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        value={clientQuery}
                        onChange={(e) => setClientQuery(e.target.value)}
                        placeholder="Search by name, city, or service..."
                         className="pl-12 h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-base rounded-xl"
                      />
                    </div>
                    <select
                      value={clientSort}
                      onChange={(e) => setClientSort(e.target.value as any)}
                       className="h-12 rounded-xl border border-gray-200 bg-white px-4 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                    >
                      <option value="best">Best match</option>
                       <option value="rating">Highest rated</option>
                       <option value="name">Name A-Z</option>
                       <option value="experience">Most experienced</option>
                    </select>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                 <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                   {/* Enhanced Filters */}
                   <aside className="lg:col-span-1">
                     <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
                       <div className="flex items-center gap-3 mb-6">
                         <div className="h-8 w-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                           <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                           </svg>
                         </div>
                         <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                       </div>
                       <div className="space-y-6">
                         <div>
                           <label className="block text-sm font-semibold text-gray-700 mb-3">Service Type</label>
                           <Input 
                             value={clientFilterService} 
                             onChange={(e) => setClientFilterService(e.target.value)} 
                             placeholder="e.g., Plumbing, Electrical..." 
                             className="h-11 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg" 
                           />
                         </div>
                         <div>
                           <label className="block text-sm font-semibold text-gray-700 mb-3">Location</label>
                           <Input 
                             value={clientFilterCity} 
                             onChange={(e) => setClientFilterCity(e.target.value)} 
                             placeholder="e.g., Brooklyn, Manhattan..." 
                             className="h-11 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg" 
                           />
                         </div>
                         <div>
                           <label className="block text-sm font-semibold text-gray-700 mb-3">Minimum Rating</label>
                           <select 
                             value={clientMinRating} 
                             onChange={(e) => setClientMinRating(Number(e.target.value))} 
                             className="w-full h-11 rounded-lg border border-gray-200 px-4 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                           >
                             <option value={0}>Any rating</option>
                             <option value={3}>⭐ 3.0+ stars</option>
                             <option value={4}>⭐ 4.0+ stars</option>
                             <option value={4.5}>⭐ 4.5+ stars</option>
                           </select>
                         </div>
                         <div className="pt-4 border-t border-gray-200">
                           <Button 
                             variant="outline" 
                             className="w-full h-11 border-gray-300 hover:border-indigo-400 hover:bg-indigo-50 text-gray-700 font-medium rounded-lg" 
                             onClick={() => { setClientFilterService(''); setClientFilterCity(''); setClientMinRating(0); }}
                           >
                             <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                             </svg>
                             Clear All Filters
                           </Button>
                         </div>
                       </div>
                     </div>
                   </aside>
                   {/* Enhanced Results */}
                   <div className="lg:col-span-3">
                     <div className="flex items-center justify-between mb-6">
                       <div className="flex items-center gap-3">
                         <h3 className="text-lg font-bold text-gray-900">Available Contractors</h3>
                         <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 border-indigo-200">
                           {visibleContractors.length} found
                         </Badge>
                       </div>
                     </div>
                {visibleContractors.length === 0 ? (
                  <div className="text-center text-gray-600 py-20 border-2 border-dashed border-gray-200 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                     <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                       <Search className="w-10 h-10 text-gray-400" />
                     </div>
                     <div className="text-xl font-bold text-gray-700 mb-3">No contractors found</div>
                     <div className="text-gray-500 mb-6">Try adjusting your search criteria or filters</div>
                     <Button 
                       variant="outline" 
                       className="border-gray-300 hover:border-indigo-400 hover:bg-indigo-50"
                       onClick={() => { setClientQuery(''); setClientFilterService(''); setClientFilterCity(''); setClientMinRating(0); }}
                     >
                       Clear Search
                     </Button>
                  </div>
                ) : (
                       <div className="grid grid-cols-1 gap-6">
                    {visibleContractors.map((c, idx) => (
                       <div key={c.id} className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:border-indigo-200">
                             <div className="flex gap-6 p-6">
                               {/* Enhanced Thumbnail */}
                               <div className="relative w-32 h-24 flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-md">
                                 <img src={getCardImage(idx)} alt={`${c.name} cover`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                               {/* Enhanced Details */}
                               <div className="flex-1 min-w-0">
                                 <div className="flex items-start justify-between gap-4">
                                   <div className="min-w-0 flex-1">
                                     <div className="flex items-center gap-3 mb-2">
                                       <h3 className="text-lg font-bold text-gray-900 truncate">{c.name}</h3>
                                       <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                                         Verified
                                       </Badge>
                                     </div>
                                     <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                       <div className="flex items-center gap-1">
                                         <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                         </svg>
                                         <span>{c.address.city}, {c.address.state}</span>
                                       </div>
                                       <div className="flex items-center gap-1">
                                         <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                                         </svg>
                                         <span>{10 + (idx % 6)} years experience</span>
                                       </div>
                                     </div>
                                     <div className="flex flex-wrap gap-2 mb-4">
                                       {c.services.slice(0, 4).map((s) => (
                                         <Badge key={s} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs font-medium">{s}</Badge>
                                       ))}
                                       {c.services.length > 4 ? (
                                         <Badge variant="secondary" className="bg-gray-100 text-gray-600 border-gray-200 text-xs">+{c.services.length - 4} more</Badge>
                                       ) : null}
                            </div>
                          </div>
                                   <div className="shrink-0 text-right">
                                     <div className="inline-flex items-center gap-2 bg-yellow-50 px-3 py-2 rounded-lg border border-yellow-200">
                                       <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                       <span className="text-lg font-bold text-gray-900">{(c.rating || 4.2).toFixed(1)}</span>
                             </div>
                                     <div className="text-sm text-gray-500 mt-1">({150 - idx * 4} reviews)</div>
                           </div>
                          </div>
                                 <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                   <Button className="h-11 px-6 bg-gradient-to-r from-[#fce011] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#f1c40f] text-black font-bold shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg">
                                     <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                     </svg>
                                     Call Now
                                   </Button>
                                   <Button variant="outline" className="h-11 px-6 border-gray-300 hover:border-indigo-400 hover:bg-indigo-50 font-medium rounded-lg">
                                     <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                     </svg>
                                     Send Message
                                   </Button>
                                   <Button variant="ghost" className="h-11 px-4 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg">
                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M5.5 9.5a.5.5 0 11-1 0 .5.5 0 011 0zm5.5 0a.5.5 0 11-1 0 .5.5 0 011 0zm5.5 0a.5.5 0 11-1 0 .5.5 0 011 0z" />
                                     </svg>
                                   </Button>
                             </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                   </div>
                 </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Quick Actions */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
           <Card className="border-0 shadow-lg">
             <CardHeader className="pb-6">
               <div className="flex items-center gap-3">
                 <div className="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                   <Target className="h-5 w-5 text-indigo-600" />
                 </div>
                 <div>
                   <CardTitle className="text-xl font-bold text-gray-900">Quick Actions</CardTitle>
                   <CardDescription className="text-gray-600">
                Get started with these common tasks
              </CardDescription>
                 </div>
               </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                 className="w-full justify-start h-12 text-left px-4 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50"
                variant="outline"
                onClick={() => {
                  if (user.role === 'contractor' && projectSectionRef.current) {
                    projectSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    toast({ title: 'For contractors', description: 'Switch to a contractor account to add projects.' });
                  }
                }}
              >
                 <Plus className="w-5 h-5 mr-3 text-indigo-600" />
                 <div>
                   <div className="font-semibold text-gray-900">Create New Project</div>
                   <div className="text-sm text-gray-500">Add a new project to your portfolio</div>
                 </div>
              </Button>
              <Button
                 className="w-full justify-start h-12 text-left px-4 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50"
                variant="outline"
                onClick={() => {
                  if (profileSectionRef.current) {
                    profileSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                 <User className="w-5 h-5 mr-3 text-indigo-600" />
                 <div>
                   <div className="font-semibold text-gray-900">Update Profile</div>
                   <div className="text-sm text-gray-500">Edit your professional information</div>
                 </div>
              </Button>
              <Button
                 className="w-full justify-start h-12 text-left px-4 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50"
                variant="outline"
                onClick={() => {
                  navigate('/contractors');
                }}
              >
                 <Search className="w-5 h-5 mr-3 text-indigo-600" />
                 <div>
                   <div className="font-semibold text-gray-900">Find Professionals</div>
                   <div className="text-sm text-gray-500">Browse other contractors</div>
                 </div>
              </Button>
              <Button
                 className="w-full justify-start h-12 text-left px-4 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50"
                variant="outline"
                onClick={() => {
                  toast({ title: 'Notifications', description: 'You have 1 unread notification.' });
                }}
              >
                 <Bell className="w-5 h-5 mr-3 text-indigo-600" />
                 <div>
                   <div className="font-semibold text-gray-900">View Notifications</div>
                   <div className="text-sm text-gray-500">Check your latest updates</div>
                 </div>
              </Button>
            </CardContent>
          </Card>

                     <Card className="border-0 shadow-lg">
             <CardHeader className="pb-6">
               <div className="flex items-center gap-3">
                 <div className="h-10 w-10 bg-teal-100 rounded-lg flex items-center justify-center">
                   <Calendar className="h-5 w-5 text-teal-600" />
                 </div>
                 <div>
                   <CardTitle className="text-xl font-bold text-gray-900">Recent Activity</CardTitle>
                   <CardDescription className="text-gray-600">
                Your latest interactions and updates
              </CardDescription>
                 </div>
               </div>
            </CardHeader>
             <CardContent className="space-y-6">
               <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                 <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                 <div className="flex-1 min-w-0">
                   <p className="text-sm font-semibold text-gray-900">New lead received</p>
                   <p className="text-sm text-gray-600">Kitchen renovation project</p>
                </div>
                 <span className="text-xs text-gray-400 font-medium">2h ago</span>
              </div>
               <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                 <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                 <div className="flex-1 min-w-0">
                   <p className="text-sm font-semibold text-gray-900">Project completed</p>
                   <p className="text-sm text-gray-600">Bathroom remodeling</p>
                </div>
                 <span className="text-xs text-gray-400 font-medium">1d ago</span>
              </div>
               <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                 <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                 <div className="flex-1 min-w-0">
                   <p className="text-sm font-semibold text-gray-900">New review received</p>
                   <p className="text-sm text-gray-600">5-star rating</p>
                </div>
                 <span className="text-xs text-gray-400 font-medium">3d ago</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Summary */}
         <Card className="border-0 shadow-lg" ref={profileSectionRef}>
           <CardHeader className="pb-6">
             <div className="flex items-center gap-3">
               <div className="h-10 w-10 bg-pink-100 rounded-lg flex items-center justify-center">
                 <User className="h-5 w-5 text-pink-600" />
               </div>
               <div>
                 <CardTitle className="text-xl font-bold text-gray-900">Profile Summary</CardTitle>
                 <CardDescription className="text-gray-600">
              Your account information and preferences
            </CardDescription>
               </div>
             </div>
          </CardHeader>
          <CardContent>
             <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
               <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                 <AvatarFallback className="text-xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                   {user.name.charAt(0).toUpperCase()}
                 </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                 <h3 className="text-2xl font-bold text-gray-900 mb-1">{user.name}</h3>
                 <p className="text-gray-600 mb-3">{user.email}</p>
                 <div className="flex items-center space-x-3">
                   <Badge variant="secondary" className="capitalize px-3 py-1 text-sm font-medium">
                    {user.role}
                  </Badge>
                   <Badge variant="outline" className="px-3 py-1 text-sm font-medium border-green-300 text-green-700">
                     <CheckCircle className="w-3 h-3 mr-1" />
                     Verified
                   </Badge>
                </div>
              </div>
               <Button variant="outline" className="h-11 px-6 font-semibold">
                 <Edit2 className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

          {/* Public Listing (Visible when Listed) */}
          {user.role === 'contractor' && isListed && (
            <Card className="mt-10 border-0 shadow-lg max-w-6xl mx-auto">
              <CardHeader className="pb-4 border-b border-gray-100">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 shrink-0 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900">Your Public Listing</CardTitle>
                      <CardDescription className="text-gray-600">This is what clients will see</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">Listed</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-8 p-6">
                {/* Compact Marketplace Card */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                  <div className="relative h-40 w-full bg-gray-100">
                    {savedProjects[0]?.images?.[0] ? (
                      <img src={savedProjects[0].images[0]} alt="cover" className="h-full w-full object-cover" />
                    ) : (
                      <div className="h-full w-full grid place-items-center">
                        <img src={contractorProfile.profileImage || user.avatar} alt="profile" className="h-24 w-24 rounded-full object-cover border-4 border-white shadow" />
                      </div>
                    )}
                    <button className="absolute top-3 right-3 h-9 w-9 rounded-lg bg-white/95 hover:bg-white grid place-items-center shadow-sm">
                      <Star className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="font-semibold text-gray-900 truncate">{contractorProfile.companyName || user.name}</div>
                        <div className="text-sm text-gray-600 truncate">{contractorProfile.location || 'Location not provided'}</div>
                      </div>
                      <div className="shrink-0 text-right">
                        <div className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          {contractorProfile.averageRating || '4.7'}
                        </div>
                        <div className="text-xs text-gray-500">({contractorProfile.projectsCompleted?.toString().replace('+','') || savedProjects.length * 30 || 150} reviews)</div>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(contractorProfile.specialties || []).slice(0, 3).map((s, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800">{s}</span>
                      ))}
                      {((contractorProfile.specialties || []).length > 3) && (
                        <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800">+{(contractorProfile.specialties || []).length - 3} more</span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <div className="text-xs text-gray-500">Experience</div>
                        <div className="text-sm font-semibold text-gray-900">{contractorProfile.yearsOfExperience || contractorProfile.experience || '—'}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Projects completed</div>
                        <div className="text-sm font-semibold text-gray-900">{(contractorProfile.projectsCompleted || savedProjects.length || '—').toString()}</div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <Button className="flex-1 h-10 bg-[#f3b800] hover:bg-[#e3a900] text-white font-semibold" onClick={() => setIsListingOpen(true)}>View Details</Button>
                      {contractorProfile.phone && (
                        <a href={`tel:${contractorProfile.phone}`} className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-200 bg-white text-gray-900 hover:bg-gray-50">
                          <Phone className="w-4 h-4" />
                        </a>
                      )}
                      <Button variant="outline" className="h-10 w-10 p-0" onClick={() => toast({ title: 'Send message', description: 'Messaging coming soon.' })}>
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Detailed Listing */}
                <div ref={publicListingDetailsRef} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight">{contractorProfile.companyName || user.name}</h2>
                    <div className="text-sm text-gray-600 flex flex-wrap items-center gap-2">
                      <span>{contractorProfile.location || 'Location not provided'}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{contractorProfile.yearsInBusiness ? `${contractorProfile.yearsInBusiness} in business` : 'Years in business: —'}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {contractorProfile.licensed && (<Badge variant="outline" className="border-green-300 text-green-700">Licensed</Badge>)}
                      {contractorProfile.insured && (<Badge variant="outline" className="border-green-300 text-green-700">Insured</Badge>)}
                      {contractorProfile.bonded && (<Badge variant="outline" className="border-green-300 text-green-700">Bonded</Badge>)}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {contractorProfile.phone && (
                      <a href={`tel:${contractorProfile.phone}`} className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-[#fce011] hover:bg-[#fce011]/90 text-black font-semibold shadow-sm">
                        <Phone className="w-4 h-4" /> Call
                      </a>
                    )}
                    {contractorProfile.website && (
                      <a href={contractorProfile.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 h-10 px-4 rounded-md border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 shadow-sm">
                        <Globe className="w-4 h-4" /> Website
                      </a>
                    )}
                  </div>
                </div>

                {/* About */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-900">About</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {contractorProfile.about || 'No description provided yet.'}
                  </p>
                </div>

                {/* Portfolio */}
                {savedProjects.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-900">Portfolio</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {savedProjects.slice(0, 8).map((p) => (
                        <div key={p.id} className="group border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow">
                          {p.images[0] ? (
                            <img src={p.images[0]} alt={p.title} className="h-32 w-full object-cover" />
                          ) : (
                            <div className="h-32 bg-gray-100 flex items-center justify-center text-gray-400 text-xs">No image</div>
                          )}
                          <div className="p-3">
                            <div className="text-sm font-semibold text-gray-900 truncate" title={p.title}>{p.title}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Details Modal */}
          <Dialog open={isListingOpen} onOpenChange={setIsListingOpen}>
            <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl">{contractorProfile.companyName || user.name}</DialogTitle>
                <DialogDescription className="text-gray-600">Public profile preview</DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                {/* Hero */}
                <div className="rounded-xl overflow-hidden border border-gray-200">
                  {savedProjects[0]?.images?.[0] ? (
                    <img src={savedProjects[0].images[0]} alt="cover" className="h-56 w-full object-cover" />
                  ) : (
                    <div className="h-56 w-full bg-gray-100 grid place-items-center text-gray-400 text-sm">Add a project to show a cover image</div>
                  )}
                </div>

                {/* Top row: location + contact */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="text-sm text-gray-700 flex flex-wrap items-center gap-2">
                    <span>{contractorProfile.location || 'Location not provided'}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{contractorProfile.yearsInBusiness ? `${contractorProfile.yearsInBusiness} in business` : 'Years in business: —'}</span>
                    {contractorProfile.averageRating ? (
                      <>
                        <span className="hidden md:inline">•</span>
                        <span className="inline-flex items-center gap-1 font-medium text-gray-900"><Star className="w-4 h-4 text-yellow-400 fill-current" /> {contractorProfile.averageRating}</span>
                      </>
                    ) : null}
                  </div>
                  <div className="flex items-center gap-2">
                    {contractorProfile.phone && (
                      <a href={`tel:${contractorProfile.phone}`} className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-[#fce011] hover:bg-[#fce011]/90 text-black font-semibold">
                        <Phone className="w-4 h-4" /> Call
                      </a>
                    )}
                    {contractorProfile.website && (
                      <a href={contractorProfile.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 h-10 px-4 rounded-md border border-gray-200 bg-white text-gray-900 hover:bg-gray-50">
                        <Globe className="w-4 h-4" /> Website
                      </a>
                    )}
                  </div>
                </div>

                {/* Credentials badges */}
                <div className="flex flex-wrap gap-2">
                  {contractorProfile.licensed && (<Badge variant="outline" className="border-green-300 text-green-700">Licensed</Badge>)}
                  {contractorProfile.insured && (<Badge variant="outline" className="border-green-300 text-green-700">Insured</Badge>)}
                  {contractorProfile.bonded && (<Badge variant="outline" className="border-green-300 text-green-700">Bonded</Badge>)}
                </div>

                {/* About */}
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-900">About</div>
                  <p className="text-sm text-gray-700">{contractorProfile.about || 'No description provided yet.'}</p>
                </div>

                {/* Key details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-3 rounded-lg bg-gray-50 border border-gray-100"><div className="text-xs text-gray-500">Team Size</div><div className="text-sm font-semibold">{contractorProfile.teamSize || '—'}</div></div>
                  <div className="p-3 rounded-lg bg-gray-50 border border-gray-100"><div className="text-xs text-gray-500">Avg. Cost</div><div className="text-sm font-semibold">{contractorProfile.averageProjectCost || '—'}</div></div>
                  <div className="p-3 rounded-lg bg-gray-50 border border-gray-100"><div className="text-xs text-gray-500">Response Time</div><div className="text-sm font-semibold">{contractorProfile.responseTime || '—'}</div></div>
                  <div className="p-3 rounded-lg bg-gray-50 border border-gray-100"><div className="text-xs text-gray-500">Experience</div><div className="text-sm font-semibold">{contractorProfile.yearsOfExperience || contractorProfile.experience || '—'}</div></div>
                </div>

                {/* Specialties */}
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-900">Specialties</div>
                  {(contractorProfile.specialties?.length || 0) > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {contractorProfile.specialties.map((s, i) => (<Badge key={`${s}-${i}`} variant="outline" className="text-xs">{s}</Badge>))}
                    </div>
                  ) : <div className="text-sm text-gray-500">No specialties added.</div>}
                </div>

                {/* Certifications */}
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-900">Certifications</div>
                  {(contractorProfile.certifications?.length || 0) > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {contractorProfile.certifications.map((c, i) => (
                        <Badge key={`${c}-${i}`} variant="secondary" className="text-xs flex items-center gap-1"><Award className="w-3 h-3" />{c}</Badge>
                      ))}
                    </div>
                  ) : <div className="text-sm text-gray-500">No certifications added.</div>}
                </div>

                {/* Languages */}
                {(contractorProfile.languages?.length || 0) > 0 && (
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-900">Languages</div>
                    <div className="flex flex-wrap gap-2">
                      {contractorProfile.languages.map((lang: any, idx: number) => (
                        <Badge key={idx} className="px-3 py-1 text-xs bg-gray-100 text-gray-800">{lang.name} • {lang.level}</Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Portfolio */}
                {savedProjects.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-900">Portfolio</div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {savedProjects.slice(0, 9).map((p) => (
                        <div key={p.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                          {p.images[0] ? (
                            <img src={p.images[0]} alt={p.title} className="h-28 w-full object-cover" />
                          ) : (
                            <div className="h-28 bg-gray-100 grid place-items-center text-gray-400 text-xs">No image</div>
                          )}
                          <div className="p-2 text-xs font-medium truncate" title={p.title}>{p.title}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Documents */}
                {(contractorProfile.documents?.length || 0) > 0 && (
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-900">Verified Documents</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {contractorProfile.documents.map((d) => (
                        <div key={d.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 bg-purple-100 rounded-lg grid place-items-center">
                              <FileText className="h-4 w-4 text-purple-600" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900 truncate max-w-[220px]" title={d.name}>{d.name}</div>
                              <div className="text-xs text-gray-600 capitalize">{d.type}</div>
                            </div>
                          </div>
                          <Badge className="text-xs border" variant="outline">{d.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>

          {/* Metrics Editor */}
          {null}
      </main>
    </div>
  );
};

export default Dashboard;
