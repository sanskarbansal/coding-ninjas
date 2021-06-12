import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TagList.css";
export default function TagList({setActiveTags}) {
    const [tags, setTags] = useState([]);
    useEffect(() => {
        axios.get("https://api.codingninjas.com/api/v3/event_tags").then((res) => {
            let t = res.data.data.tags;
            const mappedTags = t.map((tag) => ({
                name: tag,
                toggled: false,
            }));
            setTags(mappedTags);
        });
    }, []);
    // useEffect(() => {
    //     setActiveTags(tags.filter(tag => tag.toggled).map(tag => tag.name)); 
    // }, [tags])

    const handleClick = (index) => (event) => {
        let tagsCopy = [...tags];
        tagsCopy[index].toggled = !tagsCopy[index].toggled;
        
        setActiveTags(tagsCopy.filter(tag => tag.toggled).map(tag => tag.name)); 
        setTags(tagsCopy);
    };
    return (
        <div className="tags--container">
            <h2>Tags</h2>
            <div className="df p-1 aic tags--list">
                {tags.map(({ name, toggled }, index) => (
                    <div key={index} className={`${toggled ? "tag__active " : ""}tag p-2 mr-3 mt-3`} onClick={handleClick(index)}>
                        <span>{name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

