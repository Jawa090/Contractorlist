import React, { useState, useEffect } from 'react';
import { getProjectDocuments, uploadDocument, deleteDocument, downloadDocument, viewDocument } from '@/api/gc-apis';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import {
    FileText,
    Upload,
    Download,
    Search,
    Trash2,
    File,
    Filter,
    MoreVertical,
    Plus,
    Eye
} from 'lucide-react';

interface ProjectDocumentsProps {
    projectId: number;
}

const ProjectDocuments = ({ projectId }: ProjectDocumentsProps) => {
    const { toast } = useToast();
    const [documents, setDocuments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Other');
    const [viewingDoc, setViewingDoc] = useState<any>(null);
    const [viewingDocUrl, setViewingDocUrl] = useState<string | null>(null);

    useEffect(() => {
        loadDocuments();
    }, [projectId]);

    const loadDocuments = async () => {
        try {
            setLoading(true);
            const data = await getProjectDocuments(projectId);
            setDocuments(data);
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to load documents",
                variant: "destructive"
            });
        } finally {
            setLoading(false);
        }
    };

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        // File Type Validation
        const allowedTypes = [
            'image/jpeg', 'image/png', 'image/gif', 'image/webp',
            'application/pdf',
            'text/plain', 'text/csv',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ];
        // Check extension as fallback
        const isValidType = allowedTypes.includes(file.type) ||
            /\.(jpg|jpeg|png|gif|webp|pdf|txt|csv|doc|docx|xls|xlsx)$/i.test(file.name);

        if (!isValidType) {
            toast({
                title: "Unsupported File Format",
                description: "Please upload a supported file type (PDF, Image, Word, Excel, CSV).",
                variant: "destructive"
            });
            event.target.value = ''; // Reset input
            return;
        }

        try {
            setIsUploading(true);
            await uploadDocument(projectId, file, selectedCategory);
            toast({
                title: "Success",
                description: "Document uploaded successfully",
            });
            loadDocuments();
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to upload document",
                variant: "destructive"
            });
        } finally {
            setIsUploading(false);
            // Clear the input
            event.target.value = '';
        }
    };

    const handleDelete = async (docId: number) => {
        try {
            await deleteDocument(docId);
            toast({
                title: "Deleted",
                description: "Document removed from project",
            });
            loadDocuments();
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to delete document",
                variant: "destructive"
            });
        }
    };

    const handleDownload = async (doc: any) => {
        try {
            const blob = await downloadDocument(doc.id);
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', doc.name); // Set default filename
            document.body.appendChild(link);
            link.click();
            link.parentNode?.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to download document",
                variant: "destructive"
            });
        }
    };

    const handleView = async (doc: any) => {
        try {
            setViewingDoc(doc);
            const blob = await viewDocument(doc.id);
            const url = window.URL.createObjectURL(blob);
            setViewingDocUrl(url);
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to view document",
                variant: "destructive"
            });
            setViewingDoc(null);
        }
    };

    const handleCloseView = () => {
        if (viewingDocUrl) {
            window.URL.revokeObjectURL(viewingDocUrl);
        }
        setViewingDoc(null);
        setViewingDocUrl(null);
    };

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const filteredDocs = documents.filter(doc =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Upload Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-[#1c1e24] p-6 border border-white/5 shadow-lg group">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                            <Upload className="w-6 h-6 text-yellow-500" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg">Project vault</h3>
                            <p className="text-gray-400 text-sm">Securely store blueprints, contracts, and permits</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger className="w-40 bg-white/10 border-white/10 text-white">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1c1e24] border-white/10 text-white">
                                <SelectItem value="Plans">Plans</SelectItem>
                                <SelectItem value="Drawings">Drawings</SelectItem>
                                <SelectItem value="Photos">Photos</SelectItem>
                                <SelectItem value="Contracts">Contracts</SelectItem>
                                <SelectItem value="Invoices">Invoices</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="relative">
                            <Input
                                type="file"
                                onChange={handleFileUpload}
                                className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                disabled={isUploading}
                            />
                            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl px-6 min-w-[160px]">
                                {isUploading ? 'Uploading...' : 'Upload File'}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 blur-3xl rounded-full transition-transform group-hover:scale-150 duration-700"></div>
            </div>

            {/* Docs Controls */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="relative w-full sm:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <Input
                        placeholder="Search documents..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-xl"
                    />
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5">
                        <Filter className="w-4 h-4 mr-2" /> Filter
                    </Button>
                </div>
            </div>

            {/* Documents List */}
            <div className="bg-white dark:bg-[#1c1e24] rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden shadow-sm">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-black/20">
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Document Name</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Size</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Uploaded</th>
                            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                        {loading ? (
                            <tr><td colSpan={4} className="p-12 text-center text-gray-400">Loading documents...</td></tr>
                        ) : filteredDocs.length === 0 ? (
                            <tr><td colSpan={4} className="p-12 text-center text-gray-400">No documents found in this project</td></tr>
                        ) : (
                            filteredDocs.map((doc) => (
                                <tr key={doc.id} className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                                                <FileText className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900 dark:text-white text-sm">{doc.name}</p>
                                                <p className="text-xs text-gray-500">By {doc.uploadedBy || 'System'}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 font-mono">
                                        {formatFileSize(doc.size)}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                        {new Date(doc.uploaded).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 text-right space-x-1">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                                            onClick={() => handleView(doc)}
                                            title="View document"
                                        >
                                            <Eye className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-gray-400 hover:text-black dark:hover:text-white"
                                            onClick={() => handleDownload(doc)}
                                            title="Download document"
                                        >
                                            <Download className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => handleDelete(doc.id)}
                                            className="h-8 w-8 text-gray-400 hover:text-red-500"
                                            title="Delete document"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            {/* Document Viewer Modal */}
            <Dialog open={!!viewingDoc} onOpenChange={(open) => !open && handleCloseView()}>
                <DialogContent className="max-w-5xl h-[85vh] flex flex-col bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/10 text-gray-900 dark:text-white p-0 overflow-hidden">
                    <DialogHeader className="p-4 border-b border-gray-200 dark:border-white/10 shrink-0">
                        <DialogTitle className="flex items-center gap-2">
                            <FileText className="w-5 h-5 text-accent" />
                            {viewingDoc?.name}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="flex-1 w-full bg-gray-100 dark:bg-black/50 overflow-auto relative flex items-center justify-center p-4">
                        {viewingDocUrl && (
                            /\.(jpg|jpeg|png|gif|webp)$/i.test(viewingDoc.name) ? (
                                <img src={viewingDocUrl} className="max-w-full max-h-full object-contain shadow-lg rounded-lg" alt="Document Preview" />
                            ) : /\.(pdf)$/i.test(viewingDoc.name) ? (
                                <iframe src={viewingDocUrl} className="w-full h-full rounded-lg shadow-sm bg-white" title="Document Preview" />
                            ) : (
                                <div className="flex flex-col items-center justify-center text-center p-8">
                                    <div className="w-20 h-20 bg-gray-200 dark:bg-white/5 rounded-full flex items-center justify-center mb-6">
                                        <FileText size={40} className="text-gray-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Preview Unavailable</h3>
                                    <p className="text-gray-500 mb-6 max-w-md">
                                        This file type cannot be previewed directly in the browser. Please download the file to view it.
                                    </p>
                                    <Button onClick={() => handleDownload(viewingDoc)} className="bg-accent text-accent-foreground font-bold px-8">
                                        <Download className="mr-2 w-4 h-4" /> Download File
                                    </Button>
                                </div>
                            )
                        )}
                        {!viewingDocUrl && <div className="animate-pulse flex flex-col items-center"><div className="w-12 h-12 bg-gray-300 dark:bg-white/10 rounded-full mb-4"></div><div className="h-4 w-48 bg-gray-300 dark:bg-white/10 rounded"></div></div>}
                    </div>
                </DialogContent>
            </Dialog>
        </div >
    );
};

export default ProjectDocuments;
