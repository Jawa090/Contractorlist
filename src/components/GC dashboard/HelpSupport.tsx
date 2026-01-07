import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  MessageCircle,
  Phone,
  Mail,
  FileText,
  Video,
  Clock,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Users,
  Headphones,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const HelpSupport = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Help & Support
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Get help with your account, find answers to common questions, or contact our support team.
          </p>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search for help articles, tutorials, or FAQs..."
                className="pl-12 h-12 text-lg"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="size-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-sm text-gray-500 mb-4">Get instant help from our support team</p>
                  <Badge className="bg-green-50 text-green-700">Online</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="size-12 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Phone Support</h3>
                  <p className="text-sm text-gray-500 mb-4">Call us for immediate assistance</p>
                  <Badge variant="outline">1-800-CONTRACTOR</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="size-12 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-sm text-gray-500 mb-4">Send us a detailed message</p>
                  <Badge variant="outline">24h response</Badge>
                </CardContent>
              </Card>
            </div>

            {/* Popular Articles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Popular Help Articles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">How to Submit Your First Bid</h4>
                      <p className="text-sm text-gray-500">Step-by-step guide to bidding on projects</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Finding Qualified Subcontractors</h4>
                      <p className="text-sm text-gray-500">Use our directory to build your team</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">AI Take-off Tutorial</h4>
                      <p className="text-sm text-gray-500">Learn to use our AI-powered quantity take-off</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Account Settings & Billing</h4>
                      <p className="text-sm text-gray-500">Manage your subscription and preferences</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>

            {/* Video Tutorials */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="w-5 h-5" />
                  Video Tutorials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                      <Video className="w-12 h-12 text-gray-400" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-2">Getting Started with ContractorsList</h4>
                      <p className="text-sm text-gray-500 mb-2">Complete overview of the platform</p>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Clock className="w-3 h-3" />
                        <span>8:32</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                      <Video className="w-12 h-12 text-gray-400" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-2">Advanced Bidding Strategies</h4>
                      <p className="text-sm text-gray-500 mb-2">Tips to win more projects</p>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Clock className="w-3 h-3" />
                        <span>12:15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Support Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Headphones className="w-5 h-5" />
                  Support Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="size-3 rounded-full bg-green-500"></div>
                  <div>
                    <p className="font-medium">All Systems Operational</p>
                    <p className="text-sm text-gray-500">Last updated: 2 minutes ago</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Platform</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">AI Services</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Notifications</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Status Page
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="font-medium">Phone Support</p>
                      <p className="text-sm text-gray-500">1-800-CONTRACTOR</p>
                      <p className="text-xs text-gray-400">Mon-Fri 8AM-8PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="font-medium">Email Support</p>
                      <p className="text-sm text-gray-500">support@contractorslist.com</p>
                      <p className="text-xs text-gray-400">24 hour response time</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Tickets */}
            <Card>
              <CardHeader>
                <CardTitle>Your Recent Tickets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">#12345</span>
                    <Badge className="bg-green-50 text-green-700">Resolved</Badge>
                  </div>
                  <p className="text-sm text-gray-600">Billing question about subscription</p>
                  <p className="text-xs text-gray-400 mt-1">Resolved 2 days ago</p>
                </div>

                <div className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">#12344</span>
                    <Badge className="bg-blue-50 text-blue-700">In Progress</Badge>
                  </div>
                  <p className="text-sm text-gray-600">AI Take-off not processing blueprints</p>
                  <p className="text-xs text-gray-400 mt-1">Created 1 day ago</p>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  View All Tickets
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;