import Link from "next/link";
import { AuthContext } from "../Context/authContext";
import { useContext } from "react";
import styles from "../styles/header.module.css"

const Header = () => {
    const { user, login, logout } = useContext(AuthContext)
    const { header, link } = styles
    console.log(login)
    return (
        <div style={{ display: "flex", justifyContent: "right", width: "100%", fontSize: "1rem", alignSelf: "flex-start" }} className={header}>
            {!user && <p className={link} >Login/Sign Up</p>}
            {user && <p>Sign Out</p>}
        </div >
    )
}

export default Header;