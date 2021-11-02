import { useEffect } from "react";
import { useAuth } from "../contexts/Auth";

function NotLoggedIn(){
    const { setCurrentUser } = useAuth()

    useEffect(() => {
        const loggedIn = Number(localStorage.getItem('loggedIn'))

        if(loggedIn= 1)
            setCurrentUser(loggedIn)
    })

    return (
        <div>

        </div>
    )
}

export default NotLoggedIn;