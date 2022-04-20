import { useContext, useEffect, useState } from 'react'
import Router from "next/router"
import axios from 'axios'
import Layout from "../Components/layout"
import options from '../Utils/apiOptions'
import NavContext from "../Context/NavContext"
import InfoNav from '../Components/infoNav'
import InfoBody from '../Components/infoBody'
import { AuthContext } from '../Context/authContext'


export async function getStaticProps() {
  return {
    props: {
      APIKEY: process.env.REACT_APP_API_KEY
    }
  }
}
export default function Home(props) {
  const [searching, setSearching] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [currentPage, setCurrentPage] = useState("WebSearchAPI")
  const [searchResults, setSearchResult] = useState("")
  const { user, login } = useContext(AuthContext)
  const { APIKEY } = props
  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }
  const handleClickSearch = (searchValue) => {
    if (searchValue.trim().length > 0)
      grabData(searchValue, currentPage)
  }

  const handlePressSearch = (e, searchValue) => {
    if (e.keyCode === 13 && searchValue.trim().length > 0) {
      grabData(searchValue, currentPage)
    }
  }

  const grabData = (value, page) => {
    setSearching(true)
    setSearchResult("")
    axios.request(options(page, value, APIKEY)).then((response) => changePageResults(response.data.value))
      .catch((error) => {
        console.error(error);
        setSearchResult(false)
      });
  }
  const clearSearch = (e) => {
    document.querySelector("#searchInput").value = ""
  }
  const navClick = (stringApi) => {
    setCurrentPage(stringApi)
    grabData(searchValue, stringApi)
  }

  const checkIfActive = (string, obj) => {
    if (string === currentPage) return obj
    else return {}

  }
  const changePageResults = (data) => {
    setSearchResult(data)
  }
  const sendToHome = () => {
    document.querySelector("#searchInput").value = ""
    setSearchResult("")
    setSearchValue("")
    setSearching(false)
  }
  const protectingRoute = () => {
    login()
    return <div className='card'>
      <div className='error'>
        <p >You must be logged in to view this content.</p>
      </div>
    </div>
  }
  const contextData = {
    searching,
    searchValue,
    handleSearch,
    handleClickSearch,
    handlePressSearch,
    clearSearch,
    navClick,
    checkIfActive,
    searchResults,
    currentPage,
    sendToHome,
  }

  return (
    <div>
      <NavContext.Provider value={contextData}>
        <Layout >
          {searching &&
            <>
              <InfoNav />
              {user ? <InfoBody /> : protectingRoute()}
            </>}
        </Layout>
      </NavContext.Provider>
    </div>
  )
}
