import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import domain from '../utils/utils';
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import "./Booking.css";


const Booking = () => {

    const [cost, setCost] = useState("0");
    const [booking, setBooking] = useState({ name: "", lastname: "", phone: "", address: "", city: "", vehicles: "", from: "", to: "", cost: "" });

    useEffect(() => {
        // console.log("hbjdvbhjd");
        window.scrollTo(0, 0);
    }, []);


    const handleInput = (e) => {
        let name, value;
        console.log(e)
        name = e.target.name
        value = e.target.value
        console.log(name, value)

        setBooking({ ...booking, [name]: value });

        if (e.target.type === "checkbox") {
            if (e.target.checked) {
                setCost(Number(cost) + Number(e.target.value));
            } else {
                setCost(Number(cost) - Number(e.target.value));
            };
        };
    };

    const PostData = async () => {
        const { name, lastname, phone, address, city, vehicles, from, to, cost } = booking;
        const res = await fetch(`${domain}/booking`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                lastname,
                phone,
                address,
                city,
                vehicles,
                from,
                to,
                cost
            })
        });

        const data = await res.json();

        if (!data.success || !data) {
            window.alert(data.error);
        } else {
            window.alert(data.message);
        }
    };

    //Razorpay

    const history = useHistory();
    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script")
            script.src = src

            script.onload = () => {
                resolve(true)
            }

            script.onerror = () => {
                resolve(false)
            }

            document.body.appendChild(script)
        })
    }


    const displayRazorpay = async (amount) => {
        const { name, lastname, phone, address, city, vehicles, from, to, cost } = booking;

        if (!name || !lastname || !phone || !address || !city || !vehicles || !from || !to || !cost) {
            alert("Please fill the fields");
            return
        };
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

        if (!res) {
            alert("You are offline... Failed lo load Razorpay SDK")
            return
        };

        const options = {
            key: "rzp_test_U18kHVu8D2FUuP",
            currency: "INR",
            amount: amount * 100,
            name: `${booking.name} ${booking.lastname}`,
            description: "Thanks for purchasing",
            image: "https://i.pinimg.com/originals/2e/f2/f3/2ef2f3289430a49cfbd483bf44dd2f17.jpg",

            handler: function () {
                alert("payment is Successfull")
                PostData();
                history.push("/Bookingdetails");
            },
            prefill: {
                name: "Manoj"
            }
        };

        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    return (
        <div className='form-table'>
            <form>
                <h1>Online Truck Booking</h1>
                <h3>Please fill in the form correctly to book a truck Online</h3>
                <fieldset>

                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">NAME <strong>*</strong></label>
                        <input type="text" id="disabledTextInput" className="form-control" placeholder="Enter your name" autoComplete='off'
                            name="name"
                            value={booking.name}
                            onChange={handleInput}
                            required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">LASTNAME <strong>*</strong></label>
                        <input type="text" id="disabledTextInput" className="form-control" placeholder="Enter your surname" autoComplete='off'
                            name="lastname"
                            value={booking.lastname}
                            onChange={handleInput}
                            required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">Phone <strong>*</strong></label>
                        <input type="number" id="disabledTextInput" className="form-control" placeholder="Enter your number" autoComplete='off' maxLength={10}
                            onInput={(e) => {
                                console.log(e.target.maxLength)
                                if (e.target.value.length > e.target.maxLength) {
                                    e.target.value = e.target.value.slice(0, e.target.maxLength);
                                };
                            }
                            }
                            name="phone"
                            value={booking.phone}
                            onChange={handleInput}
                            required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">ADDRESS <strong>*</strong> </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" autoComplete='off'
                            name="address"
                            value={booking.address}
                            onChange={handleInput}
                            required></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">City <strong>*</strong> </label>
                        <input type="text" id="disabledTextInput" className="form-control" placeholder="Enter your city" autoComplete='off'
                            name="city"
                            value={booking.city}
                            onChange={handleInput}
                            required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">STATE / PROVINCE</label>
                        <input type="text" id="disabledTextInput" className="form-control" placeholder="Enter your state" autoComplete='off' />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">POSTAL / ZIPCODE</label>
                        <input type="number" id="disabledTextInput" className="form-control" placeholder="Enter your state" autoComplete='off'  maxLength={6}
                            onInput={(e) => {
                                console.log(e.target.maxLength)
                                if (e.target.value.length > e.target.maxLength) {
                                    e.target.value = e.target.value.slice(0, e.target.maxLength);
                                };
                            }
                            }
                        />
                    </div>

                    <div className='date-select'>
                        <DateTimePickerComponent placeholder="Enter Date Range"></DateTimePickerComponent>
                    </div>

                    <div className='select-box'>
                        <label htmlFor="disabledTextInput" className="form-label">SELECT VEHICLES <strong>*</strong></label>
                        <select className="form-select" aria-label="Default select example"
                            name="vehicles"
                            value={booking.vehicles}
                            onChange={handleInput}
                            required>
                            <option value="">Select Vehicles</option>
                            <option value="Agricultural Truck"> Agricultural Truck</option>
                            <option value="Box/Straight Truck"> Box/Straight Truck </option>
                            <option value="Car Carrier">Car Carrier</option>
                            <option value="Car Carrier">Car Carrier</option>
                            <option value="Cement Mixer">Cement Mixer</option>
                            <option value="Delivery Van">Delivery Van</option>
                            <option value="Dump Truck">Dump Truck</option>
                            <option value="Flat Bed Truck">Flat Bed Truck</option>
                            <option value="Refrigerated Truck">Refrigerated Truck</option>
                            <option value="Stake Body Truck">Stake Body Truck</option>
                            <option value="Step Van">Step Van</option>
                            <option value="Tank Truck">Tank Truck</option>
                            <option value="Truck Tractor">Truck Tractor</option>
                        </select>
                    </div>

                    <div className='select-box'>
                        <label htmlFor="disabledTextInput" className="form-label">FROM <strong>*</strong></label>
                        <select className="form-select" aria-label="Default select example"
                            name="from"
                            value={booking.from}
                            onChange={handleInput}
                            required>
                            <option value="">Select From State</option>
                            <option value="Andhra Pradesh"> Andhra Pradesh </option>
                            <option value="Assam"> Assam </option>
                            <option value="Bihar"> Bihar</option>
                            <option value="Gujrat"> Gujrat </option>
                            <option value="Goa">Goa  </option>
                            <option value="Haryana"> Haryana </option>
                            <option value="Himachal P"> Himachal P</option>
                            <option value="Jammu & Kashmir"> Jammu & Kashmir </option>
                            <option value="Karnataka"> Karnataka </option>
                            <option value="Kerala"> Kerala </option>
                            <option value="Madhya P"> Madhya P </option>
                            <option value="Maharashtra"> Maharashtra</option>
                            <option value="Manipur"> Manipur </option>
                            <option value="Meghalaya"> Meghalaya </option>
                            <option value="Mizoram"> Mizoram </option>
                            <option value="Nagaland"> Nagaland </option>
                            <option value="Orrisa"> Orrisa </option>
                            <option value="Punjab"> Punjab </option>
                            <option value="Rajasthan"> Rajasthan </option>
                            <option value="Sikkim"> Sikkim </option>
                            <option value="Tamil Nadu"> Tamil Nadu </option>
                            <option value="Tripura"> Tripura </option>
                            <option value="Uttar Pradesh"> Uttar Pradesh </option>
                            <option value="West Bengal"> West Bengal </option>
                            <option value="Chhatisgarh"> Chhatisgarh </option>
                            <option value="Uttrakhand"> Uttrakhand </option>
                            <option value="Jharkhand"> Jharkhand </option>
                            <option value="Telangana"> Telangana </option>
                        </select>
                    </div>

                    <div className='select-box'>
                        <label htmlFor="disabledTextInput" className="form-label">TO :<strong>*</strong></label>
                        <select className="form-select" aria-label="Default select example"
                            name="to"
                            value={booking.to}
                            onChange={handleInput}
                            required>
                            <option value=""> Select To State </option>
                            <option value="Andhra Pradesh"> Andhra Pradesh </option>
                            <option value="Assam"> Assam </option>
                            <option value="Bihar"> Bihar</option>
                            <option value="Gujrat"> Gujrat </option>
                            <option value="Goa">Goa  </option>
                            <option value="Haryana"> Haryana </option>
                            <option value="Himachal P"> Himachal P</option>
                            <option value="Jammu & Kashmir"> Jammu & Kashmir </option>
                            <option value="Karnataka"> Karnataka </option>
                            <option value="Kerala"> Kerala </option>
                            <option value="Madhya P"> Madhya P </option>
                            <option value="Maharashtra"> Maharashtra</option>
                            <option value="Manipur"> Manipur </option>
                            <option value="Meghalaya"> Meghalaya </option>
                            <option value="Mizoram"> Mizoram </option>
                            <option value="Nagaland"> Nagaland </option>
                            <option value="Orrisa"> Orrisa </option>
                            <option value="Punjab"> Punjab </option>
                            <option value="Rajasthan"> Rajasthan </option>
                            <option value="Sikkim"> Sikkim </option>
                            <option value="Tamil Nadu"> Tamil Nadu </option>
                            <option value="Tripura"> Tripura </option>
                            <option value="Uttar Pradesh"> Uttar Pradesh </option>
                            <option value="West Bengal"> West Bengal </option>
                            <option value="Chhatisgarh"> Chhatisgarh </option>
                            <option value="Uttrakhand"> Uttrakhand </option>
                            <option value="Jharkhand"> Jharkhand </option>
                            <option value="Telangana"> Telangana </option>
                        </select>
                    </div>

                    <div className='price'>
                        <h4>Truck Fire prices <strong>*</strong></h4>
                        <input type="checkbox" name="cost" value="500" onChange={handleInput} />
                        <span className='price-text'>&nbsp;&nbsp;0 - 10 km Truck Fare <strong>&nbsp;&nbsp;₹ 500</strong></span>

                        <br />

                        <input type="checkbox" name="cost" value="1000" onChange={handleInput} />
                        <span className='price-text'>&nbsp;&nbsp;0 - 10 km Truck Fare(Return Included) <strong>&nbsp;&nbsp;₹ 1000</strong></span>

                        <br />

                        <input type="checkbox" name="cost" value="1500" onChange={handleInput} />
                        <span className='price-text'>&nbsp;&nbsp;11 - 20 km Truck Fare <strong>&nbsp;&nbsp;₹ 1500</strong></span>

                        <br />

                        <input type="checkbox" name="cost" value="2000" onChange={handleInput} />
                        <span className='price-text'>&nbsp;&nbsp;11 - 20 km Truck Fare(Return Included) <strong>&nbsp;&nbsp;₹ 2000</strong></span>

                        <br />

                        <input type="checkbox" name="cost" value="2500" onChange={handleInput} />
                        <span className='price-text'>&nbsp;&nbsp;21 - 40 km Truck Fare <strong>&nbsp;&nbsp;₹ 2500</strong></span>

                        <br />

                        <input type="checkbox" name="cost" value="5000" onChange={handleInput} />
                        <span className='price-text'>&nbsp;&nbsp;21 - 40 km Truck Fare(Return Included) <strong>&nbsp;&nbsp;₹ 5000</strong></span>
                    </div>

                    <div className='red-text'>
                        <span className="form-description-content">If you want to return with us please select the payments with "return included" prices. Thanks!</span>
                    </div>

                    <div className='subtotal-container'>
                        <span className='subtotal-text'>
                            &nbsp;Subtotal :
                        </span>
                        <span className='payment-subtotal'>
                            <strong>&nbsp;₹ {cost}</strong>
                        </span>

                        <br />

                        <span className='subtotal-text'>
                            &nbsp;Ok : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span className='payment-subtotal'>
                            <strong>&nbsp;₹ {cost}</strong>
                        </span>
                    </div>

                    <span>
                        <h6> Total <strong>&nbsp;₹ {cost}</strong></h6>
                    </span>
                    <button
                        className="Booking-submit"
                        onClick={(e) => {
                            e.preventDefault();
                            displayRazorpay(cost);
                        }}>
                        Book Truck
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

export default Booking
