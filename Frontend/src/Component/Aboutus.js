import React from 'react';
import "./Aboutus.css";

const Aboutus = () => {

    window.scrollTo(0, 0);

    return (
        <div className="main-container">
            <figure className='position-relative'>
                <img src="images/H.png" alt="" className='c-img' />
                <figcaption>
                    <h1>About Us</h1>
                    <p>Aadarsh Transport Pvt. Ltd. is one of the leading logistics company of India pioneering in surface transportation all across the country.</p>
                </figcaption>
            </figure>


            <div className='container-skew0'>
                <div className='c-text0'>
                    <h1>About Transports</h1>
                    <p>
                        Aadarsh Transport Pvt. Ltd. is one of the leading logistics company of India pioneering in surface transportation all across the country. The company was founded in 1982 by our Directors Mr. S. K. Jain, Mr. R. K. Jain, Mr. A. K. Jain & Mr. Sanjay Jain.
                    </p>
                    <p>
                        We were the first transporter for Maruti Suzuki, getting their indent from Kandla to transport their initial CKD Vehicles to Gurgaon. The company was at the forefront of innovating the concept of “Wheels on Wheels” & laid the foundation for the Car Carrier Industry in India.
                    </p>
                    <p>
                        We have been appreciated with the many prestigious awards including Udyog Rattan and Rashtriya Udyog for our exemplary services and contributions to the industry.
                    </p>
                </div>
                <div className='side-img0'>
                    <img src="images/H4.png" alt="" className='s-img0'></img>
                </div>
            </div>
        </div>
    )
}

export default Aboutus
