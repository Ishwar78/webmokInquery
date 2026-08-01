import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { EVENT } from "../../data/masterclassData";
import "./Navbar.css";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Enquiry", href: "#enquiry-form" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Paid Registration", href: "#paid-registration" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="wm-nav-wrap">
      <div className="wm-container wm-nav">
        <a className="wm-brand" href="#top" onClick={closeMenu}>
          <img src="/assets/webmok-logo.png" alt="Web Mok" />
          <div>
            {/* <strong>Web Mok</strong> */}
            {/* <span>Premium Event Registration Page</span> */}
          </div>
        </a>

        <nav className={`wm-nav-links ${open ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="wm-nav-call-mobile" href={`tel:${EVENT.callNumber}`} onClick={closeMenu}>
            <Phone size={16} />
            {EVENT.callNumber}
          </a>
        </nav>

        <div className="wm-nav-actions">
          <a className="wm-nav-phone" href={`tel:${EVENT.callNumber}`}>
            <Phone size={18} />
            <span>{EVENT.callNumber}</span>
          </a>
          <a className="wm-primary-btn wm-nav-cta" href="#paid-registration">
            Confirm Seat
          </a>
          <button
            className="wm-nav-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
