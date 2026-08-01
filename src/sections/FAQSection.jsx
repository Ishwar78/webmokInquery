import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "../data/masterclassData";
import SectionHeader from "../components/common/SectionHeader";
import "./FAQSection.css";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="wm-section wm-section-surface" id="faqs">
      <div className="wm-container">
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title="Everything you need before"
          accent="registration"
          description="Agar user ko payment, session type, screenshot ya eligibility ko लेकर doubt ho, to yeh FAQ section unhe instantly clear guidance deta hai."
          align="center"
        />

        <div className="wm-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <article className={`wm-faq-item wm-card ${isOpen ? "is-open" : ""}`} key={faq.question}>
                <button type="button" className="wm-faq-item__toggle" onClick={() => setActiveIndex(isOpen ? -1 : index)}>
                  <span>{faq.question}</span>
                  <ChevronDown size={20} />
                </button>
                {isOpen ? <p>{faq.answer}</p> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
