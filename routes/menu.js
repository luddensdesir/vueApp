var express = require('express')
var router = express.Router()
var Menu = require('../models/menu')

module.exports = router

router.get('/all', function (req, res) {
  res.json(Menu.getMenu())
})

router.get('/specials', function (req, res) {
  // res.json(Menu.getSpecialMenu())
})

router.get('/popular', function (req, res) {
  res.json(Menu.getPopularMenu())
})

module.exports.createMenu = Menu.createMenu
