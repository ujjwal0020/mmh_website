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
  const tags = ["Business", "Sales", "Marketing"];
  const socialIcons = [fbIcon, pnIcon, twIcon, insIcon];
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
                <p>The term VIRTUAL is mostly used to distinguish something which is just conceptualized from something absolute physical in reality. When this term gets applied to remote workers, it takes the form of new terms like ‘Virtual Assistants’ and ‘Virtual Secretaries’. With the birth of the world wide web and dot coms, it is possible for everyone who has access to it to work, share, collaborate, and work as a team on any ideas from any corner of the world. Nowadays, the world seems smaller in front of ever-growing technology. It has enabled us to talk, meet, and connect on the go. We can have a talk on the phone, communicate via email, attend meetings, and conferences via video calling around the globe. Due to technology, it feels so real that the term Virtual Assistants is actually losing its virtuality because it is happening in real-time, real space, with communication taking place between real persons like we used to discuss in an office but just the cubicles missing or, we can say, getting redefined.</p>

<h2 className="text-2xl mb-4">How it all started?</h2>
<p>Well, to answer this question, it began in the era of the dot com boom. India became a frontline for outsourcing. Various MNCs set up their contact centers in India to support their various needs.</p>
<p>Trainers from overseas would charge huge money to train the Indian staff to get accustomed to the accent, customs, lifestyle, and thought process of their clients.</p>
<p>The reason they chose India then and are choosing India even now is that the difference in labor rates was and is still lucrative in comparison to the US market. Apart from this, there were a few more reasons like in India the staff they could hire is educated, tech-savvy, good with computers, and well-versed with the tools to upscale the use of the same. They are hardworking, willing to learn, and quick to adapt to the culture. The lack was the accent, which can be tackled with training as English has been a second language. Schools start English lessons as early as pre-school, though it has not been a complete success, it’s on an acceptable standard. As this information passed on to mid to small-level businesses, they started trying their hands on hiring the services and gaining the advantage of hiring the required skill set at a cheaper workforce. And expanding the business by hiring them as small teams.</p>

<p>But nowadays the nature in which we work has changed dramatically with the introduction of Cloud Computing. It is possible to share, store, and collaborate everything with anyone. This enabled in-house teams and remote teamwork collectively. Technology has enabled the usage of sophisticated and newer software and tools that have broken the barriers of the typical workspace and made every corner of the world a workplace collectively. It also developed the area and scope for everyone to leverage the win-win situation for everyone.</p>

<p>Globalization and Technology surely have changed the current scenario of the world as it has changed the skillsets available. Every passing year, students from Engineering, Medical, and Commerce streams are graduating from India. Due to the dense reach of the internet to the masses, they are well-prepared for every task put ahead of them. Due to this, you don’t have to provide in-depth training to your potential workforce. This is the impact of the Internet on everyone. You have the opportunities to explore, review, test, and just hire them.</p>

<h2 className="text-2xl mb-4">How has MMH tapped into the skill market?</h2>
<p>By knowing the fact that there is never or there will neither be a shortage of skilled staff. Apart from that, there is always something that is missing, and we are tapping in for the missing part. That extra little help, that extra little push that will take you and your business places. Before allotting the Virtual Assistants (task officers as we fondly call them) to any of the clients, they go through the training and skill enhancement program that makes them skillful, sufficient, and successful in handling tasks coming their way. Assistants who are assigned to work with clients are full-time employees of TASKPAPA, not freelancers. This is an advantage that our clients get. The job of a Virtual Assistant is to perform multitasking jobs with utmost efficiency and effectiveness. As the world is changing, so are the definitions of productivity also changing. It can’t be defined in few points what our task officers can do and what they can’t do.</p>

<p>Globalization is changing our views and terms for the workspace, workforce, team building, and handling simple or complex projects. Going virtual is not a choice anymore as it used to be. It’s the need of the hour.</p>

<p>Are you gaining the advantages that this new era has to offer?</p>
<p>Contact us if you would like to have an idea about how we can streamline your work and add skills, advantages, and value which is more productive and more cost-effective for your business and personal growth.</p>
                <div className="flex items-center justify-between mt-12 mb-8 border-b pb-8">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">Tags:</span>
                    {tags.map((tag, index) => (
                      <a key={index} href="#" className="text-primary font-semibold text-lg">
                        {tag}
                      </a>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">Share:</span>
                    {socialIcons.map((icon, index) => (
                      <a key={index} href="#">
                        <img src={icon} alt={`Share on ${icon.alt}`} />
                      </a>
                    ))}
                  </div>
                </div>
                {/* <div className="bg-[#FFFFFF] p-10 rounded-md">
                  <h3 className="mb-4">Leave A Reply</h3>
                  <form className="grid grid-cols-1 gap-[20px]">
                    <textarea
                      name="comment"
                      className="p-4 border border-gray-300 rounded-md"
                      rows="5"
                      placeholder="Write your comment here..."
                    ></textarea>
                    <input
                      type="text"
                      name="name"
                      className="p-4 border border-gray-300 rounded-md"
                      placeholder="Name"
                    />
                    <input
                      type="email"
                      name="email"
                      className="p-4 border border-gray-300 rounded-md"
                      placeholder="Email"
                    />
                    <button type="submit" className="bg-primary text-white p-4 rounded-md">
                      Submit
                    </button>
                  </form>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="lg:col-span-4 col-span-12">
            <div className="bg-[#F8F8F8] p-6 rounded-md">
              <h3 className="mb-6">Recent Posts</h3>
              <div className="flex flex-col space-y-4">
    
                <a href="#" className="flex items-center space-x-4">
                  <img src={mt2} alt="Recent post 1" className="w-20 h-20 object-cover rounded-md" />
                  <span>How to Improve Sales Using Operational CRM</span>
                </a>
                <a href="#" className="flex items-center space-x-4">
                  <img src={mt2} alt="Recent post 2" className="w-20 h-20 object-cover rounded-md" />
                  <span>Top 10 CRM Tools for Small Businesses</span>
                </a>
              </div>
            </div>
            <div className="bg-[#F8F8F8] p-6 rounded-md mt-6">
              <h3 className="mb-6">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
              
                <a href="#" className="text-primary font-semibold">CRM</a>
                <a href="#" className="text-primary font-semibold">Sales</a>
                <a href="#" className="text-primary font-semibold">Marketing</a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Blog4;
