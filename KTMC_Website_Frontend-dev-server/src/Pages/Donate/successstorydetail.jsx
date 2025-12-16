import { useRef, useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import OpenGeneralForm from "../../Components/OpenGeneralForm";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
   FaLinkedinIn,

} from "react-icons/fa6"
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Successstorydetail = () => {

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

  // testimonial function
  const testimonials = [
    {
      image: "/assets/testimonial/testimoanial1.png",
      name: "Jane Doe",
      text: "Great service, highly recommended!",
    },
    {
      image: "/assets/testimonial/testimoanial2.png",
      name: "John Smith",
      text: "Very professional and reliable.",
    },
    {
      image: "/assets/testimonial/testimoanial3.png",
      name: "Alice Johnson",
      text: "Excellent experience from start to finish.",
    },
    {
      image: "/assets/testimonial/testimoanial4.png",
      name: "Mike Brown",
      text: "Truly outstanding support!",
    },
    {
      image: "/assets/testimonial/testimoanial3.png",
      name: "Sophia Lee",
      text: "Would recommend to anyone.",
    },
  ];

  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <>
        {/* bannersection */}
       <div className="banner-containers">
          <div className='position-absolute bottom-0 end-0  text-white banner-wrapper' >
            <div className="d-flex flex-column align-items-center banner-section" >
              <div className="bannerline  mb-3 contact-animated"></div>
              <h1 className="mb-3 contact-animated">Success</h1>
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
                Success Story detail
              </span>
            </h5>
          </div>
        </div>

        {/* success story */}
        <div className='container pt-5'>
          <div className='row '>
            <div className='col-12'>
              <h3 className='fw-bold text-md-start text-center ps-md-5 fs-2'>From Hopelessness to <br></br>
                Happiness to Ankit's Journey</h3>
            </div>
          </div>
          <div className='row d-flex justify-content-center align-items-center pt-2 '>
            <div className='col-12 col-md-6 col-lg-5 d-flex flex-column align-items-md-end align-items-center pe-md-5'>
              <div>
                <h2>Live Theme</h2>
                <p>
                  Lorem ipsum dolor sit amet, <br></br>
                  consectetur adipiscing elit.
                </p>
              </div>

              <div>
                <h2>Saved Life</h2>
                <p>
                  Lorem ipsum dolor sit amet, <br></br>
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-7">
              <div className="image-mask-wrapper position-relative w-100">
                <img src="/assets/event/black flashbg.png" alt="mask bg" className="img-fluid w-100 position-relative z-0" />
                <img src="/assets/success story/detail event.png" alt="child eating" className="img-fluid masked-image position-absolute  top-50 start-50 translate-middle w-100 h-auto object-fit-cover z-1" />
              </div>
            </div>

          </div>
        </div>
        {/* success story para */}
        <div className="container pt-3">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <div>
                <h3 className="fw-bold">Success Story</h3>
              </div>
              <div>
                <p className="fs-p">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                  literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                  going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
                  from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                  written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first
                  line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>

                <p className="fs-p">
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32
                  and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
                  accompanied by English versions from the 1914 translation by H. Rackham.
                </p>

                <p className="fs-p">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and
                  web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many
                  web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                  purpose (injected humour and the like).
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* testimonial */}
        <section className='py-5'>
          <div className='text-center mb-4 mb-md-5'>
            <h2 className='fw-bold'>Thank you all Doners
            </h2>
            <p className='text-center fs-6'> consectetur adipisicing elit. Fuga ea reprehenderit  ea <br></br>
              reprehenderit</p>
          </div>
          <div className='container testimonial'>
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


        </section>

        <div className="container">
          <div className="row">
            <div className="col-12 text-center mt-4  d-flex justify-content-center Cardshoveranimate">
              <button className="btn btn-outline-dark" onClick={() => {
                navigate("/donate-success-story");
                window.scrollTo(0, 0)
              }}> <FaArrowCircleLeft /> Back</button>
            </div>
          </div>
        </div>

        {/* footer */}
        <section className="footerwrap pt-5 pt-md-0" id="about">
          <div className="py-5">
            <div className="container  p-0 m-auto">
              <div className="yellowrap d-flex">
                <div className='col-md-6 col-lg-9 d-flex '>
                  <div>
                    <h3 className="p-3  fs-h" >
                      Save a life. Donate to Kovai Tech Member Chamber
                    </h3>
                  </div>

                </div>
                {/* <div className='lineone col-md-6'></div> */}
                <div className="banner_cta_wrap col-md-6 col-lg-3">
                  <OpenGeneralForm onOpen={() => setIsPopupOpen(true)} />
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
                <SwiperSlide  className="col-12 col-sm-6 col-md-3 mb-0 p-0 m-0">
                  <img src="/assets/empower/ftrimg2.jpg" class="img-fluid" alt="Feature image 2" />
                </SwiperSlide> 
                <SwiperSlide  className="col-12 col-sm-6 col-md-3 mb-0 p-0 m-0">
                  <img src="/assets/empower/ftrimg3.jpg" class="img-fluid" alt="Feature image 3" />
                </SwiperSlide> 
                <SwiperSlide  className="col-12 col-sm-6 col-md-3 mb-0 p-0 m-0">
                  <img src="/assets/empower/ftrimg4.jpg" class="img-fluid" alt="Feature image 4" />
                </SwiperSlide>
                <SwiperSlide  className="col-12 col-sm-6 col-md-3 mb-0 p-0 m-0">
                  <img src="/assets/empower/ftrimg5.jpg" class="img-fluid" alt="Feature image 4" />
                </SwiperSlide> 
                <SwiperSlide  className="col-12 col-sm-6 col-md-3 mb-0 p-0 m-0">
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
    margin:auto;
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
    margin-left:20px;
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
    margin-left:20px;
    font-size:13px;
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

export default Successstorydetail;