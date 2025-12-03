import { useState } from "react";
import { Tag, Plus, Percent, Calendar, TrendingUp, Edit, Trash2, Copy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PromotionsManagement = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const promotions = [
    {
      id: 1,
      name: "Summer Sale 2024",
      code: "SUMMER20",
      discount: "20%",
      type: "percentage",
      startDate: "2024-06-01",
      endDate: "2024-08-31",
      uses: 145,
      maxUses: 500,
      status: "active",
      minPurchase: "$100",
    },
    {
      id: 2,
      name: "New Customer Discount",
      code: "WELCOME15",
      discount: "15%",
      type: "percentage",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      uses: 89,
      maxUses: 1000,
      status: "active",
      minPurchase: "$50",
    },
    {
      id: 3,
      name: "Bulk Order Discount",
      code: "BULK50",
      discount: "$50",
      type: "fixed",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      uses: 34,
      maxUses: 200,
      status: "active",
      minPurchase: "$500",
    },
    {
      id: 4,
      name: "Spring Clearance",
      code: "SPRING25",
      discount: "25%",
      type: "percentage",
      startDate: "2024-03-01",
      endDate: "2024-05-31",
      uses: 267,
      maxUses: 300,
      status: "expired",
      minPurchase: "$75",
    },
  ];

  const stats = [
    { label: "Active Promotions", value: "3", icon: Tag, color: "green" },
    { label: "Total Redemptions", value: "535", icon: TrendingUp, color: "blue" },
    { label: "Avg Discount", value: "18%", icon: Percent, color: "purple" },
    { label: "Revenue Impact", value: "$12.5K", icon: TrendingUp, color: "orange" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Promotions & Discounts</h1>
          <p className="text-gray-600 mt-1">Create and manage promotional campaigns</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Create Promotion
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Promotion</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="promoName">Promotion Name</Label>
                  <Input id="promoName" placeholder="e.g., Summer Sale 2024" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="promoCode">Promo Code</Label>
                  <Input id="promoCode" placeholder="e.g., SUMMER20" className="mt-1" />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe your promotion..." className="mt-1" rows={3} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="discountType">Discount Type</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Percentage (%)</SelectItem>
                      <SelectItem value="fixed">Fixed Amount ($)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="discountValue">Discount Value</Label>
                  <Input id="discountValue" type="number" placeholder="e.g., 20" className="mt-1" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input id="startDate" type="date" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="endDate">End Date</Label>
                  <Input id="endDate" type="date" className="mt-1" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="minPurchase">Minimum Purchase ($)</Label>
                  <Input id="minPurchase" type="number" placeholder="e.g., 100" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="maxUses">Maximum Uses</Label>
                  <Input id="maxUses" type="number" placeholder="e.g., 500" className="mt-1" />
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <Label htmlFor="autoApply">Auto-apply at checkout</Label>
                  <p className="text-xs text-gray-500">Automatically apply this promotion when conditions are met</p>
                </div>
                <Switch id="autoApply" />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>Cancel</Button>
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                Create Promotion
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                </div>
                <div className={`bg-${stat.color}-50 p-3 rounded-xl`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Promotions List */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle>All Promotions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {promotions.map((promo) => (
              <div key={promo.id} className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{promo.name}</h3>
                      <Badge 
                        variant="outline"
                        className={`${
                          promo.status === 'active' 
                            ? 'bg-green-50 text-green-700 border-green-200' 
                            : 'bg-gray-100 text-gray-600 border-gray-300'
                        }`}
                      >
                        {promo.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        <span className="font-mono font-semibold">{promo.code}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Percent className="w-4 h-4" />
                        <span>{promo.discount} off</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{promo.startDate} to {promo.endDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="hover:bg-yellow-50">
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-blue-50">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-red-50 text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Uses</p>
                    <p className="font-semibold text-gray-900">{promo.uses} / {promo.maxUses}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Min Purchase</p>
                    <p className="font-semibold text-gray-900">{promo.minPurchase}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Discount Type</p>
                    <p className="font-semibold text-gray-900 capitalize">{promo.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Remaining</p>
                    <p className="font-semibold text-gray-900">{promo.maxUses - promo.uses}</p>
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

export default PromotionsManagement;
