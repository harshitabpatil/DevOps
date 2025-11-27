import { useState } from "react";
import Header from "../../Components/Header.jsx";
import { Helmet } from "react-helmet-async"; // ✅ Add this line
// import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import OpenGeneralForm from "../../Components/OpenGeneralForm";
import Enrich from "../../assets/ourcauses/enrich.jpg";
import donationFood from "../../assets/ourcauses/heal.jpg";
import Empowerment from "../../assets/ourcauses/empowerment.jpg";

import buildingBetterWorld from "../../assets/ourcauses/building-bettre-world.png";
import icon1 from "../../assets/ourcauses/icon1.png";
// import CauseImageSlider from "../../Components/CauseImageSlider";
import Causeslider from "../../Components/OurCauseslider.jsx";
// import { useNavigate } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUser,
//   faEnvelope,
//   faMoneyBillTransfer,
// } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import GeneralDonataionForm from "../../Components/GeneralDonataionForm";

const OurCauses = () => {
  // const [isPlaying, setIsPlaying] = useState(false);

  // const handlePlay = () => {
  //   setIsPlaying(true);
  // };

  //  ftrsliderfunctions
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

  // const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>KTMC – Social Welfare Causes & Community Initiatives</title>
        <meta
          name="description"
          content="KTMC’s social initiatives aim to build a better world via food drives, education support, healthcare outreach, home care, and programs empowering individuals in need."
        />
        <meta name="keywords" content="social welfare causes" />
        <link rel="canonical" href="https://ktmc.org.in/ourcauses" />
      </Helmet>

      <Header />
      <div className="banner-containers position-relative">
        <div className="position-absolute bottom-0 end-0 text-white banner-wrapper">
          <div className="d-flex flex-column align-items-center banner-section">
            <div className="bannerline mb-3 contact-animated"></div>
            <h1 className="mb-3 contact-animated">Our Causes</h1>
            <div className="bannerline w-50 mb-3 contact-animated"></div>
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
              Our Causes
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
              Our Causes
            </span>
          </h5>
        </div>
      </div>

      <section className="about-section text-center my-4" id="about">
        <h2 className="pb-0">World of Humanity</h2>
        <p className="mb-5 fs-2">Latest Causes</p>
        <div className="container  p-0 m-auto">
          {" "}
          <Causeslider />
        </div>
      </section>

      <section className="py-5 my-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2>Building A Better World</h2>
              <p>
                At KTMC, we commit to vital causes. Our work focuses on
                essential needs. We support communities in many ways. We strive
                for a better tomorrow for everyone. Our efforts make a real
                difference. We tackle challenges directly. We believe in lasting
                positive change. We help individuals and families.
              </p>

              <ul className="py-2">
                <li className="mb-2">Health Care.</li>
                <li className="mb-2">Education.</li>
                <li className="mb-2">Community Development. </li>
                <li className="mb-2">Livelihood Support.</li>
              </ul>

              <p>
                These are some of the main areas of our work. We invite your
                support to strengthen our impact. Every contribution helps us
                achieve our goals. We build a brighter future together.
              </p>
            </div>
            <div className="col-md-5">
              <img src={buildingBetterWorld} alt="building Better World" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div
            className="row "
            style={{
              backgroundColor: "black",
            }}
          >
            <div className="col-md-4 dont-foot ps-0">
              <img src={donationFood} alt="" width="100%" />
            </div>
            <div className="col-md-8 py-5 ">
              <h2 className="text-uppercase text-white">what we do</h2>
              <p className="text-white mb-5">
                We turn compassion into action. KTMC provides direct support to
                communities in need. This includes distributing food, offering
                educational resources, and ensuring access to basic amenities.
                We also extend loans to individuals and families. Our work
                supports well-being and fosters growth. Every initiative is
                designed to create a meaningful impact. We are committed to real
                change on the ground.
              </p>

              <div className="what-we-do-btn food">
                <a href="/about-us">Learn More About Our Impact</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center text-center">
            <div className="col-md-6 pd-right pd-left">
              <div className="tab-btn ">
                <a href="#">Awards and honors</a>
              </div>
            </div>
            <div className="col-md-6 pd-left pd-right">
              <div className="tab-btn2">
                <a href="#">Our Milestones of Impact</a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row" style={{ backgroundColor: "black" }}>
            <div className="col-md-4 ps-0 pe-0 position-relative">
              <img src={donationFood} alt="" width="100%" />
              <h3
                className="position-absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#ffcc00",
                  fontWeight: "bold",
                  fontSize: "3rem",
                  WebkitTextStroke: "1px black",
                }}
              >
                Heal
              </h3>
            </div>

            <div className="col-md-4 ps-0 pe-0 position-relative">
              <img src={Enrich} alt="" width="100%" />
              <h3
                className="position-absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#ffcc00",
                  fontWeight: "bold",
                  fontSize: "3rem",
                  WebkitTextStroke: "1px black",
                }}
              >
                Enrich
              </h3>
            </div>

            <div className="col-md-4 ps-0 pe-0 position-relative">
              <img src={Empowerment} alt="" width="100%" />
              <h3
                className="position-absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#ffcc00",
                  fontWeight: "bold",
                  fontSize: "3rem",
                  WebkitTextStroke: "1px black",
                }}
              >
                Empower
              </h3>
            </div>
          </div>
        </div>
        <style jsx>{`
          .tab-btn {
            padding: 35px;
            background-color: #ffb300;
            a {
              text-decoration: none;
              color: #000;
              font-weight: 600;
              font-size: 19px;
            }
          }
          .tab-btn2 {
            padding: 35px;
            background-color: #ffcc00;
            a {
              text-decoration: none;
              color: #000;
              font-weight: 600;
              font-size: 19px;
            }
          }
          .pd-left {
            padding-left: 0px;
          }
          .pd-right {
            padding-right: 0px;
          }
          @media (max-width: 767px) {
            .dont-foot {
              padding: 10px;
            }
          }
        `}</style>
      </section>

      <div className="container">
        {/* Diminish sec */}
        <section className="">
          <div className="row p-lg-5 mb-0">
            <div className="col-12 col-lg-12 col-md-12">
              <div className="d-flex flex-column align-items-center">
                <h3 className="fw-bold text-center mb-lg-4 mt-4">
                  Heal<br></br>
                </h3>
                <p className="text-justify fs-p">
                  At KTMC, we celebrate the potential of each person. We feel
                  the power in any form. We work to ensure that we have an equal
                  opportunity world. The capability of no one should be ignored.
                  We are alongside the conquerors of difficulties. We are also
                  committed to empowering persons with disabilities. Barriers
                  come down through our effort. We will promote inclusion and
                  respect. We want to bring out their individual flairs. Each
                  person should have an opportunity to shine.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="row p-lg-5">
            <div className="col-12 col-lg-12 col-md-12">
              <div className="d-flex flex-column align-items-center">
                <h3 className="fw-bold text-center mb-lg-4">
                  Enrich<br></br>
                </h3>
                <p className="text-justify fs-p">
                  At KTMC, we deeply believe in enriching every life. We aim to
                  offer opportunities that lead to assured personal satisfaction
                  and welfare. We are inclined to enrich every single life. We
                  strive to brighten people and society, making them feel
                  fulfilled. We dedicate ourselves to coming up with various
                  programs that encourage creativity and engagement. This
                  interest builds stronger ties and a more enriched society. It
                  is the mission of KTMC to make people happy and fulfilled so
                  that everyone will have the chance to live a fuller life.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="row p-lg-5">
            <div className="col-12 col-lg-12 col-md-12">
              <div className="d-flex flex-column align-items-center">
                <h3 className="fw-bold text-center mb-lg-4">
                  Empower<br></br>
                </h3>
                <p className="text-justify fs-p">
                  At KTMC, we celebrate the potential of each person. We feel
                  the power in any form. We work to ensure that we have an equal
                  opportunity world. The capability of no one should be ignored.
                  We are alongside the conquerors of difficulties. We are also
                  committed to empowering persons with disabilities. Barriers
                  come down through our effort. We will promote inclusion and
                  respect. We want to bring out their individual flairs. Each
                  person should have an opportunity to shine.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Divyang fashion sec */}
        {/* <section className=''>
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
        </section> */}
      </div>

      <section className="py-3">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="pb-0">They need your help!</h2>
              <p className="pb-4 text-center">
                “Children believe in better future. Several do not have the
                opportunities and basic necessities.<br></br>
                Your assistance may really help. It is able to introduce hope to
                the places that need it the most. “
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3">
              <div
                className="box-wrapper text-center"
                style={{
                  border: "2px dashed black",
                  padding: "40px 5px",
                  borderRadius: "2px",
                }}
              >
                <div className="box-icon">
                  <img
                    style={{
                      width: "100px",
                    }}
                    src={icon1}
                    alt=""
                  />
                </div>
                <div className="box-content">
                  <p>
                    Your help provides essential learning resources.This creates
                    secure environments,giving a brighter future.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="box-wrapper text-center"
                style={{
                  border: "2px dashed black",
                  padding: "40px 5px",
                  borderRadius: "2px",
                }}
              >
                <div className="box-icon">
                  <img
                    style={{
                      width: "100px",
                    }}
                    src={icon1}
                    alt=""
                  />
                </div>
                <div className="box-content">
                  <p>
                    Contribute to programs that offer vital resources, ensuring
                    families have the stability they need to thrive together.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="box-wrapper text-center"
                style={{
                  border: "2px dashed black",
                  padding: "40px 5px",
                  borderRadius: "2px",
                }}
              >
                <div className="box-icon">
                  <img
                    style={{
                      width: "100px",
                    }}
                    src={icon1}
                    alt=""
                  />
                </div>
                <div className="box-content">
                  <p>
                    Help us provide care and opportunities. This enables young
                    minds to develop, learn, and reach full potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .box-icon {
            width: 40% !important;
            margin: auto !important;
          }
          .box-icon img {
            margin-bottom: 30px;
          }

          @media (max-width: 767px) {
            .box-wrapper {
              margin-bottom: 20px;
            }
          }
        `}</style>
      </section>

      <section className="footerwrap p-0" id="about">
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
                        className="icon x text-center"
                        target="_blank"
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
                  <p className="text-center">All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .lineone {
            width: 3px !important;
            height: 120px !important;
            background-color: #000 !important;
          }

          .ftrmenus {
            display: block;
            background: rgba(251, 195, 82, 0.39);
            // margin-right: 15px;
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

          .banner-containers {
            background-image: url("/assets/mainbanner/slide1.jpg");
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
            width: 100%;
            height: 70vh;
            overflow: hidden;
            aspect-ratio: 18 / 10;
          }

          .donaterow {
            width: 30% !important;
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
              justify-content: center !important;
              align-items: center;
              bottom: auto;
              top: 50%;
              transform: translateY(-40%) !important;
              margin-right:0;
            }

            .banner-section {
              margin: 0;
            }

            .breadcramp-sec {
              margin-left: 0px;
            }
          }

          @media (width: 320px) {
            .banner-wrapper {
              justify-content: center !important;
              align-items: center;
              bottom: auto;
              top: 50%;
              transform: translateY(-40%) !important;
            }

            .banner-section {
              margin: 0;
            }

            .breadcramp-sec {
              margin-left: 0px;
              font-size: 13px;
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
            .banner-containers {
              height: 50vh;
            }

            .donaterow {
              width: 100% !important;
            }

            // .banner-sec{
            // margin-bottom:60px!important;
            // }

            // .breadcramp-sec{
            //   font-size:1rem !important;
            //   margin-left:55px!important;
            // }
          }

          .lineone {
            width: 3px !important;
            height: 120px !important;
            background-color: #000 !important;
          }

          .blackwrap {
            background: rgb(1, 1, 1);
            padding: 40px 30px 20px;
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

          .bannerline {
            width: 0.05rem !important;
            height: 60px !important;
            background-color: #fff !important;
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
        `}</style>
      </section>
    </>
  );
};

export default OurCauses;
