import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Sparkles,
    Bot,
    BrainCircuit,
    Rocket,
    Globe,
    TrendingUp,
    Users,
    Calculator,
    Laptop,
    Search,
    Zap,
    CheckCircle2,
    ChevronRight,
    Star
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const Marketplace = () => {
    const { toast } = useToast();
    const [activeTab, setActiveTab] = useState('products');

    const products = [
        {
            title: 'AI-Base Auto Takeoff',
            description: 'Instant, hyper-accurate material takeoffs from structural blueprints using vision-transformer AI.',
            icon: Calculator,
            badge: 'Bestseller',
            benefits: ['99.8% Accuracy', '10x Faster', 'Auto-ID Components'],
            price: 'Usage Based'
        },
        {
            title: 'Contractor AI Assistance',
            description: 'LMM-powered project manager that handles RFI generation, submittal logs, and meeting minutes.',
            icon: Bot,
            badge: 'Beta',
            benefits: ['Voice Commands', '24/7 PM Support', 'Doc Analysis'],
            price: '$49/mo'
        },
        {
            title: 'Structural Brain AI',
            description: 'Predictive stress analysis and cost-optimization for architectural designs.',
            icon: BrainCircuit,
            badge: 'Enterprise',
            benefits: ['Risk Assessment', 'Material Saving', 'LOD 400 Ready'],
            price: 'Custom'
        }
    ];

    const services = [
        {
            group: 'Digital Growth',
            items: [
                {
                    title: 'Contractor Website Dev',
                    description: 'High-performance, SEO-optimized websites built specifically for construction lead gen.',
                    icon: Globe,
                    provider: 'GroBot Digital'
                },
                {
                    title: 'Growth Package (Marketing)',
                    description: 'Full-funnel GMB, SEO, and Paid Meta/Google Ads management for trade contractors.',
                    icon: TrendingUp,
                    provider: 'GroBot Digital'
                }
            ]
        },
        {
            group: 'Staff Augmentation',
            items: [
                {
                    title: 'Dedicated Estimating',
                    description: 'On-demand certified estimators and architects for your pre-con phase.',
                    icon: Users,
                    provider: 'ParadiseEstimating'
                },
                {
                    title: 'Virtual PM & PMO',
                    description: 'Dedicated virtual project managers to handle administrative and scheduling burdens.',
                    icon: Users,
                    provider: 'ParadiseEstimating'
                }
            ]
        },
        {
            group: 'Estimating Services',
            items: [
                {
                    title: 'Precision Takeoffs',
                    description: 'Detailed, audit-ready takeoffs and cost estimation for complex projects.',
                    icon: Zap,
                    provider: 'ParadiseEstimating'
                }
            ]
        }
    ];

    const handlePurchase = (item: string) => {
        toast({
            title: "Interest Captured",
            description: `We've flagged your interest in ${item}. A platform specialist will connect with you.`,
        });
    };

    return (
        <div className="flex-1 w-full bg-white dark:bg-[#0f1115] text-gray-900 dark:text-white pb-20">
            <div className="relative overflow-hidden bg-gray-50/50 dark:bg-[#1c1e24]/50 border-b border-gray-200 dark:border-white/5 px-8 py-12 mb-8">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-yellow-500/5 to-transparent pointer-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center text-black">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black tracking-tight">AI Marketplace</h1>
                            <p className="text-gray-500 font-bold">Premium Products & Professional Services</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8">
                <Tabs defaultValue="products" className="w-full" onValueChange={setActiveTab}>
                    <div className="flex items-center justify-between mb-8 border-b border-gray-100 dark:border-white/5 pb-4">
                        <TabsList className="bg-gray-100 dark:bg-white/5 p-1 rounded-2xl h-14">
                            <TabsTrigger
                                value="products"
                                className="rounded-xl px-8 data-[state=active]:bg-white dark:data-[state=active]:bg-yellow-500 dark:data-[state=active]:text-black font-black uppercase text-xs tracking-widest h-11"
                            >
                                AI Products
                            </TabsTrigger>
                            <TabsTrigger
                                value="services"
                                className="rounded-xl px-8 data-[state=active]:bg-white dark:data-[state=active]:bg-yellow-500 dark:data-[state=active]:text-black font-black uppercase text-xs tracking-widest h-11"
                            >
                                Managed Services
                            </TabsTrigger>
                        </TabsList>
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                            <CheckCircle2 className="w-4 h-4 text-yellow-500" /> Platform Verified Providers
                        </div>
                    </div>

                    <TabsContent value="products" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((p) => (
                                <Card key={p.title} className="group relative bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/5 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                    <CardHeader className="p-8">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-black/40 flex items-center justify-center text-yellow-500 shadow-xl group-hover:scale-110 transition-transform">
                                                <p.icon className="w-7 h-7" />
                                            </div>
                                            <Badge className="bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 border-none px-4 py-1.5 font-black uppercase text-[10px] tracking-widest">
                                                {p.badge}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-2xl font-black mb-3">{p.title}</CardTitle>
                                        <CardDescription className="text-gray-500 font-bold leading-relaxed">
                                            {p.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-8 pt-0">
                                        <div className="space-y-4 mb-8">
                                            {p.benefits.map(b => (
                                                <div key={b} className="flex items-center gap-3 text-xs font-bold">
                                                    <CheckCircle2 className="w-4 h-4 text-gray-900 dark:text-white" />
                                                    <span>{b}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between pt-6 border-t border-gray-50 dark:border-white/5">
                                            <div>
                                                <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Pricing</p>
                                                <p className="text-xl font-black text-yellow-600 dark:text-yellow-500">{p.price}</p>
                                            </div>
                                            <Button
                                                onClick={() => handlePurchase(p.title)}
                                                className="bg-black dark:bg-white text-white dark:text-black font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-yellow-500 transition-all px-6 h-12"
                                            >
                                                Request Access
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="services" className="mt-0">
                        {services.map((group) => (
                            <div key={group.group} className="mb-12 last:mb-0">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-4">
                                    {group.group}
                                    <div className="h-[1px] flex-1 bg-gray-100 dark:bg-white/5" />
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {group.items.map((service) => (
                                        <div key={service.title} className="group flex flex-col md:flex-row gap-6 p-8 bg-white dark:bg-[#1c1e24] border border-gray-200 dark:border-white/5 rounded-[2.5rem] hover:shadow-xl transition-all">
                                            <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-black/40 flex items-center justify-center shrink-0">
                                                <service.icon className="w-8 h-8 text-yellow-500" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="text-xl font-black">{service.title}</h4>
                                                    <Badge variant="outline" className="text-[9px] font-black border-yellow-500/30 text-yellow-600 dark:text-yellow-400">
                                                        Partner: {service.provider}
                                                    </Badge>
                                                </div>
                                                <p className="text-gray-500 font-bold text-sm mb-6 leading-relaxed">
                                                    {service.description}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                                        <span className="text-[10px] font-black text-gray-400 ml-2">Top Rated</span>
                                                    </div>
                                                    <Button
                                                        variant="ghost"
                                                        onClick={() => handlePurchase(service.title)}
                                                        className="text-[10px] font-black uppercase tracking-widest text-yellow-600 dark:text-yellow-500 hover:bg-yellow-400/10"
                                                    >
                                                        Inquire Now <ChevronRight className="w-4 h-4 ml-1" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Marketplace;
