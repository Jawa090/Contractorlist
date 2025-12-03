import { Users, Search, Filter, Mail, Phone, MapPin, ShoppingBag, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CustomerManagement = () => {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 234-567-8900",
      location: "New York, NY",
      totalOrders: 24,
      totalSpent: "$12,450",
      lastOrder: "2 days ago",
      status: "Active",
      rating: 4.8,
      avatar: "/contractor.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 234-567-8901",
      location: "Los Angeles, CA",
      totalOrders: 18,
      totalSpent: "$8,920",
      lastOrder: "5 days ago",
      status: "Active",
      rating: 5.0,
      avatar: "/contractor-2.jpg",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "+1 234-567-8902",
      location: "Chicago, IL",
      totalOrders: 32,
      totalSpent: "$15,680",
      lastOrder: "1 day ago",
      status: "VIP",
      rating: 4.9,
      avatar: "/contractor-3.png",
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah@example.com",
      phone: "+1 234-567-8903",
      location: "Houston, TX",
      totalOrders: 12,
      totalSpent: "$5,240",
      lastOrder: "1 week ago",
      status: "Active",
      rating: 4.7,
      avatar: "/girl.jpg",
    },
    {
      id: 5,
      name: "David Brown",
      email: "david@example.com",
      phone: "+1 234-567-8904",
      location: "Phoenix, AZ",
      totalOrders: 8,
      totalSpent: "$3,120",
      lastOrder: "2 weeks ago",
      status: "Inactive",
      rating: 4.5,
      avatar: "/boy1.jpg",
    },
  ];

  const customerStats = [
    { label: "Total Customers", value: "1,234", change: "+12%", color: "blue" },
    { label: "Active Customers", value: "892", change: "+8%", color: "green" },
    { label: "VIP Customers", value: "45", change: "+15%", color: "orange" },
    { label: "Avg. Order Value", value: "$425", change: "+5%", color: "purple" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customer Management</h1>
          <p className="text-gray-600 mt-1">Manage your customer relationships and data</p>
        </div>
        <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:shadow-lg">
          <Users className="w-4 h-4 mr-2" />
          Export Customers
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {customerStats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-md">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-sm text-green-600 font-medium">{stat.change} vs last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filter */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search customers by name, email, or phone..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Customers List */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-bold">All Customers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {customers.map((customer) => (
            <div key={customer.id} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <Avatar className="w-16 h-16 border-2 border-yellow-400">
                  <AvatarImage src={customer.avatar} />
                  <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white font-bold">
                    {customer.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                {/* Customer Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg text-gray-900">{customer.name}</h3>
                        <Badge 
                          variant="outline"
                          className={`
                            ${customer.status === 'VIP' ? 'bg-orange-50 text-orange-700 border-orange-200' : ''}
                            ${customer.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200' : ''}
                            ${customer.status === 'Inactive' ? 'bg-gray-50 text-gray-700 border-gray-200' : ''}
                          `}
                        >
                          {customer.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-gray-700">{customer.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-orange-600">{customer.totalSpent}</p>
                      <p className="text-xs text-gray-500">Total Spent</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>{customer.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{customer.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{customer.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <ShoppingBag className="w-4 h-4 text-gray-500" />
                        <span className="font-semibold text-gray-700">{customer.totalOrders} orders</span>
                      </div>
                      <span className="text-gray-500">Last order: {customer.lastOrder}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View Profile</Button>
                      <Button variant="outline" size="sm">Send Message</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerManagement;
