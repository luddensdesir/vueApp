var express = require('express')
var router = express.Router()

var menuItems = setSpecialItems()
var specialItems = []

function setSpecialItems () {
  function newItem (name, price, image = '', date = 0, special = false) {
    return {
      name,
      price,
      image,
      special,
      // neverSpecial,
      date
    }
  }

  return [
    newItem('Happy Tots', 2.50),
    newItem('Churros', 2.20),
    newItem('Burger', 12.25),
    newItem('Morning Bun', 11.10),
    newItem('Chicken Sandwich', 10.75),
    newItem('Chicken Strips', 7.50),
    newItem('Grilled Cheese', 10.20)
  ]
}

(function setSpecials () {
  specialItems = [
    'Churros',
    'Burger',
    'Chicken Sandwich'
  ]
  var list = specialItems

  for (var i = 0; i < menuItems.length; i++) {
    for (var j = 0; j < list.length; j++) {
      if (menuItems[i].name === list[j]) {
        menuItems[i].special = true
        list.splice(j, 1)
        j--
      }
    }
  }
})()

function getSpecials () {
  var specialMenu = []
  for (var i = 0; i < menuItems.length; i++) {
    if (menuItems[i].special) {
      specialMenu.push(menuItems[i])
    }
  }
  return specialMenu
}

function getMenuItems () {
  return menuItems
}

router.get('/', function (req, res) {
  console.log('this is index')
  res.json({val1: 'this is index'})
})

router.get('/signin/', function (req, res) {
  res.json({val1: 'this is signin'})
})

router.get('/popular/', function (req, res) {
  res.json({val1: ['item1', 'item3', 'item7', 'item2']})
})

// protected routes
router.get('/order/', function (req, res) {
  res.json({val1: 'this is order'})
})

// protected routes
router.get('/specials', function (req, res) {
  res.json(getSpecials())
})

// protected routes
router.get('/menu', function (req, res) {
  res.json(getMenuItems())
})

//bring up all past orders in side bar. when clicked it should bring all of them 
router.get('/pastOrders/', function (req, res) {
  res.json({val1: [['item1', 'item3', 'item7', 'item2'],
    ['item1', 'item3', 'item7', 'item2'],
    ['item1', 'item3', 'item7', 'item2'],
    ['item1', 'item3', 'item7', 'item2']]})
})

router.get('/payment/', function (req, res) {
  res.json({val1: 'this is payment'})
})

// need preauth route here

module.exports = router
