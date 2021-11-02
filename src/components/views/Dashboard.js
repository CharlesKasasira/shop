import React from 'react'
import { useAuth } from '../contexts/Auth'

function Dashboard() {
    const {currentUser, setCurrentUser} = useAuth()
    return (
        <div>
            
        </div>
    )
}

export default Dashboard
