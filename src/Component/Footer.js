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
                        <i className="fa fa-map-marker"></i>
                        <p><span>Choos</span>
                            Mumbai</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p><a href="tel:+91 9699835202">+91 96**83**02</a></p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:aadimaurya2000@gmail.com">aadimaurya2000@gmail.com</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the company</span>
                        <strong>Aadarsh Developer</strong> introduce ourselves as one of the leading transport Company of India founded in January, 1985 having their own fleet of 475 trucks, including Car Carrier Trailers/Goods Containers Trailers / Multi XL Containers.
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
