import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Play, CheckCircle, MessageSquare, Calendar, Clock, ArrowRight } from "lucide-react";

const AIAssistant = () => {
    return (
        <div className="min-h-screen bg-white -m-8">
            {/* Hero Section */}
            <section className="bg-white py-24 px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h1 className="text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                            Your 24/7 AI-Powered Office Manager
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Automate client communication, book more jobs, and reclaim your time. Our AI Assistant handles the routine tasks so you can focus on what you do best.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg font-semibold shadow-lg shadow-blue-600/20">
                                Start Your Free Trial
                            </Button>
                            <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-6 text-lg rounded-lg font-semibold">
                                Learn More
                            </Button>
                        </div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl overflow-hidden relative w-full aspect-square max-w-[500px] flex items-center justify-center">
                            {/* Abstract AI Visual Representation */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900 to-purple-900/80 z-0"></div>
                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                <BotVisual />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-slate-50 py-24 px-8">
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <h2 className="text-3xl font-bold text-slate-900">Supercharge Your Business with AI</h2>
                        <p className="text-lg text-slate-600">
                            Discover how our intelligent assistant can transform your daily operations, improve customer satisfaction, and drive growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<MessageSquare className="h-6 w-6 text-blue-600" />}
                            title="Automated Lead Follow-up"
                            description="Never miss a lead. Our AI instantly engages potential clients, qualifies them, and ensures timely follow-ups."
                        />
                        <FeatureCard
                            icon={<Clock className="h-6 w-6 text-blue-600" />}
                            title="24/7 Customer Service"
                            description="Provide instant answers to common questions and support your clients around the clock, even after hours."
                        />
                        <FeatureCard
                            icon={<Calendar className="h-6 w-6 text-blue-600" />}
                            title="Smart Scheduling"
                            description="Let the AI coordinate and book appointments directly into your calendar based on your availability."
                        />
                    </div>
                </div>
            </section>

            {/* Demo Section */}
            <section className="bg-white py-24 px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-slate-900">See It In Action</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Watch this short video to see how the AI Assistant can handle a typical customer inquiry and book a job, all without you lifting a finger.
                            </p>
                        </div>
                        <div className="bg-[#FDF6E9] rounded-3xl p-8 aspect-video flex items-center justify-center relative group cursor-pointer hover:shadow-xl transition-all border border-[#F5E6D3]">
                            <div className="w-20 h-20 bg-teal-700 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                                <Play className="h-8 w-8 text-white fill-current ml-1" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden transform lg:translate-y-12">
                        <div className="bg-white p-4 border-b border-slate-100 flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-900">AI Assistant</div>
                                    <div className="text-xs text-green-500 font-medium">Online</div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 space-y-6 h-[400px] overflow-y-auto bg-slate-50/30">
                            <ChatMessage
                                sender="AI"
                                text="Hello! I'm the AI assistant for John's Construction. How can I help you today?"
                                time="10:00 AM"
                            />
                            <ChatMessage
                                sender="User"
                                text="Hi, I have a leaky pipe under my kitchen sink. Are you available for a repair?"
                                time="10:01 AM"
                                isUser
                            />
                            <ChatMessage
                                sender="AI"
                                text="I can certainly help with that. To give you an accurate quote, could you please provide your address?"
                                time="10:01 AM"
                            />
                            <div className="flex justify-end">
                                <div className="bg-slate-100 text-slate-500 text-xs px-3 py-1 rounded-full animate-pulse">
                                    AI is typing...
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-slate-100 bg-white">
                            <div className="bg-slate-100 rounded-full px-4 py-3 text-slate-400 text-sm flex justify-between items-center">
                                <span>Type a message...</span>
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-blue-700 transition-colors">
                                    <ArrowRight className="h-4 w-4 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Solving Accordion */}
            <section className="bg-slate-50 py-24 px-8">
                <div className="max-w-3xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold text-slate-900">How It Solves Your Problems</h2>
                        <p className="text-lg text-slate-600">
                            See how the AI Assistant handles common scenarios, saving you time and winning you more business.
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <AccordionItem value="item-1" className="bg-white border border-slate-200 rounded-xl px-6 shadow-sm">
                            <AccordionTrigger className="hover:no-underline py-6 text-lg font-semibold text-slate-900">
                                After-Hours Inquiry
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 pb-6 text-base leading-relaxed">
                                When a potential customer contacts you at 10 PM, the AI instantly responds, gathers their information, answers basic questions, and assures them you'll follow up in the morning. You wake up to a qualified lead, not a missed call.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="bg-white border border-slate-200 rounded-xl px-6 shadow-sm">
                            <AccordionTrigger className="hover:no-underline py-6 text-lg font-semibold text-slate-900">
                                Appointment Booking
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 pb-6 text-base leading-relaxed">
                                The AI can access your calendar availability and coordinate directly with clients to find a suitable time slot, booking the appointment and sending confirmations automatically.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="bg-white border border-slate-200 rounded-xl px-6 shadow-sm">
                            <AccordionTrigger className="hover:no-underline py-6 text-lg font-semibold text-slate-900">
                                Instant Quote Request
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 pb-6 text-base leading-relaxed">
                                For standard services, the AI can collect necessary details (like square footage or issue type) and provide preliminary estimates or schedule a site visit for a formal quote.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="bg-white py-24 px-8">
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold text-slate-900">Find the Right Plan for Your Business</h2>
                        <p className="text-lg text-slate-600">
                            Choose a plan that scales with your needs. Start free and upgrade as you grow.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        <PricingCard
                            title="Starter"
                            description="For individuals and small teams getting started."
                            price="$49"
                            features={["50 AI Conversations/mo", "Lead Qualification", "Basic Scheduling"]}
                        />
                        <PricingCard
                            title="Growth"
                            description="For growing businesses that need more power and automation."
                            price="$99"
                            isPopular
                            features={["200 AI Conversations/mo", "Advanced Scheduling", "CRM Integration", "Instant Quoting"]}
                        />
                        <PricingCard
                            title="Scale"
                            description="For established businesses requiring advanced features."
                            price="$199"
                            features={["Unlimited Conversations", "All Growth Features", "Priority Support", "API Access"]}
                        />
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="bg-slate-50 py-24 px-8">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <Avatar className="h-24 w-24 mx-auto border-4 border-white shadow-xl">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback className="bg-slate-200 text-slate-500 text-xl">MR</AvatarFallback>
                    </Avatar>
                    <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 italic leading-relaxed">
                        "The AI Assistant is a game-changer. It handles all our initial client calls, which means we never miss a lead, even when we're on a job site. Our booking rate has gone up by 30% since we started using it."
                    </blockquote>
                    <div>
                        <div className="font-bold text-slate-900 text-lg">Mark R.</div>
                        <div className="text-slate-500">Owner, RKS Plumbing</div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="bg-blue-700 py-20 px-8 text-center text-white">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl font-bold">Ready to Automate Your Business?</h2>
                    <p className="text-blue-100 text-xl max-w-2xl mx-auto leading-relaxed">
                        Stop letting administrative tasks slow you down. Let our AI Assistant handle the busywork so you can focus on growing your construction business.
                    </p>
                    <Button className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-7 text-lg rounded-lg font-bold shadow-xl">
                        Get Started Now
                    </Button>
                </div>
            </section>
        </div>
    );
};

