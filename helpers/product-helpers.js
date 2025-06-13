// var db=require('../config/connection')
// const db = require('../config/connection');
// module.exports={

//     addProduct:(product,callback)=>{
//         console.log(product);

//         let db = require('../config/connection'); 
//          let productCollection = db.get().collection('product');


//         db.get().collection('product').insertOne(product).then((data)=>{
//             console.log(data)
//             callback(data.ops[0].id)
//         })
//     }

// }

// const db = require('../config/connection');
// var collections = require('../config/collections')
// module.exports = {
//     addProduct: (product, callback) => {
//         console.log("Received product:", product);

//         const database = db.get();
//         if (!database) {
//             console.error("Database connection is not established!");
//             return callback("Database not connected");
//         }

//         database.collection('product').insertOne(product)
//             .then((data) => {
//                 console.log("Product added successfully:", data);
//                 callback(null, data);
//             })
//             .catch((err) => {
//                 console.error("Error inserting product:", err);
//                 callback(err);
//             });
//     },

//     getAllProducts: () => {
//         return new Promise((resolve, reject) => {
//             let products = awaitdb.get().collection(collections.PRODUCT_COLLECTION).find().toArray()
//             resolve(products)
//         })
//     }
 
// }

var db = require('../config/connection');

module.exports = {
    // addProduct: (product, callback) => {
    //     db.get().collection('product').insertOne(product).then((data) => {
    //         callback(data.insertedId); // Use insertedId instead of data.ops[0]._id
    //     });
    // },
    addProduct: (product, callback) => {
  db.get().collection('product').insertOne(product).then((data) => {
    callback(data.insertedId.toString()); // RETURN the _id as string
  });
},
    getAllProducts: () => {
        return new Promise((resolve, reject) => {
            db.get().collection('product').find().toArray()
                .then((products) => {
                    resolve(products);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
};

