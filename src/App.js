
import {useState} from 'react';
import './App.css';
import Header from './component/Layout/Header';
import Meals from './component/Meals/Meal';
import Cart from './component/Cart/Cart';
import CartProvider from './component/Store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown]=useState(false);

  const showCartHandler = () =>{
    setCartIsShown (true)
  }

  const hideCartHandler = () =>{
    setCartIsShown (false)
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
