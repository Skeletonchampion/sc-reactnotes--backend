import Notes_1 from "../models/Notes_1.js";

export default async function userNewNote(req, res) {
    try {
        if(req.body.type === "notes_1") {
            const { id, title, note, labels, dateObject, tasks, color, owner } = req.body;
            await Notes_1.create({ id, title, labels, note, date: dateObject, tasks, color, owner });
        }

        return res.sendStatus(201);
    }
    catch(err) {
        console.error(err);
    }
}