import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  Clock,
  MessageSquare,
  Briefcase,
  Plus,
  Search,
  FileText,
  ArrowUpRight,
  ArrowDownRight,
  Activity
} from 'lucide-react';

const SubcontractorOverview = () => {
  // Simplified metrics state
  const [metrics] = useState({
    activeProjects: 3,
    pendingBids: 5,
    recentMessages: 12,
    winRate: 24.5
  });

  // Recent activity data (limited to 5 items)
  const recentActivity = [
    {
      id: 1,
      type: 'bid_response',
      title: 'Bid approved for Downtown Medical Center',
      time: '2 hours ago',
      status: 'positive'
    },
    {
      id: 2,
      type: 'project_update',
      title: 'New document uploaded to Riverside School project',
      time: '4 hours ago',
      status: 'neutral'
    },
    {
      id: 3,
      type: 'message',
      title: 'New message from Turner Construction',
      time: '6 hours ago',
      status: 'neutral'
    },
    {
      id: 4,
      type: 'bid_response',
      title: 'Bid rejected for Aurora Apartments Phase 2',
      time: '1 day ago',
      status: 'negative'
    },
    {
      id: 5,
      type: 'project_update',
      title: 'Project deadline updated for City Hall renovation',
      time: '2 days ago',
      status: 'neutral'
    }
  ];

  // Key metrics configuration
  const stats = [
    {
      title: 'Active Projects',
      value: metrics.activeProjects.toString(),
      change: '+1 new',
      changeType: 'positive',
      icon: Briefcase,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Pending Bids',
      value: metrics.pendingBids.toString(),
      change: '+2 today',
      changeType: 'positive',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Recent Messages',
      value: metrics.recentMessages.toString(),
      change: '+4 unread',
      changeType: 'positive',
      icon: MessageSquare,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Win Rate',
      value: `${metrics.winRate}%`,
      change: '+2.5%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'bid_response': return FileText;
      case 'project_update': return Briefcase;
      case 'message': return MessageSquare;
      default: return Activity;
    }
  };

  const getActivityColor = (status: string) => {
    switch (status) {
      case 'positive': return 'text-green-600';
      case 'negative': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="p-6 lg:p-8 space-y-8 bg-slate-50/50 dark:bg-slate-950/50 min-h-screen">
      {/* Clean Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Good morning, Acme Construction</h1>
            <Badge className="bg-green-100 text-green-800 font-semibold">
              <Activity className="w-3 h-3 mr-1" />
              Active
            </Badge>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            You have <span className="font-semibold text-orange-600">5 new project matches</span> ready for review
          </p>
        </div>
        
        {/* Quick Action Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Plus className="w-4 h-4" />
            New Bid
          </Button>
          <Button variant="outline" className="gap-2">
            <MessageSquare className="w-4 h-4" />
            View Messages
          </Button>
          <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold gap-2 shadow-lg">
            <Search className="w-5 h-5" />
            Find Projects
          </Button>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card 
            key={stat.title} 
            className="bg-white dark:bg-slate-900 hover:shadow-lg transition-all duration-300 border-0 shadow-sm"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.bgColor} dark:bg-opacity-20`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`text-sm font-medium flex items-center gap-1 ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-500'
                }`}>
                  {stat.changeType === 'positive' ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-white dark:bg-slate-900 border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recent Activity</h2>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              
              <div className="space-y-4">
                {recentActivity.map((activity) => {
                  const IconComponent = getActivityIcon(activity.type);
                  return (
                    <div key={activity.id} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                      <div className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700">
                        <IconComponent className={`w-4 h-4 ${getActivityColor(activity.status)}`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white">{activity.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats Sidebar */}
        <div className="space-y-6">
          <Card className="bg-white dark:bg-slate-900 border-0 shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Projects Won This Month</span>
                  <span className="font-bold text-green-600">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Average Bid Response Time</span>
                  <span className="font-bold text-blue-600">2.3 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Total Revenue YTD</span>
                  <span className="font-bold text-purple-600">$450k</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Active Proposals</span>
                  <span className="font-bold text-orange-600">3</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-0 shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Need Help?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Get assistance with bidding, project management, or account settings.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SubcontractorOverview;