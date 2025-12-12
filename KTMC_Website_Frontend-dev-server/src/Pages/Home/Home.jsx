import React from "react";
import Header from "../../Components/Header";
import MainBanner from "../../Components/MainBanner";
import Gallery from "../../Components/Gallery";


import DonatingFormslider from "../../Components/DonatingFormslider";
import PoemSlider from "../../Components/PoemSlider";
import TestimonialSlider from "../../Components/TestimonialSlider";
import { Helmet } from 'react-helmet-async'; // ✅ Add this line
import Footer from "../../Components/Footer";
import { useState } from "react";
import GeneralDonataionForm from "../../Components/GeneralDonataionForm";
import OpenGeneralForm from "../../Components/OpenGeneralForm";
import Causeslider from "../../Components/OurCauseslider.jsx";


const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="">

      <Helmet>
        <title>KTMC – Non-Profit Organization in Coimbatore, India</title>
        <meta
          name="description"
          content="KTMC is a registered non-profit in Coimbatore, working on food donation, education, and social welfare. Donate or volunteer to support our community work."
        />       
        <link rel="canonical" href="https://ktmc.org.in/" />
      </Helmet>


      <Header />
      <MainBanner />


      <GeneralDonataionForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
      <section
        className="hero-section align-item-center text-center py-5"
        id="home"
      >
        <div className="container py-5">
          <h2 className="p-3">Join  Kovai Tech Member Chamber- KTMC  </h2>
          <div className="gallerywrap">{/* <Gallery /> */}</div>
          <p className="text-justify">
            Kindness brings hope to many. Every good deed matters. We are proud to offer
            basic support and assistance in the health, educational, and vital community development. Our unswerving mission
            is to establish brighter futures for millions of people and households. You're caring and generosity, as well
            as your commitment to volunteerism, are really what we need to proceed with this important work. Each act and
            each hour of giving would enable us to reach a meaningful and lasting difference. Be a part of this work, make
            a difference, and revolutionize lives, deliver hope, and make a better, stronger, and more vibrant community.
            We can change the world and accomplish things so amazing by coming together.
          </p>
        </div>
      </section>


      <section className="about-section text-center" id="about">
        <h2 className="mb-3">Latest Causes</h2>
        <div className="container  p-0 m-auto">
          {" "}
          <Causeslider />
        </div>
      </section>


      <section className="donatinformsldierwrap py-5" id="about">
        <div className="py-5 ">
          <div className="container p-0 m-auto ">
            <div className="yellowrap d-flex ">
              <div className="col-md-6 col-lg-9">
                <h3 className="p-3 ">
                  Invest in a better world{" "}
                </h3>
              </div>
              <div className="banner_cta_wrap  col-md-6 col-lg-3">
                <OpenGeneralForm onOpen={() => setIsPopupOpen(true)} />
              </div>
            </div>
          </div>
          <DonatingFormslider />
          <div className="container  p-0 m-auto">
            <div className="yellowrap">
              <div className="poemslidewrap">
                <PoemSlider />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="about-section" id="about">
        <div className="container testimonial">
          {/* <TestimonialSlider /> */}
          <div className="ktmc_smalldetails text-center">
            <h2 className="p-3 ">Kovai Tech Member Chamber</h2>
            <p className="text-justify">
              Kovai Tech Member Chamber helps people. It is a non-profit organization. Our group is dedicated to "love of humanity". Our mission is to serve others.
              This  KTMC gives back to the community. Our organization donates resources. We provide loans to help those in need. We support education.
              Resources are given to schools.  This helps students learn. We also support communities.  Items were donated to a center in Neelgiris.
              Our organization  believes in shared values. We want to bring happiness. We help schools  with sports and sound systems. We support sports in rural areas.
              Our work includes many areas. We focus on community outreach, public outreach,   and an educational trust. We also provide home care.
              Volunteers are very important to KTMC, dedicating their time and skills.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};


export default Home;