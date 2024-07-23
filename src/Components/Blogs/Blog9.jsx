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
import mt2 from "../../assets/images/u12.png";

const Blog9 = () => {
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
                    <span> 14 July,19</span>
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
                How to keep your employees happy
                </h3>
                <p>We have often noticed cases where employees are not happy with the company. At times they are right; however, most of the time it’s just a case of over-expectation or not understanding the company strategy for long-term growth. Handling such team members is tough, time-consuming, and can easily distract you from your focus and business goals. This small seed of over-expectation or dissatisfaction can lead to multiple issues like mass absenteeism, mass attrition, and less focused employees. Plus, the chaos all around will add fuel to motivate people negatively who are well on track so far.</p>
            <p>The worst part – This happens with all companies irrespective of size, service, country, and brand. The best part – It has a solution.</p>
            <p>Let’s check out a few strategies that we apply. We are successful so far and doing great; however, we are open to learning more. Feel free to share all your strategies in the comments…</p>
            
            <h2 className="text-2xl mb-4">1. Communication – Talk to Them</h2>
            <p>I don’t even need to explain this point. We all are aware that miscommunication leads to negativity everywhere, and the weapon here is <strong>PROPER COMMUNICATION</strong>. Communicate transparently with your employees. Tell them everything and give them the right information.</p>
            <p>Wrong information might make them happy; however, it will lead to over-expectation and miscommunication. It’s just a temporary solution. Instead, be honest with your employees and explain to them your plans and future goals. Tell them where you are right now and where you are planning to reach. Avoid building castles in the air and stay grounded; it will help.</p>
            <p>Of course, you don’t need to open all the information like strategies, etc. However, be honest and turn it down politely by saying “We will share this when the time comes” instead of giving wrong information to make them happy. We often try to make our employees happy by giving them temporary solutions; however, we forget that it will give you temporary results. After a few weeks or a few months, the situation will be bad again, and you will have to work on it again to resolve it. Remember your main focus, along with business, should be happy employees.</p>
            
            <h2 className="text-2xl mb-4">2. Communication – Listen to Them</h2>
            <p>It’s very much possible that we misunderstand needs as over-expectations. At times, we are not in the position to solve their problems. Instead of accepting that they are right, we tag the issues with lines like “They are asking too much”, “Remember the competitors don’t give their employees such things”, “This will never happen.” A smart person has a different routine – they listen to the request first and then ask for time to think about it.</p>
            <p>If possible, they implement it; if not, they commit to a deadline. If something is against the company policy, then they explain the reason to employees in detail. Who will listen to your employees except you? Not listening to them and avoiding them is a pure insult to the time that they spend working in your company. Remember, they need a job, but it’s also you who needs them and thousands like them. If you can’t keep 1 or 10 of them happy, please don’t expect to have a team of thousands of happy employees. Their growth is in your hands, but it’s a double-edged sword – even your growth is in their hands.</p>
            
            <h2 className="text-2xl mb-4">3. Appreciation and Honors</h2>
            <p>Appreciation is the biggest source of motivation. It pushes them to cross their limits and get out of their comfort zone. When they are down but appreciated, they rise. Breaking the barriers of embitterment and helplessness during a tough phase becomes easier for employees with small appreciation.</p>
            <p>It comes in different formats – like R & R (Rewards and Recognition), personal emails from the CEO, appreciation during team meetings, etc. Let’s not forget that everyone goes through a bad phase many times during their work life. Who knows, your star performer is also going through the same? It’s preferred and appreciated to honor the star performer; however, you should not neglect the people who are going through a bad phase.</p>
            <p>The calculation is pretty simple. They are like your business – at times in profit and at times in loss. If you don’t appreciate them, you will miss a beautiful link to keep them happy when they need it most. They might leave the company after being demotivated. Two things might happen during this transition – (a) You will lose a great employee who could be the backbone of your company in the future. (b) The immediate effect – you will have to recruit the best replacement, train them, give your time, and most importantly, others will have to work until the new employee is ready.</p>
            <p>Making someone else work extra hours to get the job done because of your problem also leads to exhaustion, demotivation, and a monotonous schedule for someone who is doing great in your company.</p>
            <p>Apart from that, we also keep focusing on employee grooming which keeps the momentum going.</p>
                
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


export default Blog9;
