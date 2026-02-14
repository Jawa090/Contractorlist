import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, PenLine, AlertCircle } from "lucide-react";
import SignatureCanvas from "./SignatureCanvas";

interface PaymentSignatureDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    paymentRequest: {
        id: number;
        title: string;
        amount: number;
        contractor: string;
        description: string;
        gcName?: string;
        gcTitle?: string;
        gcSignature?: string;
    };
    onSignOff: (
        ownerSignature: string,
        ownerName: string,
        ownerTitle: string,
        gcSignature: string,
        gcName: string,
        gcTitle: string,
        receipt: File | null
    ) => void;
}

export default function PaymentSignatureDialog({
    open,
    onOpenChange,
    paymentRequest,
    onSignOff,
}: PaymentSignatureDialogProps) {
    const [ownerSignature, setOwnerSignature] = useState<string | null>(null);
    const [ownerName, setOwnerName] = useState("");
    const [ownerTitle, setOwnerTitle] = useState("");
    const [receiptFile, setReceiptFile] = useState<File | null>(null);
    const [saving, setSaving] = useState(false);

    const handleSaveSignature = async () => {
        if (!ownerSignature || !ownerName.trim()) return;

        setSaving(true);
        try {
            // Simulate saving delay
            await new Promise(resolve => setTimeout(resolve, 500));
            onSignOff(
                ownerSignature,
                ownerName.trim(),
                ownerTitle.trim(),
                paymentRequest.gcSignature || "",
                paymentRequest.gcName || paymentRequest.contractor,
                paymentRequest.gcTitle || "Project Manager",
                receiptFile
            );

            // Reset form
            setOwnerSignature(null);
            setOwnerName("");
            setOwnerTitle("");
            setReceiptFile(null);
            onOpenChange(false);
        } finally {
            setSaving(false);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setReceiptFile(e.target.files[0]);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-2xl max-h-[95vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                        <PenLine className="w-6 h-6 text-accent" />
                        Final Sign-off & Payment Approval
                    </DialogTitle>
                    <DialogDescription>
                        Complete the final approval for {paymentRequest.title} by providing your signature.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    {/* Payment Details Summary */}
                    <div className="p-4 bg-accent/5 dark:bg-accent/10 rounded-xl border border-accent/20">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Project Owner</span>
                                <p className="font-bold text-gray-900 dark:text-white">You</p>
                            </div>
                            <div className="space-y-1 text-right">
                                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Contractor</span>
                                <p className="font-bold text-gray-900 dark:text-white">{paymentRequest.contractor}</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount Due</span>
                                <p className="text-2xl font-black text-accent">${paymentRequest.amount.toLocaleString()}</p>
                            </div>
                            <div className="space-y-1 text-right">
                                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</span>
                                <div>
                                    <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Pending Sign-off</Badge>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Owner Signature Section (Editable) */}
                        <div className="space-y-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm ring-2 ring-accent/20">
                            <h3 className="font-bold text-lg flex items-center gap-2 text-gray-900 dark:text-white">
                                <div className="p-1 px-2 rounded bg-accent/20 text-accent text-xs">1</div>
                                Owner Signature
                            </h3>

                            <div className="space-y-3">
                                <div className="space-y-1.5">
                                    <Label htmlFor="owner-name" className="text-xs font-bold uppercase text-gray-500">Full Name *</Label>
                                    <Input
                                        id="owner-name"
                                        value={ownerName}
                                        onChange={(e) => setOwnerName(e.target.value)}
                                        placeholder="Your full name"
                                        className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="owner-title" className="text-xs font-bold uppercase text-gray-500">Title (Optional)</Label>
                                    <Input
                                        id="owner-title"
                                        value={ownerTitle}
                                        onChange={(e) => setOwnerTitle(e.target.value)}
                                        placeholder="Project Owner"
                                        className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <Label className="text-xs font-bold uppercase text-gray-500">Signature *</Label>
                                    <SignatureCanvas onSignatureChange={setOwnerSignature} width={260} height={100} />
                                </div>
                            </div>
                        </div>

                        {/* GC/Contractor Signature Section (Read-only) */}
                        <div className="space-y-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30 shadow-inner">
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold text-lg flex items-center gap-2 text-gray-900 dark:text-white">
                                    <div className="p-1 px-2 rounded bg-blue-100 text-blue-600 text-xs">2</div>
                                    Contractor Signature
                                </h3>
                                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                    <CheckCircle2 className="w-3 h-3 mr-1" />
                                    Verified
                                </Badge>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold uppercase text-gray-400">Contractor Name</p>
                                        <p className="font-bold text-gray-900 dark:text-white">{paymentRequest.gcName || paymentRequest.contractor}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold uppercase text-gray-400">Title</p>
                                        <p className="font-medium text-gray-700 dark:text-gray-300">{paymentRequest.gcTitle || "Authorized Representative"}</p>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <p className="text-[10px] font-bold uppercase text-gray-400">Digital Signature</p>
                                    <div className="relative h-24 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center p-2 overflow-hidden">
                                        {paymentRequest.gcSignature && (paymentRequest.gcSignature.startsWith('data:') || paymentRequest.gcSignature.startsWith('http')) ? (
                                            <img
                                                src={paymentRequest.gcSignature}
                                                alt="Contractor Signature"
                                                className="max-h-full max-w-full object-contain opacity-80"
                                            />
                                        ) : paymentRequest.gcSignature ? (
                                            <div className="text-3xl text-blue-600/70 select-none px-4 text-center italic" style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}>
                                                {paymentRequest.gcSignature}
                                            </div>
                                        ) : (
                                            <div className="text-gray-400 text-xs italic flex items-center gap-2">
                                                <AlertCircle className="w-4 h-4" />
                                                No signature provided
                                            </div>
                                        )}
                                        {/* Verification Overlay */}
                                        <div className="absolute top-1 right-1">
                                            <CheckCircle2 className="w-4 h-4 text-blue-500 opacity-50" />
                                        </div>
                                    </div>
                                    <p className="text-[9px] text-gray-400 italic">This signature was added by the contractor on their dashboard.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Receipt Upload Section */}
                    <div className="p-5 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
                        <div className="flex flex-col items-center text-center space-y-3">
                            <div className="p-3 rounded-full bg-accent/10 text-accent">
                                <PenLine className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white">Upload Receipt or Proof of Payment</h4>
                                <p className="text-sm text-gray-500 mt-1">Upload any receipt, wire confirmation, or payment document</p>
                            </div>

                            <div className="w-full max-w-xs">
                                <input
                                    type="file"
                                    id="receipt-upload"
                                    className="hidden"
                                    onChange={handleFileChange}
                                    accept="image/*,.pdf"
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="w-full gap-2 border-accent/30 text-accent hover:bg-accent/5"
                                    onClick={() => document.getElementById("receipt-upload")?.click()}
                                >
                                    {receiptFile ? "Change File" : "Choose File"}
                                </Button>
                            </div>

                            {receiptFile && (
                                <div className="flex items-center gap-2 p-2 px-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300 text-sm font-medium">
                                    <CheckCircle2 className="w-4 h-4" />
                                    {receiptFile.name}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Legal Notice */}
                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-[11px] leading-relaxed text-gray-500 dark:text-gray-400 italic">
                        By signing this electronic document, you agree that your digital signature is as legally binding as a physical signature on paper. You confirm receipt of services or materials as described and authorize the release of funds.
                    </div>
                </div>

                <DialogFooter className="gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <Button variant="ghost" onClick={() => onOpenChange(false)} className="font-semibold">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSaveSignature}
                        disabled={!ownerSignature || !ownerName.trim() || saving}
                        className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 shadow-lg shadow-accent/20 h-11"
                    >
                        {saving ? (
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                                Processing...
                            </div>
                        ) : (
                            <>
                                <CheckCircle2 className="w-5 h-5 mr-2" />
                                Finalize Approval
                            </>
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
