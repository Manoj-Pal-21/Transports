import React from 'react'
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">
                <div className="footer-left">
                    <h3>Aadarsh<span>Developer</span></h3>

                    <p className="footer-links">

                        <Link to="/" className='a'>Home</Link>
                        |
                        <Link to="/Aboutus" className='a'>Aboutus</Link>
                        |
                        <Link to="/Ourservices" className='a'>Services</Link>
                        |
                        <Link to="/Ourclients" className='a'>Clients</Link>
                        |
                        <Link to="/Ourcontact" className='a'>Contacts</Link>

                    </p>

                    <p className="footer-company-name">Copyright © 2021 <strong>AadarshDeveloper</strong> | Logistics. Simplified. All Rights Reserved</p>
                </div>

                <div className="footer-center">
                    <div>
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/marker--v1.png" className="c" alt="" />
                        <p><a href="https://www.google.com/maps/place/19%C2%B012'13.6%22N+73%C2%B010'18.9%22E/@19.2037713,73.1713688,170m/data=!3m2!1e3!4b1!4m13!1m6!3m5!1s0x3be7948799a802bb:0x282ddcb4493fe3d4!2sNEETU+MEDICAL!8m2!3d19.2037864!4d73.1727916!3m5!1s0x0:0xb0a1e257a000f64e!7e2!8m2!3d19.2037697!4d73.1719158">Ulhasnagar<span>Mumbai</span></a>
                        </p>
                    </div>

                    <div>
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/phone--v1.png" className="c" alt="" />
                        <p><a href="tel:+91 9699835202">+91 96**83**02</a></p>
                    </div>

                    <div>
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/filled-message.png" className="c" alt="" />
                        <p><a href="mailto:aadimaurya2000@gmail.com">aadimaurya2000@gmail.com</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        About the company
                        <strong> Aadarsh Developer </strong> introduce ourselves as one of the leading transport Company of India founded in January, 1985 having their own fleet of 475 trucks, including Car Carrier Trailers/Goods Containers Trailers / Multi XL Containers.
                        and
                        Effects along with
                        HTML, JavaScript and Projects using C/C++.
                    </p>
                    <div className="footer-icons">

                        <Link to="/Home" className="a"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="/Home" className="a"><i className="fab fa-instagram"></i></Link>
                        <Link to="/Home" className="a"><i className="fab fa-linkedin"></i></Link>
                        <Link to="/Home" className="a"><i className="fab fa-twitter"></i></Link>
                        <Link to="/Home" className="a"><i className="fab fa-youtube"></i></Link>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
