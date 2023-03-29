import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Food, Delivered To You, Even at Night</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals{" "}
        <br />
        and enjoy a delicious at 24*7 Around the clock.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
