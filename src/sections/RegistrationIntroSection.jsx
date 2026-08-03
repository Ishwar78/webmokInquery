import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import EnquiryForm from "../components/forms/EnquiryForm";
import { EVENT, perks } from "../data/masterclassData";
import "./RegistrationIntroSection.css";

export default function RegistrationIntroSection() {
  return (
    <section
      className="wm-section wm-registration-section"
      id="enquiry-form"
    >
      {/* Background Decorations */}
      <div
        className="wm-registration-section__shape wm-registration-section__shape--one"
        aria-hidden="true"
      />

      <div
        className="wm-registration-section__shape wm-registration-section__shape--two"
        aria-hidden="true"
      />

      <div
        className="wm-registration-section__dots"
        aria-hidden="true"
      />

      <div className="wm-container wm-registration-container">
        {/* Section Heading */}
        <div className="wm-registration-heading">
          <span className="wm-registration-heading__eyebrow">
            <Sparkles size={16} />
            Quick Enquiry
          </span>

          <h2>
            Take the first step towards
            <span> practical digital learning</span>
          </h2>

          {/* <p>
            Submit your enquiry and our team will guide you through
            the complete masterclass, payment and seat confirmation
            process.
          </p> */}
        </div>

        <div className="wm-registration-grid">
          {/* Left Content */}
          <div className="wm-registration-copy">
            {/* Perks Cards */}
            <div className="wm-registration-copy__cards">
              {perks.map((perk, index) => {
                const Icon = perk.icon;

                return (
                  <article
                    className="wm-registration-copy__card"
                    key={perk.title}
                  >
                    <div className="wm-registration-copy__card-top">
                      <div className="wm-registration-copy__icon">
                        <Icon size={23} strokeWidth={1.9} />
                      </div>

                      <span className="wm-registration-copy__number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3>{perk.title}</h3>

                    <div
                      className="wm-registration-copy__card-glow"
                      aria-hidden="true"
                    />
                  </article>
                );
              })}
            </div>

            {/* Why Enquire */}
            <div className="wm-registration-copy__note">
              <div className="wm-registration-copy__note-header">
                <div className="wm-registration-copy__note-icon">
                  <ShieldCheck size={23} />
                </div>

                <div>
                  <span>Personal Assistance</span>
                  <h3>Why enquire first?</h3>
                </div>
              </div>

              <ul>
                <li>
                  <span className="wm-registration-copy__check">
                    <CheckCircle2 size={17} />
                  </span>

                  <span>
                    Our team will explain the complete masterclass
                    process and payment confirmation procedure.
                  </span>
                </li>

                <li>
                  <span className="wm-registration-copy__check">
                    <CheckCircle2 size={17} />
                  </span>

                  <span>
                    Whether you are a beginner, student or business
                    owner, you will receive guidance based on your
                    profile and goals.
                  </span>
                </li>

                <li>
                  <span className="wm-registration-copy__check">
                    <CheckCircle2 size={17} />
                  </span>

                  <span>
                    Offline seats are limited, so submitting an early
                    enquiry is highly recommended.
                  </span>
                </li>
              </ul>

              <div className="wm-registration-copy__cta-row">
                <a
                  href={`tel:${EVENT.callNumber}`}
                  className="wm-registration-call-btn"
                >
                  <span className="wm-registration-call-btn__icon">
                    <Phone size={18} />
                  </span>

                  <span className="wm-registration-call-btn__text">
                    <small>Need help?</small>
                    Call {EVENT.callNumber}
                  </span>
                </a>

                <a
                  href="#paid-registration"
                  className="wm-registration-paid-btn"
                >
                  Go to Paid Registration
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="wm-registration-form-column">
            <div className="wm-registration-form-shell">
              <div
                className="wm-registration-form-shell__glow"
                aria-hidden="true"
              />

              <div className="wm-registration-form-header">
                <span className="wm-registration-form-header__badge">
                  <ShieldCheck size={15} />
                  Secure Enquiry
                </span>

                <h3>Reserve your masterclass seat</h3>

                {/* <p>
                  Fill in your details and continue directly on
                  WhatsApp for quick personal assistance.
                </p> */}
              </div>

              <div className="wm-registration-form-wrap">
                <EnquiryForm />
              </div>

              <div className="wm-registration-form-footer">
                <ShieldCheck size={16} />

                <span>
                  Your information is secure and used only for
                  registration assistance.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}