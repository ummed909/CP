import classes from "./Footer.module.css";




function Footer(){
    return(
        <div className={classes.footer}>
            <div className={classes.line1}>This is open source and secure notetaking web application. This is secure and trusted product you can save retrive and share your notes to multiple users</div>
            <div className={classes.line2}>This application is built in react use cloud to provide services such as sharing ,retriving and updating data.</div>
            <div className={classes.line3}>for more information about this product you can visit <a href="#" className={classes.about}>@About</a></div>
        </div>  
    )
}

export default  Footer