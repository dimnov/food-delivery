import { assets } from "../../assets/assets";
import "./AppDownload.css";

function AppDownload() {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br />
        Tomato App
        <div className="app-download-platforms">
          <img src={assets.app_store} alt="" />
          <img src={assets.play_store} alt="" />
        </div>
      </p>
    </div>
  );
}

export default AppDownload;
