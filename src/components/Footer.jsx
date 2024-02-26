import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import "../styles/Footer.css";
function Footer() {
  function Instagram()
  {
    window.open('https://www.instagram.com/', '_blank');
  }
  function Twitter()
  {
    window.open('https://www.twitter.com/', '_blank');
  }
  function FaceBook()
  {
    window.open('https://www.facebook.com/', '_blank');
  }
  function LinkedIn()
  {
    window.open('https://www.linkedin.com/', '_blank');
  }
  return (
    <div className='footer'>
        <div className='socialMedia'> 
        <FaSquareInstagram onClick={Instagram}/>
        <FaSquareXTwitter onClick={Twitter} />
        <FaFacebookSquare onClick={FaceBook} />
        <FaLinkedin onClick={LinkedIn} />

        </div>
           
            <p>&copy; 2024 fitsice.com</p>
       
      
    </div>
  )
}

export default Footer
