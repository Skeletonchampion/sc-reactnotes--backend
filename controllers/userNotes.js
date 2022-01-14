import Notes_1 from "../models/Notes_1.js";

export default async function userNotes(req, res) {
    const notes_1 = await Notes_1.find({owner: req.username});

    res.json({ notes_1 });
}