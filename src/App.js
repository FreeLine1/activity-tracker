import './components/Form/Form.css'
import './App.css';
import Form from "./components/Form/Form";
import RecentActivities from "./components/RecentActivities/RecentActivities";
import Records from "./components/Records/Records";
import Total from "./components/Total/Total";

function App() {
  return (
    <>
        <div className="main-container">
            <div><Form /></div>
        <div className="main-content">
            <RecentActivities />
            <div>
                <Records />
                <Total />
            </div>
        </div>
        </div>

    </>
  );
}

export default App;
