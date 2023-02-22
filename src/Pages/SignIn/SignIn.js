import classes from "./SignIn.module.css";
import bg from "./../../Assets/bg11.jpg";
import { ImGoogle2 } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sigin() {
  return (
    <div className={classes.main}>
      <img src={bg} className={classes.bg}></img>
      <div className={classes.container}>
        <div className={classes.form}>
          <div className={classes.welcome}>Welcome Back</div>
          <form>
            <input
              type="text"
              className={classes.input1}
              placeholder="Username"
            />
            <br />
            <input
              type="password"
              className={classes.input2}
              placeholder="Password"
            />
            <div className={classes.icons}>
              <button className={classes.button1}>
                <FaGithubSquare className={classes.icon1} />{" "}
              </button>
              <button className={classes.button2}>
                <ImGoogle2 className={classes.icon2} />
              </button>
            </div>
            <NavLink to="/home">
              <button className={classes.submit}>Submit</button>
            </NavLink>

            <NavLink to="/signup">
              <div className={classes.ragistration}>
                not rigestered yet? SiginUp
              </div>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sigin;
