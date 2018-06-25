var express = require('express')
var router = express.Router()

router.post('/loginPage', function (req, res) {
  res.json({
    string1: 'hello',
    string2: 'test'
  })
})

router.post('/registerPage', function (req, res) {
  res.render('partials/register')
})

module.exports = router
