import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeadercartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Gopal Ji - Khana Khazana</h1>
        <HeadercartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="JEC Night Canteen" />
      </div>
    </>
  );
};

export default Header;
