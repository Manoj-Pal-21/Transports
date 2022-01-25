import React from 'react'
import "./Ourcontacts.css";

const Ourcontacts = () => {

    window.scrollTo(0, 0);

    return (
        <div className="main-container">
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
                    <h2 className="h-title">Delhi Office</h2>
                    <h4 className='h-name'>Mr. Manoj pal</h4>
                    <p className='h-para'>C-1/4 2nd floor, Behind Ambica Society, PrashantVihar, Rohini, New Delhi-110085</p>

                    <div className='icon-no'>
                        <a href="tel:8408966407" className="fas fa-phone"><strong> Phone : </strong></a>
                        <br />
                        <span>27557771/2/3</span>
                    </div>

                    <div className='icon-email'>
                        <a href="mailto:manojpubg1999@gmail.com" className='fa fa-envelope'><strong> Email : </strong></a>
                        <br />
                        <span>manoj935@gmail.com</span>
                    </div>
                </div>

                <div className='middle-contant'>
                    <h2 className="h-title">Mumbai Office</h2>
                    <h4 className='h-name'>Mr. Rahul Sah</h4>
                    <p className='h-para'>107, Kuber Complex, OppLaxmi Industrial Estate, Oshiwara Link Road, Andheri West-400053</p>

                    <div className='icon-no'>
                        <a href="tel:9834848901" className='fas fa-phone'><strong> Phone : </strong></a>
                        <br />
                        <span>26730674, 66921557</span>
                    </div>

                    <div className='icon-email'>
                        <a href="mailto:00rahul00sah@gmail.com" className='fa fa-envelope'><strong> Email : </strong></a>
                        <br />
                        <span>rahul935@gmail.com</span>
                    </div>
                </div>

                <div className='right-contant'>
                    <h2 className="h-title">Mumbai Office</h2>
                    <h4 className='h-name'>Mr. Aadarsh Maurya | Mr. Manoj Pal</h4>
                    <p className='h-para'>A-41, DevrajUrs. Trucks Terminal, Opp. Kanteereva Studios, Yashwantpur, Bangalore-560022</p>


                    <div className='icon-no'>
                        <a href="tel:9699835202" className='fas fa-phone'><strong> Phone : </strong></a>
                        <br />
                        <span>080-23570315/16</span>
                    </div>

                    <div className='icon-email'>
                        <a href="mailto:aadimaurya2000@gmail.com" className='fa fa-envelope'><strong> Email : </strong></a>
                        <br />
                        <span>aadarsh935@gmail.com</span>
                        <br />
                        <span>manoj935@gmail.com</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Ourcontacts;
