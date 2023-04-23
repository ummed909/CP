import classes from "./Error.module.css"
import { Fragment } from "react";
import ReactDOM from "react-dom";

function Overlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

function Backdrope(props) {
    return (
      <div className={classes.backdrope} >
      </div>
    );
  }



function ErrorModal(props) {


  const Element = document.getElementById("sorrymodal");

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrope></Backdrope>, Element)}
      {ReactDOM.createPortal(
        <Overlay>
            {props.children}
          <button className={classes.okayButton}>Okay</button>
        </Overlay>,
        Element
      )}
    </Fragment>
  );
}

export default ErrorModal;
