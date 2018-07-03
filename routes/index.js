var express = require('express')
var router = express.Router()

function getMenuItems () {
  function newItem (name, price) {
    return {name, price}
  }

  return {
    happyTots: newItem('Happy Tots', 2.50),
    churros: newItem('Churros', 2.50),
    burger: newItem('Burger', 2.50),
    morningBun: newItem('Morning Bun', 2.50),
    chickenSandwich: newItem('Chicken Sandwich', 2.50),
    strips: newItem('Chicken Strips', 2.50),
    grilledcheese: newItem('grilledCheese', 2.50)
  }
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


// tabs.push(setImages(name1, 'chicken'))
// tabs.push(setImages(name2, 'happy tots'))
// tabs.push(setImages(name3, 'churros'))
// tabs.push(setImages(name4, 'sandwich'))
// tabs.push(setImages(name5, 'morning'))
// tabs.push(setImages(name6, 'chickenSammy'))
// tabs.push(setImages(name7, 'strips'))
// tabs.push(setImages(name8, 'grilledcheese'))

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
