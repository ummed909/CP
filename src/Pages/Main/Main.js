import vedio from "./../../Assets/video.mp4";
import classes from "./Main.module.css";
import LoginButton from "./Buttons/LoginButton";
import SignupButton from "./Buttons/SignupButton";
import { NavLink } from "react-router-dom";


function Main() {
  return (
    <div className={classes.main}>
      <video src={vedio} autoPlay loop muted className={classes.bg}></video>

      <div className={classes.content}>
        <div className={classes.buttons}>
          <NavLink to="/signin"><LoginButton /></NavLink>
          <NavLink to="/signup"><SignupButton /></NavLink>
          
        </div>
        <div className={classes.glass}>
          <div className={classes.line1}>Decentralized</div>
          <div className={classes.line2}>File System</div>
        </div>
        {/* <div className={classes.info}>
        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </div> */}
      </div>
    </div>
  );
}

export default Main;
