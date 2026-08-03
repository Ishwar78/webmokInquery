import { useState } from "react";
import { Sparkles } from "lucide-react";
import { marqueeItems } from "../../data/masterclassData";
import "./MarqueeBar.css";

export default function MarqueeBar() {
  const [isPaused, setIsPaused] = useState(false);

  const items = [...marqueeItems, ...marqueeItems];

  function handleMouseEnter() {
    setIsPaused(true);
  }

  function handleMouseLeave() {
    setIsPaused(false);
  }

  function handlePointerDown(event) {
    // Mobile/tablet tap support
    if (event.pointerType !== "mouse") {
      setIsPaused((previousState) => !previousState);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsPaused((previousState) => !previousState);
    }
  }

  return (
    <div
      className={`wm-marquee ${
        isPaused ? "wm-marquee--paused" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onPointerDown={handlePointerDown}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={isPaused}
      aria-label={
        isPaused
          ? "Resume scrolling announcements"
          : "Pause scrolling announcements"
      }
    >
      <div className="wm-marquee__track">
        {items.map((item, index) => (
          <div
            className="wm-marquee__item"
            key={`${item}-${index}`}
          >
            <Sparkles size={16} />

            <span>{item}</span>
          </div>
        ))}
      </div>

      <span className="wm-marquee__status">
        {isPaused ? "Tap to resume" : "Tap to pause"}
      </span>
    </div>
  );
}