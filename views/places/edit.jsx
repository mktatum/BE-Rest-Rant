const React = require('react')
const Def = require('../default')

function editForm(data){
    return(
        <Def>
            <main>
            <h1>Edit Place</h1>
            <form method="PUT" action={`/places/${data.ids}?_method=PUT`}>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name" className="form-label">Restaurant Name:</label>
                        <input className="form-control" type="text" id="name" name="name" value={data.place.name}/>
                    </div>
                
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic" className="form-label">Site Photo:</label>
                        <input className="form-control" type="url" id="pic" name="pic" value={data.place.pic}/>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="city" className="form-label">Location City:</label>
                        <input className="form-control" type="text" id="city" name="city" value={data.place.city}/>
                    </div>

                    <div className="form-group col-sm-6">
                        <label htmlFor="state" className="form-label">State:</label>
                        <input className="form-control" type="text" id="state" name="state" value={data.place.state}/>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="cuisines" className="form-label">What's on the Menu:</label>
                    <input className="form-control" type="text" id="cuisines" name="cuisines" value={data.place.cuisines}/>
                </div>

                <button className="btn btn-primary">Add Place</button>
            </form>
            </main>
        </Def>
    )
}

module.exports = editForm

// name, pic, cuisines, city, state