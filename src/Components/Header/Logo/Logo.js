import classes from './Logo.module.css'
import img from "./../../../Assets/logo1.png"

function Logo(){
    return(
        <div className={classes.logo}>
            <img src={img} className={classes.img}/>
        </div>
    )
}

export default Logo;