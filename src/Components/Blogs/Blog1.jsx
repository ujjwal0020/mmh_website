/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  user3,
  calender,
  clockIcon,
  fbIcon,
  pnIcon,
  twIcon,
  insIcon,
} from "../../constant/images";
import mt2 from '../../assets/images/crm1.webp';

const Blog1 = () => {
  const postDetails = [
    { img: user3, text: 'Amelia' },
    { img: calender, text: '17 May, 24' },
    { img: clockIcon, text: '5 Min Read' },
  ];

  const tags = ["Business", "Sales", "Marketing"];
  const socialIcons = [fbIcon, pnIcon, twIcon, insIcon];

  return (
    <div className="nav-tab-wrapper tabs section-padding">
      <div className="container">
        <div className="grid grid-cols-1 gap-[30px]">
          <div className="lg:col-span-8 col-span-12">
            <div className="bg-[#F8F8F8] rounded-md">
              <img src={mt2} alt="Operational CRM Overview" className="rounded-t-md mb-10" />
              <div>
                <div className="flex flex-wrap xl:space-x-10 space-x-5 mt-6 mb-6">
                  {postDetails.map((detail, index) => (
                    <a key={index} className="flex items-center space-x-2" href="#">
                      <img src={detail.img} alt="" />
                      <span>{detail.text}</span>
                    </a>
                  ))}
                </div>
                <h3 className="text-2xl mb-4">A 5-Minute Guide on Operational CRM You Need to Know in 2024</h3>
                <p>
                  Running a business isn’t as straightforward as it looks. You’re constantly juggling multiple tasks, from sales and marketing to research and customer support. These demanding and repetitive tasks can quickly drain your energy and that of your team. But with an operational CRM, you can simplify and streamline your workflow which means it does all the heavy lifting, allowing you and your team to focus on the strategy side of things.
                </p>
                <p>
                  But there’s more to operational CRM than just automation. Keep reading to find out more about this particular type of CRM and understand how exactly it benefits your business.
                </p>
                <h2 className="text-2xl mb-4">What is operational CRM?</h2>
                <p>
                  An operational CRM (customer relationship management) system streamlines and automates your marketing, sales and customer service workflows; enhances the customer experience; and increases conversions by helping manage and analyse customer interactions.
                </p>
                <p>Popular operational CRM software like TeleCRM can help your business in multiple ways.</p>
                <ul>
                  <li>Features like Autodialer, Leaderboard, WhatsApp bulk broadcasting, etc., help you streamline various business operations and reduce the workload of your team(s) significantly.</li>
                  <li>It stores lead and customer data in a single system, enabling easy access for you and your team.</li>
                  <li>You can monitor the performance of every single member of your sales and customer support teams from a single dashboard.</li>
                </ul>
                <h2 className="text-2xl mb-4">Which business functions can be streamlined by operational CRMs?</h2>
                <p>Operational CRMs typically help streamline three main business functions: sales, marketing and customer service. Let’s see how.</p>
                <h3 className="text-2xl mb-4">Sales</h3>
                <p>Sales is the backbone of any business, be it B2B or B2C. Your sales agents need to be on top of their game so that your sales numbers keep improving every quarter. And this is only possible if agents can augment their productivity with the latest tools and technologies.</p>
                <p>With operational CRM, you can efficiently automate all your sales operations, from sending follow-up messages to setting call reminders and addressing customer queries. This level of automation ensures you never miss out on any potential business opportunities.</p>
                <h4 className="text-2xl mb-4">Use case #1: Lead management and distribution</h4>
                <p>Managing leads is still quite a challenge for most businesses. You get leads from various sources — Google Ads, your website, Facebook ads and so on. Ideally, you would want all these leads collected in one place so you can easily share them with your team. But often they end up getting captured in multiple spreadsheets. Then you have to hand them off to your team members manually, making the whole process of assigning leads a nightmare. With an operational CRM, however, you can easily assign your most important leads to your preferred team members.</p>
                <p><strong>Automatic lead distribution in TeleCRM app</strong><br /> If one of your sales reps has a proven record of successfully handling real estate leads, you probably want them to be the first point of contact for real estate leads. This can be easily achieved through TeleCRM’s automatic lead distribution feature, which automatically assigns leads to sales reps based on predefined metrics. In other words, leads are quickly assigned to the right agents, improving response times and maximising the chances of conversion.</p>
                <h4 className="text-2xl mb-4">Use case #2: Telesales management</h4>
                <p>Your sales team interacts with tens, if not hundreds, of leads every day, follows up with them diligently and even handles customer queries without batting an eye. But this process is quite exhaustive, as agents have to constantly juggle between Excel or Google Sheets to fetch the contact information of leads. But with an operational CRM, your agents don’t have to face these hurdles as the software optimises the process through automation, reducing the manual work done by your team.</p>
                <p><strong>Autodialer feature in TeleCRM helps you make calls directly from the app with less manual work</strong><br /> Did you know? TeleCRM’s Autodialer feature lets your sales team make calls directly from a centralised hub without manually entering or looking up phone numbers. With this capability, your agents can improve engagement, increase productivity and handle customer queries effectively, ultimately, leading to more closed deals. Plus, you can leverage the automatic call recording feature to analyse past conversations and refine your sales strategies.</p>
                <h3 className="text-2xl mb-4">Marketing</h3>
                <p>Marketing is the engine that drives visibility and interest in your business, whether you’re reaching out to other businesses (B2B) or directly to consumers (B2C). It’s all about understanding the problems faced by potential customers and convincing them that your product or service is the solution they’ve been seeking.</p>
                <p>However managing campaigns, keeping track of customer responses and adjusting strategies across multiple channels can be quite complex and time-consuming. This is where an operational CRM system can come in handy with features that can help automate and refine your marketing campaigns.</p>
                <h4 className="text-2xl mb-4">Use case #1: Bulk messaging campaigns via WhatsApp</h4>
                <p>Reaching your audience where they are most active is key to the success of your marketing campaigns. WhatsApp is not just a popular messaging app in India, but also much more effective than email and SMS in terms of marketing. However, sending messages to a large audience on WhatsApp is more complex due to its severe restrictions and privacy policies, not to mention the amount of manual effort required from your marketing team.</p>
                <p><strong>Send bulk messages on WhatsApp using TeleCRM's WhatsApp CRM</strong><br /> An operational CRM system can integrate with WhatsApp Cloud API, allowing you to manage and automate your messaging campaigns on WhatsApp directly from the CRM itself. For instance, TeleCRM’s WhatsApp CRM enables your marketing team to send bulk marketing messages via WhatsApp. Now you can keep your prospects updated on all your upcoming offers, new product launches or the latest product updates with minimal effort and without the risk of getting your number blocked or banned.</p>
                <h4 className="text-2xl mb-4">Use case #2: Targeted messaging</h4>
                <p>In marketing, it’s crucial to reach the right people with your messages. Your campaigns need to pinpoint and address your prospect’s specific needs to turn them into valuable leads for your sales team. However, crafting unique and innovative messages for different audiences and sending them out manually can get overwhelming really fast. This is where an operational CRM can make a big difference. It allows you to send personalised messages automatically to various segments of your audience, simplifying distribution.</p>
                <p><strong>Did you know?</strong> With TeleCRM’s pre-built custom templates, you can deliver consistent and tailored messaging across all communication channels efficiently. For instance, a real estate agency can create distinct templates for different property types and price ranges, ensuring prospects receive only relevant communication based on their preferences.</p>
                <h3 className="text-2xl mb-4">Customer service</h3>
                <p>Customer service is the lifeline of your business and is crucial for maintaining customer satisfaction and loyalty. It involves not just addressing complaints and queries but also proactively ensuring that your existing customers feel valued and taken care of. However, managing these aspects manually can be overwhelming for your support team, often leading to inefficiencies.</p>
                <p>Operational CRMs are designed to streamline and optimise customer service processes, helping you deliver superior service efficiently.</p>
                <h4 className="text-2xl mb-4">Use case #1: Helpdesk management</h4>
                <p>Customer queries and complaints come from multiple sources such as emails, social media, and direct calls. Managing these interactions efficiently while ensuring timely responses can be quite challenging. But with the help of an operational CRM, you can centralise and manage all your customer interactions in one place. This makes it easier for your customer service team to track, manage and resolve customer issues promptly.</p>
                <p><strong>Did you know?</strong> TeleCRM’s integrated helpdesk management system lets you keep track of all customer interactions from a single interface. This means you can easily follow up on customer queries, assign tasks to specific team members, and ensure nothing falls through the cracks.</p>
                <h4 className="text-2xl mb-4">Use case #2: Automated responses and follow-ups</h4>
                <p>Customer service teams often have to deal with repetitive queries and follow-up messages, which can be time-consuming and may delay responses to more complex issues. An operational CRM can automate these tasks, allowing your team to focus on more critical customer interactions.</p>
                <p><strong>TeleCRM’s automated response system</strong><br /> TeleCRM’s automated response feature can handle routine queries with pre-set answers, ensuring your customers receive quick responses. It also allows you to set up automated follow-up messages to keep your customers informed and engaged.</p>
                <h2 className="text-2xl mb-4">In conclusion</h2>
                <p>By incorporating an operational CRM into your business strategy, you can streamline your sales, marketing, and customer service processes. This not only reduces the workload of your teams but also enhances productivity, improves customer satisfaction, and ultimately drives business growth.</p>
                <p>If you’re looking for a comprehensive solution to manage your business operations efficiently, it’s time to consider implementing an operational CRM like TeleCRM.</p>
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

export default Blog1;
