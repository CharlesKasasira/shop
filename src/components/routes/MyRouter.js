import React from 'react'
import Login from '../views/Login'
import Pay from '../views/Pay'
import Dashboard from '../views/Dashboard'
import Cart from '../views/Cart'
import Checkout from '../views/Checkout'
import Account from '../views/Account'
import Home from '../views/Home'
import NotFound from '../views/NotFound'

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
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/cart'>
                        <Cart />
                    </Route>
                    <Route path='/checkout'>
                        <Checkout />
                    </Route>
                    <Route path='/dashboard'> 
                        <Dashboard />
                    </Route>
                    <Route path='/account'>
                        <Account />
                    </Route>
                    <Route path='/pay'>
                        <Pay />
                    </Route>
                    {/* page not found */}
                    <Route path='*'>
                        <NotFound />
                    </Route>

                </Switch>
            </Router> 
    )
}

export default MyRouter 
