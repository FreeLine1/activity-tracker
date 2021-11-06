import {useState} from 'react';


const Form = () => {
    const [startTime, setStartTime] = useState('');

    const onCLick = () => {

    }

    return (
        <>
            <div className="container">
                <div className="header">
                    <h1>Activity Tracker</h1>
                </div>

                <div className="add-activity">
                    <p>Add new activity:</p>
                    <input type="text" placeholder="Start time" className="start-time"/>
                    <input type="text" placeholder="Finish time" className="finish-time"/>
                    <input type="text" placeholder="Distance" className="distance"/>
                    <select placeholder="Select" className="activity-type">
                        <option disabled>Test</option>
                        <option value="1">Select activity type</option>
                        <option value="2">Run</option>
                        <option value="3">Ride</option>
                    </select>
                    <button className="save">Save</button>
                </div>
            </div>
        </>
    )

}

export default Form;