import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, Sparkles, Zap, Clock, TrendingUp, Bot, ArrowRight, Paperclip, Mic, Image as ImageIcon, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const AIAssistant = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">AI Assistant</h1>
          <p className="text-sm text-gray-500 mt-1">Your AI-powered virtual assistant for construction projects</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-green-700">System Online</span>
          </div>
          <Button variant="outline" className="hidden md:flex">
            <Clock className="w-4 h-4 mr-2" />
            History
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Main Chat Interface */}
        <Card className="lg:col-span-3 border-none shadow-xl shadow-gray-200/50 flex flex-col h-[650px] overflow-hidden">
          <CardHeader className="border-b bg-white px-6 py-4 flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shadow-lg shadow-black/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-base font-bold text-gray-900">Contractor AI</CardTitle>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  Powered by GPT-4 <span className="w-1 h-1 rounded-full bg-gray-300"></span> Pro
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-900">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </CardHeader>

          <CardContent className="p-0 flex-1 flex flex-col bg-gray-50/30">
            {/* Chat Area */}
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="space-y-8 max-w-3xl mx-auto">
                {/* AI Welcome Message */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0 shadow-md mt-1">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="space-y-2 max-w-[85%]">
                    <div className="bg-white rounded-2xl rounded-tl-none p-5 shadow-sm border border-gray-100">
                      <p className="text-gray-800 font-medium mb-2">Hello! I'm your dedicated construction assistant.</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        I can help you analyze blueprints, estimate costs, check building codes, or draft client emails. What are we working on today?
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-1">
                      {[
                        { icon: TrendingUp, label: "Analyze Cost Trends" },
                        { icon: Paperclip, label: "Review Blueprints" },
                        { icon: MessageSquare, label: "Draft Proposal" }
                      ].map((suggestion, idx) => (
                        <button key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all">
                          <suggestion.icon className="w-3 h-3" />
                          {suggestion.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="max-w-3xl mx-auto relative">
                <div className="absolute left-3 bottom-3 flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                    <ImageIcon className="w-4 h-4" />
                  </Button>
                </div>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask anything or type '/' for commands..."
                  className="w-full pl-24 pr-12 py-4 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none text-sm font-medium"
                />
                <div className="absolute right-2 bottom-2">
                  <Button
                    className={`${message ? 'bg-black' : 'bg-gray-200 text-gray-400'} hover:bg-gray-800 text-white shadow-sm transition-all h-9 w-9 rounded-lg p-0 flex items-center justify-center`}
                    disabled={!message}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <p className="text-center text-xs text-gray-400 mt-3">
                AI can make mistakes. Please verify important project details.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Sidebar */}
        <div className="space-y-6 lg:col-span-2">
          <Card className="border-none shadow-sm">
            <CardHeader className="border-b bg-white px-6 py-4">
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              {[
                { icon: Clock, label: "Schedule Project", color: "text-blue-600", hover: "group-hover:text-blue-600" },
                { icon: TrendingUp, label: "Get Cost Estimate", color: "text-green-600", hover: "group-hover:text-green-600" },
                { icon: MessageSquare, label: "Draft Contract", color: "text-purple-600", hover: "group-hover:text-purple-600" }
              ].map((action, idx) => (
                <Button key={idx} variant="outline" className="w-full justify-between h-14 hover:border-gray-300 hover:bg-gray-50 group border-gray-200">
                  <span className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center ${action.hover} transition-colors`}>
                      <action.icon className={`w-4 h-4 ${action.color}`} />
                    </div>
                    <span className="font-semibold text-gray-700">{action.label}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gray-600 transition-colors" />
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader className="border-b bg-white px-6 py-4">
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-gray-500">Recent Queries</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-1">
                {[
                  { query: "Kitchen remodel timeline", time: "2h ago" },
                  { query: "Best flooring materials", time: "Yesterday" },
                  { query: "Deck permit requirements", time: "2d ago" },
                  { query: "Labor cost estimation", time: "3d ago" }
                ].map((item, idx) => (
                  <div key={idx} className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <MessageSquare className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors shrink-0" />
                      <span className="text-sm text-gray-600 font-medium truncate group-hover:text-gray-900">{item.query}</span>
                    </div>
                    <span className="text-xs text-gray-400 shrink-0">{item.time}</span>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-xs text-gray-500 hover:text-gray-900">
                View All History
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
