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
            Web Mok ke premium masterclass landing page ke through aap enquiry aur paid registration dono ko
            professional तरीके se manage kar sakte ho.
          </p>
        </div>

        <div className="wm-footer__contact">
          <h3>Quick Contact</h3>
          <a href={`tel:${EVENT.callNumber}`}>
            <Phone size={18} />
            {EVENT.callNumber}
          </a>
          <a href={waHref} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>

        <div className="wm-footer__social">
          <h3>Social Connect</h3>
          <div>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter / X">
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
