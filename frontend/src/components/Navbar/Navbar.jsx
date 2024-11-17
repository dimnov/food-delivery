import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { useSession } from "../../hooks/useSession";
import { useLogout } from "../../hooks/useLogout";

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");

  const { getCartItemsLength } = useContext(StoreContext);
  const { session } = useSession();
  const { signOut } = useLogout();

  const isAuth = session?.user;

  const cartItemsLength = getCartItemsLength();

  const menuItems = [
    { id: "menu", label: "menu", scroll: "#explore-menu" },
    { id: "mobile-app", label: "mobile app", scroll: "#app-download" },
    { id: "contact-us", label: "contact us", scroll: "#footer" },
  ];

  const setShowLoginHandler = () => {
    setShowLogin((prev) => !prev);
  };

  const location = useLocation();

  return (
    <div className="navbar" id="navbar">
      <Link to={"/"}>
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to={"/"} onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          home
        </Link>
        {location.pathname === "/"
          ? menuItems.map((item) => (
              <a
                href={item.scroll}
                key={item.id}
                onClick={() => setMenu(item.id)}
                className={menu === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            ))
          : null}
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="basket" />
          </Link>
          {cartItemsLength ? null : <div className="dot"></div>}
        </div>
        {isAuth ? (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="user profile" />
            <ul className="nav-profile-dropdown">
              <Link to={"/orders"}>
                <li>
                  <img src={assets.bag_icon} alt="" onClick={signOut} />
                  <p>Orders</p>
                </li>
              </Link>
              <hr />
              <li onClick={signOut}>
                <img src={assets.logout_icon} alt="logout" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        ) : (
          <button onClick={setShowLoginHandler}>sign in</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
