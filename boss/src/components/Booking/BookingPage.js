// src/components/TaxiBookingForm.js
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import "./BookingPage.css";

function BookingPage() {
    // form
    
    const [wnumber, setwnumber] = useState();
    const [fromLocation, setFromLocation] = useState("");
    const [toLocation, setToLocation] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [Number, setNumber] = useState("");

    const handleFromLocationChange = (e) => {
        setFromLocation(e.target.value);
    };

    const handleToLocationChange = (e) => {
        setToLocation(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleMembersChange = (e) => {
        setNumber(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Booking details:", {
            From: fromLocation,
            To: toLocation,
            Name: name,
            "Phone Number": phoneNumber,
        });
    };
    // form end

    return (
        <div className="form-cover">
            <div className="taxi-booking-form">
                <h2>Book a Taxi</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>From Location:</label>
                        <input
                            type="text"
                            value={fromLocation}
                            onChange={handleFromLocationChange}
                            placeholder="Enter your pickup location"
                            required
                        />
                    </div>
                    <div className="form-group To-location">
                        <label>To Location:</label>
                        <input
                            type="text"
                            value={toLocation}
                            onChange={handleToLocationChange}
                            placeholder="Enter your destination"
                            required
                        />
                    </div>
                    <div className="form-group Name">
                        <label>Name:</label>
                        <input type="text" value={name} onChange={handleNameChange} placeholder="Your name" required />
                    </div>
                    <div className="form-group Members">
                        <label>Members:</label>
                        <input
                            type="number"
                            value={Number}
                            onChange={handleMembersChange}
                            placeholder="Members Count"
                            required
                        />
                    </div>
                    <div className="form-group Phone-Number">
                        <label>Phone Number:</label>
                        <PhoneInput placeholder="Enter phone number" value={phoneNumber} onChange={setPhoneNumber} />
                    </div>
                    <div className="form-group Watsapp-Number">
                        <label>Watsapp Number:</label>
                        <PhoneInput placeholder="Enter phone number" value={wnumber} onChange={setwnumber} />
                    </div>
                    <div className="form-group House-Address">
                        <label>House Address:</label>

                        <input name="address" placeholder="Address" type="text" />
                        <input className="secondinput" name="unit" placeholder="Unit number" type="text" />
                        <input name="city" placeholder="City" type="text" />
                        <input className="secondinput" name="state" placeholder="State" type="text" />
                        <input name="country" placeholder="Country" type="text" />
                        <input className="secondinput" name="postcode" placeholder="Postcode" type="text" />
                    </div>
                    <button  type="submit">Book Now</button>
                </form>
               
            </div>
        </div>
    );
}

export default BookingPage;
