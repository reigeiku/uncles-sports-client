import "./EventPage.css";
import { useParams } from "react-router-dom";
import events from "../tempEvents.js";
import NavBar from "../components/NavBar.jsx";
import PlayerList from "../components/PlayerList.jsx";
import NotFoundPage from "./NotFoundPage.jsx";

const EventPage = () => {
    const params = useParams();
    const eventId = params.eventId;
    const event = events.find(event => event.eventId === eventId);

    if (!event) {
        return (
            <NotFoundPage />
        );
    }
    
    const numOfPlayers = event.players.length;
    const totalPlayers = event.totalPlayers;

    if (numOfPlayers !== totalPlayers) {
        for (let i = 0; i < totalPlayers - numOfPlayers; i++) {
            event.players.push({});
        }
    }

    return (
        <>
        <NavBar />
        <div className="event-page">
            <h1 className="title">{event.name}</h1>
            <div className="description">
                <ul className="details">
                    <li>{event.sport}</li>
                    <li>{event.date}</li>
                    <li>{event.time}</li>
                    <li>{event.location}</li>
                    <li>£{event.price}</li>
                </ul>
            </div>
            <div className="players-container">
                <div className="host">Hosted by <span>{event.host}</span></div>
                <PlayerList players={event.players} />
            </div>
        </div>
        </>
    );
}

export default EventPage;