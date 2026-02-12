import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import {
  MessageCircle,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  BookOpen,
  Headphones,
  ArrowRight,
  LifeBuoy,
  Send,
  HelpCircle,
  Zap,
  Shield,
  Award,
  Users,
  TrendingUp,
  FileText,
  Video,
  Search,
  Star,
  Globe,
  MessageSquare,
  Calendar,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const CustomerSupport = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('normal');
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.subject || !formData.message || !selectedCategory) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields including category.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast({
      title: "Support Request Submitted",
      description: "Your ticket has been created. Our team will respond within 2 hours during business hours.",
    });
    setFormData({ subject: '', message: '' });
    setSelectedCategory('');
    setSelectedPriority('normal');
  };

  const supportStats = [
    { icon: Clock, value: "< 2 hours", label: "Avg Response Time", color: "text-blue-500" },
    { icon: CheckCircle, value: "99.8%", label: "Satisfaction Rate", color: "text-green-500" },
    { icon: Users, value: "24/7", label: "Support Available", color: "text-purple-500" },
    { icon: Award, value: "10,000+", label: "Issues Resolved", color: "text-yellow-500" },
  ];

  const quickActions = [
    {
      name: 'Phone Support',
      description: 'Speak directly with our team',
      contact: '+1 (281) 623-6289',
      icon: Phone,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      action: 'call',
    },
    {
      name: 'Email Support',
      description: 'Get detailed help via email',
      contact: 'support@contractorlist.com',
      icon: Mail,
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      action: 'email',
    },
    {
      name: 'Live Chat',
      description: 'Chat with us in real-time',
      contact: 'Available 24/7',
      icon: MessageSquare,
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
      action: 'chat',
      badge: 'Online',
    },
  ];

  const supportCategories = [
    { value: 'technical', label: 'Technical Issue', icon: Zap },
    { value: 'billing', label: 'Billing & Payments', icon: FileText },
    { value: 'account', label: 'Account Management', icon: Users },
    { value: 'feature', label: 'Feature Request', icon: Sparkles },
    { value: 'bug', label: 'Bug Report', icon: AlertCircle },
    { value: 'other', label: 'Other', icon: HelpCircle },
  ];

  const faqItems = [
    {
      question: 'How quickly will I receive a response?',
      answer: 'Our support team typically responds within 2 hours during business hours (Monday-Friday, 8 AM - 6 PM EST). For urgent issues, please call our phone support line.',
    },
    {
      question: 'What information should I include in my support request?',
      answer: 'Please include your account details, a clear description of the issue, steps to reproduce (if applicable), and any error messages you\'ve encountered.',
    },
    {
      question: 'Can I track my support ticket status?',
      answer: 'Yes! Once you submit a ticket, you\'ll receive a confirmation email with a ticket number. You can track its status through your dashboard.',
    },
    {
      question: 'Do you offer phone support?',
      answer: 'Yes, we offer phone support at +1 (281) 623-6289 during business hours. For urgent matters, phone support is the fastest way to reach us.',
    },
  ];

  const resources = [
    { name: 'Knowledge Base', icon: BookOpen, description: 'Browse 500+ articles', color: 'text-blue-500' },
    { name: 'Video Tutorials', icon: Video, description: 'Watch step-by-step guides', color: 'text-purple-500' },
    { name: 'API Documentation', icon: FileText, description: 'Developer resources', color: 'text-green-500' },
    { name: 'Community Forum', icon: Users, description: 'Connect with others', color: 'text-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-[#0a0d14] dark:via-[#0f1115] dark:to-[#0a0d14]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 md:py-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 shadow-xl">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-lg opacity-50"></div>
                <Headphones className="w-6 h-6 mr-3 text-white relative z-10" />
              </div>
              <span className="text-sm font-bold text-white">Enterprise Support</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              We're Here to Help
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12">
              Get expert assistance from our dedicated support team. We're committed to your success.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
              {supportStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-2xl border border-white/20 hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
                    <div className={cn("w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center mb-3 mx-auto shadow-lg", 
                      stat.color === "text-blue-500" ? "from-blue-500 to-blue-600" :
                      stat.color === "text-green-500" ? "from-green-500 to-green-600" :
                      stat.color === "text-purple-500" ? "from-purple-500 to-purple-600" :
                      "from-yellow-500 to-yellow-600"
                    )}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1e24] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={cn("absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity", action.color)}></div>
                <CardContent className="p-6 relative z-10">
                  <div className={cn("w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 shadow-lg", action.color, action.hoverColor)}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{action.name}</h3>
                    {action.badge && (
                      <Badge className="bg-green-500 text-white text-xs">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-1.5 animate-pulse"></div>
                        {action.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{action.description}</p>
                  <div className="flex items-center justify-between">
                    <a 
                      href={action.action === 'call' ? `tel:${action.contact}` : action.action === 'email' ? `mailto:${action.contact}` : '#'}
                      className="text-sm font-semibold text-gray-900 dark:text-white hover:text-[#fce011] transition-colors"
                    >
                      {action.contact}
                    </a>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#fce011] group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Support Request Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1e24] shadow-xl">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white dark:from-[#1c1e24] dark:to-[#252830] border-b border-gray-200 dark:border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <LifeBuoy className="w-6 h-6 text-[#fce011]" />
                      Submit Support Request
                    </CardTitle>
                    <CardDescription className="mt-2 text-base">
                      Our expert team typically responds within <span className="font-semibold text-[#fce011]">2 hours</span> during business hours.
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-500 text-white px-3 py-1">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Online
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-gray-500" />
                        Category <span className="text-red-500">*</span>
                      </label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="border-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/20 h-11">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {supportCategories.map((cat) => {
                            const Icon = cat.icon;
                            return (
                              <SelectItem key={cat.value} value={cat.value}>
                                <div className="flex items-center gap-2">
                                  <Icon className="w-4 h-4" />
                                  {cat.label}
                                </div>
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-gray-500" />
                        Priority
                      </label>
                      <Select value={selectedPriority} onValueChange={setSelectedPriority}>
                        <SelectTrigger className="border-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/20 h-11">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - General Inquiry</SelectItem>
                          <SelectItem value="normal">Normal - Standard Request</SelectItem>
                          <SelectItem value="high">High - Urgent Issue</SelectItem>
                          <SelectItem value="critical">Critical - System Down</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-500" />
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="Brief description of your issue..."
                      className="border-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/20 h-11"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-gray-500" />
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      placeholder="Please provide detailed information about your issue. Include steps to reproduce, error messages, and any relevant screenshots or attachments..."
                      className="min-h-[180px] border-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/20 resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Include as much detail as possible to help us assist you faster.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-[#fce011] to-yellow-400 hover:from-yellow-400 hover:to-[#fce011] text-black font-bold py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-5 h-5 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Submit Support Request
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1e24] shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-[#fce011]" />
                  Frequently Asked Questions
                </CardTitle>
                <CardDescription>Quick answers to common questions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-black/20 rounded-lg border border-gray-200 dark:border-white/10 hover:border-[#fce011] transition-colors">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#fce011]" />
                      {faq.question}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Business Hours */}
            <Card className="border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1e24] shadow-xl">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white dark:from-[#1c1e24] dark:to-[#252830] border-b border-gray-200 dark:border-white/10">
                <CardTitle className="text-lg font-bold flex items-center gap-2 text-gray-900 dark:text-white">
                  <Clock className="w-5 h-5 text-[#fce011]" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-black/20 rounded-lg">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Monday - Friday</span>
                  <span className="font-bold text-gray-900 dark:text-white">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-black/20 rounded-lg">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Saturday</span>
                  <span className="font-bold text-gray-900 dark:text-white">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-black/20 rounded-lg">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sunday</span>
                  <span className="font-bold text-gray-500 dark:text-gray-400">Closed</span>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-white/10 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">Support Team Online</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Average response: 15 minutes</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card className="border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1e24] shadow-xl">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white dark:from-[#1c1e24] dark:to-[#252830] border-b border-gray-200 dark:border-white/10">
                <CardTitle className="text-lg font-bold flex items-center gap-2 text-gray-900 dark:text-white">
                  <Shield className="w-5 h-5 text-[#fce011]" />
                  System Status
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-black/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Dashboard</span>
                  </div>
                  <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">Operational</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-black/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Bid System</span>
                  </div>
                  <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">Operational</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-black/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">API Services</span>
                  </div>
                  <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">Operational</Badge>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                  <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    Last updated: {new Date().toLocaleTimeString()}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card className="border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1e24] shadow-xl">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white dark:from-[#1c1e24] dark:to-[#252830] border-b border-gray-200 dark:border-white/10">
                <CardTitle className="text-lg font-bold flex items-center gap-2 text-gray-900 dark:text-white">
                  <BookOpen className="w-5 h-5 text-[#fce011]" />
                  Help Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                {resources.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-black/20 rounded-lg hover:bg-gray-100 dark:hover:bg-black/40 border border-transparent hover:border-[#fce011] transition-all group"
                    >
                      <Icon className={cn("w-5 h-5", resource.color)} />
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-[#fce011] transition-colors">
                          {resource.name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{resource.description}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#fce011] transition-colors" />
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Trust Badge */}
            <Card className="border-2 border-[#fce011] bg-gradient-to-br from-[#fce011]/10 to-yellow-400/10 dark:from-[#fce011]/5 dark:to-yellow-400/5 shadow-xl">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-[#fce011] mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Enterprise Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Trusted by 10,000+ contractors worldwide
                </p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">4.9/5</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
