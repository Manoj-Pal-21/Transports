import React from 'react'
import "./Ourcontacts.css";

const Ourcontacts = () => {
    return (
        <div>
            <figure className='position-relative'>
                <img src="images/H3.png" alt="" className='c-img' />
                <figcaption>
                    <h1>Contact Us</h1>
                    <p>We undertake Surface Transportation for Several<br />Industries on a pan-India basis.</p>
                </figcaption>
            </figure>

            <div className='h-contact'><h1>Zonal Head Offices</h1></div>

            <div className='contact-container'>
                <div className='left-contant'>
                    <h3 className="h-title">Delhi Office</h3>
                    <h4 className='h-name'>Mr. Manoj pal</h4>
                    <p className='h-para'>C-1/4 2nd floor, Behind Ambica Society, PrashantVihar, Rohini, New Delhi-110085</p>

                    <div className='icon-no'>
                        <a href="tel:1234567890" className='fas fa-phone'><strong> Phone : </strong></a>
                        <br />
                        <em>27557771/2/3</em>
                    </div>

                    <div className='icon-email'>
                        <a href="mailto:aadimaurya2000@gmail.com" className='fa fa-envelope'><strong> Email : </strong></a>
                        <br />
                        <em>manoj935@gmail.com</em>
                    </div>
                </div>

                <div className='middle-contant'>
                    <h3 className="h-title">Mumbai Office</h3>
                    <h4 className='h-name'>Mr. Rahul Sah</h4>
                    <p className='h-para'>107, Kuber Complex, OppLaxmi Industrial Estate, Oshiwara Link Road, Andheri West-400053</p>

                    <div className='icon-no'>
                        <a href="tel:1234567890" className='fas fa-phone'><strong> Phone : </strong></a>
                        <br />
                        <em>26730674, 66921557</em>
                    </div>

                    <div className='icon-email'>
                        <a href="mailto:aadimaurya2000@gmail.com" className='fa fa-envelope'><strong> Email : </strong></a>
                        <br />
                        <em>rahul935@gmail.com</em>
                    </div>
                </div>

                <div className='right-contant'>
                    <h3 className="h-title">Mumbai Office</h3>
                    <h4 className='h-name'>Mr. Aadarsh Maurya | Mr. Manoj Pal</h4>
                    <p className='h-para'>A-41, DevrajUrs. Trucks Terminal, Opp. Kanteereva Studios, Yashwantpur, Bangalore-560022</p>


                    <div className='icon-no'>
                        <a href="tel:1234567890" className='fas fa-phone'><strong> Phone : </strong></a>
                        <br />
                        <em>080-23570315/16</em>
                    </div>

                    <div className='icon-email'>
                        <a href="mailto:aadimaurya2000@gmail.com" className='fa fa-envelope'><strong> Email : </strong></a>
                        <br />
                        <em>aadarsh935@gmail.com</em>
                        <br />
                        <em>manoj935@gmail.com</em>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Ourcontacts;
