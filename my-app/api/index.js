import { connectToDatabase } from "../lib/connectToDatabase";

//This function is to populate the RSVP form w/guest names, partner, and RSVP status. Combine into one function (if... elseif)

export default async function guestListApi(req, res) {
    if (req.method == "GET") {

        const db = await connectToDatabase();
        const collection = await db.collection('guestList');

        const guests = await collection.find({}).toArray();

        // const guests = await collection.insertOne({name: "test", couple: "true", partner: "test2", rsvp: "false"})

        res.status(200).json({ data: guests });
    } else if (req.method == "PUT") {

        const db = await connectToDatabase();
        const collection = await db.collection('guestList');

        const rsvp = () => {
            await collection.updateOne({ _id: guests.id }, { $set: { 'rsvp': true }, $set: { 'rsvpStatus': true } })
        };

        res.status(200).json({ data: guests });
    } else {
        res.status(404).json({ status: "ERROR: ROUTE NOT FOUND" })
    }
}

//Vision: Press RSVP button - hidden container opens with form to add name and check y/n to rsvp (will add in partner function later). Once click submit button, POST req must be sent to db with the name and adding rsvp boolean.