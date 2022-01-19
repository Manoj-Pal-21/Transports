import React from 'react';
import { Link } from 'react-router-dom';
import "./Userbooking.css";

const userBooking = () => {

    window.scrollTo(0, 0);
    return (
        <div className='admin-table'>
            <section className="shadow-lg p-4 mb-5 bg-white rounded">
                <h1 className="pb-2">USER DATA</h1>
                <div className="table-responsive" id="no-more-tables">
                    <table className="table bg-white">
                        <thead className='bg-dark text-light'>
                            <tr>
                                <th>NAME</th>
                                <th>PHONE</th>
                                <th>ADDRESS</th>
                                <th>CITY</th>
                                <th>COUNTRY</th>
                                <th>VEHICLES</th>
                                <th>COST</th>
                                <th>VIEW</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-title="NAME">Aadha pagal</td>
                                <td data-title="PHONE">Choose fir batata hu</td>
                                <td data-title="ADDRESS">Lokhand wala complex</td>
                                <td data-title="CITY">Ulhasnagar</td>
                                <td data-title="COUNTRY">Hindustan</td>
                                <td data-title="VEHICLES">Hai hi nahi 😜</td>
                                <td data-title="COST">0 rupees</td>
                                <td data-title="VIEW">
                                    <Link><img src="https://img.icons8.com/ios-glyphs/20/000000/edit--v1.png" className='details-button' alt="" /></Link>

                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Link><img src="https://img.icons8.com/material-rounded/20/000000/filled-trash.png" className='details-button' alt="" /></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div >
    )
}

export default userBooking



