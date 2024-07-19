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
  
  // rc2,
  // insIcon4,
  // insIcon5,
  // insIcon6,
} from "../../constant/images";

// import ContactForm from "../ContactForm";
import mt2 from '../../assets/images/myths.png';
import mt3 from '../../assets/images/myths2.jpg';
import mt4 from '../../assets/images/myths4.jpg';

const Blog5 = () => {
  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <div className="grid grid-cols-1 gap-[30px]">
          <div className="lg:col-span-8 col-span-12">
            <div className="bg-[#F8F8F8] rounded-md">
              <img src={mt2} alt="" className=" rounded-t-md mb-10" />
              <div className="px-10 pb-10">
                <div className="flex  flex-wrap  xl:space-x-10 space-x-5 mt-6 mb-6">
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={user3} alt="" />
                    <span>Faradh Abdhullah</span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={calender} alt="" />
                    <span> 15 July,21</span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={clockIcon} alt="" />
                    <span>5 Min Read</span>
                  </a>
                </div>
                <h3>
                MYTHS ABOUT VIRTUAL ASSISTANTS AND A GROUND REALITY PART 1
                </h3>
                <p className="mt-6">
                All of the industries and markets in the globe have a common factor – The Myth and the actual hidden Reality. We are discussing a few pointers and some of the most common myths associated with hiring a Virtual Assistant (VA). And comparing the services provided by 
                Freelancers and the services provided by a professional company that hires human resources as VIRTUAL ASSISTANTS.
                </p>
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
                <br />
                <h3>
                BUSINESS WHETHER IN STARTING STAGE OR IN A CELEBRATED SUCCESSFUL STAGE DON’T REQUIRE A VIRTUAL ASSISTANT.
                </h3>
                <p>
                Some of the young Entrepreneurs (early or later stage) think that they don’t require a VIRTUAL ASSISTANT. But in reality, each business requires a VA/s at every stage. It’s understandable that as an early-stage entrepreneur you are multitasking because of scarce resources, or to save costs for your company. Multitasking may force you to lose your focus or feel stressed by ticking a long list of to-dos for administrative purposes whereas you should be focusing more on marketing and selling your brand or in even a worst-case scenario you may lose your grasp on filtering out the prioritizing tasks and ranking them according to the importance for the moment. This for sure is going to delay your growth and success. By hiring a VA, you may delegate the administrative task and be on track and focus on marketing and sales, you can at least tick off the admin work from your list. If you want to personally work on
                 increasing your exposure and brand reach then focus on that your VA will take care of the other tasks.
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px] my-8">
                  <img src={mt3} alt="" />
                  <img src={mt4} alt="" />
                </div>
                <h3 className="text-2xl mb-4">
                ANYONE WITH AN INTERNET AND COMPUTER CAN BE A VIRTUAL ASSISTANT 
                </h3>
                <p>
                While many individuals are claiming to be Professional Virtual Assistants over the internet, the fact is not everyone can do justice to the tasks. It’s always easier said than done. A lot of them lack the skill to harness the whole output. It happens mostly with freelancers as it gets tough to find their credentials and prior work. But with a virtual service providing certified companies like ours we perform funneling of such persons and hire the right candidates and your prospect who will be verified by us for the needed skills and knowledge. Again, it is an advantage to go with a virtual service assistant providing company rather than working with some freelancer in uncertainty. Imagine another scenario where the Freelancer you hired is unable to fulfill the duties for a specific reason and leaves you in between without any notice. Your hiring and training cycle starts all over again. This is not the case with us. Here, our company is accountable for every task, and every VA that works for our client. We ensure the VA is appropriately taken care of, is motivated, and is getting the required training and an environment that keeps them going. In case he/she happens to quit for any reason, 
                it happens with proper notice and we provide the replacement at no cost. Isn’t that great?
                </p>
                {/* <ul className="list-disc marker:text-secondary space-y-4 mt-6">
                  <li className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul> */}
                <div className="grid xl:grid-cols-2 grid-cols-1  gap-5 md:mt-14 mt-8 ">
                  <ul className="flex items-center space-x-3 ">
                    <li className=" text-black font-semibold">Tags:</li>
                    <li>
                      <a
                        href="#"
                        className=" px-3 py-1  bg-white rounded hover:text-primary"
                      >
                        Myths
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" px-3 py-1  bg-white rounded hover:text-primary"
                      >
                        Virtual Assistance
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href="#"
                        className=" px-3 py-1  bg-white rounded hover:text-primary"
                      >
                        Design
                      </a>
                    </li> */}
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
            {/* <div className=" mt-14">
              <h3 className=" mb-4">Leave A Reply</h3>
              <div>
                Your email address will not be published. Requires fields are
                marked*
              </div>
              <ContactForm />
            </div> */}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Blog5;