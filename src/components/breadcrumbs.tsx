import React from "react";
import "./style.css";

const breadcrumbs = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#" onClick={() => window.location.reload()}>
            Home
          </a>
        </li>
        {/* <li className="breadcrumb-item active" aria-current="page">
          Library
        </li> */}
      </ol>
    </nav>
  );
};

export default breadcrumbs;
