import React from "react";
import "./EventsContainer.css";
import EventsList from "./EventsList";
import TagList from "./TagList";

export default function EventsContainer() {
    return (
        <div className="events--container">
            <div className="df aic events--cat">
                <button className="p-3 active">
                    <img src="https://www.codingninjas.com/assets-landing/images/all-events-selected.svg" /> All Events
                </button>
                <button className="p-3">
                    <img src="https://www.codingninjas.com/assets-landing/images/webinar-unselected.svg" alt="" />
                    Webinars
                </button>
                <button className="p-3">
                    <img src="https://www.codingninjas.com/assets-landing/images/coding-events-unselected.svg" alt="Icon" />
                    Coding Events
                </button>
                <button className="p-3">
                    <img src="https://files.codingninjas.in/bootcamp_events_unselected-5397.png" /> Bootcamp Events
                </button>
                <button className="p-3">
                    <img src="https://files.codingninjas.in/workshop_unselected-5395.png" alt="" />
                    Workshop
                </button>
            </div>
            <div className="df aic events--subcat p-3">
                <button className="active">Upcoming</button>
                <button>Archived</button>
                <button>All Time Favourites</button>
            </div>
            <div className="df events--body">
                <EventsList />
                <TagList />
            </div>
        </div>
    );
}
