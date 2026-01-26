import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Package,
  Search,
  Filter,
  Plus,
  Edit,
  Eye,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  MoreHorizontal,
  Trash2,
  Save,
  X,
  PlusCircle,
  BarChart3,
  Boxes,
  Truck,
  History,
  Info
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';

const ProductCatalog = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'concrete', label: 'Concrete & Cement' },
    { value: 'steel', label: 'Steel & Rebar' },
    { value: 'lumber', label: 'Lumber & Wood' },
    { value: 'electrical', label: 'Electrical' },
    { value: 'plumbing', label: 'Plumbing' },
    { value: 'hvac', label: 'HVAC Components' }
  ];

  const [products, setProducts] = useState([
    {
      id: 'PRD-001',
      name: 'Portland Cement Type I',
      category: 'concrete',
      sku: 'PC-T1-50',
      price: 25.00,
      unit: 'bag',
      stock: 450,
      minStock: 200,
      status: 'in-stock',
      description: '50lb bag of Portland Cement Type I suitable for general construction.',
      lastRestock: '2024-01-20',
      monthlyDemand: 120,
      trend: 'up'
    },
    {
      id: 'PRD-002',
      name: 'Rebar #4 - 20ft',
      category: 'steel',
      sku: 'RB-4-20',
      price: 42.00,
      unit: 'piece',
      stock: 45,
      minStock: 100,
      status: 'low-stock',
      description: '#4 Grade 60 Rebar, 20 feet length, epoxy coated.',
      lastRestock: '2024-01-15',
      monthlyDemand: 85,
      trend: 'up'
    },
    {
      id: 'PRD-003',
      name: 'Industrial HVAC Ductwork (Rectangular)',
      category: 'hvac',
      sku: 'HVAC-R-12',
      price: 320.00,
      unit: 'section',
      stock: 12,
      minStock: 20,
      status: 'low-stock',
      description: 'Standard galvanized steel rectangular ductwork, 12ft sections.',
      lastRestock: '2024-01-05',
      monthlyDemand: 15,
      trend: 'stable'
    },
    {
      id: 'PRD-004',
      name: '2x4x8 Pressure Treated Lumber',
      category: 'lumber',
      sku: 'PT-2X4X8',
      price: 8.50,
      unit: 'piece',
      stock: 1200,
      minStock: 500,
      status: 'in-stock',
      description: 'Premium pressure treated lumber for exterior framing.',
      lastRestock: '2024-01-24',
      monthlyDemand: 400,
      trend: 'up'
    }
  ]);

  const handleEditClick = (product: any) => {
    setEditingProduct({ ...product });
    setIsEditModalOpen(true);
  };

  const handleSaveProduct = () => {
    setProducts(prev => prev.map(p => p.id === editingProduct.id ? {
      ...editingProduct,
      status: editingProduct.stock === 0 ? 'out-of-stock' : editingProduct.stock < editingProduct.minStock ? 'low-stock' : 'in-stock'
    } : p));
    setIsEditModalOpen(false);
    toast({
      title: "Inventory Updated",
      description: `Stock levels for ${editingProduct.name} have been synchronized.`,
    });
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex h-full w-full flex-col bg-white dark:bg-[#0f1115] text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden font-sans">

      {/* Dynamic Inventory Header */}
      <div className="relative bg-gray-50/80 dark:bg-[#1c1e24]/80 border-b border-gray-200 dark:border-white/5 px-8 py-8 z-20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Boxes className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-3xl font-black tracking-tight uppercase mb-1">Live Inventory Management</h1>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <History size={14} className="text-yellow-600" /> Auto-sync enabled for Real-Time Marketplace Bids
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button className="h-11 px-8 rounded-xl bg-black dark:bg-white text-white dark:text-black font-black uppercase text-[11px] tracking-widest shadow-xl hover:scale-105 transition-all">
                <PlusCircle size={18} className="mr-2" /> New SKU Entry
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden flex">
        {/* Left Side: Stats & Filters */}
        <aside className="w-80 border-r border-gray-200 dark:border-white/5 bg-gray-50/30 dark:bg-black/10 p-8 hidden xl:block overflow-y-auto">
          <div className="space-y-10">
            <div className="space-y-4">
              <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Inventory Status</Label>
              <div className="grid grid-cols-1 gap-2">
                <Card className="bg-white dark:bg-black/20 border-green-500/20 shadow-sm p-4">
                  <div className="flex justify-between items-center">
                    <p className="text-[10px] font-black uppercase text-green-500">In Stock</p>
                    <TrendingUp size={14} className="text-green-500" />
                  </div>
                  <p className="text-2xl font-black mt-1">{products.filter(p => p.status === 'in-stock').length}</p>
                </Card>
                <Card className="bg-white dark:bg-black/20 border-yellow-500/20 shadow-sm p-4">
                  <div className="flex justify-between items-center">
                    <p className="text-[10px] font-black uppercase text-yellow-600">Low Stock</p>
                    <AlertTriangle size={14} className="text-yellow-600" />
                  </div>
                  <p className="text-2xl font-black mt-1">{products.filter(p => p.status === 'low-stock').length}</p>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Search Filter</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Filter by SKU or Name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-10 bg-white dark:bg-black/20 border-gray-200 dark:border-white/10 rounded-xl text-xs font-semibold"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Department</Label>
              <ScrollArea className="h-60">
                <div className="space-y-1 pr-4">
                  {categories.map(cat => (
                    <button
                      key={cat.value}
                      onClick={() => setSelectedCategory(cat.value)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-lg text-[11px] font-bold uppercase tracking-tight transition-all",
                        selectedCategory === cat.value ? "bg-indigo-500 text-white shadow-md" : "text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"
                      )}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </aside>

        {/* Main Product Table */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="grid gap-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-indigo-500" />
                <h2 className="text-xl font-black uppercase tracking-tight">Product Catalog</h2>
                <Badge className="bg-gray-100 dark:bg-white/5 text-gray-500 border-none font-bold ml-2">{filteredProducts.length} Items</Badge>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-gray-200 dark:border-white/5 overflow-hidden bg-white dark:bg-[#1c1e24] shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-black/20 border-b border-gray-200 dark:border-white/5">
                      <th className="p-6 text-[10px] font-black uppercase text-gray-400 tracking-widest">Product Details</th>
                      <th className="p-6 text-[10px] font-black uppercase text-gray-400 tracking-widest text-center">Status</th>
                      <th className="p-6 text-[10px] font-black uppercase text-gray-400 tracking-widest">Current Stock</th>
                      <th className="p-6 text-[10px] font-black uppercase text-gray-400 tracking-widest">Unit Price</th>
                      <th className="p-6 text-right"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                    {filteredProducts.map((p) => (
                      <tr key={p.id} className="group hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
                        <td className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 rounded-xl flex items-center justify-center">
                              <Package className="text-gray-400" size={20} />
                            </div>
                            <div>
                              <p className="text-sm font-black text-gray-900 dark:text-white tracking-tight">{p.name}</p>
                              <p className="text-[10px] font-bold text-gray-400 uppercase mt-0.5">SKU: {p.sku} • {p.category}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-6 text-center">
                          <Badge className={cn(
                            "text-[9px] font-black uppercase tracking-widest px-3 py-1 border-none",
                            p.status === 'in-stock' ? "bg-green-100 dark:bg-green-500/10 text-green-600" :
                              p.status === 'low-stock' ? "bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600" :
                                "bg-red-100 dark:bg-red-500/10 text-red-600"
                          )}>
                            {p.status}
                          </Badge>
                        </td>
                        <td className="p-6 text-center">
                          <div className="inline-flex items-center gap-3">
                            <span className="text-sm font-black font-mono">{p.stock}</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase">{p.unit}s</span>
                          </div>
                          {p.stock < p.minStock && (
                            <div className="flex items-center gap-1 mt-1 justify-center text-[9px] font-bold text-red-500 uppercase">
                              <TrendingDown size={10} /> Needs Refill
                            </div>
                          )}
                        </td>
                        <td className="p-6">
                          <p className="text-sm font-black font-mono">${p.price.toFixed(2)}</p>
                        </td>
                        <td className="p-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-9 w-9 p-0 rounded-xl hover:bg-yellow-400 hover:text-black transition-all"
                              onClick={() => handleEditClick(p)}
                            >
                              <Edit size={16} />
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5"><MoreHorizontal size={16} /></Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="w-56 bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/10 rounded-2xl p-2 shadow-2xl">
                                <DropdownMenuItem className="py-3 px-4 rounded-xl cursor-pointer font-bold text-xs uppercase gap-3 tracking-wider"><Info size={14} /> Demand Insights</DropdownMenuItem>
                                <DropdownMenuItem className="py-3 px-4 rounded-xl cursor-pointer font-bold text-xs uppercase gap-3 tracking-wider"><Truck size={14} /> Schedule Arrival</DropdownMenuItem>
                                <DropdownMenuItem className="py-3 px-4 rounded-xl cursor-pointer font-bold text-xs uppercase gap-3 tracking-wider text-red-500"><Trash2 size={14} /> Remove SKU</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modern Edit Inventory Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="max-w-2xl bg-white dark:bg-[#1c1e24] border-none shadow-2xl rounded-[3rem] p-0 overflow-hidden">
          {editingProduct && (
            <div className="flex flex-col">
              {/* Modal Header */}
              <div className="p-8 bg-indigo-500 text-white flex justify-between items-start">
                <div>
                  <Badge className="bg-white/20 text-white border-none font-black text-[9px] uppercase tracking-widest mb-3">{editingProduct.category}</Badge>
                  <h2 className="text-3xl font-black uppercase tracking-tight leading-none mb-1">Edit SKU: {editingProduct.sku}</h2>
                  <p className="text-xs font-bold opacity-60 uppercase tracking-widest">Master Inventory Sync Module</p>
                </div>
                <button onClick={() => setIsEditModalOpen(false)} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-all">
                  <X size={20} />
                </button>
              </div>

              <div className="p-10 space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Product Label</Label>
                    <Input
                      value={editingProduct.name}
                      onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                      className="h-12 bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 rounded-2xl text-sm font-semibold"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Unit Pricing ($)</Label>
                    <Input
                      type="number"
                      value={editingProduct.price}
                      onChange={(e) => setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) })}
                      className="h-12 bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 rounded-2xl text-sm font-semibold font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400">On Hand Stock</Label>
                    <div className="relative">
                      <Boxes className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-500 w-4 h-4" />
                      <Input
                        type="number"
                        value={editingProduct.stock}
                        onChange={(e) => setEditingProduct({ ...editingProduct, stock: parseInt(e.target.value) })}
                        className="h-12 pl-10 bg-indigo-500/5 border-indigo-500/20 rounded-2xl text-sm font-black font-mono focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Min Alert Limit</Label>
                    <Input
                      type="number"
                      value={editingProduct.minStock}
                      onChange={(e) => setEditingProduct({ ...editingProduct, minStock: parseInt(e.target.value) })}
                      className="h-12 bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 rounded-2xl text-sm font-semibold font-mono"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Unit Type</Label>
                    <Select value={editingProduct.unit} onValueChange={(val) => setEditingProduct({ ...editingProduct, unit: val })}>
                      <SelectTrigger className="h-12 bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 rounded-2xl text-sm font-semibold uppercase">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/10">
                        <SelectItem value="bag">BAGS</SelectItem>
                        <SelectItem value="piece">PIECES</SelectItem>
                        <SelectItem value="cubic yard">CY (Cubic Yards)</SelectItem>
                        <SelectItem value="section">SECTIONS</SelectItem>
                        <SelectItem value="lbs">LBS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Marketplace Description</Label>
                  <textarea
                    rows={3}
                    value={editingProduct.description}
                    onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                    className="w-full p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl text-sm font-semibold resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="p-10 pt-0 flex gap-4">
                <Button variant="ghost" className="flex-1 h-14 rounded-2xl font-black uppercase tracking-widest text-[11px]" onClick={() => setIsEditModalOpen(false)}>Discard</Button>
                <Button className="flex-1 h-14 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl flex gap-2" onClick={handleSaveProduct}>
                  <Save size={18} /> Push To Marketplace
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductCatalog;