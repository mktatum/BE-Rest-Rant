const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1 className="text-danger text-center">404: PAGE NOT FOUND</h1>
                <img className="img-fluid" src="https://http.dog/static/codes/dogs/medium/404.avif" alt="404: PAGE NOT FOUND"/>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>
    )
}

module.exports = error404
