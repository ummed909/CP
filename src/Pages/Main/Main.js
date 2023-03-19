import vedio from "./../../Assets/video.mp4";
import classes from "./Main.module.css";
import LoginButton from "./Buttons/LoginButton";
import SignupButton from "./Buttons/SignupButton";
import { NavLink } from "react-router-dom";
import LogoImg from "./../../Assets/logo1.png";
function Main() {
  return (
    <div className={classes.main}>
      <video src={vedio} autoPlay loop muted className={classes.bg}></video>

      <div className={classes.content}>
        <div className={classes.container}>

          <div className={classes.container2}>
            <img src={LogoImg} className={classes.img}></img>
          </div>

          <div className={classes.buttons}>
            <NavLink to="/signin">
              <LoginButton />
            </NavLink>
            <NavLink to="/signup">
              <SignupButton />
            </NavLink>
          </div>
          
        </div>

        <div className={classes.glass}>
          <div className={classes.line1}>Decentralized</div>
          <div className={classes.line2}>File System</div>
        </div>

        <div className={classes.line3}>Centralized cloud storage</div>
        <div className={classes.line4}>
          Our data is hosted on a central cloud owned and operated by someone
          that isn’t you. Your data belongs to them. Sometimes it isn’t even
          safe
        </div>
      </div>
    </div>
  );
}

export default Main;
