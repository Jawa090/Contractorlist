import jsPDF from "jspdf";
import { format } from "date-fns";
import type { PayApplication, BudgetItem } from "@/apps/gc/hooks/useBudget";

interface ProjectInfo {
    name: string;
    location: string;
}

interface Signatures {
    contractor?: {
        signature_data?: string;
        signed_at?: string;
        signer_name?: string;
    };
    architect?: {
        signature_data?: string;
        signed_at?: string;
        signer_name?: string;
    };
}

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(amount);
};

export const generateG702PDF = (
    app: PayApplication,
    project: ProjectInfo,
    items: BudgetItem[],
    signatures?: Signatures
) => {
    const doc = new jsPDF();
    const margin = 20;
    let y = 30;

    // Header
    doc.setFontSize(16);
    doc.text("APPLICATION AND CERTIFICATION FOR PAYMENT", 105, y, { align: "center" });
    doc.setFontSize(10);
    doc.text("(AIA Document G702)", 105, y + 7, { align: "center" });

    y += 20;

    // Project Info
    doc.setFont("helvetica", "bold");
    doc.text("TO OWNER:", margin, y);
    doc.setFont("helvetica", "normal");
    doc.text(app.owner_name || "—", margin + 30, y);

    doc.setFont("helvetica", "bold");
    doc.text("PROJECT:", 110, y);
    doc.setFont("helvetica", "normal");
    doc.text(project.name, 110 + 20, y);

    y += 7;
    doc.setFont("helvetica", "bold");
    doc.text("FROM:", margin, y);
    doc.setFont("helvetica", "normal");
    doc.text("General Contractor", margin + 30, y);

    doc.setFont("helvetica", "bold");
    doc.text("VIA ARCHITECT:", 110, y);
    doc.setFont("helvetica", "normal");
    doc.text(app.architect_name || "—", 110 + 35, y);

    y += 15;

    // Application Info
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, y, 170, 20, "F");
    doc.setFont("helvetica", "bold");
    doc.text("APPLICATION NO:", margin + 5, y + 8);
    doc.text("PERIOD TO:", margin + 5, y + 15);
    doc.text("PROJECT NO:", 110, y + 8);
    doc.text("CONTRACT DATE:", 110, y + 15);

    doc.setFont("helvetica", "normal");
    doc.text(app.application_number.toString(), margin + 45, y + 8);
    doc.text(format(new Date(app.period_to), "MMM d, yyyy"), margin + 45, y + 15);
    doc.text(app.architect_project_number || "—", 145, y + 8);
    doc.text(format(new Date(app.created_at), "MMM d, yyyy"), 145, y + 15);

    y += 30;

    // CONTRACTOR'S APPLICATION FOR PAYMENT
    doc.setFont("helvetica", "bold");
    doc.text("CONTRACTOR'S APPLICATION FOR PAYMENT", margin, y);
    y += 10;

    const summaryLines = [
        { label: "1. ORIGINAL CONTRACT SUM", value: app.original_contract },
        { label: "2. Net change by Change Orders", value: app.change_orders_total },
        { label: "3. CONTRACT SUM TO DATE", value: app.contract_to_date, bold: true },
        { label: "4. TOTAL COMPLETED & STORED TO DATE", value: app.total_completed },
        { label: "5. RETAINAGE", value: app.retainage_amount },
        { label: "6. TOTAL EARNED LESS RETAINAGE", value: app.total_earned_less_retainage, bold: true },
        { label: "7. LESS PREVIOUS CERTIFICATES", value: app.less_previous_certificates },
        { label: "8. CURRENT PAYMENT DUE", value: app.current_payment_due, bold: true },
        { label: "9. BALANCE TO FINISH, PLUS RETAINAGE", value: app.contract_to_date - app.total_earned_less_retainage },
    ];

    summaryLines.forEach((line) => {
        if (line.bold) doc.setFont("helvetica", "bold");
        else doc.setFont("helvetica", "normal");

        doc.text(line.label, margin + 5, y);
        doc.text(formatCurrency(line.value), 180, y, { align: "right" });
        y += 7;
    });

    y += 15;

    // Signatures
    doc.setFont("helvetica", "bold");
    doc.text("CONTRACTOR'S CERTIFICATION", margin, y);
    y += 7;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text("The undersigned Contractor certifies that to the best of the Contractor's knowledge, information and belief", margin, y);
    doc.text("the Work covered by this Application for Payment has been completed in accordance with the Contract Documents.", margin, y + 4);

    y += 15;

    // Signature areas
    const colWidth = 80;

    // Contractor Signature
    doc.line(margin, y + 15, margin + colWidth, y + 15);
    doc.text("CONTRACTOR:", margin, y + 20);
    if (signatures?.contractor?.signature_data) {
        try {
            doc.addImage(signatures.contractor.signature_data, "PNG", margin, y - 5, 40, 20);
        } catch (e) {
            console.warn("Failed to add contractor signature image");
        }
        doc.text(`Signed by: ${signatures.contractor.signer_name || "—"}`, margin, y + 25);
        doc.text(`Date: ${signatures.contractor.signed_at ? format(new Date(signatures.contractor.signed_at), "MMM d, yyyy") : "—"}`, margin, y + 30);
    }

    // Architect Signature
    doc.line(margin + 90, y + 15, margin + 90 + colWidth, y + 15);
    doc.text("ARCHITECT:", margin + 90, y + 20);
    if (signatures?.architect?.signature_data) {
        try {
            doc.addImage(signatures.architect.signature_data, "PNG", margin + 90, y - 5, 40, 20);
        } catch (e) {
            console.warn("Failed to add architect signature image");
        }
        doc.text(`Signed by: ${signatures.architect.signer_name || "—"}`, margin + 90, y + 25);
        doc.text(`Date: ${signatures.architect.signed_at ? format(new Date(signatures.architect.signed_at), "MMM d, yyyy") : "—"}`, margin + 90, y + 30);
    }

    doc.save(`G702-App-${app.application_number}.pdf`);
};

