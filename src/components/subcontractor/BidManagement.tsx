import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  DollarSign,
  Calendar,
  MapPin,
  Building,
  Eye,
  Download,
  Upload,
  Edit,
  Trash2,
  AlertCircle,
  TrendingUp,
  Filter,
  Plus,
  Target,
  Award,
  Activity
} from 'lucide-react';

const BidManagement = () => {
  const [activeTab, setActiveTab] = useState('active');

  const activeBids = [
    {
      id: '1',
      projectName: 'Downtown Medical Center Expansion',
      gc: 'Turner Construction',
      location: 'Austin, TX',
      bidAmount: '$2,750,000',
      deadline: 'Oct 24, 2023',
      status: 'draft',
      daysLeft: 3,
      lastModified: '2 hours ago'
    },
    {
      id: '2',
      projectName: 'Riverside High School Renovation',
      gc: 'Skanska',
      location: 'San Marcos, TX',
      bidAmount: '$825,000',
      deadline: 'Oct 28, 2023',
      status: 'submitted',
      daysLeft: 7,
      lastModified: '1 day ago'
    },
    {
      id: '3',
      projectName: 'The Aurora Apartments Phase 2',
      gc: 'D.R. Horton',
      location: 'Austin, TX',
      bidAmount: '$1,150,000',
      deadline: 'Nov 02, 2023',
      status: 'in-review',
      daysLeft: 12,
      lastModified: '3 days ago'
    }
  ];

  const completedBids = [
    {
      id: '4',
      projectName: 'City Center Office Complex',
      gc: 'Hensel Phelps',
      location: 'Dallas, TX',
      bidAmount: '$1,950,000',
      result: 'won',
      completedDate: 'Oct 15, 2023',
      margin: '+$125,000'
    },
    {
      id: '5',
      projectName: 'Westside Shopping Mall',
      gc: 'McCarthy Building',
      location: 'Houston, TX',
      bidAmount: '$3,200,000',
      result: 'lost',
      completedDate: 'Oct 10, 2023',
      reason: 'Price too high'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'draft':
        return <Badge className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300">Draft</Badge>;
      case 'submitted':
        return <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">Submitted</Badge>;
      case 'in-review':
        return <Badge className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300">In Review</Badge>;
      case 'won':
        return <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">Won</Badge>;
      case 'lost':
        return <Badge className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">Lost</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-black tracking-tight mb-2">Bid Management</h1>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              Track and manage all your project bids in one place
            </p>
          </div>
          <Button className="bg-primary hover:bg-yellow-400 text-black font-semibold">
            <FileText className="w-4 h-4 mr-2" />
            Create New Bid
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Active Bids</p>
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-xs font-medium text-green-600 mt-1">+3 this week</p>
            </CardContent>
          </Card>

          <Card className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Win Rate</p>
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-2xl font-bold">24%</p>
              <p className="text-xs font-medium text-green-600 mt-1">+2.5% this month</p>
            </CardContent>
          </Card>

          <Card className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Pending Review</p>
                <Eye className="w-5 h-5 text-yellow-600" />
              </div>
              <p className="text-2xl font-bold">5</p>
              <p className="text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark mt-1">Awaiting GC response</p>
            </CardContent>
          </Card>

          <Card className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Total Value</p>
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-2xl font-bold">$8.2M</p>
              <p className="text-xs font-medium text-green-600 mt-1">Active bids value</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <TabsList className="grid w-full sm:w-auto grid-cols-3">
              <TabsTrigger value="active">Active Bids</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
            </TabsList>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by: Deadline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="deadline">Deadline</SelectItem>
                <SelectItem value="amount">Bid Amount</SelectItem>
                <SelectItem value="modified">Last Modified</SelectItem>
                <SelectItem value="status">Status</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <TabsContent value="active" className="space-y-4">
            {activeBids.map((bid) => (
              <Card key={bid.id} className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="size-12 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-lg leading-tight">{bid.projectName}</h3>
                          {getStatusBadge(bid.status)}
                          {bid.daysLeft <= 5 && (
                            <div className="flex items-center gap-1 text-red-600 text-sm">
                              <AlertCircle className="w-4 h-4" />
                              <span className="font-medium">{bid.daysLeft} days left</span>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary-light dark:text-text-secondary-dark mb-3">
                          <span className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {bid.gc}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {bid.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Due: {bid.deadline}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="font-semibold text-green-600">Bid Amount: {bid.bidAmount}</span>
                          <span className="text-text-secondary-light dark:text-text-secondary-dark">
                            Last modified: {bid.lastModified}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 min-w-[200px]">
                      {bid.status === 'draft' && (
                        <>
                          <Button className="bg-primary text-black font-semibold hover:bg-yellow-400">
                            <Edit className="w-4 h-4 mr-2" />
                            Continue Editing
                          </Button>
                          <Button variant="outline" size="sm">
                            <Upload className="w-4 h-4 mr-2" />
                            Submit
                          </Button>
                        </>
                      )}
                      {bid.status === 'submitted' && (
                        <>
                          <Button variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            View Bid
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </>
                      )}
                      {bid.status === 'in-review' && (
                        <>
                          <Button variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            View Status
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {completedBids.map((bid) => (
              <Card key={bid.id} className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="size-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex-shrink-0 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-gray-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-lg leading-tight">{bid.projectName}</h3>
                          {getStatusBadge(bid.result)}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary-light dark:text-text-secondary-dark mb-3">
                          <span className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {bid.gc}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {bid.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Completed: {bid.completedDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="font-semibold">Bid Amount: {bid.bidAmount}</span>
                          {bid.result === 'won' && bid.margin && (
                            <span className="text-green-600 font-semibold">Margin: {bid.margin}</span>
                          )}
                          {bid.result === 'lost' && bid.reason && (
                            <span className="text-red-600">Reason: {bid.reason}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 min-w-[200px]">
                      <Button variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="templates" className="space-y-4">
            <Card className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 text-text-secondary-light dark:text-text-secondary-dark mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">No Templates Yet</h3>
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                  Create bid templates to speed up your proposal process
                </p>
                <Button className="bg-primary hover:bg-yellow-400 text-black font-semibold">
                  Create First Template
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BidManagement;