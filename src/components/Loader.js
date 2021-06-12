import React from "react";

export default function Loader({ diameter }) {
    let width = diameter,
        height = diameter;
    if (!diameter) {
        width = height = "50px";
    }
    return <div className="loader" style={{ width, height }}></div>;
}
