import React, { useRef,useState,useEffect } from 'react'
import "./navbar.scss"
import {FaBars,FaTimes} from "react-icons/fa"
import { Link } from 'react-router-dom';
import {getTopNav} from "../../data/navbarData"

const Navbar = () => {

  const [navItem, setNavItem] = useState([]);
  useEffect(() => {
    setNavItem(getTopNav())
}, [])
  
  const navRef = useRef();
  const showNav = () => {
    navRef.current.classList.toggle("responsive")
  }

  return (

    <nav className='navbar'>
      <div className="container">
      <Link to="/" className='link'><h1 className="logo">Archiv</h1></Link>
        <ul className="links" ref={navRef}>
          {navItem.map((item)=>
          
            <Link to={item.to} className="link">{item.name}</Link>
          
          )}
          <button className='nav-res-btn nav-close-btn' onClick={showNav}><FaTimes/></button>
        </ul>
        <div className='nav-btns'>
          <button className='nav-btn'>Donate</button>
        </div>
        <button className='nav-res-btn' onClick={showNav}><FaBars/></button>
      </div>
    </nav>

  )
}

export default Navbar
