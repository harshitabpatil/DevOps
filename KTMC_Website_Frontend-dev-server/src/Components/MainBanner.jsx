import React, { useEffect, useState } from "react";

const bannerData = [
  {
    image: "/assets/mainbanner/slide1.jpg",
    content: (
      <>
         Humanity provides <div className="bannersbutitle"> love, support, and belonging</div>
      </>
    ),
    position: "bottom-right",
    icon: "/assets/icons/bannericon.png",
    link: "/about",
    cta: "Donate here",
  },

  {
    image: "/assets/mainbanner/slide3.jpg",
    content: (
      <>
       Education powers<div className="bannersbutitle">their path to a better future</div>
      </>
    ),
    position: "center",
    icon: "/assets/icons/bannericon.png",
    link: "/about",
    cta: "Donate here",
  },
  {
    image: "/assets/mainbanner/slide2.jpg",
    content: (
      <>
        Health provides strength,<div className="bannersbutitle">vitality, and wellness </div>
      </>
    ),
    position: "top-left",
    icon: "/assets/icons/bannericon.png",
    link: "/about",
    cta: "Donate here",
  },
];

const MainBanner = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setHasLoaded(true), 100);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("fade-out");

      setTimeout(() => {
        const next = (current + 1) % bannerData.length;
        setPrev(current);
        setCurrent(next);
        setFadeState("fade-in");
      }, 600);
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const currentBanner = bannerData[current];
  const prevBanner = bannerData[prev];

  return (
    <div className="banner-container bgbattomblack">
      <div
        className={`bg-layer ${fadeState === "fade-out" ? "visible" : ""}`}
        style={{ backgroundImage: `url(${currentBanner.image})` }}
      />

      <div
        className={`bg-layer ${fadeState === "fade-in" ? "visible" : ""}`}
        style={{ backgroundImage: `url(${currentBanner.image})` }}
      />

      <div className="gradient-overlay" />

      <div
        className={`banner-content ${currentBanner.position} ${fadeState} ${
          !hasLoaded ? "initial-load" : ""
        }`}
      >
        <h1>{currentBanner.content}</h1>

        <div className="banner_cta_wrap">
          <div className="bannercta d-flex btn-black-cover">
            <div className="blackcover"></div>
            {currentBanner.cta && currentBanner.link && (
              <a
                href={currentBanner.link}
                className="banner-cta btn liquid m-0"
              >
                {currentBanner.cta}
              </a>
            )}

            {currentBanner.icon && (
              <img src={currentBanner.icon} alt="" className="banner-icon" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
