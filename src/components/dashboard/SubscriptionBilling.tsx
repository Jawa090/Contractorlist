import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const SubscriptionBilling = () => {
  const { toast } = useToast();

  const handleAction = (action: string) => {
    toast({
      title: action,
      description: `${action} dialog would open here`,
      duration: 3000,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Subscription & Billing</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your subscription plan and payment methods</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-yellow-500 shadow-lg shadow-yellow-500/10">
          <CardHeader className="border-b bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <CardTitle className="text-xl font-bold text-white">Enterprise Plan</CardTitle>
                  <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 border-none">Top Tier</Badge>
                </div>
                <p className="text-sm text-gray-400 mt-1">Your current subscription</p>
              </div>
              <Badge className="bg-green-500 text-white shadow-sm border-none px-3 py-1">Active</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-600">Monthly Cost</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">$299</p>
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
              <h4 className="font-semibold text-gray-900 mb-4">Enterprise Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Unlimited AI Takeoffs & Estimates",
                  "Advanced Lead Scoring & Matching",
                  "Priority 24/7 Dedicated Support",
                  "Custom API Integrations",
                  "White-label Reports",
                  "Multi-User Team Access (Unlimited)",
                  "Advanced Analytics & Forecasting",
                  "Dedicated Account Manager"
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button className="bg-black hover:bg-gray-800 text-white shadow-lg shadow-black/20 transition-all" onClick={() => handleAction("Manage Plan")}>
                Manage Plan
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
                { date: "Nov 10, 2024", amount: "$299.00", status: "Paid" },
                { date: "Oct 10, 2024", amount: "$299.00", status: "Paid" },
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
                    <Button size="sm" variant="ghost" onClick={() => handleAction("Download Invoice")}>
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" onClick={() => handleAction("View All Invoices")}>
              View All Invoices
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubscriptionBilling;
