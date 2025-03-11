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

    {
      name:"Iphone 15",
      category:"mobile",
      decription:" This is good phone",
      Image:"https://darlingretail.com/cdn/shop/products/1_7b64958c-304b-43bd-b759-c5366bfa9914_600x.jpg?v=1661581431",
      },

      {
        name:"Iphone 14",
        category:"mobile",
        decription:" This is good phone",
        Image:"https://media.extra.com/s/aurora/100315932_800/Apple-iPhone-14-Plus%2C-5G%2C-256GB%2C-Blue?locale=en-GB,en-*,*",
        },

        {
          name:"Iphone 13",
          category:"mobile",
          decription:" This is good phone",
          Image:"https://darlingretail.com/cdn/shop/products/1_374aeb0b-d682-4d82-9e4f-114cbed83e9d_600x.jpg?v=1661582861",
          },

  ]
  res.render('index', { product });
});

module.exports = router;
