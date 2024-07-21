import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeTwo from "./Components/Home/HomeTwo";
import ErrorPage from "./Components/Pages/404Page";
import AboutOne from "./Components/Pages/AboutOne";
import BLogStandard from "./Components/Pages/BLogStandard";
import SingleBlog from "./Components/Pages/SingleBlog";
import ContactUs from "./Components/Pages/ContactUs";
import Courses from "./Components/Pages/Courses";

import Thanks from "./Components/Pages/Thanks";
// import Accordion from "./Components/HomeThreeComponents/Accordion";
import HR_FAQ from "./Components/HomeThreeComponents/HR_FAQ";
import ScrollToTop from "./Components/HomeTwoComponents/ScrollToTop";
import TermsAndConditions from "./Components/HomeTwoComponents/Terms&Condition";
import PrivacyPolicy from "./Components/HomeTwoComponents/PrivacyPolicy";


function App() {
  return (
    <BrowserRouter>
      <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
        <ScrollToTop/>
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
          <Route path="blogs" element={<BLogStandard />} />
          <Route path="blogs/:title" element={<SingleBlog />}/>
          <Route path="contacts" element={<ContactUs />} />
          <Route path="thanks" element={<Thanks />} />
          <Route path="hr_faq" element={<HR_FAQ />} />
          <Route path="terms" element={<TermsAndConditions />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<ErrorPage />} />
         
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
