import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, ChevronDown } from "lucide-react";

const CostEstimation = () => {
    const { toast } = useToast();

    // Cost Estimation State
    const [costEstProjectName, setCostEstProjectName] = useState("");
    const [costEstDescription, setCostEstDescription] = useState("");
    const [costEstLocation, setCostEstLocation] = useState("");
    const [costEstType, setCostEstType] = useState("Residential");
    const [costEstDelivery, setCostEstDelivery] = useState("Standard");

    const handleAction = (action: string, item?: any) => {
        toast({
            title: "Action Performed",
            description: `${action} ${item ? `for ${item.name || item.client}` : 'successfully'}`,
        });
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-12">
            {/* Header */}
            <div>
                <p className="text-sm text-gray-500 mb-2">On-Demand Services / <span className="text-gray-900 font-medium">Cost Estimation & Quantity Take Off</span></p>
                <h2 className="text-3xl font-bold text-gray-900">New Cost Estimation & Quantity Take Off Request</h2>
                <p className="text-gray-600 mt-2">Fill in the details below to get a cost estimate for your project.</p>
            </div>

            {/* Stepper */}
            <div className="flex items-center border-b border-gray-200 pb-4">
                <div className="flex items-center gap-2 text-blue-600 font-semibold border-b-2 border-blue-600 pb-4 -mb-4 px-2">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">1</div>
                    Project Details
                </div>
                <div className="flex items-center gap-2 text-gray-500 font-medium px-6 pb-4 -mb-4">
                    <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs">2</div>
                    Upload Files
                </div>
                <div className="flex items-center gap-2 text-gray-500 font-medium px-6 pb-4 -mb-4">
                    <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs">3</div>
                    Review & Submit
                </div>
            </div>

            {/* Step 1: Project Details */}
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Step 1: Project Details</h3>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="project-name">Project Name</Label>
                        <Input
                            id="project-name"
                            placeholder="e.g., Downtown Office Renovation"
                            value={costEstProjectName}
                            onChange={(e) => setCostEstProjectName(e.target.value)}
                            className="bg-white"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="project-desc">Project Description</Label>
                        <Textarea
                            id="project-desc"
                            placeholder="Briefly describe the project scope, materials, and any key details."
                            className="h-32 bg-white"
                            value={costEstDescription}
                            onChange={(e) => setCostEstDescription(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="project-location">Project Location / Address</Label>
                            <Input
                                id="project-location"
                                placeholder="123 Main St, Anytown, USA"
                                value={costEstLocation}
                                onChange={(e) => setCostEstLocation(e.target.value)}
                                className="bg-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="project-type">Project Type</Label>
                            <div className="relative">
                                <select
                                    id="project-type"
                                    className="w-full h-10 px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent appearance-none"
                                    value={costEstType}
                                    onChange={(e) => setCostEstType(e.target.value)}
                                >
                                    <option>Residential</option>
                                    <option>Commercial</option>
                                    <option>Industrial</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Step 2: Upload Files & Instructions */}
            <div className="space-y-6 pt-6">
                <h3 className="text-xl font-bold text-gray-900">Step 2: Upload Files & Instructions</h3>

                <div className="space-y-2">
                    <Label>Upload Plans / Blueprints</Label>
                    <div className="border-2 border-dashed border-blue-200 rounded-lg p-10 flex flex-col items-center justify-center bg-blue-50/30 hover:bg-blue-50 transition-colors cursor-pointer">
                        <Upload className="w-10 h-10 text-blue-400 mb-3" />
                        <p className="text-blue-600 font-medium">Upload a file <span className="text-gray-500 font-normal">or drag and drop</span></p>
                        <p className="text-xs text-gray-400 mt-1">PDF, DWG, CAD, PNG, JPG up to 25MB</p>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="special-instructions">Special Instructions</Label>
                    <Textarea
                        id="special-instructions"
                        placeholder="e.g., 'Please focus on MEP take-offs first' or 'Exclude landscaping costs'."
                        className="h-24 bg-white"
                    />
                </div>
            </div>

            {/* Delivery Timeline */}
            <div className="space-y-4 pt-2">
                <Label>Requested Delivery Timeline</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${costEstDelivery === 'Standard' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                        onClick={() => setCostEstDelivery('Standard')}
                    >
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-semibold text-gray-900">Standard Delivery</span>
                        </div>
                        <p className="text-sm text-gray-500">3-5 Business Days</p>
                    </div>

                    <div
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${costEstDelivery === 'Expedited' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                        onClick={() => setCostEstDelivery('Expedited')}
                    >
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-semibold text-gray-900">Expedited Delivery</span>
                            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded font-medium">+25%</span>
                        </div>
                        <p className="text-sm text-gray-500">24-48 Hours</p>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end items-center gap-4 pt-8 border-t">
                <Button variant="outline" className="px-6">Cancel</Button>
                <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                    onClick={() => handleAction("Submitted Cost Estimation Request", { name: costEstProjectName })}
                >
                    Review & Submit
                </Button>
            </div>
        </div>
    );
};

export default CostEstimation;
