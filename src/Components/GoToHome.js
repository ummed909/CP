import classes from './GoToHome.module.css';
import { useNavigate } from "react-router-dom";

function GoToHome(){

    const navigate = useNavigate();

    function handleClick() {
      navigate("/home");
    }

    return(
        <div className={classes.card}>
            <h1 className={classes.head}>Your Are Success fully done</h1>
            <button className={classes.button} onClick={handleClick}>Lets Go</button>
        </div>
    )
}

export default GoToHome;