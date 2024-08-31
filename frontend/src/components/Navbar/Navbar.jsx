import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState("home");

  const menuItems = [
    { id: "home", label: "home" },
    { id: "menu", label: "menu" },
    { id: "mobile-app", label: "mobile app" },
    { id: "contact-us", label: "contact us" },
  ];

  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setMenu(item.id)}
            className={menu === item.id ? "active" : ""}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
