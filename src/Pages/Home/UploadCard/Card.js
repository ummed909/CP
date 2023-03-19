import classes from "./Card.module.css";
import DragDrop from "./DragAndDrope";
function Card() {
  return (
    <div className={classes.card}>
      {/* <div className={classes.content}>Drag and Drope</div> */}
      <DragDrop className={classes.box}/>
      <button className={classes.button}>Upload</button>
    </div>
  );
}

export default Card;
