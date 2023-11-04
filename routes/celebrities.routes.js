const router = require("express").Router()
module.exports = router;
const Celebrity = require('./../models/Celebrity.model')
const Movie = require('./../models/Movie.model')



router.get('/', (req, res) => {
    Celebrity
        .find()
        .then(celebrities => {
            res.render('celebrities/celebrities', { celebrities })
        })
        .catch(err => console.log(err))



})

router.get('/create', (req, res) => {
    res.render('celebrities/new-celebrity')
})

router.post('/create', (req, res) => {
    const { name, occupation, catchPhrase } = req.body
    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(celebrity => res.redirect(`/celebrities`))
        .catch(err => console.log(err))

})
// {
//     name: String,
//         occupation: String,
//             catchPhrase: String
// }