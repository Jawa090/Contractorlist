import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Search,
  MapPin,
  Star,
  Filter,
  Phone,
  Mail,
  MoreHorizontal,
  LayoutGrid,
  List as ListIcon,
  ShieldCheck,
  Building2,
  Trophy
} from 'lucide-react';

const Directory = () => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const contractors = [
    {
      id: 1,
      name: 'VoltMaster Electrical Services',
      location: 'Austin, TX',
      distance: '1.2 mi',
      rating: 4.9,
      reviews: 128,
      verified: true,
      tier: 'Gold',
      specialties: ['Electrical', 'Fire Alarm', 'Lighting'],
      status: 'Available',
      projects: 45,
      avatar: 'VM'
    },
    {
      id: 2,
      name: 'Apex Wiring & Power',
      location: 'San Antonio, TX',
      distance: '45 mi',
      rating: 4.5,
      reviews: 42,
      verified: true,
      tier: 'Silver',
      specialties: ['Electrical', 'Low Voltage'],
      status: 'Busy',
      projects: 12,
      avatar: 'AW'
    },
    {
      id: 3,
      name: 'Bright Future Solar',
      location: 'Austin, TX',
      distance: '8 mi',
      rating: 4.8,
      reviews: 8,
      verified: true,
      tier: 'Bronze',
      specialties: ['Solar', 'Green Energy'],
      status: 'Available',
      projects: 5,
      avatar: 'BF'
    },
    {
      id: 4,
      name: 'Titan Concrete Pros',
      location: 'Dallas, TX',
      distance: '120 mi',
      rating: 4.7,
      reviews: 215,
      verified: true,
      tier: 'Platinum',
      specialties: ['Concrete', 'Foundation'],
      status: 'Available',
      projects: 89,
      avatar: 'TC'
    }
  ];

  return (
    <div className="flex h-full w-full flex-col bg-slate-50/50 dark:bg-slate-950/50">
      {/* Sub-Header / Search Area */}
      <div className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-6 transition-all sticky top-0 z-10">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                Contractor Directory
                <Badge className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 ml-2">
                  15k+ Pros
                </Badge>
              </h1>
              <p className="text-slate-500 text-sm mt-1">Connect with qualified subcontractors for your next project.</p>
            </div>
          </div>

          {/* Search Inputs */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search by trade, name, or CSI code..."
                className="pl-9 h-10 bg-slate-50 border-slate-200 focus:bg-white transition-all dark:bg-slate-900 dark:border-slate-800"
              />
            </div>
            <div className="w-full md:w-[250px] relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Location"
                defaultValue="Austin, TX"
                className="pl-9 h-10 bg-slate-50 border-slate-200 focus:bg-white transition-all dark:bg-slate-900 dark:border-slate-800"
              />
            </div>
            <Select defaultValue="best">
              <SelectTrigger className="w-full md:w-[180px] h-10 bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="best">Best Match</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="distance">Nearest</SelectItem>
              </SelectContent>
            </Select>
            <Button className="h-10 px-6 bg-yellow-500 hover:bg-yellow-600 text-yellow-950 font-semibold shadow-sm">
              Find Pros
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="hidden lg:block space-y-8 pr-4">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-4">
                <Filter className="h-4 w-4" /> Filter Results
              </h3>

              <div className="space-y-6">
                <div className="space-y-3">
                  <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Trades</Label>
                  <div className="space-y-2">
                    {['Electrical', 'Plumbing', 'HVAC', 'Concrete', 'Masonry', 'Drywall'].map((trade) => (
                      <div key={trade} className="flex items-center space-x-2">
                        <Checkbox id={trade} />
                        <label htmlFor={trade} className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300">
                          {trade}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Status</Label>
                  <div className="space-y-2">
                    {['Available Now', 'Accepting Bids', 'Busy'].map((status) => (
                      <div key={status} className="flex items-center space-x-2">
                        <Checkbox id={status} />
                        <label htmlFor={status} className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300">
                          {status}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tier</Label>
                  <div className="space-y-2">
                    {['Platinum', 'Gold', 'Silver', 'Verified'].map((tier) => (
                      <div key={tier} className="flex items-center space-x-2">
                        <Checkbox id={tier} />
                        <label htmlFor={tier} className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300">
                          {tier}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="outline" className="w-full justify-center">Reset Filters</Button>
            </div>
          </div>

          {/* Results List (Rows) */}
          <div className="lg:col-span-3 space-y-4">
            {contractors.map((contractor) => (
              <Card key={contractor.id} className="group hover:shadow-md transition-all duration-200 border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900">
                <div className="p-5 flex flex-col md:flex-row gap-6 items-start md:items-center">

                  {/* Avatar/Image Section */}
                  <div className="shrink-0 relative">
                    <div className="h-16 w-16 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl font-bold text-slate-500 border border-slate-200 dark:border-slate-700">
                      {contractor.avatar}
                    </div>
                    {contractor.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-900 rounded-full p-0.5">
                        <ShieldCheck className="h-5 w-5 text-blue-500 fill-blue-500/20" />
                      </div>
                    )}
                  </div>

                  {/* Main Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                      <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-yellow-600 transition-colors flex items-center gap-2">
                        {contractor.name}
                        {contractor.tier === 'Platinum' && <Badge className="bg-slate-900 text-white border-0 text-[10px] h-5">Platinum</Badge>}
                        {contractor.tier === 'Gold' && <Badge className="bg-yellow-100 text-yellow-800 border-0 text-[10px] h-5">Gold</Badge>}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="font-bold text-slate-900 dark:text-white">{contractor.rating}</span>
                        <span className="text-slate-400 text-sm">({contractor.reviews})</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        {contractor.location} <span className="text-xs">({contractor.distance})</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Building2 className="h-4 w-4 text-slate-400" />
                        {contractor.projects} Projects
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Trophy className="h-4 w-4 text-slate-400" />
                        {contractor.tier} Member
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {contractor.specialties.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-300 font-normal border border-slate-100 dark:border-slate-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-row md:flex-col gap-2 shrink-0 w-full md:w-auto mt-2 md:mt-0">
                    <Button className="w-full md:w-32 bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-50 dark:text-slate-900 shadow-sm">
                      View Profile
                    </Button>
                    <Button variant="outline" className="w-full md:w-32">
                      Invite to Bid
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;