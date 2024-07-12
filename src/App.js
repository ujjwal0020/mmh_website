import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeTwo from "./Components/Home/HomeTwo";
import ErrorPage from "./Components/Pages/404Page";
import AboutOne from "./Components/Pages/AboutOne";
import BLogStandard from "./Components/Pages/BLogStandard";
import ContactUs from "./Components/Pages/ContactUs";
import Courses from "./Components/Pages/Courses";

import Thanks from "./Components/Pages/Thanks";

function App() {
  return (
    <BrowserRouter>
      <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
        <Routes>
          <Route path="/" element={<HomeTwo />} />
          <Route path="about" element={<AboutOne />} />>
          <Route path="courses" element={<Courses />} />
          {/* <Route
            path="courses-sidebar"
            element={<CourseSideBar />}
          /> */}
          {/* <Route
            path="single-course"
            element={<SingleCourse />}
          /> */}
          <Route path="blog-standard" element={<BLogStandard />} />
          {/* <Route
            path="single-blog"
            element={<SingleBlog />}
          /> */}
          <Route path="contacts" element={<ContactUs />} />
          <Route path="thanks" element={<Thanks />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
