import React from "react";
import { useState } from "react";
import Header from "../../Components/Header";
import OpenGeneralForm from "../../Components/OpenGeneralForm";
import GeneralDonataionForm from "../../Components/GeneralDonataionForm";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa6";

import { Helmet } from "react-helmet-async"; // ✅ Add this line

const ContactUs = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <div>
      <Helmet>
        <title>KTMC – Non-Profit Organization in Coimbatore, India</title>
        <meta
          name="description"
          content="KTMC is a registered non-profit in Coimbatore, working on food donation, education, and social welfare. Donate or volunteer to support our community work."
        />
        <link rel="canonical" href="https://ktmc.org.in/contact-us" />
      </Helmet>

      {/* Top Navigation/Header */}
      <Header />

      {/* bannersection */}
      <div className="banner-containers position-relative">
        <div className="position-absolute bottom-0 end-0 text-white banner-wrapper">
          <div className="d-flex flex-column align-items-center banner-section">
            <div className="bannerline w-50 mb-3 contact-animated"></div>
            <h1 className="mb-3 contact-animated">Contact</h1>
            <div className="bannerline w-50 mb-3 contact-animated"></div>
          </div>
        </div>

        <div className="position-absolute top-0 start-0 text-white p-4 d-none d-sm-flex">
          <h5 className="fw-normal mb-0 d-flex align-items-center breadcramp-sec">
            <span
              className="breadcrumb-part me-1 animated-part"
              onClick={() => (window.location.href = "/")}
              style={{ cursor: "pointer" }}
            >
              Home
            </span>
            <span className="me-1 animated-part delay-1">/</span>
            <span className="breadcrumb-part animated-part delay-2">
              Contact-us
            </span>
          </h5>
        </div>

        <div
          className="position-absolute text-white p-3 w-100 d-flex justify-content-center d-sm-none"
          style={{ top: "20px" }}
        >
          <h5 className="fw-normal mb-0 d-flex align-items-center breadcramp-sec">
            <span
              className="breadcrumb-part me-1 animated-part"
              onClick={() => (window.location.href = "/")}
              style={{ cursor: "pointer" }}
            >
              Home
            </span>
            <span className="me-1 animated-part delay-1">/</span>
            <span className="breadcrumb-part animated-part delay-2">
              Contact-us
            </span>
          </h5>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container-fluid mt-5 mb-3">
        <div className="row justify-content-center p-2 p-md-0">
          {/* Contact Form Section */}
          <div
            className="col-lg-8 text-white mb-5 p-4"
            style={{
              backgroundImage: "url(/assets/contact/formbg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
            }}
          >
            <h3 className="text-center mb-4">Have Questions?</h3>
            <p
              className="text-center mx-auto mb-5"
              style={{ maxWidth: "600px" }}
            >
              Every question helps us grow. Every voice matters. Please reach
              out to us.
            </p>

            {/* Enquiry Reason Dropdown */}
            <div className="row align-items-center mb-4">
              <div className="col-md-6">
                <h4 className="mb-0 fw-normal fs-3">Get In Touch</h4>
              </div>
              <div className="col-md-6">
                <label className="form-label">Reason for Enquiry</label>
                <select className="form-control">
                  <option value="">Select Inquiry Type</option>
                  <option value="support">Support</option>
                  <option value="sales">Sales</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Contact Form */}
            <form>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Contact</label>
                  <input
                    type="number"
                    placeholder="Contact Number"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Custom Field</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="mb-3 ">
                <label className="form-label">Share Your Mind</label>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="form-control"
                ></textarea>
              </div>

              <div className="d-flex justify-content-center mb-4">
                <button
                  type="submit"
                  className="btn btn-warning text-white px-5"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="row justify-content-center gap-4 position-relative">
          {/* Head Office Info */}
          <div className="col-md-4 text-center text-md-end">
            <h5>Head Office</h5>
            <p className="p-s">
              53-2, Second Floor, 3rd Cross, MKP Colony Main St, Ganapathy,
              Coimbatore, Tamil Nadu 641006
            </p>
            <div className="row justify-content-center justify-md-end text-center text-md-end">
              <h6>924242 42424 924242 42424</h6>
            </div>
          </div>

          {/* Alternate Office Info */}
          <div className="col-md-4 text-center text-md-start">
            <h5>Office Address</h5>
            <p className="p-s">
              53-2, Second Floor, 3rd Cross, MKP Colony Main St, Ganapathy,
              Coimbatore, Tamil Nadu 641006
            </p>
            <h6>924242 42424 924242 42424</h6>
          </div>

          {/* Email Section */}
          <div className="col-12 text-center mt-3">
            <p>info@kovaitechmemberchamber</p>
          </div>
        </div>
      </div>

      {/* Footer Scan Section */}
      <div className="container-fluid">
        {/* Main Banner Section */}
        <div className="bg-dark text-white d-flex flex-column flex-md-row align-items-center justify-content-between p-4 p-md-5 position-relative rounded">
          {/* Message Section */}
          <div className="text-center text-md-center mb-3 mb-md-0 w-100">
            <h5 className="mb-0">
              Got any questions?
              <br className="d-md-none" /> I'm happy to help.
            </h5>
          </div>

          {/* QR Code - Mobile */}
          <div className="d-block d-md-none d-flex text-center mt-4 w-100 align-items-center justify-content-center">
            <img
              src="/assets/contactus/scan.png"
              alt="QR Code"
              className="img-fluid"
              style={{ maxWidth: "250px" }}
            />
          </div>

          {/* QR Code - Desktop (Absolutely Positioned) */}
          <div
            className="position-absolute d-none d-md-block scan"
            style={{
              // right: "130px",
              left: "300px",
              // bottom: "80px",
              top: "30px",
              transform: "translateY(0)",
            }}
          >
            <img
              src="/assets/contactus/scan.png"
              alt="QR Code"
              className="img-fluid scan-img"
              style={{ maxWidth: "200px" }}
            />
          </div>
        </div>

        {/* Additional Note */}
        <div className="d-flex justify-content-center p-3 mt-2 p-s">
          <p
            className="text-center text-md-start mb-0"
            style={{ maxWidth: "800px" }}
          >
            Scan this QR code for quick contact. It connects you to our team.
            <br className="d-none d-md-block" />
            We are here to answer your doubts. Reach out instantly for support.
            <br className="d-none d-md-block" />
            Your questions are important.
          </p>
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
                    “ Your support changes lives. Every donation helps
                    communities grow. Join KTMC today.”
                  </h3>
                </div>
              </div>
              <div className="lineone col-md-6"></div>
              <div className="banner_cta_wrap col-md-6 col-lg-3">
                <OpenGeneralForm onOpen={() => setIsPopupOpen(true)} />
                <GeneralDonataionForm
                  isOpen={isPopupOpen}
                  onClose={() => setIsPopupOpen(false)}
                />
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
                    src="https://www.youtube.com/embed/bimysAl81Vw?autoplay=1"
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
                      <a
                        href="https://www.facebook.com/profile.php?id=61578071846348"
                        target="blank"
                        className="icon facebook"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/KTMC64327"
                        target="_blank"
                        className="icon x text-center"
                      >
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
                        href="https://www.instagram.com/kovaitechmemberchamber"
                        target="blank"
                        className="icon instagram"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/kovai-tech-member-chamber-ktmc/"
                        target="blank"
                        className="icon linkedin"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@KTMC-t3l8f"
                        target="blank"
                        className="icon linkedin"
                      >
                        <FaYoutube />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.pinterest.com/kovaitechmemberchamber/"
                        target="blank"
                        className="icon linkedin"
                      >
                        <FaPinterest />
                      </a>
                    </li>
                  </ul>
                  <p className="text-center">
                    {" "}
                    Copyright © {new Date().getFullYear()} Kovai Tech Member
                    Chamber.
                    <br /> All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page-specific Styles */}
      <style>
        {`

         .banner-containers{
         background-image:url("/assets/mainbanner/slide1.jpg");
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
    margin-left:0px;
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
    margin-left:65px;
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

     @media (max-width: 768px) {
             
            .donaterow{
            width:100%!important;
            }

            // .banner-sec{
            // margin-bottom:60px!important;
            // }

            // .breadcramp-sec{
            //   font-size:1rem !important;
            //   margin-left:45px!important;
            // }
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
 
    .banner-containers {
      position: relative;
      width: 100%;
      height: 70vh;
      overflow: hidden;
    }
 
    .transition {
      transition: all 0.3s ease;
    }
 
    .cursor-pointer {
      cursor: pointer;
    }
 
    .service-item {
      overflow: hidden;
      transition: transform 0.3s ease;
    }
 
    .service-item:hover {
      transform: scale(1.05);
    }
 
    .lineone {
      width: 2px !important;
      height: 120px !important;
      background-color: #000 !important;
    }
 
    .bannerline {
      width: 0.05rem !important;
      height: 60px !important;
      background-color: #fff !important;
    }
 
    .addressline {
      width: 1px !important;
      height: 160px !important;
      background-color: #000 !important;
    }
 
    .ftrmenus {
      display: block;
      background: rgba(251, 195, 82, 0.39);
      font-size: 15px;
    }
 
    .ftrmenus li a {
      padding: 0 25px;
      color: #000;
    }
 
    .ftrline {
      width: 2px;
      height: 50px;
      background-color: #000;
    }
 
    .s-icons {
      color: #c5990b !important;
      font-size: 25px !important;
    }
 
    .p-s {
      font-size: 12px;
    }
 
    @media (max-width: 768px) {
      .banner-containers {
        height:50vh;
      }
 
      .banner-containers .position-absolute.top-50.start-50 {
        margin-left: 0 !important;
        width: 100%;
        text-align: center;
      }
 
      .banner-containers h1 {
        font-size: 1.8rem;
      }
 
      .banner-containers .bannerline {
        width: 0.05rem !important;
      }
 
      .banner-containers .banner-text {
        margin: 90px 0 0 0 !important;
        font-size: 1rem;
        bottom: 10%;
        top: auto;
        left: 50%;
        transform: translateX(-50%);
      }
 
      .service-item h3 {
        font-size: 1.2rem;
      }
 
      .ftrline, .linetwo, .lineone {
        display: none;
      }
 
      .banner-text {
        margin: 20px !important;
        margin-left: 150px !important;
        font-size: 18px !important;
      }

      .scan{
      left: 25px!important;
    top: 30px!important;
    transform: translateY(0px)!important;
      }

      .scan-img{
        max-width:150px!important; 
      }
    }

     @media (width: 1024px) {
     .scan{
       left: 100px!important;
     }
     }
             
    

   .masked-image {
  mask-image: url('/assets/contact/formbg maskbg.png');
  mask-size: cover;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-image: url('/assets/contact/formbg maskbg.png');
  -webkit-mask-size: cover;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  z-index: 1;
  padding:20px;
}
  `}
      </style>
    </div>
  );
};

export default ContactUs;
