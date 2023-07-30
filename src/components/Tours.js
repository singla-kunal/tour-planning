import Card from "./Card";

function Tours({tours, removeTour}) {
    return(
        <div>
            <div className="title">
                <h2>Plan with Kunal</h2>
            </div>
            <div className="cards">
                {
                    tours.map( (tour) => {
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    )
}
export default Tours;