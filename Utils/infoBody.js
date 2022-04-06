const turnToHtml = (value) => {
    const parser = new DOMParser()
    const floatingElement = parser.parseFromString(value, 'text/html')
    return floatingElement.body.innerText
}
const isSecure = (bool) => {
    return bool ? "secure" : "not secure"
}
const secureStyles = (isSafe) => {
    return {
        fontSize: "15px",
        color: isSafe ? "#2C5244" : "#751B2C"
    }
}
const loadingOrUnavailable = { width: "100%", marginTop: "40px", display: "flex", justifyContent: "center" }
const h1Styles = {
    color: "#563182"
}
const smallText = {
    color: "gray"
}

export default {
    turnToHtml, isSecure, secureStyles, loadingOrUnavailable, smallText,
}