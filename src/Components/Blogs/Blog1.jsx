/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  // bs1,
  user3,
  calender,
  clockIcon,
  fbIcon,
  pnIcon,
  twIcon,
  insIcon,
  search,
  // rc2,
  // insIcon4,
  // insIcon5,
  // insIcon6,
} from "../../constant/images";
import about3 from "../../assets/images/landing_page6.jpg";
import about4 from "../../assets/images/landing_page1.webp";
import about5 from "../../assets/images/landing_page2.avif";
import about6 from "../../assets/images/tech.jpg";
import about7 from '../../assets/images/beprep.png';
import about8 from '../../assets/images/landing_page3.webp';
import ContactForm from "../ContactForm";
import mt2 from '../../assets/images/crm1.webp';
import mt3 from '../../assets/images/telesales_management.webp';
import mt4 from '../../assets/images/campaign_tracking.webp';

const Blog1 = () => {
  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="lg:col-span-8 col-span-12">
            <div className="bg-[#F8F8F8] rounded-md">
              <img src={mt2} alt="" className=" rounded-t-md mb-10" />
              <div className="px-10 pb-10">
                <div className="flex  flex-wrap  xl:space-x-10 space-x-5 mt-6 mb-6">
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={user3} alt="" />
                    <span>Fahad Abdullah</span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={calender} alt="" />
                    <span> 17 May,24</span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={clockIcon} alt="" />
                    <span>5 Min Read</span>
                  </a>
                  {/* <a className=" flex items-center space-x-2" href="#">
                    <img src={comment} alt="" />
                    <span>02 Comments</span>
                  </a> */}
                </div>
                <h3>
                A 5-Minute Guide on Operational CRM You Need to Know in 2024
                </h3>
                <p className="mt-6">
                An operational CRM (customer relationship management) system streamlines and automates your marketing, sales and customer service workflows; enhances the customer experience; and increases conversions by helping manage and analyse customer interactions.

Popular operational CRM software like TeleCRM can help your business in multiple ways.

Features like Autodialer, Leaderboard, WhatsApp bulk broadcasting, etc., help you streamline various business operations and reduce the workload of your team(s) significantly 

It stores lead and customer data in a single system, enabling easy access for you and your team

You can monitor the performance of every single member of your sales and customer support teams from a single dashboard
                </p>
                <br />
                {/* <blockquote className=" bg-secondary p-8 rounded-md bg-[url('../images/all-img/bb.png')] bg-cover bg-no-repeat bg-center my-8 text-white">
                  <img src={q} alt="" />
                  <div className=" text-xl font-semibold my-6">
                    “ Education is one of the most powerful aspects of life.
                    Education and learning allow us to make sense of the world
                    around us, the world inside of us, and where we fit within
                    the world.”
                  </div>
                  <div className=" flex items-center space-x-3">
                    <span className=" inline-flex h-[3px] w-12 bg-white"></span>
                    <span className=" text-xl font-semibold">
                      Rosalina D. Jackson
                    </span>
                  </div>
                </blockquote> */}
                {/* <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don’t look
                  even slightly believable. As students across the globe
                  continue to see their learning plans significantly.
                </p> */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px] my-8">
                  <img src={mt3} alt="" />
                  <img src={mt4} alt="" />
                </div>
                <h4 className="text-2xl mb-4">
                Which business functions can be streamlined by operational CRMs?
                </h4>
                <p>
Sales is the backbone of any business, be it B2B or B2C. Your sales agents need to be on top of their game so that your sales numbers keep improving every quarter. And this is only possible if agents can augment their productivity with the latest tools and technologies. 

With operational CRM, you can efficiently automate all your sales operations, from sending follow-up messages to setting call reminders and addressing customer queries. This level of automation ensures you never miss out on any potential business opportunities.
                </p>
                <ul className="list-disc marker:text-secondary space-y-4 mt-6">
                  <li className="">
                  Lead management and distribution
                  </li>
                  <p>Managing leads is still quite a challenge for most businesses. You get leads from various sources — Google Ads, your website, Facebook ads and so on. Ideally, you would want all these leads collected in one place so you can easily share them with your team. But often they end up getting captured in multiple spreadsheets. Then you have to hand them off to your team members manually, making the whole process of assigning leads a nightmare. With an operational CRM, however, you can easily assign your most important leads to your preferred team members.</p>
                  <li className="">
                  Telesales management
                  </li>
                  <p>Your sales team interacts with tens, if not hundreds, of leads every day, follows up with them diligently and even handles customer queries without batting an eye. But this process is quite exhaustive, as agents have to constantly juggle between Excel or Google Sheets to fetch the contact information of leads. But with an operational CRM, your agents don’t have to face these hurdles as the software optimises the process through automation, reducing the manual work done by your team. </p>
                </ul>
                <div className="grid xl:grid-cols-2 grid-cols-1  gap-5 md:mt-14 mt-8 ">
                  <ul className="flex items-center space-x-3 ">
                    <li className=" text-black font-semibold">Tags:</li>
                    <li>
                      <a
                        href="#"
                        className=" px-3 py-1  bg-white rounded hover:text-primary"
                      >
                        Business
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" px-3 py-1  bg-white rounded hover:text-primary"
                      >
                        Sales
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" px-3 py-1  bg-white rounded hover:text-primary"
                      >
                        Marketing
                      </a>
                    </li>
                  </ul>
                  <ul className="flex space-x-3 xl:justify-end items-center  ">
                    <li className=" text-black font-semibold">Share On:</li>

                    {[fbIcon, pnIcon, twIcon, insIcon].map((item, indx) => (
                      <li key={indx}>
                        <a href="#" className="flex h-8 w-8">
                          <img src={item} alt="" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <div className="grid xl:grid-cols-2 grid-cols-1  gap-[30px] md:mt-14 mt-8">
                  <a
                    className=" flex space-x-4 shadow-box7 rounded p-5 bg-white"
                    href="#"
                  >
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
                      <span className=" text-primary  text-base mb-1">
                        Prev Post
                      </span>
                      <div className="mb-1 font-semibold text-black">
                        How Technology Can Help You Stay Healthy
                      </div>
                    </div>
                  </a>

                  <a
                    className=" flex  flex-row-reverse shadow-box7 bg-white rounded p-5"
                    href="#"
                  >
                    <div className="flex-none ">
                      <div className="h-20 w-20  rounded ml-4">
                        <img
                          src={rc3}
                          alt=""
                          className=" w-full h-full object-cover rounded"
                        />
                      </div>
                    </div>
                    <div className="flex-1 text-right ">
                      <span className=" text-primary  text-base mb-1">
                        Next Post
                      </span>
                      <div className="mb-1 font-semibold text-black">
                        How Technology Can Help You Stay Healthy
                      </div>
                    </div>
                  </a>
                </div> */}
              </div>
            </div>

            {/* <div className=" mt-14">
              <h3 className=" mb-6">3 Comments</h3>
              <ul className="comments space-y-4">
                <li className="block border-b border-[#ECECEC] pb-6 mt-6 last:border-0 last:pb-0">
                  <div className="flex">
                    <div className="flex-none">
                      <div className="h-[72px] w-[72px] rounded-full mr-6">
                        <img
                          src={insIcon1}
                          alt=""
                          className="w-full block h-full object-contain rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between mb-2">
                        <div>
                          <span className="text-xl  font-semibold text-black block mb-1">
                            Ferira Watson
                          </span>
                          <span className=" block">Oct 09, 2021</span>
                        </div>
                        <a
                          href="#"
                          className=" inline-flex px-3 py-1 rounded text-secondary bg-[#E3F9F6] hover:text-white hover:bg-secondary h-[35px]
                            items-center space-x-2 leading-[1]"
                        >
                          <span className=" text-xl leading-[1] top-[3px] relative">
                            <iconify-icon
                              icon="charm:forward"
                              rotate="180deg"
                            ></iconify-icon>
                          </span>
                          <span className=" leading-[1]">Reply</span>
                        </a>
                      </div>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                    </div>
                  </div>
                  <ul className="comments mt-6 space-y-4 ml-14 border-t border-[#ECECEC]">
                    <li className="block border-b border-[#ECECEC] pb-6 mt-6 last:border-0 last:pb-0">
                      <div className="flex">
                        <div className="flex-none">
                          <div className="h-[72px] w-[72px] rounded-full mr-6">
                            <img
                              src={insIcon3}
                              alt=""
                              className="w-full block h-full object-contain rounded-full"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap justify-between mb-2">
                            <div>
                              <span className="text-xl  font-semibold text-black block mb-1">
                                Ferira Watson
                              </span>
                              <span className=" block">Oct 09, 2021</span>
                            </div>
                            <a
                              href="#"
                              className=" inline-flex px-3 py-1 rounded text-secondary bg-[#E3F9F6] hover:text-white hover:bg-secondary h-[35px]
                                    items-center space-x-2 leading-[1]"
                            >
                              <span className=" text-xl leading-[1] top-[3px] relative">
                                <iconify-icon
                                  icon="charm:forward"
                                  rotate="180deg"
                                ></iconify-icon>
                              </span>
                              <span className=" leading-[1]">Reply</span>
                            </a>
                          </div>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="block">
                  <div className="flex">
                    <div className="flex-none">
                      <div className="h-[72px] w-[72px] rounded-full mr-6">
                        <img
                          src={insIcon2}
                          alt=""
                          className="w-full block h-full object-contain rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between mb-2">
                        <div>
                          <span className="text-xl  font-semibold text-black block mb-1">
                            Ferira Watson
                          </span>
                          <span className=" block">Oct 09, 2021</span>
                        </div>
                        <a
                          href="#"
                          className=" inline-flex px-3 py-1 rounded text-secondary bg-[#E3F9F6] hover:text-white hover:bg-secondary h-[35px]
                            items-center space-x-2 leading-[1]"
                        >
                          <span className=" text-xl leading-[1] top-[3px] relative">
                            <iconify-icon
                              icon="charm:forward"
                              rotate="180deg"
                            ></iconify-icon>
                          </span>
                          <span className=" leading-[1]">Reply</span>
                        </a>
                      </div>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div> */}
            <div className=" mt-14">
              <h3 className=" mb-4">Leave A Reply</h3>
              <div>
                Your email address will not be published. Requires fields are
                marked*
              </div>
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-4 col-span-12">
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
              {/* <div className="wdiget widget-recent-post">
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
              </div> */}
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
                  {[
                    about3,
                    about4,
                    about5,
                    about6,
                    about7,
                    about8
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
                        <div
                          className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black 
                            bg-opacity-40
                                                    text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100"
                        >
                          <span className="scale-0 transition-all duration-150 group-hover:scale-100">
                            <iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
                          </span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
