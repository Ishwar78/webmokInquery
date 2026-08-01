import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import EnquiryForm from "../components/forms/EnquiryForm";
import { EVENT, perks } from "../data/masterclassData";
import "./RegistrationIntroSection.css";

export default function RegistrationIntroSection() {
  return (
    <section
      className="wm-section wm-registration-section"
      id="enquiry-form"
    >
      <div className="wm-registration-section__glow wm-registration-section__glow--left" />
      <div className="wm-registration-section__glow wm-registration-section__glow--right" />

      <div className="wm-container wm-registration-grid">
        <div className="wm-registration-copy">
          <div className="wm-registration-copy__cards">
            {perks.map((perk) => {
              const Icon = perk.icon;

              return (
                <div
                  className="wm-registration-copy__card wm-card"
                  key={perk.title}
                >
                  <div className="wm-registration-copy__icon">
                    <Icon size={20} />
                  </div>

                  <h3>{perk.title}</h3>
                </div>
              );
            })}
          </div>

          <div className="wm-registration-copy__note wm-card">
            <h3>Why enquire first?</h3>

            <ul>
              <li>
                <CheckCircle2 size={18} />

                <span>
                  Team aapko masterclass flow aur payment confirmation process
                  samjhayegi.
                </span>
              </li>

              <li>
                <CheckCircle2 size={18} />

                <span>
                  Beginner ho ya business owner, aapke profile ke hisaab se
                  guidance milegi.
                </span>
              </li>

              <li>
                <CheckCircle2 size={18} />

                <span>
                  Offline seats limited hain, isliye early enquiry recommended
                  hai.
                </span>
              </li>
            </ul>

            <div className="wm-registration-copy__cta-row">
              <a
                href={`tel:${EVENT.callNumber}`}
                className="wm-secondary-btn"
              >
                <Phone size={18} />
                Call {EVENT.callNumber}
              </a>

              <a href="#paid-registration" className="wm-link-btn">
                Go to Paid Registration
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="wm-registration-form-wrap">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}