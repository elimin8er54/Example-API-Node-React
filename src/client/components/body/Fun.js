import React from "react";
import Sidebar from "../Sidebar";
import ParticlePage from "../randomForFun/Particles/ParticlePage";
import "../../App.css";

function Fun() {
    return (
        <React.Fragment>
            <p>Random stuff for fun and for understanding Reacts rendering..</p>
            <ParticlePage />
        </React.Fragment>
    );
}

export default Fun;