import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Building,
  Shield,
  Users,
  Bell,
  CreditCard,
  Camera,
  Plus,
  Settings,
  MoreVertical,
  Edit
} from 'lucide-react';

const AccountSettings = () => {
  const licenses = [
    {
      name: 'General Contractor License',
      details: 'State of Texas • #GC-994821',
      status: 'Active',
      statusColor: 'green',
      icon: Shield
    },
    {
      name: 'OSHA 30 Certification',
      details: 'Safety Compliance • Exp: Dec 2024',
      status: 'Expires Soon',
      statusColor: 'yellow',
      icon: Shield
    }
  ];

  const teamMembers = [
    {
      name: 'John Doe (You)',
      role: 'Admin',
      avatar: '/api/placeholder/36/36',
      initials: 'JD'
    },
    {
      name: 'Sarah Miller',
      role: 'Estimator',
      avatar: null,
      initials: 'SM'
    },
    {
      name: 'Robert Johnson',
      role: 'Project Manager',
      avatar: null,
      initials: 'RJ'
    }
  ];

  const notifications = [
    {
      title: 'New Bid Opportunities',
      description: 'Daily digest of matching projects',
      enabled: true
    },
    {
      title: 'AI Copilot Alerts',
      description: 'Critical compliance & risk alerts',
      enabled: true
    },
    {
      title: 'System Updates',
      description: 'Platform maintenance notices',
      enabled: true
    }
  ];

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
          <div>
            <div className="text-sm font-medium text-gray-500 flex items-center gap-2 mb-1">
              <span>Settings</span>
              <span>›</span>
              <span className="text-gray-900 font-semibold">Account & Billing</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Account Settings</h2>
            <p className="text-gray-500 mt-1">
              Manage your company profile, compliance, team access, and billing.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Company Profile */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-gray-400" />
                  <CardTitle>Company Profile</CardTitle>
                </div>
                <span className="text-xs text-gray-400">Visible on Directory</span>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Logo Upload */}
                <div className="flex items-start gap-6">
                  <div className="shrink-0 relative group cursor-pointer">
                    <Avatar className="size-20 border-2 border-white shadow-sm">
                      <AvatarImage src="/api/placeholder/80/80" />
                      <AvatarFallback className="text-lg font-bold">AC</AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <Label className="text-sm font-medium">Company Logo</Label>
                    <p className="text-xs text-gray-500">JPG, GIF or PNG. 1MB Max.</p>
                    <Button variant="link" className="text-blue-600 p-0 h-auto">
                      Upload new picture
                    </Button>
                  </div>
                </div>

                {/* Company Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label>Company Name</Label>
                    <Input defaultValue="Acme Construction" />
                  </div>
                  <div className="space-y-1">
                    <Label>Federal Tax ID (EIN)</Label>
                    <Input defaultValue="XX-XXXXXXX" disabled />
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <Label>Address</Label>
                    <Input defaultValue="1234 Build Street, Suite 100" />
                  </div>
                  <div className="space-y-1">
                    <Label>City</Label>
                    <Input defaultValue="Austin" />
                  </div>
                  <div className="space-y-1">
                    <Label>State & Zip</Label>
                    <div className="flex gap-2">
                      <Input defaultValue="TX" className="w-20" />
                      <Input defaultValue="78701" className="flex-1" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label>Business Email</Label>
                    <Input type="email" defaultValue="contact@acmeconstruction.com" />
                  </div>
                  <div className="space-y-1">
                    <Label>Website</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 bg-gray-50 text-gray-500 text-sm">
                        https://
                      </span>
                      <Input
                        defaultValue="acmeconstruction.com"
                        className="rounded-l-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <Label>About the Company</Label>
                  <Textarea
                    rows={4}
                    defaultValue="Acme Construction has been serving the Austin area for over 20 years, specializing in commercial renovation and new builds..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Licenses & Certifications */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-gray-400" />
                  <CardTitle>Licenses & Certifications</CardTitle>
                </div>
                <Button variant="link" className="text-blue-600 flex items-center gap-1">
                  <Plus className="w-4 h-4" />
                  Add New
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {licenses.map((license, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border bg-gray-50">
                      <div className="flex items-center gap-3">
                        <div className={`size-10 ${
                          license.statusColor === 'green' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                        } rounded-lg flex items-center justify-center`}>
                          <license.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900">{license.name}</h4>
                          <p className="text-xs text-gray-500">{license.details}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className={`${
                          license.statusColor === 'green' 
                            ? 'bg-green-50 text-green-700 ring-green-600/20' 
                            : 'bg-yellow-50 text-yellow-700 ring-yellow-600/20'
                        } ring-1 ring-inset`}>
                          {license.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Team Access */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  <CardTitle>Team Access</CardTitle>
                </div>
                <Button variant="link" size="sm" className="text-blue-600">
                  Manage All
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-9">
                        {member.avatar ? (
                          <AvatarImage src={member.avatar} />
                        ) : (
                          <AvatarFallback className="text-xs font-bold">
                            {member.initials}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{member.name}</p>
                        <p className="text-xs text-gray-500">{member.role}</p>
                      </div>
                    </div>
                    {index > 0 && (
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-2 border-dashed">
                  <Plus className="w-4 h-4 mr-2" />
                  Invite Member
                </Button>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-gray-400" />
                  <CardTitle>Notifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {notifications.map((notification, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                      <p className="text-xs text-gray-500">{notification.description}</p>
                    </div>
                    <Switch checked={notification.enabled} />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Plan & Billing */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-gray-400" />
                  <CardTitle>Plan & Billing</CardTitle>
                </div>
                <Badge className="bg-blue-50 text-blue-600">Pro Plan</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border">
                  <div className="h-8 w-12 bg-white rounded border flex items-center justify-center">
                    <span className="font-bold italic text-blue-800 text-xs">VISA</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">•••• 4242</p>
                    <p className="text-xs text-gray-500">Expires 12/25</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Next billing date</span>
                  <span className="font-medium text-gray-900">Nov 01, 2023</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Amount</span>
                  <span className="font-medium text-gray-900">$49.99/mo</span>
                </div>
                <Button variant="link" className="w-full text-center text-blue-600 mt-2">
                  View Billing History
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;