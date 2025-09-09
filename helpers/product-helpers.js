var db = require('../config/connection');

module.exports = {
    
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

