import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Bot,
  Send,
  History,
  Bell,
  X,
  TrendingUp,
  Calendar,
  Paperclip,
  Lock,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck
} from 'lucide-react';

const AICopilot = () => {
  const [hasPremiumAccess, setHasPremiumAccess] = useState(false);
  const [message, setMessage] = useState('');

  const messages = [
    {
      id: 1,
      type: 'ai',
      content: "Hello Acme Construction! I've detected a new high-priority opportunity: **Downtown Office Renovation**. Based on your previous projects, this fits your profile perfectly.\n\nHere is a quick snapshot:\n• **Budget:** $2.5M - $3M\n• **Location:** Austin, TX\n• **Competitors:** 3 active bids detected\n\nWould you like me to analyze the bid strategy or check for compliance requirements?",
      timestamp: '10:42 AM',
      suggestions: ['Analyze Bid Strategy', 'Check Compliance']
    },
    {
      id: 2,
      type: 'user',
      content: "Let's start with the bid strategy. Specifically, how can I optimize my margin for this renovation given the current material costs in Austin?",
      timestamp: '10:45 AM'
    },
    {
      id: 3,
      type: 'ai',
      content: "Analyzing local material indices for Austin, TX... **Done.**\n\n### Strategy Recommendation\n\nFor the **Downtown Office Renovation**, material costs for commercial interiors in Austin have risen by **4.2%** this quarter. However, labor availability is stable.\n\n#### Cost Breakdown & Opportunity\n\n**Drywall & Framing:** High Variance (+6%)\n**Electrical Fixtures:** Stable (-1%)\n\n**Recommended Actions:**\n1. **Pre-purchase Drywall:** Lock in prices now with supplier *Austin Materials Inc.* to avoid the projected 2% hike next month.\n2. **Subcontractor Selection:** Use *TheBluebook* integration to find tiered electrical subs who are currently underutilized to negotiate better rates.\n3. **Margin Target:** Aim for a **18% gross margin**. Competitors A and B bid at 15% but often have change orders. Your reputation for \"no hidden costs\" justifies the premium.\n\n💡 I can draft a tiered bid proposal highlighting these savings. Shall I proceed?",
      timestamp: '10:46 AM'
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  const handleUpgrade = () => {
    // Simulate upgrade process
    setTimeout(() => setHasPremiumAccess(true), 1000);
  };

  if (!hasPremiumAccess) {
    return (
      <div className="h-full w-full flex items-center justify-center p-6 bg-slate-50/50 dark:bg-slate-950/50 overflow-hidden">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold mb-4 uppercase tracking-wide">
                <Sparkles className="w-3 h-3" /> New AI Feature
              </div>
              <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Supercharge your Estimating with <span className="text-yellow-500">AI Copilot</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                Unlock real-time market insights, automated bid strategies, and compliance checks. Our AI analyzes thousands of data points to help you win more profitable work.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Real-time Material Cost Analysis",
                "Competitor Bid Intelligence",
                "Automated Compliance & Code Checks",
                "Draft Proposals in Seconds"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-2 border-yellow-500/20 shadow-xl bg-white dark:bg-slate-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Bot className="w-48 h-48 text-yellow-500" />
            </div>

            <CardHeader className="text-center pb-2">
              <div className="mx-auto h-12 w-12 rounded-xl bg-yellow-500 text-yellow-950 flex items-center justify-center mb-4 shadow-lg shadow-yellow-500/20">
                <Zap className="w-7 h-7 fill-current" />
              </div>
              <CardTitle className="text-2xl font-bold">Pro Access</CardTitle>
              <CardDescription>Everything you need to dominate the market</CardDescription>
            </CardHeader>

            <CardContent className="text-center space-y-4 pt-4">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-sm font-semibold text-slate-500 align-top mt-2">$</span>
                <span className="text-5xl font-extrabold text-slate-900 dark:text-white">99</span>
                <span className="text-slate-500 font-medium">/mo</span>
              </div>
              <p className="text-xs text-slate-400">Billed annually or $129 month-to-month</p>

              <Button
                onClick={handleUpgrade}
                className="w-full h-12 text-lg bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-yellow-950 font-bold shadow-lg shadow-yellow-500/25 mt-4 group"
              >
                Unlock AI Copilot
                <Lock className="w-4 h-4 ml-2 group-hover:hidden" />
                <Sparkles className="w-4 h-4 ml-2 hidden group-hover:block animate-pulse" />
              </Button>
            </CardContent>

            <CardFooter className="justify-center border-t bg-slate-50 dark:bg-slate-800/50 py-4">
              <p className="text-xs text-slate-500 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> 14-day money-back guarantee
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-yellow-950 shadow-sm">
              <Bot className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">AI Project Copilot</h2>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-slate-500">Premium Active</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <History className="w-4 h-4 mr-2" /> History
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5 text-slate-500" />
          </Button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 scroll-smooth">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center">
            <Badge variant="outline" className="text-xs bg-white dark:bg-slate-900 text-slate-500 border-slate-200 font-normal">
              Today, October 24
            </Badge>
          </div>

          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-4 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`shrink-0 mt-1 ${msg.type === 'user' ? 'order-2' : ''}`}>
                {msg.type === 'ai' ? (
                  <div className="size-9 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center border border-yellow-200 dark:border-yellow-800">
                    <Bot className="w-5 h-5 text-yellow-700 dark:text-yellow-500" />
                  </div>
                ) : (
                  <Avatar className="size-9">
                    <AvatarImage src="/api/placeholder/40/40" />
                    <AvatarFallback className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">YO</AvatarFallback>
                  </Avatar>
                )}
              </div>

              <div className={`flex flex-col gap-2 max-w-[80%] ${msg.type === 'user' ? 'items-end' : ''}`}>
                <div className={`p-5 rounded-2xl shadow-sm leading-relaxed text-sm ${msg.type === 'ai'
                  ? 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-tl-none text-slate-700 dark:text-slate-200'
                  : 'bg-slate-900 text-white rounded-tr-none dark:bg-slate-100 dark:text-slate-900'
                  }`}>
                  <div className="whitespace-pre-wrap">
                    {msg.content.split('\n').map((line, index) => (
                      <p key={index} className="mb-2 last:mb-0">{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="shrink-0 p-4 md:p-6 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-yellow-500/20 focus-within:border-yellow-500 transition-all">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask Copilot about bids, compliance, or resource allocation..."
              className="w-full bg-transparent border-none text-sm text-slate-900 dark:text-slate-100 p-4 pr-14 h-14 max-h-32 focus:ring-0 resize-none placeholder-slate-400"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <div className="absolute bottom-2 right-2 flex items-center gap-1">
              <Button
                size="sm"
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="h-8 w-8 p-0 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-yellow-950 shadow-sm disabled:opacity-50 disabled:bg-slate-200"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICopilot;