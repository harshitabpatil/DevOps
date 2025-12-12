import React, { useState, useEffect, useRef } from "react";
import "./CauseImageSlider.css";

const originalImages = [
  {
    src: "/assets/causes/cause-item1.jpg",
    maskSrc: "/assets/causes/itemmask.png",
    title: "Livelihood",
    details: "Empowering people, building the future",
  },
  {
    src: "/assets/causes/cause-item2.jpg",
    maskSrc: "/assets/causes/itemmask.png",
    title: "Education",
    details: "Knowledge opens every door.",
  },
  {
    src: "/assets/causes/cause-item3.jpg",
    maskSrc: "/assets/causes/itemmask.png",
    title: "Healthcare",
    details: "Healthy lives, thriving communities.",
  },
  {
    src: "/assets/causes/cause-item1.jpg",
    maskSrc: "/assets/landingpage/masklayer.png",
    title: "Water Access",
    details: "Clean water, a basic right.",
  },
  {
    src: "/assets/causes/cause-item2.jpg",
    maskSrc: "/assets/causes/itemmask.png",
    title: "Climate Action",
    details: "Protecting our planet, securing our future.",
  },
];

const CauseImageSlider = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);
  const [clickedItemIndex, setClickedItemIndex] = useState(null); // New state for clicked items
  const trackRef = useRef(null);

  const updateItemsPerSlide = () => {
    const width = window.innerWidth;
    if (width <= 576) setItemsPerSlide(1);
    else if (width <= 992) setItemsPerSlide(2);
    else setItemsPerSlide(3);
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const [images, setImages] = useState([]);

  useEffect(() => {
    const cloned = [
      ...originalImages,
      ...originalImages.slice(0, itemsPerSlide),
    ];
    setImages(cloned);
    setCurrent(0);
  }, [itemsPerSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const track = trackRef.current;

    const handleTransitionEnd = () => {
      if (current === originalImages.length) {
        // Disable transition and snap back to original first slide
        setTransition(false);
        setCurrent(0);
      }
    };

    track.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      track.removeEventListener("transitionend", handleTransitionEnd);
  }, [current]);

  useEffect(() => {
    if (!transition) {
      const timer = setTimeout(() => setTransition(true), 50);
      return () => clearTimeout(timer);
    }
  }, [transition]);

  const totalWidth = (images.length * 100) / itemsPerSlide;
  const translateX = (current * 100) / images.length;

  // Handle mobile click event
  const handleMobileClick = (index) => {
    if (window.innerWidth <= 992) {
      setClickedItemIndex(index);
    }
  };

  return (
    <div className="masked-slider-wrapper">
      <div
        className={`masked-slider-track ${transition ? "smooth" : ""}`}
        ref={trackRef}
        style={{
          width: `${totalWidth}%`,
          transform: `translateX(-${translateX}%)`,
        }}
      >
        {images.map((img, i) => (
          <div
            className="masked-slide-item"
            key={i}
            style={{ width: `${100 / images.length}%` }}
          >
            <div
              className={`masked-image-wrapper ${
                clickedItemIndex === i ? "clicked" : ""
              }`}
              onClick={() => handleMobileClick(i)} // Trigger click on mobile
            >
              <img
                className="masked-img"
                src={img.src}
                alt={img.title}
                style={{
                  WebkitMaskImage: `url(${img.maskSrc})`,
                  maskImage: `url(${img.maskSrc})`,
                }}
              />
              <div className="hover-overlay">
                <h4>{img.title}</h4>
                <p>{img.details}</p>
                <button className="learn-more-btn">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CauseImageSlider;
