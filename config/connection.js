const { MongoClient } = require('mongodb');
const state = {
  db: null
};

module.exports.connect = async function (done) {
  const url = 'mongodb://localhost:27017';
  const dbname = 'shopping-cart';

  try {
    const client = await MongoClient.connect(url); // Use async/await
    state.db = client.db(dbname); // Access db from the client instance
    done();
  } catch (err) {
    done(err); // Pass the error to the callback
  }
};

module.exports.get = function () {
  return state.db;
};
