import { useState } from "react";
import { Package, Plus, Search, Filter, TrendingUp, Eye, Upload, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const ProductManagement = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const { toast } = useToast();
  const categories = [
    "All Products",
    "Building Materials",
    "Construction Tools",
    "Paint & Supplies",
    "Electrical",
    "Plumbing",
    "Hardware",
    "Safety Equipment",
    "Lumber & Wood",
    "Roofing Materials",
  ];

  const products = [
    { id: 1, name: "Premium Cement Bag", category: "Building Materials", price: "$50.00", stock: 450, status: "In Stock", sales: 245 },
    { id: 2, name: "Steel Rods Bundle", category: "Construction Tools", price: "$89.50", stock: 320, status: "In Stock", sales: 189 },
    { id: 3, name: "Paint Supplies Kit", category: "Paint & Supplies", price: "$45.00", stock: 180, status: "In Stock", sales: 156 },
    { id: 4, name: "Electrical Wiring Set", category: "Electrical", price: "$125.00", stock: 15, status: "Low Stock", sales: 78 },
    { id: 5, name: "Plumbing Pipes", category: "Plumbing", price: "$35.00", stock: 0, status: "Out of Stock", sales: 234 },
    { id: 6, name: "Safety Helmet", category: "Safety Equipment", price: "$25.00", stock: 500, status: "In Stock", sales: 312 },
    { id: 7, name: "Power Drill Set", category: "Construction Tools", price: "$199.00", stock: 85, status: "In Stock", sales: 145 },
    { id: 8, name: "Lumber 2x4x8", category: "Lumber & Wood", price: "$12.50", stock: 1200, status: "In Stock", sales: 567 },
    { id: 9, name: "Roofing Shingles", category: "Roofing Materials", price: "$75.00", stock: 250, status: "In Stock", sales: 98 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
          <p className="text-gray-600 mt-1">Manage your store products and inventory</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:shadow-lg">
              <Plus className="w-4 h-4 mr-2" />
              Add New Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Label htmlFor="productName">Product Name *</Label>
                  <Input id="productName" placeholder="e.g., Premium Cement Bag" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="building">Building Materials</SelectItem>
                      <SelectItem value="tools">Construction Tools</SelectItem>
                      <SelectItem value="paint">Paint & Supplies</SelectItem>
                      <SelectItem value="electrical">Electrical</SelectItem>
                      <SelectItem value="plumbing">Plumbing</SelectItem>
                      <SelectItem value="hardware">Hardware</SelectItem>
                      <SelectItem value="safety">Safety Equipment</SelectItem>
                      <SelectItem value="lumber">Lumber & Wood</SelectItem>
                      <SelectItem value="roofing">Roofing Materials</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="sku">SKU *</Label>
                  <Input id="sku" placeholder="e.g., CEM-001" className="mt-1" />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea id="description" placeholder="Describe your product..." className="mt-1" rows={4} />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="price">Price ($) *</Label>
                  <Input id="price" type="number" step="0.01" placeholder="0.00" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="comparePrice">Compare at Price ($)</Label>
                  <Input id="comparePrice" type="number" step="0.01" placeholder="0.00" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="cost">Cost per Item ($)</Label>
                  <Input id="cost" type="number" step="0.01" placeholder="0.00" className="mt-1" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="stock">Stock Quantity *</Label>
                  <Input id="stock" type="number" placeholder="0" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="minStock">Min Stock Alert</Label>
                  <Input id="minStock" type="number" placeholder="10" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="unit">Unit</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="piece">Piece</SelectItem>
                      <SelectItem value="bag">Bag</SelectItem>
                      <SelectItem value="box">Box</SelectItem>
                      <SelectItem value="bundle">Bundle</SelectItem>
                      <SelectItem value="kg">Kilogram</SelectItem>
                      <SelectItem value="meter">Meter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label>Product Images</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-yellow-400 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input id="weight" type="number" step="0.01" placeholder="0.00" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="dimensions">Dimensions (L x W x H cm)</Label>
                  <Input id="dimensions" placeholder="e.g., 30 x 20 x 10" className="mt-1" />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>Cancel</Button>
              <Button 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                onClick={() => {
                  toast({
                    title: "Product Added",
                    description: "Your product has been added successfully.",
                  });
                  setIsCreateDialogOpen(false);
                }}
              >
                Add Product
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Categories */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white whitespace-nowrap" : "whitespace-nowrap"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
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

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="border-0 shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="w-full h-40 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Package className="w-16 h-16 text-orange-600" />
              </div>
              <Badge variant="outline" className="mb-2 text-xs">{product.category}</Badge>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                <Badge 
                  variant="outline"
                  className={`
                    ${product.status === 'In Stock' ? 'bg-green-50 text-green-700 border-green-200' : ''}
                    ${product.status === 'Low Stock' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : ''}
                    ${product.status === 'Out of Stock' ? 'bg-red-50 text-red-700 border-red-200' : ''}
                  `}
                >
                  {product.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <Package className="w-4 h-4" />
                  <span>Stock: {product.stock}</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>{product.sales} sold</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 hover:bg-yellow-50">
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </Button>
                <Button variant="outline" className="flex-1 hover:bg-orange-50">Edit</Button>
                <Button variant="outline" className="text-red-600 hover:bg-red-50">Delete</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductManagement;
