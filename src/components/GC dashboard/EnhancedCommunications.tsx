import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  MessageSquare,
  Phone,
  Video,
  Bell,
  Search,
  Plus,
  Filter,
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
  Users,
  Building,
  Settings,
  Download,
  Upload,
  MoreVertical,
  Send,
  Paperclip,
  Smile
} from 'lucide-react';

const EnhancedCommunications = () => {
  const [activeTab, setActiveTab] = useState('messages');

  const conversations = [
    {
      id: '1',
      name: 'Austin Medical Group',
      lastMessage: 'Project timeline looks good, when can we schedule the final walkthrough?',
      time: '2 min ago',
      unread: 3,
      avatar: '/client-1.jpg',
      online: true
    },
    {
      id: '2',
      name: 'Project Team - Office Complex',
      lastMessage: 'Steel framework installation completed ahead of schedule',
      time: '15 min ago',
      unread: 1,
      avatar: '/contractor.jpg',
      online: false
    },
    {
      id: '3',
      name: 'Metro Properties LLC',
      lastMessage: 'Thanks for the update. The progress looks excellent!',
      time: '1 hour ago',
      unread: 0,
      avatar: '/contractor-2.jpg',
      online: true
    }
  ];

  const notifications = [
    {
      id: '1',
      type: 'message',
      title: 'New message from Austin Medical Group',
      description: 'Project timeline discussion',
      time: '5 min ago',
      read: false
    },
    {
      id: '2',
      type: 'meeting',
      title: 'Upcoming meeting reminder',
      description: 'Site inspection at 2:00 PM today',
      time: '30 min ago',
      read: false
    },
    {
      id: '3',
      type: 'update',
      title: 'Project milestone completed',
      description: 'Medical Center Phase 1 finished',
      time: '2 hours ago',
      read: true
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Enterprise Communications
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Advanced team collaboration and client communication platform
            </p>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">All Systems Online</span>
              </div>
              <div className="text-sm text-gray-500">
                Real-time messaging enabled
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="border-gray-300 hover:border-gray-400">
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filters
            </Button>
            <Button variant="outline" className="border-gray-300 hover:border-gray-400">
              <Download className="w-4 h-4 mr-2" />
              Export Chat History
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
              <Plus className="w-4 h-4 mr-2" />
              New Conversation
            </Button>
          </div>
        </div>

        {/* Enhanced Communication Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <Badge className="bg-red-100 text-red-700 border-red-200">
                  8 New
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">24</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Active Conversations</p>
                <p className="text-xs text-gray-500 mt-1">8 unread messages</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  2 Active
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">156</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Calls Today</p>
                <p className="text-xs text-gray-500 mt-1">2 currently active</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <Video className="w-6 h-6 text-purple-600" />
                </div>
                <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                  5 Scheduled
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Video Meetings</p>
                <p className="text-xs text-gray-500 mt-1">5 scheduled today</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                  <Bell className="w-6 h-6 text-orange-600" />
                </div>
                <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                  15 New
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">47</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Notifications</p>
                <p className="text-xs text-gray-500 mt-1">15 unread alerts</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Main Communication Interface */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Left Column - Communication Center */}
          <div className="xl:col-span-3">
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">Communication Hub</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Button>
                    <Button variant="outline" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="messages">Messages</TabsTrigger>
                    <TabsTrigger value="calls">Voice Calls</TabsTrigger>
                    <TabsTrigger value="meetings">Video Meetings</TabsTrigger>
                    <TabsTrigger value="notifications">Alerts</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="messages" className="space-y-4">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input placeholder="Search conversations, clients, team members..." className="pl-10 bg-gray-50 dark:bg-gray-900" />
                      </div>
                      <Button variant="outline">
                        <Filter className="w-4 h-4 mr-2" />
                        Advanced Filter
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      {conversations.map((conversation) => (
                        <div key={conversation.id} className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                          <div className="relative">
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={conversation.avatar} />
                              <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                                {conversation.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            {conversation.online && (
                              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-semibold text-gray-900 dark:text-white">{conversation.name}</h3>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500">{conversation.time}</span>
                                {conversation.unread > 0 && (
                                  <Badge className="bg-red-500 text-white text-xs px-2 py-1">
                                    {conversation.unread}
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                              {conversation.lastMessage}
                            </p>
                          </div>
                          
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm">
                              <Phone className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Video className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Input placeholder="Type your message..." className="flex-1" />
                        <Button variant="outline" size="sm">
                          <Paperclip className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Smile className="w-4 h-4" />
                        </Button>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="calls" className="space-y-4">
                    <div className="text-center py-12">
                      <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                        <Phone className="w-12 h-12 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Voice Call Management</h3>
                      <p className="text-gray-500 mb-6">Manage your voice calls and call history with enterprise-grade features</p>
                      <div className="flex gap-3 justify-center">
                        <Button className="bg-green-600 hover:bg-green-700 text-white">
                          <Phone className="w-4 h-4 mr-2" />
                          Start New Call
                        </Button>
                        <Button variant="outline">
                          <Clock className="w-4 h-4 mr-2" />
                          Call History
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="meetings" className="space-y-4">
                    <div className="text-center py-12">
                      <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                        <Video className="w-12 h-12 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Video Conference Center</h3>
                      <p className="text-gray-500 mb-6">Schedule and join high-definition video conferences with screen sharing</p>
                      <div className="flex gap-3 justify-center">
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                          <Video className="w-4 h-4 mr-2" />
                          Start Meeting
                        </Button>
                        <Button variant="outline">
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule Meeting
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="notifications" className="space-y-4">
                    <div className="space-y-3">
                      {notifications.map((notification) => (
                        <div key={notification.id} className={`p-4 border rounded-lg transition-colors ${
                          !notification.read 
                            ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' 
                            : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}>
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3 flex-1">
                              <div className={`p-2 rounded-lg ${
                                notification.type === 'message' ? 'bg-blue-100 dark:bg-blue-900/30' :
                                notification.type === 'meeting' ? 'bg-purple-100 dark:bg-purple-900/30' :
                                'bg-green-100 dark:bg-green-900/30'
                              }`}>
                                {notification.type === 'message' && <MessageSquare className="w-4 h-4 text-blue-600" />}
                                {notification.type === 'meeting' && <Calendar className="w-4 h-4 text-purple-600" />}
                                {notification.type === 'update' && <CheckCircle className="w-4 h-4 text-green-600" />}
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-sm text-gray-900 dark:text-white">{notification.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                  {notification.description}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500">{notification.time}</span>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Actions & Status */}
          <div className="xl:col-span-1 space-y-6">
            {/* Team Status */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">Team Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Online</p>
                      <p className="text-xs text-gray-500">24 team members</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Busy</p>
                      <p className="text-xs text-gray-500">8 team members</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Offline</p>
                      <p className="text-xs text-gray-500">3 team members</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start gap-3" variant="outline">
                  <MessageSquare className="w-4 h-4" />
                  Broadcast Message
                </Button>
                <Button className="w-full justify-start gap-3" variant="outline">
                  <Users className="w-4 h-4" />
                  Create Group Chat
                </Button>
                <Button className="w-full justify-start gap-3" variant="outline">
                  <Video className="w-4 h-4" />
                  Emergency Meeting
                </Button>
                <Button className="w-full justify-start gap-3" variant="outline">
                  <Bell className="w-4 h-4" />
                  Send Alert
                </Button>
                <Button className="w-full justify-start gap-3" variant="outline">
                  <Building className="w-4 h-4" />
                  Project Updates
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">New message received</p>
                      <p className="text-xs text-gray-500">Austin Medical Group - 2 min ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Video call completed</p>
                      <p className="text-xs text-gray-500">Project Team - 15 min ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Meeting scheduled</p>
                      <p className="text-xs text-gray-500">Site inspection - 1 hour ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedCommunications;