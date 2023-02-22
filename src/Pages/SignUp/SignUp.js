import classes from "./SignUp.module.css";
import bg from "./../../Assets/bg11.jpg";
import { ImGoogle2 } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function SigUp() {
  return (
    <div className={classes.main}>
      <img src={bg} className={classes.bg}></img>
      <div className={classes.container}>
        <div className={classes.form}>
          <div className={classes.welcome}>Welcome</div>
          <form>
            <input
              type="text"
              className={classes.input1}
              placeholder="Full Name"
            />
            <br />
            <input
              type="Email"
              className={classes.input2}
              placeholder="Email"
            />
            <br />
            <input
              type="text"
              className={classes.input2}
              placeholder="Set Username"
            />
            <br />
            <input
              type="password"
              className={classes.input2}
              placeholder="Set Password"
            />
            <div className={classes.icons}>
              <button className={classes.button1}>
                <FaGithubSquare className={classes.icon1} />{" "}
              </button>
              <button className={classes.button2}>
                <ImGoogle2 className={classes.icon2} />
              </button>
            </div>
            <NavLink to='/home'><button className={classes.submit}>Submit</button></NavLink>
            <NavLink to="/signin">
              <div className={classes.ragistration}>back to Login</div>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SigUp;
