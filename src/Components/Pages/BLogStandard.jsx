/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  bThumb1,
  bThumb2,
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
  search,
} from "../../constant/images";
import about3 from "../../assets/images/landing_page6.jpg";
import about4 from "../../assets/images/landing_page1.webp";
import about5 from "../../assets/images/landing_page2.avif";
import about6 from "../../assets/images/tech.jpg";
import about7 from '../../assets/images/beprep.png';
import about8 from '../../assets/images/landing_page3.webp';

import mt from '../../assets/images/whatsapp.webp';
import mt1 from '../../assets/images/sales.webp';
import mt2 from '../../assets/images/crm1.webp';
import mt3 from '../../assets/images/buisness.png';

// ../HomeTwoComponents/Footer
import Header from "../Header";
// import PageBanner from "../PageBanner";
import Footer from "../HomeTwoComponents/Footer";
const blogPosts = [
  {
    image: mt2,
    title: "A 5-Minute Guide on Operational CRM You Need to Know in 2024",
    content: "Running a business isn’t as straightforward as it looks. You’re constantly juggling multiple tasks, from sales and marketing to research and customer support. These demanding and repetitive tasks can quickly drain your energy and that of your team. But with an operational CRM, you can simplify and streamline your workflow which means it does all the heavy lifting, allowing you and your team to focus on the strategy side of things.But there’s more to operational CRM than just automation. Keep reading to find out more about this particular type of CRM and understand how exactly it benefits your business. ",
    date: "17 May, 24"
  },
  {
    image: mt1,
    title: "What is Sales Automation? Ultimate Guide [+ Examples]",
    content: "Sales automation refers to automating all your routine sales tasks, from tracking leads and scheduling follow-ups to analysing sales data and managing customer interactions, so that Your agents don’t have to deal with those tasks.The chances of human errors are reduced to zero.Your team’s collective time and energy are better spent on tasks that truly matter.A sales automation tool makes the process of selling faster, more efficient and less prone to errors. ",
    date: "12 July, 24"
  },
  {
    image: mt,
    title: "Setup WhatsApp Community in 4 Clicks (With Tips for High Engagement)",
    content: "WhatsApp Community or WhatsApp Community group is basically an upgrade to the existing group chat feature on the app that allows you to manage and communicate with multiple groups under a single umbrella. It’s like having a dedicated space where all your customer groups can come together, without the clutter and limitations of traditional group chats.Imagine being able to send a message that can reach different WhatsApp groups without having to post it individually in each group. That’s the convenience WhatsApp Community offers, making it an invaluable tool for anyone looking to maintain and send bulk messages without any hassle.",
    date: "1 march, 24"
  },
  {
    image: bThumb1,
    title: "Indian Virtual Assistant’s not so virtual after all",
    content: `When this term gets applied to remote workers it takes a form of a new term ‘Virtual Assistants’, 
              ‘Virtual Secretaries’. With the birth of the world wide web and dot coms, it is possible for each 
              and everyone who has access to it. To work, share, collaborate and work as a team on any ideas from 
              any corner of the world. Nowadays the world seems smaller in front of ever-growing technology. 
              It has enabled us to talk, meet & connect on the go. We can have a talk on the phone, communicate via email, 
              attend meets, and conferences via video calling around the globe. Due to technology, it feels so real that the
              term Virtual Assistants is actually losing its virtuality because it is happening in real-time, real space, 
              communication taking place between real persons like we used to discuss in an office but just the cubicles missing or we can say, getting redefined.`,
    date: "11 July, 21"
  },
  {
    image: bThumb2,
    title: "MYTHS ABOUT VIRTUAL ASSISTANTS AND A GROUND REALITY",
    content: "All of the industries and markets in the globe have a common factor – The Myth and the actual hidden Reality. We are discussing a few pointers and some of the most common myths associated with hiring a Virtual Assistant (VA).And comparing the services provided by Freelancers and the services provided by a professional company that hires human resources as VIRTUAL ASSISTANTS.",
     date: "15 July, 21"
  },
  {
    image: mt3,
    title: "Here is why your Business/Start-up is guaranteed to fail!",
    content: "Starting a business or a startup is an exciting venture, but it's fraught with challenges that can lead to failure if not addressed. One of the most critical reasons businesses fail is the lack of a clear value proposition. Without a unique selling point, your business will struggle to stand out in a crowded market. Additionally, poor financial management and inadequate funding can cripple your startup before it even gets off the ground. A failure to understand your target market and adapt to their needs can also spell disaster. Lastly, ineffective leadership and the inability to build a cohesive team can lead to internal conflicts and a lack of direction, ultimately causing your business to fail. Understanding and mitigating these risks is crucial for any startup's success.",
    date: "07 September, 19"
  },
  
];

const BLogStandard = () => {
  return (
    <>
      <Header />
      {/* <PageBanner title={"Blog Standard"} pageName={"Blog Standard"} /> */}
      <div className="nav-tab-wrapper tabs  section-padding">
        <div className="container">
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="lg:col-span-8 col-span-12">
            <div className="grid grid-cols-1 gap-[30px]">
      {blogPosts.map((post, index) => (
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
              <a
                href="single-blog"
                className="hover:text-primary transition duration-150"
              >
                {post.title}
              </a>
            </h3>
            <p>{post.content}</p>
            <div className="flex lg:space-x-10 space-x-5 mt-6">
              <a className="flex items-center space-x-2" href="blog-single.html">
                <img src={calender} alt="" />
                <span>{post.date}</span>
              </a>
              <a className="flex items-center space-x-2" href="single-blog">
                {/* <img src={clockIcon} alt="" /> */}
                {/* <span>3 Min Read</span> */}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
              <div className="pagination mt-14">
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
                        <span>Development (23)</span>
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
                        <span>Art &amp; Design (45)</span>
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
                        <span>Data Science (14)</span>
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
                        <span>Data Science (14)</span>
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
                        <span>Technology (28)</span>
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
                        <span>It Management (34)</span>
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
                        Design
                      </a>
                    </li>

                    <li className="mr-2 mb-2">
                      <a
                        href="#"
                        className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                      >
                        Students
                      </a>
                    </li>

                    <li className="mr-2 mb-2">
                      <a
                        href="#"
                        className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                      >
                        Teachers
                      </a>
                    </li>

                    <li className="mr-2 mb-2">
                      <a
                        href="#"
                        className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                      >
                        classNameroom
                      </a>
                    </li>

                    <li className="mr-2 mb-2">
                      <a
                        href="#"
                        className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                      >
                        Online
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
                        Book
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
                            className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40
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
      <Footer />
    </>
  );
};

export default BLogStandard;
