import { useEffect, useState } from "react"
import Car from "./Car"
import '../Navbar/Navbar.css'
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from "../CardSkeleton"
import { Link } from "react-router-dom"

const Cate = ({val}) => {
    const [isLoading, setLoading] = useState(false)
    const [data, setnewsData] = useState(null)
    const API_KEY = "f6576093191141c2bcb7be35efe326b8"

    const getData = async () => {
        setLoading(true)
        // const response = await fetch(`https://newsapi.org/v2/top-headlines?${val}&apiKey=${API_KEY}`)
        const response = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${val}/in.json`)
        const jsonData = await response.json();
        if (jsonData) {
            setnewsData(jsonData.articles)
        }
        setLoading(false)
    }
    useEffect(() => {
        getData()
    }, [])

    if (isLoading)
        return (
            <>
                <Link to={val} className="text">{val.toUpperCase()} <span className="red-text">NEWS</span></Link>
                <CardSkeleton />
                <button className='load-more'>View  More....</button>
            </>
        )

    else
        return (
            <>
                <Link to={val} className="text">{val.toUpperCase()} <span className="red-text">NEWS</span></Link>
                <Car detail={data} />
                <button className='load-more'><a href={val} className='view-more'>View More</a></button>
            </>
        )
}

export default Cate