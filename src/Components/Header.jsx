/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/images/logo/logo.svg";
import logo from "../assets/images/logo/MMH_logo_1.png";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const scrollNav = useRef(null);
  useEffect(() => {
    // scrolling nav
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY > 100;
      scrollNav.current.classList.toggle("rt-sticky-active", windowScroll);
      scrollNav.current.classList.toggle("sticky", windowScroll);
    });
  }, []);

  return (
    <>
      <header
        className="site-header  home-one-header top-0 w-full z-[999] rt-sticky "
        ref={scrollNav}
      >
        <div className="main-header py-6">
          <div className="container">
            <div className=" flex items-center justify-between">
              <Link
                to={"/"}
                className="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px] "
              >
                <img src={logo} alt="logo" />
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
                          <Link to={"/home-two"}>
                            Home Two
                          </Link>
                        </li>
                        <li>
                          <Link to={"/home-three"}>
                            Home Three
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/about"}>
                            About 1
                          </Link>
                        </li>
                        <li>
                          <Link to={"/about-two"}>
                            About 2
                          </Link>
                        </li>
                        <li>
                          <Link to={"/instructor"}>
                            Instructor
                          </Link>
                        </li>
                        <li>
                          <Link to={"/instructor-two"}>
                            Instructor 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/instructor-details"}
                          >
                            Instructor Single
                          </Link>
                        </li>
                        <li>
                          <Link to={"/event"}>
                            Event
                          </Link>
                        </li>
                        <li>
                          <Link to={"/event-single"}>
                            Event Single
                          </Link>
                        </li>
                        <li>
                          <Link to={"/error"}>404</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Courses</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/courses"}>
                            Courses
                          </Link>
                        </li>
                        <li>
                          <Link to={"/courses-sidebar"}>
                            Courses Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link to={"/single-course"}>
                            Single Course
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Blog</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/blogs"}>
                            Blog Standard
                          </Link>
                        </li>
                        <li>
                          <Link to={"/single-blog"}>
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
                </div>
                <div className="flex-none flex space-x-[18px]">
                  <div className=" hidden lg:block">
                    <a
                      href="https://leads.makemoneyfromhome.app/login"
                      className="btn btn-primary py-[15px] px-8"
                      target="_blank"
                    >
                      Get Started
                    </a>
                  </div>
                  <div className=" block   lg:hidden">
                    <button
                      type="button"
                      className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center
                                        menu-click"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <iconify-icon
                        icon="cil:hamburger-menu"
                        rotate="180deg"
                      ></iconify-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {activeMobileMenu && (
        <MobileMenu
          activeMenu={activeMobileMenu}
          setActiveMenu={setActiveMobileMenu}
        />
      )}
    </>
  );
};

export default Header;
