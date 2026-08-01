import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Expand,
  Images,
  Sparkles,
  X,
} from "lucide-react";
import "./GallerySection.css";

const galleryImages = [
  {
    id: 1,
    image: "/images/gallery/student.jpg",
    title: "Interactive Learning Session",
    category: "Masterclass",
    size: "large",
  },
  {
    id: 2,
    image: "/images/gallery/student1.jpg",
    title: "Live Practical Training",
    category: "Training",
    size: "normal",
  },
  {
    id: 3,
    image: "/images/gallery/student3.jpeg",
    title: "Expert Guidance",
    category: "Mentorship",
    size: "normal",
  },
  {
    id: 4,
    image: "/images/gallery/student4.jpeg",
    title: "Creative Workshop",
    category: "Workshop",
    size: "tall",
  },
  {
    id: 5,
    image: "/images/gallery/student6.jpeg",
    title: "Hands-on Experience",
    category: "Practical",
    size: "normal",
  },
  {
    id: 6,
    image: "/images/gallery/student13.jpeg",
    title: "Student Collaboration",
    category: "Community",
    size: "wide",
  },
  {
    id: 7,
    image: "/images/gallery/student14.jpeg",
    title: "Professional Environment",
    category: "Experience",
    size: "normal",
  },
//   {
//     id: 8,
//     image: "/images/gallery/gallery-8.jpg",
//     title: "Memorable Moments",
//     category: "Event",
//     size: "normal",
//   },
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const isGalleryOpen = activeIndex !== null;
  const activeImage =
    activeIndex !== null ? galleryImages[activeIndex] : null;

  const openGallery = (index) => {
    setActiveIndex(index);
  };

  const closeGallery = () => {
    setActiveIndex(null);
  };

  const showPreviousImage = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0
        ? galleryImages.length - 1
        : currentIndex - 1
    );
  };

  const showNextImage = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === galleryImages.length - 1
        ? 0
        : currentIndex + 1
    );
  };

  useEffect(() => {
    if (!isGalleryOpen) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isGalleryOpen]);

  return (
    <>
      <section className="wm-gallery-section wm-section" id="gallery">
        <div className="wm-gallery-glow wm-gallery-glow--left" />
        <div className="wm-gallery-glow wm-gallery-glow--right" />

        <div className="wm-container">
          <div className="wm-gallery-header">
            <div className="wm-gallery-header__content">
              <span className="wm-gallery-eyebrow">
                <Sparkles size={16} />
                Event Highlights
              </span>

              <h2>
                Explore our memorable
                <span> masterclass moments</span>
              </h2>
{/* 
              <p>
                Real learning, expert guidance aur practical sessions ki
                kuch special glimpses dekhiye.
              </p> */}
            </div>

            <div className="wm-gallery-header__badge">
              <span className="wm-gallery-header__badge-icon">
                <Images size={25} />
              </span>

              <span>
                <strong>{galleryImages.length}+</strong>
                Event Moments
              </span>
            </div>
          </div>

          <div className="wm-gallery-grid">
            {galleryImages.map((item, index) => (
              <article
                className={`wm-gallery-card wm-gallery-card--${item.size}`}
                key={item.id}
              >
                <button
                  className="wm-gallery-card__button"
                  type="button"
                  onClick={() => openGallery(index)}
                  aria-label={`Open ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <span className="wm-gallery-card__overlay" />

                  <span className="wm-gallery-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="wm-gallery-card__expand">
                    <Expand size={19} />
                  </span>

                  <span className="wm-gallery-card__content">
                    <span className="wm-gallery-card__category">
                      {item.category}
                    </span>

                    <strong>{item.title}</strong>
                  </span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {isGalleryOpen && activeImage && (
        <div
          className="wm-gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          onClick={closeGallery}
        >
          <button
            type="button"
            className="wm-gallery-modal__close"
            onClick={closeGallery}
            aria-label="Close gallery"
          >
            <X size={23} />
          </button>

          <button
            type="button"
            className="wm-gallery-modal__navigation wm-gallery-modal__navigation--previous"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            aria-label="Previous image"
          >
            <ArrowLeft size={24} />
          </button>

          <div
            className="wm-gallery-modal__content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="wm-gallery-modal__image-wrap">
              <img
                src={activeImage.image}
                alt={activeImage.title}
              />
            </div>

            <div className="wm-gallery-modal__details">
              <div>
                <span>{activeImage.category}</span>
                <h3>{activeImage.title}</h3>
              </div>

              <p>
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(galleryImages.length).padStart(2, "0")}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="wm-gallery-modal__navigation wm-gallery-modal__navigation--next"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            aria-label="Next image"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}