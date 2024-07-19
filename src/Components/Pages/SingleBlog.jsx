import React from "react";
// import BlogPost from "../BlogPost";
import Footer from "../HomeTwoComponents/Footer";
import Header from "../Header";
import { useParams } from "react-router-dom";
import { BlogData } from "../../constant/BlogData";
// import { urlSanitizerV2 } from "../../constant/services/url-sanitization";
import Blog1 from "../Blogs/Blog1";
import Blog2 from "../Blogs/Blog2";
import Blog3 from "../Blogs/Blog3";
import Blog4 from "../Blogs/Blog4";
import Blog5 from "../Blogs/Blog5";
import Blog6 from "../Blogs/Blog6";
// import PageBanner from "../PageBanner";

const SingleBlog = () => {
  const {title} = useParams();
  console.log("title osi",title)
  const blogIndex = BlogData.findIndex(blog => (blog.to) === title);
  const blog = blogIndex !== -1 ? BlogData[blogIndex] : null;
  if (!blog) {
    return <div>Blog not found</div>;
  }
  const renderBlogComponent = () => {
    switch (blogIndex) {
      case 0:
        return <Blog1 />;
      case 1:
        return <Blog2 />;
      case 2:
        return <Blog3 />;
      case 3:
          return <Blog4 />;  
      case 4:
          return <Blog5 />;  
      case 5:
          return <Blog6 />;  
      // Add more cases for other blog indices and components
      default:
        return <div>Blog not found</div>;
    }
  };

  return (
    <>
      <Header />
      {renderBlogComponent()}
      <Footer />
    </>
  );
};

export default SingleBlog;
