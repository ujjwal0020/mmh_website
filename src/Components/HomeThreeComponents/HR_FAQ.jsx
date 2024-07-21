import { Disclosure } from "@headlessui/react";
import React from "react";
// import { faq } from "../../constant/images";
import faq from "../../assets/images/faq1.jpeg";
import Header from "../Header";
import Footer from "../HomeTwoComponents/Footer";

const HR_FAQ = () => {
  return (
    <>
    <Header/>
    <div className="section-padding  bg-white bg-[url('../images/all-img/section-bg-15.png')] bg-bottom  bg-cover bg-no-repeat">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
          <div>
            <div className="mini-title">Frequently Asked Question</div>
            <div className="column-title ">
              General <span className="shape-bg">Questions</span>
            </div>
            <ul className="list accrodains space-y-[30px] lg:max-w-[470px]">
              <Disclosure >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>How are sales targets set, and how often are they reviewed?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                    Sales targets are set based on historical performance, market conditions, and company objectives, with input from sales teams to ensure realism. Targets are typically reviewed quarterly or annually to assess performance and make adjustments based
                     on evolving conditions and feedback. This process helps keep targets aligned with strategic goals and market dynamics.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>What are the company’s policies on remote work and flexible hours?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                    Company policies on remote work and flexible hours typically outline eligibility criteria, such as job roles or performance standards, and specify how to request these arrangements. They also detail the approval process, expectations for communication and productivity, and any equipment or support provided. These policies ensure that remote and flexible work aligns
                     with the company’s operational needs while supporting employee work-life balance.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure  >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>What incentives or bonuses are available for exceeding sales goals?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                    Incentives and bonuses for exceeding sales goals often include performance-based commissions, cash bonuses, and recognition awards. Companies may also offer additional perks such as gift cards, trips, or tickets to events. These rewards are designed to motivate and recognize top performers, 
                    aligning their efforts with the company’s sales objectives.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>How do I access training and development opportunities?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                    To access training and development opportunities, check internal resources like the company intranet or speak with your manager for recommendations. Contact HR for information on available programs, and explore external platforms for additional courses.
                     Request support or funding if needed for external training.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              


            </ul>
          </div>
          <div className="flex justify-center">
            <img src={faq} alt="" />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default HR_FAQ;
