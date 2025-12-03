import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Bell, Lock, Shield, CreditCard, LogOut, Mail, Smartphone, Globe } from "lucide-react";
import { useAppSelector } from "@/store/hooks";

const ClientSettings = () => {
    const { user } = useAppSelector((state) => state.auth);

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tight">Settings</h1>
                <p className="text-slate-500 mt-2 text-lg">Manage your account preferences and security.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sidebar Navigation (Mock) */}
                <Card className="h-fit bg-white shadow-xl shadow-slate-200/50 border-slate-100 lg:col-span-1">
                    <CardContent className="p-4">
                        <nav className="space-y-1">
                            {[
                                { icon: User, label: "Profile", active: true },
                                { icon: Bell, label: "Notifications", active: false },
                                { icon: Lock, label: "Security", active: false },
                                { icon: CreditCard, label: "Billing", active: false },
                                { icon: Globe, label: "Language", active: false },
                            ].map((item, idx) => (
                                <button
                                    key={idx}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${item.active
                                            ? "bg-slate-900 text-white shadow-md"
                                            : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                        }`}
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.label}
                                </button>
                            ))}
                        </nav>
                        <Separator className="my-4" />
                        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all">
                            <LogOut className="h-4 w-4" />
                            Sign Out
                        </button>
                    </CardContent>
                </Card>

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Profile Section */}
                    <Card className="bg-white shadow-xl shadow-slate-200/50 border-slate-100 overflow-hidden">
                        <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                            <CardTitle className="text-xl font-bold text-slate-900">Profile Information</CardTitle>
                            <CardDescription>Update your photo and personal details.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div className="flex items-center gap-6">
                                <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                                    <AvatarImage src={user?.avatar} />
                                    <AvatarFallback className="bg-slate-900 text-white text-2xl font-bold">
                                        {user?.name?.charAt(0) || 'C'}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="space-y-2">
                                    <Button variant="outline" className="border-slate-200 hover:bg-slate-50">
                                        Change Photo
                                    </Button>
                                    <p className="text-xs text-slate-400">JPG, GIF or PNG. Max size of 800K</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                        <input
                                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#fce328] focus:border-transparent outline-none transition-all"
                                            defaultValue={user?.name || "Client User"}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                        <input
                                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#fce328] focus:border-transparent outline-none transition-all"
                                            defaultValue={user?.email || "client@example.com"}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                                    <div className="relative">
                                        <Smartphone className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                        <input
                                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#fce328] focus:border-transparent outline-none transition-all"
                                            defaultValue="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end pt-4">
                                <Button className="bg-[#fce328] text-black hover:bg-[#e2cb24] font-bold shadow-lg shadow-yellow-500/20">
                                    Save Changes
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Notifications Section */}
                    <Card className="bg-white shadow-xl shadow-slate-200/50 border-slate-100">
                        <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                            <CardTitle className="text-xl font-bold text-slate-900">Notifications</CardTitle>
                            <CardDescription>Choose what you want to be notified about.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            {[
                                { title: "Project Updates", desc: "Get notified when a contractor updates project status." },
                                { title: "New Messages", desc: "Receive emails when you get a new message." },
                                { title: "Payment Alerts", desc: "Get notified about upcoming invoices and successful payments." },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <label className="text-sm font-bold text-slate-900">{item.title}</label>
                                        <p className="text-xs text-slate-500">{item.desc}</p>
                                    </div>
                                    <Switch defaultChecked={true} className="data-[state=checked]:bg-[#fce328]" />
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ClientSettings;
