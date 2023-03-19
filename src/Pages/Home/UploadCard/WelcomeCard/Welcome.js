import classes from './Welcome.module.css'
import BodyImg from './../../../../Assets/okay.png'


function Welcome(){
    return(
        <div className={classes.welcome}>
            <div className={classes.line1}>DECENTRALIZED STORAGE
            <div className={classes.line2}>Do Not Sell Your Data to Others</div>
            </div>
            <div className={classes.img}><img src={BodyImg} className={classes.image}></img></div>
        </div>
    )
}

export default Welcome;