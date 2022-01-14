import React from 'react'
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import "./Home.css";


const Home = () => {

    window.scrollTo(0, 0);

    return (
        <div className="main-container">
            <Carousel>
                <Carousel.Item>
                    <img src="images/T.png" alt="" className='c-img' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="images/T1.png" alt="" className='c-img' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="images/T2.png" alt="" className='c-img' />
                </Carousel.Item>
            </Carousel>


            <div className='text'>
                <div className="text-p">
                    <h4>About Us</h4>
                    <p className='p-text'>
                        We introduce ourselves as one of the leading transport Company of India founded in January, 1985 having their own fleet of 475 trucks, including Car Carrier Trailers/Goods Containers Trailers / Multi XL Containers.
                    </p>

                    <Link to="/Aboutus" id="read-button">READ MORE</Link>

                </div>
                <div className="text-p">
                    <h4>Our Services</h4>
                    <p className='p-text'>
                        Over the years, the company has built up the infrastructure and management to car, bike provide a  customer friendly organization to meet your logistic requirements with optimal efficiency.
                    </p>

                    <Link to="/Ourservices" id="read-button">READ MORE</Link>

                </div>
                <div className="text-p">
                    <h4>Career Prospects</h4>
                    <p className='p-text'>
                        We have a trained and talented workforce in our company who help us serve our customers better. We believe in continual development and learning-by-doing.
                    </p>

                    <Link to="/Ourclients" id="read-button">READ MORE</Link>

                </div>
            </div>


            <div className='counter-up'>
                <div className='content'>
                    <div className='box'>
                        <img src="https://img.icons8.com/ios/64/000000/last-24-hours.png" className='icon' alt="" />
                        <CountUp className="counter" end={724} duration={6} />
                        <div className="text">Working Hours</div>
                    </div>
                    <div className='box'>
                        <img src="https://img.icons8.com/ios/64/000000/task-completed.png" className='icon1' alt="" />
                        <CountUp className="counter" end={508} duration={6} />
                        <div className="text">Complete<br /> Projects</div>
                    </div>
                    <div className='box'>
                        <img src="https://img.icons8.com/ios/64/000000/family--v2.png" className='icon' alt="" />
                        <CountUp className="counter" end={436} duration={6} />
                        <div className="text">Happy Clients</div>
                    </div>
                    <div className='box'>
                        <img src="https://img.icons8.com/ios/64/000000/medal.png" className='icon' alt="" />
                        <CountUp className="counter" end={102} duration={6} />
                        <div className="text">Awards Received</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
