import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Search,
  MapPin,
  Filter,
  Building2,
  Calendar,
  ArrowUpRight,
  DollarSign,
  Briefcase,
  Star,
  Zap,
  LayoutGrid,
  List as ListIcon,
  Map as MapIcon,
  ChevronRight,
  Bookmark
} from 'lucide-react';

const ProjectDiscovery = () => {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [budgetRange, setBudgetRange] = useState([500000]);

  const projects = [
    {
      id: 1,
      name: 'Downtown Commercial Plaza Reno',
      location: 'Austin, TX',
      distance: '2.4 mi',
      budget: '$2.4M - $3.1M',
      type: 'Commercial',
      posted: '2d ago',
      deadline: 'Oct 30',
      matchScore: 94,
      isHot: true,
      tags: ['Renovation', 'Electrical', 'HVAC'],
      description: 'Complete renovation of 3-story commercial plaza including new electrical systems, HVAC overhaul, and exterior facade updates.'
    },
    {
      id: 2,
      name: 'Oak Ridge Medical Center Annex',
      location: 'Round Rock, TX',
      distance: '15 mi',
      budget: '$8.5M - $10M',
      type: 'Healthcare',
      posted: '5h ago',
      deadline: 'Nov 14',
      matchScore: 88,
      isHot: false,
      tags: ['New Construction', 'Medical', 'Concrete'],
      description: 'Ground-up construction of a 12,000 sq ft medical annex. Requires specialized medical gas systems and clean room standards.'
    },
    {
      id: 3,
      name: 'Skyline Heights Apartments',
      location: 'Austin, TX',
      distance: '5 mi',
      budget: '$15M+',
      type: 'Residential',
      posted: '1d ago',
      deadline: 'Nov 01',
      matchScore: 76,
      isHot: true,
      tags: ['Multi-family', 'Framing', 'Plumbing'],
      description: 'Phase 2 of Skyline Heights luxury apartments. 200 units. Bidding for framing, plumbing, and drywall packages.'
    },
    {
      id: 4,
      name: 'TechPark Data Center Upgrade',
      location: 'San Marcos, TX',
      distance: '32 mi',
      budget: '$4.2M',
      type: 'Industrial',
      posted: '3d ago',
      deadline: 'Oct 25',
      matchScore: 65,
      isHot: false,
      tags: ['Industrial', 'Cooling', 'Security'],
      description: 'Upgrade of cooling infrastructure and security systems for Tier 3 data center.'
    }
  ];

  return (
    <div className="flex h-full w-full flex-col bg-slate-50/50 dark:bg-slate-950/50">

      {/* Search Header */}
      <div className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-5 sticky top-0 z-10 transition-all shadow-sm">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  Project Discovery <Badge className="bg-yellow-500 hover:bg-yellow-600 text-yellow-950 border-0">PRO</Badge>
                </h1>
                <p className="text-slate-500 text-sm mt-1">Find and bid on premium construction opportunities.</p>
              </div>
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-800">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-8 px-3 rounded-md ${viewMode === 'list' ? 'bg-white shadow-sm text-slate-900 dark:bg-slate-800 dark:text-white' : 'text-slate-500'}`}
                  onClick={() => setViewMode('list')}
                >
                  <ListIcon className="h-4 w-4 mr-2" /> List
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-8 px-3 rounded-md ${viewMode === 'map' ? 'bg-white shadow-sm text-slate-900 dark:bg-slate-800 dark:text-white' : 'text-slate-500'}`}
                  onClick={() => setViewMode('map')}
                >
                  <MapIcon className="h-4 w-4 mr-2" /> Map
                </Button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search projects by keyword, CSI code, or owner..."
                  className="pl-9 bg-slate-50 border-slate-200 focus:bg-white focus:ring-yellow-500/20 focus:border-yellow-500 transition-all dark:bg-slate-900 dark:border-slate-800"
                />
              </div>
              <div className="flex gap-3">
                <Select defaultValue="austin">
                  <SelectTrigger className="w-[160px] bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800">
                    <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="austin">Austin, TX (+50mi)</SelectItem>
                    <SelectItem value="dallas">Dallas, TX</SelectItem>
                    <SelectItem value="houston">Houston, TX</SelectItem>
                    <SelectItem value="sa">San Antonio, TX</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800">
                  <Filter className="w-4 h-4 mr-2" /> Filters
                </Button>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-yellow-950 font-semibold shadow-sm shadow-yellow-200 dark:shadow-none">
                  Search Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 xl:grid-cols-4 gap-0 h-full min-h-[calc(100vh-180px)]">

          {/* Filters Sidebar */}
          <div className="hidden xl:block col-span-1 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 space-y-8">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Project Type</h3>
              <div className="space-y-3">
                {['Commercial', 'Residential', 'Industrial', 'Healthcare', 'Education', 'Government'].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox id={type} />
                    <label htmlFor={type} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600 dark:text-slate-400">
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Budget Estimate</h3>
              <div className="px-2">
                <Slider
                  defaultValue={[500000]}
                  max={20000000}
                  step={100000}
                  className="py-4"
                  onValueChange={setBudgetRange}
                />
              </div>
              <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                <span>$0</span>
                <span>${(budgetRange[0] / 1000000).toFixed(1)}M+</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">CSI Divisions</h3>
              <div className="space-y-3">
                {['03 - Concrete', '09 - Finishes', '22 - Plumbing', '26 - Electrical', '31 - Earthwork'].map((csi) => (
                  <div key={csi} className="flex items-center space-x-2">
                    <Checkbox id={csi} />
                    <label htmlFor={csi} className="text-sm font-medium leading-none text-slate-600 dark:text-slate-400">
                      {csi}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <Button variant="outline" className="w-full">Save Search Alert</Button>
            </div>
          </div>

          {/* Results List */}
          <div className="col-span-1 xl:col-span-3 bg-slate-50/50 dark:bg-slate-950/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-slate-500">Showing <span className="font-semibold text-slate-900 dark:text-white">248</span> projects near Austin, TX</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">Sort by:</span>
                <Select defaultValue="match">
                  <SelectTrigger className="h-8 w-[140px] text-xs bg-white dark:bg-slate-900">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="match">Best Match</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="budget">Highest Budget</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              {projects.map((project) => (
                <Card key={project.id} className="group hover:shadow-md transition-all duration-200 border-slate-200 dark:border-slate-800 overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Match Score Indicator */}
                    <div className="w-full md:w-2 bg-slate-100 h-1 md:h-auto">
                      <div
                        className={`h-full md:w-full bg-gradient-to-b ${project.matchScore > 90 ? 'from-green-500 to-green-600' :
                          project.matchScore > 75 ? 'from-yellow-400 to-yellow-500' : 'from-slate-300 to-slate-400'
                          }`}
                        style={{ width: `${project.matchScore}%` }}
                      ></div>
                    </div>

                    <div className="flex-1 p-5 md:p-6">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {project.isHot && (
                              <Badge className="bg-red-50 text-red-600 border-red-100 flex items-center gap-1">
                                <Zap className="w-3 h-3 fill-current" /> Hot Lead
                              </Badge>
                            )}
                            <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> Posted {project.posted}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer">
                            {project.name}
                          </h3>
                          <div className="flex items-center gap-4 mt-2 text-sm text-slate-600 dark:text-slate-400">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4 text-slate-400" />
                              {project.location} <span className="text-slate-400">({project.distance})</span>
                            </div>
                            <div className="flex items-center gap-1 font-medium text-slate-900 dark:text-slate-200">
                              <Briefcase className="w-4 h-4 text-slate-400" />
                              {project.type}
                            </div>
                          </div>
                          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-3xl">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-4 min-w-[180px]">
                          <div className="text-right">
                            <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">Est. Budget</p>
                            <p className="text-lg font-bold text-slate-900 dark:text-white">{project.budget}</p>
                          </div>

                          <div className="flex flex-col items-end gap-1">
                            <div className="flex items-center gap-1 text-sm font-semibold text-green-600 dark:text-green-500">
                              <Star className="w-4 h-4 fill-current" /> {project.matchScore}% Match
                            </div>
                            <p className="text-xs text-slate-400">Based on your profile</p>
                          </div>

                          <div className="flex gap-2 w-full md:w-auto mt-2">
                            <Button variant="outline" size="icon" className="shrink-0">
                              <Bookmark className="w-4 h-4" />
                            </Button>
                            <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
                              View Details <ArrowUpRight className="ml-2 w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDiscovery;