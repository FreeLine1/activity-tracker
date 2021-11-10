import './RecentActivities.css'
import date from 'date-and-time';

const RecentActivities = (props) => {
    const now = new Date();
    const pattern = date.compile('MMMM DD');
    return (
        <div className="activities-container">
            <div className="activity">
                    {props.data ?[...props.data].reverse().map(e =>
                        <div>
                            <p>{date.format(now, pattern)}</p>
                            <p> {e.activity} </p>
                            <p> {e.distance + ' km'} </p>
                            <p> {e.finish_time} </p>
                            <p> {e.start_time} </p>
                        </div>
                    ) : null}
            </div>
        </div>
    )
}

export default RecentActivities;