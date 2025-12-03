import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, MessageCircle, Settings, Zap, Users, TrendingUp, ArrowUpRight, Globe, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AIChatbot = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">AI Chat Bot</h1>
          <p className="text-sm text-gray-500 mt-1">24/7 AI-powered chatbot for your website</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-300">
            <Code className="w-4 h-4 mr-2" />
            Get Embed Code
          </Button>
          <Button className="bg-black hover:bg-gray-800 text-white shadow-lg shadow-black/20 transition-all">
            <Settings className="w-4 h-4 mr-2" />
            Configure Bot
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Total Conversations", value: "1,245", change: "+18%", icon: MessageCircle, color: "text-blue-600", bg: "bg-blue-50" },
          { title: "Response Rate", value: "98%", change: "+2%", icon: Zap, color: "text-green-600", bg: "bg-green-50" },
          { title: "Customer Satisfaction", value: "4.8/5", change: "+0.3", icon: Users, color: "text-yellow-600", bg: "bg-yellow-50" },
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Card key={idx} className="hover:shadow-xl transition-all duration-300 border-none shadow-sm group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.bg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    {stat.change}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1 tracking-tight">{stat.value}</h3>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-none shadow-sm">
          <CardHeader className="border-b bg-white px-6 py-4">
            <CardTitle className="flex items-center gap-2 text-base font-bold">
              <Bot className="w-5 h-5 text-blue-600" />
              Chatbot Preview
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden border border-gray-200">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>

              {/* Chat Widget Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden relative z-10 border border-gray-100">
                <div className="bg-black p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Contractor AI</p>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-white/80 text-xs">Online</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 h-64 bg-gray-50 space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 border border-gray-100">
                      Hi there! How can I help you with your project today?
                    </div>
                  </div>
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="bg-black text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm">
                      I need a quote for a kitchen remodel.
                    </div>
                  </div>
                </div>
                <div className="p-3 border-t border-gray-100 bg-white">
                  <div className="h-10 bg-gray-100 rounded-full w-full"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader className="border-b bg-white px-6 py-4">
            <CardTitle className="flex items-center gap-2 text-base font-bold">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              Features
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "24/7 Availability", desc: "Never miss a customer inquiry", icon: Globe, color: "text-blue-600", bg: "bg-blue-50" },
                { title: "Instant Responses", desc: "Answer questions in real-time", icon: Zap, color: "text-yellow-600", bg: "bg-yellow-50" },
                { title: "Lead Capture", desc: "Automatically collect contact info", icon: Users, color: "text-green-600", bg: "bg-green-50" },
                { title: "Custom Training", desc: "Train on your business data", icon: Settings, color: "text-purple-600", bg: "bg-purple-50" },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:border-gray-300 hover:shadow-md transition-all group">
                  <div className={`${feature.bg} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIChatbot;
