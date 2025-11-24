import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, Download, Calculator } from "lucide-react";

const AITakeoff = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">AI Takeoff & Estimation</h1>
                <p className="text-gray-600 mt-1">Upload drawings and get instant AI-powered quantity takeoffs and cost estimates</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                    <CardHeader className="border-b">
                        <CardTitle className="flex items-center">
                            <Upload className="w-5 h-5 mr-2 text-blue-600" />
                            Upload Project Drawings
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-yellow-500 transition-colors cursor-pointer">
                            <Upload className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Drop your files here</h3>
                            <p className="text-sm text-gray-600 mb-4">or click to browse</p>
                            <p className="text-xs text-gray-500">Supports: PDF, DWG, DXF, PNG, JPG (Max 50MB)</p>
                            <Button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                                Select Files
                            </Button>
                        </div>

                        <div className="mt-6 space-y-3">
                            <h4 className="font-semibold text-gray-900">Recent Uploads</h4>
                            {[
                                { name: "Kitchen-Floor-Plan.pdf", size: "2.4 MB", date: "Nov 8, 2024", status: "Processed" },
                                { name: "Bathroom-Layout.dwg", size: "1.8 MB", date: "Nov 7, 2024", status: "Processed" },
                                { name: "Deck-Design.pdf", size: "3.1 MB", date: "Nov 6, 2024", status: "Processing" }
                            ].map((file, idx) => (
                                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div className="flex items-center flex-1">
                                        <FileText className="w-8 h-8 text-blue-600 mr-3" />
                                        <div>
                                            <p className="font-semibold text-gray-900">{file.name}</p>
                                            <p className="text-sm text-gray-500">{file.size} • {file.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Badge variant={file.status === "Processed" ? "default" : "secondary"}>
                                            {file.status}
                                        </Badge>
                                        <Button size="sm" variant="outline">
                                            <Download className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="border-b bg-gradient-to-r from-green-50 to-green-100">
                        <CardTitle className="flex items-center">
                            <Calculator className="w-5 h-5 mr-2 text-green-600" />
                            Quick Estimate
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <div>
                            <Label htmlFor="project-type">Project Type</Label>
                            <select id="project-type" className="w-full mt-1 p-2 border rounded-md">
                                <option>Kitchen Remodel</option>
                                <option>Bathroom Renovation</option>
                                <option>Deck Installation</option>
                                <option>Full Home Renovation</option>
                                <option>Basement Finishing</option>
                            </select>
                        </div>

                        <div>
                            <Label htmlFor="square-footage">Square Footage</Label>
                            <Input id="square-footage" type="number" placeholder="Enter sq ft" className="mt-1" />
                        </div>

                        <div>
                            <Label htmlFor="quality-level">Quality Level</Label>
                            <select id="quality-level" className="w-full mt-1 p-2 border rounded-md">
                                <option>Standard</option>
                                <option>Premium</option>
                                <option>Luxury</option>
                            </select>
                        </div>

                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
                            <Calculator className="w-4 h-4 mr-2" />
                            Generate Estimate
                        </Button>

                        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                            <p className="text-sm text-gray-600 mb-2">Estimated Cost Range</p>
                            <p className="text-2xl font-bold text-green-700">$18,500 - $24,000</p>
                            <p className="text-xs text-gray-500 mt-2">Based on AI analysis and market data</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AITakeoff;
