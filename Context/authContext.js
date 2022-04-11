import React, { useEffect, useState } from "react";
import netlifyIdentity from 'netlify-identity-widget'

const AuthContext = React.createContext({
    user: null,
    login: () => { },
    logout: () => { },
    authReady: false
})


export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null)
    const [authReady, setAuthReady] = useState(false)

    useEffect(() => {
        netlifyIdentity.on("init", user => {
            setUser(user)
            setAuthReady(true)
        })
        netlifyIdentity.on("login", user => {
            setUser(user)
            netlifyIdentity.close()
            console.log(user)
        })
        netlifyIdentity.on("logout", () => setUser(null))
        // init netlify identity connection
        netlifyIdentity.init()

        return () => {
            netlifyIdentity.off("login")
            netlifyIdentity.off("logout")
        }
    }, [])
    const login = () => {
        netlifyIdentity.open()
    }
    const logout = () => {
        netlifyIdentity.logout()
    }

    const authObject = {
        user, login, logout, authReady
    }
    return (
        <AuthContext.Provider value={authObject}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext }