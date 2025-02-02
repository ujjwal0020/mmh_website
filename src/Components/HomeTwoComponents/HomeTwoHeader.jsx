/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
// import wfb from "../../assets/images/social/wfb.svg";
// import wt from "../../assets/images/social/wt.svg";
// import wi from "../../assets/images/social/w-i.svg";
// import wins from "../../assets/images/social/w-ins.svg";
// import search from "../../assets/images/svg/search.svg";
// import logo from "../../assets/images/logo/logo.svg";
import logo from "../../assets/images/logo/MMH_logo_1.png";
import landing from "../../assets/images/landing_page3.webp";
// import man2 from "../../assets/images/banner/man2.png";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu";
const HomeTwoHeader = () => {
  const scrollNav = useRef(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  let body = document.querySelector("body");
  const handleShowSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };
  useEffect(() => {
    // scrolling nav
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY > 100;
      scrollNav.current.classList.toggle("rt-sticky-active", windowScroll);
    });
  }, []);
  showSearchBar
    ? body.classList.add("modal-open")
    : body.classList.remove("modal-open");

  body.classList.contains("modal-open")
    ? (document.documentElement.scrollTop = 0)
    : "";
  return (
    <section className=" xl:min-h-screen bg-[url('../images/banner/2.png')] bg-cover bg-no-repeat bg-center overflow-hidden xl:pb-[130px]">
      <header className="site-header ">
        {/* <div className="bg-primary text-white py-3 md:block hidden">
          <div className=" container">
            <div className="grid lg:grid-cols-2  grid-cols-1 gap-5 ">
              <ul className=" flex  divide-x divide-white divide-opacity-25 text-base lg:justify-start justify-center">
                <li className="mr-4">12893 Green Valley Street, Noida (INDIA)</li>
                <li className="pl-4">
                  <a href="mailto:info@makemoneyfromhome.app" className="lowercase">
                    info@makemoneyfromhome.app
                  </a>
                </li>
              </ul>
              <ul className=" text-base flex  lg:justify-end justify-center divide-x divide-white divide-opacity-25 items-center">
                <li className="px-2">Follow Us On:</li>
                <li className="px-2">
                  <a href="#">
                    <img src={wfb} alt="" />
                  </a>
                </li>
                <li className="px-2">
                  <a href="#">
                    <img src={wt} alt="" />
                  </a>
                </li>
                <li className="px-2">
                  <a href="#">
                    <img src={wi} alt="" />
                  </a>
                </li>
                <li className="px-2">
                  <a href="#">
                    <img src={wins} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div
          className="main-header py-8 header-normal2  rt-sticky top-0 w-full z-[999] "
          ref={scrollNav}
        >
          <div className="container">
            <div className=" flex items-center justify-between ">
              <Link
                to={"/"}
                className="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px]  "
              >
                <img src={logo} alt="" />
              </Link>
              <div className="flex items-center flex-1">
                <div className="flex-1 main-menu relative mr-[74px]">
                  <ul className="menu-active-classNamees">
                    {/* <li className={`menu-item-has-children `}>
                      <a href="#">Home</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/"}> Home One</Link>
                        </li>
                        <li>
                          <Link to={"//home-two"}>
                            Home Two
                          </Link>
                        </li>
                        <li>
                          <Link to={"//home-three"}>
                            Home Three
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"//about"}>
                            About 1
                          </Link>
                        </li>
                        <li>
                          <Link to={"//about-two"}>
                            About 2
                          </Link>
                        </li>
                        <li>
                          <Link to={"//instructor"}>
                            Instructor
                          </Link>
                        </li>
                        <li>
                          <Link to={"//instructor-two"}>
                            Instructor 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"//instructor-details"}
                          >
                            Instructor Single
                          </Link>
                        </li>
                        <li>
                          <Link to={"//event"}>
                            Event
                          </Link>
                        </li>
                        <li>
                          <Link to={"//event-single"}>
                            Event Single
                          </Link>
                        </li>
                        <li>
                          <Link to={"//error"}>404</Link>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li className="menu-item-has-children">
                      <a href="#">Courses</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"//courses"}>
                            Courses
                          </Link>
                        </li>
                        <li>
                          <Link to={"//courses-sidebar"}>
                            Courses Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link to={"//single-course"}>
                            Single Course
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li className="menu-item-has-children">
                      <a href="#">Blog</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"//blogs"}>
                            Blog Standard
                          </Link>
                        </li>
                        <li>
                          <Link to={"//single-blog"}>
                            Blog Single
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/about"}>About Us</Link>
                    </li>
                    {/* <li>
                          <Link to={"/courses"}>
                            Courses
                          </Link>
                        </li> */}
                    <li>
                      <Link to={"/blogs"}>Blog</Link>
                    </li>
                    <li>
                      <Link to={"/contacts"}>Contacts</Link>
                    </li>
                  </ul>
                  <div className=" lg:block hidden">
                    <div className="border border-gray rounded-md  h-[46px] modal-search">
                      <input
                        type="text"
                        className=" block w-full rounded-md  h-full border-none ring-0 focus:outline-none  focus:ring-0"
                        placeholder="Search.."
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-none flex space-x-[18px]">
                  <div>
                    {/* <button
                      type="button"
                      className=" md:w-[56px] md:h-[56px] h-10 w-10 rounded bg-white flex flex-col items-center justify-center modal- 
                      trigger"
                      onClick={handleShowSearchBar}
                    >
                      <img src={search} alt="" />
                    </button> */}
                  </div>
                  <div className=" block   lg:hidden">
                    <button
                      type="button"
                      className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-white flex flex-col items-center justify-center menu-click"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <iconify-icon
                        icon="cil:hamburger-menu"
                        rotate="180deg"
                      ></iconify-icon>
                    </button>
                  </div>
                  <div className=" hidden lg:block">
                    <a
                      href="https://leads.makemoneyfromhome.app/login"
                      className="btn bg-black text-white py-[15px] px-8"
                      target="_blank"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className=" lg:hidden block">
          <div className="border border-gray rounded-md  h-[46px] modal-search">
            <input
              type="text"
              className=" block w-full rounded-md  h-full border-none ring-0 focus:outline-none  focus:ring-0"
              placeholder="Search.."
            />
          </div>
        </div>
      </div>
      {activeMobileMenu && (
        <MobileMenu
          activeMenu={activeMobileMenu}
          setActiveMenu={setActiveMobileMenu}
        />
      )}
      <div className="container relative">
        <div className="xl:max-w-[570px] xl:pt-[129px] lg:py-28 md:py-20 py-14  lg:space-y-10 space-y-6 ">
          <div className=" lg:text-[48px] lg:leading-[48px]  md:text-5xl md:leading-[48px] text-black font-bold text-5xl leading-[61px] ">
            Join Our <span className="text-primary">Dynamic Team</span> and
            Excel in Tele-calling with MMH
          </div>
          <div className=" plain-text text-gray leading-[30px] border-l-2 border-primary pl-4">
            We've Built Our Business Of Serving Your Needs On Some Core
            Principles. This We Believe Lets Us Serve Your Success And That
            Ultimately Is Our Goal.
          </div>
          <div className="md:flex  md:space-x-4 space-y-3 md:space-y-0 pt-5">
            <Link to="/contacts" className="btn btn-primary">
              Get A Quote
            </Link>{" "}
            <a
              href="https://leads.makemoneyfromhome.app/login"
              target="_blank"
              className="btn btn-black"
            >
              Get Started Now
            </a>
          </div>
        </div>
        <div className="imge-box  hidden  xl:block absolute right-[-60px] top-1/2  -translate-y-1/2 mt-[58px]  ">
          <img src={landing} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HomeTwoHeader;
