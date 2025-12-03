import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Users, Star, ArrowUpRight, Search, Filter, MapPin, Plus, Map, LayoutGrid, CheckSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import contractorService from "@/services/contractorService";

interface FindContractorsProps {
    setActiveTab: (tab: string) => void;
}

const FindContractors = ({ setActiveTab }: FindContractorsProps) => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [searchTerm, setSearchTerm] = useState("");
    const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
    const [selectedForCompare, setSelectedForCompare] = useState<number[]>([]);

    // Mock data
    const matchedContractors = [
        { id: 1, name: "ABC Construction", rating: 4.8, specialties: ["Kitchen", "Bathroom"], price: "$$$", location: "New York, NY", verified: true },
        { id: 2, name: "Elite Builders", rating: 4.9, specialties: ["Full Renovation"], price: "$$$$", location: "Brooklyn, NY", verified: true },
        { id: 3, name: "Modern Spaces", rating: 4.7, specialties: ["Interior Design", "Remodeling"], price: "$$", location: "Queens, NY", verified: false },
        { id: 4, name: "Precision Pro", rating: 4.6, specialties: ["Flooring", "Painting"], price: "$$", location: "Jersey City, NJ", verified: true },
    ];

    const handleViewProfile = (contractorName: string) => {
        toast({
            title: "Viewing Profile",
            description: `Opening profile for ${contractorName}`,
        });
    };

    const toggleCompare = (id: number) => {
        if (selectedForCompare.includes(id)) {
            setSelectedForCompare(prev => prev.filter(cId => cId !== id));
        } else {
            if (selectedForCompare.length >= 3) {
                toast({
                    title: "Limit Reached",
                    description: "You can compare up to 3 contractors at a time.",
                    variant: "destructive"
                });
                return;
            }
            setSelectedForCompare(prev => [...prev, id]);
        }
    };

    const filteredContractors = matchedContractors.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Find Contractors</h1>
                    <p className="text-slate-500 mt-2 text-lg">Browse and connect with top-rated professionals for your project.</p>
                </div>
                <Button
                    className="bg-[#fce328] text-black hover:bg-[#e2cb24] font-bold shadow-lg shadow-yellow-500/20"
                    onClick={() => setActiveTab("post-project")}
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Post a Job Instead
                </Button>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search by name or specialty..."
                        className="w-full pl-10 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#fce328] focus:border-transparent outline-none transition-all shadow-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="h-auto py-3 px-6 border-slate-200 bg-white hover:bg-slate-50">
                        <Filter className="mr-2 h-4 w-4" />
                        Filters
                    </Button>
                    <div className="bg-slate-100 p-1 rounded-xl flex items-center">
                        <button
                            onClick={() => setViewMode("grid")}
                            className={cn("p-2.5 rounded-lg transition-all text-sm font-medium flex items-center gap-2", viewMode === "grid" ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-900")}
                        >
                            <LayoutGrid className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => setViewMode("map")}
                            className={cn("p-2.5 rounded-lg transition-all text-sm font-medium flex items-center gap-2", viewMode === "map" ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-900")}
                        >
                            <Map className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Compare Bar */}
            {selectedForCompare.length > 0 && (
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-6 animate-in slide-in-from-bottom-4 duration-300">
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {selectedForCompare.map(id => (
                                <div key={id} className="w-8 h-8 rounded-full bg-[#fce328] border-2 border-slate-900 flex items-center justify-center text-black font-bold text-xs">
                                    {matchedContractors.find(c => c.id === id)?.name.charAt(0)}
                                </div>
                            ))}
                        </div>
                        <span className="text-sm font-medium">{selectedForCompare.length} selected</span>
                    </div>
                    <div className="h-6 w-px bg-slate-700"></div>
                    <Button size="sm" className="bg-[#fce328] text-black hover:bg-[#e2cb24]">
                        Compare Now
                    </Button>
                    <button onClick={() => setSelectedForCompare([])} className="text-slate-400 hover:text-white">
                        <Plus className="h-5 w-5 rotate-45" />
                    </button>
                </div>
            )}

            {/* Content */}
            {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredContractors.map((contractor) => (
                        <Card key={contractor.id} className={cn(
                            "transition-all duration-300 border-slate-100 group relative overflow-hidden",
                            selectedForCompare.includes(contractor.id) ? "ring-2 ring-[#fce328] shadow-lg" : "hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1"
                        )}>
                            <div className="absolute top-0 right-0 p-4">
                                <button
                                    onClick={() => toggleCompare(contractor.id)}
                                    className={cn(
                                        "p-2 rounded-full transition-all",
                                        selectedForCompare.includes(contractor.id) ? "bg-[#fce328] text-black" : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                                    )}
                                >
                                    <CheckSquare className="h-4 w-4" />
                                </button>
                            </div>
                            <CardContent className="p-6">
                                <div className="flex items-start gap-5">
                                    <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
                                        <AvatarImage src={`/contractor-${contractor.id}.jpg`} />
                                        <AvatarFallback className="text-xl font-bold bg-slate-900 text-[#fce328]">
                                            {contractor.name.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start pr-10">
                                            <div>
                                                <h3 className="font-bold text-xl text-slate-900 group-hover:text-[#b4a018] transition-colors flex items-center gap-2">
                                                    {contractor.name}
                                                    {contractor.verified && <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-[10px] px-1.5 py-0 h-5">Verified</Badge>}
                                                </h3>
                                                <p className="text-sm text-slate-500 flex items-center gap-1 mt-1 font-medium">
                                                    <MapPin className="w-3.5 h-3.5" />
                                                    {contractor.location}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 mt-4">
                                            <div className="flex items-center gap-1 bg-[#fce328]/10 px-2.5 py-1 rounded-lg border border-[#fce328]/20">
                                                <Star className="h-3.5 w-3.5 fill-[#fce328] text-[#fce328]" />
                                                <span className="text-sm font-bold text-slate-900">{contractor.rating}</span>
                                            </div>
                                            <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700 font-bold">
                                                {contractor.price}
                                            </Badge>
                                        </div>

                                        <div className="flex flex-wrap gap-1.5 mt-4">
                                            {contractor.specialties.map((specialty, idx) => (
                                                <Badge key={idx} variant="secondary" className="text-xs bg-slate-100 text-slate-600 hover:bg-slate-200">
                                                    {specialty}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="mt-6 flex gap-3">
                                            <Button
                                                className="flex-1 bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20"
                                                onClick={() => handleViewProfile(contractor.name)}
                                            >
                                                View Profile
                                            </Button>
                                            <Button variant="outline" className="flex-1 border-slate-200 hover:bg-slate-50">
                                                Contact
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="bg-slate-100 rounded-2xl h-[600px] flex items-center justify-center border-2 border-dashed border-slate-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-74.006,40.7128,12,0/800x600?access_token=YOUR_TOKEN')] bg-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
                    <div className="text-center relative z-10 bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl">
                        <MapPin className="h-12 w-12 text-[#fce328] mx-auto mb-4 animate-bounce" />
                        <h3 className="text-xl font-bold text-slate-900">Interactive Map View</h3>
                        <p className="text-slate-500 mt-2 max-w-xs mx-auto">See contractors in your area. This feature is being integrated with Google Maps API.</p>
                        <Button className="mt-6 bg-slate-900 text-white">Enable Location</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FindContractors;
