import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditCard, DollarSign, Download, Clock, CheckCircle2, ArrowUpRight, Plus, Wallet, Receipt, Filter, Calendar, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const ClientPayments = () => {
    const { toast } = useToast();
    const [isAddingCard, setIsAddingCard] = useState(false);
    const [filterStatus, setFilterStatus] = useState("all");

    const handleAddCard = (e: React.FormEvent) => {
        e.preventDefault();
        setIsAddingCard(false);
        toast({
            title: "Payment Method Added",
            description: "Your new card has been successfully verified and added.",
        });
    };

    const handleDownloadInvoice = (id: string) => {
        toast({
            title: "Downloading Invoice",
            description: `Invoice ${id} is being downloaded...`,
        });
    };

    const transactions = [
        { id: "INV-2024-001", project: "Kitchen Renovation", contractor: "ABC Construction", date: "Oct 15, 2024", amount: "$15,000", status: "Paid" },
        { id: "INV-2024-002", project: "Kitchen Renovation", contractor: "ABC Construction", date: "Nov 01, 2024", amount: "$10,000", status: "Paid" },
        { id: "INV-2024-003", project: "Bathroom Remodel", contractor: "XYZ Builders", date: "Nov 10, 2024", amount: "$15,000", status: "Paid" },
        { id: "INV-2024-004", project: "Kitchen Renovation", contractor: "ABC Construction", date: "Nov 15, 2024", amount: "$5,000", status: "Pending" },
        { id: "INV-2024-005", project: "Deck Installation", contractor: "Deck Masters", date: "Nov 20, 2024", amount: "$2,500", status: "Processing" },
    ];

    const filteredTransactions = filterStatus === "all"
        ? transactions
        : transactions.filter(t => t.status.toLowerCase() === filterStatus);

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Payments & Billing</h1>
                    <p className="text-slate-500 mt-2 text-lg">Manage invoices, transaction history, and payment methods.</p>
                </div>
                <Dialog open={isAddingCard} onOpenChange={setIsAddingCard}>
                    <DialogTrigger asChild>
                        <Button className="bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Payment Method
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add Payment Method</DialogTitle>
                            <DialogDescription>
                                Enter your card details securely. We support all major credit cards.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleAddCard} className="space-y-4 py-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Cardholder Name</Label>
                                <Input id="name" placeholder="John Doe" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="number">Card Number</Label>
                                <div className="relative">
                                    <CreditCard className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                    <Input id="number" placeholder="0000 0000 0000 0000" className="pl-10" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="expiry">Expiry Date</Label>
                                    <Input id="expiry" placeholder="MM/YY" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cvc">CVC</Label>
                                    <Input id="cvc" placeholder="123" required />
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 p-2 rounded-lg">
                                <ShieldCheck className="h-4 w-4 text-green-600" />
                                Your payment info is encrypted and secure.
                            </div>
                            <DialogFooter>
                                <Button type="submit" className="w-full bg-[#fce328] text-black hover:bg-[#e2cb24]">Add Card</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white/60 backdrop-blur-xl shadow-xl shadow-slate-200/50 border-white/20 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-transparent rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                        <CardTitle className="text-sm font-bold text-slate-600 uppercase tracking-wider">Total Paid</CardTitle>
                        <div className="p-2.5 bg-green-500 rounded-xl shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-300">
                            <CheckCircle2 className="h-5 w-5 text-white" />
                        </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                        <div className="text-4xl font-black text-slate-900 mt-2">$42,500</div>
                        <p className="text-xs text-slate-500 mt-1 font-medium">Lifetime spend</p>
                    </CardContent>
                </Card>

                <Card className="bg-white/60 backdrop-blur-xl shadow-xl shadow-slate-200/50 border-white/20 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#fce328]/20 to-transparent rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                        <CardTitle className="text-sm font-bold text-slate-600 uppercase tracking-wider">Pending</CardTitle>
                        <div className="p-2.5 bg-[#fce328] rounded-xl shadow-lg shadow-[#fce328]/20 group-hover:scale-110 transition-transform duration-300">
                            <Clock className="h-5 w-5 text-black" />
                        </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                        <div className="text-4xl font-black text-slate-900 mt-2">$5,000</div>
                        <p className="text-xs text-slate-500 mt-1 font-medium">Due within 7 days</p>
                    </CardContent>
                </Card>

                <Card className="bg-white/60 backdrop-blur-xl shadow-xl shadow-slate-200/50 border-white/20 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                        <CardTitle className="text-sm font-bold text-slate-600 uppercase tracking-wider">Methods</CardTitle>
                        <div className="p-2.5 bg-blue-500 rounded-xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                            <Wallet className="h-5 w-5 text-white" />
                        </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                        <div className="text-4xl font-black text-slate-900 mt-2">2</div>
                        <p className="text-xs text-slate-500 mt-1 font-medium">Active cards on file</p>
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="history" className="w-full">
                <TabsList className="grid w-full grid-cols-2 max-w-[400px] mb-6">
                    <TabsTrigger value="history">Transaction History</TabsTrigger>
                    <TabsTrigger value="methods">Payment Methods</TabsTrigger>
                </TabsList>

                <TabsContent value="history" className="space-y-6">
                    <Card className="bg-white shadow-xl shadow-slate-200/50 border-slate-100">
                        <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <CardTitle className="text-xl font-bold text-slate-900">Recent Transactions</CardTitle>
                                    <CardDescription>View and manage your payment history</CardDescription>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                                        <SelectTrigger className="w-[140px]">
                                            <Filter className="w-4 h-4 mr-2" />
                                            <SelectValue placeholder="Filter Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Status</SelectItem>
                                            <SelectItem value="paid">Paid</SelectItem>
                                            <SelectItem value="pending">Pending</SelectItem>
                                            <SelectItem value="processing">Processing</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Button variant="outline" size="icon">
                                        <Calendar className="h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" size="sm" className="border-slate-200 hover:bg-slate-50">
                                        <Download className="mr-2 h-4 w-4" /> Export
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {filteredTransactions.map((tx, idx) => (
                                    <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-slate-100 rounded-2xl hover:border-[#fce328] hover:shadow-md transition-all group bg-slate-50/50">
                                        <div className="flex items-start gap-4 mb-4 md:mb-0">
                                            <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                                <Receipt className="h-5 w-5 text-slate-600" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">{tx.project}</p>
                                                <p className="text-sm text-slate-500 font-medium">{tx.contractor} • {tx.date}</p>
                                                <p className="text-xs text-slate-400 mt-0.5 font-mono">Ref: {tx.id}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                                            <div className="text-right">
                                                <p className="font-bold text-lg text-slate-900">{tx.amount}</p>
                                                <Badge
                                                    variant={tx.status === "Paid" ? "outline" : "secondary"}
                                                    className={cn("mt-1",
                                                        tx.status === "Paid" ? "text-green-700 border-green-200 bg-green-50" :
                                                            tx.status === "Pending" ? "text-yellow-800 bg-[#fce328] hover:bg-[#e2cb24] border-none" :
                                                                "text-blue-700 bg-blue-50 border-blue-200"
                                                    )}
                                                >
                                                    {tx.status}
                                                </Badge>
                                            </div>
                                            <Button variant="ghost" size="icon" onClick={() => handleDownloadInvoice(tx.id)} className="text-slate-400 hover:text-slate-900">
                                                <Download className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="methods" className="space-y-6">
                    <Card className="bg-white shadow-xl shadow-slate-200/50 border-slate-100">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold text-slate-900">Payment Methods</CardTitle>
                            <CardDescription>Manage your saved cards and billing details</CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Premium Card Design */}
                            <div className="p-6 border border-slate-800 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/10 transition-colors" />
                                <div className="flex justify-between items-start mb-8 relative z-10">
                                    <CreditCard className="h-8 w-8 text-slate-300" />
                                    <Badge className="bg-[#fce328] text-black hover:bg-[#fce328] border-none font-bold">Default</Badge>
                                </div>
                                <div className="relative z-10">
                                    <p className="font-mono text-xl tracking-[0.2em] text-slate-300 mb-1">•••• •••• ••••</p>
                                    <p className="font-mono text-2xl tracking-widest font-bold text-white shadow-black drop-shadow-md">4242</p>
                                    <div className="flex justify-between mt-6 text-sm text-slate-400 font-medium">
                                        <span className="uppercase tracking-wider">Card Holder</span>
                                        <span className="uppercase tracking-wider">Expires</span>
                                    </div>
                                    <div className="flex justify-between mt-1 text-sm text-white font-bold">
                                        <span>JOHN DOE</span>
                                        <span>12/25</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border border-slate-200 rounded-2xl bg-white hover:border-[#fce328] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-slate-200 transition-colors">
                                        <CreditCard className="h-6 w-6 text-slate-600" />
                                    </div>
                                    <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-slate-900 transition-colors" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-slate-900">Mastercard</p>
                                    <p className="text-sm text-slate-500 font-medium">Ending in 8899</p>
                                    <div className="mt-4 flex gap-2">
                                        <Button variant="outline" size="sm" className="w-full">Edit</Button>
                                        <Button variant="outline" size="sm" className="w-full text-red-600 hover:text-red-700 hover:bg-red-50">Remove</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default ClientPayments;
