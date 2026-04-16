"use client";

import { useState } from "react";
import { brand } from "@/config/brand";

function buildReceiptBody(input: {
  donorName: string;
  giftNumber: string;
  giftDate: string;
  receiptAmountCents: number;
  fundName: string;
  campaignName?: string | null;
}) {
  return `Dear ${input.donorName},

Thank you for supporting ${brand.name}!

This email serves as your receipt for the following contribution:

Gift ID: ${input.giftNumber}
Gift Date: ${input.giftDate}
Amount: $${(input.receiptAmountCents / 100).toLocaleString()}
Fund: ${input.fundName}
Campaign: ${input.campaignName ?? "N/A"}

No goods or services were provided in exchange for this contribution.

With gratitude,
${brand.name}`;
}

export function SendReceiptButton({
  giftId,
  giftNumber,
  donorName,
  donorEmail,
  giftDate,
  receiptAmountCents,
  fundName,
  campaignName,
  initiallySent
}: {
  giftId: string;
  giftNumber: string;
  donorName: string;
  donorEmail: string | null;
  giftDate: string;
  receiptAmountCents: number;
  fundName: string;
  campaignName?: string | null;
  initiallySent: boolean;
}) {
  const [sent, setSent] = useState(initiallySent);
  const [submitting, setSubmitting] = useState(false);

  if (!donorEmail) {
    return (
      <button type="button" className="secondary" disabled>
        No Email on File
      </button>
    );
  }

  return (
    <button
      type="button"
      className="secondary"
      disabled={submitting}
      onClick={async () => {
        setSubmitting(true);

        await fetch(`/api/gifts/${giftId}/receipt`, {
          method: "POST",
          credentials: "same-origin"
        });

        setSent(true);
        setSubmitting(false);

        const subject = `Thank you for supporting ${brand.name}!`;
        const body = buildReceiptBody({
          donorName,
          giftNumber,
          giftDate,
          receiptAmountCents,
          fundName,
          campaignName
        });

        const mailto = `mailto:${encodeURIComponent(donorEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
      }}
    >
      {submitting ? "Opening E-Receipt..." : sent ? "E-Receipt Sent" : "Send E-Receipt"}
    </button>
  );
}
