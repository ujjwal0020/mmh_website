/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  // bThumb1,
  // bThumb2,
  // bThumb3,
  calender,
  // insIcon1,
  // insIcon2,
  // insIcon3,
  // insIcon4,
  // insIcon5,
  // insIcon6,
  // rc1,
  // rc2,
  // rc3,
  // search,
} from "../../constant/images";
// import about3 from "../../assets/images/landing_page6.jpg";
// import about4 from "../../assets/images/landing_page1.webp";
// import about5 from "../../assets/images/landing_page2.avif";
// import about6 from "../../assets/images/tech.jpg";
// import about7 from "../../assets/images/beprep.png";
// import about8 from "../../assets/images/landing_page3.webp";



// ../HomeTwoComponents/Footer
import Header from "../Header";
// import PageBanner from "../PageBanner";
import Footer from "../HomeTwoComponents/Footer";
import { BlogData } from "../../constant/BlogData";
import { Link } from "react-router-dom";

const BLogStandard = () => {
  return (
    <>
      <Header />
      <br />
      {/* <PageBanner title={"Blog Standard"} pageName={"Blog Standard"} /> */}
      <div className="nav-tab-wrapper tabs  section-padding">
        <div className="container">
          <div className="grid grid-cols-1 gap-[30px]">
            <div className="lg:col-span-8 col-span-12">
              <div className="grid grid-cols-1 gap-[30px]">
                {BlogData.map((post, index) => (
                  <div
                    className="bg-white shadow-box12 rounded-[8px] transition duration-100 hover:shadow-box13"
                    key={index}
                  >
                    <div className="course-thumb h-[420px] rounded-t-[8px] relative">
                      <img
                        src={post.image}
                        alt=""
                        className="w-full h-full object-cover rounded-t-[8px]"
                      />
                    </div>
                    <div className="course-content p-8">
                      <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white inline-block">
                        Industry
                      </span>
                      <h3 className="mb-4 mt-4">
                        <Link
                          to={`/blogs/${post.to}`}
                          className="hover:text-primary transition duration-150"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p>{post.content}</p>
                      <div className="flex lg:space-x-10 space-x-5 mt-6">
                        <a
                          className="flex items-center space-x-2"
                          href="blog-single.html"
                        >
                          <img src={calender} alt="" />
                          <span>{post.date}</span>
                        </a>
                        <a
                          className="flex items-center space-x-2"
                          href="single-blog"
                        >
                          {/* <img src={clockIcon} alt="" /> */}
                          {/* <span>3 Min Read</span> */}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="pagination mt-14">
                <ul className=" flex justify-center space-x-3">
                  <li className="inline-flex">
                    <a
                      href="#"
                      className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
                    >
                      <iconify-icon
                        icon="heroicons:chevron-double-left-20-solid"
                        class="text-2xl"
                      ></iconify-icon>
                    </a>
                  </li>
                  <li className="inline-flex">
                    <a
                      href="#"
                      className="flex w-12 h-12 flex-col items-center justify-center bg-primary text-white rounded font-semibold"
                    >
                      1
                    </a>
                  </li>
                  <li className="inline-flex">
                    <a
                      href="#"
                      className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
                    >
                      2
                    </a>
                  </li>
                  <li className="inline-flex">
                    <a
                      href="#"
                      className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
                    >
                      3
                    </a>
                  </li>
                  <li className="inline-flex">
                    <a
                      href="#"
                      className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
                    >
                      4
                    </a>
                  </li>
                  <li className="inline-flex">
                    <a
                      href="#"
                      className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
                    >
                      <iconify-icon
                        icon="heroicons:chevron-double-right-20-solid"
                        class="text-2xl"
                      ></iconify-icon>
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
            {/* <div className="lg:col-span-4 col-span-12">
              <div className="sidebarWrapper space-y-[30px]">
                <div className="wdiget widget_search">
                  <div className="bg-[#F8F8F8] flex  rounded-md shadow-e1 items-center  py-[4px] pl-3  relative">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Search keyword..."
                        className="border-none focus:ring-0 bg-transparent"
                      />
                    </div>
                    <div className="flex-none">
                      <button className="btn btn-primary">
                        <img src={search} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="wdiget widget_catagory">
                  <h4 className="widget-title">Categories</h4>

                  <ul className=" list-item space-y-4">
                    <li className=" block">
                      <a
                        href="#"
                        className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
                      >
                        <span>Case Studies (23)</span>
                        <span class="text-2xl">
                          <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                        </span>
                      </a>
                    </li>

                    <li className=" block">
                      <a
                        href="#"
                        className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
                      >
                        <span>Sales &amp; Marketing (45)</span>
                        <span class="text-2xl">
                          <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                        </span>
                      </a>
                    </li>

                    <li className=" block">
                      <a
                        href="#"
                        className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
                      >
                        <span>Real State (14)</span>
                        <span class="text-2xl">
                          <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                        </span>
                      </a>
                    </li>

                    <li className=" block">
                      <a
                        href="#"
                        className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
                      >
                        <span>Features (14)</span>
                        <span class="text-2xl">
                          <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                        </span>
                      </a>
                    </li>

                    <li className=" block">
                      <a
                        href="#"
                        className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
                      >
                        <span>Start Up (28)</span>
                        <span class="text-2xl">
                          <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                        </span>
                      </a>
                    </li>

                    <li className=" block">
                      <a
                        href="#"
                        className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
                      >
                        <span>Education (34)</span>
                        <span class="text-2xl">
                          <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="wdiget widget-recent-post">
                  <h4 className=" widget-title">Related Courses</h4>
                  <ul className="list">
                    <li className=" flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                      <div className="flex-none ">
                        <div className="h-20 w-20  rounded">
                          <img
                            src={rc1}
                            alt=""
                            className=" w-full h-full object-cover rounded"
                          />
                        </div>
                      </div>
                      <div className="flex-1 ">
                        <div className="mb-1 font-semibold text-black">
                          How to Manage Ads For Clients The Right Way
                        </div>
                        <a className=" text-secondary font-semibold" href="#">
                          Read More
                        </a>
                      </div>
                    </li>
                    <li className=" flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                      <div className="flex-none ">
                        <div className="h-20 w-20  rounded">
                          <img
                            src={rc2}
                            alt=""
                            className=" w-full h-full object-cover rounded"
                          />
                        </div>
                      </div>
                      <div className="flex-1 ">
                        <div className="mb-1 font-semibold text-black">
                          How to Manage Ads For Clients The Right Way
                        </div>
                        <a className=" text-secondary font-semibold" href="#">
                          Read More
                        </a>
                      </div>
                    </li>
                    <li className=" flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                      <div className="flex-none ">
                        <div className="h-20 w-20  rounded">
                          <img
                            src={rc3}
                            alt=""
                            className=" w-full h-full object-cover rounded"
                          />
                        </div>
                      </div>
                      <div className="flex-1 ">
                        <div className="mb-1 font-semibold text-black">
                          How to Manage Ads For Clients The Right Way
                        </div>
                        <a className=" text-secondary font-semibold" href="#">
                          Read More
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="wdiget">
                  <h4 className="widget-title">Popular Tags</h4>
                  <ul className="flex flex-wrap">
                    <li className="mr-2 mb-2">
                      <a
                        href="#"
                        className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                      >
                        Business
                      </a>
                    </li>

                    <li className="mr-2 mb-2">
                      <a
                        href="#"
                        className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                      >
                        Education
                      </a>
                    </li>

                    <li className="mr-2 mb-2">
                      <a
                        href="#"
                        className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                      >
                        Start Up
                      </a>
                    </li>

                    <li className="mr-2 mb-2">
                      <a
                        href="#"
                        className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                      >
                        Virtual Assistance
                      </a>
                    </li>

                    <li className="mr-2 mb-2">
                      <a
                        href="#"
                        className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                      >
                        Crm
                      </a>
                    </li>

                    <li className="mr-2 mb-2">
                      <a
                        href="#"
                        className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                      >
                        Community
                      </a>
                    </li>

                    <li className="mr-2 mb-2">
                      <a
                        href="#"
                        className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                      >
                        Tele Calling
                      </a>
                    </li>

                    <li className="mr-2 mb-2">
                      <a
                        href="#"
                        className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                      >
                        e-Learning
                      </a>
                    </li>

                    <li className="mr-2 mb-2">
                      <a
                        href="#"
                        className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                      >
                        Make Money
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="wdiget">
                  <h4 className="widget-title">Instagram Feed</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {[about3, about4, about5, about6, about7, about8].map(
                      (item, index) => (
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
                            <div
                              className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40
                                                    text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100"
                            >
                              <span className="scale-0 transition-all duration-150 group-hover:scale-100">
                                <iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
                              </span>
                            </div>
                          </a>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BLogStandard;
