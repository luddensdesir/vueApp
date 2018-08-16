var express = require('express')
var paypal = require('paypal-rest-sdk')
// var bodyParser = require('body-parser')
var router = express.Router()
var stripeKey
var paypalKey
var paypalID
var privateData

try {
  privateData = require('../private')
} catch (ex) {
  console.log('private keys not found using env')
}

if (process.env.NOD_ENV === 'production') {
  stripeKey = process.env.STRIPE_SECRET
  paypalKey = process.env.PAYPAL_SECRET
  paypalID = process.env.PAYPAL_ID
} else {
  stripeKey = privateData.stripeS
  paypalKey = privateData.paypalS
  paypalID = privateData.paypalID
}

var stripe = require('stripe')(stripeKey)

console.log("stripeKey")
console.log(stripeKey)
console.log("paypalKey")
console.log(paypalKey)
console.log("paypalID")
console.log(paypalID)

paypal.configure({
  // 'mode': 'live',
  'mode': 'sandbox', //sandbox or live
  'client_id': paypalID,
  'client_secret': paypalKey
})

router.get('/paypal/success', function (req, res) {
  var payerId = req.query.PayerID
  var paymentId = req.query.paymentId
  console.log(req.query)

  var execute_payment_json = {
    'payer_id': payerId,
    'transactions': [{
      'amount': {
        'currency': 'USD',
        'total': '1.00'
      }
    }]
  }

  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
      console.log(error.response)
      throw error
    } else {
      console.log(JSON.stringify(payment))
      res.send('Success')
    }
  })
  // res.json({success: true})
})

router.get('/paypal/cancel', function (req, res) {
  res.json({success: false})
})

router.post('/paypal', function (req, res) {
  console.log("paypal")
  var create_payment_json = {
    'intent': 'sale',
    'payer': {
      'payment_method': 'paypal'
    },
    'redirect_urls': {
      'return_url': 'http://localhost:3000/checkout/paypal/success',
      'cancel_url': 'http://localhost:3000/checkout/paypal/cancel'
    },
    'transactions': [{
      'item_list': {
        'items': [{
          'name': 'item',
          'sku': 'item',
          'price': '1.00',
          'currency': 'USD',
          'quantity': 1
        }]
      },
      'amount': {
        'currency': 'USD',
        'total': '1.00'
      },
      'description': 'This is the payment description.'
    }]
  }

  paypal.payment.create(create_payment_json, function (error, payment) {
    var found;
    if (error) {
      throw error
    } else {
      console.log('Create Payment Response')
      // console.log(payment)
      // console.log(payment.links)
      for (var i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === 'approval_url') {
          res.json({success: payment.links[i].href})
          found = true;
        }
      }
      if (!found) {``
        res.json({success: true})
      }
    }
  })
})

router.post('/stripe', function (req, res) {
  var token = {}
  token = req.body
  var amount = 3400
  // console.log(token)
  // console.log(token.id)
  // console.log(token.type)
  // console.log(token.email)
  // console.log(token.created)
  // console.log(token.client_ip)

  stripe.customers.create({
    email: token.email,
    source: token.id
  }).then(customer => stripe.charges.create({
    amount: amount,
    description: 'food',
    currency: 'usd',
    customer: customer.id
  })).then(charge => res.json({success: true}))
})

module.exports = router
