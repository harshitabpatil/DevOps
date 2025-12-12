import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const images = [
  "/assets/imageslp/lpslide1.jpg",
  "/assets/imageslp/lpslide2.jpg",
  "/assets/imageslp/lpslide3.jpg",
  "/assets/imageslp/lpslide1.jpg",
];

const LpImageSlide = () => {
  return (
    <div className="longtailsliderwrap col-md-10 m-auto">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        breakpoints={{
          1200: { slidesPerView: 4 },
          992: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: `${(5 / 3) * 100}%`, // Enforce 3:8 ratio
                overflow: "hidden",
                borderRadius: "10px",
              }}
            >
              <img
                src={src}
                alt={`Slide ${idx}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LpImageSlide;
