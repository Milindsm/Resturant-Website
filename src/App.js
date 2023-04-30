
import { Fragment } from 'react';
import './App.css';
import Header from './component/Layout/Header';
import MealsSummary from './component/Meals/MealsSummary';

function App() {
  return (
    <Fragment>
      <Header/>
      <MealsSummary/>
    </Fragment>
  );
}

export default App;
