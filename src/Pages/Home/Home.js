import classes from './Home.module.css'
import Header from '../../Components/Header/Header'
import Card from './UploadCard/Card'
import Welcome from './UploadCard/WelcomeCard/Welcome'
function Home(){
    return(
        <div className={classes.home}>
            <Header/>
            {/* <Welcome/> */}
            <Card/>
        </div>
    )
}

export default Home