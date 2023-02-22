import classes from './Welcome.module.css'


function Welcome(){
    return(
        <div className={classes.welcome}>
            <div className={classes.line1}>Decentralize File System</div>
        </div>
    )
}

export default Welcome;