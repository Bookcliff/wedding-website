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


// const uri =
//     "mongodb+srv://bookcliff:Ar1bxHhzr7siy75m@cluster0.hqeyb.mongodb.net/?retryWrites=true&w=majority";
// // Create a new MongoClient
// const client = new MongoClient(uri);

// export async function connectToDatabase() {
//     try {
//         // Connect the client to the server
//         await client.connect();
//         // Establish and verify connection
//         await client.db("weddingWebsite").command({ ping: 1 });
//         console.log("Connected successfully to server");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);