import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
    Gavel,
    Search,
    Filter,
    Plus,
    Clock,
    CheckCircle2,
    AlertCircle,
    FileText,
    DollarSign,
    Briefcase,
    ChevronRight,
    ArrowUpRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const BidManagement = () => {
    const [activeStage, setActiveStage] = useState('active');

    const bids = [
        {
            id: "BID-90210",
            project: "Riverside Tech Complex",
            contractor: "Titan Concrete Pros",
            amount: "$245,000",
            status: "Bidding",
            deadline: "2026-02-15",
            confidence: 94,
            items: 12
        },
        {
            id: "BID-90211",
            project: "Downtown Plaza Renovation",
            contractor: "VoltMaster Electrical",
            amount: "$120,500",
            status: "Evaluation",
            deadline: "2026-02-10",
            confidence: 88,
            items: 8
        },
        {
            id: "BID-90212",
            project: "Oak Ridge Annex",
            contractor: "Structural Steel Inc",
            amount: "$890,000",
            status: "Awarded",
            deadline: "2026-02-05",
            confidence: 100,
            items: 24
        }
    ];

    return (
        <div className="flex-1 w-full bg-white dark:bg-[#0f1115] text-gray-900 dark:text-white pb-20">
            <div className="bg-gray-50/50 dark:bg-[#1c1e24]/50 border-b border-gray-200 dark:border-white/5 px-8 py-10 mb-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 className="text-3xl font-black tracking-tight flex items-center gap-3">
                            <Gavel className="w-8 h-8 text-accent" />
                            Bid Management
                        </h1>
                        <p className="text-gray-500 font-bold text-sm mt-1">Track, evaluate, and award project bids</p>
                    </div>
                    <Button className="bg-black dark:bg-accent text-white dark:text-accent-foreground font-black uppercase text-xs tracking-widest rounded-xl px-8 h-12 shadow-xl hover:bg-accent/90 transition-all">
                        <Plus className="w-4 h-4 mr-2" /> Invite New Bids
                    </Button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        { label: 'Active Bids', value: '18', icon: Clock, color: 'text-accent' },
                        { label: 'Under Review', value: '05', icon: Filter, color: 'text-gray-900 dark:text-white' },
                        { label: 'Total Value', value: '$3.4M', icon: DollarSign, color: 'text-accent' }
                    ].map(stat => (
                        <Card key={stat.label} className="bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/5 rounded-[2rem] p-6">
                            <div className="flex items-center gap-4">
                                <div className={cn("p-3 rounded-2xl bg-gray-100 dark:bg-white/5", stat.color)}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{stat.label}</p>
                                    <p className="text-3xl font-black">{stat.value}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="bg-white dark:bg-[#1c1e24] border border-gray-200 dark:border-white/5 rounded-[2.5rem] overflow-hidden">
                    <div className="p-8 border-b border-gray-50 dark:border-white/5 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className="flex-1 max-w-md relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                                placeholder="Search bids by contractor or project..."
                                className="pl-12 h-12 bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/10 rounded-2xl font-bold"
                            />
                        </div>
                        <div className="flex gap-2 p-1 bg-gray-50 dark:bg-black/20 rounded-xl">
                            {['active', 'awarded', 'closed'].map(stage => (
                                <button
                                    key={stage}
                                    onClick={() => setActiveStage(stage)}
                                    className={cn(
                                        "px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all",
                                        activeStage === stage ? "bg-white dark:bg-accent text-black shadow-md" : "text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                    )}
                                >
                                    {stage}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-50 dark:border-white/5 text-left">
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Bid Package</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Value Estimate</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">AI Confidence</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bids.map(bid => (
                                    <tr key={bid.id} className="group border-b border-gray-50 dark:border-white/5 hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-black/40 flex items-center justify-center text-accent font-black text-xs">
                                                    {bid.id.split('-')[1]}
                                                </div>
                                                <div>
                                                    <p className="font-black text-gray-900 dark:text-white">{bid.project}</p>
                                                    <p className="text-xs font-bold text-gray-400 group-hover:text-accent transition-colors">{bid.contractor}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <Badge className={cn(
                                                "rounded-lg px-3 py-1 font-black text-[9px] uppercase tracking-widest border-none",
                                                bid.status === 'Awarded' ? "bg-black text-white dark:bg-white dark:text-black" :
                                                    bid.status === 'Evaluation' ? "bg-gray-100 text-gray-900 dark:bg-white/10 dark:text-white" :
                                                        "bg-accent/10 text-accent dark:bg-accent/10 dark:text-accent"
                                            )}>
                                                {bid.status}
                                            </Badge>
                                        </td>
                                        <td className="px-8 py-6">
                                            <p className="font-black text-sm">{bid.amount}</p>
                                            <p className="text-[10px] font-bold text-gray-400">{bid.items} Line Items</p>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2">
                                                <div className="w-24 h-1.5 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-accent rounded-full"
                                                        style={{ width: `${bid.confidence}%` }}
                                                    />
                                                </div>
                                                <span className="text-[10px] font-black">{bid.confidence}%</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <Button variant="ghost" className="rounded-xl h-10 w-10 p-0 hover:bg-accent hover:text-black">
                                                <ArrowUpRight className="w-5 h-5" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BidManagement;
