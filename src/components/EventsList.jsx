import "./EventsList.css";
import logo from "../the_uncles_smaller_logo_black.png";
import calendar from "../svg/calendar.svg";
import locationPin from "../svg/location-pin.svg";
import clock from "../svg/clock.svg";
import { Link } from "react-router-dom";

const EventsList = ({ events }) => {

    return (
        <div className="events-list">
        {events.map((event, index) => {
            return (
                <Link key={event.name + index} className="event-card" to={`/events/${event.eventId}`}>
                    <div className="event-image">
                        <img src={event.image || logo} alt="event" />
                    </div>
                    <div className="event-description">
                        <h3>{event.name}</h3>
                        <ul>
                            <li>
                                <img src={calendar}  alt="calendar" />
                                {event.date}
                            </li>
                            <li>
                                <img src={locationPin} alt="location pin" />
                                {event.location}
                            </li>
                            <li>
                                <img src={clock} alt="clock" />
                                {event.time}
                            </li>
                        </ul>
                    </div>
                </Link>
            );
        })}
        </div>
    );
}

export default EventsList;