import { CheckCircle2 } from "lucide-react";
import SectionHeader from "../components/common/SectionHeader";
import {
  agendaCards,
  audiencePoints,
  learningPoints,
  schedule,
} from "../data/masterclassData";
import "./CourseOverviewSection.css";

export default function CourseOverviewSection() {
  return (
    <section
      className="wm-section wm-section-surface"
      id="curriculum"
    >
      <div className="wm-container">
        <SectionHeader
          eyebrow="Masterclass Details"
          title="Premium learning flow for"
          accent="real-world results"
          description="Enquiry form ke baad yeh section course ke exact outcomes, agenda aur target audience ko clear karta hai, taaki user easily decide kar sake."
          align="center"
        />

        {/* Learning Cards */}
        <div className="wm-learning-grid">
          {learningPoints.map((point) => {
            const Icon = point.icon;

            return (
              <article
                className="wm-learning-card wm-card"
                key={point.title}
              >
                <div className="wm-learning-card__icon">
                  <Icon size={22} />
                </div>

                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            );
          })}
        </div>

        <div className="wm-agenda-grid" id="overview">
          {/* What Will Be Covered */}
          <div className="wm-agenda-block wm-card">
            <h3>What will be covered?</h3>

            <div className="wm-agenda-cards">
              {agendaCards.map((card, index) => (
                <article
                  className="wm-agenda-card"
                  key={card.title}
                >
                  <div className="wm-agenda-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="wm-agenda-card__content">
                    <h4>{card.title}</h4>

                    <ul>
                      {card.items.map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={17} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Session Breakdown */}
          <div className="wm-schedule-block wm-card">
            <h3>3-Hour Session Breakdown</h3>

            <div className="wm-schedule-list">
              {schedule.map((item) => (
                <div
                  className="wm-schedule-item"
                  key={item.step}
                >
                  <div className="wm-schedule-item__step">
                    {item.step}
                  </div>

                  <div className="wm-schedule-item__content">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Audience Section */}
        <div className="wm-audience-block wm-card">
          <div>
            <h3>Who should attend this masterclass?</h3>

            <p>
              Ye session specially un logon ke liye curated hai jo
              digital skills ko practical तरीके se seekhna chahte
              hain aur future growth ke liye ek strong direction
              lena chahte hain.
            </p>
          </div>

          <div className="wm-audience-list">
            {audiencePoints.map((item) => (
              <div
                className="wm-audience-list__item"
                key={item}
              >
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}