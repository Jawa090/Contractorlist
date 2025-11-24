import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Package, Star, Eye } from "lucide-react";
import { materials } from "@/data/dashboardData";
import { useToast } from "@/hooks/use-toast";

const MaterialPricing = () => {
    const { toast } = useToast();

    const handleAction = (action: string, item?: any) => {
        toast({
            title: "Action Performed",
            description: `${action} ${item ? `for ${item.name || item.client}` : 'successfully'}`,
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Material Pricing Database</h1>
                    <p className="text-gray-600 mt-1">Real-time pricing from trusted suppliers</p>
                </div>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Material
                </Button>
            </div>

            <Card>
                <CardHeader className="border-b">
                    <div className="flex items-center justify-between">
                        <CardTitle>Material Catalog</CardTitle>
                        <div className="flex gap-3">
                            <div className="relative">
                                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                                <Input placeholder="Search materials..." className="pl-10 w-64" />
                            </div>
                            <select className="p-2 border rounded-md">
                                <option>All Categories</option>
                                <option>Flooring</option>
                                <option>Kitchen</option>
                                <option>Bathroom</option>
                                <option>Outdoor</option>
                                <option>Electrical</option>
                            </select>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Material</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Category</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Supplier</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Price</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Stock</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Rating</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {materials.map((material) => (
                                    <tr key={material.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <Package className="w-8 h-8 text-gray-400 mr-3" />
                                                <p className="font-semibold text-gray-900">{material.name}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant="outline">{material.category}</Badge>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-gray-700">{material.supplier}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="font-bold text-gray-900">{material.price}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant={material.stock === "In Stock" ? "default" : "secondary"}>
                                                {material.stock}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                                                <span className="font-semibold">{material.rating}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                <Button size="sm" variant="outline" onClick={() => handleAction("Add to Quote", material)}>
                                                    <Plus className="w-4 h-4" />
                                                </Button>
                                                <Button size="sm" variant="outline" onClick={() => handleAction("View Details", material)}>
                                                    <Eye className="w-4 h-4" />
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

export default MaterialPricing;
