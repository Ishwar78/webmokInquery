/**
 * WhatsApp number ko clean format mein convert karta hai.
 * Indian 10-digit number ho to automatically 91 add karta hai.
 */
export function formatWhatsappNumber(number) {
  const digits = String(number || "").replace(/\D/g, "");

  if (!digits) {
    return "";
  }

  if (digits.length === 10) {
    return `91${digits}`;
  }

  return digits;
}

/**
 * Fixed WhatsApp number ki chat direct open karta hai.
 *
 * navigator.share use nahi hota, isliye app ya contact
 * selection panel open nahi hoga.
 */
export function openWhatsAppMessage(number, message) {
  const phone = formatWhatsappNumber(number);

  if (!phone) {
    throw new Error("WhatsApp number missing hai.");
  }

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  /*
   * Same tab redirect mobile par WhatsApp application aur
   * desktop par WhatsApp Web ki fixed chat open karega.
   */
  window.open(whatsappUrl, "_blank");

  return {
    mode: "message",
    phone,
  };
}

/**
 * Normal enquiry form ka WhatsApp message.
 */
export function buildInquiryMessage(
  values,
  eventTitle,
  eventDate
) {
  return [
    "Hello Webmok Team,",
    "",
    `I want to enquire for: ${eventTitle}`,
    `Event Date: ${eventDate}`,
    "",
    `Name: ${values.name || "Not provided"}`,
    `Phone: ${values.phone || "Not provided"}`,
    `Email: ${values.email || "Not provided"}`,
    `City: ${values.city || "Not provided"}`,
    `Profile: ${values.profile || "Not provided"}`,
    `Goal: ${values.goal || "Not provided"}`,
  ].join("\n");
}

/**
 * Paid registration form ka WhatsApp message.
 * Payment screenshot field completely remove kar diya gaya hai.
 */
export function buildPaidRegistrationMessage(
  values,
  eventData
) {
  return [
    "Hello Webmok Team,",
    "",
    "*PAID REGISTRATION DETAILS*",
    "",
    `Event: ${eventData.title}`,
    `Event Date: ${eventData.date}`,
    `Registration Amount: ₹${eventData.fee}`,
    "",
    `Name: ${values.name || "Not provided"}`,
    `Phone: ${values.phone || "Not provided"}`,
    `Email: ${values.email || "Not provided"}`,
    `City: ${values.city || "Not provided"}`,
    `Profile: ${values.profile || "Not provided"}`,
    `Payment Mode: ${values.paymentMode || "Not provided"}`,
    `Transaction / UTR ID: ${
      values.transactionId || "Not provided"
    }`,
    `Additional Notes: ${values.note || "NA"}`,
    "",
    "I have completed the payment. Please verify my Transaction/UTR ID and confirm my seat.",
  ].join("\n");
}

/**
 * Backward compatibility:
 * Kisi purani file mein ye function imported ho to error nahi aayega.
 * Ab ye native share panel use nahi karta; fixed WhatsApp chat direct kholta hai.
 */
export async function shareToWhatsAppWithOptionalFile(
  number,
  message
) {
  return openWhatsAppMessage(number, message);
}