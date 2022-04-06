import { useContext } from 'react'
import NavContext from "../Context/NavContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faImage, faNewspaper, faVideo } from '@fortawesome/free-solid-svg-icons'
import styles from "../styles/infoNav.module.css"

const InfoNav = () => {
    const context = useContext(NavContext)
    const active = { borderBottom: "2px solid purple", borderColor: "purple" };
    let { navClick, checkIfActive } = context
    let { infoDiv, icon } = styles
    let [homePage, newsPage, imagesPage] = ["WebSearchAPI", "NewsSearchAPI", "ImageSearchAPI"]
    return (
        <div style={{ borderBottom: "1px solid lightgrey", display: "flex", gap: "20px", justifyContent: "flex-start", marginTop: "30px", padding: "" }} className={infoDiv}>
            <div style={checkIfActive(homePage, active)} onClick={() => navClick(homePage)}><FontAwesomeIcon icon={faGlobe} className={icon} /> All</div>
            <div style={checkIfActive(imagesPage, active)} onClick={() => navClick(imagesPage)}><FontAwesomeIcon icon={faImage} className={icon} /> Images</div>
            <div style={checkIfActive(newsPage, active)} onClick={() => navClick(newsPage)}><FontAwesomeIcon icon={faNewspaper} className={icon} /> News</div>
        </div>
    )
}

export default InfoNav