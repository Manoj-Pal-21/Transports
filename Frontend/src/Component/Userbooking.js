import React, { useEffect, useState } from 'react';
import domain from "../utils/utils";
import { v4 as uuidv4 } from 'uuid';
import "./Userbooking.css";

const UserBooking = () => {

    const [bookingData, setBoookingData] = useState("");
    const AllUserBookings = async () => {
        try {
            const res = await fetch(`${domain}/getAllUserBookings`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json()
            console.log(data);
            setBoookingData(data.data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error
            };

        } catch (error) {
            console.log(error)
        };
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        AllUserBookings();
    }, []);

    const DeleteBooking = async (id) => {
        let res = await fetch(`${domain}/deleteUserData/${id}`, {
            method: "DELETE"
        });

        const data = await res.json();
        setBoookingData(data.data);
    }

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
                                <th>FROM</th>
                                <th>TO</th>
                                <th>COST</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookingData.length
                                    ?
                                    bookingData.map((data) => {
                                        return (
                                            <tr key={uuidv4()}>
                                                <td data-title="NAME">
                                                    {data.name ? data.name : "N/A"}
                                                </td>
                                                <td data-title="LASTNAME">
                                                    {data.lastname ? data.lastname : "N/A"}
                                                </td>
                                                <td data-title="PHONE">
                                                    {data.phone ? data.phone : "N/A"}
                                                </td>
                                                <td data-title="ADDRESS">
                                                    {data.address ? data.address : "N/A"}
                                                </td>
                                                <td data-title="CITY">
                                                    {data.city ? data.city : "N/A"}
                                                </td>
                                                <td data-title="VEHICLES">
                                                    {data.vehicles ? data.vehicles : "N/A"}
                                                </td>
                                                <td data-title="FROM">
                                                    {data.from ? data.from : "N/A"}
                                                </td>
                                                <td data-title="TO">
                                                    {data.to ? data.to : "N/A"}
                                                </td>
                                                <td data-title="COST">
                                                    {data.cost ? data.cost : "N/A"}
                                                </td>
                                                <td data-title="VIEW">
                                                    <a href="#" onClick={() => DeleteBooking(data._id)}>
                                                        <img
                                                            src="https://img.icons8.com/material-rounded/20/000000/filled-trash.png"
                                                            className='details-button'
                                                            alt=""
                                                        />
                                                    </a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    <tr>
                                        <td data-title="NAME"> N/A </td>
                                        <td data-title="LASTNAME"> N/A </td>
                                        <td data-title="PHONE"> N/A </td>
                                        <td data-title="ADDRESS"> N/A </td>
                                        <td data-title="CITY"> N/A </td>
                                        <td data-title="VEHICLES"> N/A </td>
                                        <td data-title="FROM"> N/A </td>
                                        <td data-title="TO"> N/A </td>
                                        <td data-title="COST"> N/A </td>
                                        <td data-title="VIEW"> N/A </td>
                                    </tr>
                            }

                        </tbody>
                    </table>
                </div>
            </section>
        </div >
    )
}

export default UserBooking



