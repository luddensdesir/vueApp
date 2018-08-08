var express = require('express')
var router = express.Router()
var Menu = require('../models/menu')

module.exports = router

router.get('/all', function (req, res) {
  //   console.log(Menu.getMenu())
  console.log("retrieving MENU")
  res.json(Menu.getMenu())
})

router.get('/specials', function (req, res) {
  //   console.log(Menu.getMenu())
  console.log("retrieving SPECIALS")
  res.json(Menu.getSpecialMenu())
})

router.get('/popular', function (req, res) {
  console.log("retrieving POPULAR")
  res.json(Menu.getPopularMenu())
})

module.exports.createMenu = Menu.createMenu
