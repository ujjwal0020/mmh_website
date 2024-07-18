import React from "react";
import BlogPost from "../BlogPost";
import Footer from "../Footer";
import Header from "../Header";
import { useParams } from "react-router-dom";
import { BlogData } from "../../constant/BlogData";
import { urlSanitizerV2 } from "../../constant/services/url-sanitization";
import Blog1 from "../Blogs/Blog1";
import Blog2 from "../Blogs/Blog2";
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
