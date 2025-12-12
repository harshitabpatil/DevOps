import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaPinterest
} from "react-icons/fa";
import {
  FaXTwitter,

} from "react-icons/fa6";
import FooterVideoslide from "../Components/FooterVideoslide";

const Footer = () => {
  return (
    <div>
      <section className="footerwrap p-0" id="about">
        <div className="py-5">
          <FooterVideoslide />
          <div className="container  p-0 m-auto">
            <div className="yellowrap">
              <div className="footer d-flex toelist">
                <ul className="footemenu d-flex">
                  <li>
                    <a href="/about-us" className="">Community Outreach</a>
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
                      <a href="https://www.facebook.com/profile.php?id=61578071846348" target="_blank" className="icon facebook">
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
                  <p className="text-center">  Copyright © {new Date().getFullYear()}  Kovai Tech Member Chamber.<br/> All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
