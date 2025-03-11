var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let product=[
    {
    name:"Iphone 16",
    category:"mobile",
    decription:" This is good phone",
    Image:"https://suprememobiles.in/cdn/shop/files/1_2ab6c803-16e7-4e9d-8177-09689c589a8a.webp?v=1738819846",
    },

  ]
  res.render('index', { title: 'Express' });
});

module.exports = router;
