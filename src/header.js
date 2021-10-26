import React from "react";
import {BrowserRouter,Switch,Route, NavLink} from 'react-router-dom';
import Cart from "./Cart";
import Login from "./Login";
import Logout from "./Logout";
import Product from "./Product";

const Header = (props) =>{
    return(
        <div>
          <BrowserRouter>
          <NavLink exact to='/' >Home</NavLink>
          <NavLink to='/Login'>Login</NavLink>
          <NavLink to='/Product'>Product</NavLink>
          <NavLink to='/'>Store</NavLink>
          <NavLink to='/'>Cart</NavLink>
          <NavLink to='/Logout'>Logout</NavLink>
          <Switch>
              <Route path='/Login'>
                  <Login/>
                  
              </Route>
              <Route path='/Product'>
                  <Product/>
              </Route>
              <Route path='/Cart'>
                  <Cart/>
              </Route>
              <Route path='/Logout'>
                  <Logout/>
              </Route>
          </Switch>
          </BrowserRouter>
        </div>
    );
};


export default Header;