import './Navbar.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { useRef } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const navRef = useRef()
  const showNavbar = () => {
      navRef.current.classList.toggle("show-menu")
  }

  return (
    <>

  <header>
  <Link href="/" className="tex">PULSE <span className="red-tex">24</span></Link>
      <nav ref={navRef}>
        <Link to='/'>home</Link>
        <Link to='/sports'>sports</Link>
        <Link to='/entertainment'>entertainment</Link>
        <Link to='/health'>health</Link>
        <Link to='/technology'>technology</Link>
        <Link to='/contactus'>contact us</Link>
        <div class="nav-btn nav-close" onClick={showNavbar}>
                Close
            </div>
      </nav>
      <div class="menu nav-btn" onClick={showNavbar}>
                <div class="menuline"></div>
                <div class="menuline"></div>
                <div class="menuline"></div>
            </div>
    </header>
    </>
  )
}

export default Navbar