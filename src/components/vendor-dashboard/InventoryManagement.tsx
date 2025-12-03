import { useState } from "react";
import { Package, AlertTriangle, TrendingUp, TrendingDown, Search, Plus, Edit, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  stock: number;
  minStock: number;
  maxStock: number;
  price: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
}

const InventoryManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const inventory: InventoryItem[] = [
    { id: "1", name: "Premium Cement Bags", sku: "CEM-001", category: "Building Materials", stock: 450, minStock: 100, maxStock: 1000, price: 12.99, status: "in-stock" },
    { id: "2", name: "Steel Rebar 10mm", sku: "STL-002", category: "Steel & Metal", stock: 85, minStock: 50, maxStock: 500, price: 8.50, status: "in-stock" },
    { id: "3", name: "Concrete Blocks", sku: "BLK-003", category: "Building Materials", stock: 25, minStock: 100, maxStock: 800, price: 2.75, status: "low-stock" },
    { id: "4", name: "Paint Primer White", sku: "PNT-004", category: "Paint & Coatings", stock: 0, minStock: 30, maxStock: 200, price: 24.99, status: "out-of-stock" },
    { id: "5", name: "Plywood Sheets 4x8", sku: "WOD-005", category: "Wood & Lumber", stock: 120, minStock: 50, maxStock: 300, price: 45.00, status: "in-stock" },
    { id: "6", name: "Electrical Wire 12AWG", sku: "ELC-006", category: "Electrical", stock: 40, minStock: 80, maxStock: 400, price: 1.25, status: "low-stock" },
  ];

  const stats = [
    { label: "Total Items", value: "248", icon: Package, color: "from-blue-400 to-blue-600", change: "+12" },
    { label: "Low Stock Items", value: "18", icon: AlertTriangle, color: "from-yellow-400 to-orange-500", change: "+3" },
    { label: "Out of Stock", value: "5", icon: TrendingDown, color: "from-red-400 to-red-600", change: "-2" },
    { label: "Total Value", value: "$45.2K", icon: TrendingUp, color: "from-green-400 to-green-600", change: "+8%" },
  ];

  const getStatusBadge = (status: InventoryItem["status"]) => {
    const styles = {
      "in-stock": "bg-green-100 text-green-700 border-green-300",
      "low-stock": "bg-yellow-100 text-yellow-700 border-yellow-300",
      "out-of-stock": "bg-red-100 text-red-700 border-red-300",
    };
    return <Badge className={`${styles[status]} border`}>{status.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</Badge>;
  };

  const getStockPercentage = (stock: number, maxStock: number) => {
    return (stock / maxStock) * 100;
  };

  const getProgressColor = (status: InventoryItem["status"]) => {
    if (status === "out-of-stock") return "bg-red-500";
    if (status === "low-stock") return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-600 mt-1">Track and manage your product inventory</p>
        </div>
        <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:shadow-lg gap-2">
          <Plus className="w-4 h-4" />
          Add Item
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className={`bg-gradient-to-r ${stat.color} p-4`}>
                <div className="flex items-center justify-between text-white">
                  <stat.icon className="w-8 h-8 opacity-80" />
                  <span className="text-sm font-semibold">{stat.change}</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle>Inventory Items</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search inventory..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full md:w-80"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {inventory.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">SKU: {item.sku} • {item.category}</p>
                      </div>
                      {getStatusBadge(item.status)}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Stock Level</span>
                        <span className="font-medium text-gray-900">{item.stock} / {item.maxStock} units</span>
                      </div>
                      <Progress value={getStockPercentage(item.stock, item.maxStock)} className="h-2">
                        <div className={`h-full ${getProgressColor(item.status)} rounded-full transition-all`} style={{ width: `${getStockPercentage(item.stock, item.maxStock)}%` }} />
                      </Progress>
                      {item.stock <= item.minStock && (
                        <div className="flex items-center gap-2 text-yellow-600 text-sm">
                          <AlertTriangle className="w-4 h-4" />
                          <span>Below minimum stock level ({item.minStock} units)</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Price</p>
                      <p className="text-lg font-bold text-gray-900">${item.price}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="hover:bg-yellow-50 hover:text-yellow-600 hover:border-yellow-400">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="hover:bg-red-50 hover:text-red-600 hover:border-red-400">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InventoryManagement;
