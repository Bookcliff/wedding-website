// import { connectToDatabase } from "../lib/guestList";

// export async function rsvpApi(req, res) {
//     if (req.method == "GET") {

//         const db = await connectToDatabase();
//         const collection = await db.collection('users');

//         const users = await collection.find({}).toArray();

//         res.status(200).json({
//             body: users,
//             query: req.query,
//             cookies: req.cookies,
//         });
//     }
// }