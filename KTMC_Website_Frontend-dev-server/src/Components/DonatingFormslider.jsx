import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const initialSlides = [
  {
    image: "/assets/causes/cause-item1.jpg",
    target: 1000,
    donated: 250,
  },
  {
    image: "/assets/causes/cause-item2.jpg",
    target: 2000,
    donated: 850,
  },
  {
    image: "/assets/causes/cause-item3.jpg",
    target: 1500,
    donated: 500,
  },
];

export default function DonatingFormslider() {
  const [slides, setSlides] = useState(initialSlides);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [donationAmount, setDonationAmount] = useState("");
  const [animating, setAnimating] = useState(false);

  const handleDonate = () => {
    const amount = parseFloat(donationAmount);
    if (!amount || amount <= 0) return;
    const updatedSlides = [...slides];
    updatedSlides[currentSlide].donated += amount;
    setSlides(updatedSlides);
    setDonationAmount("");
  };

  const triggerSlideChange = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setAnimating(false);
    }, 500); // duration must match CSS animation
  };

  useEffect(() => {
    const interval = setInterval(triggerSlideChange, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[currentSlide];
  const progress = Math.min(
    (current.donated / current.target) * 100,
    100
  ).toFixed(1);

  return (
    <div className="donatingformslider">
      <div className="left">
        <p className="title_caption">
          <span></span>Featured Campaign
        </p>
        <h2>Support This Cause</h2>
        <p className="blackpage_grey pb-5">
          Our campaign aims to provide essential resources to underprivileged children, giving them access to education, healthcare, and a brighter future. Your donation will directly impact their lives and contribute to building stronger communities.
        </p>

        <div className="d-flex ">
          <p className="m-0 ml-auto">Funded</p>{" "}
          <div className="ms-auto">{progress} %</div>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="rightside-cta d-flex ">
          <p className="m-0 ml-auto">
            Raised:{" "}
            <strong>
              <i className="fa fa-inr"></i>
              {current.donated}
            </strong>{" "}
            / Campaign Goal:{" "}
            <strong>
              <i className="fa fa-inr"></i>
              {current.target}
            </strong>
          </p>{" "}
          <div className="cause_cta_banner ms-auto">
            <button onClick={handleDonate}>Donate Now</button>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="slider-container">
          <div
            className={`slide-image ${animating ? "slide-out" : "slide-in"}`}
            style={{ backgroundImage: `url(${current.image})` }}
          />
        </div>
        <button className="next-btn" onClick={triggerSlideChange}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
