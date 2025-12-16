import { useState } from "react";
import Header from "../../Components/Header";
import OpenGeneralForm from "../../Components/OpenGeneralForm";
import GeneralDonataionForm from "../../Components/GeneralDonataionForm";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaRegClock,
  FaCaretDown,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { GrLocation } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Helmet } from 'react-helmet-async'; // ✅ Add this line

const Media = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
        <title>KTMC Nonprofit Campaign Media Gallery</title>
        <meta
          name="description"
          content="Explore KTMC’s nonprofit campaign media—photos, videos, and stories highlighting food drives, education, and social outreach in Coimbatore and beyond."
        />
         <meta
          name="keywords"
          content="Nonprofit campaign media"
        />
        <link rel="canonical" href="https://ktmc.org.in/donate-media" />
      </Helmet>

      <Header />
      <>
        {/* bannersection */}
        <div className="banner-containers">
          <div className="position-absolute bottom-0 end-0  text-white banner-wrapper">
            <div className="d-flex flex-column align-items-center banner-section">
              <div className="bannerline  mb-3 contact-animated"></div>
              <h1 className="mb-3 contact-animated">Media</h1>
              <div className="bannerline w-50 mb-3 contact-animated"></div>
            </div>
          </div>
          <div className="position-absolute bottom-0 start-0 text-white p-4 d-flex">
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
                Media
              </span>
            </h5>
          </div>
        </div>

        {/* All media post */}
        <div className="container pt-5">
          <div className="row">
            <div className="col-12 d-flex justify-content-center ">
              <h3>All Media Post</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <div>
                <h5>All</h5>
              </div>
              <div>
                <FaCaretDown />
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center gap-4 p-md-5 p-3">
            <div className="col-12 col-md-5 col-lg-3 border border-dark rounded-3 p-4 Cardshoveranimate">
              <div className="d-flex justify-content-between">
                <div>
                  <h5>Social Media</h5>
                </div>
                <div>
                  <a
                    href="https://facebook.com"
                    className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                    style={{ width: "28px", height: "28px" }}
                  >
                    <FaFacebookF style={{ fontSize: "0.7rem" }} />
                  </a>
                </div>
              </div>
              <div className="position-relative py-3">
                <img
                  src="/assets/blog/blog1.jpg"
                  alt="moreevent1.img"
                  className="w-100 m-auto rounded-2"
                />
                <a
                  href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="position-absolute top-50 start-50 translate-middle text-danger"
                  style={{ fontSize: "48px" }}
                >
                  <FaYoutube />
                </a>
              </div>

              <div className="text-start pt-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-3 border border-dark rounded-3 p-4 Cardshoveranimate">
              <div className="d-flex justify-content-between">
                <div>
                  <h5>Magazine</h5>
                </div>
                <div className="bg-warning rounded-2 p-1 text-white">
                  <b>B</b>ook
                </div>
              </div>
              <div className="py-3">
                <img
                  src="/assets/blog/blog1.jpg"
                  alt="moreevent1.img"
                  className="w-100 m-auto rounded-2"
                />
              </div>
              <div className="text-start pt-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-3 border border-dark rounded-3 p-4 Cardshoveranimate">
              <div className="d-flex justify-content-between">
                <div>
                  <h5>Daily News</h5>
                </div>
                <div className="bg-dark rounded-2 p-1 text-white">
                  <b>N</b>ews
                </div>
              </div>
              <div className="position-relative py-3">
                <img
                  src="/assets/blog/blog1.jpg"
                  alt="moreevent1.img"
                  className="w-100 m-auto rounded-2"
                />
                <a
                  href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="position-absolute top-50 start-50 translate-middle text-danger"
                  style={{ fontSize: "48px" }}
                >
                  <FaYoutube />
                </a>
              </div>

              <div className="text-start pt-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-3 border border-dark rounded-3 p-4 Cardshoveranimate">
              <div className="d-flex justify-content-between">
                <div>
                  <h5>Social Media</h5>
                </div>
                <div>
                  <a
                    href="https://youtube.com"
                    className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                    style={{ width: "28px", height: "28px" }}
                  >
                    <FaYoutube style={{ fontSize: "0.7rem" }} />
                  </a>
                </div>
              </div>
              <div className="position-relative py-3">
                <img
                  src="/assets/blog/blog1.jpg"
                  alt="moreevent1.img"
                  className="w-100 m-auto rounded-2"
                />
                <a
                  href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="position-absolute top-50 start-50 translate-middle text-danger"
                  style={{ fontSize: "48px" }}
                >
                  <FaYoutube />
                </a>
              </div>

              <div className="text-start pt-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-3 border border-dark rounded-3 p-4 Cardshoveranimate">
              <div className="d-flex justify-content-between">
                <div>
                  <h5>Magazine</h5>
                </div>
                <div className="bg-warning rounded-2 p-1 text-white">
                  <b>B</b>ook
                </div>
              </div>
              <div className="py-3">
                <img
                  src="/assets/blog/blog1.jpg"
                  alt="moreevent1.img"
                  className="w-100 m-auto rounded-2"
                />
              </div>
              <div className="text-start pt-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-3 border border-dark rounded-3 p-4 Cardshoveranimate">
              <div className="d-flex justify-content-between">
                <div>
                  <h5>Daily News</h5>
                </div>
                <div className="bg-dark rounded-2 p-1 text-white">
                  <b>N</b>ews
                </div>
              </div>
              <div className="position-relative py-3">
                <img
                  src="/assets/blog/blog1.jpg"
                  alt="moreevent1.img"
                  className="w-100 m-auto rounded-2"
                />
                <a
                  href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="position-absolute top-50 start-50 translate-middle text-danger"
                  style={{ fontSize: "48px" }}
                >
                  <FaYoutube />
                </a>
              </div>

              <div className="text-start pt-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-3 border border-dark rounded-3 p-4 Cardshoveranimate">
              <div className="d-flex justify-content-between">
                <div>
                  <h5>Social Media</h5>
                </div>
                <div>
                  <a
                    href="https://instagram.com"
                    className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                    style={{ width: "28px", height: "28px" }}
                  >
                    <FaInstagram style={{ fontSize: "0.7rem" }} />
                  </a>
                </div>
              </div>
              <div className="position-relative py-3">
                <img
                  src="/assets/blog/blog1.jpg"
                  alt="moreevent1.img"
                  className="w-100 m-auto rounded-2"
                />
                <a
                  href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="position-absolute top-50 start-50 translate-middle text-danger"
                  style={{ fontSize: "48px" }}
                >
                  <FaYoutube />
                </a>
              </div>

              <div className="text-start pt-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-3 border border-dark rounded-3 p-4 Cardshoveranimate">
              <div className="d-flex justify-content-between">
                <div>
                  <h5>Magazine</h5>
                </div>
                <div className="bg-warning rounded-2 p-1 text-white">
                  <b>B</b>ook
                </div>
              </div>
              <div className="py-3">
                <img
                  src="/assets/blog/blog1.jpg"
                  alt="moreevent1.img"
                  className="w-100 m-auto rounded-2"
                />
              </div>
              <div className="text-start pt-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-3 border border-dark rounded-3 p-4 Cardshoveranimate">
              <div className="d-flex justify-content-between">
                <div>
                  <h5>Daily News</h5>
                </div>
                <div className="bg-dark rounded-2 p-1 text-white">
                  <b>N</b>ews
                </div>
              </div>

              <div className="position-relative py-3">
                <img
                  src="/assets/blog/blog1.jpg"
                  alt="moreevent1.img"
                  className="w-100 m-auto rounded-2"
                />
                <a
                  href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="position-absolute top-50 start-50 translate-middle text-danger"
                  style={{ fontSize: "48px" }}
                >
                  <FaYoutube />
                </a>
              </div>

              <div className="text-start pt-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end align-items-center gap-3">
            <span className="text-muted">1</span>
            <span className="text-muted">2</span>
            <span className="text-muted">3</span>
            <span className="text-muted">...</span>
            <button className="btn btn-link text-decoration-none text-dark fw-normal p-0">
              Next
            </button>
          </div>
        </div>

        {/* footer */}
        <section className="footerwrap pt-5 pt-md-0" id="about">
          <div className="py-5">
            <div className="container  p-0 m-auto">
              <div className="yellowrap d-flex">
                <div className="col-md-6 col-lg-9 d-flex ">
                  <div>
                    <h3 className="p-3 fs-h ">
                      Save a life. Donate to Kovai Tech Member Chamber
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
                  <img
                    src="/assets/empower/ftrimg1.jpg"
                    class="img-fluid"
                    alt="Feature image 1"
                  />
                </SwiperSlide>
                <SwiperSlide className="col-12 col-sm-6 col-md-3 mb-0 p-0 m-0">
                  <img
                    src="/assets/empower/ftrimg2.jpg"
                    class="img-fluid"
                    alt="Feature image 2"
                  />
                </SwiperSlide>
                <SwiperSlide className="col-12 col-sm-6 col-md-3 mb-0 p-0 m-0">
                  <img
                    src="/assets/empower/ftrimg3.jpg"
                    class="img-fluid"
                    alt="Feature image 3"
                  />
                </SwiperSlide>
                <SwiperSlide className="col-12 col-sm-6 col-md-3 mb-0 p-0 m-0">
                  <img
                    src="/assets/empower/ftrimg4.jpg"
                    class="img-fluid"
                    alt="Feature image 4"
                  />
                </SwiperSlide>
                <SwiperSlide className="col-12 col-sm-6 col-md-3 mb-0 p-0 m-0">
                  <img
                    src="/assets/empower/ftrimg5.jpg"
                    class="img-fluid"
                    alt="Feature image 4"
                  />
                </SwiperSlide>
                <SwiperSlide className="col-12 col-sm-6 col-md-3 mb-0 p-0 m-0">
                  <img
                    src="/assets/empower/ftrimg6.jpg"
                    class="img-fluid"
                    alt="Feature image 4"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="container  p-0 m-auto">
              <div className="yellowrap">
                <div className="footer d-flex toelist">
                  <ul className="footemenu d-flex">
                    <li>
                      <a href="/">Community Cutreach</a>
                    </li>
                    <li>
                      <a href="/">Puplic Outreach</a>
                    </li>
                    <li>
                      <a href="/">Educational Trust</a>
                    </li>
                    <li>
                      <a href="/">Home Care</a>
                    </li>
                  </ul>
                  <div className="sociallinks ms-auto">
                    <h5 className="text-center"> Follow with</h5>
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
         background-image:url("/assets/blog/blog detail banner.jpg");
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
    margin-left:70px;
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
    margin-left:35px;
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

                .blackwrap {
  background:rgb(1, 1, 1);
  padding: 40px 30px 20px;
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

@media (max-width: 540px) {
    .blackwrap {
        display: block !important;
        padding: 10px !important;
    }

    .big-blackbg{
      margin-top:-10px!important;
    }

    .big-blackbg {
            width: 320px;
            margin: 0 auto;
            background: #000;
            position: relative;
            min-height: 400px;
            padding: 20px 15px;
            margin-top: -100px;
        }
        
        .smaller-text {
            font-size: 8.5px !important;
        }

        .time-sec{
           width:100%!important;
        }
            }

    @media (max-width: 768px) {
    .banner-containers {
      height: 50vh;
    }

    
   .smaller-text {
            font-size: 8.7px !important;
        }

    .bigblack-img{
    width:100%!important;

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
 
  }
     
   .bannerline{
                  width: 0.05rem !important;
                   height:60px!important; 
                   background-color:#fff!important; 
                }


                .image-mask-wrapper {
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.masked-image {
  mask-image: url('/assets/event/maskblack.png');
  mask-size: cover;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-image: url('/assets/event/maskblack.png');
  -webkit-mask-size: cover;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  z-index: 1;
}


.Cardshoveranimate:hover{
        transform: scale(1.05)!important;
        cursor:pointer!important;
     }
     .black-btn:hover{
     background-color:rgb(0, 0, 0)!important;
     color:rgb(255, 255, 255)!important;
    border-color:rgb(5, 5, 5)!important;
              transform:translateY(5%);
             box-shadow: 0 5px 25px rgba(0, 0, 0, 0.21)!important;
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
  );
};

export default Media;
