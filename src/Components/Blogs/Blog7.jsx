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
import mt2 from "../../assets/images/quotes.png";

const Blog7 = () => {
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
                    <span> 24 August,19</span>
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
                25 Quotes you must read to ignite the Entrepreneur in you!
                </h3>
                <h1 className="text-2xl mb-4">Inspirational Quotes</h1>
    <blockquote>
        <p> "Success is walking from failure to failure with no loss of enthusiasm."</p>
        <footer class="font-bold text-black">– Winston Churchill</footer>
    </blockquote>
    <blockquote>
        <p>"If you are not willing to risk the usual, you will have to settle for the ordinary."</p>
        <footer class="font-bold text-black">– Jim Rohn</footer>
    </blockquote>
    <blockquote>
        <p>"Fall seven times and stand up eight."</p>
        <footer class="font-bold text-black">– Japanese Proverb</footer>
    </blockquote>
    <blockquote>
        <p>"If you can dream it, you can do it."</p>
        <footer class="font-bold text-black">– Walt Disney</footer>
    </blockquote>
    <blockquote>
        <p>"Go confidently in the direction of your dreams. Live the life you have imagined."</p>
        <footer class="font-bold text-black">– Henry David Thoreau</footer>
    </blockquote>
    <blockquote>
        <p>"Everything you’ve ever wanted is on the other side of fear."</p>
        <footer class="font-bold text-black">– George Addair</footer>
    </blockquote>
    <blockquote>
        <p>"If you want to lift yourself, lift someone else."</p>
        <footer class="font-bold text-black">– Booker T. Washington</footer>
    </blockquote>
    <blockquote>
        <p>"It is never too late to be what you might have been."</p>
        <footer class="font-bold text-black">– George Eliot</footer>
    </blockquote>
    <blockquote>
        <p>"It does not matter how slowly you go as long as you do not stop."</p>
        <footer class="font-bold text-black">– Confucius</footer>
    </blockquote>
    <blockquote>
        <p>"You can’t use up creativity. The more you use, the more you have."</p>
        <footer class="font-bold text-black">– Maya Angelou</footer>
    </blockquote>
    <blockquote>
        <p>"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it."</p>
        <footer class="font-bold text-black">– Henry Ford</footer>
    </blockquote>
    <blockquote>
        <p>"The only way to do great work is to love what you do."</p>
        <footer class="font-bold text-black">– Steve Jobs</footer>
    </blockquote>
    <blockquote>
        <p>"You must be the change you wish to see in the world."</p>
        <footer class="font-bold text-black">– Mahatma Gandhi</footer>
    </blockquote>
    <blockquote>
        <p>"You only live once, but if you do it right, once is enough."</p>
        <footer class="font-bold text-black">– Mae West</footer>
    </blockquote>
    <blockquote>
        <p>"Failure is another steppingstone to greatness."</p>
        <footer class="font-bold text-black">– Oprah Winfrey</footer>
    </blockquote>
    <blockquote>
        <p>"Some people want it to happen, some wish it would happen, others make it happen."</p>
        <footer class="font-bold text-black">– Michael Jordan</footer>
    </blockquote>
    <blockquote>
        <p>"If you love what you do and are willing to do what it takes, it’s within your reach. And it’ll be worth every minute you spend alone at night, thinking and thinking about what it is you want to design or build."</p>
        <footer class="font-bold text-black">– Steve Wozniak</footer>
    </blockquote>
    <blockquote>
        <p>"The best way of learning about anything is by doing."</p>
        <footer class="font-bold text-black">– Richard Branson</footer>
    </blockquote>
    <blockquote>
        <p>"Business opportunities are like buses, there’s always another one coming."</p>
    </blockquote>
    <blockquote>
        <p>"We must accept finite disappointment, but never lose infinite hope."</p>
        <footer class="font-bold text-black">– Martin Luther King, Jr.</footer>
    </blockquote>
    <blockquote>
        <p>"If you want to be happy, set a goal that commands your thoughts, liberates your energy, and inspires your hopes."</p>
        <footer class="font-bold text-black">– Andrew Carnegie</footer>
    </blockquote>
    <blockquote>
        <p>"If something is important enough, even if the odds are against you, you should still do it."</p>
        <footer class="font-bold text-black">– Elon Musk</footer>
    </blockquote>
    <blockquote>
        <p>"You are not your resume, you are your work."</p>
        <footer class="font-bold text-black">– Seth Godin</footer>
    </blockquote>
    <blockquote>
        <p>"To be successful, you have to have your heart in your business, and your business in your heart."</p>
        <footer class="font-bold text-black">– Sr. Thomas Watson</footer>
    </blockquote>
    <blockquote>
        <p>"Please think about your legacy, because you’re writing it every day."</p>
        <footer class="font-bold text-black">– Gary Vaynerchuck</footer>
    </blockquote>
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


export default Blog7;
