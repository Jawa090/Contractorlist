import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Calculator, DollarSign, CheckCircle, Clock, ArrowRight, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CostEstimation = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Cost Estimation & Take Off</h1>
          <p className="text-sm text-gray-500 mt-1">Professional on-demand cost estimation services</p>
        </div>
        <Button className="bg-black hover:bg-gray-800 text-white shadow-lg shadow-black/20 transition-all">
          <Plus className="w-4 h-4 mr-2" />
          New Request
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-xl transition-all duration-300 border-none shadow-sm group cursor-pointer">
          <CardContent className="p-8 flex flex-col items-center text-center h-full">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
              <Upload className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Upload Plans</h3>
            <p className="text-sm text-gray-500 mb-6 flex-1">Upload your project drawings and specifications for review.</p>
            <Button variant="outline" className="w-full border-gray-200 hover:border-blue-200 hover:bg-blue-50 text-gray-900 group-hover:text-blue-700">
              Upload Files
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 border-none shadow-sm group cursor-pointer">
          <CardContent className="p-8 flex flex-col items-center text-center h-full">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300">
              <Calculator className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Get Estimate</h3>
            <p className="text-sm text-gray-500 mb-6 flex-1">Receive detailed cost breakdown within 24-48 hours.</p>
            <Button variant="outline" className="w-full border-gray-200 hover:border-green-200 hover:bg-green-50 text-gray-900 group-hover:text-green-700">
              Request Estimate
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 border-none shadow-sm group cursor-pointer">
          <CardContent className="p-8 flex flex-col items-center text-center h-full">
            <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-100 group-hover:scale-110 transition-all duration-300">
              <FileText className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">View Reports</h3>
            <p className="text-sm text-gray-500 mb-6 flex-1">Access your completed estimation reports and history.</p>
            <Button variant="outline" className="w-full border-gray-200 hover:border-yellow-200 hover:bg-yellow-50 text-gray-900 group-hover:text-yellow-700">
              View Reports
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="border-b bg-white px-6 py-4">
          <CardTitle className="flex items-center gap-2 text-base font-bold">
            <Clock className="w-5 h-5 text-gray-600" />
            Recent Requests
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {[
              { project: "Kitchen Renovation - 123 Main St", status: "Completed", date: "Nov 20, 2024", cost: "$45,200" },
              { project: "Bathroom Remodel - 456 Oak Ave", status: "In Progress", date: "Nov 22, 2024", cost: "Pending" },
              { project: "Deck Installation - 789 Pine Rd", status: "Completed", date: "Nov 18, 2024", cost: "$12,500" },
            ].map((request, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all group">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${request.status === "Completed" ? "bg-green-500" : "bg-yellow-500"}`}></div>
                    <h4 className="font-semibold text-gray-900">{request.project}</h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 pl-5">Submitted: {request.date}</p>
                </div>
                <div className="text-right flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">{request.cost}</p>
                    <Badge variant={request.status === "Completed" ? "default" : "secondary"} className={request.status === "Completed" ? "bg-green-100 text-green-700 hover:bg-green-200 border-none" : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 border-none"}>
                      {request.status}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="icon" className="text-gray-400 group-hover:text-gray-900">
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CostEstimation;
