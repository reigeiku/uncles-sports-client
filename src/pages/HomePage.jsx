import "./HomePage.css";
import { useState } from "react";
import EventsList from "../components/EventsList";
import NavBar from "../components/NavBar";
import events from "../tempEvents";

const HomePage = () => {
    const [date, setDate] = useState(new Date().toJSON().slice(0, 10));

    return (
        <>
        <NavBar />
        <div className="home-page">
            <div className="filter-list">
                <h3>Events</h3>
                <select 
                    className="filters" 
                    name="events" 
                    id="events"
                >
                    <option>Select sport</option>
                    <option value="volleyball">Volleyball</option>
                    <option value="basketball">Basketball</option>
                    <option value="football">Football</option>
                    <option value="badminton">Badminton</option>
                </select>
                <input
                    className="filters"
                    type="date" 
                    id="eventday" 
                    name="eventday"
                    value={date}
                    onChange={(e => setDate(e.target.value))}
                ></input>
            </div>
            <EventsList events={events} />
        </div>
        </>
    );
}

export default HomePage;