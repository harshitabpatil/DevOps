import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/About/AboutUs.jsx";
import Donate from "./Pages/Donate/Donate.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import OurCauses from "./Pages/OurCauses/Ourcauses.jsx";
import Home from "./Pages/Home/Home.jsx";
import KtmcLandingPage from "./Pages/LandingPage/KtmcLandingPage.jsx";
import Empower from "./Pages/OurCauses/Empower.jsx";
import Empowerdetail from "./Pages/OurCauses/Empowerdetail.jsx";
import Annadanmahadan from "./Pages/Donate/annadanmahadan.jsx";
import Humanity from "./Pages/Donate/humanity.jsx";
import Donationpolicy from "./Pages/Donate/donationpolicy.jsx";
import Taxexemption from "./Pages/Donate/tax exemption.jsx";
import Event from "./Pages/Donate/event.jsx";
import Blog from "./Pages/Donate/blog.jsx";
import Blogdetails from "./Pages/Donate/blogdetails.jsx";
import Media from "./Pages/Donate/media.jsx";
import Successstory from "./Pages/Donate/successstory.jsx";
import Successstorydetail from "./Pages/Donate/successstorydetail.jsx";
import Empowermaya from "./Pages/OurCauses/Empowermaya.jsx";
import Empowerravi from "./Pages/OurCauses/Empowerravi.jsx";
import Empowerdeepa from "./Pages/OurCauses/Empowerdeepa.jsx";
import EmpowerArjun from "./Pages/OurCauses/Empowerarjun.jsx";



function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/about/promotion" element={<KtmcLandingPage />} />
      <Route path="/ourcauses" element={<OurCauses />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/contact-us" element={<ContactUs />} />

      {/* submenus */}
      <Route path="/ourcauses-empower" element={<Empower />} />   
      <Route path="/ourcauses-empower-empower-detail" element={<Empowerdetail />} />
      <Route path="/ourcauses-empower-empower-maya" element={<Empowermaya />} />
      <Route path="/ourcauses-empower-empower-ravi" element={<Empowerravi />} />
      <Route path="/ourcauses-empower-empower-deepa" element={<Empowerdeepa />} />
      <Route path="/ourcauses-empower-empower-rahul" element={<EmpowerArjun />} />
      <Route path="/donate-annadan-mahadan" element={<Annadanmahadan />} />
      <Route path="/donate-world-humanity" element={<Humanity />} />
      <Route path="/donate-donation-policy" element={<Donationpolicy />} />
      <Route path="/donate-tax-exemption" element={<Taxexemption />} />
      <Route path="/donate-event" element={<Event />} />
      <Route path="/donate-blog" element={<Blog />} />
      <Route path="/donate-blogdetails" element={<Blogdetails />} />
      <Route path="/donate-media" element={<Media />} />
      <Route path="/donate-success-story" element={<Successstory />} />
      <Route path="/donate-success-story-detail" element={<Successstorydetail />} />
    </Routes>
  );
}

export default AppRoutes;
