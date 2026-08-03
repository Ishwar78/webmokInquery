import {
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import EnquiryForm from "../forms/EnquiryForm";
import "./InquiryPopup.css";

const POPUP_EVENT_NAME = "open-webmok-inquiry";

const popupBenefits = [
  {
    icon: BadgeCheck,
    title: "Practical Masterclass",
    description:
      "Learn video editing and digital marketing through practical guidance.",
  },
  {
    icon: UsersRound,
    title: "Expert Assistance",
    description:
      "Receive complete guidance according to your profile and career goals.",
  },
  {
    icon: Clock3,
    title: "Quick Response",
    description:
      "Our team will connect with you as soon as possible after submission.",
  },
];

export default function InquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);

  function openPopup() {
    setIsOpen(true);
  }

  function closePopup() {
    setIsOpen(false);
  }

  /*
   * Popup har browser tab/session mein
   * ek baar 4 seconds ke baad open hoga.
   */
  useEffect(() => {
    let timer;

    const alreadyOpened = sessionStorage.getItem(
      "webmok-inquiry-popup-opened",
    );

    if (!alreadyOpened) {
      timer = window.setTimeout(() => {
        setIsOpen(true);

        sessionStorage.setItem(
          "webmok-inquiry-popup-opened",
          "true",
        );
      }, 4000);
    }

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  /*
   * Website ke kisi bhi button se popup open:
   * window.dispatchEvent(
   *   new Event("open-webmok-inquiry")
   * );
   */
  useEffect(() => {
    function handleExternalOpen() {
      openPopup();
    }

    window.addEventListener(
      POPUP_EVENT_NAME,
      handleExternalOpen,
    );

    return () => {
      window.removeEventListener(
        POPUP_EVENT_NAME,
        handleExternalOpen,
      );
    };
  }, []);

  /*
   * Popup open hone par:
   * - Background scroll lock
   * - Escape key se popup close
   */
  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closePopup();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [isOpen]);

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          className="wm-inquiry-floating-button"
          onClick={openPopup}
          aria-label="Open inquiry form"
        >
          <span className="wm-inquiry-floating-button__shine" />

          <span className="wm-inquiry-floating-button__icon">
            <MessageCircleMore size={21} />
          </span>

          <span className="wm-inquiry-floating-button__content">
            <small>Need masterclass details?</small>
            <strong>Quick Inquiry</strong>
          </span>

          <span className="wm-inquiry-floating-button__arrow">
            ›
          </span>

          <span className="wm-inquiry-floating-button__pulse" />
        </button>
      )}

      {isOpen && (
        <div
          className="wm-inquiry-popup"
          role="presentation"
          onMouseDown={closePopup}
        >
          <div
            className="wm-inquiry-popup__backdrop-pattern"
            aria-hidden="true"
          />

          <div
            className="wm-inquiry-popup__orb wm-inquiry-popup__orb--one"
            aria-hidden="true"
          />

          <div
            className="wm-inquiry-popup__orb wm-inquiry-popup__orb--two"
            aria-hidden="true"
          />

          <div
            className="wm-inquiry-popup__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="wm-inquiry-popup-heading"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >
            <button
              type="button"
              className="wm-inquiry-popup__close"
              onClick={closePopup}
              aria-label="Close inquiry popup"
            >
              <X size={20} />
            </button>

            <div className="wm-inquiry-popup__layout">
              {/* Left Information Panel */}
              <aside className="wm-inquiry-popup__information">
                <div
                  className="wm-inquiry-popup__pattern"
                  aria-hidden="true"
                />

                <div
                  className="wm-inquiry-popup__information-glow"
                  aria-hidden="true"
                />

                <div className="wm-inquiry-popup__logo">
                  <div className="wm-inquiry-popup__logo-image">
                    <img
                      src="/assets/webmok-logo.png"
                      alt="Webmok"
                    />
                  </div>

                  <div>
                    <strong>WEBMOK</strong>
                    <span>Premium Masterclass 2026</span>
                  </div>
                </div>

                <div className="wm-inquiry-popup__information-content">
                  <span className="wm-inquiry-popup__eyebrow">
                    <Sparkles size={15} />
                    Limited Offline Seats
                  </span>

                  <h2>
                    Learn practical digital skills with
                    <span> professional guidance.</span>
                  </h2>

                  <p className="wm-inquiry-popup__description">
                    Share your details and our team will help
                    you with registration, payment, timing and
                    complete masterclass information.
                  </p>

                  <div className="wm-inquiry-popup__event-card">
                    <div>
                      <CalendarDays size={18} />

                      <span>
                        <small>Event Date</small>
                        <strong>22 August 2026</strong>
                      </span>
                    </div>

                    <div>
                      <Clock3 size={18} />

                      <span>
                        <small>Session Time</small>
                        <strong>10 AM – 1 PM</strong>
                      </span>
                    </div>
                  </div>

                  <div className="wm-inquiry-popup__benefits">
                    {popupBenefits.map((benefit) => {
                      const Icon = benefit.icon;

                      return (
                        <article
                          className="wm-inquiry-popup__benefit"
                          key={benefit.title}
                        >
                          <span className="wm-inquiry-popup__benefit-icon">
                            <Icon size={19} />
                          </span>

                          <div>
                            <strong>{benefit.title}</strong>

                            <p>{benefit.description}</p>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>

                <div className="wm-inquiry-popup__information-footer">
                  <span className="wm-inquiry-popup__footer-check">
                    <CheckCircle2 size={15} />
                  </span>

                  <span>
                    Offline Masterclass in Rohtak
                  </span>

                  <span className="wm-inquiry-popup__footer-dot" />

                  <strong>Only ₹199</strong>
                </div>
              </aside>

              {/* Right Form Panel */}
              <section className="wm-inquiry-popup__form-area">
                <div className="wm-inquiry-popup__mobile-logo">
                  <div className="wm-inquiry-popup__mobile-logo-image">
                    <img
                      src="/assets/webmok-logo.png"
                      alt="Webmok"
                    />
                  </div>

                  <div>
                    <strong>WEBMOK</strong>
                    <span>Premium Masterclass</span>
                  </div>
                </div>

                <div className="wm-inquiry-popup__form-top">
                  <span className="wm-inquiry-popup__form-badge">
                    <ShieldCheck size={15} />
                    Secure Inquiry Form
                  </span>

                  <span className="wm-inquiry-popup__response-badge">
                    <span />
                    Quick Response
                  </span>
                </div>

                <div className="wm-inquiry-popup__form-heading">
                  <span>Get Complete Details</span>

                  <h2 id="wm-inquiry-popup-heading">
                    Reserve your masterclass seat
                  </h2>

                  <p>
                    Fill in the form below and continue directly
                    on WhatsApp for personal assistance.
                  </p>
                </div>

                <div className="wm-inquiry-popup__form-progress">
                  <div className="wm-inquiry-popup__progress-item">
                    <span>01</span>
                    <div>
                      <strong>Enter Details</strong>
                      <small>Complete the form</small>
                    </div>
                  </div>

                  <span className="wm-inquiry-popup__progress-line" />

                  <div className="wm-inquiry-popup__progress-item">
                    <span>02</span>
                    <div>
                      <strong>Open WhatsApp</strong>
                      <small>Send your inquiry</small>
                    </div>
                  </div>
                </div>

                <div className="wm-inquiry-popup__form">
                  <EnquiryForm />
                </div>

                <div className="wm-inquiry-popup__privacy">
                  <ShieldCheck size={15} />

                  <p>
                    Your details are secure and will only be
                    used for masterclass assistance.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}