import React from "react";
import "./EventCard.css";
export default function EventCard({ data }) {
    return (
        <div className="event--card df fdc">
            <div className="event--card__header">
                <img src={data.mobile_cover_picture} alt="" />
            </div>
            <div className="event--card__body df p-2 fdc">
                <h4>{data.name}</h4>
                <div></div>
                <div className="event__short__desc">
                    <p>{data.short_desc}</p>
                </div>
                <div className="event--body__tags mt-3 df">
                    {data.card_tags.map((tag) => (
                        <span key={tag} className="tag p-1 mr-3">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="df event--card__footer aic">
                {data.registered_users.top_users.length > 0 && (
                    <div className="p-2">
                        <div className="avatars df aic">
                            {data.registered_users.top_users.map(({ image_url }, index) => (
                                <>{image_url && <img key={index} src={image_url} alt="User" />}</>
                            ))}
                        </div>
                        <span>and {data.registered_users.other_users_count} others registered</span>
                    </div>
                )}

                {data.event_sub_category === "Upcoming" && <button>Register Now</button>}
            </div>
        </div>
    );
}
