import { useState, useEffect } from 'react';
import { getProjectDiscovery } from '@/api/gc-apis';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
    Search,
    MapPin,
    Phone,
    Star,
    Package
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Suppliers = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const [suppliers, setSuppliers] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadSuppliers();
    }, [searchQuery]);

    const loadSuppliers = async () => {
        try {
            setIsLoading(true);
            const filters: any = {};
            if (searchQuery) filters.search = searchQuery;
            filters.type = 'Supplier'; // Force supplier type

            const data = await getProjectDiscovery(filters);

            setSuppliers(data.map((s: any) => ({
                id: s.id,
                name: s.name,
                category: s.trade || 'General Supply',
                location: s.location || 'N/A',
                rating: s.rating || 0,
                inventory: s.specialties || ['Lumber', 'Drywall', 'Tools'], // Fallback if no specific inventory
                status: s.tier || 'Verified',
                logo: s.avatar || s.name.substring(0, 2).toUpperCase()
            })));
        } catch (error) {
            console.error("Failed to load suppliers", error);
        } finally {
            setIsLoading(false);
        }
    };

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
                    {isLoading ? (
                        <div className="col-span-full py-20 text-center">Procuring local inventory...</div>
                    ) : suppliers.length > 0 ? (
                        suppliers.map(s => (
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
                        ))
                    ) : (
                        <div className="col-span-full py-40 text-center bg-gray-50/50 dark:bg-white/5 rounded-3xl border border-dashed border-gray-200 dark:border-white/10">
                            <Package className="mx-auto h-16 w-16 text-gray-200 dark:text-gray-700 mb-6" />
                            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">No suppliers found</h3>
                            <p className="text-gray-500 dark:text-gray-400 font-bold">Try adjusting your procurement signals.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Suppliers;
