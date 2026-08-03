import {
  CheckCircle2,
  Clock3,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";

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
      className="wm-section wm-course-overview"
      id="curriculum"
    >
      {/* Decorative background elements */}
      <div
        className="wm-course-overview__glow wm-course-overview__glow--one"
        aria-hidden="true"
      />

      <div
        className="wm-course-overview__glow wm-course-overview__glow--two"
        aria-hidden="true"
      />

      <div
        className="wm-course-overview__grid-pattern"
        aria-hidden="true"
      />

      <div className="wm-container wm-course-overview__container">
        <SectionHeader
          eyebrow="Masterclass Details"
          title="Premium learning flow for"
          accent="real-world results"
          align="center"
        />

        {/* Top Highlights */}
        <div className="wm-course-highlights">
          <div className="wm-course-highlight">
            <Clock3 size={17} />
            <span>3-Hour Practical Session</span>
          </div>

          <div className="wm-course-highlight">
            <Target size={17} />
            <span>Industry-Focused Learning</span>
          </div>

          <div className="wm-course-highlight">
            <Sparkles size={17} />
            <span>Beginner-Friendly Training</span>
          </div>
        </div>

        {/* Learning Cards */}
        <div className="wm-learning-grid">
          {learningPoints.map((point, index) => {
            const Icon = point.icon;

            return (
              <article
                className="wm-learning-card"
                key={point.title}
              >
                <div className="wm-learning-card__top">
                  <div className="wm-learning-card__icon">
                    <Icon size={25} strokeWidth={1.9} />
                  </div>

                  <span className="wm-learning-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="wm-learning-card__content">
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>

                <div
                  className="wm-learning-card__shine"
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>

        {/* Agenda and Timeline */}
        <div className="wm-agenda-grid" id="overview">
          {/* Agenda */}
          <div className="wm-overview-panel wm-agenda-block">
            <div className="wm-overview-panel__header">
              <div className="wm-overview-panel__header-icon">
                <Target size={21} />
              </div>

              <div className="wm-overview-panel__heading">
                <span className="wm-overview-block__label">
                  Complete Agenda
                </span>

                <h3>What will be covered?</h3>

                <p>
                  Explore the practical topics included in this
                  masterclass and understand exactly what you will
                  learn.
                </p>
              </div>
            </div>

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
                          <span className="wm-list-check">
                            <CheckCircle2
                              size={16}
                              strokeWidth={2.2}
                            />
                          </span>

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Session Timeline */}
          <div className="wm-overview-panel wm-schedule-block">
            <div className="wm-overview-panel__header">
              <div className="wm-overview-panel__header-icon">
                <Clock3 size={21} />
              </div>

              <div className="wm-overview-panel__heading">
                <span className="wm-overview-block__label">
                  Session Timeline
                </span>

                <h3>3-Hour Session Breakdown</h3>

                <p>
                  A focused learning journey designed to deliver
                  maximum practical value within three productive
                  hours.
                </p>
              </div>
            </div>

            <div className="wm-schedule-list">
              {schedule.map((item, index) => (
                <article
                  className="wm-schedule-item"
                  key={item.step}
                >
                  <div className="wm-schedule-item__rail">
                    <div className="wm-schedule-item__step">
                      {item.step}
                    </div>

                    {index !== schedule.length - 1 && (
                      <span
                        className="wm-schedule-item__line"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <div className="wm-schedule-item__content">
                    <span className="wm-schedule-item__eyebrow">
                      Session {String(index + 1).padStart(2, "0")}
                    </span>

                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="wm-schedule-footer">
              <Sparkles size={18} />

              <span>
                Practical guidance, live examples and actionable
                learning.
              </span>
            </div>
          </div>
        </div>

        {/* Audience Section */}
        <div className="wm-audience-block">
          <div className="wm-audience-block__content">
            <div className="wm-audience-block__icon">
              <UsersRound size={28} />
            </div>

            <span className="wm-overview-block__label">
              Perfect For You
            </span>

            <h3>Who should attend this masterclass?</h3>

            <p>
              This session is specially curated for individuals who
              want to learn practical digital skills, explore modern
              career opportunities and gain clear direction for future
              growth.
            </p>
          </div>

          <div className="wm-audience-list">
            {audiencePoints.map((item, index) => (
              <div
                className="wm-audience-list__item"
                key={item}
              >
                <span className="wm-audience-list__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="wm-audience-list__check">
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </span>

                <span className="wm-audience-list__text">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}