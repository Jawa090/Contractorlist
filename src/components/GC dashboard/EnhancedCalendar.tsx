import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Calendar,
  Clock,
  Plus,
  Filter,
  Search,
  Users,
  MapPin,
  Video,
  Phone,
  Building,
  AlertTriangle,
  CheckCircle,
  MoreVertical,
  Edit,
  Trash2,
  Copy,
  Share2
} from 'lucide-react';

interface CalendarEvent {
  id: string;
  title: string;
  type: 'meeting' | 'inspection' | 'deadline' | 'call' | 'site-visit';
  date: Date;
  startTime: string;
  endTime: string;
  location?: string;
  attendees: string[];
  project: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled';
  description?: string;
}

const EnhancedCalendar = () => {
  const [activeView, setActiveView] = useState('month');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const events: CalendarEvent[] = [
    {
      id: '1',
      title: 'Site Inspection - Medical Center',
      type: 'inspection',
      date: new Date('2024-03-15'),
      startTime: '09:00',
      endTime: '11:00',
      location: 'Austin Medical Center, Austin TX',
      attendees: ['John Smith', 'Sarah Johnson', 'Client Representative'],
      project: 'Austin Medical Center',
      priority: 'high',
      status: 'confirmed',
      description: 'Final inspection of HVAC installation and electrical systems'
    },
    {
      id: '2',
      title: 'Client Meeting - Office Complex',
      type: 'meeting',
      date: new Date('2024-03-16'),
      startTime: '14:00',
      endTime: '15:30',
      location: 'Metro Properties Office',
      attendees: ['Lisa Rodriguez', 'David Wilson', 'Metro Properties Team'],
      project: 'Downtown Office Complex',
      priority: 'critical',
      status: 'scheduled',
      description: 'Progress review and milestone planning'
    },
    {
      id: '3',
      title: 'Project Deadline - Shopping Center',
      type: 'deadline',
      date: new Date('2024-03-30'),
      startTime: '17:00',
      endTime: '17:00',
      attendees: ['Robert Brown', 'Project Team'],
      project: 'Riverside Shopping Center',
      priority: 'critical',
      status: 'scheduled',
      description: 'Final completion deadline for tenant fit-out'
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'meeting': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'inspection': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'deadline': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'call': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'site-visit': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-600 bg-red-100 dark:bg-red-900/30';
      case 'high': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/30';
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30';
      case 'low': return 'text-green-600 bg-green-100 dark:bg-green-900/30';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30';
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'meeting': return <Users className="w-4 h-4" />;
      case 'inspection': return <CheckCircle className="w-4 h-4" />;
      case 'deadline': return <AlertTriangle className="w-4 h-4" />;
      case 'call': return <Phone className="w-4 h-4" />;
      case 'site-visit': return <Building className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Calendar & Scheduling
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Advanced project scheduling and team coordination platform
            </p>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">Calendar Sync Active</span>
              </div>
              <div className="text-sm text-gray-500">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="border-gray-300 hover:border-gray-400">
              <Filter className="w-4 h-4 mr-2" />
              Filter Events
            </Button>
            <Button variant="outline" className="border-gray-300 hover:border-gray-400">
              <Share2 className="w-4 h-4 mr-2" />
              Share Calendar
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
              <Plus className="w-4 h-4 mr-2" />
              Schedule Event
            </Button>
          </div>
        </div>

        {/* Calendar Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  Today
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">8</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Scheduled Events</p>
                <p className="text-xs text-gray-500 mt-1">3 high priority</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  This Week
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">24</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Site Inspections</p>
                <p className="text-xs text-gray-500 mt-1">6 completed</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                  This Month
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">156</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Team Meetings</p>
                <p className="text-xs text-gray-500 mt-1">89% attendance rate</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                  Upcoming
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Critical Deadlines</p>
                <p className="text-xs text-gray-500 mt-1">Next 30 days</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Calendar Interface */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Left Column - Calendar View */}
          <div className="xl:col-span-3">
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">Project Calendar</CardTitle>
                  <div className="flex gap-2">
                    <div className="flex gap-1 border rounded-lg p-1">
                      <Button
                        variant={activeView === 'day' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setActiveView('day')}
                      >
                        Day
                      </Button>
                      <Button
                        variant={activeView === 'week' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setActiveView('week')}
                      >
                        Week
                      </Button>
                      <Button
                        variant={activeView === 'month' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setActiveView('month')}
                      >
                        Month
                      </Button>
                    </div>
                    <Button variant="outline" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs value={activeView} onValueChange={setActiveView}>
                  <TabsContent value="month" className="space-y-4">
                    <div className="text-center py-12">
                      <Calendar className="w-20 h-20 text-gray-400 mx-auto mb-6" />
                      <h3 className="text-xl font-bold mb-2">Monthly Calendar View</h3>
                      <p className="text-gray-500 mb-6">Interactive monthly calendar with project events and deadlines</p>
                      <div className="grid grid-cols-7 gap-2 text-sm">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                          <div key={day} className="p-2 font-semibold text-gray-600 dark:text-gray-400">
                            {day}
                          </div>
                        ))}
                        {Array.from({ length: 35 }, (_, i) => (
                          <div key={i} className="p-2 h-20 border border-gray-200 dark:border-gray-700 rounded">
                            <span className="text-gray-500">{((i % 31) + 1)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="week" className="space-y-4">
                    <div className="text-center py-12">
                      <Clock className="w-20 h-20 text-gray-400 mx-auto mb-6" />
                      <h3 className="text-xl font-bold mb-2">Weekly Schedule View</h3>
                      <p className="text-gray-500">Detailed weekly view with hourly time slots</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="day" className="space-y-4">
                    <div className="text-center py-12">
                      <CheckCircle className="w-20 h-20 text-gray-400 mx-auto mb-6" />
                      <h3 className="text-xl font-bold mb-2">Daily Agenda View</h3>
                      <p className="text-gray-500">Focused daily schedule with detailed event information</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Events & Quick Actions */}
          <div className="xl:col-span-1 space-y-6">
            {/* Upcoming Events */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {events.slice(0, 3).map((event) => (
                    <div key={event.id} className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${
                          event.type === 'meeting' ? 'bg-blue-100 dark:bg-blue-900/30' :
                          event.type === 'inspection' ? 'bg-green-100 dark:bg-green-900/30' :
                          'bg-red-100 dark:bg-red-900/30'
                        }`}>
                          {getEventIcon(event.type)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm">{event.title}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge className={getEventTypeColor(event.type)}>
                              {event.type}
                            </Badge>
                            <Badge className={getPriorityColor(event.priority)}>
                              {event.priority}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                            <Clock className="w-3 h-3" />
                            <span>{event.startTime} - {event.endTime}</span>
                          </div>
                          {event.location && (
                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                              <MapPin className="w-3 h-3" />
                              <span>{event.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Schedule */}
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
              <CardHeader>
                <CardTitle className="text-lg">Quick Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start gap-3 bg-purple-600 hover:bg-purple-700 text-white">
                  <Plus className="w-4 h-4" />
                  New Meeting
                </Button>
                <Button className="w-full justify-start gap-3" variant="outline">
                  <CheckCircle className="w-4 h-4" />
                  Schedule Inspection
                </Button>
                <Button className="w-full justify-start gap-3" variant="outline">
                  <Phone className="w-4 h-4" />
                  Book Call
                </Button>
                <Button className="w-full justify-start gap-3" variant="outline">
                  <Video className="w-4 h-4" />
                  Video Conference
                </Button>
              </CardContent>
            </Card>

            {/* Today's Schedule */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">Today's Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600">9:00</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Site Inspection</p>
                      <p className="text-xs text-gray-500">Austin Medical Center</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-green-600">14:00</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Client Meeting</p>
                      <p className="text-xs text-gray-500">Metro Properties Office</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-purple-600">16:30</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Team Standup</p>
                      <p className="text-xs text-gray-500">Video Conference</p>
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

export default EnhancedCalendar;