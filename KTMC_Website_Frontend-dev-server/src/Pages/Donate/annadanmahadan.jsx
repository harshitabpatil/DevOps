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

} from "react-icons/fa6"
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Helmet } from 'react-helmet-async'; // ✅ Add this line


const Annadanmahadan = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  //  news and events sliderfunctions

  // const sliderRef = useRef(null);
  // const intervalRef = useRef(null);

  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };


  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   let scrollAmount = 0;
  //   const cardWidth = 320 + 16;
  //   const totalWidth = cardWidth * 7;

  //   const startAutoScroll = () => {
  //     intervalRef.current = setInterval(() => {
  //       scrollAmount += cardWidth;


  //       if (scrollAmount >= totalWidth) {
  //         scrollAmount = 0;
  //         slider.scrollTo({ left: 0, behavior: "instant" }); // Instantly reset
  //       } else {
  //         slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
  //       }
  //     }, 3000);
  //   };

  //   startAutoScroll(); 


  //   const handleMouseEnter = () => clearInterval(intervalRef.current);
  //   const handleMouseLeave = () => {
  //     clearInterval(intervalRef.current);
  //     startAutoScroll(); 
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
        <title>Annadhanam Seva Coimbatore – Support Food Donation</title>
        <meta
          name="description"
          content="Join Annadhanam Seva in Coimbatore with KTMC. Feed the needy, support temple food drives, and earn blessings through this sacred act of giving."
        />
        <meta
          name="keywords"
          content="Annadhanam seva Coimbatore"
        />
        <link rel="canonical" href="https://ktmc.org.in/donate-annadan-mahadan" />
      </Helmet>

      <Header />
      <>
        {/* bannersection */}
        <div className="banner-containers">
          <div className='position-absolute bottom-0 end-0  text-white banner-wrapper' >
            <div className="d-flex flex-column align-items-center banner-section" >
              <div className="bannerline  mb-3 contact-animated"></div>
              <h1 className="mb-3 contact-animated">Donate</h1>
              <div className="bannerline w-50 mb-3 contact-animated"></div>
            </div>
          </div>
          <div className="position-absolute bottom-1 start-0 text-white p-md-4 pb-4 ps-3  d-flex">
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
                Annadan Mahadan
              </span>
            </h5>
          </div>
        </div>
        {/* annadan para sec */}
        <section className="container py-5 animated-part">
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-10 col-lg-8 text-center animated-part">
              <h3>Annadan Mahadan</h3>
              <h2 className="mb-4">The Great Feast of Food</h2>
              <p className="fw-bold fs-6 fade-in ">
                Annadan Mahadan refers to food as the highest form of donation. <br></br>
                It is a truly compassionate act. Food nourishes the body and the soul. <br></br>
                The blessings associated with this pious act are enormous.<br></br>
                It prevents starvation among people. This old wisdom <br></br>
                lives in our efforts. We work to sustain every life
              </p>
            </div>
          </div>

          {/* <div className='d-flex flex-column justify-content-center'>
            <div className=" donaterow row row-cols-12 m-auto g-3 d-flex flex-column justify-content-center">
              <div className="col-12 animated-part">
                <div className="p-3 border border-dark rounded-3 d-flex align-items-center justify-content-center h-100">
                  Annadan Mahadan
                </div>
              </div>
            </div>
          </div> */}

          <div className='row pt-0'>
            <div className='col-12 d-flex justify-content-center'>
              <p className="fs-6 text-center fade-in">
                With your support, we can provide hot, comforting meals to those in need. Every donation helps us feed more individuals. <br/>We ensure your generosity reaches the deserving. Be a part of this noble initiative.
              </p>
            </div>
          </div>
        </section>

        {/* formcontainer */}
        <section className='py-md-3 animated-part'>
          <div className="m-auto container">
            <div className="yellowrap d-flex">
              <div className='col-md-6 d-flex '>
                <div>
                  <h3 className="p-3 fade-in " style={{ fontSize: "18px" }}>
                    “ When you donate, you provide sustenance. Your kindness fills empty plates.
                    It brings smiles and hope. This vital support changes lives. Thank you for your heartfelt generosity."
                  </h3>
                </div>

              </div>
              <div className="text-center  align-content-center col-md-6">
                <h3 className='fw-bolder text-dark fs-1'>Annadan <br></br>
                  Mahadan</h3>
              </div>
            </div>
          </div>
          <div className=' bg-dark container-fluid form-bg'>
            <div className=' row p-5 '>
              <form>
                <div className="row mb-3">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="text-white d-flex flex-column gap-2">
                      <label for="purpose">Purpose</label>

                      <select
                        type="text"
                        id="purpose"
                        placeholder="General help"
                        className="form-select"
                        name="option"
                      >
                        <option value="General help" className="opt">General help</option>
                        <option value="Monthly help" className="opt">Monthly help</option>
                        <option value="Yearly help" className="opt">Yearly help</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="text-white d-flex flex-column gap-2">
                      <label for="qty">Qty</label>
                      <input
                        type="number"
                        id="qty"
                        name="qty"
                        placeholder="Enter Amount"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-white d-flex flex-column gap-2">
                      <label for="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="text-white d-flex flex-column gap-2">
                      <label for="contact">Contact</label>
                      <input
                        type="number"
                        id="contact"
                        name="Contact"
                        placeholder="Your Contact Number"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="text-white d-flex flex-column gap-2">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-white d-flex flex-column gap-2">
                      <label for="pancard">Pancard (Optional)</label>
                      <input
                        type="text"
                        id="pancard"
                        name="Pancard"
                        placeholder="Your Pancard"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <h5 className="text-white m-0">Amount = INR2000</h5>
                  </div>
                  <div className="col-md-6 d-flex justify-content-md-end justify-content-center">
                    <button type="submit" className="btn btn-warning">
                      Donate Food <i className="fas fa-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* donate today */}
        <div className='container-fluid animated-part'>
          <div className='row d-flex justify-content-center gap-0'>
            <div className='col-12 col-md-6 col-lg-4 d-flex  justify-content-md-center  '>
              <img src="/assets/annadan/leftimg.png" alt="donatetoday.img" className='w-100 ' style={{height:"800px"}} />
            </div>
            <div className='col-12 col-md-6 col-lg-6  d-flex flex-column justify-content-center fade-in'>
              <div>
                <h3 className='fw-bold text-start ms-0 ms-md-5'>Compassion On A Plate</h3>
              </div>

              <div className='p-2 p-md-5'>
                <p className='text-start fs-p'>
                 Annadan Mahadan means the greatest gift is food. It is a very old and powerful belief. Giving food helps both body and soul. This act brings many blessings. It ensures no one sleeps hungry. Our work follows this ancient wisdom. We try to feed every life.
                </p><br/>

                <p className='text-start fs-p'>
                 Food is a basic human need. Yet, many people suffer daily. Hunger is a silent crisis. Malnutrition weakens countless lives. Poverty deepens this struggle. It is a harsh reality in many regions. Some have no work. They cannot find a single meal. Many go to bed on an empty stomach. Our organization works tirelessly. We aim to feed the hungry. We strive to help everyone.
                </p><br/>

                <p className='text-start fs-p'>
                 We are deeply committed to providing wholesome meals. We ensure food reaches those who need it most. This includes vulnerable individuals. It includes families facing immense hardship. Our efforts are continuous, as we actively seek communities in great need. We offer steady food supplies. We offer steady food supplies. This ensures no one endures hunger. Our goal is to bring comfort and proper nourishment.
                </p><br/>

                <p className='text-start fs-p'>
                  We are a non-profit organization. We rely on your compassionate support. Your generosity keeps our vital program running. Every donation truly helps. It reaches countless people in need. This is a noble way to uplift society. Each contribution, big or small, creates a real difference. It moves us closer to a world free from hunger. Your kindness fuels this vital mission.
                </p>

              </div>
            </div>
          </div>
        </div>

        {/* news and events */}

        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
              <h3 className='fw-bold fs-1'>
                Latest News and Events
              </h3>
              <p className='text-center fs-6'>
                Check out our recent activities. Discover how we are making a difference.
              </p>
            </div>
          </div>
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
            className="mySwiper row d-flex justify-content-center p-1 p-lg-3 gap-3 gap-lg-0 "
          >

            <SwiperSlide className='col-12 col-md-5 col-lg-3 p-3 p-md-4 Cardshoveranimate'>
              <div className='d-flex justify-content-between'>
                <div>
                  <p className='fw-bold fs-5'>Published</p>
                </div>
                <div>
                  <p className=''>19 May 2015</p>
                </div>

              </div>
              <div className='w-100 p-0'>
                <img src="/assets/annadan/nv1.jpg" alt="news1.img" className='w-100 ' />
              </div>
              <div className='pt-lg-4 pt-2'>
                <div className='text-start text-muted'>
                  <h3 className='fw-bold'>Village Support</h3>
                  <p>
                    KTMC distributed equipment valued at Rs. 65,000,
                    supporting the community hall in Melkambatti village.
                  </p>
                </div>
                <div className='w-100 '>
                  <button className='btn border border-1 rounded-0 border-dark border-opacity-50 text-dark text-opacity-50 w-50 read-more black-btn'>Read More</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='col-12 col-md-5 col-lg-3 p-3 p-md-4 Cardshoveranimate'>
              <div className='d-flex justify-content-between'>
                <div>
                  <p className='fw-bold fs-5'>Published</p>
                </div>
                <div>
                  <p className=''>19 May 2015</p>
                </div>

              </div>
              <div className='w-100 p-0'>
                <img src="/assets/annadan/nv2.jpg" alt="news1.img" className='w-100 ' />
              </div>
              <div className='pt-lg-4 pt-2'>
                <div className='text-start text-muted'>
                  <h3 className='fw-bold'>Education Aid</h3>
                  <p>
                    We provided essential resources to Kathadimattam School. Sound systems and blackboards were given.

                  </p>
                </div>
                <div className='w-100 '>
                  <button className='btn border border-1 rounded-0 border-dark border-opacity-50 text-dark text-opacity-50 w-50 read-more black-btn'>Read More</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='col-12 col-md-5 col-lg-3 p-3 p-md-4 Cardshoveranimate'>
              <div className='d-flex justify-content-between'>
                <div>
                  <p className='fw-bold fs-5'>Published</p>
                </div>
                <div>
                  <p className=''>19 May 2015</p>
                </div>

              </div>
              <div className='w-100 p-0'>
                <img src="/assets/annadan/nv3.jpg" alt="news1.img" className='w-100 ' />
              </div>
              <div className='pt-lg-4 pt-2'>
                <div className='text-start text-muted'>
                  <h3 className='fw-bold'>Sports Boost</h3>
                  <p>
                    KTMC donated sports equipment worth Rs. 60,000. This directly helped students at Kilur Kokkalada school.

                  </p>
                </div>
                <div className='w-100 '>
                  <button className='btn border border-1 rounded-0 border-dark border-opacity-50 text-dark text-opacity-50 w-50 read-more black-btn'>Read More</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='col-12 col-md-5 col-lg-3 p-3 p-md-4 Cardshoveranimate'>
              <div className='d-flex justify-content-between'>
                <div>
                  <p className='fw-bold fs-5'>Published</p>
                </div>
                <div>
                  <p className=''>19 May 2015</p>
                </div>

              </div>
              <div className='w-100 p-0'>
                <img src="/assets/annadan/nv4.jpg" alt="news1.img" className='w-100 ' />
              </div>
              <div className='pt-lg-4 pt-2'>
                <div className='text-start text-muted'>
                  <h3 className='fw-bold'>Loan Outreach</h3>
                  <p>
                    KTMC provided financial assistance. Loans reached needy individuals. This helped them meet urgent requirements.
                  </p>
                </div>
                <div className='w-100 '>
                  <button className='btn border border-1 rounded-0 border-dark border-opacity-50 text-dark text-opacity-50 w-50 read-more black-btn'>Read More</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='col-12 col-md-5 col-lg-3 p-3 p-md-4 Cardshoveranimate'>
              <div className='d-flex justify-content-between'>
                <div>
                  <p className='fw-bold fs-5'>Published</p>
                </div>
                <div>
                  <p className=''>19 May 2015</p>
                </div>

              </div>
              <div className='w-100 p-0'>
                <img src="/assets/annadan/nv4.jpg" alt="news1.img" className='w-100 ' />
              </div>
              <div className='pt-lg-4 pt-2'>
                <div className='text-start text-muted'>
                  <h3 className='fw-bold'>Community Programs</h3>
                  <p>
                    We organised local awareness events. These are connected with community members. They promoted well-being and support.
                  </p>
                </div>
                <div className='w-100 '>
                  <button className='btn border border-1 rounded-0 border-dark border-opacity-50 text-dark text-opacity-50 w-50 read-more black-btn'>Read More</button>
                </div>
              </div>
            </SwiperSlide>
            {/* <div className='col-12 col-md-5 col-lg-3 p-3 p-md-4 Cardshoveranimate'>
              <div className='d-flex justify-content-between'>
                <div>
                  <p className='fw-bold fs-5'>Published</p>
                </div>
                <div>
                  <p className=''>19 May 2015</p>
                </div>

              </div>
              <div className='w-100 p-0'>
                <img src="/assets/annadan/nv4.jpg" alt="news1.img" className='w-100 ' />
              </div>
              <div className='pt-lg-4 pt-2'>
                <div className='text-start text-muted'>
                  <h3 className='fw-bold'>Event Name</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fuga ea reprehenderit.

                  </p>
                </div>
                <div className='w-100 '>
                  <button className='btn border border-1 rounded-0 border-dark border-opacity-50 text-dark text-opacity-50 w-50 read-more black-btn'>Read More</button>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-5 col-lg-3 p-3 p-md-4 Cardshoveranimate'>
              <div className='d-flex justify-content-between'>
                <div>
                  <p className='fw-bold fs-5'>Published</p>
                </div>
                <div>
                  <p className=''>19 May 2015</p>
                </div>

              </div>
              <div className='w-100 p-0'>
                <img src="/assets/annadan/nv4.jpg" alt="news1.img" className='w-100 ' />
              </div>
              <div className='pt-lg-4 pt-2'>
                <div className='text-start text-muted'>
                  <h3 className='fw-bold'>Event Name</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fuga ea reprehenderit.

                  </p>
                </div>
                <div className='w-100 '>
                  <button className='btn border border-1 rounded-0 border-dark border-opacity-50 text-dark text-opacity-50 w-50 read-more black-btn'>Read More</button>
                </div>
              </div>
            </div> */}

          </Swiper>
        </div>

        {/* footer */}
        <section className="footerwrap pt-5 pt-md-0" id="about">
          <div className="py-5">
            <div className="container  p-0 m-auto">
              <div className="yellowrap d-flex">
                <div className='col-md-6 col-lg-9 d-flex '>
                  <div>
                    <h3 className="p-3 fs-5">
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
                    <h5 className="text-center"> Follow us</h5>
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
         background-image:url("/assets/annadan/annadan banner.jpg");
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

@media (max-width:430px){
  .banner-wrapper {
    justify-content: center!important;
    align-items: center;
    bottom:;
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

@media (width: 330px) {
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
    margin-left:30px;
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

            .banner-sec{
            margin-bottom:60px!important;
            }

            .breadcramp-sec{
              font-size:1rem !important;
              margin-left:5px
            }
          }

           @media (width:375px){
            
            // .breadcramp-sec{
            //   margin-left:-35px!important;
            // }

            // .banner-sec{
            // margin-right:50px!important;
            // }
           
           }

          .lineone{
                   width:3px!important; 
                   height:120px!important; 
                   background-color:#000!important; 
                }

                .form-bg{
                  background-image:url("/assets/empower/empowerment current event.jpg")!important;
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
                font-size:20px!important;
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
             font-size:16px!important;
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

      `}
        </style>
      </>
    </div>

  )




};

export default Annadanmahadan;