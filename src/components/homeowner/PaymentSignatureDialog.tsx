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
    };
    onSignOff: (signatureData: string, signerName: string, signerTitle: string) => void;
}

export default function PaymentSignatureDialog({
    open,
    onOpenChange,
    paymentRequest,
    onSignOff,
}: PaymentSignatureDialogProps) {
    const [signature, setSignature] = useState<string | null>(null);
    const [signerName, setSignerName] = useState("");
    const [signerTitle, setSignerTitle] = useState("");
    const [saving, setSaving] = useState(false);

    const handleSaveSignature = async () => {
        if (!signature || !signerName.trim()) return;

        setSaving(true);
        try {
            // Simulate saving delay
            await new Promise(resolve => setTimeout(resolve, 500));
            onSignOff(signature, signerName.trim(), signerTitle.trim());

            // Reset form
            setSignature(null);
            setSignerName("");
            setSignerTitle("");
            onOpenChange(false);
        } finally {
            setSaving(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Payment Approval Signature</DialogTitle>
                    <DialogDescription>
                        Sign to approve payment for {paymentRequest.title}
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    {/* Payment Details */}
                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-sm text-gray-600 dark:text-gray-400">Payment Request:</span>
                                <span className="font-semibold text-gray-900 dark:text-white">{paymentRequest.title}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm text-gray-600 dark:text-gray-400">Contractor:</span>
                                <span className="font-medium text-gray-900 dark:text-white">{paymentRequest.contractor}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm text-gray-600 dark:text-gray-400">Amount:</span>
                                <span className="text-lg font-bold text-accent">${paymentRequest.amount.toLocaleString()}</span>
                            </div>
                            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-xs text-gray-600 dark:text-gray-400">{paymentRequest.description}</p>
                            </div>
                        </div>
                    </div>

                    {/* Certification Notice */}
                    <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm">
                        <p className="font-medium mb-1 text-blue-900 dark:text-blue-200">Owner's Certification</p>
                        <p className="text-blue-800 dark:text-blue-300 text-xs">
                            By signing below, you certify that you have reviewed and approve this payment request
                            and authorize the disbursement of funds to the contractor.
                        </p>
                    </div>

                    {/* Signer Information */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="signer-name">Full Name *</Label>
                            <Input
                                id="signer-name"
                                value={signerName}
                                onChange={(e) => setSignerName(e.target.value)}
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="signer-title">Title (Optional)</Label>
                            <Input
                                id="signer-title"
                                value={signerTitle}
                                onChange={(e) => setSignerTitle(e.target.value)}
                                placeholder="Project Owner"
                            />
                        </div>
                    </div>

                    {/* Signature Canvas */}
                    <div className="space-y-2">
                        <Label>Signature *</Label>
                        <SignatureCanvas onSignatureChange={setSignature} width={380} height={120} />
                    </div>

                    {/* Status Badge */}
                    {!signature && (
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            Signature required
                        </Badge>
                    )}
                    {signature && (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Signature captured
                        </Badge>
                    )}
                </div>

                <DialogFooter className="gap-2">
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSaveSignature}
                        disabled={!signature || !signerName.trim() || saving}
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                        <PenLine className="w-4 h-4 mr-2" />
                        {saving ? "Saving..." : "Sign & Approve Payment"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
