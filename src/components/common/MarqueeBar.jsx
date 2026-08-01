import { Sparkles } from "lucide-react";
import { marqueeItems } from "../../data/masterclassData";
import "./MarqueeBar.css";

export default function MarqueeBar() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="wm-marquee">
      <div className="wm-marquee__track">
        {items.map((item, index) => (
          <div className="wm-marquee__item" key={`${item}-${index}`}>
            <Sparkles size={16} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
