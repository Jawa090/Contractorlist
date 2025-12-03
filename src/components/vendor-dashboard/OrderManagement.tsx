import { useState } from "react";
import { Package, Truck, CheckCircle, Clock, XCircle, Search, Filter, Eye, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Order {
  id: string;
  customer: string;
  items: number;
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  date: string;
  shippingAddress: string;
}

const OrderManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const orders: Order[] = [
    { id: "ORD-001", customer: "John Smith", items: 3, total: 1250, status: "delivered", date: "2024-01-15", shippingAddress: "123 Main St, City" },
    { id: "ORD-002", customer: "Sarah Johnson", items: 5, total: 2340, status: "shipped", date: "2024-01-16", shippingAddress: "456 Oak Ave, Town" },
    { id: "ORD-003", customer: "Mike Wilson", items: 2, total: 890, status: "processing", date: "2024-01-17", shippingAddress: "789 Pine Rd, Village" },
    { id: "ORD-004", customer: "Emily Brown", items: 4, total: 1560, status: "pending", date: "2024-01-18", shippingAddress: "321 Elm St, City" },
    { id: "ORD-005", customer: "David Lee", items: 1, total: 450, status: "cancelled", date: "2024-01-19", shippingAddress: "654 Maple Dr, Town" },
  ];

  const stats = [
    { label: "Total Orders", value: "156", icon: Package, color: "bg-blue-500" },
    { label: "Pending", value: "23", icon: Clock, color: "bg-yellow-500" },
    { label: "Shipped", value: "45", icon: Truck, color: "bg-orange-500" },
    { label: "Delivered", value: "88", icon: CheckCircle, color: "bg-green-500" },
  ];

  const getStatusBadge = (status: Order["status"]) => {
    const styles = {
      pending: "bg-yellow-100 text-yellow-700 border-yellow-300",
      processing: "bg-blue-100 text-blue-700 border-blue-300",
      shipped: "bg-orange-100 text-orange-700 border-orange-300",
      delivered: "bg-green-100 text-green-700 border-green-300",
      cancelled: "bg-red-100 text-red-700 border-red-300",
    };
    return <Badge className={`${styles[status]} border`}>{status.charAt(0).toUpperCase() + status.slice(1)}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Order Management</h1>
        <p className="text-gray-600 mt-1">Track and manage customer orders</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="border-l-4 hover:shadow-lg transition-shadow" style={{ borderLeftColor: stat.color.replace('bg-', '#') }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-xl`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle>Recent Orders</CardTitle>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search orders..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Order ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Customer</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Items</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Total</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-900">{order.id}</td>
                    <td className="py-4 px-4 text-gray-700">{order.customer}</td>
                    <td className="py-4 px-4 text-gray-700">{order.items} items</td>
                    <td className="py-4 px-4 font-semibold text-gray-900">${order.total.toLocaleString()}</td>
                    <td className="py-4 px-4">{getStatusBadge(order.status)}</td>
                    <td className="py-4 px-4 text-gray-600">{order.date}</td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="hover:bg-yellow-50 hover:text-yellow-600">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="hover:bg-orange-50 hover:text-orange-600">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderManagement;
