import { useState, useEffect } from 'react';

import { getMyBids, getBidDetail, updateBidItems, Bid as ApiBid, BidItem, finalizeBidSubmission, withdrawBid, deleteBid } from '@/api/gc-apis/backend';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter
} from "@/components/ui/dialog";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
    Gavel,
    Search,
    Filter,
    Plus,
    Clock,
    CheckCircle2,
    FileText,
    DollarSign,
    ArrowUpRight,
    Eye,
    PlayCircle,
    MapPin,
    Building2,
    Users,
    XCircle,
    AlertCircle,
    Edit,
    Trash2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from "@/components/ui/use-toast";
import { bidItemEditSchema } from "@/validation/gcBidSchemas";

// Map backend status to frontend view

type BidStatus = 'draft' | 'submitted' | 'viewed' | 'accepted' | 'started' | 'rejected' | 'withdrawn';

// Extended local interface for display (though we mostly use ApiBid)
interface DisplayBid extends ApiBid {
    // Add any frontend-computed fields if necessary
}

const BidManagement = () => {
    const { toast } = useToast();
    const [activeStage, setActiveStage] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [bids, setBids] = useState<DisplayBid[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Detail Modal State
    const [selectedBid, setSelectedBid] = useState<DisplayBid | null>(null);
    const [detailLoading, setDetailLoading] = useState(false);
    const [bidDetails, setBidDetails] = useState<any>(null); // Full details including items
    const [isDetailOpen, setIsDetailOpen] = useState(false);


    // Edit Mode State
    const [isEditing, setIsEditing] = useState(false);
    const [editableItems, setEditableItems] = useState<any[]>([]);
    const [editItemsError, setEditItemsError] = useState<string | null>(null);


    // Alert Dialog State
    const [alertConfig, setAlertConfig] = useState<{
        isOpen: boolean;
        title: string;
        description: string;
        onConfirm: () => void;
        variant: 'default' | 'destructive';
    }>({
        isOpen: false,
        title: '',
        description: '',
        onConfirm: () => { },
        variant: 'default'
    });

    const confirmAction = (title: string, description: string, onConfirm: () => void, variant: 'default' | 'destructive' = 'default') => {
        setAlertConfig({ isOpen: true, title, description, onConfirm, variant });
    };

    const handleEditItems = () => {
        if (!bidDetails) return;
        // Map backend fields (item_name, item_description, item_price) to frontend fields (name, description, price)
        const mappedItems = (bidDetails.items || []).map((item: any) => ({
            id: item.id,
            name: item.item_name || '',
            description: item.item_description || '',
            price: Number(item.item_price) || 0
        }));
        setEditableItems(mappedItems);
        setIsEditing(true);
    };

    const handleSaveItems = async () => {
        if (!selectedBid) return;
        try {
            // The API expects { name, description, price } which matches our editableItems state
            await updateBidItems(selectedBid.id, editableItems);
            toast({
                title: "Draft Updated",
                description: "Your bid proposal items have been successfully saved.",
            });
            setIsEditing(false);

            // Reload details to show updated data
            const details = await getBidDetail(selectedBid.id);
            setBidDetails(details);
            loadBids(); // Refresh main list for amounts
        } catch (error) {
            console.error("Failed to update items", error);
            toast({
                title: "Update Failed",
                description: "We encountered an error while saving your changes.",
                variant: "destructive"
            });
        }
    };

    useEffect(() => {
        loadBids();
    }, []);

    const loadBids = async () => {
        try {
            setIsLoading(true);
            const data = await getMyBids();
            setBids(data);
        } catch (error) {
            console.error("Failed to load bids", error);
            toast({
                title: "Connection Error",
                description: "Unable to retrieve your bids. Please check your connection.",
                variant: "destructive"
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleViewDetails = async (bid: DisplayBid) => {
        try {
            setSelectedBid(bid);
            setIsDetailOpen(true);
            setDetailLoading(true);
            setIsEditing(false); // Reset editing state when opening new detail
            const details = await getBidDetail(bid.id);
            setBidDetails(details);
        } catch (error) {
            console.error("Failed to load bid details", error);
            toast({
                title: "Error",
                description: "Failed to load detailed bid information.",
                variant: "destructive"
            });
        } finally {
            setDetailLoading(false);
        }
    };

    const handleSubmitBid = async () => {
        if (!selectedBid) return;
        try {
            await finalizeBidSubmission(selectedBid.id);
            toast({
                title: "Proposal Submitted",
                description: "Your bid has been officially submitted to the project owner.",
            });
            setIsDetailOpen(false);
            loadBids();
        } catch (error) {
            console.error("Failed to submit bid", error);
            toast({
                title: "Submission Error",
                description: "There was a problem submitting your proposal.",
                variant: "destructive"
            });
        }
    };

    const handleWithdrawBid = async () => {
        if (!selectedBid) return;
        try {
            await withdrawBid(selectedBid.id);
            toast({
                title: "Bid Withdrawn",
                description: "Your proposal has been retracted.",
            });
            setIsDetailOpen(false);
            loadBids();
        } catch (error) {
            console.error("Failed to withdraw bid", error);
            toast({
                title: "Error",
                description: "Could not withdraw bid at this time.",
                variant: "destructive"
            });
        }
    };

    const handleDeleteBid = async (id: string) => {
        confirmAction(
            "Delete Bid?",
            "Are you sure you want to delete this bid? This action cannot be undone.",
            async () => {
                try {
                    await deleteBid(id);
                    toast({
                        title: "Bid Deleted",
                        description: "Your proposal has been removed from the system.",
                    });
                    if (isDetailOpen) setIsDetailOpen(false);
                    loadBids();
                } catch (error: any) {
                    console.error("Failed to delete bid", error);
                    toast({
                        title: "Error",
                        description: error.message || "Failed to delete bid.",
                        variant: "destructive"
                    });
                }
            },
            "destructive"
        );
    };

    const getStatusInfo = (status: string) => {
        switch (status) {
            case 'draft':
                return { label: 'Draft', color: 'bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-300', icon: Clock };
            case 'submitted':
                return { label: 'Submitted', color: 'bg-blue-100 dark:bg-blue-500/10 text-blue-800 dark:text-blue-400', icon: FileText };
            case 'viewed':
                return { label: 'Viewed', color: 'bg-indigo-100 dark:bg-indigo-500/10 text-indigo-800 dark:text-indigo-400', icon: Eye };
            case 'accepted':
                return { label: 'Accepted', color: 'bg-green-100 dark:bg-green-500/10 text-green-800 dark:text-green-400', icon: CheckCircle2 };
            case 'started':
                return { label: 'Project Started', color: 'bg-purple-100 dark:bg-purple-500/10 text-purple-800 dark:text-purple-400', icon: PlayCircle };
            case 'rejected':
                return { label: 'Rejected', color: 'bg-red-100 dark:bg-red-500/10 text-red-800 dark:text-red-400', icon: XCircle };
            case 'withdrawn':
                return { label: 'Withdrawn', color: 'bg-amber-100 dark:bg-amber-500/10 text-amber-800 dark:text-amber-400', icon: AlertCircle };
            default:
                return { label: status, color: 'bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-300', icon: FileText };
        }
    };

    const filteredBids = bids.filter(bid => {
        if (!bid || !bid.project_name) return false;
        const matchesSearch = bid.project_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (bid.client_name && bid.client_name.toLowerCase().includes(searchQuery.toLowerCase()));

        if (activeStage === 'all') return matchesSearch;
        if (activeStage === 'submitted') return matchesSearch && (bid.status === 'submitted');
        if (activeStage === 'viewed') return matchesSearch && (bid.status === 'viewed');
        if (activeStage === 'accepted') return matchesSearch && (bid.status === 'accepted');
        if (activeStage === 'started') return matchesSearch && (bid.status === 'started');
        if (activeStage === 'draft') return matchesSearch && (bid.status === 'draft');
        return matchesSearch;
    });

    return (
        <div className="p-8 min-h-screen bg-white dark:bg-[#0f1115] text-gray-900 dark:text-white transition-colors duration-300">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Background Ambience */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-yellow-400/5 dark:bg-yellow-600/5 blur-[120px]" />
                </div>

                <div className="relative z-10 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-black tracking-tight flex items-center gap-3">
                            <div className="p-3 bg-yellow-400 rounded-xl text-black">
                                <Gavel className="w-6 h-6" />
                            </div>
                            Bid Management
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 font-bold text-sm mt-2 ml-1">Track and manage your project proposals</p>
                    </div>
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card className="bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/5 shadow-sm">
                        <CardContent className="pt-6">
                            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Total Bids</p>
                            <p className="text-3xl font-black">{bids.length}</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/5 shadow-sm">
                        <CardContent className="pt-6">
                            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Submitted</p>
                            <p className="text-3xl font-black text-blue-600 dark:text-blue-400">{bids.filter(b => b.status === 'submitted').length}</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/5 shadow-sm">
                        <CardContent className="pt-6">
                            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Wait/Viewed</p>
                            <p className="text-3xl font-black text-indigo-600 dark:text-indigo-400">{bids.filter(b => b.status === 'viewed').length}</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/5 shadow-sm">
                        <CardContent className="pt-6">
                            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Project Started</p>
                            <p className="text-3xl font-black text-purple-600 dark:text-purple-400">{bids.filter(b => b.status === 'started').length}</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="relative z-10 bg-white dark:bg-[#1c1e24] rounded-2xl shadow-sm border border-gray-200 dark:border-white/5 p-4">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                                placeholder="Search by project or client..."
                                className="pl-11 h-11 bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/10 rounded-xl"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex bg-gray-100 dark:bg-black/20 p-1.5 rounded-xl overflow-x-auto w-full md:w-auto">
                            {['all', 'submitted', 'viewed', 'accepted', 'started', 'draft'].map(stage => (
                                <button
                                    key={stage}
                                    onClick={() => setActiveStage(stage)}
                                    className={cn(
                                        "px-4 py-2 text-xs font-black uppercase tracking-wider rounded-lg transition-all whitespace-nowrap",
                                        activeStage === stage
                                            ? "bg-white dark:bg-[#2a2d35] shadow-sm text-yellow-600 dark:text-yellow-500"
                                            : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                                    )}
                                >
                                    {stage}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative z-10 space-y-4">
                    {isLoading ? (
                        <div className="text-center py-20 flex flex-col items-center">
                            <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4" />
                            <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">Loading Bids...</p>
                        </div>
                    ) : filteredBids.length === 0 ? (
                        <div className="text-center py-20 bg-white dark:bg-[#1c1e24] rounded-3xl border border-dashed border-gray-200 dark:border-white/10">
                            <Gavel className="w-16 h-16 text-gray-200 dark:text-gray-700 mx-auto mb-4" />
                            <p className="text-gray-500 dark:text-gray-400 font-bold">No bids found matching your criteria.</p>
                        </div>
                    ) : (
                        filteredBids.map(bid => {
                            const info = getStatusInfo(bid.status);
                            return (
                                <Card
                                    key={bid.id}
                                    className={cn(
                                        "group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-l-4 bg-white dark:bg-[#1c1e24] border-y border-r border-gray-200 dark:border-y-white/5 dark:border-r-white/5 hover:bg-gray-50 dark:hover:bg-white/5",
                                    )}
                                    style={{ borderLeftColor: bid.status === 'accepted' ? '#10b981' : bid.status === 'submitted' ? '#3b82f6' : bid.status === 'started' ? '#9333ea' : '#9ca3af' }}
                                    onClick={() => handleViewDetails(bid)}
                                >
                                    <CardContent className="p-6">
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                            <div className="space-y-2 flex-1">
                                                <div className="flex items-center gap-3">
                                                    <h3 className="text-lg font-black text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors">
                                                        {bid.project_name}
                                                    </h3>
                                                    <Badge className={cn("text-[10px] px-2 py-0.5 font-bold uppercase tracking-wider border-none", info.color)}>
                                                        {info.label}
                                                    </Badge>
                                                </div>
                                                <div className="flex flex-wrap gap-4 text-xs font-bold text-gray-400">
                                                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-yellow-500" /> {bid.location}</span>
                                                    <span className="flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5 text-yellow-500" /> {bid.project_type}</span>
                                                    <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-yellow-500" /> {bid.client_name}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                                                <div className="text-right">
                                                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Proposed Amount</p>
                                                    <p className="text-xl font-black text-gray-900 dark:text-white">${Number(bid.amount).toLocaleString()}</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <Button variant="ghost" size="icon" className="hover:bg-yellow-400 hover:text-black dark:text-gray-400 dark:hover:text-black rounded-xl">
                                                        <Eye className="w-4 h-4" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="text-gray-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleDeleteBid(bid.id);
                                                        }}
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })
                    )}
                </div>
            </div>

            {/* Bid Details Modal */}
            <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
                <DialogContent className="max-w-3xl bg-white dark:bg-[#111318] border-gray-200 dark:border-white/10 max-h-[90vh] overflow-y-auto p-0 gap-0 rounded-[2rem] shadow-2xl">
                    <DialogHeader className="p-8 pb-4">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center text-black">
                                <FileText className="w-6 h-6" />
                            </div>
                            <div>
                                <DialogTitle className="text-2xl font-black tracking-tight">{selectedBid?.project_name}</DialogTitle>
                                <DialogDescription className="font-bold text-gray-500 mt-1">
                                    {isEditing ? 'Update your bid proposal items.' : 'Review your bid details and items.'}
                                </DialogDescription>
                            </div>
                        </div>
                    </DialogHeader>

                    <div className="px-8 pb-8">
                        {detailLoading ? (
                            <div className="py-12 text-center">
                                <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                                <p className="text-xs font-bold uppercase text-gray-400 tracking-widest">Loading details...</p>
                            </div>
                        ) : bidDetails ? (
                            <div className="space-y-8">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5">
                                        <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">Status</p>
                                        <Badge className={cn("text-xs font-bold border-none px-3 py-1", getStatusInfo(bidDetails?.status || 'draft').color)}>
                                            {(bidDetails?.status || 'draft').toUpperCase()}
                                        </Badge>
                                    </div>
                                    <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 text-right">
                                        <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Total Quote</p>
                                        <p className="text-2xl font-black text-gray-900 dark:text-white">${Number(bidDetails.total_price).toLocaleString()}</p>
                                    </div>
                                </div>

                                {/* Proposals Details / Pitch */}
                                <div className="space-y-6">
                                    {(bidDetails.company_highlights || bidDetails.credentials) && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {bidDetails.company_highlights && (
                                                <div className="p-4 bg-yellow-50 dark:bg-yellow-500/5 rounded-2xl border border-yellow-100 dark:border-yellow-500/10">
                                                    <p className="text-[10px] font-black uppercase text-yellow-600 dark:text-yellow-500 tracking-widest mb-2">Company Highlights</p>
                                                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{bidDetails.company_highlights}</p>
                                                </div>
                                            )}
                                            {bidDetails.credentials && (
                                                <div className="p-4 bg-blue-50 dark:bg-blue-500/5 rounded-2xl border border-blue-100 dark:border-blue-500/10">
                                                    <p className="text-[10px] font-black uppercase text-blue-600 dark:text-blue-500 tracking-widest mb-2">Credentials & Licensing</p>
                                                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{bidDetails.credentials}</p>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {bidDetails.relevant_experience && (
                                        <div>
                                            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">Relevant Experience</p>
                                            <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl">
                                                <p className="text-sm leading-relaxed italic text-gray-600 dark:text-gray-300">{bidDetails.relevant_experience}</p>
                                            </div>
                                        </div>
                                    )}

                                    {bidDetails.notes && (
                                        <div>
                                            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">Executive Summary</p>
                                            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{bidDetails.notes}</p>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-black tracking-tight">Line Items</h3>
                                        {isEditing && (
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                onClick={() => setEditableItems([...editableItems, { name: '', description: '', price: 0 }])}
                                                className="h-9 bg-yellow-400 text-black border-none hover:bg-yellow-500 font-bold"
                                            >
                                                <Plus className="w-4 h-4 mr-1" /> Add Item
                                            </Button>
                                        )}
                                    </div>

                                    {editItemsError && (
                                        <div className="mb-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 text-xs font-bold text-red-700 dark:text-red-300 flex items-center gap-2">
                                            <AlertCircle className="w-4 h-4" />
                                            {editItemsError}
                                        </div>
                                    )}

                                    <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">

                                        {isEditing ? (
                                            <div className="space-y-4">
                                                {editableItems.map((item, index) => (
                                                    <div key={index} className="flex flex-col md:flex-row gap-3 items-start p-4 bg-gray-50 dark:bg-black/20 rounded-2xl border border-gray-200 dark:border-white/5">
                                                        <div className="flex-1 space-y-3 w-full">
                                                            <Input
                                                                placeholder="Item Name"
                                                                value={item.name}
                                                                onChange={(e) => {
                                                                    const newItems = [...editableItems];
                                                                    newItems[index].name = e.target.value;
                                                                    setEditableItems(newItems);
                                                                }}
                                                                className="bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/10 rounded-xl font-bold"
                                                            />
                                                            <Input
                                                                placeholder="Description (optional)"
                                                                value={item.description || ''}
                                                                onChange={(e) => {
                                                                    const newItems = [...editableItems];
                                                                    newItems[index].description = e.target.value;
                                                                    setEditableItems(newItems);
                                                                }}
                                                                className="bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/10 rounded-xl text-xs"
                                                            />
                                                        </div>
                                                        <div className="flex gap-2 w-full md:w-auto">
                                                            <div className="relative w-full md:w-32">
                                                                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                                                                <Input
                                                                    type="number"
                                                                    placeholder="Price"
                                                                    value={item.price}
                                                                    onChange={(e) => {
                                                                        const newItems = [...editableItems];
                                                                        newItems[index].price = parseFloat(e.target.value) || 0;
                                                                        setEditableItems(newItems);
                                                                    }}
                                                                    className="pl-8 bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/10 rounded-xl font-bold"
                                                                />
                                                            </div>
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                className="text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                                                                onClick={() => {
                                                                    const newItems = editableItems.filter((_, i) => i !== index);
                                                                    setEditableItems(newItems);
                                                                }}
                                                            >
                                                                <XCircle className="w-5 h-5" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ))}
                                                {editableItems.length === 0 && (
                                                    <div className="text-center py-8 text-sm text-gray-500 dark:text-gray-400 border-2 border-dashed border-gray-200 dark:border-white/10 rounded-2xl font-medium">
                                                        No items. Click "Add Item" to start.
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            bidDetails.items?.length > 0 ? (
                                                bidDetails.items.map((item: any) => (
                                                    <div key={item.id} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                                                        <div className="mr-4">
                                                            <p className="font-bold text-gray-900 dark:text-white">{item.item_name}</p>
                                                            {item.item_description && (
                                                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.item_description}</p>
                                                            )}
                                                        </div>
                                                        <p className="font-black text-gray-900 dark:text-white whitespace-nowrap">${Number(item.item_price).toLocaleString()}</p>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-gray-500 italic text-center py-4">No line items added so far.</p>
                                            )
                                        )}
                                    </div>
                                </div>

                                {!isEditing && bidDetails.history && bidDetails.history.length > 0 && (
                                    <div>
                                        <h3 className="text-xs font-black uppercase text-gray-400 tracking-widest mb-3 pb-2 border-b border-gray-100 dark:border-white/5">Status History</h3>
                                        <div className="space-y-3">
                                            {bidDetails.history.map((h: any, i: number) => (
                                                <div key={i} className="text-xs flex justify-between items-center group">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                                                        <span className="text-gray-600 dark:text-gray-300">
                                                            Changed to <span className="font-bold text-gray-900 dark:text-white">{h.new_status.toUpperCase()}</span> by <span className="underline">{h.changed_by_name}</span>
                                                        </span>
                                                    </div>
                                                    <span className="text-gray-400 font-bold opacity-60 group-hover:opacity-100">{new Date(h.changed_at).toLocaleDateString()}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : null}

                        <DialogFooter className="gap-3 mt-8 pt-6 border-t border-gray-100 dark:border-white/5">
                            {isEditing ? (
                                <>
                                    <Button variant="outline" onClick={() => setIsEditing(false)} className="rounded-xl font-bold border-gray-200 dark:border-white/10 h-11">Cancel</Button>
                                    <Button onClick={handleSaveItems} className="bg-yellow-400 hover:bg-yellow-500 text-black font-black uppercase text-xs tracking-wider rounded-xl h-11">Save Changes</Button>
                                </>
                            ) : (
                                <>
                                    {selectedBid?.status === 'draft' && (
                                        <>
                                            <Button onClick={handleEditItems} variant="outline" className="border-gray-200 dark:border-white/10 rounded-xl font-bold h-11">
                                                <Edit className="w-4 h-4 mr-2" /> Edit Items
                                            </Button>
                                            <Button onClick={handleSubmitBid} className="bg-black dark:bg-white text-white dark:text-black hover:bg-yellow-500 font-black uppercase text-xs tracking-wider rounded-xl h-11">
                                                Submit Bid
                                            </Button>
                                        </>
                                    )}
                                    {selectedBid?.status === 'submitted' && (
                                        <Button onClick={handleWithdrawBid} variant="destructive" className="rounded-xl font-bold h-11">
                                            Withdraw Bid
                                        </Button>
                                    )}
                                    <Button
                                        variant="ghost"
                                        className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl font-bold h-11"
                                        onClick={() => selectedBid && handleDeleteBid(selectedBid.id)}
                                    >
                                        <Trash2 className="w-4 h-4 mr-2" />
                                        Delete Bid
                                    </Button>
                                    <Button variant="outline" onClick={() => setIsDetailOpen(false)} className="rounded-xl font-bold border-gray-200 dark:border-white/10 h-11">
                                        Close
                                    </Button>
                                </>
                            )}
                        </DialogFooter>
                    </div>
                </DialogContent>
            </Dialog>

            <AlertDialog open={alertConfig.isOpen} onOpenChange={(open) => {
                if (!open) setAlertConfig(prev => ({ ...prev, isOpen: false }));
            }}>
                <AlertDialogContent className="bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-[2rem] p-8">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-2xl font-black">{alertConfig.title}</AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-500 dark:text-gray-400 font-medium text-base">
                            {alertConfig.description}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="mt-6">
                        <AlertDialogCancel onClick={() => setAlertConfig(prev => ({ ...prev, isOpen: false }))} className="rounded-xl font-bold h-11">Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => {
                                alertConfig.onConfirm();
                                setAlertConfig(prev => ({ ...prev, isOpen: false }));
                            }}
                            className={cn("rounded-xl font-black uppercase text-xs tracking-wider h-11", alertConfig.variant === 'destructive' ? "bg-red-600 hover:bg-red-700 focus:ring-red-600 border-none text-white" : "bg-yellow-400 hover:bg-yellow-500 text-black")}
                        >
                            Confirm
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default BidManagement;
