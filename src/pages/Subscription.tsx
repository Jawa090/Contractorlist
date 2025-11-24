import React, { useState } from "react";
import ReduxHeader from "@/components/ReduxHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Check, X, Zap, Briefcase, ArrowRight, Building, Star, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
    const navigate = useNavigate();
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

    const plans = [
        {
            id: "starter",
            name: "Starter",
            price: { monthly: "$0", yearly: "$0" },
            period: { monthly: "/month", yearly: "/year" },
            description: "Essential tools for individual contractors",
            features: [
                { name: "Basic Profile", included: true },
                { name: "Limited Project Listings", included: true },
                { name: "Community Access", included: true },
                { name: "Basic Support", included: true },
                { name: "Access to 200+ AI Tools", included: false },
                { name: "Advanced Analytics", included: false },
                { name: "Priority Support", included: false },
            ],
            buttonText: "Get Started",
            buttonVariant: "outline" as const,
            highlight: false,
            action: () => navigate("/signup"),
        },
        {
            id: "pro",
            name: "Pro",
            price: { monthly: "$49", yearly: "$470" },
            period: { monthly: "/month", yearly: "/year" },
            description: "Full access to our AI ecosystem",
            features: [
                { name: "Enhanced Profile", included: true },
                { name: "Unlimited Project Listings", included: true },
                { name: "Community Access", included: true },
                { name: "Priority Support", included: true },
                { name: "Access to 200+ AI Tools", included: true, highlight: true },
                { name: "Advanced Analytics", included: true },
                { name: "Export Capabilities", included: true },
            ],
            buttonText: "Upgrade to Pro",
            buttonVariant: "default" as const,
            highlight: true,
            popular: true,
            action: () => { }, // Mock upgrade
        },
        {
            id: "enterprise",
            name: "Enterprise",
            price: { monthly: "Custom", yearly: "Custom" },
            period: { monthly: "", yearly: "" },
            description: "For large teams and custom integrations",
            features: [
                { name: "Everything in Pro", included: true },
                { name: "Custom API Integrations", included: true },
                { name: "Dedicated Account Manager", included: true },
                { name: "SLA & Uptime Guarantees", included: true },
                { name: "Custom AI Model Training", included: true },
                { name: "White-label Options", included: true },
                { name: "Onboarding & Training", included: true },
            ],
            buttonText: "Contact Sales",
            buttonVariant: "outline" as const,
            highlight: false,
            action: () => navigate("/contact-us"), // Mock contact
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <ReduxHeader />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium mb-6">
                            <Star className="w-4 h-4 mr-2 fill-yellow-500 text-yellow-500" />
                            Unlock the full potential of AI
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                            Simple Pricing, <span className="text-yellow-500">Powerful Tools</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                            Choose the plan that fits your needs. From individual contractors to large enterprises,
                            we give you access to <span className="font-bold text-gray-900">200+ AI-powered construction tools</span>.
                        </p>

                        {/* Billing Toggle */}
                        <div className="flex items-center justify-center space-x-4 mb-12">
                            <Label
                                htmlFor="billing-toggle"
                                className={`text-sm font-medium cursor-pointer ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}
                                onClick={() => setBillingCycle("monthly")}
                            >
                                Monthly
                            </Label>
                            <Switch
                                id="billing-toggle"
                                checked={billingCycle === "yearly"}
                                onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
                                className="data-[state=checked]:bg-yellow-500"
                            />
                            <Label
                                htmlFor="billing-toggle"
                                className={`text-sm font-medium cursor-pointer ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}
                                onClick={() => setBillingCycle("yearly")}
                            >
                                Yearly <span className="ml-1 text-green-600 font-bold">(Save 20%)</span>
                            </Label>
                        </div>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {plans.map((plan) => (
                                <Card
                                    key={plan.id}
                                    className={`flex flex-col relative transition-all duration-300 ${plan.highlight
                                        ? "border-yellow-400 shadow-2xl scale-105 z-10 bg-white"
                                        : "border-gray-200 hover:border-yellow-200 hover:shadow-lg bg-white/50"
                                        }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                                            Most Popular
                                        </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                                        <div className="mt-4 flex items-baseline text-gray-900">
                                            <span className="text-4xl font-extrabold tracking-tight">
                                                {plan.price[billingCycle]}
                                            </span>
                                            <span className="ml-1 text-xl font-semibold text-gray-500">
                                                {plan.period[billingCycle]}
                                            </span>
                                        </div>
                                        <CardDescription className="mt-2 text-base">{plan.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <ul className="space-y-4">
                                            {plan.features.map((feature) => (
                                                <li key={feature.name} className="flex items-start">
                                                    <div className="flex-shrink-0">
                                                        {feature.included ? (
                                                            <Check className={`h-5 w-5 ${feature.highlight ? "text-yellow-500" : "text-green-500"}`} />
                                                        ) : (
                                                            <X className="h-5 w-5 text-gray-300" />
                                                        )}
                                                    </div>
                                                    <p className={`ml-3 text-sm ${feature.included ? "text-gray-700" : "text-gray-400"
                                                        } ${feature.highlight ? "font-bold text-black" : ""}`}>
                                                        {feature.name}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button
                                            className={`w-full py-6 text-lg font-semibold transition-all duration-200 ${plan.highlight
                                                ? "bg-yellow-400 hover:bg-yellow-500 text-black shadow-md hover:shadow-lg"
                                                : ""
                                                }`}
                                            variant={plan.buttonVariant}
                                            onClick={plan.action}
                                        >
                                            {plan.buttonText}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="bg-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 text-xs font-bold mb-6 border border-blue-800">
                                    <Briefcase className="w-3 h-3 mr-2" />
                                    PROFESSIONAL SERVICES
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                    Need more than just tools? <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                        We've got you covered.
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                    Our team of industry experts can handle the heavy lifting for you.
                                    From complex bid management to detailed cost estimation, we offer
                                    tailored services to ensure your projects succeed.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                    {[
                                        "Bid Management",
                                        "Cost Estimation",
                                        "Project Scheduling",
                                        "Contract Administration",
                                        "Procurement Strategy",
                                        "Risk Assessment"
                                    ].map((service) => (
                                        <div key={service} className="flex items-center space-x-3">
                                            <div className="p-1.5 bg-blue-500/20 rounded-full">
                                                <Check className="w-4 h-4 text-blue-400" />
                                            </div>
                                            <span className="text-gray-300 font-medium">{service}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-900/20"
                                    onClick={() => navigate("/contact-us")}
                                >
                                    Get a Custom Quote
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>

                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-30 blur-2xl animate-pulse"></div>
                                <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-2xl">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Service Request</h3>
                                            <p className="text-sm text-gray-400">Typical response time: &lt; 2 hours</p>
                                        </div>
                                        <Shield className="w-10 h-10 text-blue-500" />
                                    </div>

                                    <div className="space-y-4">
                                        <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium text-gray-300">Bid Management</span>
                                                <span className="text-xs bg-green-900/50 text-green-400 px-2 py-0.5 rounded">Active</span>
                                            </div>
                                            <div className="w-full bg-gray-600 rounded-full h-1.5">
                                                <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "75%" }}></div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium text-gray-300">Cost Estimation</span>
                                                <span className="text-xs bg-blue-900/50 text-blue-400 px-2 py-0.5 rounded">In Review</span>
                                            </div>
                                            <div className="w-full bg-gray-600 rounded-full h-1.5">
                                                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "40%" }}></div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium text-gray-300">Project Scheduling</span>
                                                <span className="text-xs bg-yellow-900/50 text-yellow-400 px-2 py-0.5 rounded">Pending</span>
                                            </div>
                                            <div className="w-full bg-gray-600 rounded-full h-1.5">
                                                <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: "10%" }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-700 flex items-center justify-between">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className={`w-8 h-8 rounded-full border-2 border-gray-800 bg-gray-600 flex items-center justify-center text-xs font-bold`}>
                                                    {String.fromCharCode(64 + i)}
                                                </div>
                                            ))}
                                            <div className="w-8 h-8 rounded-full border-2 border-gray-800 bg-gray-700 flex items-center justify-center text-xs text-gray-400">
                                                +5
                                            </div>
                                        </div>
                                        <span className="text-sm text-gray-400">Trusted by 500+ companies</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Subscription;
