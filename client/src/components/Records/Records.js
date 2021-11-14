import './Records.css';
import date from "date-and-time";

const Records = (props) => {


    const longestRideTime = () => {
        if (props.data.durationRide) {
            let difference = +props.data.durationRide.finish_time - +props.data.durationRide.start_time; // /360000
            let differenceRun = +props.data.durationRun.finish_time - +props.data.durationRun.start_time;

            let hours = Math.floor(difference / 1000 / 60 / 60);
            difference -= hours * 1000 * 60 * 60;

            let hoursRun = Math.floor(differenceRun / 1000 / 60 / 60);
            differenceRun -= hoursRun * 1000 * 60 * 60;

            let minutes = Math.floor(difference / 1000 / 60);
            difference -= minutes * 1000 * 60;

            let minutesRun = Math.floor(differenceRun / 1000 / 60);
            differenceRun -= minutesRun * 1000 * 60;

            let longestRide = [hours + ' h ' + minutes + ' min '];
            let longestRun = [hoursRun + ' h ' + minutesRun + ' min '];

            return longestRide;
        } else return null;
    }

    const longestRunTime = () => {
        if (props.data.durationRun) {
            let differenceRun = +props.data.durationRun.finish_time - +props.data.durationRun.start_time;


            let hoursRun = Math.floor(differenceRun / 1000 / 60 / 60);
            differenceRun -= hoursRun * 1000 * 60 * 60;

            let minutesRun = Math.floor(differenceRun / 1000 / 60);
            differenceRun -= minutesRun * 1000 * 60;

            let longestRun = [hoursRun + ' h ' + minutesRun + ' min '];

            return longestRun;
        } else return null;
    }


    const now = new Date();
    const pattern = date.compile('MMM DD');
    return (
        <div className="records-container">
            <p style={{"text-align": "center"}}>Longest ride:</p>
            <div className="records-data">
                <p>{date.format(now, pattern)}</p>
                <p>{props.data.distanceRide ? props.data.distanceRide[0].distance + " km " : null}</p>
                <p>{longestRideTime()}</p>
            </div>
            <p style={{"text-align": "center"}}>Longest run:</p>
            <div className="records-data">
                <p>{date.format(now, pattern)}</p>
                <p>{props.data.distanceRun ? props.data.distanceRun[0].distance + " km " : null}</p>
                <p>{longestRunTime()}</p>
            </div>
        </div>
    )
}

export default Records;