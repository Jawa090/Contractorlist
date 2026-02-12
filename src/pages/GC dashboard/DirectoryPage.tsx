import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/gc/tabs";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/gc/card';
import { Button } from '@/components/ui/gc/button';
import { Input } from '@/components/ui/gc/input';
import { Badge } from '@/components/ui/gc/badge';
import { Label } from '@/components/ui/gc/label';
import {
    Search,
    MapPin,
    Star,
    Users,
    Truck,
    ShieldCheck,
    Grid3x3,
    List as ListIcon,
    Phone,
    Mail,
    MoreVertical,
    Plus,
    Loader2,
    Package,
    Calendar,
    AlertCircle,
    ChevronDown,
    Briefcase,
    CheckCircle2,
    Building2,
    Award
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { companyService } from '@/api/companyService';
import { normalizeCompanyData } from '@/utils/normalizeCompany';
import { getProjectDiscovery } from '@/api/gc-apis/backend';
import FilterAccordion from '@/components/GC dashboard/FilterAccordion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/gc/select';

// --- Test Data for Subcontractors ---
const TEST_SUBCONTRACTORS = [
    {
        id: 'sc-1',
        name: 'Apex Electrical Solutions',
        location: 'Austin, TX',
        rating: 4.9,
        reviews: 124,
        verified: true,
        specialties: ['Electrical', 'Industrial', 'Solar'],
        status: 'Available',
        projects: 42,
        phone: '(512) 555-0123',
        email: 'info@apexelectrical.com',
        trade: 'Electrical'
    },
    {
        id: 'sc-2',
        name: 'Blue Ridge Plumbing',
        location: 'Round Rock, TX',
        rating: 4.7,
        reviews: 89,
        verified: true,
        specialties: ['Plumbing', 'Commercial', 'Emergency'],
        status: 'Busy',
        projects: 31,
        phone: '(512) 555-0124',
        email: 'contact@blueridge.com',
        trade: 'Plumbing'
    },
    {
        id: 'sc-3',
        name: 'Coastal HVAC Systems',
        location: 'San Marcos, TX',
        rating: 4.8,
        reviews: 156,
        verified: true,
        specialties: ['HVAC', 'Refrigeration', 'Maintenance'],
        status: 'Available',
        projects: 67,
        phone: '(512) 555-0125',
        email: 'sales@coastalhvac.com',
        trade: 'HVAC'
    },
    {
        id: 'sc-4',
        name: 'Summit Masonry & Stone',
        location: 'Austin, TX',
        rating: 4.6,
        reviews: 45,
        verified: false,
        specialties: ['Masonry', 'Stonework', 'Hardscaping'],
        status: 'Available',
        projects: 18,
        phone: '(512) 555-0126',
        email: 'hello@summitmasonry.com',
        trade: 'Masonry'
    },
    {
        id: 'sc-5',
        name: 'Texas Framing Partners',
        location: 'Cedar Park, TX',
        rating: 4.5,
        reviews: 72,
        verified: true,
        specialties: ['Framing', 'Woodwork', 'Residential'],
        status: 'AvailableNow',
        projects: 54,
        phone: '(512) 555-0127',
        email: 'ops@txframing.com',
        trade: 'Framing'
    },
    {
        id: 'sc-6',
        name: 'Lone Star Painting',
        location: 'Austin, TX',
        rating: 4.9,
        reviews: 210,
        verified: true,
        specialties: ['Painting', 'Commercial', 'Finishing'],
        status: 'Available',
        projects: 124,
        phone: '(512) 555-0128',
        email: 'service@lonestarpainting.com',
        trade: 'Painting'
    }
];

// --- Test Data for Suppliers ---
const TEST_SUPPLIERS = [
    {
        id: 'sup-1',
        name: 'Hill Country Lumber Co.',
        location: 'Austin, TX',
        rating: 4.8,
        category: 'Lumber',
        inventory: ['Dimensional Lumber', 'Plywood', 'Trusses'],
        delivery: 'Local Delivery',
        status: 'Platinum',
        inventory_status: 'In Stock'
    },
    {
        id: 'sup-2',
        name: 'Metro Concrete & Aggregate',
        location: 'Pflugerville, TX',
        rating: 4.6,
        category: 'Concrete',
        inventory: ['Ready-mix', 'Rebar', 'Forms'],
        delivery: 'Local Delivery',
        status: 'Verified',
        inventory_status: 'In Stock'
    },
    {
        id: 'sup-3',
        name: 'Titan Steel Supplies',
        location: 'Round Rock, TX',
        rating: 4.9,
        category: 'Metals',
        inventory: ['I-Beams', 'Roof Decking', 'Fasteners'],
        delivery: 'Direct Shipping',
        status: 'Gold',
        inventory_status: 'Custom Order'
    },
    {
        id: 'sup-4',
        name: 'Austin Electrical Wholesale',
        location: 'Austin, TX',
        rating: 4.7,
        category: 'Electrical',
        inventory: ['Conduit', 'Panelboards', 'Wiring'],
        delivery: 'Store Pickup',
        status: 'Verified',
        inventory_status: 'In Stock'
    },
    {
        id: 'sup-5',
        name: 'Quality Drywall & Insulation',
        location: 'Taylor, TX',
        rating: 4.5,
        category: 'Drywall',
        inventory: ['Sheetrock', 'Mineral Wool', 'Mud/Tape'],
        delivery: 'Local Delivery',
        status: 'Verified',
        inventory_status: 'Bulk Only'
    },
    {
        id: 'sup-6',
        name: 'Elite Roofing Supply',
        location: 'Austin, TX',
        rating: 4.8,
        category: 'Roofing',
        inventory: ['Shingles', 'Underlayment', 'Flashing'],
        delivery: 'Local Delivery',
        status: 'Platinum',
        inventory_status: 'In Stock'
    }
];

// Internal Components for Subcontractors and Suppliers
const SubcontractorList = ({ filters }: { filters: any }) => {
    const { toast } = useToast();
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const { data: contractors = [], isLoading } = useQuery<any[]>({
        queryKey: ['directory-subcontractors', filters],
        queryFn: async () => {
            // Artificial delay for realism
            await new Promise(resolve => setTimeout(resolve, 600));

            return TEST_SUBCONTRACTORS.filter(sc => {
                const matchesSearch = !filters.searchQuery ||
                    sc.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
                    sc.specialties.some(s => s.toLowerCase().includes(filters.searchQuery.toLowerCase()));

                const matchesTrade = filters.trade === 'All Trades' || sc.trade === filters.trade;

                const matchesRating = sc.rating >= (filters.minRating || 0);

                return matchesSearch && matchesTrade && matchesRating;
            });
        }
    });

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-border rounded-xl bg-muted/10">
                <Loader2 className="w-8 h-8 animate-spin text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Identifying premium partners...</p>
            </div>
        );
    }

    if (contractors.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-border rounded-xl bg-muted/10 p-8 text-center">
                <AlertCircle className="w-12 h-12 text-muted-foreground mb-4 opacity-20" />
                <h3 className="text-lg font-semibold">No Subcontractors Found</h3>
                <p className="text-sm text-muted-foreground max-w-xs mt-1">Try broadening your search criteria.</p>
            </div>
        );
    }

    return (
        <div className={cn(
            "grid gap-4",
            viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
        )}>
            {contractors.map((c: any) => (
                <Card key={c.id} className="group hover:shadow-md transition-all border-border overflow-hidden">
                    <CardHeader className="p-5 pb-3">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    {c.name.substring(0, 2).toUpperCase()}
                                </div>
                                <div>
                                    <h4 className="font-bold text-base truncate max-w-[150px] group-hover:text-primary transition-colors">{c.name}</h4>
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <MapPin size={12} /> {c.location}
                                    </div>
                                </div>
                            </div>
                            {c.verified && (
                                <Badge className="bg-primary/10 text-primary-foreground border-none h-5 px-1.5 font-black tracking-widest text-[10px]">
                                    <ShieldCheck size={12} className="mr-1" /> VERIFIED
                                </Badge>
                            )}
                        </div>
                    </CardHeader>
                    <CardContent className="p-5 pt-0 flex flex-col gap-4">
                        <div className="flex items-center gap-4 text-xs">
                            <div className="flex items-center gap-1 text-warning">
                                <Star size={12} className="fill-current" /> {c.rating} <span className="text-muted-foreground">({c.reviews})</span>
                            </div>
                            <div className="text-muted-foreground">•</div>
                            <div className="text-muted-foreground">
                                {c.projects} Projects
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-1">
                            {c.specialties.slice(0, 3).map((s: string) => (
                                <Badge key={s} variant="secondary" className="text-[10px] font-medium h-5 bg-muted">
                                    {s}
                                </Badge>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-border flex items-center justify-between">
                            <div className="flex gap-2">
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <Phone size={14} className="text-muted-foreground" />
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <Mail size={14} className="text-muted-foreground" />
                                </Button>
                            </div>
                            <Button size="sm" variant="outline" className="h-8 text-xs font-semibold">
                                View Profile
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

const SupplierList = ({ filters }: { filters: any }) => {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const { data: suppliers = [], isLoading } = useQuery<any[]>({
        queryKey: ['directory-suppliers', filters],
        queryFn: async () => {
            // Artificial delay for realism
            await new Promise(resolve => setTimeout(resolve, 600));

            return TEST_SUPPLIERS.filter(sup => {
                const matchesSearch = !filters.searchQuery ||
                    sup.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
                    sup.inventory.some(i => i.toLowerCase().includes(filters.searchQuery.toLowerCase()));

                const matchesCategory = filters.category === 'All Materials' || sup.category === filters.category;

                const matchesRating = sup.rating >= (filters.minRating || 0);

                const matchesDelivery = filters.delivery.length === 0 || filters.delivery.includes(sup.delivery);

                const matchesInventory = filters.inventory.length === 0 || filters.inventory.includes(sup.inventory_status);

                return matchesSearch && matchesCategory && matchesRating && matchesDelivery && matchesInventory;
            });
        }
    });

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-border rounded-xl bg-muted/10">
                <Loader2 className="w-8 h-8 animate-spin text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Mapping supply chain partners...</p>
            </div>
        );
    }

    if (suppliers.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-border rounded-xl bg-muted/10 p-8 text-center">
                <Package className="w-12 h-12 text-muted-foreground mb-4 opacity-20" />
                <h3 className="text-lg font-semibold">No Suppliers Found</h3>
                <p className="text-sm text-muted-foreground max-w-xs mt-1">Try broadening your search criteria.</p>
            </div>
        );
    }

    return (
        <div className={cn(
            "grid gap-4",
            viewMode === 'grid' ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"
        )}>
            {suppliers.map((s: any) => (
                <Card key={s.id} className="group hover:shadow-md transition-all border-border overflow-hidden">
                    <CardHeader className="p-5 pb-3">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold uppercase">
                                    {s.name.substring(0, 2)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-base truncate max-w-[200px] group-hover:text-primary transition-colors">{s.name}</h4>
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <MapPin size={12} /> {s.location}
                                    </div>
                                </div>
                            </div>
                            <Badge variant="outline" className="text-[10px] h-5 border-primary/20 text-primary bg-primary/5 font-bold">
                                {s.status}
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="p-5 pt-0 flex flex-col gap-4">
                        <div className="flex items-center gap-3 text-xs">
                            <div className="flex items-center gap-1 text-warning">
                                <Star size={12} className="fill-current" /> {s.rating}
                            </div>
                            <div className="text-muted-foreground">•</div>
                            <div className="text-muted-foreground flex items-center gap-1">
                                <Truck size={12} /> Delivery Available
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Inventory Availability</p>
                            <div className="flex flex-wrap gap-1">
                                {s.inventory.map((item: string) => (
                                    <Badge key={item} variant="secondary" className="text-[10px] font-medium h-5 bg-muted">
                                        {item}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-border flex items-center justify-between">
                            <Button variant="ghost" size="sm" className="h-8 text-xs font-semibold gap-1.5 text-muted-foreground">
                                <Plus size={14} /> Compare Pricing
                            </Button>
                            <Button size="sm" className="h-8 px-4 text-xs font-semibold">
                                Request Quote
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

const DirectoryPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = (searchParams.get('tab') as 'sc' | 'suppliers') || 'sc';

    const [searchQuery, setSearchQuery] = useState('');
    const [location, setLocation] = useState('Austin, TX');

    // --- Subcontractor Filter States ---
    const [selectedTrade, setSelectedTrade] = useState<string>('All Trades');
    const [scState, setScState] = useState('');
    const [scCity, setScCity] = useState('');
    const [scRadius, setScRadius] = useState('');
    const [scMinRating, setScMinRating] = useState<number>(0);
    const [scHasLicense, setScHasLicense] = useState(false);
    const [scHasInsurance, setScHasInsurance] = useState(false);
    const [scAvailability, setScAvailability] = useState<string[]>([]);
    const [scExperience, setScExperience] = useState('');
    const [scCategories, setScCategories] = useState<string[]>([]);
    const [showAllScCategories, setShowAllScCategories] = useState(false);

    // --- Supplier Filter States ---
    const [supplierCategory, setSupplierCategory] = useState<string>('All Materials');
    const [supState, setSupState] = useState('');
    const [supCity, setSupCity] = useState('');
    const [supRadius, setSupRadius] = useState('');
    const [supMinRating, setSupMinRating] = useState<number>(0);
    const [supDelivery, setSupDelivery] = useState<string[]>([]);
    const [supInventory, setSupInventory] = useState<string[]>([]);

    const categories = [
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

    const scFilters = {
        searchQuery,
        location,
        trade: selectedTrade,
        state: scState,
        city: scCity,
        radius: scRadius,
        minRating: scMinRating,
        hasLicense: scHasLicense,
        hasInsurance: scHasInsurance,
        availability: scAvailability,
        experience: scExperience,
        categories: scCategories
    };

    const supFilters = {
        searchQuery,
        location,
        category: supplierCategory,
        state: supState,
        city: supCity,
        radius: supRadius,
        minRating: supMinRating,
        delivery: supDelivery,
        inventory: supInventory
    };

    const handleResetFilters = () => {
        setSearchQuery('');
        setLocation('Austin, TX');
        if (activeTab === 'sc') {
            setSelectedTrade('All Trades');
            setScState('');
            setScCity('');
            setScRadius('');
            setScMinRating(0);
            setScHasLicense(false);
            setScHasInsurance(false);
            setScAvailability([]);
            setScExperience('');
            setScCategories([]);
        } else {
            setSupplierCategory('All Materials');
            setSupState('');
            setSupCity('');
            setSupRadius('');
            setSupMinRating(0);
            setSupDelivery([]);
            setSupInventory([]);
        }
    };

    return (
        <div className="p-6 animate-fade-in flex flex-col h-full overflow-hidden">
            {/* Page Header */}
            <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-foreground font-black tracking-tight uppercase">Partner Directory</h1>
                    <p className="text-sm text-muted-foreground mt-1 font-medium">
                        Manage and discover verified subcontractors and material suppliers in your network.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="relative w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                            placeholder={`Search ${activeTab === 'sc' ? 'subcontractors' : 'suppliers'}...`}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9 bg-background border-border h-10 text-sm rounded-xl"
                        />
                    </div>
                    <div className="relative w-40">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-3.5 h-3.5" />
                        <Input
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="pl-8 bg-background border-border h-10 text-xs font-medium rounded-xl"
                        />
                    </div>
                </div>
            </div>

            {/* Directory Selection Tabs */}
            <div className="mb-6 bg-card border border-border rounded-xl px-4 h-14 flex items-center justify-between shadow-sm">
                <Tabs value={activeTab} onValueChange={(val) => setSearchParams({ tab: val })} className="h-full">
                    <TabsList className="bg-transparent h-full gap-8 p-0">
                        <TabsTrigger
                            value="sc"
                            className="h-full border-b-2 border-transparent rounded-none data-[state=active]:border-primary data-[state=active]:bg-transparent bg-transparent px-2 font-black uppercase text-xs tracking-tight transition-all"
                        >
                            <Users size={16} className="mr-2" /> Subcontractors
                        </TabsTrigger>
                        <TabsTrigger
                            value="suppliers"
                            className="h-full border-b-2 border-transparent rounded-none data-[state=active]:border-primary data-[state=active]:bg-transparent bg-transparent px-2 font-black uppercase text-xs tracking-tight transition-all"
                        >
                            <Truck size={16} className="mr-2" /> Suppliers
                        </TabsTrigger>
                    </TabsList>
                </Tabs>

                <div className="hidden md:flex items-center gap-4 text-[10px] font-black uppercase text-muted-foreground tracking-widest">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        128 Verified Partners
                    </div>
                </div>
            </div>

            <div className="flex-1 flex gap-6 overflow-hidden">
                {/* Global Filter Sidebar */}
                <aside className="hidden xl:flex w-72 flex-col border border-border bg-card rounded-xl overflow-y-auto p-6 custom-scrollbar">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-black tracking-tight uppercase">Filters</h3>
                        <button
                            onClick={handleResetFilters}
                            className="text-[10px] font-black uppercase text-primary hover:underline"
                        >
                            Reset
                        </button>
                    </div>

                    <div className="space-y-4">
                        {activeTab === 'sc' ? (
                            <>
                                {/* Trade / Professional Category */}
                                <FilterAccordion title="Trade" icon={<Briefcase className="w-4 h-4 text-muted-foreground" />}>
                                    <Select value={selectedTrade} onValueChange={setSelectedTrade}>
                                        <SelectTrigger className="w-full h-10 border-border bg-background text-xs font-bold rounded-xl">
                                            <SelectValue placeholder="Select Trade" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="All Trades">All Trades</SelectItem>
                                            <SelectItem value="Electrical">Electrical</SelectItem>
                                            <SelectItem value="Plumbing">Plumbing</SelectItem>
                                            <SelectItem value="HVAC">HVAC</SelectItem>
                                            <SelectItem value="Roofing">Roofing</SelectItem>
                                            <SelectItem value="Masonry">Masonry</SelectItem>
                                            <SelectItem value="Framing">Framing</SelectItem>
                                            <SelectItem value="Painting">Painting</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FilterAccordion>

                                {/* Location Details */}
                                <FilterAccordion title="Region" icon={<MapPin className="w-4 h-4 text-muted-foreground" />}>
                                    <div className="space-y-3">
                                        <Select value={scState} onValueChange={setScState}>
                                            <SelectTrigger className="w-full h-10 border-border bg-background text-xs font-bold rounded-xl">
                                                <SelectValue placeholder="Select State" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="TX">Texas</SelectItem>
                                                <SelectItem value="CA">California</SelectItem>
                                                <SelectItem value="NY">New York</SelectItem>
                                                <SelectItem value="FL">Florida</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Input
                                            placeholder="City"
                                            value={scCity}
                                            onChange={(e) => setScCity(e.target.value)}
                                            className="h-10 border-border bg-background text-xs font-bold rounded-xl"
                                        />
                                        <div className="flex items-center gap-2">
                                            <Input
                                                type="number"
                                                placeholder="Radius"
                                                value={scRadius}
                                                onChange={(e) => setScRadius(e.target.value)}
                                                className="h-10 border-border bg-background text-xs font-bold rounded-xl"
                                            />
                                            <span className="text-[10px] font-bold text-muted-foreground">Miles</span>
                                        </div>
                                    </div>
                                </FilterAccordion>

                                {/* Availability */}
                                <FilterAccordion title="Availability" icon={<CheckCircle2 className="w-4 h-4 text-muted-foreground" />}>
                                    <div className="space-y-3">
                                        {['Available Now', 'Accepting Bids', 'Busy'].map(status => (
                                            <div key={status} className="flex items-center group cursor-pointer" onClick={() => {
                                                setScAvailability(prev => prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]);
                                            }}>
                                                <div className={cn(
                                                    "w-4 h-4 rounded border flex items-center justify-center transition-all mr-3",
                                                    scAvailability.includes(status) ? "bg-primary border-primary text-primary-foreground" : "border-border group-hover:border-primary/50"
                                                )}>
                                                    {scAvailability.includes(status) && <CheckCircle2 className="w-3 h-3" />}
                                                </div>
                                                <span className={cn("text-xs font-bold transition-all", scAvailability.includes(status) ? "text-foreground" : "text-muted-foreground group-hover:pl-1")}>{status}</span>
                                            </div>
                                        ))}
                                    </div>
                                </FilterAccordion>

                                {/* Experience */}
                                <FilterAccordion title="Experience" icon={<Building2 className="w-4 h-4 text-muted-foreground" />}>
                                    <Select value={scExperience} onValueChange={setScExperience}>
                                        <SelectTrigger className="w-full h-10 border-border bg-background text-xs font-bold rounded-xl">
                                            <SelectValue placeholder="Select Experience" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Residential">Residential</SelectItem>
                                            <SelectItem value="Commercial">Commercial</SelectItem>
                                            <SelectItem value="Industrial">Industrial</SelectItem>
                                            <SelectItem value="Infrastructure">Infrastructure</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FilterAccordion>

                                {/* Compliance */}
                                <FilterAccordion title="Compliance" icon={<ShieldCheck className="w-4 h-4 text-muted-foreground" />}>
                                    <div className="space-y-4">
                                        <div className="flex items-center group cursor-pointer" onClick={() => setScHasLicense(!scHasLicense)}>
                                            <div className={cn(
                                                "w-4 h-4 rounded border flex items-center justify-center transition-all mr-3",
                                                scHasLicense ? "bg-primary border-primary text-primary-foreground" : "border-border group-hover:border-primary/50"
                                            )}>
                                                {scHasLicense && <CheckCircle2 className="w-3 h-3" />}
                                            </div>
                                            <span className={cn("text-xs font-bold transition-all", scHasLicense ? "text-foreground" : "text-muted-foreground group-hover:pl-1")}>Licensed Professional</span>
                                        </div>
                                        <div className="flex items-center group cursor-pointer" onClick={() => setScHasInsurance(!scHasInsurance)}>
                                            <div className={cn(
                                                "w-4 h-4 rounded border flex items-center justify-center transition-all mr-3",
                                                scHasInsurance ? "bg-primary border-primary text-primary-foreground" : "border-border group-hover:border-primary/50"
                                            )}>
                                                {scHasInsurance && <CheckCircle2 className="w-3 h-3" />}
                                            </div>
                                            <span className={cn("text-xs font-bold transition-all", scHasInsurance ? "text-foreground" : "text-muted-foreground group-hover:pl-1")}>Insured & Bonded</span>
                                        </div>
                                    </div>
                                </FilterAccordion>

                                {/* Rating */}
                                <FilterAccordion title="Min. Rating" icon={<Star className="w-4 h-4 text-muted-foreground" />}>
                                    <div className="flex items-center gap-1.5 mt-2">
                                        {[4.5, 4.0, 3.0, 0].map((rating) => (
                                            <button
                                                key={rating}
                                                onClick={() => setScMinRating(rating)}
                                                className={cn(
                                                    "flex-1 py-2 rounded-lg text-[10px] font-black border transition-all",
                                                    scMinRating === rating
                                                        ? "bg-primary border-primary text-primary-foreground shadow-md"
                                                        : "bg-background border-border text-muted-foreground hover:border-primary/50"
                                                )}
                                            >
                                                {rating === 0 ? 'Any' : `${rating}+`}
                                            </button>
                                        ))}
                                    </div>
                                </FilterAccordion>

                                {/* CSI Divisions */}
                                <FilterAccordion title="CSI Divisions" defaultOpen={false} icon={<ListIcon className="w-4 h-4 text-muted-foreground" />}>
                                    <div className="grid grid-cols-1 gap-2">
                                        {(showAllScCategories ? categories : categories.slice(0, 10)).map(cat => (
                                            <div key={cat} className="flex items-center group cursor-pointer" onClick={() => {
                                                setScCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
                                            }}>
                                                <div className={cn(
                                                    "w-4 h-4 rounded border flex items-center justify-center transition-all mr-3",
                                                    scCategories.includes(cat) ? "bg-primary border-primary text-primary-foreground" : "border-border group-hover:border-primary/50"
                                                )}>
                                                    {scCategories.includes(cat) && <CheckCircle2 className="w-3 h-3" />}
                                                </div>
                                                <span className={cn("text-xs font-bold transition-all", scCategories.includes(cat) ? "text-foreground" : "text-muted-foreground group-hover:pl-1")}>{cat}</span>
                                            </div>
                                        ))}
                                        <Button
                                            variant="link"
                                            size="sm"
                                            onClick={(e) => { e.stopPropagation(); setShowAllScCategories(!showAllScCategories); }}
                                            className="h-auto p-0 text-[10px] font-black uppercase text-primary hover:no-underline flex items-center gap-1 mt-2 w-fit"
                                        >
                                            {showAllScCategories ? 'Show Less' : `+${categories.length - 10} More`}
                                        </Button>
                                    </div>
                                </FilterAccordion>
                            </>
                        ) : (
                            <>
                                {/* Material Category */}
                                <FilterAccordion title="Materials" icon={<Package className="w-4 h-4 text-muted-foreground" />}>
                                    <Select value={supplierCategory} onValueChange={setSupplierCategory}>
                                        <SelectTrigger className="w-full h-10 border-border bg-background text-xs font-bold rounded-xl">
                                            <SelectValue placeholder="Select Material" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="All Materials">All Materials</SelectItem>
                                            <SelectItem value="Lumber">Lumber & Framing</SelectItem>
                                            <SelectItem value="Concrete">Concrete & Masonry</SelectItem>
                                            <SelectItem value="Electrical">Electrical Supplies</SelectItem>
                                            <SelectItem value="Plumbing">Plumbing Fixtures</SelectItem>
                                            <SelectItem value="HVAC">HVAC Equipment</SelectItem>
                                            <SelectItem value="Roofing">Roofing Materials</SelectItem>
                                            <SelectItem value="Drywall">Drywall & Insulation</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FilterAccordion>

                                {/* Region for Suppliers */}
                                <FilterAccordion title="Region" icon={<MapPin className="w-4 h-4 text-muted-foreground" />}>
                                    <div className="space-y-3">
                                        <Select value={supState} onValueChange={setSupState}>
                                            <SelectTrigger className="w-full h-10 border-border bg-background text-xs font-bold rounded-xl">
                                                <SelectValue placeholder="Select State" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="TX">Texas</SelectItem>
                                                <SelectItem value="CA">California</SelectItem>
                                                <SelectItem value="NY">New York</SelectItem>
                                                <SelectItem value="FL">Florida</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Input
                                            placeholder="City"
                                            value={supCity}
                                            onChange={(e) => setSupCity(e.target.value)}
                                            className="h-10 border-border bg-background text-xs font-bold rounded-xl"
                                        />
                                        <div className="flex items-center gap-2">
                                            <Input
                                                type="number"
                                                placeholder="Radius"
                                                value={supRadius}
                                                onChange={(e) => setSupRadius(e.target.value)}
                                                className="h-10 border-border bg-background text-xs font-bold rounded-xl"
                                            />
                                            <span className="text-[10px] font-bold text-muted-foreground">Miles</span>
                                        </div>
                                    </div>
                                </FilterAccordion>

                                {/* Delivery Options */}
                                <FilterAccordion title="Delivery" icon={<Truck className="w-4 h-4 text-muted-foreground" />}>
                                    <div className="space-y-3">
                                        {['Store Pickup', 'Local Delivery', 'Direct Shipping'].map(opt => (
                                            <div key={opt} className="flex items-center group cursor-pointer" onClick={() => {
                                                setSupDelivery(prev => prev.includes(opt) ? prev.filter(s => s !== opt) : [...prev, opt]);
                                            }}>
                                                <div className={cn(
                                                    "w-4 h-4 rounded border flex items-center justify-center transition-all mr-3",
                                                    supDelivery.includes(opt) ? "bg-primary border-primary text-primary-foreground" : "border-border group-hover:border-primary/50"
                                                )}>
                                                    {supDelivery.includes(opt) && <CheckCircle2 className="w-3 h-3" />}
                                                </div>
                                                <span className={cn("text-xs font-bold transition-all", supDelivery.includes(opt) ? "text-foreground" : "text-muted-foreground group-hover:pl-1")}>{opt}</span>
                                            </div>
                                        ))}
                                    </div>
                                </FilterAccordion>

                                {/* Inventory Status */}
                                <FilterAccordion title="Availability" icon={<CheckCircle2 className="w-4 h-4 text-muted-foreground" />}>
                                    <div className="space-y-3">
                                        {['In Stock', 'Custom Order', 'Bulk Only'].map(status => (
                                            <div key={status} className="flex items-center group cursor-pointer" onClick={() => {
                                                setSupInventory(prev => prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]);
                                            }}>
                                                <div className={cn(
                                                    "w-4 h-4 rounded border flex items-center justify-center transition-all mr-3",
                                                    supInventory.includes(status) ? "bg-primary border-primary text-primary-foreground" : "border-border group-hover:border-primary/50"
                                                )}>
                                                    {supInventory.includes(status) && <CheckCircle2 className="w-3 h-3" />}
                                                </div>
                                                <span className={cn("text-xs font-bold transition-all", supInventory.includes(status) ? "text-foreground" : "text-muted-foreground group-hover:pl-1")}>{status}</span>
                                            </div>
                                        ))}
                                    </div>
                                </FilterAccordion>

                                {/* Supplier Rating */}
                                <FilterAccordion title="Min. Rating" icon={<Star className="w-4 h-4 text-muted-foreground" />}>
                                    <div className="flex items-center gap-1.5 mt-2">
                                        {[4.5, 4.0, 3.0, 0].map((rating) => (
                                            <button
                                                key={rating}
                                                onClick={() => setSupMinRating(rating)}
                                                className={cn(
                                                    "flex-1 py-2 rounded-lg text-[10px] font-black border transition-all",
                                                    supMinRating === rating
                                                        ? "bg-primary border-primary text-primary-foreground shadow-md"
                                                        : "bg-background border-border text-muted-foreground hover:border-primary/50"
                                                )}
                                            >
                                                {rating === 0 ? 'Any' : `${rating}+`}
                                            </button>
                                        ))}
                                    </div>
                                </FilterAccordion>
                            </>
                        )}
                    </div>
                </aside>

                <div className="flex-1 flex flex-col overflow-hidden bg-card border border-border rounded-xl">
                    <div className="flex-1 overflow-hidden">
                        {activeTab === 'sc' ? (
                            <div className="h-full overflow-y-auto p-6 custom-scrollbar">
                                <SubcontractorList filters={scFilters} />
                            </div>
                        ) : (
                            <div className="h-full overflow-y-auto p-6 custom-scrollbar">
                                <SupplierList filters={supFilters} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DirectoryPage;
