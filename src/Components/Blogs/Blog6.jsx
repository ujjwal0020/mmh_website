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
import mt2 from "../../assets/images/buisness.png";

const Blog6 = () => {
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
                    <span>Amelia</span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={calender} alt="" />
                    <span> 17 May,24</span>
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
                Here is why your Business/Start-up is guaranteed to fail!
                </h3>
                <h3 className="text-2xl mb-4">An ultimate guide to getting your business back to business
                </h3>
                <p>Every day you hear a new business/start-up going live, and what you don’t hear is thousands of them going down, lost in the tunnel of darkness covered by shattered dreams that will mostly never be restored. The startup is just a buzzword; day in and day out, you see multiple businesses that don’t make enough money to keep themselves going. A small percentage makes it enough to survive but not to grow, and the ultimate small percentage of businesses grow. Grow like the sky is the limit.</p>

<p>Multiple factors make a business fail or succeed. We normally blame external reasons like market conditions, product acceptance, new technologies, etc. While that is true to some extent, this ‘some extent’ will not cross more than 10%. Yes, that’s right – Only 10% of businesses fail due to external conditions, and most of them fail because of the founder’s mistake of making wrong choices and bad decisions.</p>

<p>Here are the possible reasons why your startup, business, or venture will fail. Consider it this way for easy understanding – Even if two things are not in synchronization in your startup, then it is bound to fail. Fail miserably. To avoid confusion with numbers, let’s remember – Either it’s 100% or nothing!</p>

<h2 className="text-2xl mb-4">Lack of Experience/Knowledge</h2>
<p>Knowledge leads to experience, and experience leads to knowledge. It’s a vicious circle but positively vicious. You don’t need to have experience to start a business, but knowledge will surely be helpful to make the right decisions before you plunge into the world of business.</p>
<p>Most people lack this on a major scale. Everyone wants to get into the world of Funding and Serial entrepreneurship. And the way they are mesmerized by this has no limits. The real understanding of why, how, and what needs to be done to start and sustain the business goes for a toss. And guess what – In one year, they realize that business is not for them.</p>
<p>Honestly, it’s far from the truth. Business is not a copyrighted product, and anyone sane enough to make the right decisions can do it. But it is all about the right way of understanding your situation and reacting accordingly to maintain the momentum. It’s tough but it’s worth a shot.</p>
<p><strong>Solution:</strong> Keep learning. This is a different world, and it will ask for an extra amount of effort and knowledge. Give it and see the results. Go for online courses, attend an event or two (or more), see what others are doing. Two things are bound to happen here – Either you will know what needs to be done, or you will realize what you should not do. Sounds like a win-win situation.</p>

<h2 className="text-2xl mb-4">Bad Team</h2>
<p>“Hire a perfect team and tag yourself as an entrepreneur proudly!” – Anon</p>
<p>Your job is not done after you hire a perfect team but will surely be increased if you hire a bad one. The right team is not the team with certified knowledge on how things can be done; the Right team means someone who trusts your beliefs and values. Someone ready to say Yes to you even if they don’t know where you will take them along. Someone who can simply envision your vision with your eye and implement it to make things better for the venture.</p>
<p>On the other hand – Hire a bad team and see your venture falling apart like a sack of cards. People whom you have hired will not chase your vision; they will chase money. The one who offers them more will join them, leaving you with the only option to start everything again. The circle will always keep on taking rounds until the right team puts a stop.</p>
<p><strong>Solution:</strong> Your friends and networks are the best sources to get you the right connections. Tell them what you need and what you can offer. If not, then the second-best source is a hiring agency. Be straight with them about your choices and set the terms accordingly. They are responsible for providing you with the right candidates but not at the cost of experiments. If you are clear on your choices, then they have to be clear by saying Yes or No. If they say Yes, crack a deal, and if it’s a no, move on. Someone will surely help you. Everyone wants a business. Period.</p>

<h2 className="text-2xl mb-4">Chasing Money</h2>
<p>Money and Funding options are lucrative, and everyone wants it. And let’s admit – it’s wise to have it. We judge it as Wants, but many times it is also a Need. Need or want, if used wisely, money is the best tool for the material comforts of the human being.</p>
<p>But then there is a time for everything, and in a venture, timing is everything. Often people chase money even before there is a scope to make some.</p>
<p>Imagine if you want to buy something with your hard-earned money, how often do you verify the genuineness, worth, and value of the product? Every time!</p>
<p>So what’s the moral here – Money comes, if the product is strong enough to provide value. Don’t we know that people spend millions of dollars on cars and thousands of them on phones? Money comes if you know ‘how to give ‘what’ to the person who can afford and needs it.</p>
<p><strong>Solution:</strong> Be product-oriented. Be team-oriented. Be company-oriented. The money will follow. Design the best product/service with the right team and reach out to the right crowd who wants it. Distraction from all good things for money is not worth it. It’s an awesome servant and often a bad master.</p>

<h2 className="text-2xl mb-4">Marketing</h2>
<p>This is a tricky part. Why? Because everyone is doing it without the know-how to do it. It’s a skill that needs specialization. Posting uncreative posts on social media and sending emails to the half-baked list is a sure-shot way to put your brand in jeopardy. “A good product badly marketed is worthless as compared to an average product marketed well” – Anon</p>
<p>Your product can always be at a developing stage and can turn anytime from average to good to better, but who will buy it if no one knows about it?</p>
<p>In the world of advertising, if you don’t know anything about marketing, then you need to reconsider your decision to jump into the world of advertising. Marketing is an integral part of the business; I would say it’s the very chapter that completes the book of your business.</p>
<p>And yes, there is no shame in shouting about your product to the world. If that is the only way to reach the crowd in today’s competitive nature of business, then be it. The only criteria are to not sound pushy but valuable.</p>
<p><strong>Solution:</strong> Hire an advertising and marketing agency that understands your needs. Need a simple solution? Be your business marketing eye. Understand this – It’s not rocket science. It’s all about understanding the niche crowd and targeting them with your products. Making them aware of it and showing them the value they will get after buying it. Pick up a short Marketing course. The tools are the same for all companies – Social Media, Email Marketing, and Cold Calling. It’s all about how you use that tool as the ladder for your success. Use it wisely and in the right way, and you are in the game.</p>

<h2 className="text-2xl mb-4">Wrong Co-Founders</h2>
<p>A point to skip if you don’t have one, but chances are less.</p>
<p>Co-Founders are the people who walk along with you mostly from the start of your business and then depart halfway. Either because they were right and you did not consider them as one, or maybe because you were right and they failed to recognize it.</p>
<p>Assuming that if you walk out, you have taken a sound decision, but what if your co-founder walks out leaving you halfway?</p>
<p>Ego clash that arises while taking business decisions and future visions into consideration is the main reason why co-founders depart.</p>
<p>Well, nothing wrong, but not at the cost of your business.</p>
<p>Finding the right co-founder means trusting someone with your business. Everyone does so, and even they are successful with that. As per the ratio, people with co-founders have a higher chance of getting funded as compared to single owners.</p>
<p>On the other hand, co-founders leaving the organization also have a good ratio. At times things are not in your hands, and you can stop someone from leaving your business. The right move is to accept it and move on. Even if they stick, chances are less they will give 100% for the venture where they are stuck forcefully.</p>
<p><strong>Solution:</strong> Find someone whom you know very well and someone who understands you equally better. Get the papers clear. You both (or more) are responsible for making your business successful. See if you both are equally ready to give your best for the business. Be clear with short, mid, and long-term vision. Be honest. Don’t drag yourself into something just because your co-founder is your relative or an old-school friend. Business needs practical decisions most of the time. Finding a co-founder on an emotional basis will not be harmful, but then the obstacles won’t be easy to tackle. The tough journey becomes tougher if your co-founder is the wrong one.</p>
<p>Always go for a third-party opinion in case of arguments. Someone more experienced can surely act as a board of advisors for your company. Settling an argument between you and your co-founders will be an important part of his/her role.</p>
<p>Go for the best. Settle the arguments if something goes wrong. And lastly, choose a better one next time.</p>

<h2 className="text-2xl mb-4">No Networking or Contacts</h2>
<p>No entrepreneur is an introvert. Even if you find one, they are pretty much a great actor to show how extroverted they are. Reticent entrepreneurs don’t do better business.</p>
<p>You need to have a persona that carries a charm. If you are average-looking, then work on communication. If not that, then proper market knowledge. People love to work with people who know what they are doing and where they are going. Networking – whether online or offline – always works in your favor. One needs to have enough contacts who can be valuable to them when needs arise. And be valuable to those who need it.</p>
<p><strong>Solution:</strong> Go and mingle around. Meet people at events or through common connections. Don’t just make friends for the sake of making them. Be genuinely interested in their offerings and be humble while giving. Nothing beats 3 AM advice during tough times.</p>

<h2 className="text-2xl mb-4">Bad Finance Management</h2>
<p>Managing money is probably the easiest part of the venture, and unfortunately, we have become experts in goofing it up.</p>
<p>Bad finance means spending money on the wrong resources during the early days of the startup and then crying later when you find the right resources.</p>
<p>You don’t need to master it. Forget what you read in the newspaper. More than 90% of successful entrepreneurs had nothing to do with finance. Moreover, you can hire the best executives when needed. Let the expert do their work. You can focus on business.</p>
<p>But what is needed before that is the right kind of management. Don’t ignore even $10 when it comes to managing finance. And trust me – it’s easy. Remember your school days when you were paid pocket money. How easy it was to manage finance then. You were an expert at dividing it wisely for candies, savings, and games. Right? The same funda applies even today. Of course, the game has changed now, but the rules are still the same. And even your intelligence has increased to adapt yourself to new tools that the game has to offer.</p>
<p><strong>Solution:</strong> Keep track of your expenses. Verify and verify a hundred times before spending money on resources. Be sure of where you are spending it. If things are not needed, then don’t buy them just to sound cool. It’s not helpful. Don’t be generous enough to pay high bonuses. Cut down on your expenses and spend only on resources that will help you grow and are needed on an instant basis. Awaken your childhood financial manager within you!</p>

<h2 className="text-2xl mb-4">Lack of Focus</h2>
<p>The easiest way to focus on something is not to focus at all; instead, move with the flow.</p>
<p>Focus in the right way leads to guaranteed success, and in the wrong direction leads to a miserable failure. Often, we make the mistake of ignoring the point of focus and diverting our vision camera to something else. This leads us to lose control of the situation and ultimately make the wrong decision. And later regret it.</p>
<p>Focus is everything for sure. Getting distracted with lucrative demons like mobile phones, social networking sites, movies, parties, and procrastination is very common nowadays. Your brain is a champion at diverting you from the right path towards the destination to the wrong path which takes you to the wrong destination. This is going to be tough, but then it’s the only way out. A distraction-free brain knows where to see, what to see, and why to see. Once it’s supportive enough to show you the mentioned route, all you have to do is figure out how, and guess what? Even this becomes easy with the right, clear, and well-balanced mind.</p>
<p><strong>Solution:</strong> Move out of social media, switch off your cell phones during working hours, learn to say no to your close friend for the party, check emails once every 2 hours. No need to see your inbox every time it notifies you of something. All work and no play makes Jack a dull boy, but remember when you are working, you are working, and when you are playing, you are playing. If playing interrupts your work life, then be a dull boy. Be like Jack!</p>

<h2 className="text-2xl mb-4">Stubbornness/Owners Attitude</h2>
<p>You don’t need an external enemy when your stubbornness is with you. Multiply it with ego, and you are good to walk towards the path of downfall.</p>
<p>It’s OK to be unbending and inflexible, but only when you are 100% sure that you are right. If you have a doubt even for one second, it’s wise to give up and see what other options are around you to make things better. You are the owner of your business, but that doesn’t mean you are free to make a wrong decision because you lead it. Your role is to accept your mistakes as soon as possible and grow out of them. Chances are good that your ratio of mistakes will be much higher than others. The key role of a leader includes finding his/her mistakes more than often to avoid future hassles. If your attitude towards your self-growth is weak, then business is not for you.</p>
<p><strong>Solution:</strong> Look at the stars but stay on the ground. If someone is telling you that you are wrong, then try to analyze. Why? You will move a step ahead. Chances are good you will realize that you are wrong. The illusion of doing business won’t allow you to accept your mistake, but when considered with the proper mindset, you will easily be able to filter whether you are right or wrong.</p>

<h2 className="text-2xl mb-4">Lack of Motivation</h2>
<p>When everything works in your favor, it’s easy to go with the flow, and when nothing works, you will lack motivation. The human brain is awesome at going with the flow of happy things and stops the efforts when things are against our will. The motivation goes down to 0 and doesn’t rise again.</p>
<p>You will have to stay motivated no matter what. Hold your ground; you will have to fight back no matter what. You will have to survive and not give up no matter what. Your motivation will be the only driving force when nothing works in your favor. The ultimate medicine for the disease of failure, and it won’t be wise to give it up.</p>
<p><strong>Solution:</strong> Remember the checklist of the things that you wanted after you were going to be successful? Let that be your driving force. Remember your dream? Allow it to refuel you. Know this – you are just a cloud of dust in the cosmos, and people are surviving in worse situations than you and still doing better.</p>
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


export default Blog6;
