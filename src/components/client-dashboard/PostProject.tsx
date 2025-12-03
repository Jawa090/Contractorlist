import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Plus, Clock, DollarSign, AlertCircle, Sparkles, Wand2, Eye, LayoutTemplate, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAppSelector } from "@/store/hooks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PostProject = () => {
    const { user } = useAppSelector((state) => state.auth);
    const { toast } = useToast();
    const [projectTitle, setProjectTitle] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectBudget, setProjectBudget] = useState("");
    const [projectTimeline, setProjectTimeline] = useState("");
    const [isSubmittingProject, setIsSubmittingProject] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);

    const handleAIHelp = async () => {
        if (!projectTitle) {
            toast({
                title: "Enter a title first",
                description: "Please enter a project title so our AI knows what to help you with.",
                variant: "destructive",
            });
            return;
        }

        setIsGenerating(true);
        // Simulate AI generation
        await new Promise(resolve => setTimeout(resolve, 1500));

        setProjectDescription(`Here is a detailed description for your ${projectTitle} project based on industry standards:

1. Scope of Work:
   - Comprehensive assessment of current space
   - Demolition and removal of existing fixtures
   - Installation of new materials as specified
   - Final cleanup and inspection

2. Requirements:
   - Licensed and insured contractors only
   - Experience with similar residential projects
   - Portfolio of past work required

3. Materials:
   - High-quality, durable finishes
   - Eco-friendly options preferred where applicable`);

        setIsGenerating(false);
        toast({
            title: "AI Description Generated",
            description: "Feel free to edit the generated description to match your specific needs.",
        });
    };

    const handleSubmitProject = async () => {
        if (!projectTitle.trim() || !projectDescription.trim() || !projectBudget || !projectTimeline) {
            toast({
                title: "Missing information",
                description: "Please fill in the title, description, budget, and timeline.",
                variant: "destructive",
            });
            return;
        }

        try {
            setIsSubmittingProject(true);
            await new Promise((resolve) => setTimeout(resolve, 800));

            setProjectTitle("");
            setProjectDescription("");
            setProjectBudget("");
            setProjectTimeline("");

            toast({
                title: "Project submitted",
                description: "We’ll match you with the best contractors shortly.",
            });
        } catch (e) {
            toast({
                title: "Submission failed",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmittingProject(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Post a New Project</h1>
                    <p className="text-slate-500 mt-2 text-lg">Tell us about your project and get matched with top-rated contractors.</p>
                </div>
                <Button variant="outline" className="hidden md:flex gap-2">
                    <LayoutTemplate className="h-4 w-4" /> Save as Draft
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Form Section */}
                <Card className="bg-white/60 backdrop-blur-xl shadow-xl shadow-slate-200/50 border-white/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl font-bold text-slate-900">
                            <Sparkles className="h-5 w-5 text-[#fce328]" />
                            Project Details
                        </CardTitle>
                        <CardDescription>Submit detailed requirements for the best matching results</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 md:p-8">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-slate-700">Project Title *</label>
                                <input
                                    className="w-full p-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#fce328] focus:border-transparent transition-all outline-none shadow-sm"
                                    placeholder="e.g., Modern Kitchen Renovation"
                                    value={projectTitle}
                                    onChange={(e) => setProjectTitle(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="block text-sm font-bold text-slate-700">Project Description *</label>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 h-8 font-medium"
                                        onClick={handleAIHelp}
                                        disabled={isGenerating}
                                    >
                                        {isGenerating ? (
                                            <>
                                                <Sparkles className="w-3 h-3 mr-2 animate-spin" />
                                                Generating...
                                            </>
                                        ) : (
                                            <>
                                                <Wand2 className="w-3 h-3 mr-2" />
                                                AI Assist
                                            </>
                                        )}
                                    </Button>
                                </div>
                                <div className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
                                    <textarea
                                        className="relative w-full p-4 bg-white border border-slate-200 rounded-xl h-48 focus:ring-2 focus:ring-[#fce328] focus:border-transparent transition-all resize-none outline-none shadow-sm"
                                        placeholder="Describe your project in detail... Include materials, scope, and any specific requirements."
                                        value={projectDescription}
                                        onChange={(e) => setProjectDescription(e.target.value)}
                                    />
                                </div>
                                <p className="text-xs text-slate-500">Be as detailed as possible for better contractor matches</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-slate-700 flex items-center gap-2">
                                        <DollarSign className="h-4 w-4" />
                                        Budget Range *
                                    </label>
                                    <select
                                        className="w-full p-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#fce328] focus:border-transparent transition-all outline-none shadow-sm"
                                        value={projectBudget}
                                        onChange={(e) => setProjectBudget(e.target.value)}
                                    >
                                        <option value="">Select budget range...</option>
                                        <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                                        <option value="$15,000 - $30,000">$15,000 - $30,000</option>
                                        <option value="$30,000 - $50,000">$30,000 - $50,000</option>
                                        <option value="$50,000+">$50,000+</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-slate-700 flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        Timeline *
                                    </label>
                                    <select
                                        className="w-full p-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#fce328] focus:border-transparent transition-all outline-none shadow-sm"
                                        value={projectTimeline}
                                        onChange={(e) => setProjectTimeline(e.target.value)}
                                    >
                                        <option value="">Select timeline...</option>
                                        <option value="1-2 weeks">1-2 weeks</option>
                                        <option value="1 month">1 month</option>
                                        <option value="2-3 months">2-3 months</option>
                                        <option value="3+ months">3+ months</option>
                                    </select>
                                </div>
                            </div>

                            <Separator className="my-6" />

                            <div className="bg-[#fce328]/10 border border-[#fce328]/20 rounded-xl p-4">
                                <div className="flex gap-3">
                                    <AlertCircle className="h-5 w-5 text-yellow-700 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-yellow-900 mb-1">AI-Powered Matching</h4>
                                        <p className="text-sm text-yellow-800">Our AI will analyze your project and match you with the most qualified contractors based on expertise, ratings, and availability.</p>
                                    </div>
                                </div>
                            </div>

                            <Button
                                className="w-full h-12 text-lg font-bold bg-[#fce328] text-black hover:bg-[#e2cb24] shadow-lg shadow-yellow-500/20 transition-all"
                                onClick={handleSubmitProject}
                                disabled={isSubmittingProject}
                            >
                                {isSubmittingProject ? (
                                    <>
                                        <Clock className="mr-2 h-5 w-5 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Plus className="mr-2 h-5 w-5" />
                                        Submit Project for Matching
                                    </>
                                )}
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Preview Section */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-slate-500">
                        <Eye className="h-4 w-4" />
                        <span className="text-sm font-medium uppercase tracking-wider">Live Preview</span>
                    </div>

                    <Card className="bg-white shadow-2xl shadow-slate-200/50 border-slate-100 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#fce328] to-[#e2cb24]" />
                        <CardHeader className="pb-4">
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <Badge className="bg-slate-900 text-white hover:bg-slate-800 mb-2">New Project</Badge>
                                    <CardTitle className="text-2xl font-bold text-slate-900">
                                        {projectTitle || "Project Title"}
                                    </CardTitle>
                                    <div className="flex items-center gap-2 text-sm text-slate-500">
                                        <MapPin className="h-3 w-3" />
                                        <span>New York, NY (Your Location)</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-medium text-slate-500">Budget</p>
                                    <p className="text-lg font-bold text-green-600">{projectBudget || "$0 - $0"}</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
                                    {projectDescription || "Your project description will appear here..."}
                                </p>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-slate-600">
                                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                                    <Clock className="h-4 w-4 text-[#fce328]" />
                                    <span className="font-medium">{projectTimeline || "Timeline"}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                                    <Sparkles className="h-4 w-4 text-purple-500" />
                                    <span className="font-medium">AI Matched</span>
                                </div>
                            </div>

                            <Separator />

                            <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10 border-2 border-white shadow-md">
                                    <AvatarImage src={user?.avatar} />
                                    <AvatarFallback className="bg-slate-900 text-white font-bold">
                                        {user?.name?.charAt(0) || 'C'}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">{user?.name || 'Client User'}</p>
                                    <p className="text-xs text-slate-500">Verified Client</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg h-fit">
                            <Sparkles className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-900 text-sm">Pro Tip</h4>
                            <p className="text-xs text-blue-700 mt-1">Detailed descriptions with measurements and material preferences get 3x more accurate quotes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostProject;
