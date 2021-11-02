import React from 'react'
import {useAuth} from '../contexts/Auth'
import { Redirect } from 'react-router-dom'

function Login() {
    let {currentUser, setCurrentUser} = useAuth()
    return (
        <div>
            <button onClick={() => {
                setCurrentUser(1)
            {                    
                    <Redirect 
                        to={{
                            pathname: "/dashboard"
                        }}          
                    />
                    }
            }}
            >Login</button>
        </div>
    )
}

export default Login
