import {  useState } from "react";
import Header from "../../Components/Header";
import OpenGeneralForm from "../../Components/OpenGeneralForm";
import GeneralDonataionForm from '../../Components/GeneralDonataionForm';
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

const Donationpolicy = () => {
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
      < Header />
      <>

        {/* bannersection */}
        <div className="banner-containers">
          <div className='position-absolute bottom-0 end-0  text-white banner-wrapper' >
            <div className="d-flex flex-column align-items-center banner-section" >
              <div className="bannerline  mb-3 contact-animated"></div>
              <h1 className="mb-3 contact-animated">Policy</h1>
              <div className="bannerline w-50 mb-3 contact-animated"></div>
            </div>
          </div>
          <div className="position-absolute bottom-1 start-0 text-black p-4 d-flex">
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
                Donation Policy
              </span>
            </h5>
          </div>
        </div>

        {/* Online Donation Policy */}
        <div className="container py-5">
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center fade-in animated-part contact-animated">
              <div>
                <h3 className="fw-bold"> Online Donation Policy</h3>
                <p className="text-start fs-p  contact-animated">
                 KTMC receives donations online. We use secure payment methods. You can pay via bank transfer.
                  UPI is also available. All transactions are safe. We provide an 80G receipt. Your donation supports
                   our programs. We do not share your details. Refunds are not available. Contact us for help. Our platform 
                   ensures transparency and trust. Donate with confidence.
                </p>
              </div>

              <div className="py-2 fade-in animated-part">
                <h5 className="fw-bold">Donor Information Privacy policy
                  at our online donation charity platform
                </h5>
                <p className="text-start pt-2 fs-p contact-animated">
                  KTMC values your privacy. We collect your name and email.
                   We collect payment details too. This helps process your donation. 
                   We do not sell your data. We use secure systems. Your information is protected.
                    We follow Indian laws. You can ask for your data. We will share it. Contact us for concerns. 
                    Your trust is very important to us.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Privacy Policy includs */}
        <div className="yellowrap">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12 col-md-6 col-lg-2 p-2 p-md-5 d-flex justify-content-center align-items-center ">
                <img src="/assets/donate policy/policy icon.png" alt="policy-icon.img" />
              </div>
              <div className="col-12 col-lg-10 col-md-6 fade-in animated-part">
                <h3 className="fw-bold text-center fs-2 me-0 me-md-5"> Our Privacy Policy Includs</h3>
                <p className="text-start fs-p fade-in animated-part">
                 KTMC protects your data. We collect your name. We collect your email.
                  We also collect payment details. This helps us process donations. We do not share your information.
                   Your data stays safe. We follow Indian laws. You can ask about your data. We will respond quickly.
                    Your trust is important. We keep everything secure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Receipt Policy */}
        <div className="container pt-4">
          <div className="row">
            <div className="col-12 col-md-12 d-flex flex-column align-items-center mt-0">
              <div className="text-start fade-in animated-part">
                <h3 className="fw-bold">Donation Receipt Policy</h3>
                <p className="fs-p fade-in animated-part">
                 KTMC issues donation receipts. <b>We send an 80G receipt</b>. 
                 It comes after your donation. You get it via email. Or we mail it. 
                 Use it for tax filing. Keep the receipt safe. It helps claim tax benefits. 
                 Contact us if you lose it. We can resend it. Receipts are for online donations.
                  Cash donations need different proof.
                </p>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center py-lg-4 fade-in animated-part">
                <button class="btn refund-btn text-dark px-5 py-2">
                  Refund and cancellation policy for donation
                </button>
              </div>

              <div className="text-start pt-lg-4 pt-3">
                <p className="fs-p fade-in animated-part">
                  KTMC does not offer refunds. <b>Donations are final.</b> We use funds for programs. 
                  You cannot cancel a donation. Once paid, it supports our cause. We ensure transparency. 
                  Your money helps communities. It funds education and healthcare. Check details before donating.
                   Contact us for issues. We will assist you. Your support matters to us.
                </p>
              </div>
            </div>
          </div>

          <div className="row d-flex flex-column align-items-center pt-4 mb-0 fade-in animated-part">
            <div className="col-12 col-md-12 col-lg-12 d-flex flex-column align-items-center text-start">
              <div style={{ }}>
                <h4 className="border border-end-0 border-top-0 border-bottom-0 border-dark p-3" style={{ marginBottom: "-0px" }}> <b>Case 1:</b> Double Transaction or Wrong Amount Entered.</h4>
                <ul className="d-flex flex-column gap-3 pt-3 border border-end-0 border-top-0 border-dark p-5 contact-animated">
                  <li className="fs-6">
                   Contact KTMC immediately (24 hrs).
                  </li>
                  <li className="fs-6">
                   Share your transaction details.
                  </li>
                  <li className="fs-6">
                    We will verify the payment.
                  </li>
                  <li className="fs-6">
                 Expect resolution within 5-7 business days.
                  </li>
                  <li className="fs-6">
                    Wrong amounts cannot be refunded.
                  </li>
                </ul>
              </div>

              <div className="mb-0 fade-in animated-part d-flex flex-column align-items-start">
                <h4 className="border border-start-0 border-top-0 border-bottom-0 border-end-0 border-dark p-3 "> <b>Case 2: </b>Payment Failure During Donation</h4>
                <ul className="d-flex flex-column gap-3 pt-3 p-5 contact-animated">
                  <li className="fs-6">
                    Check your internet connection.
                  </li>
                  <li className="fs-6">
                   Try the payment again.
                  </li>
                  <li className="fs-6">
                    Use a different payment method.
                  </li>
                  <li className="fs-6">
                   Contact KTMC for support.
                  </li>
                  <li className="fs-6">
                   We will assist you quickly.
                  </li>
                </ul>
              </div>
            </div>
          </div>




        </div>

        {/* We Help You sec */}
        <div className="container fade-in animated-part">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <h3 className="text-center">We Help You</h3>
            </div>
          </div>

          <div className="w-75 m-auto faq-sec">
            <div className="accordion" id="faqAccordion">

              <div className="accordion-item border-0 mb-3 shadow-sm">
                <h2 className="accordion-header p-3">
                  <button
                    className="accordion-button collapsed bg-white border-0 py-3 px-4 fw-semibold shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                  >
                    <span
                      className="border border-dark me-3 d-flex align-items-center justify-content-center text-dark fw-bold"
                      style={{
                        width: '35px',
                        height: '35px',
                        fontSize: '16px',
                        background: 'transparent',
                        minWidth: '35px',
                        borderRadius: "5px"
                      }}
                    >
                      1
                    </span>
                    How can I donate to KTMC online?
                  </button>
                </h2>
                <div id="faq1" className="accordion-collapse collapse p-3" data-bs-parent="#faqAccordion">
                  <div className="accordion-body px-4 py-3 text-muted">
                   You can donate securely online. We accept bank transfers and UPI. All methods are safe.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 mb-3 shadow-sm">
                <h2 className="accordion-header p-3">
                  <button className="accordion-button collapsed bg-white border-0 py-3 px-4 fw-semibold shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                    <span
                      className="border border-dark me-3 d-flex align-items-center justify-content-center text-dark fw-bold"
                      style={{
                        width: '35px',
                        height: '35px',
                        fontSize: '16px',
                        background: 'transparent',
                        minWidth: '35px',
                        borderRadius: "5px"
                      }}
                    >
                      2
                    </span>
                    Is my personal information kept private?
                  </button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse p-3" data-bs-parent="#faqAccordion">
                  <div className="accordion-body px-4 py-3 text-muted">
                    Yes, your privacy is important. We only collect details for donations. We do not share or sell your data.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 mb-3 shadow-sm">
                <h2 className="accordion-header p-3">
                  <button className="accordion-button collapsed bg-white border-0 py-3 px-4 fw-semibold shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                    <span
                      className="border border-dark me-3 d-flex align-items-center justify-content-center text-dark fw-bold"
                      style={{
                        width: '35px',
                        height: '35px',
                        fontSize: '16px',
                        background: 'transparent',
                        minWidth: '35px',
                        borderRadius: "5px"
                      }}
                    >
                      3
                    </span>
                   Will I receive a receipt for my donation?
                  </button>
                </h2>
                <div id="faq3" className="accordion-collapse collapse p-3" data-bs-parent="#faqAccordion">
                  <div className="accordion-body px-4 py-3 text-muted">
                   Yes, we issue an 80G receipt. It will be sent after your donation. Use it for tax filing.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 mb-3 shadow-sm">
                <h2 className="accordion-header p-3">
                  <button className="accordion-button collapsed bg-white border-0 py-3 px-4 fw-semibold shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                    <span
                      className="border border-dark me-3 d-flex align-items-center justify-content-center text-dark fw-bold"
                      style={{
                        width: '35px',
                        height: '35px',
                        fontSize: '16px',
                        background: 'transparent',
                        minWidth: '35px',
                        borderRadius: "5px"
                      }}
                    >
                      4
                    </span>
                    Can I get a refund if I change my mind?
                  </button>
                </h2>
                <div id="faq4" className="accordion-collapse collapse p-3" data-bs-parent="#faqAccordion">
                  <div className="accordion-body px-4 py-3 text-muted">
                   Generally, donations are non-refundable. Funds support our programs directly. Please consider your donation carefully.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 mb-3 shadow-sm">
                <h2 className="accordion-header p-3">
                  <button className="accordion-button collapsed bg-white border-0 py-3 px-4 fw-semibold shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                    <span
                      className="border border-dark me-3 d-flex align-items-center justify-content-center text-dark fw-bold"
                      style={{
                        width: '35px',
                        height: '35px',
                        fontSize: '16px',
                        background: 'transparent',
                        minWidth: '35px',
                        borderRadius: "5px"
                      }}
                    >
                      5
                    </span>
                  What if I make a double transaction?
                  </button>
                </h2>
                <div id="faq5" className="accordion-collapse collapse p-3" data-bs-parent="#faqAccordion">
                  <div className="accordion-body px-4 py-3 text-muted">
                    Contact us immediately within 24 hours. Share your transaction details. We will verify and adjust double payments.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 mb-3 shadow-sm">
                <h2 className="accordion-header p-3">
                  <button className="accordion-button collapsed bg-white border-0 py-3 px-4 fw-semibold shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
                    <span
                      className="border border-dark me-3 d-flex align-items-center justify-content-center text-dark fw-bold"
                      style={{
                        width: '35px',
                        height: '35px',
                        fontSize: '16px',
                        background: 'transparent',
                        minWidth: '35px',
                        borderRadius: "5px"
                      }}
                    >
                      6
                    </span>
                   What if I enter the wrong amount by mistake?
                  </button>
                </h2>
                <div id="faq6" className="accordion-collapse collapse p-3" data-bs-parent="#faqAccordion">
                  <div className="accordion-body px-4 py-3 text-muted">
                    Wrong amounts cannot be refunded. Please double-check amounts before confirming your donation.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 mb-3 shadow-sm">
                <h2 className="accordion-header p-3">
                  <button className="accordion-button collapsed bg-white border-0 py-3 px-4 fw-semibold shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faq7">
                    <span
                      className="border border-dark me-3 d-flex align-items-center justify-content-center  fw-bold"
                      style={{
                        width: '35px',
                        height: '35px',
                        fontSize: '16px',
                        background: 'transparent',
                        minWidth: '35px',
                        borderRadius: "5px"
                      }}
                    >
                      7
                    </span>
                    What happens if my payment fails?
                  </button>
                </h2>
                <div id="faq7" className="accordion-collapse collapse p-3" data-bs-parent="#faqAccordion">
                  <div className="accordion-body px-4 py-3 text-muted">
                  Check your internet connection first. Try the payment again. You can also use a different payment method. Contact us for support if needed.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 mb-3 shadow-sm">
                <h2 className="accordion-header p-3">
                  <button className="accordion-button collapsed bg-white border-0 py-3 px-4 fw-semibold shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faq8">
                    <span
                      className="border border-dark me-3 d-flex align-items-center justify-content-center text-dark fw-bold"
                      style={{
                        width: '35px',
                        height: '35px',
                        fontSize: '16px',
                        background: 'transparent',
                        minWidth: '35px',
                        borderRadius: "5px"
                      }}
                    >
                      8
                    </span>
                    How does my donation help KTMC's mission?
                  </button>
                </h2>
                <div id="faq8" className="accordion-collapse collapse p-3" data-bs-parent="#faqAccordion">
                  <div className="accordion-body px-4 py-3 text-muted">
                   Your donation supports our programs. It funds education, healthcare, and community aid. Your money helps vulnerable communities directly.
                  </div>
                </div>
              </div>
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
         background-image:url("/assets/donate policy/policy banner.jpg");
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

 button:hover {
  background-color: #ffffff;
  color: #000000;
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
    margin-left:35px;
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
    margin-left:25px;
    font-size:14px;


  }
}
           .refund-btn{
        font-size:20px;
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
            // margin-right:15px!important;
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

              refund-btn:hover {
  border-color: transparent; /* keeps border visually hidden */
}

.refund-btn:hover::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 999px;
  padding: 2px;
  background: linear-gradient(to right, #d4af37 50%, black 50%);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  z-index: -1;
  pointer-events: none;
}


                .refund-btn {
  position: relative;
  background-color: white;
  border: none;
  border-radius: 999px;
  font-weight: 500;
  z-index: 1;
}

.refund-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 999px;
  padding: 2px;
  background: linear-gradient(to right, black 50%, #d4af37 50%);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  z-index: -1;
}

      @media (max-width: 768px) {
   .banner-containers {
      height: 50vh;
    }
      .faq-sec{
      width:100%!important;
      }
  
      .refund-btn{
        font-size:14px;
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

export default Donationpolicy;