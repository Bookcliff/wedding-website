import { connectToDatabase } from "../lib/connectToDatabase";

//This function is to populate the RSVP form w/guest names, partner, and RSVP status.

export default async function guestListApi(req, res) {
    if (req.method == "GET") {

        const db = await connectToDatabase();
        const collection = await db.collection('guestList');
        const guests = await collection.find().toArray();

        res.status(200).json({ guests });
    }
}

export async function rsvpApi(req, res) {
    if (req.method == "POST") {

        const db = await connectToDatabase();
        const collection = await db.collection('guestList');

            

        res.status(200).json({});
    }
}


//Vision: Press RSVP button - hidden container opens with form to add name and check y/n to rsvp (will add in partner function later). Once click submit button, POST req must be sent to db with the name and adding rsvp boolean.