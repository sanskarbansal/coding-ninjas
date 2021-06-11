import React from "react";
import "./EventCard.css";
export default function EventCard({ data }) {
    return (
        <div className="event--card df fdc">
            <div className="event--card__header">
                <img src={data.cover_picture} alt="" />
            </div>
            <div className="event--card__body df p-2 fdc">
                <h4>{data.name}</h4>
                <div></div>
                <div className="event__short__desc">
                    <p>{data.short_desc}</p>
                </div>
                <div className="event--body__tags mt-4">
                    {data.card_tags.map((tag) => (
                        <span className="tag p-2 ml-1 mr-1">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="df event--card__footer aic">{data.event_sub_category === "Upcoming" && <button>Register Now</button>}</div>
        </div>
    );
}
