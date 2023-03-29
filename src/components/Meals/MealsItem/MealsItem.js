import classes from "./MealsItem.module.css";
const MealItem = (props) => {
  const price = `$${props.price}`;
  return (
    <li>
      <div className={classes.meal}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.descriptiO}</div>
        <div className={classes.price}> {price}</div>
      </div>
    </li>
  );
};

export default MealItem;
