import React from "react";
import about3 from "../../assets/images/about mmh1.jpeg";

const About = () => {
  return (
    <div className="about-area section-padding">
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="xl:col-span-7 lg:col-span-6 col-span-12">
            <img src={about3} alt="" className=" block w-full" />
          </div>
          <div className="xl:col-span-5 lg:col-span-6 col-span-12">
            <div className="mini-title">About mmh</div>
            <h4 className="column-title ">
              We Provide The Best Tele Calling{" "}
              <span className="shape-bg">Services</span>
            </h4>
            <div className=" mb-8">
            We've built our business of serving your needs on some core principles.
            This we believe lets us serve your success and that ultimately is our goal.
            </div>
            <div className="space-y-8">
              <div className="progressbar-group">
                <div className="flex justify-between" data-width="90%">
                  <span className="block text-black font-semibold mb-2">
                    Success Rate
                  </span>
                  <span className=" block mb-2 text-black font-semibold">
                    90%
                  </span>
                </div>
                <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative">
                  <div
                    className="ani  h-[6px] bg-primary block absolute left-0 top-1/2 -translate-y-1/2 "
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="progressbar-group">
                <div className="flex justify-between" data-width="67%">
                  <span className="block text-black font-semibold mb-2">
                    Team Size
                  </span>
                  <span className=" block mb-2 text-black font-semibold">
                    100+
                  </span>
                </div>
                <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative">
                  <div
                    className="ani  h-[6px] bg-secondary block absolute left-0 top-1/2 -translate-y-1/2 "
                    style={{ width: "55%" }}
                  ></div>
                </div>
              </div>
              <div className="progressbar-group">
                <div className="flex justify-between" data-width="95%">
                  <span className="block text-black font-semibold mb-2">
                    Customer Reach Out
                  </span>
                  <span className=" block mb-2 text-black font-semibold">
                    85%
                  </span>
                </div>
                <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative">
                  <div
                    className="ani  h-[6px]  bg-tertiary block absolute left-0 top-1/2 -translate-y-1/2 "
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
