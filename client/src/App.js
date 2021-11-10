import './components/Form/Form.css'
import './App.css';
import Form from "./components/Form/Form";
import RecentActivities from "./components/RecentActivities/RecentActivities";
import Records from "./components/Records/Records";
import Total from "./components/Total/Total";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [data, setData] = useState([])
    const [recordsData, setRecordsData] = useState({})
    const [totalData, setTotalData] = useState([])

    function getData() {
        axios.get('http://localhost:3006/records')
            .then((response) => setRecordsData(response.data))
        axios.get('http://localhost:3006/recent')
            .then((response) => setData(response.data))
        axios.get('http://localhost:3006/total')
            .then((response) => setTotalData(response.data))
    }

    useEffect(() => {
        getData();
    }, [])
  return (
    <>
        <div className="main-container">
            <div><Form onUpdate={getData} /></div>
        <div className="main-content">
            <RecentActivities data={data} />
            <div>
                <Records data={recordsData} />
                <Total data={totalData} />
            </div>
        </div>
        </div>

    </>
  );
}

export default App;
