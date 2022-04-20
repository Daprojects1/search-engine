import { useContext, useState } from 'react'
import NavContext from "../Context/NavContext"
import { Spinner } from 'react-bootstrap'
import Footer from './footer'
import bodyUtils from "../Utils/infoBody"
import styles from "../styles/infoBody.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const InfoBody = () => {
    const context = useContext(NavContext)
    let { searchResults, currentPage } = context
    let { searchBody, res, imgDisplay, newsCard } = styles
    let { turnToHtml, isSecure, secureStyles, loadingOrUnavailable, smallText, h1Styles } = bodyUtils

    if (searchResults === false) return <div style={loadingOrUnavailable}>Sorry Your request was not processed, please refresh</div>
    if (searchResults === "") return <div style={loadingOrUnavailable}><Spinner animation="border" /></div>
    else return (
        <div className={searchBody}>
            {currentPage === "WebSearchAPI" ?
                <div>
                    {searchResults.map(result => (
                        <div className={res} key={result.id}>
                            <small style={smallText}>{result.url}</small>
                            <span style={secureStyles(result.isSafe)}>{` {${isSecure(result.isSafe)}}`}</span>
                            <a href={result.url} style={{ textDecoration: "none" }}> <h1 style={{ color: "#563182" }}>{result.title}</h1></a>
                            <p>{turnToHtml(result.snippet)}</p>
                        </div>))}
                </div>
                : currentPage === "ImageSearchAPI" ? <div className={imgDisplay}>
                    {searchResults.map(result => (
                        <a href={result.url}><img src={result.thumbnail} width={250} height={250} /></a>
                    ))}
                </div> : currentPage === "NewsSearchAPI" ?
                    <div >
                        {searchResults.map(result => (
                            <div className={newsCard}>
                                <a href={result.url} style={{ textDecoration: "none" }} >
                                    <div >
                                        <small style={smallText}>{result.provider.name}</small>
                                        <span style={secureStyles(result.isSafe)}>{` {${isSecure(result.isSafe)}}`}</span>
                                        <a href={result.url} style={{ textDecoration: "none" }}><h1 style={h1Styles}>{result.title}</h1></a>
                                        <p style={{ color: "black" }}>{turnToHtml(result.snippet)}</p>
                                    </div></a>
                            </div>
                        ))}
                    </div> :
                    ""
            }

            <Footer />
        </div>
    )
}
export default InfoBody;