import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Briefcase, Clock, CheckCircle2, AlertCircle, FileText, MessageSquare, Calendar, Download, ChevronRight, Columns, List } from "lucide-react";
import { cn } from "@/lib/utils";

const ProjectTracking = () => {
    const [viewMode, setViewMode] = useState<"list" | "kanban">("list");

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Project Tracking</h1>
                    <p className="text-slate-500 mt-2 text-lg">Monitor progress and manage project documents.</p>
                </div>
                <div className="flex gap-3">
                    <div className="bg-slate-100 p-1 rounded-lg flex items-center">
                        <button
                            onClick={() => setViewMode("list")}
                            className={cn("p-2 rounded-md transition-all text-sm font-medium flex items-center gap-2", viewMode === "list" ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-900")}
                        >
                            <List className="h-4 w-4" /> List
                        </button>
                        <button
                            onClick={() => setViewMode("kanban")}
                            className={cn("p-2 rounded-md transition-all text-sm font-medium flex items-center gap-2", viewMode === "kanban" ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-900")}
                        >
                            <Columns className="h-4 w-4" /> Board
                        </button>
                    </div>
                    <Button className="bg-slate-900 text-white hover:bg-slate-800">
                        <Download className="mr-2 h-4 w-4" />
                        Export Report
                    </Button>
                </div>
            </div>

            <Card className="bg-white shadow-xl shadow-slate-200/50 border-slate-100 overflow-hidden">
                <CardHeader className="bg-slate-50/50 border-b border-slate-100 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-5">
                            <div className="p-3.5 bg-[#fce328] rounded-2xl shadow-lg shadow-[#fce328]/20">
                                <Briefcase className="h-6 w-6 text-black" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl font-bold text-slate-900">Kitchen Renovation</CardTitle>
                                <CardDescription className="flex items-center gap-3 mt-1.5">
                                    <span className="font-medium text-slate-700">ABC Construction</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                    <span>Started Oct 15, 2025</span>
                                </CardDescription>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-right hidden md:block">
                                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Status</p>
                                <div className="flex items-center gap-2">
                                    <span className="flex h-2.5 w-2.5 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                    </span>
                                    <span className="font-bold text-green-600">Active & On Track</span>
                                </div>
                            </div>
                            <div className="h-10 w-[1px] bg-slate-200 hidden md:block"></div>
                            <div className="text-right">
                                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Completion</p>
                                <p className="text-2xl font-black text-slate-900">65%</p>
                            </div>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="p-8">
                    <div className="space-y-8">
                        {/* Progress Bar */}
                        <div className="space-y-2">
                            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-[#fce328] to-[#e2cb24] rounded-full transition-all duration-1000 relative" style={{ width: '65%' }}>
                                    <div className="absolute top-0 right-0 bottom-0 w-full bg-white/20 animate-[shimmer_2s_infinite]"></div>
                                </div>
                            </div>
                            <div className="flex justify-between text-xs font-medium text-slate-500">
                                <span>Start: Oct 15</span>
                                <span>Est. End: Nov 30</span>
                            </div>
                        </div>

                        {viewMode === "list" ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-6 bg-green-50/50 rounded-2xl border border-green-100/50 hover:shadow-lg hover:shadow-green-100/50 transition-all duration-300">
                                    <div className="flex items-center gap-3 text-green-700 mb-4">
                                        <div className="p-2 bg-green-100 rounded-xl">
                                            <CheckCircle2 className="h-5 w-5" />
                                        </div>
                                        <span className="font-bold text-lg">Completed</span>
                                    </div>
                                    <ul className="space-y-3">
                                        {["Demolition", "Plumbing Rough-in", "Electrical Wiring"].map((item, i) => (
                                            <li key={i} className="text-sm text-slate-600 flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-green-100">
                                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                                                </div>
                                                <span className="line-through text-slate-400">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100/50 relative overflow-hidden hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50 blur-3xl"></div>
                                    <div className="flex items-center gap-3 text-blue-700 mb-4 relative z-10">
                                        <div className="p-2 bg-blue-100 rounded-xl">
                                            <Clock className="h-5 w-5 animate-pulse" />
                                        </div>
                                        <span className="font-bold text-lg">In Progress</span>
                                    </div>
                                    <ul className="space-y-3 relative z-10">
                                        {["Cabinet Installation", "Countertop Measurements"].map((item, i) => (
                                            <li key={i} className="text-sm text-slate-900 font-medium flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-blue-100">
                                                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300">
                                    <div className="flex items-center gap-3 text-slate-500 mb-4">
                                        <div className="p-2 bg-slate-200 rounded-xl">
                                            <Calendar className="h-5 w-5" />
                                        </div>
                                        <span className="font-bold text-lg">Upcoming</span>
                                    </div>
                                    <ul className="space-y-3">
                                        {["Backsplash", "Final Inspection"].map((item, i) => (
                                            <li key={i} className="text-sm text-slate-500 flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                                                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                                                    <div className="w-2 h-2 bg-slate-300 rounded-full" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            // Kanban Board View
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[400px] overflow-x-auto">
                                {/* Columns are similar to list but styled as full-height columns */}
                                <div className="bg-slate-50 rounded-2xl p-4 flex flex-col h-full">
                                    <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full" /> Completed
                                    </h3>
                                    <div className="space-y-3 flex-1 overflow-y-auto">
                                        {["Demolition", "Plumbing Rough-in", "Electrical Wiring"].map((item, i) => (
                                            <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 cursor-grab active:cursor-grabbing">
                                                <p className="font-medium text-slate-700 text-sm">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-slate-50 rounded-2xl p-4 flex flex-col h-full">
                                    <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full" /> In Progress
                                    </h3>
                                    <div className="space-y-3 flex-1 overflow-y-auto">
                                        {["Cabinet Installation", "Countertop Measurements"].map((item, i) => (
                                            <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 cursor-grab active:cursor-grabbing border-l-4 border-l-blue-500">
                                                <p className="font-medium text-slate-900 text-sm">{item}</p>
                                                <div className="mt-2 flex items-center gap-2">
                                                    <Badge variant="secondary" className="text-[10px]">High Priority</Badge>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-slate-50 rounded-2xl p-4 flex flex-col h-full">
                                    <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-slate-400 rounded-full" /> Upcoming
                                    </h3>
                                    <div className="space-y-3 flex-1 overflow-y-auto">
                                        {["Backsplash", "Final Inspection"].map((item, i) => (
                                            <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 cursor-grab active:cursor-grabbing opacity-70">
                                                <p className="font-medium text-slate-600 text-sm">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        <Separator />

                        {/* Timeline */}
                        <div>
                            <h4 className="font-bold text-xl mb-8 flex items-center gap-2 text-slate-900">
                                <Calendar className="h-6 w-6 text-[#fce328]" />
                                Project Timeline
                            </h4>
                            <div className="relative pl-8 space-y-10 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                                {[
                                    { date: "Oct 15", title: "Project Started", status: "completed" },
                                    { date: "Oct 18", title: "Demolition Complete", status: "completed" },
                                    { date: "Oct 25", title: "Plumbing & Electrical", status: "completed" },
                                    { date: "Nov 5", title: "Cabinet Installation", status: "current" },
                                    { date: "Nov 15", title: "Countertops & Backsplash", status: "pending" },
                                    { date: "Nov 20", title: "Final Inspection", status: "pending" },
                                ].map((item, idx) => (
                                    <div key={idx} className="relative group">
                                        <div className={cn(
                                            "absolute -left-[38px] p-1.5 rounded-full border-4 border-white shadow-lg transition-all duration-300 z-10",
                                            item.status === "completed" ? "bg-green-500 scale-100" :
                                                item.status === "current" ? "bg-[#fce328] scale-125 ring-4 ring-[#fce328]/20" :
                                                    "bg-slate-200"
                                        )}>
                                            {item.status === "completed" && <CheckCircle2 className="h-4 w-4 text-white" />}
                                            {item.status === "current" && <Clock className="h-4 w-4 text-black" />}
                                            {item.status === "pending" && <div className="h-4 w-4" />}
                                        </div>
                                        <div className={cn(
                                            "p-5 rounded-2xl border transition-all duration-300 relative",
                                            item.status === "current" ? "bg-white border-[#fce328] shadow-xl shadow-[#fce328]/10 -translate-y-1" : "bg-slate-50 border-transparent hover:bg-white hover:shadow-md"
                                        )}>
                                            {item.status === "current" && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#fce328] rounded-l-2xl" />}
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className={cn("font-bold text-lg", item.status === "current" ? "text-slate-900" : "text-slate-600")}>
                                                        {item.title}
                                                    </p>
                                                    <p className="text-sm text-slate-500 mt-1 font-medium">{item.date}</p>
                                                </div>
                                                {item.status === "current" && (
                                                    <Badge className="bg-[#fce328] text-black hover:bg-[#fce328] shadow-sm">In Progress</Badge>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProjectTracking;
