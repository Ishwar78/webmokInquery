import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MessageCircle, Phone } from "lucide-react";
import { EVENT } from "../data/masterclassData";
import "./FooterSection.css";

export default function FooterSection() {
  const waHref = `https://wa.me/${String(EVENT.whatsappNumber).replace(/\D/g, "")}`;

  return (
    <footer className="wm-footer">
      <div className="wm-container wm-footer__grid">
        <div className="wm-footer__brand">
          <img src="/assets/webmok-logo.png" alt="Web Mok" />
          <p>
           Webmok’s premium masterclass platform provides a seamless and professional experience 
           for managing enquiries and paid registrations.
          </p>
        </div>

        <div className="wm-footer__contact">
          <h3>Quick Contact</h3>
          <a href={`tel:${EVENT.callNumber}`}>
            <Phone size={18} />
            {EVENT.callNumber}
          </a><br/>
          <a href={waHref} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>

        <div className="wm-footer__social">
          <h3>Social Connect</h3>
          <div>
            <a href="https://www.instagram.com/webmokofficial" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/webmok" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://x.com/webmokofficial" aria-label="Twitter / X">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="wm-container">
        <div className="wm-footer__divider" />
      </div>
      <div className="wm-footer__bottom">© 2026 Web Mok. All rights reserved.</div>
    </footer>
  );
}
