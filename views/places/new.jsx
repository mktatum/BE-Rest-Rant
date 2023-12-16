const React = require('react')
const Def = require('../default')

function newForm(){
    return(
        <Def>
            <main>
            <h1>Add a New Place</h1>
            <form method="POST" action="/places">
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name" className="form-label">Restaurant Name:</label>
                        <input className="form-control" type="text" id="name" name="name"/>
                    </div>

                    <div className="form-group col-sm-6">
                        <label htmlFor="founded" className="form-label">Year Founded:</label>
                        <input className="form-control" type="number" id="founded" name="founded"/>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-sm-12">
                        <label htmlFor="pic" className="form-label">Site Photo:</label>
                        <input className="form-control" type="url" id="pic" name="pic"/>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="city" className="form-label">Location City:</label>
                        <input className="form-control" type="text" id="city" name="city"/>
                    </div>

                    <div className="form-group col-sm-6">
                        <label htmlFor="state" className="form-label">State:</label>
                        <input className="form-control" type="text" id="state" name="state"/>
                    </div>
                </div>

                <div className="form-group col-sm-12">
                    <label htmlFor="cuisines" className="form-label">What's on the Menu:</label>
                    <input className="form-control" type="text" id="cuisines" name="cuisines"/>
                </div>

                <button className="btn btn-primary">Add Place</button>
            </form>
            </main>
        </Def>
    )
}

module.exports = newForm

// name, pic, cuisines, city, state