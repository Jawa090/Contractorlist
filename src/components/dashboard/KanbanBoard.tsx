import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Plus, Calendar, User, DollarSign } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface KanbanColumn {
    id: string;
    title: string;
    color: string;
}

interface KanbanItem {
    id: number | string;
    status: string;
    [key: string]: any;
}

interface KanbanBoardProps {
    items: KanbanItem[];
    columns: KanbanColumn[];
    onStatusChange: (itemId: number | string, newStatus: string) => void;
    renderCard: (item: KanbanItem) => React.ReactNode;
    title?: string;
    onAddItem?: () => void;
}

export const KanbanBoard = ({
    items,
    columns,
    onStatusChange,
    renderCard,
    title,
    onAddItem
}: KanbanBoardProps) => {
    const [draggedItem, setDraggedItem] = useState<KanbanItem | null>(null);

    const handleDragStart = (e: React.DragEvent, item: KanbanItem) => {
        setDraggedItem(item);
        e.dataTransfer.setData("text/plain", item.id.toString());
        e.dataTransfer.effectAllowed = "move";
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    };

    const handleDrop = (e: React.DragEvent, status: string) => {
        e.preventDefault();
        if (draggedItem && draggedItem.status !== status) {
            onStatusChange(draggedItem.id, status);
        }
        setDraggedItem(null);
    };

    return (
        <div className="h-full flex flex-col">
            {title && (
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                    {onAddItem && (
                        <Button onClick={onAddItem} className="bg-yellow-500 hover:bg-yellow-600 text-black">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Item
                        </Button>
                    )}
                </div>
            )}

            <div className="flex gap-6 overflow-x-auto pb-4 h-full min-h-[600px]">
                {columns.map((column) => {
                    const columnItems = items.filter((item) => item.status === column.id);

                    return (
                        <div
                            key={column.id}
                            className="flex-1 min-w-[300px] bg-gray-100/50 rounded-xl flex flex-col"
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, column.id)}
                        >
                            <div className={`p-4 border-b-2 ${column.color} flex justify-between items-center bg-white rounded-t-xl`}>
                                <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-gray-900">{column.title}</h3>
                                    <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                                        {columnItems.length}
                                    </Badge>
                                </div>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <MoreHorizontal className="w-4 h-4 text-gray-500" />
                                </Button>
                            </div>

                            <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                                {columnItems.map((item) => (
                                    <div
                                        key={item.id}
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, item)}
                                        className="cursor-grab active:cursor-grabbing transform transition-all hover:scale-[1.02] hover:shadow-md"
                                    >
                                        {renderCard(item)}
                                    </div>
                                ))}
                                {columnItems.length === 0 && (
                                    <div className="h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                                        Drop items here
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export const ProjectCard = ({ project }: { project: any }) => (
    <Card className="bg-white border-none shadow-sm">
        <div className="relative h-32 bg-gray-200 rounded-t-lg overflow-hidden">
            <img
                src={project.image || `https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3`}
                alt={project.name}
                className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2">
                <Badge className={`${project.status === "Ahead" ? "bg-green-500" :
                        project.status === "On Track" ? "bg-blue-500" : "bg-yellow-500"
                    } text-white border-none`}>
                    {project.status}
                </Badge>
            </div>
        </div>
        <CardContent className="p-4">
            <h4 className="font-bold text-gray-900 mb-1">{project.name}</h4>
            <p className="text-sm text-gray-500 mb-3">{project.client}</p>

            <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-600">
                    <span>Progress</span>
                    <span className="font-semibold">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                        className={`h-2 rounded-full ${project.progress >= 75 ? 'bg-green-500' :
                                project.progress >= 50 ? 'bg-blue-500' : 'bg-yellow-500'
                            }`}
                        style={{ width: `${project.progress}%` }}
                    />
                </div>

                <div className="flex justify-between items-center pt-2 border-t mt-2">
                    <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.deadline}
                    </div>
                    <div className="flex -space-x-2">
                        {[...Array(project.team || 3)].map((_, i) => (
                            <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-600">
                                {String.fromCharCode(65 + i)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
);

export const LeadCard = ({ lead }: { lead: any }) => (
    <Card className="bg-white border-none shadow-sm">
        <CardContent className="p-4">
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                        {lead.client.split(' ').map((n: string) => n[0]).join('')}
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm">{lead.client}</h4>
                        <p className="text-xs text-gray-500">{lead.location}</p>
                    </div>
                </div>
                <Badge variant={lead.status === 'Hot' ? 'default' : lead.status === 'Warm' ? 'secondary' : 'outline'}>
                    {lead.score}%
                </Badge>
            </div>

            <h5 className="font-semibold text-gray-800 mb-2 text-sm">{lead.name}</h5>

            <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-gray-50 p-2 rounded text-center">
                    <p className="text-[10px] text-gray-500 uppercase">Budget</p>
                    <p className="text-xs font-bold text-gray-900">{lead.budget}</p>
                </div>
                <div className="bg-gray-50 p-2 rounded text-center">
                    <p className="text-[10px] text-gray-500 uppercase">Type</p>
                    <p className="text-xs font-bold text-gray-900">Reno</p>
                </div>
            </div>

            <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">
                    Contact
                </Button>
                <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">
                    View
                </Button>
            </div>
        </CardContent>
    </Card>
);
