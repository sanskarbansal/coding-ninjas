import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TagList.css";
export default function TagList() {
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

    const handleClick = (index) => (event) => {
        let tagsCopy = [...tags];
        tagsCopy[index].toggled = !tagsCopy[index].toggled;
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
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "./TagList.css";
// export default function TagList() {
//     const [tags, setTags] = useState([]);
//     const [activeTags, setActiveTags] = useState([]);
//     useEffect(() => {
//         axios.get("https://api.codingninjas.com/api/v3/event_tags").then((res) => {
//             setTags(res.data.data.tags, () => setActiveTags([false]));
//         });
//     }, []);

//     const handleClick = (tag) => (event) => {
//         if (activeTags.includes(tag)) {
//             return setActiveTags(activeTags.filter((t) => t !== tag));
//         }
//         setActiveTags([...activeTags, tag]);
//     };
//     return (
//         <div className="tags--container">
//             <h2>Tags</h2>
//             <div className="df p-1 aic tags--list">
//                 {tags.map((tag, index) => (
//                     <div key={index} className="tags--list__tag p-2 mr-3 mt-3" onClick={handleClick(tag)}>
//                         <span>{tag}</span>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
