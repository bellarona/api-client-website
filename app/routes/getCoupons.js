var express = require('express');
var router = express.Router();

router.get('/getCoupons', function(req, res) {

  res.render('getCoupons', {
    pageTitle: 'Get Coupons',
    pageID: 'getCoupons'
  });

});

module.exports = router;
