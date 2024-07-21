/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from '../../assets/images/logo/MMH_logo_1.png';
// import {
//   fbIcon,
//   insIcon,
//   pnIcon,
//   twIcon,

// } from "../../constant/images";
// import about3 from "../../assets/images/landing_page6.jpg";
// import about4 from "../../assets/images/landing_page1.webp";
// import about5 from "../../assets/images/landing_page2.avif";
// import about6 from "../../assets/images/tech.jpg";
// import about7 from '../../assets/images/beprep.png';
// import about8 from '../../assets/images/landing_page3.webp';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="relative z-[1] mx-auto max-w-[1170px] rounded-md bg-[url('../images/all-img/section-bg-3.png')] bg-cover bg-center bg-no-repeat p-20">
        <div className="items-center space-x-4 space-y-5 text-center lg:flex lg:space-y-0 lg:text-left">
          <div className="flex-1">
            <div className="max-w-[590px] text-3xl font-bold text-white md:text-3xl lg:text-[44px] lg:leading-[61px]">
            Transform Your Tele Calling Skills into Carrier Success
            </div>
          </div>
          <div className="flex-none">
            <button className="btn bg-white font-bold text-black">
              Join Today
            </button>
          </div>
        </div>
      </div>
      <div className="-mt-[150px] bg-[url('../images/all-img/section-bg-10.png')] bg-cover bg-center bg-no-repeat pt-[150px]">
        <div className="section-padding container">
          <div className="grid grid-cols-12 gap-5">
            <div className="single-footer col-span-12 lg:col-span-6 xl:col-span-3">
              <div className="lg:max-w-[270px]">
                <a href="#" className="mb-10 block">
                  <img src={logo} alt="" />
                </a>
                <p>
                "We've Built Our Business Of Serving Your Needs On Some Core Principles. 
                This We Believe Lets Us Serve Your Success And That Ultimately Is Our Goal."
                </p>
                {/* <ul className="flex space-x-4 pt-8">
                  <li>
                    <a href="#" className="flex h-10 w-10">
                      <img src={fbIcon} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex h-10 w-10">
                      <img src={twIcon} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex h-10 w-10">
                      <img src={pnIcon} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex h-10 w-10">
                      <img src={insIcon} alt="" />
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="single-footer col-span-12 lg:col-span-6 xl:col-span-6">
              <div className="ml-auto xl:w-[80%]">
                <div className="flex space-x-[80px]">
                  <div className="flex-1 lg:flex-none">
                    <h4 className="mb-8 text-2xl font-bold text-black">
                      Links
                    </h4>
                    <ul className="list-item space-y-5">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/contacts">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/blogs">Blog</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1 lg:flex-none">
                    <h4 className="mb-8 text-2xl font-bold text-black">
                      Legal
                    </h4>
                    <ul className="list-item space-y-5">
                      <li>
                        <Link to="/hr_faq">HR FAQ's</Link>
                      
                      </li>
                      <li>
                      <Link to="/terms">Terms & Condition</Link>
                      </li>
                      <li>
                        <Link to="/privacy">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="single-footer col-span-12 lg:col-span-6 xl:col-span-3">
              <h4 className="mb-8 text-2xl font-bold text-black">
                Instagram Post
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {[
                  about3,
                  about4,
                  about5,
                  about6,
                  about7,
                  about8,
                ].map((item, index) => (
                  <div key={index}>
                    <a
                      href="#"
                      className="group relative block h-20 w-full rounded"
                    >
                      <img
                        src={item}
                        alt=""
                        className="block h-full w-full rounded object-cover"
                      />
                      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40 text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
                        <span className="scale-0 transition-all duration-150 group-hover:scale-100">
                          <iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
                        </span>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div> */}
            <div className="single-footer col-span-12 lg:col-span-6 xl:col-span-3">
                    <h4 className="mb-8 text-2xl font-bold text-black">
                      Contact Us
                    </h4>
                    <ul className="list-item space-y-5">
                      <li>
                        <Link to="/" className="lowercase">makemoneyfromhome</Link>
                      </li>
                      <li>
                      <Link to="/">Address</Link>
                      </li>
                      <li>
                        <Link to="#" className="lowercase">info@makemoneyonline.com</Link>
                      </li>
                      <li>
                        <Link to="#">+91 78945612365</Link>
                      </li>
                    </ul>
                  </div>
          </div>
        </div>

        <div className="container border-t border-[#E9D4D0] py-8 text-center text-base ">
          &copy; Copyright 2024 | <span className="lowercase"> info@makemoneyonline.com </span>| All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
