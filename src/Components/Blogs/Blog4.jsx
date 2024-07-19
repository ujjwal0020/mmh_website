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
import mt2 from "../../assets/images/tech.jpg";
// import mt3 from '../../assets/images/tsk.png';


const Blog4 = () => {
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
                    <span>Fahad Abdullah</span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={calender} alt="" />
                    <span> 11 July,21</span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={clockIcon} alt="" />
                    <span>5 Min Read</span>
                  </a>
                </div>
                <h3>
                Indian Virtual Assistant’s Not So Virtual After All
                </h3>
                <p className="mt-6">
                The term VIRTUAL is mostly used to distinguish something which is just conceptualized from something absolute physical in reality.
                When this term gets applied to remote workers it takes a form of a new term ‘Virtual Assistants’, ‘Virtual Secretaries’. With the birth of the world wide web and dot coms, it is possible for each and everyone who has access to it. To work, share, collaborate and work as a team on any ideas from any corner of the world. Nowadays the world seems smaller in front of ever-growing technology. It has enabled us to talk, meet & connect on the go. We can have a talk on the phone, communicate via email, attend meets, and conferences via video calling around the globe. Due to technology, it feels so real that the term Virtual Assistants is actually losing its virtuality because it is happening in real-time, real space, communication taking place between real persons 
                like we used to discuss in an office but just the cubicles missing or we can say, getting redefined.
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
                {/* <p>
                Well to answer this question it began in the era of the dot com boom. India became a frontline for outsourcings. 
                Various MNC set up their contact centers in India to support their various needs. 
                </p> */}
                {/* <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px] my-8">
                  <img src={bs2} alt="" />
                  <img src={} alt="" />
                </div> */}
                <h4 className="text-2xl mb-4">
                Well to answer this question it began in the era of the dot com boom. India became a frontline for outsourcings. 
                Various MNC set up their contact centers in India to support their various needs. 
                </h4>
                <p>
                Trainers from overseas would charge huge money to train the Indian staff to get accustomed to the accent, customs, lifestyle, and thought process of their clients.

The reason they chose Indian then and are choosing India even now is that the difference in labor rates was and is still lucrative in comparison to the US market. Apart from these, there were few more reasons like in India the staff they could hire is educated, are tech-savvy, good with computers and well versed with the tools to upscale the use of the same. They are hardworking, willing to learn, and are quick to adapt to the culture. The lack was the accent which can be tackled with training as English has been a second language. As schools start English lessons as early as pre-school though it has not been a success it’s on an acceptable standard. As this information got a pass on to mid to small-level businesses, they started trying their hands on hiring the services and to gain an advantage of hiring the required skill 
set have a cheaper workforce. And expanding the business by hiring them as small teams.
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
                        Assistance
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
                      Tele Calling
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

export default Blog4;
