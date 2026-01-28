import { useState, useEffect } from "react";
import {
    MapPin,
    Search,
    ChevronDown,
    X,
    RotateCcw,
    Calendar,
    Building2,
    Briefcase,
    DollarSign,
    Filter
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const PROJECT_STAGES = [
    "Planning",
    "Bidding",
    "Post-Bid",
    "Under Construction",
];

const PROJECT_CATEGORIES = [
    "Commercial",
    "Residential",
    "Industrial",
    "Healthcare",
    "Education",
    "Government",
    "Infrastructure",
    "Retail",
    "Hospitality",
    "Mixed-Use",
];

export const CSI_DIVISIONS = [
    { code: "03", name: "Concrete" },
    { code: "04", name: "Masonry" },
    { code: "05", name: "Metals" },
    { code: "06", name: "Wood, Plastics & Composites" },
    { code: "07", name: "Thermal & Moisture Protection" },
    { code: "08", name: "Openings" },
    { code: "09", name: "Finishes" },
    { code: "10", name: "Specialties" },
    { code: "11", name: "Equipment" },
    { code: "12", name: "Furnishings" },
    { code: "13", name: "Special Construction" },
    { code: "14", name: "Conveying Equipment" },
    { code: "21", name: "Fire Suppression" },
    { code: "22", name: "Plumbing" },
    { code: "23", name: "HVAC" },
    { code: "26", name: "Electrical" },
    { code: "27", name: "Communications" },
    { code: "28", name: "Electronic Safety" },
    { code: "31", name: "Earthwork" },
    { code: "32", name: "Exterior Improvements" },
    { code: "33", name: "Utilities" },
];

const VALUE_RANGES = [
    "Under $100K",
    "$100K - $500K",
    "$500K - $1M",
    "$1M - $5M",
    "$5M - $10M",
    "$10M - $50M",
    "$50M - $100M",
    "Over $100M",
];

interface FilterSectionProps {
    title: string;
    icon?: React.ReactNode;
    defaultOpen?: boolean;
    count?: number;
    children: React.ReactNode;
}

const FilterSection = ({
    title,
    icon,
    defaultOpen = false,
    count,
    children,
}: FilterSectionProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border-b border-border last:border-0">
            <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-sm font-semibold text-foreground hover:text-accent transition-colors group">
                <div className="flex items-center gap-2">
                    {icon}
                    {title}
                    {count !== undefined && count > 0 && (
                        <Badge variant="secondary" className="h-5 min-w-5 px-1.5 text-xs font-medium">
                            {count}
                        </Badge>
                    )}
                </div>
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="pb-4">{children}</CollapsibleContent>
        </Collapsible>
    );
};

interface ProjectFiltersProps {
    onFiltersChange?: (filters: ProjectFilterState) => void;
}

export interface ProjectFilterState {
    location: string;
    radius: number;
    stages: string[];
    categories: string[];
    trades: string[];
    valueRanges: string[];
    bidDateFrom: string;
    bidDateTo: string;
    documentsOnly: boolean;
    savedOnly: boolean;
}

