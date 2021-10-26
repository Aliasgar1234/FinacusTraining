import { NavLink, Route, Switch, BrowserRouter } from "react-router-dom";
import AvailableProduct from "./AvailableProduct";
import Login from "./Login";
import EditProduct from './EditProduct';
const Navigation = () => {
    return (
        <div>
            <BrowserRouter>
                <NavLink exact to='/' >Home</NavLink>
                <NavLink to='/Login'>Login</NavLink>
                <NavLink to='/AvailableProduct'>Product</NavLink>
                <NavLink to='/'>Store</NavLink>
                <NavLink to='/'>Cart</NavLink>
                <NavLink to='/Logout'>Logout</NavLink>
                <Switch>
                    <Route path='/Login' exact={true}>
                        <Login/>
                    </Route>
                    <Route path='/AvailableProduct'>
                        <AvailableProduct/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};


export default Navigation;