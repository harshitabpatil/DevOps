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
  FaPinterest,
   FaLinkedinIn,

} from "react-icons/fa6"
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const Event = () => {

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
      <Header />
      <>
        {/* bannersection */}
        <div className="banner-containers">
          <div className='position-absolute bottom-0 end-0  text-white banner-wrapper' >
            <div className="d-flex flex-column align-items-center banner-section" >
              <div className="bannerline  mb-3 contact-animated"></div>
              <h1 className="mb-3 contact-animated">Event</h1>
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
                Event
              </span>
            </h5>
          </div>
        </div>

        <div className='container pt-5'>
          <div className='row '>
            <div className='col-12'>
              <h3 className='fw-bold text-md-start text-center ps-md-5 fs-2'>Program Offers free <br></br>
                food for 3 healthy meals a day</h3>
            </div>
          </div>
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-12 col-md-6 col-lg-5'>
              <div className='text-center d-flex flex-column align-items-center p-3'>
                <h3>This Event</h3>
                <h5>May 19 to 22-2025</h5>

                <div className='bg-dark row text-light p-1 w-50 d-flex align-items-center time-sec'>
                  <button className='btn btn-light col-5 text-dark fs-5'>
                    <b>8.00</b>  <br>
                    </br> am
                  </button>
                  <div className='col-2'>
                    <p className='fw-bold'>to</p>
                  </div>
                  <button className='btn btn-light col-5 text-dark fs-5'>
                    <b>12.00</b>  <br>
                    </br> pm
                  </button>
                </div>

                <h3 className='pt-3'>Event Location</h3>
                <div className='py-3 border border-dark border-top-0 border-start-0 border-end-0'>
                  <h5>Guru Amardas Banquet Hall,<br></br>
                    G1,10, Manakbash Road , Near<br></br>
                    Choithrm Hospital Indore 452001<br></br>
                  </h5>
                </div>

                <h3 className='pt-3'>Available Time</h3>
                <h3 className='fs-1 fw-bold'>08h:20m:40s</h3>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-7">
              <div className="image-mask-wrapper position-relative w-100">
                <img src="/assets/event/black flashbg.png" alt="mask bg" className="img-fluid w-100 position-relative z-0" />
                <img src="/assets/event/event1.jpg" alt="child eating" className="img-fluid masked-image position-absolute  top-50 start-50 translate-middle w-100 h-auto object-fit-cover z-1" />
              </div>

              <div className='d-flex justify-content-end'>
                <ul className="social-icons d-flex justify-content-lg-end justify-content-center gap-3 p-0 list-unstyled">
                  <li>
                    <a href="https://facebook.com" className="icon facebook fs-4 text-white">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com" className="icon instagram fs-4 text-white">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com" className="icon linkedin fs-4 text-white">
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com" className="icon x text-center fs-4 text-white">
                      <FaXTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div className='container'>
          <div className='row '>
            <div className='col-12'>
              <h3 className='fw-bold text-start fs-2'> KTMC Connection more event for</h3>
              <p className='text-start fs-p'>
                Lorem ipsum dolor sit amet,<b> consectetur</b>  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
          </div>

          <div className='row d-flex gap-4 justify-content-center p-2 p-md-5'>
            <div className='col-12 col-md-5 border border-dark rounded-2 p-4 p-md-5 Cardshoveranimate'>
              <div>
                <h4>Lims and calipers<br></br>
                  Measurement Camp
                </h4>
              </div>
              <div className='py-3'>
                <img src="/assets/event/more event1.jpg" alt="moreevent1.img" className='w-100 m-auto rounded-2' />
              </div>
              <div className=''>
                <div className='d-flex gap-3'>
                  <div className='fs-5 fw-bold'>
                    <SlCalender />
                  </div>
                  <div>
                    <p>19 May 2025</p>
                  </div>
                </div>
                <div className='d-flex gap-3'>
                  <div className='fs-5 fw-bold'>
                    <FaRegClock />
                  </div>
                  <div>
                    <p>08:30 am to 04:00 pm</p>
                  </div>
                </div>
                <div className='d-flex gap-3'>
                  <div className='fs-5 fw-bold'>
                    <GrLocation />
                  </div>
                  <div>
                    <p>Guru Amardas Banquet Hall,<br></br>
                      G1,10, Manakbash Road , Near<br></br>
                      Choithrm Hospital Indore 452001<br></br></p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-5 border border-dark rounded-2 p-4 p-md-5 Cardshoveranimate'>
              <div>
                <h4>Lims and calipers<br></br>
                  Measurement Camp
                </h4>
              </div>
              <div className='py-3'>
                <img src="/assets/event/more event2.jpg" alt="moreevent1.img" className='w-100 m-auto rounded-2' />
              </div>
              <div className=''>
                <div className='d-flex gap-3'>
                  <div className='fs-5 fw-bold'>
                    <SlCalender />
                  </div>
                  <div>
                    <p>19 May 2025</p>
                  </div>
                </div>
                <div className='d-flex gap-3'>
                  <div className='fs-5 fw-bold'>
                    <FaRegClock />
                  </div>
                  <div>
                    <p>08:30 am to 04:00 pm</p>
                  </div>
                </div>
                <div className='d-flex gap-3'>
                  <div className='fs-5 fw-bold'>
                    <GrLocation />
                  </div>
                  <div>
                    <p>Guru Amardas Banquet Hall,<br></br>
                      G1,10, Manakbash Road , Near<br></br>
                      Choithrm Hospital Indore 452001<br></br></p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-5 border border-dark rounded-2 p-4 p-md-5 Cardshoveranimate'>
              <div>
                <h4>Lims and calipers<br></br>
                  Measurement Camp
                </h4>
              </div>
              <div className='py-3'>
                <img src="/assets/event/more event3.jpg" alt="moreevent1.img" className='w-100 m-auto rounded-2' />
              </div>
              <div className=''>
                <div className='d-flex gap-3'>
                  <div className='fs-5 fw-bold'>
                    <SlCalender />
                  </div>
                  <div>
                    <p>19 May 2025</p>
                  </div>
                </div>
                <div className='d-flex gap-3'>
                  <div className='fs-5 fw-bold'>
                    <FaRegClock />
                  </div>
                  <div>
                    <p>08:30 am to 04:00 pm</p>
                  </div>
                </div>
                <div className='d-flex gap-3'>
                  <div className='fs-5 fw-bold'>
                    <GrLocation />
                  </div>
                  <div>
                    <p>Guru Amardas Banquet Hall,<br></br>
                      G1,10, Manakbash Road , Near<br></br>
                      Choithrm Hospital Indore 452001<br></br></p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-5 border border-dark rounded-2 p-4 p-md-5 Cardshoveranimate'>
              <div>
                <h4>Lims and calipers<br></br>
                  Measurement Camp
                </h4>
              </div>
              <div className='py-3'>
                <img src="/assets/event/more event4.jpg" alt="moreevent1.img" className='w-100 m-auto rounded-2' />
              </div>
              <div className=''>
                <div className='d-flex gap-3'>
                  <div className='fs-5 fw-bold'>
                    <SlCalender />
                  </div>
                  <div>
                    <p>19 May 2025</p>
                  </div>
                </div>
                <div className='d-flex gap-3'>
                  <div className='fs-5 fw-bold'>
                    <FaRegClock />
                  </div>
                  <div>
                    <p>08:30 am to 04:00 pm</p>
                  </div>
                </div>
                <div className='d-flex gap-3'>
                  <div className='fs-5 fw-bold'>
                    <GrLocation />
                  </div>
                  <div>
                    <p>Guru Amardas Banquet Hall,<br></br>
                      G1,10, Manakbash Road , Near<br></br>
                      Choithrm Hospital Indore 452001<br></br></p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="col-12 text-center mt-4 d-flex justify-content-center Cardshoveranimate">
            <button className="btn btn-outline-dark">Click More</button>
          </div>

        </div>
        {/* footer */}
        <section className="footerwrap pt-5 pt-md-0" id="about">
          <div className="py-5">
            <div className="container  p-0 m-auto">
              <div className="yellowrap d-flex">
                <div className='col-md-6 col-lg-9 d-flex '>
                  <div>
                    <h3 className="p-3 " style={{ fontSize: "25px" }}>
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
                                  <a href="https://x.com/KTMC64327"  target="_blank" className="icon x text-center">
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
                             <p className="text-center">  Copyright © {new Date().getFullYear()}  Kovai Tech Member Chamber.<br/> All rights reserved</p>
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
    transform: translateY(-40%)!important;
  }
 
  .banner-section {
    margin: 0;
  }
 
  .breadcramp-sec {
    margin-left:74px;
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
    margin-left:45px;
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

          //   .banner-sec{
          //  margin-right: 25px !important;
          //   margin-bottom:60px!important;
          //   }

          //   .breadcramp-sec{
          //     font-size:1rem !important;
          //     margin-left:45px!important;
          //   }
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

  )
}

export default Event;