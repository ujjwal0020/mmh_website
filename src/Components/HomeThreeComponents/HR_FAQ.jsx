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
            <br />
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
              <Disclosure >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>What is the commission structure for sales positions?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
              
The commission structure for sales positions usually combines a base salary with a percentage of sales made, which can vary by product or service. Tiered commissions,
 where rates increase as sales targets are exceeded, and performance bonuses may also be included.
                    </Disclosure.Panel>
                  </li>
                )}

             
              </Disclosure>
              <Disclosure >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>What is the policy on remote work or flexible schedules for sales staff?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                    The policy on remote work or flexible schedules for sales staff typically includes eligibility criteria, application procedures, and expectations for communication and productivity. It outlines how to request these arrangements and any
                     provided support or equipment to ensure sales goals are met while maintaining flexibility.
                    </Disclosure.Panel>
                  </li>
                )}

             
              </Disclosure>
              <Disclosure >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>How do sales teams collaborate with other departments, such as marketing or customer service?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                    
Sales teams collaborate with marketing and customer service through regular meetings, shared goals, and integrated communication channels. They align campaigns, address customer feedback,
 and ensure a seamless customer experience using collaboration tools and cross-functional projects.
                    </Disclosure.Panel>
                  </li>
                )}

             
              </Disclosure>
              <Disclosure >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>How are leads and accounts assigned to sales representatives?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                    Leads and accounts are typically assigned to sales representatives based on factors like territory, industry, product specialization, and workload balance. Assignment methods may include round-robin distribution,
                     geographic location, or aligning leads with reps' expertise to maximize efficiency and success rates.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
             
              <Disclosure >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>What is the policy on sales quotas and how are they adjusted if needed?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                   
The policy on sales quotas involves setting specific targets for sales representatives, typically based on historical data, market conditions, and company goals. Quotas are reviewed regularly and can be adjusted for factors such as market changes, economic conditions, or individual performance. 
Adjustments ensure that targets remain realistic and achievable while driving company objectives.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
            
              <Disclosure >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>What support is available for new sales hires to get up to speed quickly?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                    New sales hires receive support through comprehensive onboarding programs, which include training sessions on products, sales techniques, and company processes. They are often paired with mentors or experienced team members for guidance and have access to resources 
                    like sales tools, documentation, and ongoing training to help them quickly become effective in their roles.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              


            </ul>
          </div>
          <div className="flex  h-full">
  <img src={faq} alt="FAQ" />
</div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default HR_FAQ;
