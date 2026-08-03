import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Copy,
  IndianRupee,
  QrCode,
  ShieldCheck,
  Smartphone,
  Sparkles,
  WalletCards,
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

const paymentSteps = [
  {
    title: "Scan and pay",
    text: "Scan the displayed QR code or use the UPI payment button.",
  },
  {
    title: "Complete payment",
    text: `Pay the registration fee of ₹${EVENT.fee} using any supported UPI application.`,
  },
  {
    title: "Copy Transaction ID",
    text: "After successful payment, copy the Transaction ID or UTR number.",
  },
  {
    title: "Submit registration",
    text: "Enter the correct payment details in the registration form.",
  },
  {
    title: "Confirm on WhatsApp",
    text: "Send the prepared WhatsApp message to receive final seat confirmation.",
  },
];

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
      {/* Decorative background */}
      <div
        className="wm-paid-section__glow wm-paid-section__glow--left"
        aria-hidden="true"
      />

      <div
        className="wm-paid-section__glow wm-paid-section__glow--right"
        aria-hidden="true"
      />

      <div
        className="wm-paid-section__dots"
        aria-hidden="true"
      />

      <div className="wm-container wm-paid-container">
        {/* Section heading */}
        <div className="wm-paid-heading">
          <span className="wm-paid-heading__eyebrow">
            <Sparkles size={16} />
            Complete Your Registration
          </span>

          <h2>
            Pay securely and reserve your
            <span> masterclass seat</span>
          </h2>
{/* 
          <p>
            Complete the UPI payment, enter your Transaction ID and
            submit the registration form for final confirmation.
          </p> */}

          <div className="wm-paid-heading__trust">
            <span>
              <ShieldCheck size={16} />
              Secure payment
            </span>

            <span>
              <BadgeCheck size={16} />
              Manual verification
            </span>

            <span>
              <Clock3 size={16} />
              Quick confirmation
            </span>
          </div>
        </div>

        <div className="wm-paid-grid">
          {/* Payment Information */}
          <div className="wm-paid-info">
            <div className="wm-paid-info__top">
              <div className="wm-paid-info__price">
                <span>Masterclass Registration Fee</span>

                <div className="wm-paid-info__amount">
                  <IndianRupee size={31} strokeWidth={2.4} />
                  <strong>{EVENT.fee}</strong>
                  <small>only</small>
                </div>

                <p>
                  One-time payment for the complete offline
                  masterclass experience.
                </p>
              </div>

              <div className="wm-paid-info__secure-badge">
                <span className="wm-paid-info__secure-icon">
                  <ShieldCheck size={21} />
                </span>

                <div>
                  <small>Payment Protected</small>
                  <strong>Secure UPI Process</strong>
                </div>
              </div>
            </div>

            {/* QR and Actions */}
            <div className="wm-paid-info__payment-area">
              <div className="wm-paid-info__qr-column">
                <div className="wm-paid-info__qr-label">
                  <QrCode size={16} />
                  Scan to Pay
                </div>

                <div className="wm-paid-info__qr-card">
                  <span className="wm-paid-info__qr-corner wm-paid-info__qr-corner--one" />
                  <span className="wm-paid-info__qr-corner wm-paid-info__qr-corner--two" />
                  <span className="wm-paid-info__qr-corner wm-paid-info__qr-corner--three" />
                  <span className="wm-paid-info__qr-corner wm-paid-info__qr-corner--four" />

                  <img
                    src={EVENT.qrImage}
                    alt={`${EVENT.upiPayee} payment QR code`}
                  />
                </div>

                <div className="wm-paid-info__qr-note">
                  <Smartphone size={15} />
                  Use any UPI application
                </div>
              </div>

              <div className="wm-paid-info__payment-content">
                <span className="wm-paid-info__payment-label">
                  <WalletCards size={17} />
                  Payment Options
                </span>

                <h3>Choose your preferred payment method</h3>

                <p>
                  Scan the QR code from another device or open your
                  installed UPI application directly.
                </p>

                <div className="wm-paid-info__actions">
                  <a
                    className="wm-paid-primary-btn"
                    href={buildUpiUrl()}
                    aria-label="Pay registration fee using UPI application"
                  >
                    <span>
                      <QrCode size={19} />
                    </span>

                    Pay with UPI App

                    <ArrowRight size={18} />
                  </a>

                  <button
                    className={`wm-paid-copy-btn ${
                      copied ? "wm-paid-copy-btn--copied" : ""
                    }`}
                    type="button"
                    onClick={handleCopy}
                  >
                    <span>
                      {copied ? (
                        <CheckCircle2 size={18} />
                      ) : (
                        <Copy size={18} />
                      )}
                    </span>

                    {copied ? "UPI ID Copied" : "Copy UPI ID"}
                  </button>
                </div>

                <div className="wm-paid-info__payment-message">
                  <ShieldCheck size={17} />

                  <span>
                    Your seat will be confirmed after successful
                    payment verification.
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="wm-paid-info__meta">
              <article className="wm-paid-info__meta-card">
                <span className="wm-paid-info__meta-icon">
                  <WalletCards size={18} />
                </span>

                <div>
                  <small>UPI ID</small>
                  <strong>{EVENT.upiId}</strong>
                </div>
              </article>

              <article className="wm-paid-info__meta-card">
                <span className="wm-paid-info__meta-icon">
                  <BadgeCheck size={18} />
                </span>

                <div>
                  <small>Payee Name</small>
                  <strong>{EVENT.upiPayee}</strong>
                </div>
              </article>

              <article className="wm-paid-info__meta-card">
                <span className="wm-paid-info__meta-icon">
                  <Clock3 size={18} />
                </span>

                <div>
                  <small>Event Date</small>
                  <strong>{EVENT.date}</strong>
                </div>
              </article>
            </div>

            {/* Payment Steps */}
            <div className="wm-paid-info__steps">
              <div className="wm-paid-info__steps-heading">
                <div className="wm-paid-info__steps-icon">
                  <CheckCircle2 size={21} />
                </div>

                <div>
                  <span>Simple Payment Process</span>
                  <h3>How registration works</h3>
                </div>
              </div>

              <div className="wm-paid-info__steps-list">
                {paymentSteps.map((step, index) => (
                  <article
                    className="wm-paid-info__step"
                    key={step.title}
                  >
                    <div className="wm-paid-info__step-rail">
                      <span className="wm-paid-info__step-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {index !== paymentSteps.length - 1 && (
                        <span className="wm-paid-info__step-line" />
                      )}
                    </div>

                    <div className="wm-paid-info__step-content">
                      <h4>{step.title}</h4>
                      <p>{step.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <a className="wm-paid-faq-link" href="#faqs">
              <span>
                <ShieldCheck size={17} />
                Need payment clarification?
              </span>

              <strong>
                Read FAQs
                <ArrowRight size={17} />
              </strong>
            </a>
          </div>

          {/* Registration Form */}
          <div className="wm-paid-form-column">
            <div className="wm-paid-form-shell">
              <div
                className="wm-paid-form-shell__glow"
                aria-hidden="true"
              />

              <div className="wm-paid-form-header">
                <div className="wm-paid-form-header__top">
                  <span className="wm-paid-form-header__badge">
                    <ShieldCheck size={15} />
                    Payment Verification
                  </span>

                  <span className="wm-paid-form-header__price">
                    ₹{EVENT.fee}
                  </span>
                </div>

                <h3>Complete your registration</h3>

                <p>
                  Enter your personal and payment details carefully to
                  submit your masterclass registration.
                </p>
              </div>

              <div className="wm-paid-form-wrap">
                <PaidRegistrationForm />
              </div>

              <div className="wm-paid-form-footer">
                <div>
                  <ShieldCheck size={16} />
                  Secure details
                </div>

                <span />

                <div>
                  <BadgeCheck size={16} />
                  Manual verification
                </div>
              </div>
            </div>

            <div className="wm-paid-form-note">
              <Sparkles size={16} />

              <p>
                Enter the exact Transaction ID or UTR number shown in
                your payment application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}