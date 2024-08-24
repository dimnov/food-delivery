import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import "./MainLayout.css";
import Main from "../components/Main/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainLayout() {
  return (
    <div className="main-layout">
      <ToastContainer />
      <Navbar />
      <Sidebar />
      <Main />
    </div>
  );
}

export default MainLayout;
