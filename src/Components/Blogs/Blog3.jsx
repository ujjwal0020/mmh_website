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
import mt2 from '../../assets/images/whatsapp.webp';


const Blog3 = () => {
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
                    <span> 1 March,24</span>
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
                <h3 className="text-2xl mb-4">
                What is WhatsApp Community?
                </h3>
                <p className="mt-6">
                WhatsApp Community or WhatsApp Community group is basically an upgrade to the existing group chat feature on the app that allows you to manage and communicate with multiple groups under a single umbrella. It’s like having a dedicated space where all your customer groups can come together, without the clutter and limitations of traditional group chats.
                </p>
                <br />
                <p>Imagine being able to send a message that can reach different WhatsApp groups without having to post it individually in each group. That’s the convenience WhatsApp Community offers, making it an invaluable tool for anyone looking to maintain and send bulk messages without any hassle.</p>
                {/* <blockquote className=" bg-secondary p-8 rounded-md bg-[url('../images/all-img/bb.png')] bg-cover bg-no-repeat bg-center my-8 text-white">
                  <img src={q} alt="" />
                  <div className=" text-xl font-semibold my-6">
                    “ Education is one of the most powerful aspects of life.
                    Education and learning allow us to make sense of the world
                    around us, the world inside of us, and where we fit within
                    the world.”
                  </div>
                  <div className=" flex items-center space-x-3">
                    <span className=" inline-flex h-[3px] w-12 bg-white"></span>
                    <span className=" text-xl font-semibold">
                      Rosalina D. Jackson
                    </span>
                  </div>
                </blockquote> */}
                <br />
                <h3 className="text-2xl mb-4">What is the use of community in WhatsApp?</h3>
                <p>
                WhatsApp Community was launched on November 3, 2022, to allow users to bring multiple groups under one centralized space. This feature is a great value add for organisations, clubs, societies, social media influencers and even celebrities looking to share quick updates with their members or followers.
                </p>
                <h3 className="text-2xl mb-4" >
                Useful WhatsApp community features
                </h3>
                <p>
                WhatsApp Community is itself a feature that helps you streamline multiple operations of your business that otherwise would have required too much manual effort.
                </p>
                <h3  className="text-2xl mb-4" >Centralised communication platform</h3>
                <p>The core feature of WhatsApp Community is to act as a central hub where messages, announcements and updates can be shared with multiple groups simultaneously. It helps you manage your communication better, making it easier to keep your audience informed and engaged.</p>
                <br />
                <p>Multiple group management: A great thing about WhatsApp Community is that it lets you control many groups together as one big community. This is super helpful when you need to share the same news with lots of groups, like in your 
                  apartment building where you might have a group for parents and another for social events. </p>
                  <br /><p>For instance, if there’s an update about the building fees, instead of sending the same message to each group, you can just send it once in the community, and everyone in all the groups in the community will receive the message.</p>
                  <h3  className="text-2xl mb-4" > Broadcast messaging</h3>
                  <p>The ability to send broadcast messages to multiple groups simultaneously is invaluable for any business looking to share its message efficiently. Whether it’s a new product launch, a service update or important news, you can rest assured that your message will reach all relevant stakeholders instantly, without any delay.

</p>
<h3  className="text-2xl mb-4" > Privacy and security</h3>
Privacy and security
<p>WhatsApp’s commitment to privacy and security is crucial for businesses in building trust with their customers. By ensuring that the personal contact details of members within a community are not visible to other members of that community, you can foster a safe and secure environment for communication, which is essential for maintaining customer trust and loyalty.</p>

<h3  className="text-2xl mb-4" > Ease of use </h3>      
<p>With WhatsApp Community’s user-friendly interface, you can easily set up and manage your community even if you possess little to no technical knowledge. This ease of use allows all kinds of businesses to leverage the platform to run their WhatsApp marketing and support operations without worrying about the complexities that go hand-in-hand with managing a digital communication platform.</p>
                <br />
                <p>Broad accessibility: Everyone can easily start using the community feature because it is FREE and available on a messaging platform used by almost everyone in India: WhatsApp. This eliminates any need to download new apps or learn new platforms, making it a hassle-free and efficient tool for mass communication.</p>
                <br />
                <h3>How to Create a WhatsApp Community</h3>
            <p>Creating a WhatsApp community is a simple process and would take no more than 5 minutes. Listed below are ways you can create communities on WhatsApp for different operating systems:</p>

            <h3 className="text-2xl mb-4" >How to create a WhatsApp community on iOS</h3>
            <ol>
                <li>Open WhatsApp: Launch the WhatsApp application on your iOS device. At the bottom of the screen, you’ll see the ‘Communities’ tab. Tap on it and then tap on the + New Community option.</li>
                <li>Set up your community: In the ‘New Community’ section, enter your community name, and add a description and a profile photo to make it recognizable.</li>
                <li>Add Groups: Tap the Add Groups button in the community tab.</li>
                <li>Manage Groups: In the manage group section, you can add already existing groups to your community or create new ones.</li>
                <li>Create New Group: Tap on Create New Group to create a new group, or tap on Add Existing Group to add group members from any of the current groups. If you are creating a new group for your community, add the name, profile picture and members. Then tap on Add.</li>
                <li>Community ready: Once you’ve added the groups you want in your community, you are all set to send messages to all the community members. Please note that only community admins can send messages to any announcement group.</li>
                <li>Pro Tip: Initially, enable the setting that allows only community admins to add new groups and members to the community. This ensures only interested people are added to the community and that your community doesn’t get reported as Spam.</li>
            </ol>

            <h2 className="text-2xl mb-4" >How to create a WhatsApp community on Android</h2>
            <ol>
                <li>Open WhatsApp: Start by opening the WhatsApp app on your Android device. Tap on the Communities tab at the top left corner (next to the chat list).</li>
                <li>Create a new community: Tap the green Get Started button in the Create New Community tab.</li>
                <li>Community details: In the ‘New Community’ section, fill in the details of your community, including its name, description and optional photo for easy identification.</li>
                <li>Add or Create Groups: Add existing groups to your community by selecting them or tapping on Create New Group to create a new one directly within the community.</li>
                <li>Community ready: Now you have your WhatsApp community ready on your Android phone. You can start sending the latest announcements or messages to a large number of people by simply tapping the Send button.</li>
            </ol>

            <h2 className="text-2xl mb-4" >How to create a WhatsApp community on WhatsApp Web</h2>
            <ol>
                <li>Open WhatsApp Web: Access WhatsApp Web on your browser. Look for the Communities tab or icon, which is often located in the upper left corner, next to your profile name or in the chat list header.</li>
                <li>Start a New Community: Click the Green Arrow button at the bottom of the ‘New Community’ section.</li>
                <li>Enter community details: In this New Community tab, add a name, description and profile photo if you wish. This information helps users identify the purpose of your community. Click on the Green Tick button to create the community.</li>
                <li>Add groups: In the Manage Groups tab, choose to add existing groups by selecting them from your list, or create a new group specifically for this community. You might need to follow prompts to search for or choose the groups you wish to include in your community.</li>
                <li>Finalize your community: Once you have added the groups to your community, you are all set to send messages to the community and group members.</li>
            </ol>

            <h2 className="text-2xl mb-4" >How to delete a WhatsApp community permanently</h2>
            <ol>
                <li>Open the community and click on the three dots in the top right corner. Then tap on Community Info.</li>
                <li>In the Community Info tab, scroll to the bottom and tap Deactivate Community.</li>
                <li>Tap on the red Deactivate button to permanently delete the WhatsApp community.</li>
            </ol>
            <p>Remember this is permanent and cannot be undone — think it through before going ahead with this step because all data in the community will be lost forever.</p>

            <h2 className="text-2xl mb-4" >Best practices to make the most of your WhatsApp Community</h2>
            <p>Using WhatsApp Community effectively involves more than just creating a community and adding members. It’s about building engagement, ensuring privacy and maintaining a positive environment. Here are some best practices to maximize its benefits:</p>
            <ul>
                <li><strong>Keep your messages clear and simple:</strong> Craft messages that are easy to understand. Avoid using complicated words or long paragraphs. Simple, clear and succinct messages ensure that everyone in your community knows what’s going on, whether it’s a new product launch, a service update or an event invitation.</li>
                <li><strong>Respect everyone’s time and privacy:</strong> Don’t flood your community with too many messages. Stick to sending only important updates or messages that add value to your members. Never share group conversations and someone’s details without their permission. Your community should be a safe space where people feel heard and respected.</li>
                <li><strong>Encourage questions and feedback:</strong> Make your community a two-way street. Invite your members to ask questions, give their opinions or suggest ideas. This makes everyone feel valued and involved. When someone shares feedback, thank them and let them know how you will incorporate their feedback to improve your products or services.</li>
                <li><strong>Be quick to respond:</strong> When members ask questions or raise concerns, try to respond as soon as you can. Quick responses make people feel heard and taken care of. Assign group admins to every group that’s part of your community and a community admin to manage those group admins to ensure every customer query gets answered with minimal delays.</li>
            </ul>

            <h2 className="text-2xl mb-4" >Conclusion</h2>
            <p>In conclusion, WhatsApp Community can be a transformative feature for any business that is looking to streamline its communication, engage with its audience on a larger scale and build a sense of belonging among its customers.</p>
            <p>It’s a powerful tool that brings together the convenience of direct and bulk messaging. In case you didn’t have the time to read the entire article, here are some key takeaways:</p>
            <ul>
                <li><strong>Centralized communication:</strong> WhatsApp Communities simplify messaging by allowing you to reach multiple groups simultaneously from a single platform, ensuring consistent and efficient distribution of information.</li>
                <li><strong>Cost-effective engagement:</strong> By eliminating the need for multiple messaging platforms or expensive marketing tools, WhatsApp Community provides a budget-friendly way to engage with a vast audience.</li>
                <li><strong>Enhanced privacy and security:</strong> With a commitment to user privacy and security, WhatsApp ensures that personal details are protected, making it a trusted platform for both businesses and customers.</li>
                <li><strong>Ease of use and accessibility:</strong> The user-friendly nature of WhatsApp, combined with its broad usage, makes it an invaluable tool for businesses of all sizes to connect with their audience without the need for technical expertise.</li>
            </ul>
            <p>Lastly, if you are looking for something more efficient and powerful tool for bulk messaging and complete WhatsApp automation while improving overall business operations, book a demo of TeleCRM (India’s Best WhatsApp CRM and Lead management software).</p>
       
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

export default Blog3;
