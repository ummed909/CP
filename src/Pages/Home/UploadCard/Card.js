import classes from "./Card.module.css";

function Card() {
  return (
    <div className={classes.card}>
      <button className={classes.b1}>Choose File</button>
      <div className={classes.content}>Drag and Drope</div>
    </div>
  );
}

export default Card;
