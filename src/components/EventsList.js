import axios from "axios";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import "./EventList.css";

const fetchUrl = (event_category = "WEBINAR", event_sub_category = "Upcoming", tag_list = [], page = 1) => {
    let tl = tag_list.join(",");
    let offset = (page - 1) * 20;
    return `https://api.codingninjas.com/api/v3/events?event_category=${event_category}&event_sub_category=${event_sub_category}&tag_list=${tl}&offset=${offset}`;
};

export default function EventsList({ category, subcategory, tags }) {
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    useEffect(() => {
        setCurrentPage(1);
    }, [category, subcategory, tags]);
    useEffect(() => {
        axios.get(fetchUrl(category.replace(" ", "_").toUpperCase(), subcategory, tags, currentPage)).then((res) => {
            setTotalPages(res.data.data.page_count);
            setEvents(res.data.data.events);
        });
    }, [category, subcategory, tags, currentPage]);

    const handlePage = (inc) => (event) => {
        if (currentPage + inc <= totalPages && currentPage + inc >= 1) {
            setCurrentPage((prevPage) => prevPage + inc);
        }
    };
    return (
        <div className="container ">
            <div className="df eventlist p-4">
                {events.length === 0 && <h1 style={{ fontSize: "5rem", fontWeight: 200, textTransform: "capitalize" }}>No events found</h1>}
                {events.map((event) => (
                    <EventCard key={event.id} data={event} />
                ))}
            </div>
            {totalPages > 1 && (
                <div className="pagination--container df aic">
                    <button className="left" onClick={handlePage(-1)}>
                        &lt;
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button className="right" onClick={handlePage(1)}>
                        &gt;
                    </button>
                </div>
            )}
        </div>
    );
}
