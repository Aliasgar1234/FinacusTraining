import Temp from './Temp';
import './App.css'
import { Fragment } from 'react';
import Header from './header';
import AvailableProduct from './AvailableProduct';
import Navigation from './Nav';


function App() {
  return (
    <Fragment>
      <header >
        <h1>React</h1>

        <Navigation />
      </header>
    </Fragment>
  );
}

export default App;