// Helper Components

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
        <CardHeader>
            <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                {icon}
            </div>
            <CardTitle className="text-xl font-bold text-slate-900">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-slate-600 leading-relaxed">{description}</p>
        </CardContent>
    </Card>
);

const ChatMessage = ({ sender, text, time, isUser }: { sender: string, text: string, time: string, isUser?: boolean }) => (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${isUser ? 'bg-[#FDF6E9] text-slate-800 rounded-tr-none' : 'bg-white border border-slate-100 text-slate-800 rounded-tl-none'}`}>
            <p className="text-sm leading-relaxed">{text}</p>
        </div>
    </div>
);

const PricingCard = ({ title, description, price, features, isPopular }: { title: string, description: string, price: string, features: string[], isPopular?: boolean }) => (
    <Card className={`relative h-full flex flex-col transition-all duration-300 ${isPopular ? 'border-2 border-blue-600 shadow-2xl scale-105 z-10' : 'border border-slate-200 shadow-sm hover:shadow-lg'}`}>
        {isPopular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 text-sm font-bold uppercase tracking-wide shadow-md">Most Popular</Badge>
            </div>
        )}
        <CardHeader className={isPopular ? 'bg-blue-600 text-white rounded-t-lg pb-8 pt-8' : 'pb-8 pt-8'}>
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            <CardDescription className={isPopular ? 'text-blue-100' : 'text-slate-500'}>{description}</CardDescription>
            <div className="mt-6">
                <span className="text-5xl font-bold tracking-tight">{price}</span>
                <span className={`text-lg ${isPopular ? 'text-blue-100' : 'text-slate-500'}`}>/mo</span>
            </div>
        </CardHeader>
        <CardContent className="flex-grow pt-8 space-y-5">
            {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                    <CheckCircle className={`h-5 w-5 shrink-0 ${isPopular ? 'text-blue-600' : 'text-green-500'}`} />
                    <span className="text-slate-600 font-medium">{feature}</span>
                </div>
            ))}
        </CardContent>
        <CardFooter className="pt-8 pb-8">
            <Button className={`w-full py-6 text-lg font-semibold shadow-sm ${isPopular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'}`}>
                {isPopular ? 'Choose Growth' : `Choose ${title}`}
            </Button>
        </CardFooter>
    </Card>
);

const BotVisual = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full text-blue-400 animate-pulse-slow">
        <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="url(#glow)" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="animate-spin-slow" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-50" />

        {/* Nodes */}
        <circle cx="100" cy="60" r="2" fill="white" className="animate-ping" />
        <circle cx="140" cy="100" r="2" fill="white" className="animate-ping delay-100" />
        <circle cx="100" cy="140" r="2" fill="white" className="animate-ping delay-200" />
        <circle cx="60" cy="100" r="2" fill="white" className="animate-ping delay-300" />

        {/* Connections */}
        <path d="M 100 60 L 140 100 L 100 140 L 60 100 Z" stroke="white" strokeWidth="0.5" fill="none" className="opacity-30" />
        <path d="M 100 60 L 100 140 M 60 100 L 140 100" stroke="white" strokeWidth="0.5" fill="none" className="opacity-30" />
    </svg>
);

export default AIAssistant;
