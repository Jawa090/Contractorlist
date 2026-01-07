import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
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
  ArrowUp,
  Crown,
  Sparkles,
  Lock,
  Zap,
  Target,
  Calculator,
  FileText,
  Clock,
  DollarSign,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Layers,
  Eye,
  Settings,
  ChevronDown
} from 'lucide-react';

const EnhancedAITakeoff = () => {
  const [activeTab, setActiveTab] = useState('materials');
  const [showPricing, setShowPricing] = useState(false);
  const [currentPlan, setCurrentPlan] = useState('free');

  const pricingPlans = [
    {
      id: 'free',
      name: 'Free Trial',
      price: '$0',
      period: '7 days',
      features: [
        '5 AI takeoffs per month',
        'Basic material detection',
        'Standard templates',
        'Email support'
      ],
      limitations: [
        'Limited to 2 projects',
        'Basic accuracy',
        'No advanced features'
      ],
      color: 'gray',
      current: currentPlan === 'free'
    },
    {
      id: 'pro',
      name: 'Professional',
      price: '$99',
      period: 'per month',
      features: [
        'Unlimited AI takeoffs',
        'Advanced material detection',
        'Custom templates',
        'Priority support',
        'Export to Excel/PDF',
        'Team collaboration'
      ],
      popular: true,
      color: 'blue',
      current: currentPlan === 'pro'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$299',
      period: 'per month',
      features: [
        'Everything in Professional',
        'Custom AI training',
        'API access',
        'Dedicated support',
        'Advanced analytics',
        'White-label options'
      ],
      color: 'purple',
      current: currentPlan === 'enterprise'
    }
  ];

  const materials = [
    {
      category: '03 - Concrete',
      total: '$18,450.00',
      confidence: 95,
      items: [
        {
          name: '4" Slab on Grade',
          quantity: 3200,
          unit: 'SF',
          rate: 5.25,
          total: 16800,
          color: 'gray',
          confidence: 98,
          aiDetected: true
        }
      ]
    },
    {
      category: '09 - Finishes',
      total: '$42,120.00',
      confidence: 92,
      items: [
        {
          name: 'VCT Flooring (Standard)',
          quantity: 1250,
          unit: 'SF',
          rate: 4.50,
          total: 5625,
          color: 'blue',
          confidence: 94,
          aiDetected: true
        },
        {
          name: 'Carpet Tile',
          quantity: 2400,
          unit: 'SF',
          rate: 6.00,
          total: 14400,
          color: 'emerald',
          confidence: 89,
          aiDetected: true
        }
      ]
    }
  ];

  const totals = {
    materialCost: 60570,
    laborEstimate: 32150,
    totalEstimate: 92720,
    confidence: 93
  };

  const aiInsights = [
    {
      type: 'warning',
      title: 'Material Price Alert',
      message: 'Steel prices have increased 8% this month. Consider locking in rates.',
      action: 'View Suppliers'
    },
    {
      type: 'success',
      title: 'Cost Optimization',
      message: 'AI found 12% savings by switching to alternative materials.',
      action: 'Apply Changes'
    },
    {
      type: 'info',
      title: 'Accuracy Boost',
      message: 'Upload more detailed plans to improve AI accuracy to 98%.',
      action: 'Upload Plans'
    }
  ];

  if (showPricing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Takeoff Pro
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
              Revolutionary AI-powered construction takeoffs
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Save 80% of your time with industry-leading accuracy
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.id}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  plan.popular 
                    ? 'ring-2 ring-blue-500 shadow-xl scale-105 dark:ring-blue-400' 
                    : 'hover:shadow-lg'
                } ${
                  plan.current 
                    ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-700' 
                    : 'bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                    <Crown className="w-4 h-4 inline mr-1" />
                    Most Popular
                  </div>
                )}
                
                {plan.current && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                      <Check className="w-3 h-3 mr-1" />
                      Current Plan
                    </Badge>
                  </div>
                )}

                <CardHeader className={plan.popular ? 'pt-12' : 'pt-6'}>
                  <div className="text-center">
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-black text-gray-900 dark:text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.limitations && (
                    <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-slate-600">
                      {plan.limitations.map((limitation, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <X className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <Button 
                    className={`w-full ${
                      plan.current
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                        : 'bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
                    }`}
                    disabled={plan.current}
                  >
                    {plan.current ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Current Plan
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4 mr-2" />
                        {plan.id === 'free' ? 'Start Free Trial' : 'Upgrade Now'}
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl w-fit mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AI-Powered Detection</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Advanced computer vision identifies materials with 98% accuracy
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl w-fit mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cost Optimization</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Smart suggestions to reduce costs while maintaining quality
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl w-fit mx-auto mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Complete takeoffs in minutes instead of hours
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl w-fit mx-auto mb-4">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Professional Reports</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Export detailed reports in Excel, PDF, or CSV formats
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <Button 
              onClick={() => setShowPricing(false)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
            >
              <Bot className="w-5 h-5 mr-2" />
              Start AI Takeoff
            </Button>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No credit card required for free trial
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-hidden bg-white dark:bg-slate-900">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex flex-col sm:flex-row justify-between sm:items-center gap-4 shrink-0">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">West High School Annex</h2>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-700">
              <Sparkles className="w-3 h-3 mr-1" />
              AI Enhanced
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-700">
              {totals.confidence}% Confidence
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>Take-off Version 2.1</span>
            <span>•</span>
            <span>Last saved 2 mins ago</span>
            <span>•</span>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs text-blue-600 dark:text-blue-400 p-0 h-auto"
              onClick={() => setShowPricing(true)}
            >
              <Crown className="w-3 h-3 mr-1" />
              Upgrade for Pro Features
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300">
            <Download className="w-4 h-4 mr-2" />
            Export Excel
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            <Bot className="w-4 h-4 mr-2" />
            Recalculate with AI
          </Button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Drawing Area */}
        <div className="flex-1 bg-gray-100 dark:bg-slate-800 relative flex flex-col min-w-0">
          {/* Drawing Tools */}
          <div className="h-12 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 flex items-center px-4 gap-4 justify-between shrink-0">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" title="Pan" className="text-gray-600 dark:text-gray-400">
                <Hand className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" title="Select">
                <MousePointer className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" title="Measure Area" className="text-gray-600 dark:text-gray-400">
                <Square className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" title="Measure Linear" className="text-gray-600 dark:text-gray-400">
                <Ruler className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2 bg-gray-50 dark:bg-slate-800 rounded-lg p-1 border border-gray-200 dark:border-slate-600">
              <Button variant="ghost" size="sm" className="bg-white dark:bg-slate-700 shadow-sm text-xs text-gray-900 dark:text-white">
                A-101 Floor Plan
              </Button>
              <span className="text-gray-300 dark:text-slate-500">|</span>
              <Button variant="ghost" size="sm" className="text-xs text-gray-500 dark:text-gray-400">
                A-102 Elevations
              </Button>
              <Button variant="ghost" size="sm" className="p-1">
                <Plus className="w-3 h-3 text-gray-500 dark:text-gray-400" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded px-2 py-1">
                <span className="text-xs text-gray-500 dark:text-gray-400">Scale:</span>
                <span className="text-xs font-semibold text-gray-900 dark:text-white">1/4" = 1'0"</span>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400">
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400">
                <ZoomOut className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Drawing Canvas */}
          <div className="flex-1 relative overflow-hidden flex items-center justify-center bg-gray-200 dark:bg-slate-700">
            <div className="relative shadow-2xl bg-white dark:bg-slate-100 w-[90%] h-[90%] overflow-hidden border border-gray-300 dark:border-slate-600">
              {/* Blueprint Background */}
              <div className="absolute inset-0 bg-gray-50 dark:bg-slate-200 opacity-90" />
              
              {/* Grid Pattern */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />

              {/* Drawn Areas with enhanced styling */}
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
                  width="120"
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
                  Classroom 101 - 94% AI
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
                  width="110"
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
                  Science Lab - 89% AI
                </text>

                {/* Hallway */}
                <path
                  d="M 200 380 L 680 380 L 680 440 L 200 440 Z"
                  fill="rgba(245, 158, 11, 0.15)"
                  stroke="#f59e0b"
                  strokeWidth="2"
                />
              </svg>

              {/* Enhanced AI Detection Popup */}
              <div className="absolute top-[360px] left-[300px] bg-white dark:bg-slate-800 shadow-2xl rounded-xl border border-gray-200 dark:border-slate-600 p-4 w-56 z-20">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded">
                      <Sparkles className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">AI Detected</span>
                  </div>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-gray-400 hover:text-red-500">
                    <X className="w-3 h-3" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Area</span>
                    <span className="font-medium text-gray-900 dark:text-white">1,250 sq ft</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Material</span>
                    <span className="font-medium text-gray-900 dark:text-white">VCT Flooring</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Confidence</span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs">
                      94%
                    </Badge>
                  </div>
                </div>
                <Button size="sm" className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white">
                  <Check className="w-3 h-3 mr-1" />
                  Confirm
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced AI Copilot Input */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[600px] max-w-[90%] z-30">
            <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-blue-500/30 dark:border-blue-400/30 shadow-2xl rounded-2xl p-2 flex items-center gap-3 ring-4 ring-blue-500/10 dark:ring-blue-400/10">
              <div className="size-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg">
                <Bot className="w-5 h-5" />
              </div>
              <Input
                placeholder="Ask AI: 'Calculate drywall area for all classrooms excluding windows'..."
                className="border-none focus-visible:ring-0 text-sm flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Right Sidebar */}
        <div className="w-96 bg-white dark:bg-slate-900 border-l border-gray-200 dark:border-slate-700 flex flex-col shrink-0 shadow-xl">
          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
            <div className="flex border-b border-gray-200 dark:border-slate-700">
              <TabsList className="grid w-full grid-cols-3 bg-transparent">
                <TabsTrigger 
                  value="materials" 
                  className="border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 text-gray-600 dark:text-gray-400"
                >
                  Materials
                </TabsTrigger>
                <TabsTrigger 
                  value="cost" 
                  className="border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 text-gray-600 dark:text-gray-400"
                >
                  Cost Est.
                </TabsTrigger>
                <TabsTrigger 
                  value="insights" 
                  className="border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 text-gray-600 dark:text-gray-400 flex items-center gap-1"
                >
                  Insights
                  <Badge className="bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 text-xs">
                    {aiInsights.length}
                  </Badge>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Search and Actions */}
            <div className="p-3 border-b border-gray-200 dark:border-slate-700 flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-3 h-3" />
                <Input
                  placeholder="Filter items..."
                  className="h-8 pl-8 pr-3 text-xs bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-600 text-gray-900 dark:text-white"
                />
              </div>
              <Button variant="outline" size="sm" className="p-1.5 border-gray-200 dark:border-slate-600">
                <Filter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </Button>
              <Button variant="outline" size="sm" className="p-1.5 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700">
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            <TabsContent value="materials" className="flex-1 overflow-y-auto m-0">
              <div className="space-y-0">
                {materials.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="border-b border-gray-200 dark:border-slate-700">
                    {/* Enhanced Category Header */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="p-0 h-auto text-gray-600 dark:text-gray-400">
                          ↓
                        </Button>
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{category.category}</span>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs">
                          {category.confidence}% AI
                        </Badge>
                      </div>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{category.total}</span>
                    </div>

                    {/* Enhanced Category Items */}
                    <div className="divide-y divide-gray-200 dark:divide-slate-700">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={`p-3 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors group ${
                            item.aiDetected ? 'border-l-4 border-l-blue-500 bg-blue-50/10 dark:bg-blue-900/5' : ''
                          }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                              <div className={`size-3 rounded-full bg-${item.color}-500`} />
                              <p className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              {item.aiDetected && (
                                <div className="flex items-center gap-1">
                                  <Sparkles className="w-3 h-3 text-blue-500" />
                                  <span className="text-xs text-blue-600 dark:text-blue-400">{item.confidence}%</span>
                                </div>
                              )}
                              <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 p-0 h-auto text-gray-400 hover:text-red-500">
                                <X className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 pl-5">
                            <div className={`flex items-center border rounded px-2 py-1 ${
                              item.aiDetected 
                                ? 'border-blue-200 dark:border-blue-700 bg-white dark:bg-slate-800 shadow-sm' 
                                : 'border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800'
                            }`}>
                              <Input
                                value={item.quantity}
                                className={`w-12 text-right text-xs border-none p-0 bg-transparent focus-visible:ring-0 font-medium ${
                                  item.aiDetected ? 'text-blue-700 dark:text-blue-400' : 'text-gray-900 dark:text-white'
                                }`}
                              />
                              <span className={`text-xs ml-1 ${
                                item.aiDetected ? 'text-blue-500 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
                              }`}>
                                {item.unit}
                              </span>
                            </div>
                            <span className="text-xs text-gray-400 dark:text-gray-500">×</span>
                            <div className="flex items-center border border-gray-200 dark:border-slate-600 rounded bg-white dark:bg-slate-800 px-2 py-1">
                              <span className="text-xs text-gray-500 dark:text-gray-400 mr-1">$</span>
                              <Input
                                value={item.rate}
                                className="w-10 text-right text-xs border-none p-0 bg-transparent focus-visible:ring-0 text-gray-900 dark:text-white"
                              />
                            </div>
                            <span className="ml-auto text-sm font-semibold text-gray-700 dark:text-gray-300">
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
              <div className="space-y-4">
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-700">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calculator className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-900 dark:text-blue-300">AI Cost Analysis</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Accuracy</span>
                        <span className="font-medium text-gray-900 dark:text-white">{totals.confidence}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Time Saved</span>
                        <span className="font-medium text-green-600 dark:text-green-400">4.2 hours</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="insights" className="flex-1 p-4 m-0 space-y-3">
              {aiInsights.map((insight, index) => (
                <Card key={index} className={`border-l-4 ${
                  insight.type === 'warning' ? 'border-l-orange-500 bg-orange-50/50 dark:bg-orange-900/10' :
                  insight.type === 'success' ? 'border-l-green-500 bg-green-50/50 dark:bg-green-900/10' :
                  'border-l-blue-500 bg-blue-50/50 dark:bg-blue-900/10'
                } border-gray-200 dark:border-slate-700`}>
                  <CardContent className="p-3">
                    <div className="flex items-start gap-2">
                      <div className={`p-1 rounded ${
                        insight.type === 'warning' ? 'bg-orange-100 dark:bg-orange-900/30' :
                        insight.type === 'success' ? 'bg-green-100 dark:bg-green-900/30' :
                        'bg-blue-100 dark:bg-blue-900/30'
                      }`}>
                        {insight.type === 'warning' && <AlertTriangle className="w-3 h-3 text-orange-600" />}
                        {insight.type === 'success' && <Check className="w-3 h-3 text-green-600" />}
                        {insight.type === 'info' && <Sparkles className="w-3 h-3 text-blue-600" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{insight.title}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{insight.message}</p>
                        <Button size="sm" variant="outline" className="text-xs">
                          {insight.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          {/* Enhanced Footer Summary */}
          <div className="p-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 shadow-inner">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400">Material Cost</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">${totals.materialCost.toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Labor Estimate</span>
                  <Sparkles className="w-3 h-3 text-blue-500" />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">${totals.laborEstimate.toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-slate-600">
                <span className="text-sm font-bold text-gray-900 dark:text-white">Total Estimate</span>
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">${totals.totalEstimate.toLocaleString()}.00</span>
              </div>
              <div className="flex items-center justify-center gap-2 pt-1">
                <Progress value={totals.confidence} className="flex-1 h-2" />
                <span className="text-xs text-gray-500 dark:text-gray-400">{totals.confidence}% confident</span>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 dark:from-white dark:to-gray-100 dark:hover:from-gray-100 dark:hover:to-gray-200 text-white dark:text-gray-900 shadow-lg">
              <span>Add to Bid</span>
              <ArrowUp className="w-4 h-4 ml-2 rotate-45" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAITakeoff;