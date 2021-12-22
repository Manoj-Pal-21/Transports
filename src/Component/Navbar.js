import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <div>
            <div className='w-container'>
                <div className='whatsapp'>
                    <img src="https://img.icons8.com/office/344/whatsapp.png" className="icon" alt=""></img>
                </div>
                <div className='number-text'>
                    <a href="tel:+91 9699835202" className='no-text'>place order on +91 9699835202</a>
                </div>
            </div>

            <div className='navbar'>
                <div className='left-side'>
                    <div className='b'>
                        <i className="fal fa-bars" onClick={() => setShowLinks(!showLinks)}></i>
                    </div>
                    <div className='links' id={!showLinks ? "hidden" : ""} >
                        <Link to="/" className='a'>Home</Link>
                        <Link to="/Aboutus" className='a'>ABOUT US</Link>
                        <Link to="/Ourservices" className='a'>OUR SERVICES</Link>
                        <Link to="/Ourclients" className='a'>OUR CLIENTS</Link>
                        <Link to="/Ourcontact" className='a'>CONTACT US</Link>
                    </div>
                </div>
                <div className='right-side'>
                    <Link to="/login" className='login'>Log In</Link>
                    <Link to="/signup" className='signup'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