export const generateG703PDF = (
    app: PayApplication,
    project: ProjectInfo,
    items: BudgetItem[]
) => {
    const doc = new jsPDF("l", "mm", "a4");
    const margin = 15;
    let y = 20;

    // Header
    doc.setFontSize(14);
    doc.text("CONTINUATION SHEET (G703)", 148, y, { align: "center" });
    doc.setFontSize(9);

    y += 15;

    // Table Headers
    const cols = [
        { label: "Item No", width: 15 },
        { label: "Description", width: 60 },
        { label: "Scheduled Value", width: 30 },
        { label: "Prev Completed", width: 25 },
        { label: "This Period", width: 25 },
        { label: "Materials Stored", width: 25 },
        { label: "Total Completed", width: 25 },
        { label: "%", width: 15 },
        { label: "Retainage", width: 25 },
    ];

    let x = margin;
    doc.setFillColor(230, 230, 230);
    doc.rect(margin, y, 267, 10, "F");
    doc.setFont("helvetica", "bold");

    cols.forEach(col => {
        doc.text(col.label, x + 2, y + 6);
        x += col.width;
    });

    y += 10;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);

    items.forEach((item, index) => {
        if (y > 180) {
            doc.addPage("l");
            y = 20;
            doc.setFillColor(230, 230, 230);
            doc.rect(margin, y, 267, 10, "F");
            let tempX = margin;
            cols.forEach(col => {
                doc.text(col.label, tempX + 2, y + 6);
                tempX += col.width;
            });
            y += 10;
        }

        const totalCompleted = item.work_completed_previous + item.work_completed_current + item.materials_stored;
        const percent = item.scheduled_value > 0 ? (totalCompleted / item.scheduled_value) * 100 : 0;
        const retainage = totalCompleted * (item.retainage_percent / 100);

        let rowX = margin;
        doc.text((index + 1).toString(), rowX + 2, y + 6);
        rowX += cols[0].width;
        doc.text(item.description, rowX + 2, y + 6, { maxWidth: 55 });
        rowX += cols[1].width;
        doc.text(formatCurrency(item.scheduled_value), rowX + 23, y + 6, { align: "right" });
        rowX += cols[2].width;
        doc.text(formatCurrency(item.work_completed_previous), rowX + 23, y + 6, { align: "right" });
        rowX += cols[3].width;
        doc.text(formatCurrency(item.work_completed_current), rowX + 23, y + 6, { align: "right" });
        rowX += cols[4].width;
        doc.text(formatCurrency(item.materials_stored), rowX + 23, y + 6, { align: "right" });
        rowX += cols[5].width;
        doc.text(formatCurrency(totalCompleted), rowX + 23, y + 6, { align: "right" });
        rowX += cols[6].width;
        doc.text(`${percent.toFixed(1)}%`, rowX + 7, y + 6);
        rowX += cols[7].width;
        doc.text(formatCurrency(retainage), rowX + 23, y + 6, { align: "right" });

        y += 10;
        doc.line(margin, y, margin + 267, y);
    });

    doc.save(`G703-Continuation-${app.application_number}.pdf`);
};

export interface ChangeOrderInfo {
    co_number: number;
    title: string;
    description: string | null;
    amount: number;
    reason: string | null;
    status: string;
    created_at: string;
    approved_at: string | null;
    created_by_name?: string;
    approved_by_name?: string;
}

