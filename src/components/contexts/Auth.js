import { createContext, useState, useEffect, useContext } from "react"

const AuthContext = React.createContext()

export function useAuth() {
    return React.useContext( AuthContext )
}

function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        const loggedIn = parseInt(localStorage.getItem('loggedIN'))
        if(loggedIn === 1) {
            setCurrentUser(loggedIn)
        }
    }, [])

    const value = {
        loading,
        currentUser,
        setCurrentUser,
        setLoading
    }

    return (
        <AuthContext.Provider value={value}> {/*context consumer.*/}
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider