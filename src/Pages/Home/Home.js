import classes from './Home.module.css'
import Header from '../../Components/Header/Header'
import Card from './UploadCard/Card'
import Welcome from './UploadCard/WelcomeCard/Welcome'
import Footer from './../../Components/Footer/Footer'
import Footer2 from './../../Components/Footer2/Footer'
function Home(){
    return(
        <div className={classes.home}>
            <Header/>
            <Welcome/>
            <div className={classes.content}>Unlike a centralized server operated by a single company or organization, decentralized storage systems consist of a peer-to-peer network of user-operators who hold a portion of the overall data, creating a resilient file storage sharing system. These can be in a blockchain-based application or any peer-to-peer-based network.</div>
            <Card/>
            <Footer/>
            <Footer2/>
        </div>
    )
}

export default Home