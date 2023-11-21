const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place, i) => {
        return (
            <div className="col-sm-6" key={i}>
                <h2 className="text-center">{place.name}</h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img className="img-fluid" src={place.pic} alt={place.name}/>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1 className="text-center">Index Page</h1>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index
