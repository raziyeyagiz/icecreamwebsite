import React from 'react'
import multipleImage from "../images/multiple.jpeg"
import "../styles/Contact.css"
function Contact() {
  return (
    <div className='contact'>
        <div className='left' style={{backgroundImage:`url(${multipleImage})`}}></div>
        <div className='right'>
            <h1>Contact US</h1>
            <form id="contact-form" method="POST">
                <label htmlFor="name">
                    Full Name
                </label>
                <input name='name' placeholder="Enter full name..." type="text"/>
                <label htmlFor="email">
                    Email
                </label>
                <input name='email' placeholder="Enter your email address..." type="email"/>
                <label htmlFor="message">
                    Message
                </label>
                <textarea rows="6" name="message" placeholder="Enter your message..." required/>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
