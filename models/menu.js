var mongoose = require('mongoose')

var globalMenu = []
var popularMenu = [{temp: "hi"}]
var specialMenu = [{temp: "ho"}]

var MenuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  orders: {
    type: Number
  },
  lastOrder: {
    type: Number
  },
  stock: {
    type: Number
  },
  makeTime: {
    type: Date, default: Date.now
  },
  description: {
    type: String
  }
}, {
  collection: 'collectionName'
})

var MenuItem = mongoose.model('MenuItems', MenuItemSchema)

module.exports = MenuItem

var setMenu = function (query, callback) {
  MenuItem.find({}, function ( err, menu ) {
    globalMenu = menu
  })
}

setMenu()

var getMenu = function () {
  return globalMenu
}

var getSpecialMenu = function () {
  return specialMenu
}

var getPopularMenu = function () {
  return popularMenu
}

var matchPastOrders = function (orderNames) {
  for (var i = 0; i < orderNames.length; i++) {
    // console.log(orderNames[i])
    for (var j = 0; j < orderNames[i].length; j++) {
      for (var k = 0; k < globalMenu.length; k++) {
        if (orderNames[i][j] === globalMenu[k].name) {
          var item = {}
          item['name'] = globalMenu[k]['name']
          item['price'] = globalMenu[k]['price']
          orderNames[i][j] = item
        }
      }
    }
  }
  return orderNames
}

module.exports.getPopularMenu = getPopularMenu
module.exports.getSpecialMenu = getSpecialMenu
module.exports.matchPastOrders = matchPastOrders
module.exports.getMenu = getMenu

module.exports.createMenu = function (newItem, callback) {
  console.log("createMenu")
  var newMenuItem = new MenuItem(newItem)

  newMenuItem.save((err, res) => {
    console.log(err)
    console.log(res)
  })
}
