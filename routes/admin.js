const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const productHelper = require('../helpers/product-helpers');


router.get('/', (req, res) => {
  productHelper.getAllProducts().then((products) => {
    console.log(products)
    res.render('admin/views-products', { admin: true, products });
  })
  
});  


router.get('/add-product', (req, res) => {
  res.render('admin/add-product');
});

router.post('/add-product', (req, res) => {
  const productData = req.body;
  const imageFile = req.files?.Image;

  if (!imageFile) {
    return res.status(400).send("❌ No image uploaded");
  }

  // productHelper.addProduct(productData, (id) => {
  //   const imageDir = path.join(__dirname, '../public/product-images');
  //   const imagePath = path.join(imageDir, id + '.jpg');

  //   if (!fs.existsSync(imageDir)) {
  //     fs.mkdirSync(imageDir, { recursive: true });
  //   }

  //   imageFile.mv(imagePath, (err) => {
  //     if (err) {
  //       console.error("❌ Error saving image:", err);
  //       return res.status(500).send("Image upload failed");
  //     }
  //     console.log("✅ Image uploaded:", imagePath);
  //     res.redirect('/admin/add-product');
  //   });
  // });

  productHelper.addProduct(productData, (id) => {
  const imageDir = path.join(__dirname, '../public/product-images');
  const imagePath = path.join(imageDir, id + '.jpg');

  if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
  }

  imageFile.mv(imagePath, (err) => {
    if (err) {
      console.error("❌ Error saving image:", err);
      return res.status(500).send("Image upload failed");
    }
    console.log("✅ Image uploaded:", imagePath);
    res.redirect('/admin');
  });
});

});

module.exports = router;