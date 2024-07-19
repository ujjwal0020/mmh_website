import React, { useEffect } from "react";

const PageBanner = ({ pageName, pageTitle, num, title }) => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <div >
      <div className="container text-center">
        <h2>{title}</h2>
        {/* <nav>
          <ol className="flex items-center justify-center space-x-3">
            <li className="breadcrumb-item">
              <Link to={"//home"}> Pages</Link>
            </li>
            <li className="breadcrumb-item">-</li>
            <li className="text-primary">
              {pageName} {pageTitle} {num}
            </li>
          </ol>
        </nav> */}
      </div>
    </div>
  );
};

export default PageBanner;
