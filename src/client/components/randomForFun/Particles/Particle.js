import React, { useEffect, useState, useLayoutEffect } from "react";
import Documentation from "../../body/Documentation";

function Particle(props) {


    useLayoutEffect(() => {

        let d = document.getElementById(props.value);

        let propY = props.y.b();
        let propX = props.x.b();
        d.style.left = propX + 'px';
        d.style.top = propY + 'px';


    })


    return (
        <React.Fragment>
            <div id={props.value} className="particle"></div>
        </React.Fragment>
    )
}

export default Particle;