const ProjectFilters = ({ onFiltersChange }: ProjectFiltersProps) => {
    const [location, setLocation] = useState("");
    const [radius, setRadius] = useState([50]);
    const [selectedStages, setSelectedStages] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedTrades, setSelectedTrades] = useState<string[]>([]);
    const [selectedValueRanges, setSelectedValueRanges] = useState<string[]>([]);
    const [tradeSearch, setTradeSearch] = useState("");
    const [bidDateFrom, setBidDateFrom] = useState("");
    const [bidDateTo, setBidDateTo] = useState("");
    const [documentsOnly, setDocumentsOnly] = useState(false);
    const [savedOnly, setSavedOnly] = useState(false);

    useEffect(() => {
        if (onFiltersChange) {
            onFiltersChange({
                location,
                radius: radius[0],
                stages: selectedStages,
                categories: selectedCategories,
                trades: selectedTrades,
                valueRanges: selectedValueRanges,
                bidDateFrom,
                bidDateTo,
                documentsOnly,
                savedOnly,
            });
        }
    }, [
        location,
        radius,
        selectedStages,
        selectedCategories,
        selectedTrades,
        selectedValueRanges,
        bidDateFrom,
        bidDateTo,
        documentsOnly,
        savedOnly,
        onFiltersChange
    ]);

    const filteredTrades = CSI_DIVISIONS.filter((trade) =>
        trade.name.toLowerCase().includes(tradeSearch.toLowerCase()) ||
        trade.code.includes(tradeSearch)
    );

    const totalFilters =
        selectedStages.length +
        selectedCategories.length +
        selectedTrades.length +
        selectedValueRanges.length +
        (location ? 1 : 0) +
        (bidDateFrom ? 1 : 0) +
        (bidDateTo ? 1 : 0) +
        (documentsOnly ? 1 : 0) +
        (savedOnly ? 1 : 0);

    const clearAllFilters = () => {
        setLocation("");
        setRadius([50]);
        setSelectedStages([]);
        setSelectedCategories([]);
        setSelectedTrades([]);
        setSelectedValueRanges([]);
        setTradeSearch("");
        setBidDateFrom("");
        setBidDateTo("");
        setDocumentsOnly(false);
        setSavedOnly(false);
    };

    const toggleArrayItem = (arr: string[], item: string, setter: (arr: string[]) => void) => {
        if (arr.includes(item)) {
            setter(arr.filter((i) => i !== item));
        } else {
            setter([...arr, item]);
        }
    };

    return (
        <div className="bg-card border border-border rounded-xl">
            {/* Header */}
            <div className="p-4 border-b border-border">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-accent" />
                        <h3 className="font-semibold text-foreground">Filters</h3>
                        {totalFilters > 0 && (
                            <Badge variant="secondary" className="ml-1 bg-accent/20 text-accent">
                                {totalFilters}
                            </Badge>
                        )}
                    </div>
                    {totalFilters > 0 && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={clearAllFilters}
                            className="text-muted-foreground hover:text-foreground h-8 px-2"
                        >
                            <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                            Clear all
                        </Button>
                    )}
                </div>

                {/* Active Filters */}
                {totalFilters > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                        {location && (
                            <Badge variant="secondary" className="gap-1 pr-1">
                                {location}
                                <X
                                    className="w-3 h-3 cursor-pointer hover:text-destructive"
                                    onClick={() => setLocation("")}
                                />
                            </Badge>
                        )}
                        {selectedStages.map((stage) => (
                            <Badge key={stage} variant="secondary" className="gap-1 pr-1">
                                {stage}
                                <X
                                    className="w-3 h-3 cursor-pointer hover:text-destructive"
                                    onClick={() => toggleArrayItem(selectedStages, stage, setSelectedStages)}
                                />
                            </Badge>
                        ))}
                        {selectedCategories.map((cat) => (
                            <Badge key={cat} variant="secondary" className="gap-1 pr-1">
                                {cat}
                                <X
                                    className="w-3 h-3 cursor-pointer hover:text-destructive"
                                    onClick={() => toggleArrayItem(selectedCategories, cat, setSelectedCategories)}
                                />
                            </Badge>
                        ))}
                    </div>
                )}
            </div>

            <ScrollArea className="h-[calc(100vh-280px)]">
                <div className="p-4 space-y-0">
                    {/* Location */}
                    <FilterSection
                        title="Location"
                        icon={<MapPin className="w-4 h-4" />}
                        defaultOpen={true}
                    >
                        <div className="space-y-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input
                                    placeholder="City, State or ZIP"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="pl-9"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <Label>Radius</Label>
                                    <span className="text-muted-foreground">{radius[0]} miles</span>
                                </div>
                                <Slider
                                    value={radius}
                                    onValueChange={setRadius}
                                    min={5}
                                    max={200}
                                    step={5}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </FilterSection>

                    {/* Project Stage */}
                    <FilterSection
                        title="Project Stage"
                        icon={<Briefcase className="w-4 h-4" />}
                        defaultOpen={true}
                        count={selectedStages.length}
                    >
                        <div className="space-y-2">
                            {PROJECT_STAGES.map((stage) => (
                                <div key={stage} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={`stage-${stage}`}
                                        checked={selectedStages.includes(stage)}
                                        onCheckedChange={() => toggleArrayItem(selectedStages, stage, setSelectedStages)}
                                    />
                                    <Label
                                        htmlFor={`stage-${stage}`}
                                        className="text-sm font-normal cursor-pointer flex-1"
                                    >
                                        {stage}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </FilterSection>

                    {/* Project Category */}
                    <FilterSection
                        title="Project Category"
                        icon={<Building2 className="w-4 h-4" />}
                        defaultOpen={true}
                        count={selectedCategories.length}
                    >
                        <div className="space-y-2 max-h-48 overflow-y-auto">
                            {PROJECT_CATEGORIES.map((category) => (
                                <div key={category} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={`cat-${category}`}
                                        checked={selectedCategories.includes(category)}
                                        onCheckedChange={() => toggleArrayItem(selectedCategories, category, setSelectedCategories)}
                                    />
                                    <Label
                                        htmlFor={`cat-${category}`}
                                        className="text-sm font-normal cursor-pointer flex-1"
                                    >
                                        {category}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </FilterSection>

                    {/* Trade/CSI Division */}
                    <FilterSection
                        title="Trade / CSI Division"
                        count={selectedTrades.length}
                    >
                        <div className="space-y-3">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search trades..."
                                    value={tradeSearch}
                                    onChange={(e) => setTradeSearch(e.target.value)}
                                    className="pl-9"
                                />
                            </div>
                            <div className="space-y-2 max-h-48 overflow-y-auto">
                                {filteredTrades.map((trade) => (
                                    <div key={trade.code} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`trade-${trade.code}`}
                                            checked={selectedTrades.includes(trade.code)}
                                            onCheckedChange={() => toggleArrayItem(selectedTrades, trade.code, setSelectedTrades)}
                                        />
                                        <Label
                                            htmlFor={`trade-${trade.code}`}
                                            className="text-sm font-normal cursor-pointer flex-1"
                                        >
                                            <span className="text-muted-foreground mr-1">{trade.code}</span>
                                            {trade.name}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FilterSection>

                    {/* Project Value */}
                    <FilterSection
                        title="Estimated Value"
                        icon={<DollarSign className="w-4 h-4" />}
                        count={selectedValueRanges.length}
                    >
                        <div className="space-y-2 max-h-48 overflow-y-auto">
                            {VALUE_RANGES.map((range) => (
                                <div key={range} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={`value-${range}`}
                                        checked={selectedValueRanges.includes(range)}
                                        onCheckedChange={() => toggleArrayItem(selectedValueRanges, range, setSelectedValueRanges)}
                                    />
                                    <Label
                                        htmlFor={`value-${range}`}
                                        className="text-sm font-normal cursor-pointer flex-1"
                                    >
                                        {range}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </FilterSection>

                    {/* Bid Date */}
                    <FilterSection
                        title="Bid Date"
                        icon={<Calendar className="w-4 h-4" />}
                    >
                        <div className="space-y-3">
                            <div className="space-y-2">
                                <Label className="text-xs text-muted-foreground">From</Label>
                                <Input
                                    type="date"
                                    value={bidDateFrom}
                                    onChange={(e) => setBidDateFrom(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs text-muted-foreground">To</Label>
                                <Input
                                    type="date"
                                    value={bidDateTo}
                                    onChange={(e) => setBidDateTo(e.target.value)}
                                />
                            </div>
                        </div>
                    </FilterSection>

                    {/* Quick Filters */}
                    <FilterSection title="Quick Filters" defaultOpen={true}>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="documents-only"
                                    checked={documentsOnly}
                                    onCheckedChange={(checked) => setDocumentsOnly(checked as boolean)}
                                />
                                <Label
                                    htmlFor="documents-only"
                                    className="text-sm font-normal cursor-pointer"
                                >
                                    Documents Available
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="saved-only"
                                    checked={savedOnly}
                                    onCheckedChange={(checked) => setSavedOnly(checked as boolean)}
                                />
                                <Label
                                    htmlFor="saved-only"
                                    className="text-sm font-normal cursor-pointer"
                                >
                                    Saved Projects Only
                                </Label>
                            </div>
                        </div>
                    </FilterSection>
                </div>
            </ScrollArea>

            {/* Mobile Apply Button */}
            <div className="p-4 border-t border-border lg:hidden">
                <Button className="w-full" variant="accent">
                    Show Results
                </Button>
            </div>
        </div>
    );
};

export default ProjectFilters;
