import React, { useState } from "react";
import "./EventsContainer.css";
import EventsList from "./EventsList";
import TagList from "./TagList";

const categoryButtons = [
    {
        srcSelected: "https://www.codingninjas.com/assets-landing/images/all-events-selected.svg",
        srcUnSelected: "https://www.codingninjas.com/assets-landing/images/all-events-unselected.svg",
        category: "All Events",
    },
    {
        srcSelected: "https://www.codingninjas.com/assets-landing/images/webinar-selected.svg",
        srcUnSelected: "https://www.codingninjas.com/assets-landing/images/webinar-unselected.svg ",
        category: "Webinar",
    },
    {
        srcSelected: "https://www.codingninjas.com/assets-landing/images/coding-events-selected.svg",
        srcUnSelected: "https://www.codingninjas.com/assets-landing/images/coding-events-unselected.svg",
        category: "Coding Event",
    },
    {
        srcSelected: "https://files.codingninjas.in/bootcamp_events_selected-5398.png",
        srcUnSelected: "https://files.codingninjas.in/bootcamp_events_unselected-5397.png",
        category: "Bootcamp Event",
    },
    {
        srcSelected: "https://files.codingninjas.in/workshop_selected-5396.png",
        srcUnSelected: "https://files.codingninjas.in/workshop_unselected-5395.png",
        category: "Workshop",
    },
];

const subcategoryButtons = ["Upcoming", "Archived", "All Time Favourites"];

export default function EventsContainer() {
    const [activeCategory, setActiveCategory] = useState("All Events");
    const [activeSubCategory, setActiveSubCategory] = useState("Upcoming");
    const [activeTags, setActiveTags] = useState([]);
    const handleCategoryClick = (cat) => (event) => {
        setActiveCategory(cat);
    };
    const handleSubcategoryClick = (cat) => (event) => {
        setActiveSubCategory(cat);
    };
    return (
        <div className="events--container">
            <div className="df aic events--cat">
                {categoryButtons.map(({ srcSelected, srcUnSelected, category }, index) => (
                    <button key={category} className={`p-3 ${activeCategory === category && "active"}`} onClick={handleCategoryClick(category)}>
                        <img src={activeCategory === category ? srcSelected : srcUnSelected} /> {category}
                    </button>
                ))}
            </div>
            <div className="df aic events--subcat p-3">
                {subcategoryButtons.map((cat) => (
                    <button className={`${activeSubCategory === cat && "active"}`} onClick={handleSubcategoryClick(cat)}>
                        {cat}
                    </button>
                ))}
            </div>
            <div className="df events--body">
                <EventsList tags={activeTags} category={activeCategory} subcategory={activeSubCategory} />
                <TagList setActiveTags={setActiveTags} />
            </div>
        </div>
    );
}
