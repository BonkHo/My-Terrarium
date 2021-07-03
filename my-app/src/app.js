import React from "react";
import Terrarium from "./terrarium.js";
import PlantData from "./plant-data.js";
import PlantHolder from "./plant-holder";

const leftPlants = PlantData.filter((props) => {
    return props.id < 8;
});

const rightPlants = PlantData.filter((props) => {
    return props.id > 7;
});

const createContainer = (props) => {
    return <PlantHolder key={props.id} image={props.image} />;
};

const App = () => {
    return (
        <React.Fragment>
            <h1>My Terrarium</h1>
            <div id="left" className="container">
                {leftPlants.map(createContainer)}
            </div>

            <div id="right" className="container">
                {rightPlants.map(createContainer)}
            </div>

            <Terrarium />
        </React.Fragment>
    );
};

export default App;

// const [state, dispatch] = useReducer(reducer, { count: initialCount });
// There's a few arguements for useReducer, the biggest being that it greatly reduces the scope of functions that are making calls to update that objects state.
