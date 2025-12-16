import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 991);

  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 991);
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
              
              className="text-white text-decoration-none btn liquid ms-3 "
              target="_blank"
              rel="noreferrer"
               onClick={() => setIsFormOpen(true)}

            >
              Meet Event
            </a>
            <a
              
              className="text-white text-decoration-none ms-3  btn liquid"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsFormOpen(true)}
            >
              Registration
            </a>
            <a
              
              className="text-white text-decoration-none ms-3"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsFormOpen(true)}
            >
              Give a Gift
            </a>
          </div>

          <div className=" text-white text-end px-4 py-2 small social-bar">
            <div className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=61578071846348"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/kovai-tech-member-chamber-ktmc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/kovaitechmemberchamber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@KTMC-t3l8f"
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

              <ul
                className={`navbar-menu nav-item ${menuOpen ? "active" : ""}`}
              >
                <li className="">
                  <a
                    href="/"
                    className={`dropdown nav-link nav-li ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    Home
                  </a>
                </li>

                <li
                  className={`dropdown  nav-item ${
                    openDropdown === 0 ? "open" : ""
                  }`}
                >
                  <a
                    className={`dropdown nav-link nav-li ${
                      location.pathname.startsWith("/about-us") ? "active" : ""
                    }`}
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
                        href="/about-us"
                        className={`${
                          location.pathname === "/about-us" ? "active" : ""
                        }`}
                        // target="_blank"
                      >
                        About KTMC
                      </a>
                    </li>
                    <li className="drop-nav">
                      <a
                        href="/about/promotion"
                        className={`${
                          location.pathname === "/about/promotion"
                            ? "active"
                            : ""
                        }`}
                        // target="_blank"
                      >
                        Promotion LP
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  className={`dropdown  nav-item ${
                    openDropdown === 1 ? "open" : ""
                  } nav-item`}
                >
                  <a
                    className={`dropdown nav-link nav-li ${
                      location.pathname.startsWith("/our-causes")
                        ? "active"
                        : ""
                    }`}
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
                        href="/ourcauses"
                        className={`${
                          location.pathname === "/ourcauses" ? "active" : ""
                        }`}
                      >
                        Causes
                      </a>
                    </li>
                    <li
                      className={`dropdown-sub drop-nav ${
                        openSubDropdown === "email" ? "open" : ""
                      }`}
                    >
                      <a
                        href="/ourcauses-empower"
                        className={`${
                          location.pathname === "/ourcauses-empower"
                            ? "active"
                            : ""
                        }`}
                      >
                        Empower
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className={`dropdown nav-item ${
                    openDropdown === 2 ? "open" : ""
                  }`}
                >
                  <a
                    className={`dropdown nav-link nav-li ${
                      location.pathname.startsWith("/donate") ? "active" : ""
                    }`}
                    onClick={(e) => {
                      if (isMobile) {
                        e.preventDefault();
                        setOpenDropdown(openDropdown === 2 ? null : 2);
                      }
                    }}
                  >
                    Donate
                  </a>
                  <ul className="dropdown-menu">
                    <li className="drop-nav">
                      <a
                        href="/donate-annadan-mahadan"
                        className={`${
                          location.pathname === "/donate-annadan-mahadan"
                            ? "active"
                            : ""
                        }`}
                      >
                        Annadan mahadan
                      </a>
                    </li>
                    <li className="drop-nav">
                      <a
                        href="/donate"
                        className={`${
                          location.pathname === "/donate" ? "active" : ""
                        }`}
                      >
                        Food
                      </a>
                    </li>
                    <li className="drop-nav">
                      <a
                        href="/donate-world-humanity"
                        className={`${
                          location.pathname === "/donate-world-humanity"
                            ? "active"
                            : ""
                        }`}
                      >
                        World for Humanity
                      </a>
                    </li>
                    <li className="drop-nav">
                      <a
                        href="/donate-tax-exemption"
                        className={`${
                          location.pathname === "/donate-tax-exemption"
                            ? "active"
                            : ""
                        }`}
                      >
                        Tax Exemption
                      </a>
                    </li>
                    <li className="drop-nav">
                      <a
                        href="/donate-donation-policy"
                        className={`${
                          location.pathname === "/donate-donation-policy"
                            ? "active"
                            : ""
                        }`}
                      >
                        Donation Policy
                      </a>
                    </li>
                    {/* <li className="drop-nav">
                      <a
                        href="/donate-blog"
                        className={`${
                          location.pathname === "/donate-blog" ? "active" : ""
                        }`}
                      >
                        Blog
                      </a>
                    </li> */}
                    {/* <li className="drop-nav">
                      <a
                        href="/donate-event"
                        className={`${
                          location.pathname === "/donate-event" ? "active" : ""
                        }`}
                      >
                        Event
                      </a>
                    </li> */}
                    {/* <li className="drop-nav">
                      <a
                        href="/donate-media"
                        className={`${
                          location.pathname === "/donate-media" ? "active" : ""
                        }`}
                      >
                        Media
                      </a>
                    </li> */}
                    {/* <li className="drop-nav">
                      <a
                        href="/donate-success-story"
                        className={`${
                          location.pathname === "/donate-success-story"
                            ? "active"
                            : ""
                        }`}
                      >
                        Success Story
                      </a>
                    </li> */}
                  </ul>
                </li>

                <li className="nav-item">
                  <a
                    href="/contact-us"
                    className={`${
                      location.pathname === "/contact-us" ? "active" : ""
                    }`}
                  >
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
        {`
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
          `}
      </style>
    </div>
  );
};

export default Header;
