import React, { useEffect, useState, useLayoutEffect } from "react";

interface Props {
    y:{b:()=>void};
    x:{b:()=>void};
    value:string;
}

const Particle:React.FC<Props> = (props: Props): React.ReactElement<Props> => {


    useLayoutEffect(() => {

        let d = document.getElementById(props.value);

        let propY = props.y.b();
        let propX = props.x.b();
        if (d !== null) {
            d.style.left = propX + 'px';
            d.style.top = propY + 'px';
        }


    })


    return (
        <React.Fragment>
            <div id={props.value} className="particle"></div>
        </React.Fragment>
    )
}

export default Particle;