import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {

    const Admin = localStorage.getItem("isadmin");

    const [showLinks, setShowLinks] = useState(false);

    const handleSubmit = () => {
        props.logout(false);
        localStorage.removeItem("isadmin");
    };

    return (
        <div className='navbar'>
            <div className='left-side'>
                <div className='b'>
                    <i className="fal fa-bars" onClick={() => setShowLinks(!showLinks)}></i>
                </div>
                <div className='links' id={!showLinks ? "hidden" : ""} >
                    <Link to="/" className='a' onClick={() => setShowLinks(!showLinks)}>
                        Home
                    </Link>
                    <Link to="/Aboutus" className='a' onClick={() => setShowLinks(!showLinks)}>
                        ABOUT US
                    </Link>
                    <Link to="/Ourservices" className='a' onClick={() => setShowLinks(!showLinks)}>
                        OUR SERVICES
                    </Link>
                    <Link to="/Ourclients" className='a' onClick={() => setShowLinks(!showLinks)}>
                        OUR CLIENTS
                    </Link>
                    <Link to="/Ourcontact" className='a' onClick={() => setShowLinks(!showLinks)}>
                        CONTACT US
                    </Link>
                    {
                        Admin &&
                        (
                            Admin === "true"
                            ?
                            <Link to="/Userbooking" className='a' onClick={() => setShowLinks(!showLinks)}>
                                USER BOOKINGS
                            </Link>
                            :
                            <>
                                <Link to="/Booking" className='a' onClick={() => setShowLinks(!showLinks)}>
                                    BOOKING FORM
                                </Link>
                                <Link to="/Bookingdetails" className='a' onClick={() => setShowLinks(!showLinks)}>
                                    BOOKING DETAILS
                                </Link>
                            </>
                        )
                    }
                </div>
            </div>
            <div className='right-side'>
                {
                    !Admin
                        ?
                        <>
                            <Link to="/login" className='login' onClick={() => setShowLinks(false)}>Log In</Link>
                            <Link to="/signup" className='signup' onClick={() => setShowLinks(false)}>Sign Up</Link>
                        </>
                        :
                        <Link to="/login" className='logout' onClick={handleSubmit}>Logout</Link>
                }
            </div>

        </div>
    )
}

export default withRouter(Navbar)
