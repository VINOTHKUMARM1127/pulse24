import Deee from "./Components/notFound"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import { Routes, Route } from "react-router-dom"
import HomePage from "./Components/HomePage/HomePage"
import Categories from "./Components/Categories/Categories"
import Det from "./Components/Det"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="sports" element={<Categories val={'sports'} />} />
        <Route path="entertainment" element={<Categories val={'entertainment'} />} />
        <Route path="technology" element={<Categories val={'technology'} />} />
        <Route path="business" element={<Categories val={'business'} />} />
        <Route path="health" element={<Categories val={'health'} />} />
        <Route path="science" element={<Categories val={'science'} />} />
        <Route path="bbc-news" element={<Det val={'bbc-news'} />} />
        <Route path="contactus" element={<Deee />} />
      </Routes>
      <Footer />

    </>

  )
}

export default App