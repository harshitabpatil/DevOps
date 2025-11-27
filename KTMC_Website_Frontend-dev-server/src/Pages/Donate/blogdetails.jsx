import { useRef, useEffect, useState } from "react";
import Header from "../../Components/Header";
import OpenGeneralForm from "../../Components/OpenGeneralForm";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaRegClock,
  FaArrowLeftLong
} from "react-icons/fa6"
import { FaArrowCircleLeft } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { GrLocation } from "react-icons/gr";


const Blogdetails = () => {

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  //      const sliderRef = useRef(null);
  //   const intervalRef = useRef(null);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  //     useEffect(() => {
  //     const slider = sliderRef.current;
  //     let scrollAmount = 0;
  //     const cardWidth = 288 + 16;
  //     const totalWidth = cardWidth * 4;

  //     const startAutoScroll = () => {
  //       intervalRef.current = setInterval(() => {
  //         scrollAmount += cardWidth;

  //         // Loop the slider
  //         if (scrollAmount >= totalWidth) {
  //           scrollAmount = 0;
  //           slider.scrollTo({ left: 0, behavior: "instant" }); // Instantly reset
  //         } else {
  //           slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
  //         }
  //       }, 2000);
  //     };

  //     startAutoScroll(); // Start auto-scroll

  //     // Pause auto-scroll when user hovers
  //     const handleMouseEnter = () => clearInterval(intervalRef.current);
  //     const handleMouseLeave = () => {
  //       clearInterval(intervalRef.current);
  //       startAutoScroll(); // Resume scrolling
  //     };

  //     slider.addEventListener("mouseenter", handleMouseEnter);
  //     slider.addEventListener("mouseleave", handleMouseLeave);

  //     return () => {
  //       clearInterval(intervalRef.current);
  //       slider.removeEventListener("mouseenter", handleMouseEnter);
  //       slider.removeEventListener("mouseleave", handleMouseLeave);
  //     };
  //   }, []);


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
              <h1 className="mb-3 contact-animated">Blog</h1>
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
                Blog Details
              </span>
            </h5>
          </div>
        </div>

        {/* threesections */}
        <div className='container pt-5'>

          {/* Chaithra Purnima 2025: */}
          <div className='row '>
            <div className='col-12 col-md-12'>
              <div className='border border-dark border-end-0 border-top-0 border-start-0'>
                <h3 className='fw-bold text-start fs-3'> Chaithra Purnima 2025: Know Time,Date,<br></br>
                  Rituals,Importance</h3>
              </div>
              <div className='d-flex justify-content-between pt-1 pt-md-3'>
                <div className='d-flex align-items-start gap-3 '>
                  <div className='fs-5 fw-bold'>
                    <SlCalender />
                  </div>
                  <div className='pt-md-1'>
                    <p>19 May 2025</p>
                  </div>
                </div>



                <div className='d-flex gap-2'>
                  <h5>Share</h5>
                  <a href="https://facebook.com"
                    className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                    style={{ width: '28px', height: '28px' }}>
                    <FaFacebookF style={{ fontSize: '0.7rem' }} />
                  </a>
                  <a href="https://instagram.com"
                    className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                    style={{ width: '28px', height: '28px' }}>
                    <FaInstagram style={{ fontSize: '0.7rem' }} />
                  </a>
                  <a href="https://youtube.com"
                    className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                    style={{ width: '28px', height: '28px' }}>
                    <FaYoutube style={{ fontSize: '0.7rem' }} />
                  </a>
                  <a href="https://x.com"
                    className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                    style={{ width: '28px', height: '28px' }}>
                    <FaXTwitter style={{ fontSize: '0.7rem' }} />
                  </a>
                </div>

              </div>
              <div className="position-relative py-3">

                <img
                  src="/assets/blog/blogdetailbalckbg.png"
                  alt="background"
                  className="w-100 rounded-2 position-relative z-0"
                />


                <img
                  src="/assets/blog/baclk details.jpg"
                  alt="overlay"
                  className="w-100 rounded-2 position-absolute top-0 start-0 masked-image"
                  style={{ height: '100%', objectFit: 'cover', zIndex: 1 }}
                />
              </div>
              <div className=''>


                <div className='text-start pt-5 border border-dark border-end-0 border-top-0 border-start-0 p-2'>
                  <p className="fs-p">
                    Lorem ipsum dolor sit amet,<b> consectetur</b>  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  </p>

                  <h3 className='fw-bold text-start fs-2 pt-3'> When Chaitra purnima 2025?</h3>
                  <p className='text-start fs-p'>
                    Lorem ipsum dolor sit amet,<b> consectetur</b>  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                  </p>

                  <h3 className='fw-bold text-start fs-2 pt-3'>Importance Of Chairty on Jyeshsta Amavaysya</h3>
                  <p className='text-start fs-p'>
                    Lorem ipsum dolor sit amet,<b> consectetur</b>  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                  </p>
                  <p className='pt-3 fs-p'>
                    Lorem ipsum dolor sit amet,<b> consectetur</b>  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Lorem ipsum dolor sit amet,<b> consectetur</b>  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </p>
                </div>


              </div>
            </div>
          </div>

          {/* parasec */}
          <div className='row'>
            <div className='col-12 col-md-12 text-center'>
              <h5 className='fw-bold pt-5'>
                " Lorem ipsum dolor sit amet,consectetur <br></br>
                adipiscing elit, sed do eiusmod tempor <br></br>
                incididunt ut labore et
                aliqua. "
              </h5>

              <div className=' d-flex justify-content-center pt-3'>
                <div className=" col-md-6 text-dark">
                  <button className="btn btn-dark text-white p-3 rounded-0 border border-2 black-btn">Donate Now</button>
                </div>
              </div>
            </div>
          </div>

          {/* cardssec */}
          <div className='row d-flex p-2 p-md-5 overflow-x-scroll flex-nowrap ' style={{
            scrollbarWidth: "none",
            scrollBehavior: "smooth",
            msOverflowStyle: "none",
            gap: "5%"
          }}>
            <div className='col-12 col-md-5 border border-dark rounded-2 p-4 p-md-5 Cardshoveranimate'>
              <div>
                <h4>Lims and calipers<br></br>
                  Measurement Camp
                </h4>
              </div>
              <div className='py-3'>
                <img src="/assets/blog/blog1.jpg" alt="moreevent1.img" className='w-100 m-auto rounded-2' />
              </div>
              <div className=''>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex align-items-start gap-3'>
                    <div className='fs-5 fw-bold'>
                      <SlCalender />
                    </div>
                    <div className='pt-md-1'>
                      <p>19 May 2025</p>
                    </div>
                  </div>



                  <div className='d-flex gap-2'>
                    <a href="https://facebook.com"
                      className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                      style={{ width: '28px', height: '28px' }}>
                      <FaFacebookF style={{ fontSize: '0.7rem' }} />
                    </a>
                    <a href="https://instagram.com"
                      className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                      style={{ width: '28px', height: '28px' }}>
                      <FaInstagram style={{ fontSize: '0.7rem' }} />
                    </a>
                    <a href="https://youtube.com"
                      className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                      style={{ width: '28px', height: '28px' }}>
                      <FaYoutube style={{ fontSize: '0.7rem' }} />
                    </a>
                    <a href="https://x.com"
                      className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                      style={{ width: '28px', height: '28px' }}>
                      <FaXTwitter style={{ fontSize: '0.7rem' }} />
                    </a>
                  </div>

                </div>

                <div className='text-start pt-2'>
                  <p>
                    Lorem ipsum dolor sit amet,<b> consectetur</b>  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  </p>
                </div>

                <div className='text-start'>
                  <button className='btn btn-link p-0 text-dark text-decoration-underline small'>
                    Read More
                  </button>
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
                <img src="/assets/blog/blog2.jpg" alt="moreevent1.img" className='w-100 m-auto rounded-2' />
              </div>
              <div className=''>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex align-items-start gap-3'>
                    <div className='fs-5 fw-bold'>
                      <SlCalender />
                    </div>
                    <div className='pt-md-1'>
                      <p>19 May 2025</p>
                    </div>
                  </div>



                  <div className='d-flex gap-2'>
                    <a href="https://facebook.com"
                      className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                      style={{ width: '28px', height: '28px' }}>
                      <FaFacebookF style={{ fontSize: '0.7rem' }} />
                    </a>
                    <a href="https://instagram.com"
                      className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                      style={{ width: '28px', height: '28px' }}>
                      <FaInstagram style={{ fontSize: '0.7rem' }} />
                    </a>
                    <a href="https://youtube.com"
                      className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                      style={{ width: '28px', height: '28px' }}>
                      <FaYoutube style={{ fontSize: '0.7rem' }} />
                    </a>
                    <a href="https://x.com"
                      className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                      style={{ width: '28px', height: '28px' }}>
                      <FaXTwitter style={{ fontSize: '0.7rem' }} />
                    </a>
                  </div>

                </div>

                <div className='text-start pt-2'>
                  <p>
                    Lorem ipsum dolor sit amet,<b> consectetur</b>  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  </p>
                </div>

                <div className='text-start'>
                  <button className='btn btn-link p-0 text-dark text-decoration-underline small'>
                    Read More
                  </button>
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
                <img src="/assets/blog/blog2.jpg" alt="moreevent1.img" className='w-100 m-auto rounded-2' />
              </div>
              <div className=''>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex align-items-start gap-3'>
                    <div className='fs-5 fw-bold'>
                      <SlCalender />
                    </div>
                    <div className='pt-md-1'>
                      <p>19 May 2025</p>
                    </div>
                  </div>



                  <div className='d-flex gap-2'>
                    <a href="https://facebook.com"
                      className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                      style={{ width: '28px', height: '28px' }}>
                      <FaFacebookF style={{ fontSize: '0.7rem' }} />
                    </a>
                    <a href="https://instagram.com"
                      className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                      style={{ width: '28px', height: '28px' }}>
                      <FaInstagram style={{ fontSize: '0.7rem' }} />
                    </a>
                    <a href="https://youtube.com"
                      className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                      style={{ width: '28px', height: '28px' }}>
                      <FaYoutube style={{ fontSize: '0.7rem' }} />
                    </a>
                    <a href="https://x.com"
                      className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                      style={{ width: '28px', height: '28px' }}>
                      <FaXTwitter style={{ fontSize: '0.7rem' }} />
                    </a>
                  </div>

                </div>

                <div className='text-start pt-2'>
                  <p>
                    Lorem ipsum dolor sit amet,<b> consectetur</b>  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  </p>
                </div>

                <div className='text-start'>
                  <button className='btn btn-link p-0 text-dark text-decoration-underline small'>
                    Read More
                  </button>
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
                <img src="/assets/blog/blog2.jpg" alt="moreevent1.img" className='w-100 m-auto rounded-2' />
              </div>
              <div className=''>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex align-items-start gap-3'>
                    <div className='fs-5 fw-bold'>
                      <SlCalender />
                    </div>
                    <div className='pt-md-1'>
                      <p>19 May 2025</p>
                    </div>
                  </div>



                  <div className='d-flex gap-2'>
                    <a href="https://facebook.com"
                      className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                      style={{ width: '28px', height: '28px' }}>
                      <FaFacebookF style={{ fontSize: '0.7rem' }} />
                    </a>
                    <a href="https://instagram.com"
                      className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                      style={{ width: '28px', height: '28px' }}>
                      <FaInstagram style={{ fontSize: '0.7rem' }} />
                    </a>
                    <a href="https://youtube.com"
                      className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                      style={{ width: '28px', height: '28px' }}>
                      <FaYoutube style={{ fontSize: '0.7rem' }} />
                    </a>
                    <a href="https://x.com"
                      className="btn btn-dark btn-sm p-1 d-flex align-items-center justify-content-center text-decoration-none"
                      style={{ width: '28px', height: '28px' }}>
                      <FaXTwitter style={{ fontSize: '0.7rem' }} />
                    </a>
                  </div>

                </div>

                <div className='text-start pt-2'>
                  <p>
                    Lorem ipsum dolor sit amet,<b> consectetur</b>  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  </p>
                </div>

                <div className='text-start'>
                  <button className='btn btn-link p-0 text-dark text-decoration-underline small'>
                    Read More
                  </button>
                </div>

              </div>
            </div>
          </div>

          <div className="row">
         <div className="col-12 text-center mt-4  d-flex justify-content-center Cardshoveranimate">
            <button className="btn btn-outline-dark" onClick={() => {
                navigate("/donate-blog");
                window.scrollTo(0, 0)}}> <FaArrowCircleLeft /> Back</button>
          </div>
          </div>
        </div>

        
        {/* footer */}
        <section className="footerwrap p-0 pt-4" id="about">
          <div className="py-5">
            <div className="container  p-0 m-auto">
              <div className="yellowrap d-flex">
                <div className="col-md-6 col-lg-9 d-flex ">
                  <div>
                    <h3 className="p-3 fs-5 ">
                      “ Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Fuga ea reprehenderit rerum
                      magnam, ipsum aperiam  Fuga ea reprehenderit rerum.”
                    </h3>
                  </div>
                </div>
                <div className="lineone col-md-6"></div>
                <div className="banner_cta_wrap col-md-6 col-lg-3">
                  <OpenGeneralForm onOpen={() => setIsPopupOpen(true)} />
                </div>
              </div>
            </div>
            <div className="footervideo_wrap mx-0 mx-lg-2">
              <div className="video-section">
                <div className="video-wrapper">
                  {!isPlaying && (
                    <div className="video-overlay" onClick={handlePlay}>
                      <div className="play-button">&#9658;</div>
                    </div>
                  )}
                  {isPlaying ? (
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="Video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img
                      src="/assets/causes/cause-item3.jpg"
                      alt="Video thumbnail "
                      className="video-thumbnail"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="container p-0 m-auto">
              <div className="yellowrap">
                <div className="footer container-fluid py-0">
                  <div className="row">

                    <div className="col-lg-8 col-md-12 mb-4 mb-lg-0 d-flex align-items-end">
                      <ul className="ftrmenus d-flex flex-wrap justify-content-center gap-3 fw-bold p-2 p-md-0 list-unstyled">
                        <li className="d-flex align-items-center gap-2 mb-2">
                          <div>
                            <a href="/" className="text-decoration-none">Community Outreach</a>
                          </div>
                          <div className="ftrline d-none d-md-block mt-2"></div>
                        </li>
                        <li className="d-flex align-items-center gap-2 mb-2">
                          <div>
                            <a href="/" className="text-decoration-none">Public Outreach</a>
                          </div>
                          <div className="ftrline d-none d-md-block mt-2"></div>
                        </li>
                        <li className="d-flex align-items-center gap-2 mb-2">
                          <div>
                            <a href="/" className="text-decoration-none">Educational Trust</a>
                          </div>
                          <div className="ftrline d-none d-md-block mt-2"></div>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <div>
                            <a href="/" className="text-decoration-none">Home Care</a>
                          </div>
                        </li>
                      </ul>
                    </div>


                    <div className="col-lg-4 col-md-12">
                      <div className="sociallinks text-lg-end text-center">
                        <h5 className="mb-3">Follow with</h5>
                       <ul className="social-icons d-flex justify-content-lg-end justify-content-center gap-3 p-0 list-unstyled">
                          <li>
                            <a href="https://facebook.com"  target="_blank" className="icon facebook s-icons">
                              <FaFacebookF />
                            </a>
                          </li>
                          <li>
                            <a href="https://instagram.com"   target="_blank" className="icon instagram s-icons">
                              <FaInstagram />
                            </a>
                          </li>
                          <li>
                            <a href="https://linkedin.com"  target="_blank" className="icon linkedin s-icons">
                              <FaYoutube />
                            </a>
                          </li>
                          <li>
                            <a href="https://x.com"   target="_blank" className="icon x text-center s-icons">
                              <FaXTwitter />
                            </a>
                          </li>
                        </ul>
                        <p className="text-center">  Copyright © {new Date().getFullYear()}  Kovai Tech Member Chamber.<br/> All rights reserved</p>
                      </div>
                    </div>
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
    transform: translateY(-40%)!important;
  }
 
  .banner-section {
    margin: 0;
  }
 
  .breadcramp-sec {
    margin-left: 55px;
  }
}

@media (width: 320px) {
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
    margin-left: 50px;
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
            // margin-right:25px!important;
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

export default Blogdetails;