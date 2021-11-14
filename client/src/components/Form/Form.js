import {useRef, useState} from 'react';
import axios from 'axios';
import DatePicker, {registerLocale} from "react-datepicker";
import './DataPicker.css';
import './Form.css';
import eu from 'date-fns/locale/eu';
registerLocale('eu', eu)

const Form = (props) => {
    const [form, setForm] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [finishDate, setFinishDate] = useState(new Date());

    const inputDistRef = useRef();
    const selectRef = useRef();


    const changeHandler = (e) => {
        setForm({...form, [e.target.getAttribute("name")]: e.target.value});
    }

    const dropHandler = (e) => {
      setForm({...form, activity: e.target.value})
    }

    const startPickerHandler = (date) => {
        setStartDate(date);
        setForm({...form, startDate: +date})
    }
    const finishPickerHandler = (date) => {
        setFinishDate(date);
        setForm({...form, finishDate: +date})
    }

    function setData() {

       if (form.distance != null && form.activity !== undefined) {
           axios.post('http://localhost:3006/', form).then(()=>props.onUpdate())
           inputDistRef.current.value = "";
           selectRef.current.value = "Select activity type";
           console.log(form)

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
                        locale="eu"
                        name="startDate"
                        selected={startDate}
                        onChange={startPickerHandler}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="HH:mm"
                    />
                    <DatePicker
                        locale="eu"
                        name="startDate"
                        selected={finishDate}
                        onChange={finishPickerHandler}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="HH:mm"
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