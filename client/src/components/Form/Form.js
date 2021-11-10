import {useRef, useState} from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import './DataPicker.css';
import './Form.css';



const Form = (props) => {
    const [form, setForm] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const inputStartRef = useRef();
    const inputFinishRef = useRef();
    const inputDistRef = useRef();
    const selectRef = useRef();


    const changeHandler = (e) => {
        setForm({...form, [e.target.getAttribute("name")]: e.target.value});
    }

    const dropHandler = (e) => {
      setForm({...form, activity: e.target.value})
    }
    // console.log(form);


    function setData() {

        console.log(form.start);
       if (form.start != null && form.distance != null && form.finish != null && form.activity != null ) {
           axios.post('http://localhost:3006/', form).then(()=>props.onUpdate())
           inputStartRef.current.value = "";
           inputFinishRef.current.value = "";
           inputDistRef.current.value = "";
           selectRef.current.value = "Select activity type";
console.log(props)
       }else {
           alert("Please fill in all fields");
       }

    }

    return (
        <>
            <div className="container">
                <div className="header">
                    <h1>Activity Tracker</h1>
                </div>

                <div className="add-activity">
                    <p>Add new activity:</p>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                    />
                    <input
                        ref={inputStartRef}
                        name = "start"
                        onChange={changeHandler}
                        type="text"
                        placeholder = "Start time"
                        className = "start-time"
                    />
                    <input
                        ref={inputFinishRef}
                        name = "finish"
                        onChange={changeHandler}
                        type = "text"
                        placeholder = "Finish time"
                        className = "finish-time"
                    />
                    <input
                        ref={inputDistRef}
                        name = "distance"
                        onChange = {changeHandler}
                        type = "text"
                        placeholder = "Distance"
                        className = "distance"
                    />
                    <select ref={selectRef} onChange={dropHandler} placeholder="Select" className="activity-type">
                        <option selected disabled>Select activity type</option>
                        <option value="Run">Run</option>
                        <option value="Ride">Ride</option>
                    </select>
                    <button onClick={setData} className="save">Save</button>
                </div>

            </div>
        </>
    )

}

export default Form;