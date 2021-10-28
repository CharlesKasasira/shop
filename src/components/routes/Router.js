import React from 'react'
import Login from './views/Logins'
import Pay from './views/Pay'
import Dashboard from '../views/Dashboard'
import Cart from '../views/Cart'
import Checkout from '../views/Checkout'
import Account from '../views/Account'
import Home from '../views/Home'

import {
    BrowserRouter as Router,
    Switch, Route 
} from 'react-router-dom'

function Router() {
    return (
        <div>
           <Router>
                <Switch>
                    
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route>
                        
                    </Route>

                </Switch>
            </Router> 
        </div>
    )
}

export default App
