import React, { useEffect, useState } from "react";
import netlifyIdentity from 'netlify-identity-widget'

const AuthContext = React.createContext({
    user: null,
    login: () => { },
    logout: () => { },
    authReady: false
})

export { AuthContext }
export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null)
    useEffect(() => {
        netlifyIdentity.on("login", user => {
            setUser(user)
            netlifyIdentity.close()
            console.log("login event")
        })
        // init netlify identity connection
        netlifyIdentity.init()
    }, [])
    const login = () => {
        netlifyIdentity.open()
    }
    const logout = () => {

    }
    let authReady = false
    const authObject = {
        user, login, logout, authReady
    }
    return (
        <AuthContext.Provider value={authObject}>
            {children}
        </AuthContext.Provider>
    )
}