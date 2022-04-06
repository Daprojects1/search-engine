import { useContext } from "react"
import NavContext from "../Context/NavContext"
import Nav from "./nav"


const Layout = ({ children }) => {
    const context = useContext(NavContext)
    let searching = context.searching
    const mainStyles = {
        width: "85vw",
        maxWidth: "990px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: searching ? "unset" : "center",
        alignItems: searching ? "unset" : "center",
        height: "60vh"
    }

    return (
        <div style={mainStyles}>
            <Nav />
            {children}
        </div>
    )
}

export default Layout