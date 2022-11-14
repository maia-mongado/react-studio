import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState({})
  const [total, addItemCost] = useState(0)

  const addToCart = (pastry) => {
    const newCart = {...cart}
    newCart[pastry.name] = (newCart[pastry.name] || 0) + 1
    setCart(newCart)
    addItemCost(total + pastry.price)
  }

  return (
    <div className="App">

      <div id="gallery">
      <h1>My Bakery</h1> 
      {bakeryData.map((item, index) => ( // DONE: map bakeryData to BakeryItem components
        <p>
          <BakeryItem pastry={item} onClick={addToCart}/>
          <br></br>
        </p>
      ))}
      </div>

      <div id="cart">
        <h2>Cart</h2>
        {Object.keys(cart).map((key, value) => ( /* DONE: render a list of items in the cart */
        <p>
          <li key={key}> {key} x {cart[key]}</li>
        </p>
        ))}
        <p>Total: {total}</p>
      </div>
    </div>
  );
}

export default App;
