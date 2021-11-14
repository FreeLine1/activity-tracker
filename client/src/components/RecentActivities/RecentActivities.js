import './RecentActivities.css'
import date from 'date-and-time';

const RecentActivities = (props) => {
    const now = new Date();
    const pattern = date.compile('MMMM DD');


    let durationTime = [...props.data].reverse().map(e => {

            let difference = +e.finish_time - +e.start_time;

            let hours = Math.floor(difference / 1000 / 60 / 60);
            difference -= hours * 1000 * 60 * 60;

            let minutes = Math.floor(difference / 1000 / 60);
            difference -= minutes * 1000 * 60;

            return [hours + ' h ' + minutes + ' min '];
        }
    )

    // console.log(durationTime);

    return (
        <div className="activities-container">
            <div className="activity">
                {props.data ? [...props.data].reverse().map((e, i) =>

                    <div>
                        <p>{date.format(now, pattern)}</p>
                        <p> {e.activity} </p>
                        <p> {e.distance + ' km'} </p>
                        <p> {durationTime[i]} </p>
                        <p> {
                            Number.isInteger(((e.distance / ((+e.finish_time - +e.start_time) / 3600000))))
                                ?
                                Math.ceil(((e.distance / ((+e.finish_time - +e.start_time) / 3600000)))) + " km/h "
                                :
                                ((e.distance / ((+e.finish_time - +e.start_time) / 3600000))).toFixed(1) + " km/h "
                        } </p>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default RecentActivities;