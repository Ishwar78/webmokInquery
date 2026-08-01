import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";

import {
  EVENT,
  heroStats,
  quickHighlights,
} from "../data/masterclassData";

import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="wm-hero" id="top">
      <div className="wm-hero__bg-orb wm-hero__bg-orb--one" />
      <div className="wm-hero__bg-orb wm-hero__bg-orb--two" />

      {/* Full-width hero container */}
      <div className="wm-hero__container wm-hero__grid">
        {/* Left content */}
        <div className="wm-hero__copy">
          <span className="wm-chip">
            <Sparkles size={16} />
            Premium Offline Event for Future Creators
          </span>

          <h1>
            Learn <span>Video Editing</span> &amp;{" "}
            <span>Digital Marketing</span> in a Powerful Offline
            Masterclass.
          </h1>

          <p>
            22 August ko hone wali 3-hour masterclass mein practical
            workflow, creative thinking aur marketing foundation ko premium
            experience ke saath seekho. Ye session students, freelancers,
            creators aur business owners ke liye specially designed hai.
          </p>

          <div className="wm-hero__highlights">
            {quickHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div className="wm-hero__highlight" key={item.text}>
                  <Icon size={18} />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>

          <div className="wm-hero__actions">
            <a className="wm-primary-btn" href="#enquiry-form">
              Register Interest
              <ArrowRight size={18} />
            </a>

            <a className="wm-secondary-btn" href="#paid-registration">
              Paid Registration
            </a>
          </div>

          <div className="wm-hero__trust-row">
            <div>
              <CheckCircle2 size={18} />
              <span>Practical Learning</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>Limited Seats</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>WhatsApp Confirmation</span>
            </div>
          </div>
        </div>

        {/* Right video card */}
        <div className="wm-hero__visual wm-card">
          <div className="wm-hero__visual-top">
            <div>
              <span>Live Event</span>
              <strong>{EVENT.shortTitle}</strong>
            </div>

            <a
              href="#paid-registration"
              className="wm-hero__visual-tag"
            >
              Confirm Seat
            </a>
          </div>

          <div className="wm-hero__poster">
            <video
              className="wm-hero__video"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              // poster="/assets/hero-masterclass-visual.svg"
            >
              <source
                src="/assets/Video.mp4"
                type="video/mp4"
              />

              Your browser does not support the video tag.
            </video>
          </div>

          {/* Event details below video */}
          <div className="wm-hero__floating-card">
            <div>
              <CalendarDays size={17} />
              <span>{EVENT.date}</span>
            </div>

            <div>
              <Clock3 size={17} />
              <span>{EVENT.time}</span>
            </div>

            <div>
              <MapPin size={17} />
              <span>Rohtak • Offline</span>
            </div>
          </div>

          <div className="wm-hero__stats">
            {heroStats.map((stat) => (
              <div className="wm-hero__stat-box" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}