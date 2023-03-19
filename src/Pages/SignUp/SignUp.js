import classes from "./SignUp.module.css";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import app from "../../Backend/Authentication/Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import GoToHome from "../../Components/GoToHome";
const auth = getAuth(app);

function SigUp() {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const [isLogin,setIsLogin] = useState(0);

  function FullNameHandler(event) {
    setFullName(event.target.value);
    console.log(FullName);
  }
  function EmailHandler(event) {
    setEmail(event.target.value);
    console.log(Email);
  }
  function UsernameHandler(event) {
    setUsername(event.target.value);
    console.log(Username);
  }
  function PasswordHandler(event) {
    setPassword(event.target.value);
    console.log(Password);
  }

  // _____________________sign up new user__________________________//

  function SignUp() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsLogin(1);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("ok");
    SignUp();
  }

  if(isLogin){
    return(
      <GoToHome/>
    )
  }

  return (

    <div className={classes.main}>
      <div className={classes.flex}>
        <motion.div
          className={classes.bubble1}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          exit={{ opacity: 0, y: 200 }}
        ></motion.div>

        <motion.div
          className={classes.bubble2}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1.5 } }}
          exit={{ opacity: 0, y: -100 }}
        ></motion.div>

        <motion.div
          className={classes.bubble3}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.7 } }}
          exit={{ opacity: 0, x: -100 }}
        ></motion.div>
      </div>
      <div className={classes.container}>
        <div className={classes.form}>
          <div className={classes.welcome}>Welcome</div>
          <form>
            <input
              type="text"
              className={classes.input1}
              placeholder="Full Name"
              value={FullName}
              onChange={FullNameHandler}
            />
            <br />
            <input
              type="Email"
              className={classes.input2}
              placeholder="Email"
              value={Email}
              onChange={EmailHandler}
            />
            <br />
            <input
              type="text"
              className={classes.input2}
              placeholder="Set Username"
              value={Username}
              onChange={UsernameHandler}
            />
            <br />
            <input
              type="password"
              className={classes.input2}
              placeholder="Set Password"
              value={Password}
              onChange={PasswordHandler}
            />
            <div className={classes.icons}>
              <button className={classes.button1}>
                <ImGithub className={classes.icon1} />{" "}
              </button>
              <button className={classes.button2}>
                <FcGoogle className={classes.icon2} />
              </button>
            </div>

            <button
              className={classes.submit}
              type="submit"
              onClick={submitHandler}
            >
              Submit
            </button>

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
