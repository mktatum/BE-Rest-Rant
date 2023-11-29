const React = require('react')
const Def = require('../default')

function show (data) {
    console.log(data)
    return (
        <Def>
            <main>
                <div className="showpage">
                    <img className="showimg" src= {data.place.pic } />
                    <div className="showdata">
                        <h1>{data.place.name }</h1>
                        <br/>
                        <h2>Rating</h2>
                        <p>Not yet rated</p>
                        <br/>
                        <h2>Description</h2>
                        <p>Located in {data.place.city }, {data.place.state } and serving {data.place.cuisines }</p>
                    </div>
                </div>
                <div className="comments">
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>
            </main>
        </Def>
    )
}

// See activity 5-part-6 Part 3 line item 4)
module.exports = show
