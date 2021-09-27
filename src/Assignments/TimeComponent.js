import React, { useState } from 'react';
import './TimeIndex.css';

let initTime = new Date().toLocaleTimeString();

const TimeComponent = () => {
    const [ctime, upTime] = useState(initTime);
    // upTime(ctime);

    // below part is same as the we done in the button assignment
    const TIME = () => {
        initTime= new Date().toLocaleTimeString();
        upTime(initTime);

    }
    setInterval(TIME, 1000);

    return(
        <div>
        <h1> {ctime} </h1>
        </div>
    )
};
export default TimeComponent;