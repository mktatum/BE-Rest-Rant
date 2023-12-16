const React = require('react')
const Def = require('../default')

function show (data) {
    // data={ place:places[ids], ids}
    // console.log(data)
    return (
        <Def>
            <main>
                <div className="showpage">
                    <div className="photoDiv">
                        <img className="showimg" src={data.place.pic } />
                        <p>Located in {data.place.city }, {data.place.state } and serving {data.place.cuisines }</p>
                    </div>
                    <div className="showdata">
                        <h1>{data.place.name }</h1>
                        <br/>
                        <h2>Rating</h2>
                        <p>Not yet rated</p>
                        <br/>
                        <h2>Description</h2>
                        <p>{ data.place.showEstablished() }</p>
                        <p>Serving { data.place.cuisines }</p>
                    </div>
                </div>
                <div className="comments">
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>

                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>  
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">Delete</button>
                </form>     

            </main>
        </Def>
    )
}

module.exports = show
