const razorpay = require('razorpay');

var instance = new razorpay({
  key_id: 'yourRajorpayId',
  key_secret: 'yourRajorpaySecret',
});

module.exports =instance;
