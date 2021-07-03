import React from "react";
import { useRef } from "react";
import useDraggable from "./useDraggable";

const Plant = (props) => {
    // Creates new reference with nothing set
    const plantRef = useRef(null);
    useDraggable(plantRef);

    return (
        <img
            ref={plantRef}
            src={process.env.PUBLIC_URL + props.image}
            className="plant"
            alt="plant"
        />
    );
};

export default Plant;
