import axios from "axios";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import "./EventList.css";

const fetchUrl = (
    event_category = "WEBINAR",
    event_sub_category = "Upcoming",
    // tag_list = ["Career Guidance", "Coding Concepts", "Competitive Programming", "Futuristic Tech"]
    tag_list = []
) => {
    let tl = tag_list.join(",");
    return `https://api.codingninjas.com/api/v3/events?event_category=${event_category}&event_sub_category=${event_sub_category}&tag_list=${tl}&offset=0`;
};

export default function EventsList({ category, subcategory }) {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axios.get(fetchUrl(category.replace(" ", "_").toUpperCase(), subcategory)).then((res) => {
            setEvents(res.data.data.events);
        });
    }, [category, subcategory]);
    // console.log(fetchUrl());
    return (
        <div className="df eventlist p-4">
            {events.map((event) => (
                <EventCard key={event.id} data={event} />
            ))}
        </div>
    );
}
