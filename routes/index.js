var express = require('express')
var router = express.Router()

function getMenuItems () {
  function newItem (name, price, image = '', date = 0) {
    return {
      name,
      price,
      image,
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
    newItem('grilledCheese', 10.20)
  ]
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
