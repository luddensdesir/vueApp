var privateData 
if(process.env.HEROKU){
    var env = process.env
    privateData = {
        AES_PASS: env.AES_PASS,
        AES_SECRET: env.AES_SECRET,
        GMAPSKEY: env.GMAPSKEY,
        JWT_SECRET: env.JWT_SECRET,
        MONGODB_URI: env.MONGODB_URI,
        PAYPAL_ID: env.PAYPAL_ID,
        PAYPAL_SECRET: env.PAYPAL_SECRET,
        STRIPE_SECRET: env.STRIPE_SECRET
    }
} else {
    var url = './private.js'
    if(require.resolve(url)){
      privateData = require(url)
    }
}

module.exports = privateData