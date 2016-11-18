var express = require('express');
var router = express.Router();

router.get('/products', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageProducts = data.products;

  data.products.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  res.render('products', {
    pageTitle: 'Products',
    artwork: pagePhotos,
    products: pageProducts,
    pageID: 'productList'
  });
});

router.get('/products/:productid', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageProducts = [];

  data.products.forEach(function(item) {
    if (item.shortname == req.params.productid) {
      pageProducts.push(item);
      pagePhotos = pagePhotos.concat(item.artwork);
    }
  });

  res.render('products', {
    pageTitle: 'Product Info',
    artwork: pagePhotos,
    products: pageProducts,
    pageID: 'productDetail'
  });
});

module.exports = router;
