import {
  BadgeCheck,
  Clock3,
  MessageCircleMore,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import EnquiryForm from "../forms/EnquiryForm";
import "./InquiryPopup.css";

const POPUP_EVENT_NAME = "open-webmok-inquiry";

export default function InquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);

  function openPopup() {
    setIsOpen(true);
  }

  function closePopup() {
    setIsOpen(false);
  }

  /*
   * Popup automatic open:
   * Har browser tab/session mein ek baar 4 seconds ke baad open hoga.
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
   * Website ke kisi bhi button se popup open karne ke liye
   * custom event listener.
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
   * - background scroll band
   * - Escape key se close
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
          <span className="wm-inquiry-floating-button__icon">
            <MessageCircleMore size={21} />
          </span>

          <span className="wm-inquiry-floating-button__content">
            <small>Have a question?</small>
            <strong>Quick Inquiry</strong>
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
          <div className="wm-inquiry-popup__orb wm-inquiry-popup__orb--one" />
          <div className="wm-inquiry-popup__orb wm-inquiry-popup__orb--two" />

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
              <X size={21} />
            </button>

            <div className="wm-inquiry-popup__layout">
              {/* Left Information Area */}
              <aside className="wm-inquiry-popup__information">
                <div className="wm-inquiry-popup__pattern" />

                <div className="wm-inquiry-popup__logo">
                  <img
                    src="/assets/webmok-logo.png"
                    alt="Webmok"
                  />

                  <div>
                    <strong>WEBMOK</strong>
                    <span>Masterclass 2026</span>
                  </div>
                </div>

                <div className="wm-inquiry-popup__information-content">
                  <span className="wm-inquiry-popup__eyebrow">
                    <Sparkles size={15} />
                    Limited Seats Available
                  </span>

                  <h2>
                    Start your digital career with
                    <span> practical guidance.</span>
                  </h2>

                  <p>
                    Share your details and our team
                    will help you with batch timing,
                    registration and complete
                    masterclass information.
                  </p>

                  <div className="wm-inquiry-popup__benefits">
                    <div className="wm-inquiry-popup__benefit">
                      <span>
                        <BadgeCheck size={19} />
                      </span>

                      <div>
                        <strong>
                          Practical Masterclass
                        </strong>
                        <p>
                          Learn video editing and
                          digital marketing practically.
                        </p>
                      </div>
                    </div>

                    <div className="wm-inquiry-popup__benefit">
                      <span>
                        <UsersRound size={19} />
                      </span>

                      <div>
                        <strong>
                          Expert Guidance
                        </strong>
                        <p>
                          Get complete guidance from
                          industry professionals.
                        </p>
                      </div>
                    </div>

                    <div className="wm-inquiry-popup__benefit">
                      <span>
                        <Clock3 size={19} />
                      </span>

                      <div>
                        <strong>
                          Quick Response
                        </strong>
                        <p>
                          Our team will connect with
                          you as soon as possible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wm-inquiry-popup__information-footer">
                  <span />
                  Offline Masterclass • 22 August 2026
                </div>
              </aside>

              {/* Existing Enquiry Form */}
              <section className="wm-inquiry-popup__form-area">
                <div className="wm-inquiry-popup__mobile-logo">
                  <img
                    src="/assets/webmok-logo.png"
                    alt="Webmok"
                  />

                  <div>
                    <strong>WEBMOK</strong>
                    <span>Premium Masterclass</span>
                  </div>
                </div>

                <div className="wm-inquiry-popup__form-heading">
                  <span>Quick Inquiry</span>

                  <h2 id="wm-inquiry-popup-heading">
                    Get Complete Masterclass Details
                  </h2>

                  <p>
                    Fill in your details and our team
                    will contact you shortly.
                  </p>
                </div>

                <div className="wm-inquiry-popup__form">
                  <EnquiryForm />
                </div>

                <p className="wm-inquiry-popup__privacy">
                  By submitting the form, you agree to
                  be contacted regarding this
                  masterclass.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}