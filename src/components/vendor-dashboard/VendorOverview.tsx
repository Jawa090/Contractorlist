import { 
  DollarSign, 
  ShoppingCart, 
  Package, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Users,
  Star
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface VendorOverviewProps {
  setActiveTab: (tab: string) => void;
}

const VendorOverview = ({ setActiveTab }: VendorOverviewProps) => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
      color: "green",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: "Total Orders",
      value: "356",
      change: "+12.5%",
      trend: "up",
      icon: ShoppingCart,
      color: "blue",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Products Sold",
      value: "1,234",
      change: "+8.2%",
      trend: "up",
      icon: Package,
      color: "purple",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Store Views",
      value: "8,549",
      change: "+15.3%",
      trend: "up",
      icon: Eye,
      color: "orange",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  const recentOrders = [
    {
      id: "#ORD-1234",
      customer: "John Doe",
      product: "Premium Cement Bag",
      quantity: 50,
      amount: "$2,500",
      status: "Pending",
      date: "2 hours ago",
    },
    {
      id: "#ORD-1233",
      customer: "Jane Smith",
      product: "Steel Rods Bundle",
      quantity: 20,
      amount: "$1,800",
      status: "Processing",
      date: "5 hours ago",
    },
    {
      id: "#ORD-1232",
      customer: "Mike Johnson",
      product: "Paint Supplies Kit",
      quantity: 10,
      amount: "$450",
      status: "Shipped",
      date: "1 day ago",
    },
  ];

  const topProducts = [
    {
      name: "Premium Cement Bag",
      sold: 245,
      revenue: "$12,250",
      stock: 450,
      image: "/placeholder.jpg",
    },
    {
      name: "Steel Rods Bundle",
      sold: 189,
      revenue: "$16,920",
      stock: 320,
      image: "/placeholder.jpg",
    },
    {
      name: "Paint Supplies Kit",
      sold: 156,
      revenue: "$7,020",
      stock: 180,
      image: "/placeholder.jpg",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Vendor! 👋</h1>
            <p className="text-white/90 text-lg">Here's what's happening with your store today</p>
          </div>
          <Button 
            onClick={() => setActiveTab('products')}
            className="bg-white text-orange-600 hover:bg-gray-50 font-semibold shadow-lg"
          >
            <Package className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                    <div className="flex items-center gap-1 text-sm">
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="w-4 h-4 text-green-600" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 text-red-600" />
                      )}
                      <span className={`${stat.trend === "up" ? "text-green-600" : "text-red-600"} font-medium`}>
                        {stat.change}
                      </span>
                      <span className="text-gray-500">vs last month</span>
                    </div>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-xl`}>
                    <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <Card className="lg:col-span-2 border-0 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <CardTitle className="text-xl font-bold">Recent Orders</CardTitle>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setActiveTab('orders')}
              className="text-purple-600 hover:text-purple-700"
            >
              View All
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900">{order.id}</h4>
                      <Badge 
                        variant="outline" 
                        className={`
                          ${order.status === 'Pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : ''}
                          ${order.status === 'Processing' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                          ${order.status === 'Shipped' ? 'bg-green-50 text-green-700 border-green-200' : ''}
                        `}
                      >
                        {order.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                  </div>
                  <span className="text-lg font-bold text-gray-900">{order.amount}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{order.product} × {order.quantity}</span>
                  <span>{order.date}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Top Products</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm text-gray-900 truncate">{product.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-600">{product.sold} sold</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs font-semibold text-green-600">{product.revenue}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button 
              onClick={() => setActiveTab('products')}
              variant="outline" 
              className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-yellow-50 hover:border-yellow-300"
            >
              <Package className="w-6 h-6 text-orange-600" />
              <span className="text-sm font-medium">Add Product</span>
            </Button>
            <Button 
              onClick={() => setActiveTab('orders')}
              variant="outline" 
              className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-blue-50 hover:border-blue-300"
            >
              <ShoppingCart className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-medium">View Orders</span>
            </Button>
            <Button 
              onClick={() => setActiveTab('inventory')}
              variant="outline" 
              className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-orange-50 hover:border-orange-300"
            >
              <TrendingUp className="w-6 h-6 text-orange-600" />
              <span className="text-sm font-medium">Check Stock</span>
            </Button>
            <Button 
              onClick={() => setActiveTab('analytics')}
              variant="outline" 
              className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-green-50 hover:border-green-300"
            >
              <Users className="w-6 h-6 text-green-600" />
              <span className="text-sm font-medium">View Analytics</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorOverview;
