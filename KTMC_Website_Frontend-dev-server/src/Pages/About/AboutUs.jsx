import React, { useState } from "react";
import Header from "../../Components/Header";
import OpenGeneralForm from "../../Components/OpenGeneralForm";
import GeneralDonataionForm from "../../Components/GeneralDonataionForm";
import { Helmet } from "react-helmet-async"; // ✅ Add this line
// import  "./about.css";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa6";

// video function
const AboutUs = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div>
      <Helmet>
        <title>About Us | KTMC – Food & Education Programs in Coimbatore</title>
        <meta
          name="description"
          content="Learn about KTMC, a non-profit in Coimbatore dedicated to food donation, education support, and community upliftment. Join us to create lasting social impact."
        />
        <meta name="keywords" content="food and education programs" />
        <link rel="canonical" href="https://ktmc.org.in/about-us" />
      </Helmet>

      <Header />
      <>
        <div className="banner-containers position-relative">
          <div className="position-absolute bottom-0 end-0 text-white banner-wrapper">
            <div className="d-flex flex-column align-items-center banner-section">
              <div className="bannerline mb-3 contact-animated"></div>
              <h1 className="mb-3 contact-animated">About</h1>
              <div className="bannerline mb-3 contact-animated"></div>
            </div>
          </div>

          <div className="position-absolute bottom-1 start-0 text-white p-4 d-none d-sm-flex">
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
                About
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
                About
              </span>
            </h5>
          </div>
        </div>

        {/* Our Beginning */}
        <section className="py-3 pt-5 container">
          <div className="text-center">
            <h2 className="fw-bold">Our Humble Beginning</h2>
            <h6 className="fw-normal" style={{ textAlign: "justify" }}>
              Kovai Tech Member Chamber began with a clear vision: to serve
              humanity.This non-profit organization is built on the philosophy
              of "love for humanity”. As a Section 8 company,
              <span className="fw-bold fst-italic">
                our core focus is philanthropy.{" "}
              </span>
              We donate resources to specific causes, regions, or social issues.
              KTMC provides financial assistance through loans to individuals
              facing hardships. <br /> <br /> We also support communities and
              schools, addressing their basic needs.Our journey began with a
              promise to help those in need.We have steadily grown over the
              years.We are here for the community, and we stand by them. Our
              work touches numerous lives.We aspire to a brighter future for
              everyone. Change is our commitment. We are dedicated to making it
              effective and sustainable.
            </h6>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-3 my-4 mx-2 mx-md-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Our Services</h2>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 justify-content-center">
            <div className="col">
              <div className="position-relative text-center service-item">
                <img
                  src="/assets/about/community.jpg"
                  alt="services.img"
                  className="w-100 img-fluid rounded"
                />
                <img
                  src="/assets/about/community text bg.png"
                  alt="services.img"
                  className="w-100 img-fluid rounded position-absolute top-50 start-50 translate-middle text-white"
                />
                <h3 className="position-absolute top-50 start-50 translate-middle text-white">
                  Community outreach
                </h3>
              </div>
            </div>
            <div className="col">
              <div className="position-relative text-center service-item">
                <img
                  src="/assets/about/public.jpg"
                  alt="services.img"
                  className="w-100 img-fluid rounded"
                />
                <img
                  src="/assets/about/public text bg.png"
                  alt="services.img"
                  className="w-100 img-fluid rounded position-absolute top-50 start-50 translate-middle text-white"
                />
                <h3 className="position-absolute top-50 start-50 translate-middle text-white">
                  Public outreach
                </h3>
              </div>
            </div>
            <div className="col">
              <div className="position-relative text-center service-item">
                <img
                  src="/assets/about/education.jpg"
                  alt="services.img"
                  className="w-100 img-fluid rounded"
                />
                <img
                  src="/assets/about/euducation text bg.png"
                  alt="services.img"
                  className="w-100 img-fluid rounded position-absolute top-50 start-50 translate-middle text-white"
                />
                <h3 className="position-absolute top-50 start-50 translate-middle text-white">
                  Educational Trust
                </h3>
              </div>
            </div>
            <div className="col">
              <div className="position-relative text-center service-item">
                <img
                  src="/assets/about/homecare.jpg"
                  alt="services.img"
                  className="w-100 img-fluid rounded"
                />
                <img
                  src="/assets/about/homecare text bg.png"
                  alt="services.img"
                  className="w-100 img-fluid rounded position-absolute top-50 start-50 translate-middle text-white"
                />
                <h3 className="position-absolute top-50 start-50 translate-middle text-white">
                  Home Care
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* KTMC */}
        <section className="py-3 my-4 mx-2 mx-md-5">
          <div className="text-center mb-1">
            <h2 className="fw-bolder">KTMC</h2>
            <p className="text-center fw-bold fst-italic">
              Supporting lives and changing communities
            </p>
          </div>
          <div className="container">
            <div className="row d-flex flex-column flex-md-row pt-3 pt-md-5 me-md-5 pe-md-5 justify-content-md-center justify-content-start gap-md-5 gap-lg-0 ">
              <div className=" col col-md-2">
                <div className="number-sec d-flex justify-content-center align-items-center">
                  <span
                    className="text-center fw-bolder text-dark text-opacity-25 number"
                    style={{ fontSize: "100px" }}
                  >
                    1
                  </span>
                </div>
                <h6 className="text-center text-md-center fw-bold">
                  Community Outreach
                </h6>
              </div>
              <div className=" col p-0 col-md-4 pt-lg-3">
                <div className="text-center p-0 pt-3 ">
                  <h6 className="text-start p-3">
                    We support education by providing resources to schools and
                    creating opportunities for growth. KTMC has donated sound
                    systems and blackboards to schools in the Nilgiris district.
                    We help individuals in remote areas with their educational
                    needs. We also provide opportunities for sports in rural
                    communities.
                  </h6>
                </div>
              </div>
            </div>
            <div className="row gap-0 gap-md-5 gap-lg-0 pt-3 pt-md-5 me-md-5 pe-md-5 d-flex flex-column flex-md-row justify-content-md-end justify-content-center">
              <div className="col p-3 col-md-2">
                <div className="number-sec d-flex justify-content-center align-items-center">
                  <span
                    className="text-center fw-bolder text-dark text-opacity-25 number"
                    style={{ fontSize: "100px" }}
                  >
                    2
                  </span>
                </div>
                <h6 className="text-center text-md-center fw-bold">
                  Public Outreach
                </h6>
              </div>
              <div className="col p-0 col-md-4 pt-lg-4">
                <div className="text-center p-0 pt-4">
                  <h6 className="text-start p-lg-3">
                    We design campaigns and events to raise awareness of social
                    issues and promote community service. Our objective is to
                    inform the public, spread the word, and motivate
                    constructive action.
                  </h6>
                </div>
              </div>
            </div>
            <div className="row d-flex flex-column flex-md-row pt-3 pt-md-5 me-md-5 pe-md-5 justify-content-md-center justify-content-start gap-md-5 gap-lg-0">
              <div className=" col col-md-2">
                <div className="number-sec d-flex justify-content-center align-items-center">
                  <span
                    className="text-center fw-bolder text-dark text-opacity-25 number"
                    style={{ fontSize: "100px" }}
                  >
                    3
                  </span>
                </div>
                <h6 className="text-center text-md-center fw-bold">
                  Educational Trust
                </h6>
              </div>
              <div className=" col p-0 col-md-4 pt-lg-4">
                <div className="text-start p-0 pt-3">
                  <h6 className="text-md-start p-3">
                    KTMC is dedicated to improving learning environments and
                    supporting the academic growth of students. We believe that
                    education is essential for empowerment and building a
                    stronger future for all.
                  </h6>
                </div>
              </div>
            </div>
            <div className="row gap-0 pt-3 pt-md-5 me-md-5 pe-md-5 d-flex flex-column flex-md-row justify-content-md-end justify-content-center gap-md-5 gap-lg-0">
              <div className="col p-3 col-md-2 ">
                <div className="number-sec d-flex justify-content-center align-items-center">
                  <span
                    className="text-center fw-bolder text-dark text-opacity-25 number"
                    style={{ fontSize: "100px" }}
                  >
                    4
                  </span>
                </div>
                <h6 className="text-center text-md-center fw-bold">
                  Home Care
                </h6>
              </div>
              <div className="col p-0  col-md-4 pt-lg-5">
                <div className="text-start p-0">
                  <h6 className="text-md-start p-3">
                    KTMC provides essential services to schools and local
                    communities as part of its support. We provide support to
                    people and families, meeting their basic needs and improving
                    their quality of life.
                  </h6>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </section>

        {/* Moral conatiner */}
        <section className="">
          <div className="bg-dark p-5 d-flex-column align-content-center bg-img">
            <div className=" d-flex justify-content-center align">
              <p className="fw-bold text-md-start text-center fs-5 text-white">
                “We have the power to change the world when we choose to give,
                to lift others up with what we have.”
                <br />
                <br />
              </p>
            </div>
            <div className="d-flex justify-content-center justify-content-md-end pe-md-5 me-md-5 text-white">
              <h5 className="">- J.K. Rowling</h5>
            </div>
          </div>
        </section>

        {/* How We Fundraise */}
        <section className="py-3 py-md-5 my-4 container-fluid px-3 px-md-5">
          <div className="text-center mb-4 mb-md-2">
            <h2 className="fw-bold">How We Raise Funds</h2>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 p-3 text-center">
              <img
                src="/assets/about/howwefoun.jpg"
                alt="Fundraise"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 px-3 px-md-3 p-3 ">
              <p className="text-start lh-lg fs-p">
                Kindness brings hope to many. We also take pride in offering
                basic support and help in education, health conditions as well
                as the crucial community development programmes. We have a good
                intention to provide millions of people and families with better
                futures. What we need are your concern, kindness, and sincerity
                in volunteering. Each act and each hour of service helps us to
                make a lasting and good change.
                <br />
                Your donations are the direct support of our initiatives, and
                they help us to reach many more people and affect many more
                lives more deeply. Each rupee given to us will help us provide
                the required services, turning challenges into development and
                wellbeing opportunities. Make a difference in this endeavor,
                transform the world, and make a difference in lives. What it
                does is infuse people with hope, and make the community one that
                is stronger and better, and more fun. We can change the world
                and achieve truly amazing things by coming together.
              </p>
            </div>
          </div>
        </section>

        {/* footer */}
        <section className="footerwrap p-0 pt-2" id="about">
          <div className="py-0">
            <div className="container  p-0 m-auto">
              <div className="yellowrap d-flex">
                <div className="col-md-6 col-lg-9 d-flex ">
                  <div>
                    <h3 className="p-3 fs-h mt-4">
                      “ Support our mission of service. Help us create change”
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
                      <a href="/">Community Cutreach</a>
                    </li>
                    <li>
                      <a href="/">Public Outreach</a>
                    </li>
                    <li>
                      <a href="/">Educational Trust</a>
                    </li>
                    <li>
                      <a href="/">Home Care</a>
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

        {/* styles */}
        <style>
          {`
          
  .banner-containers {
  background-image: url("/assets/about/about banner.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
 


 .donaterow {
     width: 30% !important;
 }

 .bg-img {

     background-image: url("/assets/about/qoutebg.jpg") !important;
     background-position: contain !important;
     background-repeat: no-repeat !important;

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

//  .text-align{
//   text-align:justify!important;
//  }

 .number-sec {
     width: 100%;
     height: 100%;
     background-size: contain;
     background-position: center;
     background-image: url("/assets/about/numberbg.png");
     background-repeat: no-repeat;
     color: #000000;
 }

 .number {
     font-family: "KG Small Town Southern Girl", sans-serif;
 }


 @media (max-width: 768px) {
     .banner-containers {
         height: 50vh !important;
     }
 }

 @media (width: 768px) {
     .number-sec {
     width: 200%;
     height: 100%;
     background-size: contain;
     background-position: center;
     background-image: url("/assets/about/numberbg.png");
     background-repeat: no-repeat;
     color: #000000;
 }
 }
 @media (width: 320px) {

     .donaterow {
         width: 100% !important;
     }

//      .breadcramp-sec {
//        margin-left: 85px!important;

//  }


 }

@media (max-width: 475px) {
  .banner-wrapper {
    justify-content: center;
    align-items: center;
    bottom: auto;
    top: 50%;
      margin: auto;
    transform: translateY(-50%);
  }
 
  .banner-section {
    margin: 0;
  }
 
  // .breadcramp-sec {
  //  margin: auto;
  // }
}

 .donaterow {
     width: 100% !important;
 }

 .banner-sec {
     margin-bottom: 60px !important;
     margin-right: 10px !important;
 }

 .breadcramp-sec {
     font-size: 1rem;
     margin-left: 120px;
     align-items: center;
    flex-wrap: wrap;

 }

.breadcrumb-part {
  cursor: pointer;
}

 .lineone {
     width: 3px !important;
     height: 120px !important;
     background-color: #000 !important;
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


 .bannerline {
     width: 0.05rem !important;
     height: 60px !important;
     background-color: #fff !important;


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

 @media (max-width: 767px) {
     .service-item h3 {
         font-size: 1.2rem;
     }

     .ftrline {
         display: none;
     }

     .linetwo {
         display: none;
     }

     .lineone {
         display: none;
     }

 }

 .fs-p {
     font-size: 14px !important;
 }

 .fs-h {
     font-size: 16px;
 }
      @media (max-width: 576px) {
       .breadcramp-sec {
     font-size: 1rem;
     margin-left: 0px;
     margin-top:-20px;
     align-items: center;
    flex-wrap: wrap;

 }}
          `}
        </style>
      </>
    </div>
  );
};

export default AboutUs;
