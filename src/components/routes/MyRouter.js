import PrivateRoute from './PrivateRoute'
import Login from '../views/Login'
import Pay from '../views/Pay'
import Dashboard from '../views/Dashboard'
import Cart from '../views/Cart'
import Checkout from '../views/Checkout'
import Account from '../views/Account'
import Home from '../views/Home'
import NotFound from '../views/NotFound'
import NotLoggedIn from '../views/NotLoggedIn'
import NotAuthorized from '../views/NotAuthorized'
import { useAuth } from '../contexts/Auth'
import { useCart } from '../contexts/Cart'
import Logout from '../views/Logout'

import {
    BrowserRouter as Router,
    Switch, Route, Link
} from 'react-router-dom'

function MyRouter() {

    const { currentUser } = useAuth()
    const { itemsInCart } = useCart()

    return (
           <Router>

<header className="header">
                    <h1>
                        <Link to="/">DevShop</Link>
                    </h1>
                    <nav>
                        <ul>
                            {currentUser &&
                                <>
                                    <li>
                                        <Link to="/">Shop</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard">Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link to="/account">My Account</Link>
                                    </li>

                                </>
                        }
                            <li>
                                <Link to="/help">Help</Link>
                            </li>
                            <li>
                                {currentUser ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}
                            </li>
                            <li>
                                <Link to="/cart" className="btn basket">{itemsInCart?.length} Basket</Link>
                            </li>
                        </ul>
                    </nav>
                </header>


                <Switch>
                    
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/home" exact>
                        <Home />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/not-logged-in'>
                        <NotLoggedIn />
                    </Route>
                    <Route path='/cart'>
                        <Cart />
                    </Route>
                    <Route path='/checkout'>
                        <Checkout />
                    </Route>
                    <Route path='/logout'>
                        <Logout />
                    </Route>
                    <PrivateRoute path='/dashboard'> 
                        <Dashboard />
                    </PrivateRoute>
                    <PrivateRoute path='/account'>
                        <Account />
                    </PrivateRoute>
                    <PrivateRoute path='/pay'>
                        <Pay />
                    </PrivateRoute>
                    {/* page not found */}
                    <Route path='*'>
                        <NotFound />
                    </Route>

                </Switch>
            </Router> 
    )
}

export default MyRouter 
