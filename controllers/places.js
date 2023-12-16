const router = require('express').Router()
const { Place } = require("../models") 
const { findByIdAndUpdate } = require('../models/places')
// places.js

// Index route
router.get("/", async(req, res) => {
    const allPlaces = await Place.find()
    // console.log(allPlaces)
    res.render('places/index', { places:allPlaces })
}) 

// New route
router.get("/new", (req, res) => {
    res.render("places/new")
})

// Edit route
router.get("/:id/edit", async(req, res) => {
    let ids = req.params.id
    try {
        const showPlace = await Place.findById(ids)
        res.render('places/edit', { place:showPlace})
    } catch {
        res.render('error404')
    }
})

// added PUT route as in the instructions part 3, but not sure if this is the same route as .get above.
router.put('/:id', async(req, res) => {
    let id = req.params.id
    // console.log(id, req.body)
    try {
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
        // Default image if one is not provided
            req.body.pic = 'http://placekitten.com/400/400'
        } if (!req.body.city) {
            req.body.city = 'Anytown'
        } if (!req.body.state) {
            req.body.state = 'USA'
        }

        // Save the new data into places[id]
        await Place.findByIdAndUpdate(id, req.body, {runValidators: true})
        // Place[id] = req.body
        res.redirect(`/places/${id}`)
    } catch(e) {
        console.log(e)
        res.render('error404')
    }
})

// Show route
router.get("/:id", async(req, res) => {
    let ids = req.params.id
    try {
        const showPlace = await Place.findById(ids)
        res.render('places/show', { place:showPlace })
    } catch(e) {
        // console.log(e)
        res.render('error404')
    }
})

router.post('/', async(req, res) => {
    // console.log(req.body)
    let cleanBody = {}
    for (let key in req.body) {
        if (req.body[key]) {
            cleanBody[key] = req.body[key]
        }
    } 
    await Place.create(cleanBody)
    res.redirect('/places')
})

router.delete('/:id', (req, res) => {
    let ids = Number(req.params.id)
    if (Place[ids] === undefined) {
        res.render('error404')
    } else {
        Place.splice(ids, 1)
        res.redirect('/places')
    }
})

module.exports = router

// make PUT route match POST route (not Place.create)