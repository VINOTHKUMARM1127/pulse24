import './Navbar.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { useRef } from 'react'


const Navbar = () => {
  const navRef = useRef()
  const showNavbar = () => {
      navRef.current.classList.toggle("show-menu")
  }

  return (
    <>

  <header>
  <a href="/" className="tex">PULSE <span className="red-tex">24</span></a>
      <nav ref={navRef}>
        <a href='/'>home</a>
        <a href='/sports'>sports</a>
        <a href='/entertainment'>entertainment</a>
        <a href='/health'>health</a>
        <a href='/technology'>technology</a>
        <a href='/contactus'>contact us</a>
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