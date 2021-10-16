import { Route, Switch, Redirect } from 'react-router-dom';
import Product from './pages/Product';
import Welcome from './pages/Welcome';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';

const App = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/Welcome' />
          </Route>
          <Route path="/Welcome">
            <Welcome />
          </Route>
          <Route path="/Product" exact>
            <Product />
          </Route>
          <Route path="/Product/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
