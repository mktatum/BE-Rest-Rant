const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1 className="text-center text-primary">REST-Rant</h1>
                <div>
                    <img className="img-fluid" src="/images/brenda-godinez-MsTOg6rhRVk-unsplash.jpg" alt="Chia Fruit Shake" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
                <a className="btn btn-primary" href="/places">Places Page</a>

{/* Footer Bonus */}
                <div class="content">
                <div class="content-inside">
                </div>
                </div>
                <footer class="footer">
                    <p>Click <a href="https://www.linkedin.com/in/melanie-tatum/">HERE</a> to visit Melanie on LinkedIn</p>
                </footer>
{/* End Footer Bonus */}

            </main>
        </Def>
    )      
}

module.exports = home
