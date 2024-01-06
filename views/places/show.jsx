const React = require('react')
const Def = require('../default')

function show (data) {

    // average rating
    let averageRating = (data.place.comments.reduce((tot, c) => tot + c.stars, 0) / data.place.comments.length).toFixed(2)
    let result = averageRating.includes(".00");
    if (result === true){
        let reducedAvg = Number(averageRating).toFixed(0)
        averageRating = reducedAvg
    }

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
                        
                        { data.place.comments.length > 0
                            ? (
                                <p>
                                    {averageRating} stars
                                </p>
                            ) : (
                                <p>Not yet rated!</p>
                            )
                        }

                        <br/>
                        <h2>Description</h2>
                        <p>{ data.place.showEstablished() }</p>
                        <p>Serving { data.place.cuisines }</p>
                        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>  
                        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                            <button type="submit" className="btn btn-danger">Delete</button>
                        </form>   
                    </div>
                </div>

                {/* ternary */}
                <div className="comments">
                    <h2>Comments</h2>
                    { data.place.comments.length > 0
                    ? data.place.comments.map((el, i) =>
                    (
                        <div key={i}>
                            <p><i>"{ el.content }"</i></p>
                            <p>- { el.author }</p>
                        </div>
                    ))   
                    : <p>No comments yet!</p>}
                </div>

                <h2>Let us know what you think!</h2>
                <form method="POST" action={`/places/${data.place.id}/comments?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="author" className="form-label">Your name:</label>
                            <input className="form-control" type="text" id="author" name="author"/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="stars" className="form-label">Rate this restaurant:</label>
                            <input className="form-control" type="number" id="stars" name="stars"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <label htmlFor="content" className="form-label">Add your thoughts:</label>
                            <textarea className="form-control" type="text" id="content" name="content"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-warning">Submit</button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show
