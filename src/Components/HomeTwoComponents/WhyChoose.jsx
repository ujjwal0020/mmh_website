import React from "react";
import whyimg from '../../assets/images/whychooseMMH.jpg';
import {  miniHeart, miniTarget } from "../../constant/images";

const WhyChoose = () => {
  return (
    <div className="about-area section-padding bg-[url('../images/all-img/section-bg-8.png')] bg-cover  bg-no-repeat bg-center">
      <div className="container">
        <div className="lg:grid grid-cols-12 lg:gap-10  space-y-6 lg:space-y-0">
          <div className="xl:col-span-5 lg:col-span-6 col-span-12">
            <div className="mini-title">Why Choose MMH</div>
            <h4 className="column-title ">
            {/* Transform Your <br/> Tele Calling Skills into  */}
            Driven by Principles, Focused on Your 
              <span className="shape-bg pb-4">Carrier Success</span>
            </h4>
            <div className=" mb-8">
            {/* "Choose MMH, where tele-calling isn't just a job—it's your gateway to meaningful work,
             professional growth, and unparalleled support in reaching your career aspirations." */}
             "We've built our business of serving your needs on some core principles.
             This we believe lets us serve your success and that ultimately is our goal."
            </div>
            <div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px] md:block">
                <div className="bg-white shadow-box7 p-6 rounded">
                  <div>
                    <img src={miniTarget} alt="" />
                  </div>
                  <div className=" font-semibold leading-[27px] text-black mt-3">
                    Quality Of Work
                  </div>
                </div>
                <div className="bg-white shadow-box7 p-6 rounded">
                  <div>
                    <img src={miniHeart} alt="" />
                  </div>
                  <div className=" font-semibold leading-[27px] text-black mt-3">
                  Available 24x7
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-8 lg:col-span-6 col-span-12 ">
            <img
              src={whyimg}
              alt=""
              className=" block w-full object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
