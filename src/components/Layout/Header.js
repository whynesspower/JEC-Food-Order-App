import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Gopal Ji - Khana Khazana</h1>
        <butto>Cart</butto>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="JEC Night Canteen" />
      </div>
    </>
  );
};

export default Header;
