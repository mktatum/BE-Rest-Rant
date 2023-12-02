const router = require('express').Router()
const places = require("../models/places")

// Index route
router.get("/", (req, res) => {
    res.render('places/index', { places })
})

// New route
router.get("/new", (req, res) => {
    res.render("places/new")
})


// Edit route
router.get("/:id/edit", (req, res) => {
    let ids = req.params.id
    if (places[ids] === undefined) {
        res.render('error404')
    } else {
        res.render('places/edit', { place:places[ids], ids})
    }
})

// Show route
router.get("/:id", (req, res) => {
    let ids = req.params.id
    if (places[ids] === undefined) {
        res.render('error404')
    } else {
        res.render('places/show', { place:places[ids], ids})
    }
})

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})

router.delete('/:id', (req, res) => {
    let ids = Number(req.params.id)
    if (places[ids] === undefined) {
        res.render('error404')
    } else {
        places.splice(ids, 1)
        res.redirect('/places')
    }
})

module.exports = router

