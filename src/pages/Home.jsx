import React from 'react'
import { Link } from "react-router-dom";
import BackImage from "..//images/ic.avif"
import "..//styles/Home.css"
function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BackImage})`}}> 
    <div className='headerContainer'  > 
    
      <h1>Fit's Ice</h1>
      <p>ICECREAM TO FIT ANY TASTE</p>
      <Link to="/menu">
      <button>ORDER NOW</button>
      </Link>
    </div>
      
    </div>
  )
}

export default Home
