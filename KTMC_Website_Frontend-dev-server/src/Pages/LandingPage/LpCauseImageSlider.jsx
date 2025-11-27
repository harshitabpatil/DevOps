import React, { useState, useEffect, useRef } from "react";

const originalImages = [
  {
    src: "/assets/causes/cause-item1.jpg",
    title: "Livelihood",
    details: "Support for income-generating activities.",
  },
  {
    src: "/assets/causes/cause-item2.jpg",
    title: "Education",
    details: "Providing quality education for all.",
  },
  {
    src: "/assets/causes/cause-item3.jpg",
    title: "Healthcare",
    details: "Ensuring access to medical services.",
  },
  {
    src: "/assets/causes/cause-item1.jpg",
    title: "Water Access",
    details: "Safe water for communities.",
  },
  {
    src: "/assets/causes/cause-item2.jpg",
    title: "Climate Action",
    details: "Fighting climate change locally.",
  },
];

const LpCauseImageSlider = () => {
//  Handle button click for navigation
    const handleLearnMoreClick = () => {
    window.location.href = "/ourcauses"; // or use React Router navigation
  };


  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);
  const trackRef = useRef(null);

  const updateItemsPerSlide = () => {
    const width = window.innerWidth;
    if (width <= 576) setItemsPerSlide(1);
    else if (width <= 768) setItemsPerSlide(2);
    else if (width <= 992) setItemsPerSlide(3);
    else setItemsPerSlide(4);
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

  return (
    <div className="col-md-10 m-auto">
      <div className="masked-slider-wrapper lonheigtslide">
        <div
          className={`masked-slider-track ${transition ? "smooth" : ""}`}
          ref={trackRef}
          style={{
            width: `${totalWidth}%`,
            transform: `translateX(-${translateX}%)`,
            display: "flex",
          }}
        >
          {images.map((img, i) => (
            <div
              className="masked-slide-item"
              key={i}
              style={{
                width: `${100 / images.length}%`,
                padding: "10px",
                boxSizing: "border-box",
              }}
            >
              <div className="masked-image-wrapper">
                <img
                  className="masked-img"
                  src={img.src}
                  alt={img.title}
                  style={{
                    width: "100%",
                    height: "400px", // tall image height
                    objectFit: "cover",
                    maskImage: "none",
                    WebkitMaskImage: "none",
                  }}
                />
                <div className="hover-overlay">
                  <h4>{img.title}</h4>
                  <p>{img.details}</p>
                  <button className="learn-more-btn" onClick={handleLearnMoreClick}>Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LpCauseImageSlider;
