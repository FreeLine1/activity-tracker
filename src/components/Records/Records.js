import './Records.css';

const Records = () => {

    return (
        <div className="records-container">
            <p style={{"text-align": "center"}}>Longest ride:</p>
            <div className="records-data">
            <p>Oct 23</p>
            <p>25 km</p>
            <p> 1h 45m</p>
            </div>
            <p style={{"text-align": "center"}}>Longest run:</p>
            <div className="records-data">
            <p>Oct 23</p>
            <p>25 km</p>
            <p> 1h 45m</p>
            </div>
        </div>
    )
}

export default Records;