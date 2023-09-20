import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Login from "./Components/Login";
import { useState } from "react";
import MyCart from "./Components/MyCart";
import Form from "./Components/Form";
import OrderPlace from "./Components/OrderPlace";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const onAdd = (data) => {
    const exist = cartItems.find((item) => item.id === data.id);
    setTotal(data.price + total);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === data.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...data, quantity: 1 }]);
    }
  };

  const onRemove = (data) => {
    const exist = cartItems.find((item) => item.id === data.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== data.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === data.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
    setTotal(total - data.price); 
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>

        <Route
          path="/product"
          element={<Products onAdd={onAdd} cartItems={cartItems} />}
        ></Route>

        <Route
          path="/cart"
          element={<MyCart cartItems={cartItems} total={total} onRemove={onRemove} onAdd={onAdd} />}
        ></Route>

        <Route path="/placeOrder" element={<Form cartItems={cartItems} />}></Route>
        <Route
          path="/placed"
          element={<OrderPlace cartItems={cartItems} total={total}/>}
        ></Route>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
