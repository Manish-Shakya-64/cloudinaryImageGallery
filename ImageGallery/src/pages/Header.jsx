import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

const Header = () => {
  return (
    <div>
      <div className="header_div">
        <div className="heading_left">
          <h2>ImageGallery</h2>
        </div>
        <div className="link_right">
          <h3><Link to="/">Gallery</Link></h3>
          <h3>
            <Link to="/upload">Upload</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
