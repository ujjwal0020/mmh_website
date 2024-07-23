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
import mt2 from "../../assets/images/ujk.png";

const Blog8 = () => {
  const tags = ["Business", "Sales", "Marketing"];
  const socialIcons = [fbIcon, pnIcon, twIcon, insIcon];
  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <div className="grid grid-cols-1 gap-[30px]">
          <div className="lg:col-span-8 col-span-12">
            <div className="bg-[#F8F8F8] rounded-md">
            <img src={mt2} alt="" className="rounded-t-md mb-10 mx-auto block" />
              <div className="px-10 pb-10">
                <div className="flex  flex-wrap  xl:space-x-10 space-x-5 mt-6 mb-6">
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={user3} alt="" />
                    <span>Amelia</span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={calender} alt="" />
                    <span> 19 August,19</span>
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
                How to get clients organically for your business
                </h3>
                <p>Getting clients organically is challenging but achievable with a well-thought-out strategy. Here are some effective ways to attract clients without heavy financial investments:</p>
            <h2 className="text-2xl mb-4">1. Create a Company Website</h2>
            <p><strong>Purpose:</strong> Your website serves as your online identity. It should provide clear information about your company, team, products, mission, and vision.</p>
            <p><strong>Implementation:</strong></p>
            <ul>
                <li>Start with a simple HTML website.</li>
                <li>Ensure it has a clean, professional design.</li>
                <li>Include essential details like contact number and address. Consider a vanity number for added professionalism.</li>
                <li>Cost: Minimal. Domain and hosting can be affordable.</li>
            </ul>
            <h2 className="text-2xl mb-4">2. Establish Social Media Presence</h2>
            <p><strong>Platforms:</strong> Focus on Facebook, Twitter, and LinkedIn.</p>
            <p><strong>Implementation:</strong></p>
            <ul>
                <li>Create company pages on these platforms.</li>
                <li>Post relevant content, including offers, updates, and company news.</li>
                <li>Use engaging visuals like images and infographics.</li>
                <li>Encourage shares, likes, and retweets to expand your reach.</li>
                <li>Cost: Free.</li>
            </ul>
            <h2 className="text-2xl mb-4">3. Utilize Email Marketing</h2>
            <p><strong>Purpose:</strong> Maintain direct communication with potential leads and existing subscribers.</p>
            <p><strong>Implementation:</strong></p>
            <ul>
                <li>Build an email list of opt-in leads.</li>
                <li>Send high-quality content and offers.</li>
                <li>Provide direct contact information for quick responses.</li>
                <li>Limit emails to 1-2 per week to avoid overwhelming recipients.</li>
                <li>Cost: Low, depending on email marketing tools.</li>
            </ul>
            <h2 className="text-2xl mb-4">4. Write and Share Blogs</h2>
            <p><strong>Purpose:</strong> Establish your expertise and improve SEO.</p>
            <p><strong>Implementation:</strong></p>
            <ul>
                <li>Regularly update your blog with unique, informative content.</li>
                <li>Use tools like Google Keywords Tool for SEO optimization.</li>
                <li>Keep blogs concise and engaging, with images to enhance readability.</li>
                <li>Share blogs on social media to drive traffic.</li>
                <li>Cost: Minimal. Can be done in-house.</li>
            </ul>
            <h2 className="text-2xl mb-4">5. Invest in Google Ads</h2>
            <p><strong>Purpose:</strong> Increase visibility through targeted ads.</p>
            <p><strong>Implementation:</strong></p>
            <ul>
                <li>Start with a modest budget (e.g., $5/day).</li>
                <li>Learn how to create effective ads through resources like Neil Patel or Google Ads tutorials.</li>
                <li>Monitor and adjust ads for optimal performance.</li>
                <li>Cost: Low to moderate, depending on your budget.</li>
            </ul>
            <h2 className="text-2xl mb-4">6. Network Actively</h2>
            <p><strong>Purpose:</strong> Build relationships and discover potential opportunities.</p>
            <p><strong>Implementation:</strong></p>
            <ul>
                <li>Attend local networking events.</li>
                <li>Carry informative business cards.</li>
                <li>Engage in meaningful conversations and exchange business cards.</li>
                <li>Follow up with contacts for potential collaborations or sales.</li>
                <li>Cost: Typically free or low cost for events.</li>
            </ul>
            <p>By consistently applying these strategies, you can gradually build a solid client base without a significant financial outlay. Patience and persistence are key to organic growth.</p>
    
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


export default Blog8;
