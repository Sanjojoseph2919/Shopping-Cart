// var express = require('express');
// var router = express.Router();
// var productHelper=require('../helpers/product-helpers');
// const productHelpers = require('../helpers/product-helpers');
// /* GET users listing. */
// router.get('/', function(req, res, next) {

//   let products=[
//     {
//     name:"Iphone 16",
//     category:"mobile",
//     decription:" This is good a phone",
//     image:"https://suprememobiles.in/cdn/shop/files/1_2ab6c803-16e7-4e9d-8177-09689c589a8a.webp?v=1738819846",
//     },

//     {
//       name:"Iphone 15",
//       category:"mobile",
//       decription:" This is good a phone",
//       image:"https://darlingretail.com/cdn/shop/products/1_7b64958c-304b-43bd-b759-c5366bfa9914_600x.jpg?v=1661581431",
//       },

//       {
//         name:"Iphone 14",
//         category:"mobile",
//         decription:" This is good a phone",
//         image:"https://media.extra.com/s/aurora/100315932_800/Apple-iPhone-14-Plus%2C-5G%2C-256GB%2C-Blue?locale=en-GB,en-*,*",
//         },

//         {
//           name:"Iphone 13",
//           category:"mobile",
//           decription:" This is good a phone",
//           image:"https://darlingretail.com/cdn/shop/products/1_374aeb0b-d682-4d82-9e4f-114cbed83e9d_600x.jpg?v=1661582861",
//           },
          

//   ]

//   res.render('admin/views-products', {admin:true , products})
// });
// router.get('/add-product',function(req,res){
//   res.render('admin/add-product')
// })

// router.post('/add-product', (req, res) => {
//   console.log(req.body);
//   console.log(req.files.Image);

//   productHelpers.addProduct(req.body, (result) => {
//     res.render("admin/add-product");
//   });
//   router.post('/add-product', (req, res) => {
//     const productData = req.body;         // Get text fields
//     const imageFile = req.files.Image;    // Get uploaded image

//     productHelper.addProduct(productData, (id) => {
//         // Define the image path
//         const imagePath = './public/product-images/' + id + '.jpg';

//         // Move the uploaded file to the destination
//         imageFile.mv(imagePath, (err) => {
//             if (!err) {
//                 console.log('Image saved!');
//                 res.redirect('/admin/view-products'); // Success
//             } else {
//                 console.error('Image upload error:', err);
//                 res.status(500).send('Image upload failed.');
//             }
//         });
//     });
// });
// });

// module.exports = router;





// const express = require('express');
// const router = express.Router();
// const productHelper = require('../helpers/product-helpers');
// const path = require('path');
// const fs = require('fs');

// // Display product list
// router.get('/', (req, res) => {
//   let products = [
//     {
//       name: "Iphone 16",
//       category: "mobile",
//       decription: "This is good a phone",
//       image: "https://suprememobiles.in/cdn/shop/files/1_2ab6c803-16e7-4e9d-8177-09689c589a8a.webp?v=1738819846",
//     },
//     {
//       name: "Iphone 15",
//       category: "mobile",
//       decription: "This is good a phone",
//       image: "https://darlingretail.com/cdn/shop/products/1_7b64958c-304b-43bd-b759-c5366bfa9914_600x.jpg?v=1661581431",
//     },
//     {
//       name: "Iphone 14",
//       category: "mobile",
//       decription: "This is good a phone",
//       image: "https://media.extra.com/s/aurora/100315932_800/Apple-iPhone-14-Plus%2C-5G%2C-256GB%2C-Blue?locale=en-GB,en-*,*",
//     },
//     {
//       name: "Iphone 13",
//       category: "mobile",
//       decription: "This is good a phone",
//       image: "https://darlingretail.com/cdn/shop/products/1_374aeb0b-d682-4d82-9e4f-114cbed83e9d_600x.jpg?v=1661582861",
//     },
//   ];

//   res.render('admin/views-products', { admin: true, products });
// });

// // Show add product page
// router.get('/add-product', (req, res) => {
//   res.render('admin/add-product');
// });

// // Handle form submit and image upload
// router.post('/add-product', (req, res) => {
//   const productData = req.body;
//   const imageFile = req.files?.Image;

//   if (!imageFile) {
//     return res.status(400).send("No image uploaded");
//   }

//   productHelper.addProduct(productData, (id) => {
//     const imageDir = path.join(__dirname, '../public/product-images');
//     const imagePath = path.join(imageDir, id + '.jpg');

//     // Ensure the folder exists
//     if (!fs.existsSync(imageDir)) {
//       fs.mkdirSync(imageDir, { recursive: true });
//     }

//     // Save image to disk
//     imageFile.mv(imagePath, (err) => {
//       if (err) {
//         console.error("❌ Error saving image:", err);
//         return res.status(500).send("Image upload failed");
//       }

//       console.log("✅ Image uploaded:", imagePath);
//       res.redirect('/admin');
//     });
//   });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const productHelper = require('../helpers/product-helpers');

// Show add product page (keep your current hbs file unchanged)
router.get('/add-product', (req, res) => {
  res.render('admin/add-product');
});

// Handle product upload and image saving
router.post('/add-product', (req, res) => {
  const productData = req.body;
  const imageFile = req.files?.Image; // Will work with name="Image" in your form

  if (!imageFile) {
    console.log("❌ No image file received.");
    return res.status(400).send("No image uploaded.");
  }

  productHelper.addProduct(productData, (id) => {
    const imageDir = path.join(__dirname, '../public/product-images');
    const imagePath = path.join(imageDir, `${id}.jpg`);

    // Make sure the folder exists
    if (!fs.existsSync(imageDir)) {
      fs.mkdirSync(imageDir, { recursive: true });
    }

    // Move the image to the folder
    imageFile.mv(imagePath, (err) => {
      if (err) {
        console.error("❌ Failed to move image:", err);
        return res.status(500).send("Image upload failed.");
      }

      console.log("✅ Image saved at:", imagePath);
      res.redirect('/admin/add-product');
    });
  });
});

module.exports = router;

