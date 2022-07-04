const { MongoClient } = require('mongodb');

let cachedDb = null;

export const connectToDatabase = async () => {
    if (cachedDb) {
        console.log('Use exisiting connection');
        return Promise.resolve(cachedDb);
    }
    else {
        return MongoClient.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
        })
            .then((client) => {
                let db = client.db('weddingWebsite');
                console.log('New Database connection');
                cachedDb = db;
                return cachedDb;
            }).catch((error) => {
                console.log('Mongo Connection error');
                console.log(error);
            })
    }
}