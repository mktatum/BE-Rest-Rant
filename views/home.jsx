const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <a className="btn btn-primary" href="/places">Places Page</a>
            </main>
        </Def>
    )      
}

module.exports = home