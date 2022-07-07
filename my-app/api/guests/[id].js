import { connectToDatabase } from "../../lib/connectToDatabase";
const { ObjectId } = require("mongodb");

//This function is to populate the RSVP form w/guest names, partner, and RSVP status. Combine into one function (if... elseif)

export default async function guestDataApi(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    const db = await connectToDatabase();
    const collection = await db.collection("guestList");

    const oneGuest = await collection.findOne({ _id: ObjectId(id) });

    res.status(200).json({ data: oneGuest });
  } else if (req.method === "PUT") {
    const db = await connectToDatabase();
    const collection = await db.collection("guestList");

    const rsvp = await collection.updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          rsvp: req.body.rsvp,
          rsvpStatus: true,
          // chipotleOrder: req.body.order,
        },
      }
    );

    res.status(200).json({ data: rsvp });
  } else if (req.method === "DELETE") {
    const db = await connectToDatabase();
    const collection = await db.collection("guestList");

    const removeGuest = await collection.deleteOne({ _id: ObjectId(id) });

    res.status(200).json({ data: removeGuest });
  } else {
    res.status(405).json({ status: "ERROR: ROUTE NOT FOUND" });
  }
}
