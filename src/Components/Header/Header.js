import Navbar from "./Navbar/Navbar";
import Logo from "./Logo/Logo";
import classes from './Header.module.css'
import Buttons from "./Buttons/Button";
function Header(){
    return(
        <div className={classes.header}>
            <Logo/>
            <Navbar/>
            <Buttons/>
        </div>
    )
}

export default Header