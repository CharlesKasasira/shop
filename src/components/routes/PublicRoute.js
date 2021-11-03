import { useEffect, useState } from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'
import { useAuth } from '../contexts/Auth'

function PublicRoute({ children, ...rest}){
    const { setCurrentUser } = useAuth()
    const [isLogin, setLogin] = useState(false)


    
}