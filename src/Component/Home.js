import React from 'react'
import { Carousel } from "react-bootstrap";
import CountUp from "react-countup";
import "./Home.css";


const Home = () => {

    return (
        <div>
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
                    <button id="read-button">
                        READ MORE
                    </button>
                </div>
                <div className="text-p">
                    <h4>Our Services</h4>
                    <p className='p-text'>
                        Over the years, the company has built up the infrastructure and management to car, bike provide a  customer friendly organization to meet your logistic requirements with optimal efficiency.
                    </p>
                    <button id="read-button">
                        READ MORE
                    </button>
                </div>
                <div className="text-p">
                    <h4>Career Prospects</h4>
                    <p className='p-text'>
                        We have a trained and talented workforce in our company who help us serve our customers better. We believe in continual development and learning-by-doing.
                    </p>
                    <button id="read-button">
                        READ MORE
                    </button>
                </div>
            </div>


            <div className='counter-up'>
                <div className='content'>
                    <div className='box'>
                        <div class="icon"><i className="fa fa-history"></i></div>
                        <CountUp className="counter" end={724} duration={6} />
                        <div className="text">Working Hours</div>
                    </div>
                    <div className='box'>
                        <div class="icon"><i className="fa fa-gift"></i></div>
                        <CountUp className="counter" end={508} duration={6} />
                        <div className="text">Complete<br /> Projects</div>
                    </div>
                    <div className='box'>
                        <div class="icon"><i className="fa fa-users"></i></div>
                        <CountUp className="counter" end={436} duration={6} />
                        <div className="text">Happy Clients</div>
                    </div>
                    <div className='box'>
                        <div class="icon"><i className="fa fa-star"></i></div>
                        <CountUp className="counter" end={102} duration={6} />
                        <div className="text">Awards Received</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
