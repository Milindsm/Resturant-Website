
import { Fragment,useState} from 'react';
import './App.css';
import Header from './component/Layout/Header';
import Meals from './component/Meals/Meal';
import Cart from './component/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown]=useState(false);

  const showCartHandler = () =>{
    setCartIsShown (true)
  }

  const hideCartHandler = () =>{
    setCartIsShown (false)
  }
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
