import axios from "axios";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import "./EventList.css";
export default function EventsList() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axios
            .get(
                "https://api.codingninjas.com/api/v3/events?event_category=WEBINAR&event_sub_category=Upcoming&tag_list=Career Guidance,Coding Concepts,Competitive Programming,Futuristic Tech&offset=0"
            )
            .then((res) => {
                setEvents(res.data.data.events);
            });
    }, []);
    return (
        <div className="df eventlist p-4">
            {events.map((event) => (
                <EventCard key={event.id} data={event} />
            ))}
        </div>
    );
}
