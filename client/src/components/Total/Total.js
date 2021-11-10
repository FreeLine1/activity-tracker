import './Total.css'

const Total = ({data}) => {

    return (
        <div className="total-container">
            <p>Total ride distance: {data.totalDistanceRide?data.totalDistanceRide[0].totalDistanceRide : null}</p>

            <p>Total run distance: {data.totalDistanceRun?data.totalDistanceRun[0].totalDistanceRun : null}</p>

        </div>
    )
}

export default Total;