import Link from "next/link";
import { AuthContext } from "../Context/authContext";
import { useContext } from "react";
import styles from "../styles/header.module.css"

const Header = () => {
    const { user, login, logout, authReady } = useContext(AuthContext)
    const { header, link } = styles
    return (
        <div style={{ display: "flex", justifyContent: "right", width: "100%", fontSize: "1rem", alignItems: "center", gap: "10px" }} className={header}>
            {authReady && (
                <>
                    {!user && <p className={link} onClick={login}>Login/Sign Up</p>}
                    {user && <>
                        <p className={link} onClick={logout}>Sign Out</p>
                        <p>{user.email}</p>
                    </>}
                </>)}
        </div >
    )
}

export default Header;