// var db=require('../config/connection')
// module.exports={

//     addProduct:(product,callback)=>{
//         console.log(product);

//         // let db = require('../config/connection'); 
//         //  let productCollection = db.get().collection('product');


//         db.get().collection('product').insertOne(product).then((data)=>{
//             console.log(data)
//             callback(data.ops[0].id)
//         })
//     }

// }

const db = require('../config/connection');

module.exports = {
    addProduct: (product, callback) => {
        console.log("Received product:", product);

        const database = db.get();
        if (!database) {
            console.error("Database connection is not established!");
            return callback("Database not connected");
        }

        database.collection('product').insertOne(product)
            .then((data) => {
                console.log("Product added successfully:", data);
                callback(null, data);
            })
            .catch((err) => {
                console.error("Error inserting product:", err);
                callback(err);
            });
    }
};
