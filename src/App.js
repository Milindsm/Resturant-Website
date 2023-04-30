
import { Fragment } from 'react';
import './App.css';
import Header from './component/Layout/Header';
import Meals from './component/Meals/Meal';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
