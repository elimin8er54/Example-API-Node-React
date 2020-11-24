import React, { useEffect, useState } from "react";
import Particle from "./Particle";

function ParticlePage() {
    const [xMouse, setXMouse] = useState({ b: () => { } });
    const [yMouse, setYMouse] = useState({ b: () => { } });


    //Remember when you first mount it means it's the first time it renders. 
    //Re-renders will not call useEffect with square brackets again since it's already mounted

    useEffect(() => {

        //Called once on mount but not re-render

        document.addEventListener("mousemove", (e) => {

            let propX = e.clientX;
            let propY = e.clientY;

            let posDif = 100;
            //Set and send an object with the function from here so the parent controls what the particles do.
            setXMouse({ b: function () { return Math.random() * ((propX + posDif) - (propX - posDif)) + (propX - posDif) } });
            setYMouse({ b: function () { return Math.random() * ((propY + posDif) - (propY - posDif)) + (propY - posDif) } });


        })

    }, [])

    //Outside gets called every re-render


    const theParticles: any[] = [];
    for (let i = 0; i < 10; i++) {
        theParticles.push(<Particle y={yMouse} x={xMouse} value={i.toString()} />);
    }

    return (
        <React.Fragment>
            {theParticles}
        </React.Fragment>
    )
}

export default ParticlePage;