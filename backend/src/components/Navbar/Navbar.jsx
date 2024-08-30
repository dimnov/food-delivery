import { assets } from "../../assets/assets";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={assets.logo} alt="logo" />
      <img className="profile" src={assets.profile_image} alt="profile" />
    </nav>
  );
}

export default Navbar;
