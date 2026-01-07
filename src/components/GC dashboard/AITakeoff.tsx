import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Download,
  Bot,
  Hand,
  MousePointer,
  Square,
  Ruler,
  Plus,
  ZoomIn,
  ZoomOut,
  Search,
  Filter,
  MoreVertical,
  X,
  Upload,
  ArrowUp
} from 'lucide-react';

const AITakeoff = () => {
  const [activeTab, setActiveTab] = useState('materials');

  const materials = [
    {
      category: '03 - Concrete',
      total: '$18,450.00',
      items: [
        {
          name: '4" Slab on Grade',
          quantity: 3200,
          unit: 'SF',
          rate: 5.25,
          total: 16800,
          color: 'gray'
        }
      ]
    },
    {
      category: '09 - Finishes',
      total: '$42,120.00',
      items: [
        {
          name: 'VCT Flooring (Standard)',
          quantity: 1250,
          unit: 'SF',
          rate: 4.50,
          total: 5625,
          color: 'blue',
          aiDetected: true
        },
        {
          name: 'Carpet Tile',
          quantity: 2400,
          unit: 'SF',
          rate: 6.00,
          total: 14400,
          color: 'emerald',
          aiDetected: true
        }
      ]
    }
  ];

  const totals = {
    materialCost: 60570,
    laborEstimate: 32150,
    totalEstimate: 92720
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="px-6 py-3 border-b bg-white flex flex-col sm:flex-row justify-between sm:items-center gap-4 shrink-0">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-gray-900">West High School Annex</h2>
            <Badge className="bg-green-50 text-green-700 border-green-200">
              Active Bid
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
            <span>Take-off Version 2.1</span>
            <span>•</span>
            <span>Last saved 2 mins ago</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Excel
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Bot className="w-4 h-4 mr-2" />
            Recalculate with AI
          </Button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Drawing Area */}
        <div className="flex-1 bg-gray-100 relative flex flex-col min-w-0">
          {/* Drawing Tools */}
          <div className="h-10 bg-white border-b flex items-center px-4 gap-4 justify-between shrink-0">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" title="Pan">
                <Hand className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="bg-blue-50 text-blue-600" title="Select">
                <MousePointer className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" title="Measure Area">
                <Square className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" title="Measure Linear">
                <Ruler className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-0.5 border">
              <Button variant="ghost" size="sm" className="bg-white shadow-sm text-xs">
                A-101 Floor Plan
              </Button>
              <span className="text-gray-300">|</span>
              <Button variant="ghost" size="sm" className="text-xs text-gray-500">
                A-102 Elevations
              </Button>
              <Button variant="ghost" size="sm" className="p-0.5">
                <Plus className="w-3 h-3" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-white border rounded px-2 py-0.5">
                <span className="text-xs text-gray-500">Scale:</span>
                <span className="text-xs font-semibold">1/4" = 1'0"</span>
                <Button variant="ghost" size="sm" className="p-0 h-auto">
                  ↓
                </Button>
              </div>
              <Button variant="ghost" size="sm">
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <ZoomOut className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Drawing Canvas */}
          <div className="flex-1 relative overflow-hidden flex items-center justify-center bg-gray-200">
            <div className="relative shadow-2xl bg-white w-[90%] h-[90%] overflow-hidden border">
              {/* Blueprint Background */}
              <div className="absolute inset-0 bg-gray-100 opacity-90" />
              
              {/* Grid Pattern */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />

              {/* Drawn Areas */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Classroom 101 */}
                <path
                  d="M 200 150 L 450 150 L 450 350 L 200 350 Z"
                  fill="rgba(59, 130, 246, 0.15)"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <rect
                  x="200"
                  y="125"
                  width="100"
                  height="20"
                  rx="4"
                  fill="#3b82f6"
                />
                <text
                  x="210"
                  y="139"
                  fill="white"
                  fontSize="10"
                  fontWeight="bold"
                  fontFamily="Inter"
                >
                  Classroom 101
                </text>

                {/* Science Lab */}
                <path
                  d="M 480 150 L 680 150 L 680 300 L 480 300 Z"
                  fill="rgba(16, 185, 129, 0.15)"
                  stroke="#10b981"
                  strokeWidth="2"
                />
                <rect
                  x="480"
                  y="125"
                  width="90"
                  height="20"
                  rx="4"
                  fill="#10b981"
                />
                <text
                  x="490"
                  y="139"
                  fill="white"
                  fontSize="10"
                  fontWeight="bold"
                  fontFamily="Inter"
                >
                  Science Lab
                </text>

                {/* Hallway */}
                <path
                  d="M 200 380 L 680 380 L 680 440 L 200 440 Z"
                  fill="rgba(245, 158, 11, 0.15)"
                  stroke="#f59e0b"
                  strokeWidth="2"
                />
              </svg>

              {/* Popup for detected area */}
              <div className="absolute top-[360px] left-[300px] bg-white shadow-lg rounded-lg border p-3 w-48 z-20">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-blue-600">Detected Area</span>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-gray-400 hover:text-red-500">
                    <X className="w-3 h-3" />
                  </Button>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Area</span>
                    <span className="font-medium">1,250 sq ft</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Material</span>
                    <span className="font-medium">VCT Flooring</span>
                  </div>
                </div>
                <Button size="sm" className="w-full mt-2 bg-blue-50 hover:bg-blue-100 text-blue-600">
                  Confirm
                </Button>
              </div>
            </div>
          </div>

          {/* AI Copilot Input */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[500px] max-w-[90%] z-30">
            <div className="bg-white/90 backdrop-blur-md border border-indigo-500/30 shadow-2xl rounded-xl p-1 flex items-center gap-2 ring-4 ring-indigo-500/10">
              <div className="size-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <Input
                placeholder="Ask Copilot: 'Calculate drywall area for all classrooms excluding windows'..."
                className="border-none focus-visible:ring-0 text-sm flex-1 bg-transparent"
              />
              <Button size="sm" className="bg-gray-100 hover:bg-gray-200 text-gray-600">
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Materials */}
        <div className="w-96 bg-white border-l flex flex-col shrink-0 shadow-xl">
          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
            <div className="flex border-b">
              <TabsList className="grid w-full grid-cols-3 bg-transparent">
                <TabsTrigger value="materials" className="border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600">
                  Materials
                </TabsTrigger>
                <TabsTrigger value="cost" className="border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600">
                  Cost Est.
                </TabsTrigger>
                <TabsTrigger value="insights" className="border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 flex items-center gap-1">
                  Insights
                  <Badge className="bg-purple-100 text-purple-600 text-xs">3</Badge>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Search and Actions */}
            <div className="p-3 border-b flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 w-3 h-3" />
                <Input
                  placeholder="Filter items..."
                  className="h-8 pl-8 pr-3 text-xs"
                />
              </div>
              <Button variant="outline" size="sm" className="p-1.5">
                <Filter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-1.5 text-blue-600">
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            <TabsContent value="materials" className="flex-1 overflow-y-auto m-0">
              <div className="space-y-0">
                {materials.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="border-b">
                    {/* Category Header */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="p-0 h-auto">
                          ↓
                        </Button>
                        <span className="text-sm font-bold text-gray-700">{category.category}</span>
                      </div>
                      <span className="text-xs font-medium text-gray-500">{category.total}</span>
                    </div>

                    {/* Category Items */}
                    <div className="divide-y">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={`p-3 hover:bg-blue-50/30 transition-colors group ${
                            item.aiDetected ? 'border-l-4 border-l-blue-500 bg-blue-50/10' : ''
                          }`}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <div className="flex items-center gap-2">
                              <div className={`size-3 rounded-full bg-${item.color}-500`} />
                              <p className="text-sm font-medium text-gray-900">{item.name}</p>
                            </div>
                            {item.aiDetected && (
                              <Bot className="w-4 h-4 text-blue-500" title="AI Detected" />
                            )}
                            <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 p-0 h-auto text-gray-400 hover:text-red-500">
                              <X className="w-3 h-3" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-2 pl-5">
                            <div className={`flex items-center border rounded px-2 py-1 ${
                              item.aiDetected ? 'border-blue-200 bg-white shadow-sm' : 'border-gray-200 bg-white'
                            }`}>
                              <Input
                                value={item.quantity}
                                className={`w-12 text-right text-xs border-none p-0 bg-transparent focus-visible:ring-0 font-medium ${
                                  item.aiDetected ? 'text-blue-700' : ''
                                }`}
                              />
                              <span className={`text-xs ml-1 ${
                                item.aiDetected ? 'text-blue-500' : 'text-gray-500'
                              }`}>
                                {item.unit}
                              </span>
                            </div>
                            <span className="text-xs text-gray-400">×</span>
                            <div className="flex items-center border border-gray-200 rounded bg-white px-2 py-1">
                              <span className="text-xs text-gray-500 mr-1">$</span>
                              <Input
                                value={item.rate}
                                className="w-10 text-right text-xs border-none p-0 bg-transparent focus-visible:ring-0"
                              />
                            </div>
                            <span className="ml-auto text-sm font-semibold text-gray-700">
                              ${item.total.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cost" className="flex-1 p-4 m-0">
              <div className="text-center text-gray-500">
                Cost estimation details will be shown here
              </div>
            </TabsContent>

            <TabsContent value="insights" className="flex-1 p-4 m-0">
              <div className="text-center text-gray-500">
                AI insights and recommendations will be shown here
              </div>
            </TabsContent>
          </Tabs>

          {/* Footer Summary */}
          <div className="p-4 border-t bg-gray-50 shadow-inner">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-500">Material Cost</span>
              <span className="text-sm font-medium">${totals.materialCost.toLocaleString()}.00</span>
            </div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-500">Labor Estimate (AI)</span>
              <span className="text-sm font-medium">${totals.laborEstimate.toLocaleString()}.00</span>
            </div>
            <div className="flex justify-between items-center mb-3 pt-2 border-t">
              <span className="text-sm font-bold text-gray-900">Total Estimate</span>
              <span className="text-lg font-bold text-blue-600">${totals.totalEstimate.toLocaleString()}.00</span>
            </div>
            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white shadow-md">
              <span>Add to Bid</span>
              <ArrowUp className="w-4 h-4 ml-2 rotate-45" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITakeoff;