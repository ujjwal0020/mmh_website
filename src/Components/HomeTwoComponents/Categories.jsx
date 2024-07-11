/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ct1 from "../../assets/images/icon/customer-service.png";
import ct2 from "../../assets/images/icon/assistant.png";
import ct3 from "../../assets/images/icon/help-desk.png";
import ct4 from "../../assets/images/icon/shopping-online.png";
import ct5 from "../../assets/images/icon/marketing.png";
import ct6 from "../../assets/images/icon/bot.png";

const categories = [
  { image: ct1, text: "Tele Calling" },
  { image: ct2, text: "Customer Support" },
  { image: ct3, text: "Technical Support" },
  { image: ct4, text: "Sales" },
  { image: ct5, text: "Marketing" },
  { image: ct6, text: "Virtual Assistant" },
];

const Categories = () => {
  return (
    <div className="feature-area bg-[url('../images/all-img/section-bg-6.png')] bg-cover bg-no-repeat bg-center section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">mmh Services</div>
          <div className="column-title ">
            Top <span className="shape-bg">Services.</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
          {categories.map((category, index) => (
            <a
              className="rounded-[8px] transition-all duration-300 hover:shadow-box bg-white flex space-x-5 p-[30px] border-l-4 border-white hover:border-primary"
              href="#"
              key={index}
            >
              <div className="w-[72px] h-[72px] rounded bg-white relative group-hover:bg-[#FFE8E8]">
                <img
                  src={category.image}
                  alt={category.text}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="course-content flex items-center">
                <h4 className="lg:text-2xl text-xl mb-2 font-bold text-center">
                  {category.text}
                </h4>
              </div>
            </a>
          ))}
        </div>
        {/* <div className="text-center pt-[70px]">
          <a href="#" className="btn btn-primary">
            View All Categories
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Categories;
