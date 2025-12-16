import { useState } from "react";
import Header from "../../Components/Header";
import OpenGeneralForm from "../../Components/OpenGeneralForm";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaLinkedinIn,

} from "react-icons/fa6"
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import GeneralDonataionForm from '../../Components/GeneralDonataionForm';
import { Helmet } from 'react-helmet-async'; // ✅ Add this line

const Humanity = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  //  cards-sec
  // const sliderRef = useRef(null);
  // const intervalRef = useRef(null);

  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };

  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   let scrollAmount = 0;
  //   const cardWidth = 312 + 16;
  //   const totalWidth = cardWidth * 5;

  //   const startAutoScroll = () => {
  //     intervalRef.current = setInterval(() => {
  //       scrollAmount += cardWidth;

  //       // Loop the slider
  //       if (scrollAmount >= totalWidth) {
  //         scrollAmount = 0;
  //         slider.scrollTo({ left: 0, behavior: "instant" }); // Instantly reset
  //       } else {
  //         slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
  //       }
  //     }, 2000);
  //   };

  //   startAutoScroll(); // Start auto-scroll

  //   // Pause auto-scroll when user hovers
  //   const handleMouseEnter = () => clearInterval(intervalRef.current);
  //   const handleMouseLeave = () => {
  //     clearInterval(intervalRef.current);
  //     startAutoScroll(); // Resume scrolling
  //   };

  //   slider.addEventListener("mouseenter", handleMouseEnter);
  //   slider.addEventListener("mouseleave", handleMouseLeave);

  //   return () => {
  //     clearInterval(intervalRef.current);
  //     slider.removeEventListener("mouseenter", handleMouseEnter);
  //     slider.removeEventListener("mouseleave", handleMouseLeave);
  //   };
  // }, []);


  // ftrsliderfunctions
  // const ftrsliderRef = useRef(null);
  // const ftrintervalRef = useRef(null);

  // useEffect(() => {
  //   const ftrslider = ftrsliderRef.current;
  //   let scrollAmount = 0;
  //   const cardWidth = 320 + 6;
  //   const totalWidth = cardWidth * 6;

  //   const startAutoScroll = () => {
  //     ftrintervalRef.current = setInterval(() => {
  //       scrollAmount += cardWidth;

  //       // Loop the slider
  //       if (scrollAmount >= totalWidth) {
  //         scrollAmount = 0;
  //         ftrslider.scrollTo({ left: 0, behavior: "instant" }); // Instantly reset
  //       } else {
  //         ftrslider.scrollTo({ left: scrollAmount, behavior: "smooth" });
  //       }
  //     }, 2000);
  //   };

  //   startAutoScroll(); // Start auto-scroll

  //   // Pause auto-scroll when user hovers
  //   const handleMouseEnter = () => clearInterval(ftrintervalRef.current);
  //   const handleMouseLeave = () => {
  //     clearInterval(ftrintervalRef.current);
  //     startAutoScroll(); // Resume scrolling
  //   };

  //   ftrslider.addEventListener("mouseenter", handleMouseEnter);
  //   ftrslider.addEventListener("mouseleave", handleMouseLeave);

  //   return () => {
  //     clearInterval(ftrintervalRef.current);
  //     ftrslider.removeEventListener("mouseenter", handleMouseEnter);
  //     ftrslider.removeEventListener("mouseleave", handleMouseLeave);
  //   };
  // }, []);


  return (
    <div>
      <Helmet>
        <title>KTMC – Join the World of Humanity & Compassion</title>
        <meta
          name="description"
          content="Step into the World of Humanity with KTMC. Support food, education, and social causes that uplift lives and build a kinder, more compassionate world."
        />
        <link rel="canonical" href="https://ktmc.org.in/donate-world-humanity" />
        <meta
          name="keywords"
          content="World of Humanity"
        />
      </Helmet>

      <Header />
      <>
        {/* bannersection */}
        <div className="banner-containers">
          <div className='position-absolute bottom-0 end-0  text-white banner-wrapper' >
            <div className="d-flex flex-column align-items-center banner-section" >
              <div className="bannerline  mb-3 contact-animated"></div>
              <h1 className="mb-3 contact-animated">Humanity</h1>
              <div className="bannerline w-50 mb-3 contact-animated"></div>
            </div>
          </div>
          <div className="position-absolute bottom-1 start-0 text-white p-4 d-flex">
            <h5 className=" fw-normal mb-0 d-flex align-items-center breadcramp-sec">
              <span
                className="breadcrumb-part me-1 animated-part"
                onClick={() => (window.location.href = "/")}
                style={{ cursor: "pointer" }}
              >
                Home
              </span>
              <span className="me-1 animated-part delay-1">/</span>
              <span
                className="breadcrumb-part me-1 animated-part"
                onClick={() => (window.location.href = "/donate")}
                style={{ cursor: "pointer" }}
              >
                Donate
              </span>
              <span className="me-1 animated-part delay-1">/</span>
              <span className="breadcrumb-part animated-part delay-2">
                World Humanity
              </span>
            </h5>
          </div>
        </div>

        {/* about of world */}
        <section className="container py-5">
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-10 col-lg-8 text-center  contact-animated">
              <h2 className="mb-4">World of Humanity</h2>
              <p className="fw-bold fs-6 fade-in slideOut text-start ">
                At KTMC’s World Humanity, we believe in a world where every person has access to basic needs—food,
                water, shelter, education, and hope. Humanity is all about equal dignity. It is compassionate to everybody.
                All individuals should be respected. Any life is worth value. The uniting factor is our mission. We also fight
                determination of world well-being. At the same time, we strive towards one future. Your generosity fuels our
                mission to serve mankind and alleviate suffering.
              </p>
            </div>
          </div>
        </section>

        {/* about of world */}
        <section className="container">
          <div className="row">
            <div className='col-12 col-md-6 col-lg-3 d-flex  justify-content-md-start  '>
              <img src="/assets/humanity/leftimg.jpg" alt="donatetoday.img" className='w-100 h-100' />
            </div>
            <div className='col-12 col-md-6 col-lg-8  d-flex flex-column justify-content-start mb-5 '>
              <div className="d-flex row">
                <div className="col-12 col-md-4 p-2 p-lg-5">
                  <div className="d-flex flex-column align-items-center">
                    <h6 className="text-center">Households Reached</h6>
                    <h3 className="fw-bold fs-1">20%</h3>
                    <h6>Homes</h6>
                  </div>
                  <div className="w-100 m-auto ">
                    <img src="/assets/humanity/flasbg.jpg" alt="flash1.img" className="w-100 masked-image" />
                  </div>
                </div>
                <div className="col-12 col-md-4 p-2 p-lg-5">
                  <div className="d-flex flex-column align-items-center">
                    <h6 className="text-center">Education Coverage</h6>
                    <h3 className="fw-bold fs-1">34%</h3>
                    <h6>Education</h6>
                  </div>
                  <div className="w-100 m-auto">
                    <img src="/assets/humanity/flasbg2.jpg" alt="flash1.img" className="w-100 masked-image" />
                  </div>
                </div>
                <div className="col-12 col-md-4 p-2 p-lg-5">
                  <div className="d-flex flex-column align-items-center">
                    <h6 className="text-center">Vulnerable Beneficiaries</h6>
                    <h3 className="fw-bold fs-1">40%</h3>
                    <h6>Helpless</h6>
                  </div>
                  <div className="w-100 m-auto">
                    <img src="/assets/humanity/flasbg3.jpg" alt="flash1.img" className="w-100 masked-image" />
                  </div>
                </div>

              </div>
              <div className="ps-2 ps-md-5">
                <p className='text-start fade-in slideOut fs-p'>
                  At KTMC’s World Humanity, we believe in a world where every person has access to basic needs—food,
                  water, shelter, education, and hope. Humanity is all about equal dignity. It is compassionate to everybody.
                  All individuals should be respected. Any life is worth value. The uniting factor is our mission. We also
                  fight determination of world well-being. At the same time, we strive towards one future. Your generosity
                  fuels our mission to serve mankind and help those in their suffering.
                </p> <br></br>

                <p className='text-start fade-in slideOut fs-p'>
                  We work across many key areas. Our focus is on specific needs. Here is a glimpse of our reach.
                  We help families find stability. Our support creates safe havens for them. We open doors through learning.
                  Our programs empower students. Education builds a brighter tomorrow. We reach out to those most in need.
                  Our assistance provides critical relief. Compassion guides every step.
                </p><br></br>


                <p className='text-start fade-in slideOut fs-p'>
                  Our commitment is unwavering. We strive to uplift every community. We address fundamental human needs.
                  Your support enables this vital work. It truly transforms lives. We build a world where kindness prevails.
                  Everyone has a chance to thrive. Join our journey of impact. Every action serves humanity. We aim for lasting
                  change. Your involvement is key. Together, let us build a better world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* bg-blacksec */}
        <section className="container-fluid bg-dark mt-0 mt-md-5 p-2 d-flex justify-content-center">
          <h5 className="text-center text-white fw-bold p-2 p-md-5 fade-in slideOut">
            We all share this journey called life. Challenges arise for many. Small acts of kindness <br></br>
            can ease burdens. Your compassion shines a light. It brings comfort and hope. <br></br>
            We are all connected. Let's build a better world, together.  </h5>
        </section>

        {/* twosections */}
        <section className="container py-0">
          {/* Where did you-sec */}
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <div className=" row d-flex justify-content-center">
                <div className="col-12 col-lg-3 col-md-3 d-flex justify-content-center heartimg">
                  <img src="/assets/humanity/heart.png" alt="heart.img" className="w-75" />
                </div>
                <div className="col-12  col-lg-9 col-md-9 d-flex align-items-end justify-content-center ps-0 ps-md-5 heart-text">
                  <h2 className="mb-3 text-start ">Help them find<br></br>
                    their place in life</h2>
                </div>


              </div>

              <div className="row text-center pt-0 ">
                <p className="fw-normal fs-5 fade-in slideOut text-justify">
                  At KTMC Humanity, we offer life-changing services to families in crisis, including food, shelter,
                  education, and healthcare to those who most need them. Many lack basic support. They struggle daily
                  for a safe place. Your compassion can change their path. It offers a chance to thrive. Help someone
                  find their place, food, education, and health care
                </p>
              </div>
            </div>
          </div>

          {/*cards-sec */}
          <Swiper
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper row d-flex justify-content-center p-1 p-lg-3 gap-0 "
          >

            <SwiperSlide className="col-12 col-md-4 col-lg-1 p-0 Cardshoveranimate">
              <div className="position-relative m-auto p-2 ">
                <img src="/assets/humanity/smile.jpg" alt="sime.img" className="w-100 m-auto border border-2 border-muted" />
                <div className="bg-white bg-opacity-50 position-absolute bottom-0 start-50 translate-middle-x d-flex flex-column align-items-center justify-content-center heart-img-sec w-100 h-50">
                  <p className="text-center fs-5 fw-bold">
                    Ready Place in their Dreams?
                  </p>
                  <div className="w-50">
                   <button className="rounded-0 text-white fs-5 humantity-donate">
                      <OpenGeneralForm onOpen={() => setIsPopupOpen(true)} />
                      <GeneralDonataionForm
                        isOpen={isPopupOpen}
                        onClose={() => setIsPopupOpen(false)}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="col-12 col-md-4 col-lg-1 p-0 Cardshoveranimate">
              <div className="position-relative m-auto p-2 ">
                <img src="/assets/humanity/trustedhand.jpg" alt="sime.img" className="w-100 m-auto border border-2 border-muted" />
                <div className="bg-white bg-opacity-50 position-absolute bottom-0 start-50 translate-middle-x d-flex flex-column align-items-center justify-content-center heart-img-sec w-100 h-50">
                  <p className="text-center fs-5 fw-bold">
                    Ready Place for a Safe Home?
                  </p>
                  <div className="w-50">
                   <button className="rounded-0 text-white fs-5 humantity-donate">
                      <OpenGeneralForm onOpen={() => setIsPopupOpen(true)} />
                      <GeneralDonataionForm
                        isOpen={isPopupOpen}
                        onClose={() => setIsPopupOpen(false)}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="col-12 col-md-4 col-lg-1 p-0 Cardshoveranimate">
              <div className="position-relative m-auto p-2 ">
                <img src="/assets/humanity/love.jpg" alt="sime.img" className="w-100 m-auto border border-2 border-muted" />
                <div className="bg-white bg-opacity-50 position-absolute bottom-0 start-50 translate-middle-x d-flex flex-column align-items-center justify-content-center heart-img-sec w-100 h-50">
                  <p className="text-center fs-5 fw-bold">
                    Ready to Place in a Healthy Life?
                  </p>
                  <div className="w-50">
                   <button className="rounded-0 text-white fs-5 humantity-donate">
                      <OpenGeneralForm onOpen={() => setIsPopupOpen(true)} />
                      <GeneralDonataionForm
                        isOpen={isPopupOpen}
                        onClose={() => setIsPopupOpen(false)}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="col-12 col-md-4 col-lg-1 p-0 Cardshoveranimate">
              <div className="position-relative m-auto p-2 ">
                <img src="/assets/humanity/love.jpg" alt="sime.img" className="w-100 m-auto border border-2 border-muted" />
                <div className="bg-white bg-opacity-50 position-absolute bottom-0 start-50 translate-middle-x d-flex flex-column align-items-center justify-content-center heart-img-sec w-100 h-50">
                  <p className="text-center fs-5 fw-bold">
                    Ready to Place in a Healthy Life?
                  </p>
                  <div className="">
                    <button className="rounded-0 text-white fs-5 humantity-donate">
                      <OpenGeneralForm onOpen={() => setIsPopupOpen(true)} />
                      <GeneralDonataionForm
                        isOpen={isPopupOpen}
                        onClose={() => setIsPopupOpen(false)}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        {/* footer */}
        <section className="footerwrap pt-5 pt-md-0" id="about">
          <div className="py-5">
            <div className="container  p-0 m-auto">
              <div className="yellowrap d-flex">
                <div className='col-md-6 col-lg-9 d-flex '>
                  <div>
                    <h3 className="p-3 fs-h ">
                      See the difference you can make in the lives below
                    </h3>
                  </div>

                </div>
                {/* <div className='lineone col-md-6'></div> */}
                <div className="banner_cta_wrap col-md-6 col-lg-3">
                  <OpenGeneralForm onOpen={() => setIsPopupOpen(true)} />
                  <GeneralDonataionForm
                    isOpen={isPopupOpen}
                    onClose={() => setIsPopupOpen(false)}
                  />
                </div>
              </div>
            </div>

            <div className="container-fluid p-0">
              <Swiper
                spaceBetween={0}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1440: { slidesPerView: 4 },
                }}
                centeredSlides={false}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className="mySwiper row d-flex justify-content-center gap-1 gap-md-0 p-0 "
              >

                <SwiperSlide className="col-12 col-sm-6 col-md-3 mb-0 p-0 m-0">
                  <img src="/assets/empower/ftrimg1.jpg" class="img-fluid" alt="Feature image 1" />
                </SwiperSlide>
                <SwiperSlide className="col-12 col-sm-6 col-md-3 mb-0 p-0 m-0">
                  <img src="/assets/empower/ftrimg2.jpg" class="img-fluid" alt="Feature image 2" />
                </SwiperSlide>
                <SwiperSlide className="col-12 col-sm-6 col-md-3 mb-0 p-0 m-0">
                  <img src="/assets/empower/ftrimg3.jpg" class="img-fluid" alt="Feature image 3" />
                </SwiperSlide>
                <SwiperSlide className="col-12 col-sm-6 col-md-3 mb-0 p-0 m-0">
                  <img src="/assets/empower/ftrimg4.jpg" class="img-fluid" alt="Feature image 4" />
                </SwiperSlide>
                <SwiperSlide className="col-12 col-sm-6 col-md-3 mb-0 p-0 m-0">
                  <img src="/assets/empower/ftrimg5.jpg" class="img-fluid" alt="Feature image 4" />
                </SwiperSlide>
                <SwiperSlide className="col-12 col-sm-6 col-md-3 mb-0 p-0 m-0">
                  <img src="/assets/empower/ftrimg6.jpg" class="img-fluid" alt="Feature image 4" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="container  p-0 m-auto">
              <div className="yellowrap">
                <div className="footer d-flex toelist">
                  <ul className="footemenu d-flex">
                    <li>
                      <a href="/about-us">Community Outreach</a>
                    </li>
                    <li>
                      <a href="/about-us">Public Outreach</a>
                    </li>
                    <li>
                      <a href="/about-us">Educational Trust</a>
                    </li>
                    <li>
                      <a href="/about-us">Home Care</a>
                    </li>
                  </ul>
                  <div className="sociallinks ms-auto">
                    <h5 className="text-center"> Follow Us</h5>
                    <ul className="social-icons">
                      <li>
                        <a href="https://www.facebook.com/profile.php?id=61578071846348" target="blank" className="icon facebook">
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/KTMC64327" target="_blank" className="icon x text-center">
                          {/* <img
                                      src="/path-to-x-logo.svg"
                                      alt="X"
                                      style={{ width: "40px", height: "30px" }}
                                    /> */}
                          <FaXTwitter />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/kovaitechmemberchamber" target="blank"
                          className="icon instagram"
                        >
                          <FaInstagram />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/kovai-tech-member-chamber-ktmc/" target="blank" className="icon linkedin">
                          <FaLinkedinIn />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/@KTMC-t3l8f" target="blank" className="icon linkedin">
                          <FaYoutube />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/kovaitechmemberchamber/" target="blank" className="icon linkedin">
                          <FaPinterest />
                        </a>
                      </li>
                    </ul>
                    <p className="text-center">  Copyright © {new Date().getFullYear()}  Kovai Tech Member Chamber.<br /> All rights reserved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style>
          {`
         .banner-containers{
         background-image:url("/assets/humanity/humanity banner.jpg");
         background-position:center;
         background-size:cover;
         background-repeat:no-repeat;
            position: relative;
            width: 100%;
            height: 70vh;
            overflow: hidden;
             aspect-ratio: 18 / 10;
          }

  .banner-wrapper {
  position: absolute;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: right;
  margin-right: 5%;
}

.banner-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bannerline {
  width: 2px;
  height: 60px;
  background-color: #fff;
}

 .banner-sec {
     margin-bottom: 60px !important;
     margin-right: 10px !important;
 }

 .breadcramp-sec {
     font-size: 1rem;
     margin-left: 90px;
     align-items: center;
  flex-wrap: wrap;

 }

@media (max-width: 430px) {
  .banner-wrapper {
    justify-content: center!important;
    align-items: center;
    bottom: auto;
    top: 50%;
    margin:auto;
    transform: translateY(-40%)!important;
  }
 
  .banner-section {
    margin: 0;
  }
 
  .breadcramp-sec {
    margin-left:35px;
  }
}

@media (width: 320px) {
  .banner-wrapper {
    justify-content: center!important;
    align-items: center;
    bottom: auto;
    top:50%;
    transform: translateY(-40%)!important;
  }
 
  .banner-section {
    margin: 0;
  }
 
  .breadcramp-sec {
    margin-left:25px;
    font-size:14px;
  }
}
          .donaterow{
            width:30%!important;
            }


            @keyframes fadeScaleUp {
      0% {
        opacity: 0;
        transform: scale(0.9);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
 
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
 
    .animated-part {
      opacity: 0;
      animation: fadeInUp 0.6s ease forwards;
    }
 
    .delay-1 {
      animation-delay: 0.2s;
    }
 
    .delay-2 {
      animation-delay: 0.4s;
    }
 
    .contact-animated {
      animation: fadeScaleUp 1s ease-in-out forwards;
    }
            
          @media (max-width: 768px) {
            
              
            .donaterow{
            width:100%!important;
            }

            // .banner-sec{
            // margin-bottom:60px!important;
            //  margin-right:-20px!important;
            // }

            // .breadcramp-sec{
            //   font-size:1rem !important;
            //   margin-left:5px!important;
            // }
          }

          .lineone{
                   width:3px!important; 
                   height:120px!important; 
                   background-color:#000!important; 
                }

                .form-bg{
                  background-image:url("./assets/empower/empowerment current event.jpg")!important;
                  background-position:cover !important;
                  background-repeat:no-repeat!important;
                }
                
    @media (max-width: 768px) {
   .banner-containers {
      height: 50vh;
    }

    .banner-containers .position-absolute.top-50.start-50 {
      margin-left: 0 !important;
      width: 100%;
      text-align: center;
    }
    
    .banner-containers h1 {
      font-size: 1.8rem;
    }
    
    .banner-containers .banner-text {
      margin: 90px 0 0 0 !important;
      font-size: 1rem;
      bottom: 10%;
      top: auto;
      left: 50%;
      transform: translateX(-50%);
    } 

    .heart-img-sec{
    font-size:15px!important;
    }
  }
     
   .bannerline{
                   width: 0.05rem !important;
                   height:60px!important; 
                   background-color:#fff!important; 
                }
                
.ftrmenus {
          display: block;
          background:rgba(251, 195, 82, 0.39);
          font-size: 15px;
            }
          .ftrmenus li a{
            padding: 0 25px;
             color:#000;
          }
             .ftrline{
                width:2px;
                height:50px;
                background-color:#000;
             }
                .s-icons{
                color:#c5990b!important;
                font-size:25px!important;
                }

                @media (max-width: 767px) {
            .service-item h3 {
              font-size: 1.2rem;
            }
              .ftrline{
              display:none;
              }
              .linetwo{
               display:none;
              }
                .lineone{
                  display:none;
                }
            }


            @media (width:320px){
            
             .heartimg{
        margin-left:200px!important;
     }
    
     .heartimg img{
        width:150px!important;
     }
     .heart-text{
        margin-top:80px!important;
     }
            
            }

            .masked-image {
  mask-image: url('/assets/humanity/maskpattern.png');
  mask-size: cover;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-image: url('/assets/humanity/maskpattern.png');
  -webkit-mask-size: cover;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  z-index: 1;
}

.heartimg{
           transform: translate(-500%);
            animation: jump 2s infinite ease-in-out;
            width:35%!important;
           }

           @keyframes jump {
       0%, 100% {
      transform: translate(-100%, 0); 
       }
       50% {
        transform: translate(-100%, 80px); 
      }
     }


     .Cardshoveranimate:hover{
        transform: scale(1.05)!important;
        cursor:pointer!important;
     }
     .white-btn:hover{
     background-color: #ffffff!important;
     color: #000000!important;
    border-color:rgb(255, 255, 255)!important;
              transform:translateY(5%);
             box-shadow: 0 5px 25px rgb(255, 255, 255)!important;
     }

    .fade-in {
  opacity: 0;
  animation: fadeIn 2s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.slide-in {
    transform: translateX(-100%);
    animation: slideIn 0.8s forwards;
  }

  .slide-out {
    transform: translateX(0);
    animation: slideOut 0.8s forwards;
  }

  @keyframes slideIn {
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    to {
      transform: translateX(100%);
    }
  }

  .fs-p{
           font-size:14px!important;
          }

          .fs-h{
             font-size:16px;
          }

      `}
        </style>
      </>
    </div>
  )
};

export default Humanity;
