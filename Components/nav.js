import { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAtom, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons'
import NavContext from "../Context/NavContext"
import styles from '../styles/nav.module.css'

const Nav = () => {
    const context = useContext(NavContext)
    let { searching, handleSearch, handleClickSearch, handlePressSearch, searchValue, clearSearch, sendToHome } = context
    let { navContainer, nav, headerText, icon, inputSpan, navInput } = styles
    return (
        <div className={navContainer}>
            <div style={{ alignItems: "center", flexDirection: searching ? "row" : "column", padding: "0 10px" }} className={nav}>
                <ul className={headerText}>
                    <li style={{ textAlign: "center", cursor: "pointer" }} onClick={sendToHome}><FontAwesomeIcon className={icon} icon={faAtom} bounce={!searching} /> Search Engine </li>
                </ul>
                <div className={inputSpan}><FontAwesomeIcon className={icon} icon={faMagnifyingGlass} onClick={() => handleClickSearch(searchValue)} />
                    <input type="text" id="searchInput" className={navInput} input={searchValue} placeholder="Search something" onChange={handleSearch} onKeyDown={(e) => handlePressSearch(e, searchValue)} />
                    <FontAwesomeIcon className={icon} style={{ width: "12" }} icon={faX} onClick={clearSearch} />
                </div>
            </div >
        </div>
    )
}

export default Nav