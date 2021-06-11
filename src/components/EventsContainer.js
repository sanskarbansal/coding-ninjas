import React from "react";
import "./EventsContainer.css";
export default function EventsContainer() {
    return (
        <div className="events--container p-3">
            <div className="df aic">
                {/* <div> */}
                <button className="p-3">All Events</button>
                <button className="p-3">Coding Events</button>
                <button className="p-3">Bootcamp Events</button>
                <button className="p-3">Workshop</button>
                {/* </div> */}
            </div>
            <div>Buttons</div>
            <div>EventsContainer</div>
        </div>
    );
}
