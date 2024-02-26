import React,{ useState } from 'react'
import Logo from "../images/logo1.jpg"
import { Link }  from "react-router-dom";
import { MdReorder } from "react-icons/md";
import "../styles/Navbar.css"
function Navbar() {
    const [openLinks, setOpenLinks]=useState(false);
    const toggleNavbar=()=>{
           setOpenLinks(!openLinks)
    }
  return (
    <div className='navbar'>
        <div className='left' id={openLinks ? "open" : "close"}>
            <img src={Logo} alt=""/>
            <h3>Fit's Ice</h3>
            <div className='hidden'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </div>
        <div className='right'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={toggleNavbar}>
                <MdReorder />
            </button>
        </div>
    </div>
  )
}

export default Navbar
