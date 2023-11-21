const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1 className="text-center text-primary">HOME</h1>
                <div>
                    <img className="img-fluid" src="/images/brenda-godinez-MsTOg6rhRVk-unsplash.jpg" alt="Chia Fruit Shake" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
                <a className="btn btn-primary" href="/places">Places Page</a>
            </main>
        </Def>
    )      
}

module.exports = home
