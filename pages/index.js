import { useContext } from 'react'
import NavContext from "../Context/NavContext"
import InfoNav from '../Components/infoNav'
import InfoBody from '../Components/infoBody'

export default function Home() {
  const context = useContext(NavContext)
  let { searching } = context
  return (
    <div>
      {searching ? <InfoNav /> : ""}
      {searching ? <InfoBody /> : ""}
    </div>
  )
}
