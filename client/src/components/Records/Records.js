import './Records.css';
import date from "date-and-time";
import {useEffect, useState} from "react";

const Records = ({data}) => {
console.log(data);
    useEffect(() => {

    }, [])

    const now = new Date();
    const pattern = date.compile('MMM DD');
    return (
        <div className="records-container">
            <p style={{"text-align": "center"}}>Longest ride:</p>
            <div className="records-data">
            <p>{date.format(now, pattern)}</p>
            <p>{data.distanceRide?data.distanceRide[0].distance : null}</p>
            {}
            </div>
            <p style={{"text-align": "center"}}>Longest run:</p>
            <div className="records-data">
            <p>{date.format(now, pattern)}</p>
            <p>{data.distanceRun?data.distanceRun[0].distance : null}</p>
            {/*<p> 1h 45m</p>*/}
            </div>
        </div>
    )
}

export default Records;