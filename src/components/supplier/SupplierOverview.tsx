import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  DollarSign,
  Package,
  ShoppingCart,
  TrendingUp,
  Users,
  AlertTriangle,
  Bot,
  MessageSquare,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  Activity,
  Target,
  Award,
  Truck,
  BarChart3,
  Filter,
  Plus,
  ArrowRight,
  Zap,
  Star,
  Calendar,
  Building
} from 'lucide-react';

const SupplierOverview = () => {
  // Enhanced stats with better metrics
  const stats = [
    {
      title: 'Monthly Revenue',
      value: '$156,240',
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: DollarSign,
      description: 'vs last month',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Active Products',
      value: '1,247',
      change: '+23',
      changeType: 'positive' as const,
      icon: Package,
      description: 'in catalog',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Pending Orders',
      value: '18',
      change: '+5',
      changeType: 'positive' as const,
      icon: ShoppingCart,
      description: 'awaiting fulfillment',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Active Contractors',
      value: '89',
      change: '+7',
      changeType: 'positive' as const,
      icon: Users,
      description: 'this month',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      contractor: 'Turner Construction',
      product: 'Portland Cement - Type I',
      quantity: '500 bags',
      value: '$12,500',
      status: 'pending',
      date: '2 hours ago',
      priority: 'high',
      location: 'Austin, TX'
    },
    {
      id: 'ORD-002',
      contractor: 'ABC Construction',
      product: 'Rebar #4 - 20ft',
      quantity: '200 pieces',
      value: '$8,400',
      status: 'confirmed',
      date: '4 hours ago',
      priority: 'medium',
      location: 'Dallas, TX'
    },
    {
      id: 'ORD-003',
      contractor: 'Metro Builders',
      product: 'Ready Mix Concrete',
      quantity: '15 cubic yards',
      value: '$3,750',
      status: 'delivered',
      date: '1 day ago',
      priority: 'low',
      location: 'Houston, TX'
    }
  ];

  const lowStockItems = [
    { name: 'Rebar #4', current: 45, minimum: 100, unit: 'pieces', category: 'Steel' },
    { name: 'Portland Cement', current: 78, minimum: 200, unit: 'bags', category: 'Cement' },
    { name: 'Steel Beams 8"', current: 12, minimum: 25, unit: 'pieces', category: 'Steel' }
  ];

  const topProducts = [
    { name: 'Ready Mix Concrete', sales: '$45,200', growth: '+15%', orders: 156 },
    { name: 'Portland Cement', sales: '$38,900', growth: '+8%', orders: 134 },
    { name: 'Rebar #4', sales: '$29,600', growth: '+22%', orders: 98 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'confirmed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'delivered': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-3 h-3" />;
      case 'confirmed': return <CheckCircle className="w-3 h-3" />;
      case 'delivered': return <CheckCircle className="w-3 h-3" />;
      default: return <XCircle className="w-3 h-3" />;
    }
  };

  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      {/* Professional Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-900">Good morning, BuildMart Supply</h1>
            <Badge className="bg-green-100 text-green-800 font-semibold">
              <Activity className="w-3 h-3 mr-1" />
              Active
            </Badge>
          </div>
          <p className="text-gray-600 text-lg">
            You have <span className="font-semibold text-orange-600">18 pending orders</span> and <span className="font-semibold text-blue-600">3 low stock alerts</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 border-orange-200 text-orange-700 hover:bg-orange-50">
            <Filter className="w-4 h-4" />
            Filter Orders
          </Button>
          <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold gap-2 shadow-lg">
            <Plus className="w-5 h-5" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-white hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-500'
                }`}>
                  {stat.change}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders - Enhanced */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Recent Orders</h2>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-orange-100 text-orange-800 font-semibold">
                18 Pending
              </Badge>
              <Button variant="outline" size="sm" className="text-orange-600 border-orange-200 hover:bg-orange-50">
                <Eye className="w-4 h-4 mr-2" />
                View All
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <Card key={order.id} className={`bg-white hover:shadow-xl transition-all duration-300 border-l-4 ${getPriorityColor(order.priority)} group cursor-pointer`}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-lg text-gray-900">{order.id}</span>
                          <Badge className={getStatusColor(order.status)}>
                            {getStatusIcon(order.status)}
                            <span className="ml-1 capitalize">{order.status}</span>
                          </Badge>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-green-600">{order.value}</p>
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-xl text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {order.contractor}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Package className="w-4 h-4" />
                          {order.product}
                        </div>
                        <div className="flex items-center gap-1">
                          <Target className="w-4 h-4" />
                          {order.quantity}
                        </div>
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {order.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {order.date}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-between gap-3">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Eye className="w-4 h-4" />
                          View
                        </Button>
                        {order.status === 'pending' && (
                          <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold gap-1">
                            <CheckCircle className="w-4 h-4" />
                            Confirm
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Sidebar */}
        <div className="space-y-6">
          {/* Low Stock Alerts - Enhanced */}
          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                <span className="text-lg font-bold">Low Stock Alerts</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {lowStockItems.map((item, index) => (
                <div key={index} className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">{item.name}</span>
                    <Badge variant="outline" className="text-xs border-gray-300">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <Progress 
                      value={(item.current / item.minimum) * 100} 
                      className="h-3"
                    />
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Current: {item.current} {item.unit}</span>
                      <span>Min: {item.minimum} {item.unit}</span>
                    </div>
                  </div>
                </div>
              ))}
              <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold">
                <Plus className="w-4 h-4 mr-2" />
                Reorder Items
              </Button>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-between">
                <span className="text-lg font-bold">Top Products</span>
                <Button variant="ghost" size="sm" className="text-orange-600">
                  <BarChart3 className="w-4 h-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span>{product.sales}</span>
                      <span className="text-green-600 font-medium">{product.growth}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-blue-600">
                      <ShoppingCart className="w-3 h-3" />
                      <span className="text-sm font-medium">{product.orders}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Enhanced AI Assistant Section */}
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-0 shadow-xl overflow-hidden">
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -left-8 bottom-8 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <CardHeader className="pb-4 relative z-10">
          <CardTitle className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
              <Bot className="w-6 h-6 text-black" />
            </div>
            <div>
              <span className="text-xl font-bold">AI Supply Intelligence</span>
              <p className="text-sm text-gray-400 font-normal mt-1">Smart insights for your business</p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-5 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">📈 Demand Forecast</h4>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      Expect 25% increase in cement demand next month due to upcoming commercial projects in Austin area.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Target className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">🎯 New Opportunities</h4>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      3 new contractors in your area are looking for steel suppliers. Consider competitive quotes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-5 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <DollarSign className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">💡 Pricing Optimization</h4>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      Adjust rebar prices by 3-5% to match market trends and maximize profit margins.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold">
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat with AI Assistant
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupplierOverview;