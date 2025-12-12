import { useState } from "react";
import Header from "../../Components/Header";
import OpenGeneralForm from "../../Components/OpenGeneralForm";
import { useNavigate } from "react-router-dom";
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

const Empower = () => {


  // slidesecfunctions
  // const sliderRef = useRef(null);
  // const intervalRef = useRef(null);

  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };


  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   let scrollAmount = 0;
  //   const cardWidth = 288 + 16;
  //   const totalWidth = cardWidth * 4;

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

  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  return (
    <div>

      <Helmet>
        <title>KTMC – Empowerment NGO in Coimbatore</title>
        <meta
          name="description"
          content="KTMC is a leading empowerment NGO in Coimbatore, offering free skill training, education, and development programs to uplift underprivileged communities."
        />
        <link rel="canonical" href=": https://ktmc.org.in/ourcauses-empower" />
      </Helmet>


      <Header />
      <>
        {/* bannersection */}
        <div className="banner-containers">
          <div className='position-absolute bottom-0 end-0  text-white banner-wrapper' >
            <div className="d-flex flex-column align-items-center banner-section" >
              <div className="bannerline  mb-3 contact-animated"></div>
              <h1 className="mb-3 contact-animated">Empower</h1>
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
                onClick={() => (window.location.href = "/OurCauses")}
                style={{ cursor: "pointer" }}
              >
                OurCauses
              </span>
              <span className="me-1 animated-part delay-1">/</span>
              <span className="breadcrumb-part animated-part delay-2">
                Empower
              </span>
            </h5>
          </div>
        </div>
        <div className='container'>
          {/* Diminish sec */}
          <section className=' py-4'>
            <div className='row p-lg-5'>
              <div className='col-12 col-lg-12 col-md-12'>
                <div className='d-flex flex-column align-items-center'>
                  <h3 className='fw-bold text-center mb-lg-4'>Empowering Every Ability<br></br>
                  </h3>
                  <p className='text-justify fs-p'>
                    At KTMC, we celebrate the potential of each person. We feel the power in any form. We work to ensure that we have an equal opportunity world. The capability of no one should be ignored. We are alongside the conquerors of difficulties.
                    We are also committed to empowering persons with disabilities. Barriers come down through our effort. We will promote inclusion and respect. We want to bring out their individual flairs. Each person should have an opportunity to shine.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Divyang fashion sec */}
          <section className=''>
            <div className='row'>
              <div className='col-12 col-lg-12 col-md-12 text-center'>
                <h3 className='fw-bold mb-lg-4'>Celebrating Talent and Spirit</h3>
                <p className='text-justify'>This event truly showcases amazing abilities. It highlights people with disabilities. It is a very unique show. It features both fashion and various talents. We celebrate their diverse contributions completely. Their creativity is truly wonderful to see. We commend their great strength. Their assertiveness is very clear to all. This platform deeply builds belonging. It fosters immense pride. It helps create a more compassionate society for everyone. This benefits all people. It shows their bright, unique light. This enriches the entire community.</p>
              </div>
            </div>
            <div className='row py-lg-5 py-3 gap-2 gap-md-0 d-flex justify-content-center' >
              <div className='col-12 col-lg-4 col-md-4 d-flex flex-column align-items-center'>
                <div className='w-50 d-flex justify-content-center m-auto'>
                  <img src="./assets/empower/e1.png" alt="Divyang.img1" className='w-50' />
                </div>
                <div className='p-md-3 p-lg-4'>
                  <p className='text-center'>
                    Ensuring safe, accessible spaces. Our priority is to protect their rights.
                  </p>
                </div>
              </div>
              <div className='col-12 col-lg-4 col-md-4 d-flex flex-column align-items-center'>
                <div className='w-50 d-flex justify-content-center m-auto'>
                  <img src="./assets/empower/e2.png" alt="Divyang.img1" className='w-50' />
                </div>
                <div className='p-md-3 p-lg-4'>
                  <p className='text-center'>
                    Providing compassionate personal care. Supporting daily mobility and independence.
                  </p>
                </div>
              </div>
              <div className='col-12 col-lg-4 col-md-4 d-flex flex-column align-items-center'>
                <div className='w-50 d-flex justify-content-center m-auto'>
                  <img src="./assets/empower/e3.png" alt="Divyang.img1" className='w-50' />
                </div>
                <div className='p-md-3 p-lg-4'>
                  <p className='text-center'>
                    Creating Communities that belong to everyone. Advocating for equal opportunities and belonging.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Divyang fashion sec */}
        <div className="container p-0 m-auto">
          <div className="blackwrap d-flex">
            <div className='col-md-6 d-flex '>
              <div>
                <h5 className="p-3 text-white text-center text-md-start">
                  Save a life. Donate to Kovai Tech Member Chamber
                </h5>
              </div>

            </div>
            {/* <div className='lineone col-md-6'></div> */}
            <div className="banner_cta_wrap col-md-6">
              <OpenGeneralForm onOpen={() => setIsPopupOpen(true)} />
              <GeneralDonataionForm
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
              />
            </div>
          </div>
        </div>

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 col-lg-12 col-md-12 w-100 img-fluid p-0'>
              <img src="./assets/empower/athlet.jpg" alt="empowerment.img" className='w-100' />
            </div>
            <div className='p-md-5 p-0 big-blackbg position-relative' style={{ marginTop: "-100px" }}>
              <img src="./assets/empower/content big blackbg.png" alt="bg.img" className='m-auto bigblack-img' style={{ width: "90%" }} />
              <div className='text-center position-absolute top-50 start-50 translate-middle text-white p-0 my-2 my-md-0 my-lg-2'>
                <p className=' smaller-text fs-h lh-md-lg'>
                  Our journey aims for real inclusion. It is our attempt to empower each one of us. Life may deal a lot of difficulties. Our programs offer hope. They build stronger futures. Together, we create a world where all can thrive. This work requires ongoing dedication.
                </p>
                <h4 className='fw-bolder py-0 py-md-2 py-lg-4 smaller-text'>Accessing Our Support</h4>
                <p className=' smaller-text fs-h lh-md-lg'>
                  In case of any problems, we will be glad to assist you. We are here to assist. We have different programs. The information will be on our site. In order to request support, use our guidelines. We also accept volunteers. Join our mission. Your participation makes a difference.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Success story  sec */}
        <div className=' container py-3'>
          <div className='row'>
            <div className='col-12 col-lg-12 col-md-12'>
              <h3 className='text-center fw-bold'>Success Story</h3>
              <p className='text-center p-2 p-md-4 fs-p'>
                Our work creates real impact. Read inspiring stories of change. We celebrate every achievement.
              </p>
            </div>
          </div>
        </div>

        {/* slide  sec */}
        <div className='container-fluid'>
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 3 },
            }}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper row d-flex justify-content-center p-3 p-md-4 p-lg-4 "
          >

            <SwiperSlide className='col-12 col-md-12 col-lg-5 border border-dark rounded-3 border-2 border-rounded p-3 Cardshoveranimate'>
              <div className='d-md-flex  flex-xs-column gap-2'>
                <div className='col-12 col-md-6 p-0'>
                  <img src="./assets/empower/maya3.jpg" alt="slide1.img" className='p-0' />
                </div>
                <div className='col-12 col-md-6 d-flex flex-column justify-content-center my-2'>
                  <h4 className='fw-bold'>Maya</h4>
                  <p className='text-start fs-p'>
                    The resilience demonstrated by Maya is incredible. She got her strength with our support.
                  </p>
                  <div className=''>
                    <button className='btn btn-dark' onClick={() => {
                      navigate("/ourcauses-empower-empower-maya");
                      window.scrollTo(0, 0);
                    }}>
                      View Story</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='col-12 col-md-12 col-lg-5 border border-dark rounded-3 border-2 border-rounded p-3 Cardshoveranimate'>
              <div className='d-md-flex  flex-xs-column gap-2'>
                <div className='col-12 col-md-6 p-0'>
                  <img src="./assets/empower/ravi.jpg" alt="slide1.img" className='p-0' />
                </div>
                <div className='col-12 col-md-6 d-flex flex-column justify-content-center my-2'>
                  <h4 className='fw-bold'>Ravi</h4>
                  <p className='text-start fs-p'>
                    Ravi acquired new competencies. He was able to get work through our training.
                  </p>
                  <div className=''>
                    <button className='btn btn-dark' onClick={() => {
                      navigate("/ourcauses-empower-empower-ravi");
                      window.scrollTo(0, 0);
                    }}>

                      View Story</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='col-12 col-md-12 col-lg-5 border border-dark rounded-3 border-2 border-rounded p-3 Cardshoveranimate'>
              <div className='d-md-flex  flex-xs-column gap-2'>
                <div className='col-12 col-md-6 p-0'>
                  <img src="./assets/empower/event1.png" alt="slide1.img" className='p-0' />
                </div>
                <div className='col-12 col-md-6 d-flex flex-column justify-content-center my-2'>
                  <h4 className='fw-bold'>Deepa</h4>
                  <p className='text-start fs-p'>
                    Deepa fantasized about the competitions. There were numerous obstacles that she encountered.
                  </p>
                  <div className=''>
                    <button className='btn btn-dark' onClick={() => {
                      navigate("/ourcauses-empower-empower-deepa");
                      window.scrollTo(0, 0);
                    }}>

                      View Story</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='col-12 col-md-12 col-lg-5 border border-dark rounded-3 border-2 border-rounded p-3 Cardshoveranimate'>
              <div className='d-md-flex  flex-xs-column gap-2'>
                <div className='col-12 col-md-6 p-0'>
                  <img src="./assets/empower/rahul.png" alt="slide1.img" className='p-0' />
                </div>
                <div className='col-12 col-md-6 d-flex flex-column justify-content-center my-2'>
                  <h4 className='fw-bold'>Rahul</h4>
                  <p className='text-start fs-p'>
                    Rahul's courage opened his path. KTMC offered a helping hand. We provided tools for his healing.
                  </p>
                  <div className=''>
                    <button className='btn btn-dark' onClick={() => {
                      navigate("/ourcauses-empower-empower-rahul");
                      window.scrollTo(0, 0);
                    }}>

                    View Story</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* footer */}
        <section className="footerwrap pt-5 pt-md-0" id="about">
          <div className="py-5">
            <div className="container  p-0 m-auto">
              <div className="yellowrap d-flex">
                <div className='col-md-6 col-lg-9 d-flex '>
                  <div>
                    <h3 className="p-3 fs-h " >
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

            <div class="container-fluid p-0">
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
                    <p className="text-center">All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style>
          {`
           .banner-containers{
         background-image:url("/assets/empower/empower banner.png");
         background-position:center;
         background-size:cover;
         background-repeat:no-repeat;
            position: relative;
            width: 100%;
            height: 70vh;
            overflow: hidden;
             aspect-ratio: 18 / 10;
          }

          .donaterow{
            width:30%!important;
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
    margin-left:45px;
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
    margin-left:34px;
    font-size:13px;
  }
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
        
        // .fw-bolder {
        //     font-size: 8.8px !important;
        // }
        
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

         @media (width: 1024px) {
          .fs-h{
             font-size:12px!important;
          }
          }

           @media (width:375px){
             
           
            .banner-sec{
            margin-bottom:60px!important;
            margin-right:20px!important;
            }

            .breadcramp-sec{
              font-size:1rem !important;
              margin-left:5px!important;
            }
           
           }

          
         
            `}
        </style>
      </>
    </div>

  )
}

export default Empower;