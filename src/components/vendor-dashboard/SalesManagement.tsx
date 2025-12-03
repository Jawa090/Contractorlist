import { useState } from "react";
import { DollarSign, TrendingUp, ShoppingCart, Package, Calendar, Download, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const SalesManagement = () => {
  const [timeRange, setTimeRange] = useState("7days");

  const salesStats = [
    { label: "Total Sales", value: "$45,231", change: "+20.1%", trend: "up", icon: DollarSign, color: "green" },
    { label: "Orders", value: "356", change: "+12.5%", trend: "up", icon: ShoppingCart, color: "blue" },
    { label: "Avg Order Value", value: "$127", change: "+5.2%", trend: "up", icon: TrendingUp, color: "purple" },
    { label: "Products Sold", value: "1,234", change: "+8.2%", trend: "up", icon: Package, color: "orange" },
  ];

  const topSellingProducts = [
    { name: "Premium Cement Bag", sales: 245, revenue: "$12,250", growth: "+15%" },
    { name: "Steel Rods Bundle", sales: 189, revenue: "$16,920", growth: "+22%" },
    { name: "Paint Supplies Kit", sales: 156, revenue: "$7,020", growth: "+8%" },
    { name: "Safety Helmet", sales: 312, revenue: "$7,800", growth: "+18%" },
    { name: "Lumber 2x4x8", sales: 567, revenue: "$7,087", growth: "+12%" },
  ];

  const recentTransactions = [
    { id: "TXN-1234", customer: "John Doe", amount: "$2,500", date: "2024-01-20 10:30 AM", status: "completed" },
    { id: "TXN-1233", customer: "Jane Smith", amount: "$1,800", date: "2024-01-20 09:15 AM", status: "completed" },
    { id: "TXN-1232", customer: "Mike Johnson", amount: "$450", date: "2024-01-19 04:20 PM", status: "completed" },
    { id: "TXN-1231", customer: "Emily Brown", amount: "$1,560", date: "2024-01-19 02:45 PM", status: "pending" },
    { id: "TXN-1230", customer: "David Lee", amount: "$890", date: "2024-01-19 11:30 AM", status: "completed" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sales Management</h1>
          <p className="text-gray-600 mt-1">Track your sales performance and revenue</p>
        </div>
        <div className="flex gap-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="90days">Last 90 Days</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Sales Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {salesStats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-green-600 font-medium">{stat.change}</span>
                    <span className="text-gray-500">vs last period</span>
                  </div>
                </div>
                <div className={`bg-${stat.color}-50 p-3 rounded-xl`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Selling Products */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Top Selling Products</span>
              <Button variant="ghost" size="sm" className="text-orange-600">
                View All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topSellingProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg flex items-center justify-center font-bold text-orange-600">
                      #{index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{product.name}</h4>
                      <p className="text-sm text-gray-600">{product.sales} units sold</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{product.revenue}</p>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                      {product.growth}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Recent Transactions</span>
              <Button variant="ghost" size="sm" className="text-orange-600">
                View All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900">{transaction.id}</h4>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          transaction.status === 'completed' 
                            ? 'bg-green-50 text-green-700 border-green-200' 
                            : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                        }`}
                      >
                        {transaction.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{transaction.customer}</p>
                    <p className="text-xs text-gray-500 mt-1">{transaction.date}</p>
                  </div>
                  <p className="font-bold text-lg text-gray-900">{transaction.amount}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sales Chart Placeholder */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle>Sales Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-16 h-16 text-orange-400 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">Sales chart visualization</p>
              <p className="text-sm text-gray-500 mt-1">Integrate with charting library for detailed analytics</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesManagement;
