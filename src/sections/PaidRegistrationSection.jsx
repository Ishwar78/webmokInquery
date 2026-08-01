import {
  ArrowRight,
  Copy,
  IndianRupee,
  QrCode,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
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

      window.setTimeout(() => {
        setCopied(false);
      }, 1600);
    } catch (error) {
      console.error("Unable to copy UPI ID:", error);
      setCopied(false);
    }
  }

  return (
    <section
      className="wm-section wm-paid-section"
      id="paid-registration"
    >
      <div className="wm-paid-section__glow wm-paid-section__glow--left" />
      <div className="wm-paid-section__glow wm-paid-section__glow--right" />

      <div className="wm-container">
        <div className="wm-paid-grid">
          <div className="wm-paid-info wm-card">
            <div className="wm-paid-info__header">
              <div className="wm-paid-info__price">
                <span>Registration Fee</span>

                <h3>
                  <IndianRupee size={24} />
                  {EVENT.fee}
                </h3>
              </div>

              <div className="wm-paid-info__badge">
                <ShieldCheck size={18} />

                <span>
                  Seat confirmation after payment verification
                </span>
              </div>
            </div>

            <div className="wm-paid-info__qr-wrap">
              <div className="wm-paid-info__qr-card">
                <img
                  src={EVENT.qrImage}
                  alt={`${EVENT.upiPayee} payment QR code`}
                />
              </div>

              <div className="wm-paid-info__actions">
                <a
                  className="wm-primary-btn"
                  href={buildUpiUrl()}
                  aria-label="Pay registration fee using UPI application"
                >
                  <QrCode size={18} />
                  Pay with UPI App
                </a>

                <button
                  className="wm-secondary-btn"
                  type="button"
                  onClick={handleCopy}
                >
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
                <li>UPI ya QR code ke through payment karein.</li>

                <li>
                  Payment successful hone ke baad Transaction/UTR ID
                  copy karein.
                </li>

                <li>
                  Registration form mein correct Transaction/UTR ID
                  enter karein.
                </li>

                <li>
                  Form submit karte hi Webmok Team ka WhatsApp direct
                  open hoga.
                </li>

                <li>
                  WhatsApp par final message send karke seat
                  confirmation receive karein.
                </li>
              </ol>
            </div>

            <a className="wm-link-btn" href="#faqs">
              Need clarification? Read FAQs
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="wm-paid-form-wrap">
            <PaidRegistrationForm />
          </div>
        </div>
      </div>
    </section>
  );
}