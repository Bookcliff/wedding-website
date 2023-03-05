import { connectToDatabase } from "../../lib/connectToDatabase";

export default async function commentList(req, res) {
  console.log("1");
  if (req.method === "GET") {
    console.log("2");
    const db = await connectToDatabase();
    const collection = await db.collection("comments");

    const comments = await collection.find({}).toArray();

    res.status(200).json({ data: comments });
  } else if (req.method === "POST") {
    const comment = req.body;

    console.log({ comment });

    const db = await connectToDatabase();
    const collection = await db.collection("comments");

    const comments = await collection.insertOne(comment);

    console.log({ comments });

    res.status(200).json({ comments });
  } else {
    res.status(405).json({ status: "ERROR: ROUTE NOT FOUND" });
  }
}
