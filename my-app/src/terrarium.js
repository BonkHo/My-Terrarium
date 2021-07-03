import React from "react";
const JarTop = () => {
    return <div className="jar-top"></div>;
};

const JarWalls = () => {
    return (
        <div className="jar-walls">
            <div className="jar-glossy-long"></div>
            <div className="jar-glossy-short"></div>
        </div>
    );
};

const Dirt = () => {
    return <div className="dirt"></div>;
};

const JarBottom = () => {
    return <div className="jar-bottom"></div>;
};

const Terrarium = (props) => {
    return (
        <div className="terrarium">
            <JarTop />
            <JarWalls />
            <Dirt />
            <JarBottom />
        </div>
    );
};

export default Terrarium;
