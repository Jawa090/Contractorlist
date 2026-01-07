import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import {
  Bot,
  Send,
  History,
  Bell,
  X,
  Lightbulb,
  AlertTriangle,
  TrendingUp,
  Calendar,
  Paperclip,
  Crown,
  Sparkles,
  Lock,
  CheckCircle,
  DollarSign,
  Users,
  FileText,
  Calculator,
  Target,
  Zap,
  Building,
  Clock,
  Star,
  Settings,
  Maximize2,
  Minimize2
} from 'lucide-react';

const EnhancedAICopilot = () => {
  const [message, setMessage] = useState('');
  const [isPro, setIsPro] = useState(true); // Set to true for pro features
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    {
      id: 1,
      type: 'ai',
      content: "Hello Acme Construction! 🏗️ I've analyzed your current portfolio and detected a **high-priority opportunity**: **Downtown Office Renovation**.\n\nBased on your expertise in commercial projects and current capacity, this aligns perfectly with your strategic goals.\n\n### Quick Analysis\n• **Budget Range:** $2.5M - $3.2M\n• **Location:** Austin, TX (your primary market)\n• **Competition:** 3 active bidders detected\n• **Win Probability:** 78% (based on your profile)\n• **Timeline:** 8-month project\n\n**Next Steps:**\n1. Analyze competitive positioning\n2. Review compliance requirements\n3. Generate preliminary cost estimate\n\nWhich would you like to explore first?",
      timestamp: '10:42 AM',
      suggestions: ['Analyze Competition', 'Check Compliance', 'Cost Estimate'],
      confidence: 95
    },
    {
      id: 2,
      type: 'user',
      content: "Let's start with the competitive analysis. I want to understand how to position our bid strategically and what our margin should be given current market conditions in Austin.",
      timestamp: '10:45 AM'
    },
    {
      id: 3,
      type: 'ai',
      content: "Excellent choice! 📊 I've analyzed the competitive landscape and market conditions...\n\n### Competitive Intelligence\n\n**Primary Competitors:**\n• **BuildTech Solutions** - Known for aggressive pricing (typically 12-15% margin)\n• **Austin Commercial Builders** - Premium positioning (18-20% margin)\n• **Metro Construction Group** - Mid-market player (15-17% margin)\n\n### Market Analysis (Austin Commercial)\n**Material Costs:** ↑ 4.2% this quarter\n**Labor Availability:** Stable (good for you)\n**Permit Processing:** 15% faster than Q3\n\n### Strategic Recommendations\n\n**🎯 Optimal Margin:** 17-19%\n**💡 Key Differentiators:**\n• Your 98% on-time completion rate\n• Zero change order reputation\n• LEED certification expertise\n\n**⚡ Tactical Advantages:**\n1. **Pre-purchase Strategy:** Lock in drywall prices now (projected 2% increase next month)\n2. **Subcontractor Network:** Your electrical partners are 8% below market rate\n3. **Timeline Advantage:** You can complete 2 weeks ahead of standard schedule\n\n**Recommended Bid Strategy:**\n• Base bid at 17.5% margin\n• Highlight value propositions\n• Include performance guarantees\n\nShall I draft a competitive positioning document?",
      timestamp: '10:46 AM',
      suggestions: ['Draft Positioning Doc', 'Calculate Exact Costs', 'Review Timeline'],
      confidence: 92
    },
    {
      id: 4,
      type: 'user',
      content: "This is great analysis. Can you also check for any new compliance requirements or regulatory changes that might affect this downtown project?",
      timestamp: '10:48 AM'
    },
    {
      id: 5,
      type: 'ai',
      content: "⚠️ **Critical Compliance Update Detected!**\n\nI've identified several important regulatory changes that will impact your bid:\n\n### New Requirements (Effective Oct 1st)\n\n**🚨 High Impact:**\n• **Noise Ordinance Zones** - Downtown projects now restricted to 7 AM - 7 PM operations\n• **Environmental Impact Assessment** - Required for projects >$2M\n• **Worker Safety Certification** - New OSHA requirements for high-rise work\n\n**📋 Documentation Updates:**\n• **Traffic Management Plan** - Must be submitted 30 days prior\n• **Waste Management Protocol** - Enhanced recycling requirements (65% minimum)\n• **Community Impact Statement** - New requirement for downtown projects\n\n### Financial Impact Analysis\n**Timeline Extension:** +6-8 days (due to restricted hours)\n**Additional Costs:** ~$15,000-$22,000\n• Environmental assessment: $8,000\n• Enhanced safety measures: $7,000-$14,000\n\n### Recommended Actions\n1. **Adjust project timeline** to account for restricted hours\n2. **Include compliance costs** in bid calculations\n3. **Highlight your proactive compliance** as a competitive advantage\n\n**💡 Opportunity:** Many competitors may not be aware of these changes yet. Your proactive compliance could be a major differentiator!\n\nWould you like me to update your project timeline and cost estimates automatically?",
      timestamp: 'Just now',
      suggestions: ['Update Timeline', 'Recalculate Costs', 'Generate Compliance Checklist'],
      confidence: 98
    }
  ];

  const quickActions = [
    { label: 'Update Schedule', icon: Calendar, color: 'blue', description: 'Adjust project timeline' },
    { label: 'Cost Analysis', icon: Calculator, color: 'green', description: 'Recalculate estimates' },
    { label: 'Draft Proposal', icon: FileText, color: 'purple', description: 'Generate bid document' },
    { label: 'Market Research', icon: TrendingUp, color: 'orange', description: 'Analyze trends' },
    { label: 'Risk Assessment', icon: AlertTriangle, color: 'red', description: 'Identify potential issues' },
    { label: 'Team Planning', icon: Users, color: 'indigo', description: 'Resource allocation' }
  ];

  const aiInsights = [
    {
      type: 'opportunity',
      title: 'High-Value Lead Detected',
      description: 'New $4.2M hospital project matches your expertise',
      confidence: 89,
      action: 'View Details'
    },
    {
      type: 'risk',
      title: 'Material Price Alert',
      description: 'Steel prices expected to rise 6% next month',
      confidence: 94,
      action: 'Lock Prices'
    },
    {
      type: 'optimization',
      title: 'Schedule Optimization',
      description: 'Rearrange 3 projects to improve efficiency by 12%',
      confidence: 87,
      action: 'Apply Changes'
    }
  ];

  const handleSendMessage = () => {
    if (message.trim() && isPro) {
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 2000);
      setMessage('');
    }
  };

  const PricingModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Unlock AI Copilot Pro
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Get intelligent project assistance and market insights
              </p>
            </div>
            <Button variant="ghost" size="sm">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Basic
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">$49</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Basic chat support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">5 projects per month</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Standard reporting</span>
                </li>
              </ul>
              
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                Current Plan
              </Button>
            </div>

            <div className="relative p-6 rounded-xl border-2 border-primary bg-primary/5 scale-105">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-black px-3 py-1">
                  Recommended
                </Badge>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  AI Copilot Pro
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">$149</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Advanced AI analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Unlimited projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Market intelligence</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Competitive analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Real-time compliance alerts</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Priority support</span>
                </li>
              </ul>
              
              <Button className="w-full bg-primary hover:bg-yellow-400 text-black">
                Upgrade Now
              </Button>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              14-day free trial • Cancel anytime • No setup fees
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-6 border-b bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shrink-0 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">AI Project Copilot</h2>
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {isPro ? 'Pro • Online & Ready' : 'Basic • Limited Features'}
                </span>
                {isPro && <Crown className="w-3 h-3 text-purple-500" />}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-full">
            <Building className="w-4 h-4" />
            <span>Context: <strong className="text-gray-900 dark:text-white">Downtown Office Renovation</strong></span>
            <Button variant="ghost" size="sm" className="p-0 h-auto ml-1">
              <X className="w-3 h-3" />
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <History className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="relative hover:bg-gray-100 dark:hover:bg-gray-700">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full" />
          </Button>
          <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 scroll-smooth">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Date Separator */}
              <div className="flex justify-center">
                <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                  Today, October 24
                </Badge>
              </div>

              {/* Messages */}
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-4 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                  {/* Avatar */}
                  <div className={`shrink-0 mt-1 ${msg.type === 'user' ? 'order-2' : ''}`}>
                    {msg.type === 'ai' ? (
                      <div className="size-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                        <Bot className="w-6 h-6" />
                      </div>
                    ) : (
                      <Avatar className="size-12">
                        <AvatarImage src="/api/placeholder/48/48" />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold">
                          AC
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>

                  {/* Message Content */}
                  <div className={`flex flex-col gap-3 max-w-[85%] ${msg.type === 'user' ? 'items-end' : ''}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">
                        {msg.type === 'ai' ? 'AI Copilot' : 'You'}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{msg.timestamp}</span>
                      {msg.confidence && (
                        <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                          <Target className="w-3 h-3" />
                          <span>{msg.confidence}%</span>
                        </div>
                      )}
                    </div>
                    
                    <div className={`p-6 rounded-2xl shadow-sm text-sm leading-relaxed ${
                      msg.type === 'ai' 
                        ? 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-tl-none text-gray-700 dark:text-gray-300' 
                        : 'bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-tr-none shadow-lg'
                    }`}>
                      {/* Enhanced message rendering with better markdown support */}
                      <div className="whitespace-pre-wrap">
                        {msg.content.split('\n').map((line, index) => {
                          if (line.startsWith('### ')) {
                            return <h3 key={index} className="font-bold text-lg text-gray-900 dark:text-white mb-3 mt-4 first:mt-0">{line.replace('### ', '')}</h3>;
                          }
                          if (line.startsWith('#### ')) {
                            return <h4 key={index} className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-3 mt-4">{line.replace('#### ', '')}</h4>;
                          }
                          if (line.startsWith('• ')) {
                            return <li key={index} className="ml-4 mb-1 list-disc">{line.replace('• ', '')}</li>;
                          }
                          if (line.match(/^\d+\./)) {
                            return <li key={index} className="ml-4 mb-1 list-decimal">{line.replace(/^\d+\.\s*/, '')}</li>;
                          }
                          if (line.includes('**') && msg.type === 'ai') {
                            const parts = line.split('**');
                            return (
                              <p key={index} className="mb-2">
                                {parts.map((part, i) => 
                                  i % 2 === 1 ? <strong key={i} className="text-gray-900 dark:text-white font-semibold">{part}</strong> : part
                                )}
                              </p>
                            );
                          }
                          if (line.startsWith('🎯') || line.startsWith('💡') || line.startsWith('⚡') || line.startsWith('🚨') || line.startsWith('📋') || line.startsWith('📊')) {
                            return <p key={index} className="mb-2 font-medium text-gray-900 dark:text-white">{line}</p>;
                          }
                          return line ? <p key={index} className="mb-2">{line}</p> : <br key={index} />;
                        })}
                      </div>
                    </div>

                    {/* Suggestions */}
                    {msg.suggestions && isPro && (
                      <div className="flex flex-wrap gap-2 mt-1">
                        {msg.suggestions.map((suggestion, index) => (
                          <Button key={index} variant="outline" size="sm" className="text-xs border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800">
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-4">
                  <div className="size-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">AI Copilot</span>
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl rounded-tl-none">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input Area */}
          <div className="shrink-0 p-4 md:p-6 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 relative">
            <div className="max-w-4xl mx-auto">
              {/* Quick Actions */}
              {isPro && (
                <div className="flex gap-2 overflow-x-auto pb-4 mb-4 no-scrollbar">
                  {quickActions.map((action, index) => (
                    <Button key={index} variant="outline" size="sm" className="shrink-0 text-xs border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <action.icon className={`w-3 h-3 mr-1.5 text-${action.color}-500`} />
                      {action.label}
                    </Button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="relative">
                {isPro ? (
                  <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl shadow-sm focus-within:ring-2 focus-within:ring-purple-500/20 focus-within:border-purple-500 transition-all">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask Copilot about bids, compliance, market trends, or resource allocation..."
                      className="w-full bg-transparent border-none text-sm text-gray-900 dark:text-white p-4 pr-12 h-16 max-h-32 focus:ring-0 resize-none placeholder-gray-500 dark:placeholder-gray-400"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                    />
                    <div className="absolute bottom-2 right-2 flex items-center gap-1">
                      <Button variant="ghost" size="sm" className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <Paperclip className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        onClick={handleSendMessage}
                        disabled={!message.trim()}
                        className="p-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="bg-gray-100 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6 text-center">
                      <Lock className="w-8 h-8 text-gray-400 dark:text-gray-500 mx-auto mb-3" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Upgrade to AI Copilot Pro
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Get advanced AI analysis, market intelligence, and unlimited conversations
                      </p>
                      <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                        <Crown className="w-4 h-4 mr-2" />
                        Upgrade Now
                      </Button>
                    </div>
                  </div>
                )}

                <div className="text-center mt-3">
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    AI Project Copilot can make mistakes. Verify important project details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - AI Insights */}
        {isPro && (
          <div className="w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 flex flex-col shrink-0 shadow-xl">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Insights</h3>
              </div>
              
              <div className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <div key={index} className={`p-4 rounded-xl border ${
                    insight.type === 'opportunity' ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700' :
                    insight.type === 'risk' ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700' :
                    'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700'
                  }`}>
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${
                        insight.type === 'opportunity' ? 'bg-green-100 dark:bg-green-800' :
                        insight.type === 'risk' ? 'bg-red-100 dark:bg-red-800' :
                        'bg-blue-100 dark:bg-blue-800'
                      }`}>
                        {insight.type === 'opportunity' && <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />}
                        {insight.type === 'risk' && <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />}
                        {insight.type === 'optimization' && <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          {insight.title}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                          {insight.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                            <Target className="w-3 h-3" />
                            <span>{insight.confidence}%</span>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs h-6">
                            {insight.action}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="p-6">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                Performance Metrics
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Bid Win Rate</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Project Efficiency</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Client Satisfaction</span>
                    <span className="font-semibold text-purple-600 dark:text-purple-400">4.8/5</span>
                  </div>
                  <Progress value={96} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedAICopilot;