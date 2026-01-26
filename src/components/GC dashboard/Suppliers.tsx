import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
    Truck,
    Search,
    MapPin,
    Store,
    Phone,
    Mail,
    ChevronRight,
    ShieldCheck,
    Star,
    Package,
    Layers,
    ArrowUpRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Suppliers = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const suppliers = [
        {
            id: 1,
            name: "Global Builders Supply",
            category: "General Materials",
            location: "East Austin, TX",
            rating: 4.8,
            inventory: ["Lumber", "Drywall", "Tools"],
            status: "Verified Platinum",
            logo: "GB"
        },
        {
            id: 2,
            name: "VoltSupply Electrical",
            category: "Electrical Components",
            location: "North Austin, TX",
            rating: 4.9,
            inventory: ["Conduit", "Wiring", "Panels"],
            status: "Certified Dealer",
            logo: "VS"
        },
        {
            id: 3,
            name: "HydroFlow Fixtures",
            category: "Plumbing & HVAC",
            location: "Round Rock, TX",
            rating: 4.7,
            inventory: ["Piping", "HVAC Units", "Fixtures"],
            status: "Preferred Partner",
            logo: "HF"
        }
    ];

    return (
        <div className="flex-1 w-full bg-white dark:bg-[#0f1115] text-gray-900 dark:text-white pb-20 font-sans">
            <div className="max-w-7xl mx-auto px-0">
                <div className="relative mb-12 mt-8">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                    <Input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by company, material, or SKU..."
                        className="pl-16 h-16 bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/5 rounded-[2rem] text-lg font-bold shadow-xl focus-visible:ring-yellow-400"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {suppliers.map(s => (
                        <Card key={s.id} className="group relative bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/5 rounded-[3rem] overflow-hidden hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-500 border-b-8 border-b-transparent hover:border-b-yellow-400">
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-gray-50 dark:bg-black/40 flex items-center justify-center text-3xl font-black text-yellow-500 border border-gray-100 dark:border-white/5 shadow-inner">
                                        {s.logo}
                                    </div>
                                    <Badge className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-none font-black uppercase text-[9px] tracking-widest px-3 py-1">
                                        {s.status}
                                    </Badge>
                                </div>

                                <h3 className="text-2xl font-black mb-1 group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors">{s.name}</h3>
                                <div className="flex flex-col gap-2 mb-8">
                                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                                        <MapPin className="w-3 h-3 text-yellow-500" /> {s.location}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                                        <Star className="w-3 h-3 text-yellow-500 fill-current" /> {s.rating} (Avg. Delivery 1.2 Days)
                                    </div>
                                </div>

                                <div className="space-y-4 pt-6 border-t border-gray-50 dark:border-white/5">
                                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Active Inventory</p>
                                    <div className="flex flex-wrap gap-2">
                                        {s.inventory.map(item => (
                                            <Badge key={item} variant="secondary" className="bg-gray-100 dark:bg-white/5 hover:bg-yellow-400 hover:text-black transition-colors rounded-lg px-3 py-1 text-[10px] font-black uppercase tracking-tighter cursor-default">
                                                {item}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 flex gap-3 pt-6 border-t border-gray-50 dark:border-white/5">
                                    <Button variant="outline" className="flex-1 rounded-2xl h-11 border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5">
                                        <Phone className="w-4 h-4 mr-2" /> Call
                                    </Button>
                                    <Button className="flex-1 bg-black dark:bg-white text-white dark:text-black rounded-2xl h-11 hover:bg-yellow-400 font-bold uppercase text-[10px] tracking-widest">
                                        Place Order
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Suppliers;
