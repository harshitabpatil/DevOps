import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    image: "/assets/testimonial/testimoanial1.png",
    name: "Jane Doe",
    text: "The support was life-changing.",
  },
  {
    image: "/assets/testimonial/testimoanial2.png",
    name: "Elana",
    text: "KTMC gave me a second chance.",
  },
  {
    image: "/assets/testimonial/testimoanial3.png",
    name: "Sarah Williams",
    text: "They truly care.",
  },
  {
    image: "/assets/testimonial/testimoanial4.png",
    name: "Michael Brown",
    text: "KTMC made a difference.",
  },
  {
    image: "/assets/testimonial/testimoanial3.png",
    name: "David Lee",
    text: "I am forever grateful.",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="testimonial-section">
      <h2 className="top-title">What Our Clients Say</h2>
      <p className="mb-5">
        We are dedicated to making a positive impact on the lives of those we serve.
         Our clients' experiences highlight the effectiveness of our programmes and the dedication 
         of our team. We strive to provide support and resources that empower individuals and strengthen our 
         community, a testament to the success of our shared efforts.
      </p>

      <Swiper
        modules={[Autoplay, Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true} // Adds prev/next arrows
        a11y={{
          prevSlideMessage: "Previous testimonial",
          nextSlideMessage: "Next testimonial",
          firstSlideMessage: "This is the first testimonial",
          lastSlideMessage: "This is the last testimonial",
        }}
        breakpoints={{
          480: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img src={item.image} alt={item.name} />
              <h4 className="name">{item.name}</h4>
              <p className="details">"{item.text}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
