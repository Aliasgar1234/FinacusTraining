import 'bootstrap/dist/css/bootstrap.min.css';
import {  useState } from "react";
import Header from "./components/Layout/Header";
import Home from "./components/Layout/Home";
import './css/style.css';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  const [cartIsShown, setCartIsShown]= useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  };

  const hideCartHandler = () =>{
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} /> 
      <Home/>  
    </CartProvider>
  );
}

export default App;


