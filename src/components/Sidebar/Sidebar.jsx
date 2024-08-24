import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar-options">
        <li className="sidebar-option">
          <NavLink to={"items/add"}>
            <ion-icon className="icon" name="add-circle-outline"></ion-icon>
            <span>Add Item</span>
          </NavLink>
        </li>

        <li className="sidebar-option">
          <NavLink to={"items"} end>
            <ion-icon className="icon" name="list-outline"></ion-icon>
            <p>Items List</p>
          </NavLink>
        </li>

        <li className="sidebar-option">
          <NavLink to={"orders"} end>
            <ion-icon className="item-icon" name="cube-outline"></ion-icon>
            <p>Orders</p>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
