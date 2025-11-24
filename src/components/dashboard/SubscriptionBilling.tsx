import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SubscriptionBilling = () => {
    const { toast } = useToast();

    const handleAction = (action: string) => {
        toast({
            title: "Action Performed",
            description: `${action} successfully`,
        });
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Subscription & Billing</h1>
                <p className="text-gray-600 mt-1">Manage your subscription plan and payment methods</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                    <CardHeader className="border-b bg-gradient-to-r from-yellow-50 to-yellow-100">
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-2xl">Professional Plan</CardTitle>
                                <p className="text-sm text-gray-600 mt-1">Your current subscription</p>
                            </div>
                            <Badge className="bg-green-600 text-white">Active</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <p className="text-sm text-gray-600">Monthly Cost</p>
                                <p className="text-3xl font-bold text-gray-900 mt-1">$99</p>
                                <p className="text-xs text-gray-500 mt-1">per month</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Next Billing Date</p>
                                <p className="text-lg font-semibold text-gray-900 mt-1">Dec 10, 2024</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Payment Method</p>
                                <p className="text-lg font-semibold text-gray-900 mt-1">•••• 4242</p>
                            </div>
                        </div>

                        <div className="border-t pt-6">
                            <h4 className="font-semibold text-gray-900 mb-4">Plan Features</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {[
                                    "Unlimited AI Takeoffs",
                                    "Advanced Cost Estimation",
                                    "Lead Scoring & Management",
                                    "Material Price Database",
                                    "Project Management Tools",
                                    "Client Communication Portal",
                                    "Analytics & Reporting",
                                    "Priority Support"
                                ].map((feature) => (
                                    <div key={feature} className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                        <span className="text-sm text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-3 pt-4">
                            <Button variant="outline" onClick={() => handleAction("Upgrade Plan")}>
                                Upgrade Plan
                            </Button>
                            <Button variant="outline" onClick={() => handleAction("Change Payment Method")}>
                                Change Payment Method
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="border-b">
                        <CardTitle>Billing History</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="space-y-3">
                            {[
                                { date: "Nov 10, 2024", amount: "$99.00", status: "Paid" },
                                { date: "Oct 10, 2024", amount: "$99.00", status: "Paid" },
                                { date: "Sep 10, 2024", amount: "$99.00", status: "Paid" },
                                { date: "Aug 10, 2024", amount: "$99.00", status: "Paid" }
                            ].map((invoice, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="font-semibold text-gray-900">{invoice.amount}</p>
                                        <p className="text-xs text-gray-500">{invoice.date}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="text-green-600 border-green-600">
                                            {invoice.status}
                                        </Badge>
                                        <Button size="sm" variant="ghost">
                                            <Download className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button variant="outline" className="w-full mt-4">
                            View All Invoices
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader className="border-b">
                    <CardTitle>Available Plans</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: "Starter", price: "$49", features: ["10 AI Takeoffs/month", "Basic Estimation", "Lead Management", "Email Support"] },
                            { name: "Professional", price: "$99", features: ["Unlimited AI Takeoffs", "Advanced Estimation", "Lead Scoring", "Priority Support"], current: true },
                            { name: "Enterprise", price: "$199", features: ["Everything in Pro", "Custom Integrations", "Dedicated Account Manager", "24/7 Phone Support"] }
                        ].map((plan) => (
                            <Card key={plan.name} className={`${plan.current ? 'border-2 border-yellow-500' : ''}`}>
                                <CardHeader className={`${plan.current ? 'bg-yellow-50' : ''}`}>
                                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                                    <p className="text-3xl font-bold text-gray-900 mt-2">{plan.price}<span className="text-sm font-normal text-gray-600">/month</span></p>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <ul className="space-y-3 mb-6">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 text-sm">
                                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        className={`w-full ${plan.current ? 'bg-yellow-500 hover:bg-yellow-600 text-black' : ''}`}
                                        variant={plan.current ? 'default' : 'outline'}
                                        disabled={plan.current}
                                    >
                                        {plan.current ? 'Current Plan' : 'Upgrade'}
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default SubscriptionBilling;
