import { ArrowRight, Copy, IndianRupee, QrCode, ShieldCheck } from "lucide-react";
import { useState } from "react";
import SectionHeader from "../components/common/SectionHeader";
import PaidRegistrationForm from "../components/forms/PaidRegistrationForm";
import { EVENT } from "../data/masterclassData";
import "./PaidRegistrationSection.css";

function buildUpiUrl() {
  const params = new URLSearchParams({
    pa: EVENT.upiId,
    pn: EVENT.upiPayee,
    am: String(EVENT.fee),
    cu: "INR",
    tn: `${EVENT.title} Registration`,
  });
  return `upi://pay?${params.toString()}`;
}

export default function PaidRegistrationSection() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EVENT.upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="wm-section" id="paid-registration">
      <div className="wm-container">
        {/* <SectionHeader
          eyebrow="Step 2"
          title="Secure your seat with"
          accent="Paid Registration"
          description="Hero ke niche enquiry aur course details ke baad ye second major conversion section hai. Yahan user QR/UPI payment karke transaction ID ya screenshot ke saath registration complete kar sakta hai."
          align="center"
        /> */}

        <div className="wm-paid-grid">
          <div className="wm-paid-info wm-card">
            <div className="wm-paid-info__header">
              <div>
                <span>Registration Fee</span>
                <h3>
                  <IndianRupee size={24} /> {EVENT.fee}
                </h3>
              </div>
              <div className="wm-paid-info__badge">
                <ShieldCheck size={18} />
                <span>Seat confirmation after verification</span>
              </div>
            </div>

            <div className="wm-paid-info__qr-wrap">
              <div className="wm-paid-info__qr-card">
                <img src={EVENT.qrImage} alt="Webmok payment QR code" />
              </div>
              <div className="wm-paid-info__actions">
                <a className="wm-primary-btn" href={buildUpiUrl()}>
                  <QrCode size={18} />
                  Pay with UPI App
                </a>
                <button className="wm-secondary-btn" type="button" onClick={handleCopy}>
                  <Copy size={18} />
                  {copied ? "UPI ID Copied" : "Copy UPI ID"}
                </button>
              </div>
            </div>

            <div className="wm-paid-info__meta">
              <div>
                <small>UPI ID</small>
                <strong>{EVENT.upiId}</strong>
              </div>
              <div>
                <small>Payee Name</small>
                <strong>{EVENT.upiPayee}</strong>
              </div>
              <div>
                <small>Event Date</small>
                <strong>{EVENT.date}</strong>
              </div>
            </div>

            <div className="wm-paid-info__steps">
              <h4>How it works</h4>
              <ol>
                <li>UPI/QR se payment karein.</li>
                <li>Paid registration form fill karein.</li>
                <li>Transaction ID ya screenshot mein se kam se kam ek zaroor bhejein.</li>
                <li>WhatsApp par final message send karke seat confirmation lein.</li>
              </ol>
            </div>

            <a className="wm-link-btn" href="#faqs">
              Need clarification? Read FAQs
              <ArrowRight size={17} />
            </a>
          </div>

          <PaidRegistrationForm />
        </div>
      </div>
    </section>
  );
}
