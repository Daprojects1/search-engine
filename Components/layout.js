import { useContext } from "react"
import NavContext from "../Context/NavContext"
import Header from "./header"
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
        marginTop: "1.5rem "
    }

    return (

        <div style={mainStyles}>
            <Header maxWidth={!searching ? "620px" : "100%"} />
            <Nav />
            {children}
        </div>
    )
}

export default Layout