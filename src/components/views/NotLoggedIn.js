import { useEffect } from "react";
import { Redirect } from "react-router";
import { useAuth } from "../contexts/Auth";
import Loader from "./uicomponent/Loader";

function NotLoggedIn(){
    const { setCurrentUser } = useAuth()

    useEffect(() => {
        const loggedIn = Number(localStorage.getItem('loggedIn'))

        if(loggedIn= 1)
            setCurrentUser(loggedIn)
            setLogin(loggedIn)
            setLoading(false)
    })

    if (isLogin && !isLoading)
        return <Redirect to={{ pathname: `${history.localStorage}`}} />

    
    if (!isLogin && isLoading)
        return <Loader />

    return (
        <div>
            <h1>you are not logged in</h1>
        </div>
    )
}

export default NotLoggedIn;