import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  const [cartIsShow, setCartIsShown] = useState(false);
  return (
    <>
      <Cart />
      <Header></Header>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
