import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Components/Header'
import "../../assets/main.css"
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
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

// import Swiper and modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Helmet } from 'react-helmet-async'; // ✅ Add this line





const Donate = () => {

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

  // testimonial function
  const testimonials = [
    {
      image: "/assets/testimonial/testimoanial1.png",
      name: "Jane Doe",
      text: "The support was life-changing",
    },
    {
      image: "/assets/testimonial/testimoanial2.png",
      name: "Elana ",
      text: "KTMC gave me a second chance",
    },
    {
      image: "/assets/testimonial/testimoanial3.png",
      name: "David Lee",
      text: "I am forever grateful",
    },
    {
      image: "/assets/testimonial/testimoanial4.png",
      name: "Sarah Williams",
      text: "They truly care",
    },
    {
      image: "/assets/testimonial/testimoanial3.png",
      name: "Michael Brown",
      text: "KTMC made a difference",
    },
  ];


  const navigate = useNavigate();

  return (
    <div>

      <Helmet>
        <title>Donate to Non-Profit Coimbatore – Support KTMC</title>
        <meta
          name="description"
          content=": Donate to non-profit Coimbatore–based KTMC to support food drives, education programs, and community empowerment. Make a difference with your contribution today."
        />
        <meta
          name="keywords"
          content="Donate to non-profit Coimbatore"
        />
        <link rel="canonical" href="https://ktmc.org.in/donate" />
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
              <span className="breadcrumb-part animated-part delay-2">
                Donate
              </span>
            </h5>
          </div>
        </div>

        {/* how to donate */}
        <section className="container py-5 fade-in animated-part">
          <div className="row justify-content-center mb-4 ">
            <div className="col-12 col-md-10 col-lg-8 text-center fade-in animated-part">
              <h3 className="mb-4"> Your contribution can feed a family and uplift a spirit</h3>
              <h2 className="mb-4">DONATIONS FOR FOOD</h2>
              <p className="fw-bold fs-6 fade-in fade-in animated-part text-justify">
                At KTMC, we appreciate all the food donations because they contribute daily to the support of the countless individuals and families, helping to feed the hungry. We also extend our warm welcome to volunteers to become a part of our actions, your precious time and efforts. Partner with us to sustain this vital community care and make a continuous, positive difference in the lives of those in need.<br></br>
              </p>
            </div>
          </div>

          <div className='d-flex flex-column justify-content-center'>
            <div className="donaterow row row-cols-1 g-3 m-auto">
              <div className="col">
                <div
                  className="p-3 border border-dark rounded-3 text-center bg-light hover-shadow-donate"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate('/donate-annadan-mahadan')}
                >
                  Annadan Mahadan
                </div>
              </div>

              <div className="col">
                <div
                  className="p-3 border border-dark rounded-3 text-center bg-light hover-shadow-donate"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate('/donate')}
                >
                  Donate Via Paytm
                </div>
              </div>

              <div className="col">
                <div
                  className="p-3 border border-dark rounded-3 text-center bg-light hover-shadow-donate"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate('/donate-world-humanity')}
                >
                  Word of Humanity
                </div>
              </div>

              <div className="col">
                <div
                  className="p-3 border border-dark rounded-3 text-center bg-light hover-shadow-donate"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate('/donate-donation-policy')}
                >
                  Donation Policy
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* formcontainer */}
        <section className='py-5 fade-in animated-part'>
          <div className=" p-0 m-auto container">
            <div className="yellowrap d-flex">
              <div className='col-md-6 d-flex '>
                <div>
                  <h3 className="p-3 fade-in " style={{ fontSize: "18px" }}>
                    "The best way to find yourself is to lose yourself in feeding others."
                  </h3>
                </div>

              </div>
              <div className="text-center  align-content-center col-md-6">
                <h3 className='fw-bolder text-dark fs-1'>Mahatma Gandhi</h3>
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

        {/* Building A Better World */}
        <section className='py-3 container fade-in animated-part'>
          <div className='text-center mb-3 mb-md-1'>
            <h2 className='fw-bold'>The joy of giving</h2>
          </div>

          <div className='text-center fs-p fade-in animated-part'>
            <p className="fade-in animated-part text-justify">
              We believe in the power of giving back. This is a value that is brought out on our food page.
              Our goal is to provide people in need with tasty food. This initiative helps our local society.
              It aids in solving food insecurity. We partner with local charities. These organizations distribute food effectively.
              Our team volunteers their time. We prepare wholesome, nutritious meals. This initiative reduces food waste. It also promotes sustainability.
              We encourage everyone to join us. Small acts of kindness make a big difference. Together, we build a stronger community.
              This effort brings true joy to all.
            </p>
          </div>
          {/* <div className='text-center fs-p fade-in animated-part'>
            <p className="fade-in animated-part">
              Every meal builds a better future. <br />Our efforts bring warmth and light. Let’s join hands for kindness. A brighter tomorrow is near.
            </p>
          </div> */}
        </section>

        {/* dont waste food */}
        <section className='py-0 container-fluid fade-in animated-part'>
          <div className='row d-flex justify-content-center align-items-center' style={{ backgroundColor: "#EEEEEE",  }}>
            <div className='col-12 col-lg-7 col-sm-6 col-md-3 p-3 text-center'>
              <img
                src="/assets/donate/poor-boy.png"
                alt="Fundraise"
                className="img-fluid rounded" style={{width:'650px', height:"400px"}}
              />
            </div>
            <div className='col-12 col-lg-5 col-md-6 px-2 px-md-3 py-2 '>
              <h3 className='text-start fw-semibold mb-4'>Share a Meal</h3>
              <p className='text-start lh-lg fs-p fade-in animated-part '>
                Every bite matters.
                Food is precious.<br />
              </p>
              <p className='text-start lh-lg fs-p fade-in animated-part '>
                Many go hungry.
                When we waste food, we miss chances.
              </p>
              <p className='text-start lh-lg fs-p fade-in animated-part '>
                Let’s be thoughtful.<br />
              </p>
               <p className='text-start lh-lg fs-p fade-in animated-part '>
                Let’s share our meals.<br />
              </p>
               <p className='text-start lh-lg fs-p fade-in animated-part '>
                Together, we can change lives.<br />
              </p>
            </div>
          </div>
        </section >

        {/* testimonial */}
        {/* <section className='py-5'>
          <div className='text-center mb-4 mb-md-5'>
            <h2 className='fw-bold'>The Volunteer Family
            </h2>
            <p className='text-center fs-6'> Meet our dedicated volunteers. They power our mission forward. We are grateful for their service. Join our volunteer team.</p>
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
        </section> */}
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
                <div className="banner_cta_wrap col-md-3">
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
                    <p className="text-center">  Copyright © {new Date().getFullYear()}  Kovai Tech Member Chamber.<br /> All rights reserved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* styles */}
        <style>
          {`
           
       .banner-containers{
         background-image:url("/assets/food/banner bg.jpg");
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
    margin-left:110px;
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
    margin-left:85px;
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

     .form-bg{
                  background-image:url("/assets/empower/empowerment current event.jpg")!important;
                  background-position:cover !important;
                  background-repeat:no-repeat!important;
                }
            
          @media (max-width: 768px) {
            .banner-containers {
      height: 50vh;
    }
              
            .donaterow{
            width:100%!important;
            }

            // .banner-sec{
            // margin-bottom:60px!important;
            // margin-right:10px!important;
            // }

            // .breadcramp-sec{
            //   font-size:1rem !important;
            //   margin-left:85px!important;
            // }
          }

          .lineone{
                   width:3px!important; 
                   height:120px!important; 
                   background-color:#000!important; 
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
     
   .bannerline{
                 width: 0.05rem !important;
                   height:60px!important; 
                   background-color:#fff!important; 
                }

                .fs-p{
             font-size:14px!important;
          }

          .fs-h{
             font-size:16px;
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
}

export default Donate
