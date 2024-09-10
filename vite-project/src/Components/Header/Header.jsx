import React from "react";
import Netflix_Logo from "../../assets/Netflix_Logo_PMS.png";
import "./Header.css";
function Header() {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              {/* <img className="nav_logo" src={Netflix_Logo} alt="Netflix Logo" /> */}
            </li>
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            {/* <li>SearchIcon</li>
            <li>NotificationsNoneIcon</li>
            <li>AccountBoxIcon</li>
            <li>ArrowDropDownIcon</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
