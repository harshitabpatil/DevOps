import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { useNavigate } from 'react-router-dom';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./ktmcLandingPage.css";

import Boybg from "../../assets/landingpage/boy.png";
import whitelogo from "../../assets/landingpage/whitelogo.png";
import QrCode from "../../assets/landingpage/qrcode.png";

import LpCauseImageSlider from "./LpCauseImageSlider";
import ScrollBackgroundSection from "./LpScrollinbg";
import { Helmet } from 'react-helmet-async'; // ✅ Add this line
import OpenDonatButton from "../../Components/OpenDonatButton";
import GeneralDonationForm from "../../Components/GeneralDonataionForm";
import Footer from "../../Components/Footer";
import OrangeDonatButton from "../../Components/orangedonatbutton";


const images = [
  "/assets/imageslp/lpslide1.jpg",
  "/assets/imageslp/lpslide2.jpg",
  "/assets/imageslp/lpslide3.jpg",
];

const KtmcLandingPage = () => {







  const navigate = useNavigate();

  // Updated sections array with "Give Me"
  const sections = [
    {
      title: 'Annadan Mahadan',
      url: '/donate-annadan-mahadan',
    },
    {
      title: 'Food',
      url: '/donate',
    },
    {
      title: 'Donate Via Paytm',
      url: '/donate-donation-policy',
    },
    {
      title: 'Word of Humanity',
      url: '/donate-world-humanity',
    },

  ];

  // Handle click to navigate to the specified URL
  const handleClick = (url) => {
    if (url.startsWith('http')) {
      window.open(url, '_blank');
    } else {
      navigate(url);
    }
  };




  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentImageIndex(swiper.realIndex);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // adjust scroll distance
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imagestatic = [
    {
      id: 1,
      src: "/assets/imageslp/heal.jpg",
      title: "Heal",
      description:
        "We provide the necessary medical assistance; you offer healing and comfort.",
    },
    {
      id: 2,
      src: "/assets/imageslp/enrich.jpg",
      title: "Enrich",
      description:
        "We encourage growth and opportunity. Through your generosity, you can help create brighter futures.",
    },
    {
      id: 3,
      src: "/assets/imageslp/empower.jpg",
      title: "Empower",
      description:
        "We equip people with essential skills and inspire them—with your support.",
    },
  ];

  return (
    <div className="mainlpwrap overflow-hidden">

      <Helmet>
        <title>KTMC – Charity Organization in Coimbatore</title>
        <meta
          name="description"
          content=": KTMC is a charity organization in Coimbatore offering food drives, education, free learning, and healthcare—empowering lives through social welfare programs."
        />
        <link rel="canonical" href="https://ktmc.org.in/about/promotion" />
        <meta
          name="keywords"
          content="Charity organization in Coimbatore"
        />
      </Helmet>



      <section className="lpherosection" id="ktmclp">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".custom-dots" }}
          effect="fade"
          speed={1000}
          loop={true}
          className="background-swiper"
          onSlideChange={handleSlideChange}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="background-slide"
                style={{ backgroundImage: `url(${img})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay Content */}
        <div className="overlay">
          {/* Masked area using current background image */}

          <header className={`main-header ${isSticky ? "sticky" : ""}`}>
            <div className="top-bar">
              <div className="social-icons">
                <a href="#">Event</a>
                <a href="#">Registration</a>
                <a href="#">Give a Gift</a>
              </div>
            </div>

            <div className="header-content">
              <div className="container d-flex">
                <div className="col-md-6 m-0 fl-0">
                  <div className="lplogo text-left">
                    <img src={whitelogo} alt="whitelogo" />
                  </div>
                </div>
                <div className="col-md-6 ms-auto text-right ">
                  <div className="login-cta  wrapper">
                    <button className="target">Become a Volunteer</button>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="container py-3 ">
            <div className="col-md-6 ms-auto main-title text-center">
              <p>Where can i</p>
              <h1 className="">Get Some?</h1>
            </div>
          </div>
          <div className="custom-dots"></div>
          <div className="home_banner_content">
            <div className="ybg-petternwrap"></div>
            <div className="yellowtopleft"></div>
            <div className="yellowtopright"></div>
            <div className="y-bg">
              <div className="container m-auto">
                <div className="col-md-12 d-flex">
                  <div className="col-md-6 ml-auto">
                    <div className="boybg">
                      <img src={Boybg} alt="bannertag" />
                    </div>
                    <div
                      className="overlay-mask-image"
                      style={{
                        backgroundImage: `url(${images[currentImageIndex]})`,
                      }}
                    ></div>
                  </div>
                  <div className="col-md-6 ps-3 pe-3 py-5 ml-auto">
                    <div className="ps-5 slideryellowwrap  ml-auto">
                      <div className="social-icons  p-3 ps-0">
                        <a href="https://www.facebook.com/profile.php?id=61578071846348">
                          <i className="fab fa-facebook-f"></i>
                        </a>

                        <a href="https://www.instagram.com/kovaitechmemberchamber">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/@KTMC-t3l8f">
                          <i className="fab fa-youtube"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/kovai-tech-member-chamber-ktmc/">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </div>
                      <p className="text-left ">
                        Get ready to make a difference! Hungry kids need your help.
                        Every meal brings hope. Your support changes lives. Join KTMC today.
                        Feed a future. Lift a spirit. Act now!.
                      </p>
                      <div className="mb-5 p-2">
                        <OrangeDonatButton onOpen={() => setIsPopupOpen(true)} />
                        <GeneralDonationForm
                          isOpen={isPopupOpen}
                          onClose={() => setIsPopupOpen(false)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ybg_joinwrap">
        <div className="container">
          <LpCauseImageSlider />
        </div>
        <div className="col-md-8 pt-5 p-3 text-center m-auto">
          <h3 className="pb-3 text-white">KOVAI TECH MEMBER CHAMBER</h3>
          <p className="text-white pb-5">
            Your kindness may save a life. We make donating simple and clear. Our goal is to help you give effectively. We guide you through each step. Your donations count a lot.{" "}
          </p>
        </div>
        <div className="yellowpatterwrap d-flex">
          <div className="yellowtopright col-md-6"></div>
          <div className="yellowtopleft col-md-6"></div>
        </div>
      </section>

      <section className="lpourserviceswrap y-bg">
        <div className="">
          <div className="container py-5">
            <h3 className="pb-3 text-center text-dark">WHAT WE DO</h3>
            <div className="col-md-12 pb-2">
              <div className="col-md-6 d-inline-block mb-5 p-3">
                <div className="d-flex">
                  <div className="p-3 numbserv text-center">
                    <span className="mt-4">1</span>
                    <h5>Community Cutreach</h5>
                  </div>
                  <p className="col-7 mt-lg-4">
                    We touch hearts, build strong relationships, address local needs, and make a meaningful difference in lives.
                  </p>
                </div>
              </div>
              <div className="col-md-6 d-inline-block mb-5 p-3">
                <div className="d-flex">
                  <div className="p-3 numbserv text-center">
                    <span className="mt-4">2</span>
                    <h5>Public Outreach</h5>
                  </div>
                  <p className="col-7 mt-lg-4">
                    We spread hope, raise awareness, inspire action, and unite for change.
                  </p>
                </div>
              </div>
              <div className="col-md-6 d-inline-block mb-5 p-3">
                <div className="d-flex">
                  <div className="p-3 numbserv text-center">
                    <span className="mt-4">3</span>
                    <h5>Educational Trust</h5>
                  </div>
                  <p className="col-7 mt-lg-5">
                    We empower minds, offer free learning, boost skills, and shape bright futures.

                  </p>
                </div>
              </div>
              <div className="col-md-6 d-inline-block mb-5 p-3">
                <div className="d-flex">
                  <div className="p-3 numbserv text-center">
                    <span className="mt-4">4</span>
                    <h5>Home Care</h5>
                  </div>
                  <p className="col-7 mt-lg-5 ">
                    We bring comfort, provide support, care for all, and create safe spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="threequoteblog p-0">
        <div className="grid-container">
          {imagestatic.map((imagestatic) => (
            <div className="card" key={imagestatic.id}>
              <img
                src={imagestatic.src}
                alt={imagestatic.title}
                className="card-img"
              />

              {/* Always visible title on top of the image */}
              <div className="card-title-overlay">
                <h3>{imagestatic.title}</h3>
              </div>

              {/* Description shows on hover */}
              <div className="card-overlay">
                <p>{imagestatic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="howdonatewrap p-0">
        <div className="container text-center">
          <h5 className=" pt-5">We will guide you for</h5>
          <h3 className="pb-3 fw-b">KOVAI TECH MEMBER CHAMBER</h3>
          <p>
            Your kindness may save a life. We make donating simple and clear.  Our goal is to help you give effectively.<br></br>
            We guide you through each step. Your donations count a lot.
          </p>
          <div className="container">
            <div className="row justify-content-center">
              {sections.map((section, index) => (
                <div key={index} className="col-md-6 col-sm-12 p-3">
                  <div
                    className="d-flex justify-content-center align-items-center border rounded shadow-sm donation-card"
                    onClick={() => handleClick(section.url)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="p-3 text-center">
                      <h6 className="m-0">{section.title}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-12 p-3">
            <h5 className="text-center p-3">
              Every contribution helps our mission. Your generosity brings hope. It provides vital support to those in need. Join us in transforming lives.
            </h5>
            <div className="mb-5 p-2">
              <OpenDonatButton onOpen={() => setIsPopupOpen(true)} />

              <GeneralDonationForm
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
              />
            </div>
          </div>
        </div>
      </section>

      <ScrollBackgroundSection />

      <section>
        <div className="container lpfooteraddress  pt-5 d-flex">
          <div className="col-md-6 d-inline-block p-3 text-right">
            <h5 className="pt-5 fw-bold">Head Office</h5>
            <p className=" ">
              53-2, Second Floor, 3rd Cross, MKP Colony Main St, Ganapathy,
              <bt />
              Coimbatore, Tamil Nadu 641006.
            </p>
            <h5 className="pb-3 fw-bold">+91 924242 42424 | 924242 42424</h5>
          </div>
          <div className="col-md-6 border-left d-inline-block p-3 text-left">
            <h5 className="pt-5 fw-bold">Office Address</h5>
            <p className=" ">
              53-2, Second Floor, 3rd Cross, MKP Colony Main St, Ganapathy,
              <bt />
              Coimbatore, Tamil Nadu 641006.
            </p>
            <h5 className="pb-3 fw-bold">+91 924242 42424 | 924242 42424</h5>
          </div>
        </div>
      </section>

      <section></section>
      <section>
        <div className="lpfootercopyright pb-5 pt-5 d-flex  ms-auto ">
          <div className="container ">
            <div className="d-flex ms-auto qrcode text-left">
              <span>
                <img src={QrCode} alt="QR Code" />
              </span>
              <div className="ps-3 pe-3">
                <h5 className="text-white">
                  "Got any questions? I'm happy to help"
                </h5>
                <p className="pt-1">
                  Scan this code to connect directly. It offers quick support. We are here for your inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KtmcLandingPage;
