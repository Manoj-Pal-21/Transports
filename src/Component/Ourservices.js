import React from 'react'
import "./Ourservices.css";

const Ourservices = () => {
    return (
        <div>
            <figure className='position-relative'>
                <img src="images/H2.png" alt="" className='c-img' />
                <figcaption>
                    <h1>Our Services</h1>
                    <p>We undertake Surface Transportation for Several<br />Industries on a pan-India basis.</p>
                </figcaption>
            </figure>

            <hr/>

            <div className='container-skew'>
                <div className='side-img'>
                    <img src="images/H5.png" alt="" className='s-img'></img>
                </div>
                <div className='c-text'>
                    <h1>Consumer Goods & E-Commerce</h1>
                    <p>
                        We are certified with FSSAI for transporting Foods and Consumer products. We deploy Double-Driver and Express Delivery to meet extremely short TAT times for our e-Commerce customers.                    </p>
                </div>
            </div>

            <hr />

            <div className='container-skew1'>
                <div className='c-text1'>
                    <h1>Pharmaceuticals & Chemicals</h1>
                    <p>
                        Transportation for sensitive products and dangerous goods is undertaken by specially trained drivers and fully compliant vehicles. The field team is well trained by our EHS team for safe loading and emergency measures for such products.                    </p>
                </div>
                <div className='side-img1'>
                    <img src="images/T.png" alt="" className='s-img1'></img>
                </div>
            </div>

            <hr />

            <div className='container-skew'>
                <div className='side-img'>
                    <img src="images/H6.png" alt="" className='s-img'></img>
                </div>
                <div className='c-text'>
                    <h1>Engineering Goods, Tyres & Automobile Spares</h1>
                    <p>
                        We undertake movement of goods to synchronize with the customer’s Just-In-Time (JIT) demands, including materials for line-feeding and time sensitive cargo. Most materials dictate daily plant operations, thus safe and timely deliveries are critical to avoid inventory shortage.                    </p>
                </div>
            </div>

            <hr />

            <div className='container-skew1'>
                <div className='c-text1'>
                    <h1>Sensitive Cargo, Projects & Over Dimensional Cargo</h1>
                    <p>
                        We specialize in project cargo and have completed several projects for materials including reactors, boilers, transformers, wagons and heavy machinery upto remote site-locations.
                        MRI Scanners and other expensive high safety cargo.</p>
                </div>
                <div className='side-img1'>
                    <img src="images/H7.png" alt="" className='s-img1'></img>
                </div>
            </div>
        </div>
    )
}

export default Ourservices;
