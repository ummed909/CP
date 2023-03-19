import classes from "./Navbar.module.css";
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div className={classes.navbar}>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? classes.active : classes.dea
            }
            end
          >
            <div className={classes.listItem}>Home</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? classes.active : classes.dea
            }
          >
            <div className={classes.listItem}>About</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/files"
            className={({ isActive }) =>
              isActive ? classes.active : classes.dea
            }
          >
            <div className={classes.listItem}>Files</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? classes.active : classes.dea
            }
          >
            <div className={classes.listItem}>Contact</div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
