import { Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import EnquiryForm from "./EnquiryForm";
import "./EnquiryPopup.css";

const SESSION_KEY = "wm_popup_seen";

export default function EnquiryPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Show popup on every page load / refresh
    const timer = setTimeout(() => {
      setVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  function handleClose() {
    // Play closing animation, then unmount
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 300);
  }

  function handleBackdropClick(event) {
    // Close only if the user clicked the backdrop itself, not the modal
    if (event.target === event.currentTarget) {
      handleClose();
    }
  }

  // Close on Escape key
  useEffect(() => {
    if (!visible) return;

    function onKeyDown(event) {
      if (event.key === "Escape") handleClose();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [visible]);

  // Prevent body scroll while open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`wm-popup-backdrop${closing ? " is-closing" : ""}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Register Interest — Free Enquiry"
    >
      <div className="wm-popup-modal">
        {/* Top bar */}
        <div className="wm-popup-topbar">
          <span className="wm-popup-topbar__badge">
            <Sparkles size={13} />
            Limited Seats — Register Now
          </span>

          <button
            className="wm-popup-close"
            type="button"
            onClick={handleClose}
            aria-label="Close enquiry popup"
          >
            <X size={18} />
          </button>
        </div>

        {/* Reuse the same EnquiryForm — zero code duplication */}
        <EnquiryForm />
      </div>
    </div>
  );
}
