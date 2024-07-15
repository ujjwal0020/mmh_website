import { Disclosure } from "@headlessui/react";
import React from "react";
import { faq } from "../../constant/images";

const Accordion = () => {
  return (
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
                      <span>What industries you serve?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                    We have professionals and experts for all industries working with us. To name few we serve: Advertising, Legal, Finance, IT, Management, Call Centre,
                     Real Estate, Graphics and Designing and many more sectors. We also serve freelancers, SME and individual Entrepreneurs.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>How do you ensure my data is safe?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                    We are an ISO 27001:2013 certified company and have all policies, hardware, software in place to ensure there is no compromise with data security.
                     Infact there have been NO data security violation since the incenpion of the company.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure  >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>How do we communicate and work together?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                    We use email, telephone, Skype, messenger, screen-sharing and project management tools to communicate with our clients.
                     We will do our best to accommodate your business and your preferred style of communication when delegating tasks.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>Is there any plan Upgrade and Downgrade fee?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                    No, there is no Plan Upgrade or Downgrade fee. You just need to let us know about a change in plan a week before your existing plan
                     is about to expire and we will move you to a new plan without any fee.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>


            </ul>
          </div>
          <div>
            <img src={faq} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
