var express = require('express')
var router = express.Router()

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
