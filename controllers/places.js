const router = require('express').Router()

// More code here in a moment
router.get("/", (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/1296x728-header.jpg?w=1155&h=1528'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1650629413.7052536/what-is-a-cat-cafe_.png'
    }]
    res.render('places/index', { places })
})

router.get("/new", (req, res) => {
    res.render("places/new")
})

module.exports = router

