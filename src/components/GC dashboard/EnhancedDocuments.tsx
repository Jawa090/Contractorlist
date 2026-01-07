import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  FileText,
  Upload,
  Download,
  Search,
  Filter,
  Plus,
  Folder,
  File,
  Image,
  Video,
  Archive,
  Share2,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Star,
  Clock,
  Users,
  Building
} from 'lucide-react';

interface Document {
  id: string;
  name: string;
  type: 'pdf' | 'doc' | 'image' | 'video' | 'archive';
  size: number;
  uploadedBy: string;
  uploadedAt: Date;
  project: string;
  category: string;
  starred: boolean;
  shared: boolean;
}

const EnhancedDocuments = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const documents: Document[] = [
    {
      id: '1',
      name: 'Austin Medical Center - Architectural Plans.pdf',
      type: 'pdf',
      size: 15728640,
      uploadedBy: 'John Smith',
      uploadedAt: new Date('2024-01-15'),
      project: 'Austin Medical Center',
      category: 'Plans',
      starred: true,
      shared: true
    },
    {
      id: '2',
      name: 'Office Complex - Structural Drawings.dwg',
      type: 'doc',
      size: 8388608,
      uploadedBy: 'Sarah Johnson',
      uploadedAt: new Date('2024-02-01'),
      project: 'Downtown Office Complex',
      category: 'Drawings',
      starred: false,
      shared: true
    },
    {
      id: '3',
      name: 'Site Progress Photos - Week 12.zip',
      type: 'archive',
      size: 52428800,
      uploadedBy: 'Mike Davis',
      uploadedAt: new Date('2024-03-10'),
      project: 'Riverside Shopping Center',
      category: 'Photos',
      starred: false,
      shared: false
    }
  ];

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
      case 'doc':
        return <FileText className="w-5 h-5 text-red-500" />;
      case 'image':
        return <Image className="w-5 h-5 text-green-500" />;
      case 'video':
        return <Video className="w-5 h-5 text-purple-500" />;
      case 'archive':
        return <Archive className="w-5 h-5 text-orange-500" />;
      default:
        return <File className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Document Management
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Enterprise document storage, sharing, and collaboration platform
            </p>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">Cloud Storage Active</span>
              </div>
              <div className="text-sm text-gray-500">
                2.1TB of 5TB used
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="border-gray-300 hover:border-gray-400">
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filter
            </Button>
            <Button variant="outline" className="border-gray-300 hover:border-gray-400">
              <Download className="w-4 h-4 mr-2" />
              Bulk Download
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
              <Upload className="w-4 h-4 mr-2" />
              Upload Documents
            </Button>
          </div>
        </div>

        {/* Document Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  +12 Today
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">1,247</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Documents</p>
                <p className="text-xs text-gray-500 mt-1">Across all projects</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <Share2 className="w-6 h-6 text-green-600" />
                </div>
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  Active
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">89</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Shared Documents</p>
                <p className="text-xs text-gray-500 mt-1">With external clients</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <Folder className="w-6 h-6 text-purple-600" />
                </div>
                <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                  24 Projects
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">156</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Project Folders</p>
                <p className="text-xs text-gray-500 mt-1">Organized by project</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                  <Archive className="w-6 h-6 text-orange-600" />
                </div>
                <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                  2.1TB Used
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">42%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Storage Used</p>
                <p className="text-xs text-gray-500 mt-1">Of 5TB total capacity</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Document Interface */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Left Column - Document List */}
          <div className="xl:col-span-3">
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">Document Library</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input 
                      placeholder="Search documents, projects, or file types..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-gray-50 dark:bg-gray-900" 
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="all">All Files</TabsTrigger>
                    <TabsTrigger value="recent">Recent</TabsTrigger>
                    <TabsTrigger value="shared">Shared</TabsTrigger>
                    <TabsTrigger value="starred">Starred</TabsTrigger>
                    <TabsTrigger value="archived">Archived</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="space-y-4">
                    <div className="space-y-3">
                      {documents.map((doc) => (
                        <div key={doc.id} className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                          <div className="flex items-center gap-3">
                            {getFileIcon(doc.type)}
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 dark:text-white">{doc.name}</h3>
                              <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                                <span>{formatFileSize(doc.size)}</span>
                                <span>•</span>
                                <span>{doc.uploadedBy}</span>
                                <span>•</span>
                                <span>{doc.uploadedAt.toLocaleDateString()}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {doc.project}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {doc.category}
                            </Badge>
                            {doc.starred && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                            {doc.shared && <Share2 className="w-4 h-4 text-blue-500" />}
                          </div>
                          
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="recent" className="space-y-4">
                    <div className="text-center py-12">
                      <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Recent Documents</h3>
                      <p className="text-gray-500">Documents you've accessed recently will appear here</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="shared" className="space-y-4">
                    <div className="text-center py-12">
                      <Share2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Shared Documents</h3>
                      <p className="text-gray-500">Documents shared with clients and team members</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="starred" className="space-y-4">
                    <div className="text-center py-12">
                      <Star className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Starred Documents</h3>
                      <p className="text-gray-500">Important documents you've marked with a star</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="archived" className="space-y-4">
                    <div className="text-center py-12">
                      <Archive className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Archived Documents</h3>
                      <p className="text-gray-500">Completed project documents and archived files</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Actions & Info */}
          <div className="xl:col-span-1 space-y-6">
            {/* Quick Upload */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-lg">Quick Upload</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start gap-3 bg-blue-600 hover:bg-blue-700 text-white">
                  <Upload className="w-4 h-4" />
                  Upload Files
                </Button>
                <Button className="w-full justify-start gap-3" variant="outline">
                  <Folder className="w-4 h-4" />
                  Create Folder
                </Button>
                <Button className="w-full justify-start gap-3" variant="outline">
                  <Plus className="w-4 h-4" />
                  New Document
                </Button>
              </CardContent>
            </Card>

            {/* Storage Info */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">Storage Usage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Used Storage</span>
                    <span>2.1TB / 5TB</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      Documents
                    </span>
                    <span>1.2TB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      Images
                    </span>
                    <span>650GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      Videos
                    </span>
                    <span>250GB</span>
                  </div>
                </div>
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
                      <p className="text-sm font-medium">Document uploaded</p>
                      <p className="text-xs text-gray-500">Architectural Plans.pdf - 2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Document shared</p>
                      <p className="text-xs text-gray-500">With Austin Medical Group - 4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Folder created</p>
                      <p className="text-xs text-gray-500">Office Complex Phase 2 - 1 day ago</p>
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

export default EnhancedDocuments;