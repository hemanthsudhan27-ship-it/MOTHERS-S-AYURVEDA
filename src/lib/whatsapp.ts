// ─── WhatsApp Enquiry Utility ──────────────────────────────────────────────────

import { siteConfig } from "@/data/config";

export interface EnquiryData {
  name: string;
  phone: string;
  checkin: string;
  checkout: string;
  guests: string;
  room: string;
  message?: string;
}

/**
 * Generates a formatted WhatsApp enquiry message and opens WhatsApp web/app.
 */
export function generateWhatsAppMessage(data: EnquiryData): void {
  const message = `Hello Mother's Homestay,

I would like to enquire about availability.

*Name:* ${data.name}
*Phone:* ${data.phone}
*Room:* ${data.room}
*Check-in:* ${data.checkin}
*Check-out:* ${data.checkout}
*Guests:* ${data.guests}${
    data.message
      ? `

*Additional Request:*
${data.message}`
      : ""
  }

Is this room available?

Thank you.`;

  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Generates a pre-filled WhatsApp enquiry for a specific room (from room pages).
 */
export function enquireAboutRoom(roomName: string): void {
  const message = `Hello Mother's Homestay,

I am interested in the *${roomName}* and would like to enquire about availability.

Could you please let me know:
• Available dates
• Current rates
• Any special offers

Thank you.`;

  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
