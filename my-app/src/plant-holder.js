import React from "react";
import Plant from "./plant.js";

const PlantHolder = (props) => {
    return (
        <div className="plant-holder">
            <Plant image={props.image} />
        </div>
    );
};

export default PlantHolder;
