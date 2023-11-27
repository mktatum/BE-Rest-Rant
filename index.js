//Modules and Globals
require("dotenv").config()

const express = require("express")
const app = express()

//Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//Controllers and Routes
app.use("/places", require("./controllers/places"))

app.get("/", (req, res)=>{
    res.render("home")
})

app.get("*", (req, res) => {
    res.render('error404')
})

const PORT = process.env.PORT

app.listen(PORT, console.log("listening on port ",PORT))

//Entry point for the entire api
console.log("load index.js")

//Grab the package
// const express = require("express")

//Initialize app, constructors - function that is a constructor
//Creates instance of an app
// const app = express()

//Connect to db

//Dependencies (chatGPT, middleware, etc)

//Start the api

//Here are the endpoints that clients (Devices) can make requests to
//Restering an endpoint to handle request and response
//Registered only called when a client makes a http request
//The path/route is /