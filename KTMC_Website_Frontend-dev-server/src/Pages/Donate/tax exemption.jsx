import { useState } from "react";
import Header from "../../Components/Header";
import OpenGeneralForm from "../../Components/OpenGeneralForm";
import GeneralDonataionForm from "../../Components/GeneralDonataionForm";
import { Helmet } from 'react-helmet-async'; // ✅ Add this line
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const Taxexemption = () => {
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
      <Helmet>
        <title>Make a Tax-Free Impact – Donate with Exemption via KTMC</title>
        <meta
          name="description"
          content="Donate to KTMC and get tax exemption under Section 80G. Your contribution supports food, education & welfare—while offering income tax savings."
        />
        <meta
          name="keywords"
          content="Donate-tax-exemption"
        />
        <link rel="canonical" href="https://ktmc.org.in/donate-tax-exemption" />
      </Helmet>
      <Header />
      <>
        {/* bannersection */}
        <div className="banner-containers">
          <div className="position-absolute bottom-0 end-0  text-white banner-wrapper">
            <div className="d-flex flex-column align-items-center banner-section">
              <div className="bannerline  mb-3 contact-animated"></div>
              <h1 className="mb-3 contact-animated">Tax</h1>
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
                onClick={() => (window.location.href = "/donate")}
                style={{ cursor: "pointer" }}
              >
                Donate
              </span>
              <span className="me-1 animated-part delay-1">/</span>
              <span className="breadcrumb-part animated-part delay-2">
                Tax Exemption
              </span>
            </h5>
          </div>
        </div>
        {/* tax exemption sec */}
        <div className=" container py-lg-5 mt-lg-3 py-3 mt-3">
          {/* Tax Exemption on Donations Under Sections 80g */}
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12">
              <h3 className="text-center fw-bold fs-2 contact-animated">
                {" "}
                Tax Exemption On<br></br>
                Donations Under Sections 80g
              </h3>
              <p className="text-start p-2 p-md-4 fs-p contact-animated">
                KTMC uplifts communities. We focus on education. We also focus
                on healthcare. We empower those in need. We provide essential
                resources. Your donation helps us. It qualifies for tax
                benefits. Section 80G allows this. You can reduce your taxes.
                Every donation makes a difference. Join our mission. Help create
                a brighter future.
              </p>
            </div>
          </div>

          {/* What is Tax Exemption ? */}
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12">
              <h3 className="text-start fw-bold ps-lg-4 contact-animated">
                What is tax exemption?
              </h3>
              <p className="text-start px-2 px-md-4 fs-p contact-animated">
                Tax exemption lowers your taxes. It works for donations. You
                donate to KTMC. You get a tax benefit. This reduces your taxable
                income. You pay less tax. The government supports this. It
                encourages charitable giving. Your donation helps our programs.
                It also gives you financial relief.
              </p>
            </div>
          </div>

          {/* Section 80g of the Income Tax Act */}
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12">
              <h3 className="text-start fw-bold ps-lg-4 contact-animated">
                {" "}
                Section 80G of the Income Tax Act
              </h3>
              <p className="text-start px-2 px-md-4 fs-p contact-animated">
                <span className="fw-bold text-danger">Section 80G</span> is a
                tax law. It offers tax deductions. Donations to KTMC qualify. We
                are an approved NGO. You get a 50% exemption.
              </p>

              <p className="text-start px-2 px-md-4 fs-p contact-animated">
                There are some conditions. Follow the donation guidelines. Use
                approved payment methods. This encourages charitable giving. It
                provides financial incentives.
              </p>
            </div>
          </div>

          {/* Tax Exemption on a Donation Made to a NGO */}
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12">
              <h3 className="text-start fw-bold ps-lg-4 contact-animated">
                {" "}
                Tax Exemption on a Donation Made to KTMC
              </h3>
              <p className="text-start px-2 px-md-4 fs-p contact-animated">
                Donate to KTMC. Follow the tax rules.{" "}
                <span className="fw-bold text-warning">
                  KTMC is registered under 12A.
                </span>{" "}
                We are approved for tax benefits. You get an 80G receipt. Use it
                for tax filing. Cash donations above ₹2000 are not allowed. Use
                online methods for larger amounts. Bank transfer and UPI work.
                You may need our 80G certificate.
              </p>
            </div>
          </div>
        </div>

        {/* gradientsec */}
        <div
          className="contact-animated"
          style={{
            background:
              "linear-gradient(135deg,rgb(255, 255, 255) 0%,rgb(250, 218, 123) 30%, #FFC107 70%, #FFB300 100%)",
          }}
        >
          <div className="container">
            <div className="row m-0">
              <div
                className="col-md-2 col-12 d-flex align-items-center justify-content-center"
                style={{
                  background:
                    "linear-gradient(to bottom, rgb(253, 228, 153),  #FFC107)",
                  minHeight: "350px",
                }}
              >
                <div className="text-center border border-light p-md-2 p-lg-5 p-4">
                  <p className="mb-2 fw-semibold fs-5">
                    Eligibility for <br></br> Claiming
                  </p>
                  <h1 className="fw-bold display-6">80G</h1>
                </div>
              </div>

              <div className="col-md-10 col-12 p-4 d-flex flex-column justify-content-center contact-animated">
                <p className="mb-4">
                  To claim a Section 80G deduction, you need to submit documents
                  to support your claim:
                </p>

                <p>
                  <strong>Step 1:</strong> Donate to KTMC. We are a registered
                  NGO. Your donation must qualify.
                </p>
                <p>
                  <strong>Step 2:</strong> <em> Get an 80G receipt.</em> : We
                  provide this after your donation. Keep it safe.
                </p>
                <p>
                  <strong>Step 3:</strong> Use online payment methods. Cash
                  donations above ₹2000 are not allowed. Follow the rules.
                </p>
                <p>
                  <strong>Step 4:</strong> <em>File your taxes.</em> Submit the
                  80G receipt. Claim your tax deduction easily.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Required for Claiming a Section 80G Deduction */}
        <div className="container py-lg-5 mt-lg-3 p-md-4 p-lg-0 py-3 mt-3 p-4">
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12">
              <h3 className="text-start fw-bold ps-lg-4 contact-animated">
                Documentation Required for Claiming a Section 80G Deduction
              </h3>

              <p className="text-start px-3 px-md-4 fs-p contact-animated">
                If you wish to claim a Section 80G deduction, you will need
                documents. These support your claim.
              </p>
              <div className="mx-4 px-3">
                <ul className="px-4 fs-p contact-animated">
                  <li className="mb-3">
                    <strong>Receipts:</strong> A stamped receipt is mandatory. It
                    must be from the charity. The receipt should list your name
                    and address. It needs the trust's PAN and address. The
                    donation amount must also be clear.
                  </li>
                  <li className="mb-3">
                    <strong>Form 58:</strong> This is an important document. It is
                    for donations that get a 100% deduction.
                  </li>
                  <li className="mb-3">
                    <strong>
                      Every eligible trust has a registration number.{" "}
                    </strong>{" "}
                    The Income Tax Department provides this. Ensure this number is
                    on your donation receipt. The number must be valid on the
                    donation date.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Faq  */}
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <h3 className="text-center fw-bold">FAQ</h3>
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
                        width: "35px",
                        height: "35px",
                        fontSize: "16px",
                        background: "transparent",
                        minWidth: "35px",
                        borderRadius: "5px",
                      }}
                    >
                      1
                    </span>
                    What qualifies for a tax deduction under Section 80G?
                  </button>
                </h2>
                <div
                  id="faq1"
                  className="accordion-collapse p-3 collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body px-4 py-3 text-muted">
                    Donations to KTMC qualify. We are 80G registered. Your
                    donation must follow rules. Use approved payment methods.
                    Cash donations above ₹2000 do not qualify.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 mb-3 shadow-sm">
                <h2 className="accordion-header p-3">
                  <button
                    className="accordion-button collapsed bg-white border-0 py-3 px-4 fw-semibold shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                  >
                    <span
                      className="border border-dark me-3 d-flex align-items-center justify-content-center text-dark fw-bold"
                      style={{
                        width: "35px",
                        height: "35px",
                        fontSize: "16px",
                        background: "transparent",
                        minWidth: "35px",
                        borderRadius: "5px",
                      }}
                    >
                      2
                    </span>
                    How do I get the 80G receipt from KTMC?
                  </button>
                </h2>
                <div
                  id="faq2"
                  className="accordion-collapse p-3 collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body px-4 py-3 text-muted">
                    Donate to KTMC. We send the receipt. It comes via email. Or
                    we mail it. Contact us if you don’t get it.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 mb-3 shadow-sm">
                <h2 className="accordion-header p-3">
                  <button
                    className="accordion-button collapsed bg-white border-0 py-3 px-4 fw-semibold shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                  >
                    <span
                      className="border border-dark me-3 d-flex align-items-center justify-content-center text-dark fw-bold"
                      style={{
                        width: "35px",
                        height: "35px",
                        fontSize: "16px",
                        background: "transparent",
                        minWidth: "35px",
                        borderRadius: "5px",
                      }}
                    >
                      3
                    </span>
                    Can I claim a deduction if I donate in cash?
                  </button>
                </h2>
                <div
                  id="faq3"
                  className="accordion-collapse p-3 collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body px-4 py-3 text-muted">
                    Cash donations above ₹2000 are not allowed. Use online
                    methods. Bank transfer works. UPI works too. This ensures
                    your tax deduction.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 mb-3 shadow-sm">
                <h2 className="accordion-header p-3">
                  <button
                    className="accordion-button collapsed bg-white border-0 py-3 px-4 fw-semibold shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq4"
                  >
                    <span
                      className="border border-dark me-3 d-flex align-items-center justify-content-center text-dark fw-bold"
                      style={{
                        width: "35px",
                        height: "35px",
                        fontSize: "16px",
                        background: "transparent",
                        minWidth: "35px",
                        borderRadius: "5px",
                      }}
                    >
                      4
                    </span>
                    Is there a limit to my tax exemption?
                  </button>
                </h2>
                <div
                  id="faq4"
                  className="accordion-collapse p-3 collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body px-4 py-3 text-muted">
                    Yes, there is a limit. You get 50% exemption. It depends on
                    your income. The law sets a cap. Ask your tax advisor.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 mb-3 shadow-sm">
                <h2 className="accordion-header p-3">
                  <button
                    className="accordion-button collapsed bg-white border-0 py-3 px-4 fw-semibold shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq5"
                  >
                    <span
                      className="border border-dark me-3 d-flex align-items-center justify-content-center text-dark fw-bold"
                      style={{
                        width: "35px",
                        height: "35px",
                        fontSize: "16px",
                        background: "transparent",
                        minWidth: "35px",
                        borderRadius: "5px",
                      }}
                    >
                      5
                    </span>
                    How do I verify KTMC’s 80G certificate?
                  </button>
                </h2>
                <div
                  id="faq5"
                  className="accordion-collapse p-3 collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body px-4 py-3 text-muted">
                    KTMC is 80G registered. We share our certificate. Email us
                    to request it. You can also check online. It proves your
                    donation qualifies.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 mb-3 shadow-sm">
                <h2 className="accordion-header p-3">
                  <button
                    className="accordion-button collapsed bg-white border-0 py-3 px-4 fw-semibold shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq6"
                  >
                    <span
                      className="border border-dark me-3 d-flex align-items-center justify-content-center text-dark fw-bold"
                      style={{
                        width: "35px",
                        height: "35px",
                        fontSize: "16px",
                        background: "transparent",
                        minWidth: "35px",
                        borderRadius: "5px",
                      }}
                    >
                      6
                    </span>
                    What if I lose my donation receipt?
                  </button>
                </h2>
                <div
                  id="faq6"
                  className="accordion-collapse p-3 collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body px-4 py-3 text-muted">
                    Contact KTMC. We can resend it. Provide your donation
                    details. We keep records. This helps you claim your tax
                    deduction.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 mb-3 shadow-sm">
                <h2 className="accordion-header p-3">
                  <button
                    className="accordion-button collapsed bg-white border-0 py-3 px-4 fw-semibold shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq7"
                  >
                    <span
                      className="border border-dark me-3 d-flex align-items-center justify-content-center text-dark fw-bold"
                      style={{
                        width: "35px",
                        height: "35px",
                        fontSize: "16px",
                        background: "transparent",
                        minWidth: "35px",
                        borderRadius: "5px",
                      }}
                    >
                      7
                    </span>
                    Can I claim the deduction if I donate online?
                  </button>
                </h2>
                <div
                  id="faq7"
                  className="accordion-collapse p-3 collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body px-4 py-3 text-muted">
                    Yes, you can. Online donations qualify. Use bank transfer or
                    UPI. We provide an 80G receipt. Submit it during tax filing.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 mb-3 shadow-sm">
                <h2 className="accordion-header p-3">
                  <button
                    className="accordion-button collapsed bg-white border-0 py-3 px-4 fw-semibold shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq8"
                  >
                    <span
                      className="border border-dark me-3 d-flex align-items-center justify-content-center text-dark fw-bold"
                      style={{
                        width: "35px",
                        height: "35px",
                        fontSize: "16px",
                        background: "transparent",
                        minWidth: "35px",
                        borderRadius: "5px",
                      }}
                    >
                      8
                    </span>
                    What types of donations get 80G benefits?
                  </button>
                </h2>
                <div
                  id="faq8"
                  className="accordion-collapse  p-3 collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body px-4 py-3 text-muted">
                    Monetary donations qualify. In-kind donations do not.
                    Examples are school supplies or clothes. Only money
                    donations get tax benefits. Follow the payment rules.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 mb-3 shadow-sm">
                <h2 className="accordion-header p-3">
                  <button
                    className="accordion-button collapsed bg-white border-0 py-3 px-4 fw-semibold shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq9"
                  >
                    <span
                      className="border border-dark me-3 d-flex align-items-center justify-content-center text-dark fw-bold"
                      style={{
                        width: "35px",
                        height: "35px",
                        fontSize: "16px",
                        background: "transparent",
                        minWidth: "35px",
                        borderRadius: "5px",
                      }}
                    >
                      9
                    </span>
                    How does KTMC use my donation
                  </button>
                </h2>
                <div
                  id="faq9"
                  className="accordion-collapse p-3 collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body px-4 py-3 text-muted">
                    We support communities. Your donation funds education. It
                    also funds healthcare. 85% goes to programs. 15% covers
                    admin and fundraising.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 mb-3 shadow-sm">
                <h2 className="accordion-header p-3">
                  <button
                    className="accordion-button collapsed bg-white border-0 py-3 px-4 fw-semibold shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq10"
                  >
                    <span
                      className="border border-dark me-3 d-flex align-items-center justify-content-center text-dark fw-bold"
                      style={{
                        width: "35px",
                        height: "35px",
                        fontSize: "16px",
                        background: "transparent",
                        minWidth: "35px",
                        borderRadius: "5px",
                      }}
                    >
                      10
                    </span>
                    Do I need extra documents for tax filing?
                  </button>
                </h2>
                <div
                  id="faq10"
                  className="accordion-collapse p-3 collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body px-4 py-3 text-muted">
                    You need the 80G receipt. Sometimes our 80G certificate is
                    needed. Keep your donation proof. File it with your taxes.
                    Ask your tax advisor.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 mb-3 shadow-sm">
                <h2 className="accordion-header p-3">
                  <button
                    className="accordion-button collapsed bg-white border-0 py-3 px-4 fw-semibold shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq11"
                  >
                    <span
                      className="border border-dark me-3 d-flex align-items-center justify-content-center text-dark fw-bold"
                      style={{
                        width: "35px",
                        height: "35px",
                        fontSize: "16px",
                        background: "transparent",
                        minWidth: "35px",
                        borderRadius: "5px",
                      }}
                    >
                      11
                    </span>
                    Can I claim the deduction in the same year?
                  </button>
                </h2>
                <div
                  id="faq11"
                  className="accordion-collapse p-3 collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body px-4 py-3 text-muted">
                    Yes, you can. Donate before the tax year ends. File your
                    taxes on time. Use the 80G receipt. Claim the deduction for
                    that year.
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
                <div className="col-md-6 col-lg-9 d-flex ">
                  <div>
                    <h3 className="p-3 fs-h">
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
         background-image:url("/assets/tax/tax banner.jpg");
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
    margin-left:25px;
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
            //  margin-right:30px!important;
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

                .refund-btn:hover{
                  background-color: #ffb300!important;
                  color: #ffffff!important;
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
                   .border-md-none {
               border:none!important;
    }      
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
  );
};

export default Taxexemption;
