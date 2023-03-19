import classes from "./Footer.module.css";
import {
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className={classes.Footer}>
      <div className={classes.content}>
        <div className={classes.intro}>Take advantages of our product</div>
        <div className={classes.introHead}>Start Using Decentrelize File System</div>
        <form className={classes.footerForm}>
          <input
            className={classes.feedback}
            type="text"
            placeholder="Give your feedback"
          />
          <button className={classes.sendButton}>
            <TbSend className={classes.icon} />
          </button>
        </form>
      </div>
      <div className={classes.socialHandle}>
        <div className={classes.heading}>Let's Chat</div>
        <div className={classes.heading2}>@follow me on</div>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <a href="https://www.linkedin.com/in/ummed-choudhary-32387a222/">
              <FaLinkedin className={classes.Icon} id={classes.i1} />
            </a>
          </li>
          <li className={classes.listItem}>
            <a href="https://twitter.com/UmmedCh81619452">
              <FaTwitterSquare className={classes.Icon} id={classes.i2} />
            </a>
          </li>
          <li className={classes.listItem}>
            <a href="https://www.instagram.com/ummed303/">
              <FaInstagram className={classes.Icon} id={classes.i3} />
            </a>
          </li>
          <li className={classes.listItem}>
            <a href="https://github.com/ummed404">
              <FaGithubSquare className={classes.Icon} id={classes.i4} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
