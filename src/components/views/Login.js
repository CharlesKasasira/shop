import {useAuth} from '../contexts/Auth'
import { Redirect, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Login() {
    let [isLogin, setLogin] = useState(false)
    let { setCurrentUser } = useAuth()
    const history = useHistory()

    useEffect(() => {
        const loggedIn = Number(localStorage.getItem('loggedIn'))
        if(loggedIn === 1) {
            setCurrentUser(loggedIn)
            setLogin(loggedIn)
        }
    })

    if(isLogin)
        return <Redirect to={{ pathname: '/dashboard'}} />
    
    
    return (
        <div>
            <button onClick={() => {
                setCurrentUser(1)
                localStorage.setItem('loggedIn', 1)
                history.push('/dashboard')
            }}
            >Login</button>
        </div>
    )
}

export default Login
