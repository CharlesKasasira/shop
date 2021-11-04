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

import {
    BrowserRouter as Router,
    Switch, Route 
} from 'react-router-dom'

function MyRouter() {
    return (
           <Router>
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
