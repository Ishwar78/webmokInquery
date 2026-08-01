export function formatWhatsappNumber(number) {
  const digits = String(number || "").replace(/\D/g, "");
  if (!digits) return "";
  if (digits.length === 10) return `91${digits}`;
  return digits;
}

export function openWhatsAppMessage(number, message) {
  const phone = formatWhatsappNumber(number);
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function buildInquiryMessage(values, eventTitle, eventDate) {
  return [
    "Hello Webmok Team,",
    "",
    `I want to enquire for: ${eventTitle}`,
    `Event Date: ${eventDate}`,
    "",
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email || "Not provided"}`,
    `City: ${values.city}`,
    `Profile: ${values.profile}`,
    `Goal: ${values.goal}`,
  ].join("\n");
}

export function buildPaidRegistrationMessage(values, eventData) {
  return [
    "Hello Webmok Team,",
    "",
    `I have completed paid registration for: ${eventData.title}`,
    `Event Date: ${eventData.date}`,
    `Amount: ₹${eventData.fee}`,
    "",
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email || "Not provided"}`,
    `City: ${values.city}`,
    `Profile: ${values.profile}`,
    `Payment Mode: ${values.paymentMode}`,
    `Transaction ID: ${values.transactionId || "Not provided"}`,
    `Screenshot Attached: ${values.paymentScreenshot ? values.paymentScreenshot.name : "No"}`,
    `Notes: ${values.note || "NA"}`,
  ].join("\n");
}

export async function shareToWhatsAppWithOptionalFile(number, message, file) {
  const phone = formatWhatsappNumber(number);

  if (file && navigator.share && navigator.canShare) {
    try {
      const shareData = { text: message, files: [file], title: "Webmok Paid Registration" };
      if (navigator.canShare(shareData)) {
        await navigator.share(shareData);
        return { mode: "share" };
      }
    } catch (error) {
      if (error?.name === "AbortError") {
        return { mode: "cancelled" };
      }
    }
  }

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  return { mode: file ? "fallback" : "message" };
}