export const generateG701PDF = (
    co: ChangeOrderInfo,
    project: ProjectInfo,
    contractInfo?: {
        originalContract?: number;
        previousChanges?: number;
        contractDate?: string;
    },
    signatures?: any // Simplified for now since types might vary
) => {
    const doc = new jsPDF();
    const margin = 20;
    let y = 30;

    // Header
    doc.setFontSize(16);
    doc.text("CHANGE ORDER", 105, y, { align: "center" });
    doc.setFontSize(10);
    doc.text("(AIA Document G701)", 105, y + 7, { align: "center" });

    y += 20;

    // Basic Info
    doc.setFont("helvetica", "bold");
    doc.text("PROJECT:", margin, y);
    doc.setFont("helvetica", "normal");
    doc.text(project.name, margin + 40, y);

    doc.setFont("helvetica", "bold");
    doc.text("CHANGE ORDER NO:", 130, y);
    doc.setFont("helvetica", "normal");
    doc.text(co.co_number.toString(), 175, y);

    y += 7;
    doc.setFont("helvetica", "bold");
    doc.text("TO CONTRACTOR:", margin, y);
    doc.setFont("helvetica", "normal");
    doc.text("General Contractor", margin + 40, y);

    doc.setFont("helvetica", "bold");
    doc.text("DATE:", 130, y);
    doc.setFont("helvetica", "normal");
    doc.text(format(new Date(co.created_at), "MMM d, yyyy"), 175, y);

    y += 15;

    // THE CONTRACT IS CHANGED AS FOLLOWS:
    doc.setFont("helvetica", "bold");
    doc.text("THE CONTRACT IS CHANGED AS FOLLOWS:", margin, y);
    y += 10;
    doc.setFont("helvetica", "normal");
    const description = `${co.title}\n${co.description || ""}${co.reason ? `\nReason: ${co.reason}` : ""}`;
    const splitDesc = doc.splitTextToSize(description, 170);
    doc.text(splitDesc, margin, y);
    y += (splitDesc.length * 6) + 10;

    // Cost Breakdown
    const original = contractInfo?.originalContract || 0;
    const previous = contractInfo?.previousChanges || 0;
    const current = co.amount;
    const newTotal = original + previous + current;

    const tableData = [
        { label: "The original Contract Sum was", value: original },
        { label: "The net change by previously authorized Change Orders", value: previous },
        { label: "The Contract Sum prior to this Change Order was", value: original + previous },
        { label: "The Contract Sum will be increased by this Change Order in the amount of", value: current },
        { label: "The new Contract Sum including this Change Order will be", value: newTotal, bold: true },
    ];

    tableData.forEach(row => {
        if (row.bold) doc.setFont("helvetica", "bold");
        else doc.setFont("helvetica", "normal");

        doc.text(row.label, margin, y);
        doc.text(formatCurrency(row.value), 185, y, { align: "right" });
        y += 7;
    });

    y += 20;

    // Certification
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text("NOT VALID UNTIL SIGNED BY THE ARCHITECT, CONTRACTOR AND OWNER.", margin, y);
    y += 15;

    // Signatures
    const sigWidth = 55;

    // Architect
    doc.line(margin, y + 10, margin + sigWidth, y + 10);
    doc.text("ARCHITECT (Signature)", margin, y + 15);
    if (signatures?.architect?.signature_data) {
        try { doc.addImage(signatures.architect.signature_data, "PNG", margin, y - 5, 40, 15); } catch (e) { }
    }

    // Contractor
    doc.line(80, y + 10, 80 + sigWidth, y + 10);
    doc.text("CONTRACTOR (Signature)", 80, y + 15);
    if (signatures?.contractor?.signature_data) {
        try { doc.addImage(signatures.contractor.signature_data, "PNG", 80, y - 5, 40, 15); } catch (e) { }
    }

    // Owner
    doc.line(140, y + 10, 140 + sigWidth, y + 10);
    doc.text("OWNER (Signature)", 140, y + 15);
    if (signatures?.owner?.signature_data) {
        try { doc.addImage(signatures.owner.signature_data, "PNG", 140, y - 5, 40, 15); } catch (e) { }
    }

    doc.save(`G701-Change-Order-${co.co_number}.pdf`);
};

export const generateCombinedPDF = (
    app: PayApplication,
    project: ProjectInfo,
    items: BudgetItem[],
    signatures?: Signatures
) => {
    // Simple implementation just calls both and user gets two downloads
    // In a more complex one, we'd merge the documents into one PDF
    generateG702PDF(app, project, items, signatures);
    setTimeout(() => {
        generateG703PDF(app, project, items);
    }, 1000);
};
