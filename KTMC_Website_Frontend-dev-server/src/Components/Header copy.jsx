import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {  useLocation , } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/ktmclogo.png";
import "../assets/main.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import VolunteerForm from "./VolunteerForm";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setIsSticky(window.scrollY > 50);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (openDropdown !== 1) {
      setOpenSubDropdown(null);
    }
  }, [openDropdown]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);
  const [isFormOpen, setIsFormOpen] = useState(false);


    const isourCausesPath = () => {
    const ourCausesPaths = [
      "/ourcauses-empower",
      "/ourcauses-empower-empower-detail",
      
    ];
    return ourCausesPaths.some((path) => location.pathname === path);
  };

   const isDonatePath = () => {
    const DonatePaths = [
      "/donate-annadan-mahadan",
      "/donate-world-humanity",
      "/donate-donation-policy",
      "/donate-tax-exemption",
      "/donate-event",
      "/donate-blog",
      "/donate-blogdetails",
      "/donate-media",
      "/donate-success-story",
      "/donate-success-story-detail",

      
    ];
    return DonatePaths.some((path) => location.pathname === path);
  };

  return (
    <div className="">
      <div className="top-barwrap bg-black ">
        <div className="top-bar bg-black container d-flex justify-content-between align-items-center">
          <div className="text-white top_left text-end px-4 py-2 small social-bar">
            <a
              href="https://facebook.com"
              className= "text-white text-decoration-none ms-3 "
                 
                
              target="_blank"
              rel="noreferrer"
            >
              Meet Event
            </a>
            <a
              href="https://twitter.com"
              className="text-white text-decoration-none ms-3"
              target="_blank"
              rel="noreferrer"
            >
              Registration
            </a>
            <a
              href="https://instagram.com"
              className="text-white text-decoration-none ms-3"
              target="_blank"
              rel="noreferrer"
            >
              Give a Gift
            </a>
          </div>

          <div className=" text-white text-end px-4 py-2 small social-bar">
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
      <header
        className={`main-header ${
          isSticky ? "sticky" : ""
        } bg-yellow shadow-sm`}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <div className="headerlogo mb-0 fw-bold">
            {" "}
            <a href="/" alt="KTMC">
              <img src={logo} alt="Logo" />
            </a>{" "}
          </div>
          <div className="main_menuwrap d-flex">
            <nav className="navbar">
              <div
                className={`navbar-toggle ${menuOpen ? "open" : ""}`}
                onClick={toggleMenu}
              >
                ☰
              </div>

              <ul className={`navbar-menu nav-item ${menuOpen ? "active" : ""}`}>
                <li className="">
                  <a href="/" className={`dropdown nav-link nav-li ${
                              location.pathname === "/" ? "active" : ""
                            }`}>
                    Home
                  </a>
                </li>

                <li className={`dropdown  nav-item ${openDropdown === 0 ? "open" : ""}`}>
                  <a
                 className={`${
                              location.pathname === "/about" ? "active" : ""
                            }`}
                  href="/about"
                    onClick={(e) => {
                      if (isMobile) {
                        e.preventDefault();
                        setOpenDropdown(openDropdown === 0 ? null : 0);
                      }
                    }}
                  >
                    About Us
                  </a>
                  <ul className="dropdown-menu">
                    <li className="drop-nav">
                      <a 
                      href="/about/promotion"
                       className={`${location.pathname === "/about/promotion" ? "active" : ""}`}
                       target="_blank">
                        Promotion LP
                      </a>
                    </li>
                    {/* <li>
                      <a href="/about">Community Cutreach</a>
                    </li> */}
                  </ul>
                </li>

                <li className={`dropdown  ${openDropdown === 1 ? "open" : ""} nav-item`}>
                  <a
                   className={` ${
                               isourCausesPath() || location.pathname.startsWith("/ourcauses")
                    ? "active" : ""
                            }`}
                    href="/ourcauses"
                    onClick={(e) => {
                      if (isMobile) {
                        e.preventDefault();
                        setOpenDropdown(openDropdown === 1 ? null : 1);
                      }
                    }}
                  >
                    Our Causes
                  </a>
                  <ul className="dropdown-menu">
                    <li
                      className={`dropdown-sub drop-nav ${
                        openSubDropdown === "email" ? "open" : ""
                      }`}
                    >
                      <a
                      href="/ourcauses-empower"
                      className={`${location.pathname === "/ourcauses-empower" ? "active" : ""}`}
                        // onClick={(e) => {
                        //   if (isMobile) {
                        //     e.preventDefault();
                        //     setOpenSubDropdown(
                        //       openSubDropdown === "email" ? null : "email"
                        //     );
                        //   }
                        // }}
                      >
                        Empower
                      </a>
                      {/* <ul className="dropdown-menu">
                        <li>
                          <a href="/ourcauses">Work Email</a>
                        </li>
                        <li>
                          <a href="/ourcauses">Personal Email</a>
                        </li>
                      </ul> */}
                    </li>
                  </ul>
                </li>
                <li className={`dropdown nav-item ${openDropdown === 1 ? "open" : ""}`}>
                  <a
                    onClick={(e) => {
                      if (isMobile) {
                        e.preventDefault();
                        setOpenDropdown(openDropdown === 1 ? null : 1);
                      }
                    }}
                    href="/donate"
                    className={`nav-item ${
                              isDonatePath() || location.pathname.startsWith("/donate") ? "active" : ""
                            }`}
                  >
                    Donate
                  </a>
                  <ul className="dropdown-menu">
                    <li className="drop-nav">
                      <a 
                      href="/donate-annadan-mahadan"
                       className={`${location.pathname === "/donate-annadan-mahadan" ? "active" : ""}`}
                      
                      >Annadan Pradan</a>
                    </li>
                    <li className="drop-nav">
                      <a 
                      href="/donate"
                      className={`${location.pathname === "/donate" ? "active" : ""}`}
                      >Food</a>
                    </li>
                    <li className="drop-nav">
                      <a 
                      href="/donate-world-humanity"
                      className={`${location.pathname === "/donate-world-humanity" ? "active" : ""}`}
                      >World for Humanity</a>
                    </li>
                    <li
                     className="drop-nav"
                     >
                      <a 
                      href="/donate-tax-exemption"
                      className={`${location.pathname === "/donate-tax-exemption" ? "active" : ""}`}
                      >Tax Exemption</a>
                    </li>
                    <li className="drop-nav">
                      <a
                       href="/donate-donation-policy"
                       className={`${location.pathname === "/donate-donation-policy" ? "active" : ""}`}
                       >Donation Policy</a>
                    </li>
                    <li 
                    className="drop-nav"
                    >
                      <a href="/donate-blog"
                      className={`${location.pathname === "/donate-blog" ? "active" : ""}`}
                      >Blog</a>
                    </li>
                    <li className="drop-nav">
                      <a
                       href="/donate-event"
                       className={`${location.pathname === "/donate-event" ? "active" : ""}`}
                       >Event</a>
                    </li>
                     <li className="drop-nav">
                      <a 
                      href="/donate-media"
                      className={`${location.pathname === "/donate-media" ? "active" : ""}`}
                      >Media</a>
                    </li>
                  <li className="drop-nav">
                      <a
                       href="/donate-success-story"
                       className={`${location.pathname === "/donate-success-story" ? "active" : ""}`}
                       >Success Story</a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="/contactus" className={`${
                              location.pathname === "/contactus" ? "active" : ""
                            }`}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="btn-black-cover">
              <div className="blackcover "></div>
              <button
                onClick={() => setIsFormOpen(true)}
                className="btn liquid "
              >
                <span>Become a volunteer</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div>
        <VolunteerForm show={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>

      <style>
        {
          `
          .text-end {
     text-align: none !important; 
}

.px-4 {
     padding-right: 0rem !important; 
     padding-left: 0rem !important; 
}

.dropdown-menu li a:hover{
  color:rgb(255, 196, 0)!important;
}
  .nav-item:hover{
  color:rgb(255, 255, 255)!important;
  }

  .main-header.sticky .container  .nav-item:hover {
   color:rgb(255, 196, 0)!important;
}

.main-header.sticky .container  .active {
   color:rgb(255, 196, 0)!important;
}

 .nav-item .active {
  color:rgb(255, 255, 255)!important;

        }
.drop-nav .active {
       color:rgb(255, 196, 0)!important;
  }

  .dropdown-menu li a .active{
  color:rgb(255, 196, 0)!important;
}
        }
          `
        }
      </style>
    </div>
 
  );
};

export default Header;
