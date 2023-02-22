import classes from "./Button.module.css";
import { NavLink } from "react-router-dom";
function Buttons() {
  return (
    <div className={classes.buttons}>
      <NavLink to="/">
        <button className={classes.button1}>Sign Out</button>
      </NavLink>
      <button className={classes.button2}>Profile</button>
    </div>
  );
}

export default Buttons;
