import { useEffect, useState } from "react"
import Car from "./Categories copy/Car"
import '../Components/Navbar/Navbar.css'
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from "./CardSkeleton"
import { Link } from "react-router-dom"

const De = ({ val }) => {
  const [isLoading, setLoading] = useState(false)
  const [search, setSearch] = useState(val)
  const [data, setnewsData] = useState(null)
  const API_KEY = "f6576093191141c2bcb7be35efe326b8"

  const getData = async () => {
    setLoading(true)
    // const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
    const response = await fetch(`https://saurav.tech/NewsAPI/everything/${val}.json`)
    const jsonData = await response.json();
    if (jsonData) {
      setnewsData(jsonData.articles)
    }
    setLoading(false)
  }
  useEffect(() => {
    getData()
  }, [])

  const handleInput = (e) => {
    setSearch(e.target.value)
  }

  if (isLoading) return (
    <div>
      {/* <div className="input ">
        <input type="text" onChange={handleInput} />
        <button className="but" onClick={getData}>Search</button>
      </div> */}
      <Link href="#" className="text">LATEST <span className="red-text">NEWS</span></Link>
      <CardSkeleton />
      <button className='load-more'>Load  More....</button>
    </div>)
  else
    return (
      <>
        {/* <div className="input ">
          <input type="text" onChange={handleInput} />
          <button className="but" onClick={getData}>Search</button>
        </div> */}
        <Link href="#" className="text">LATEST <span className="red-text">NEWS</span></Link>
        <Car detail={data} />
        <button className='load-more'><Link to={val} className='view-more'>View More</Link></button>
      </>
    )
}

export default De