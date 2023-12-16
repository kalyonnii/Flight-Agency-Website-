import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Flightselection = () =>{
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="Flightselection--container">
            <select className="from">
                <option value="select">From</option>
                <option value="banglore">Banglore</option>
                <option value="chennai">Chennai</option>
                <option value="delhi">Delhi</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="mumbai">Mumbai</option>
            </select>
            <select className="to">
                <option value="select">To</option>
                <option value="banglore">Banglore</option>
                <option value="chennai">Chennai</option>
                <option value="delhi">Delhi</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="mumbai">Mumbai</option>
            </select>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} minDate={new Date()}/><br/>
            <button>Submit</button>
        </div>
    )
}

export default Flightselection


