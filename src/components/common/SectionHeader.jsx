import "./SectionHeader.css";

export default function SectionHeader({ eyebrow, title, accent, description, align = "left" }) {
  return (
    <div className={`wm-section-header wm-section-header--${align}`}>
      {eyebrow ? <span className="wm-section-header__eyebrow">{eyebrow}</span> : null}
      <h2>
        {title} {accent ? <span>{accent}</span> : null}
      </h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
