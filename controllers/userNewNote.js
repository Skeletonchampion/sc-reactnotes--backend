import Notes_1 from "../models/Notes_1.js";

export default async function userNewNote(req, res) {
    try {
        if(req.body.type === "notes_1") {
            const { id, title, note, label, dateObject, tasks, owner } = req.body;
            await Notes_1.create({ id, title, label, note, date: dateObject, tasks, owner });
        }

        return res.sendStatus(201);
    }
    catch(err) {
        console.error(err);
    }
}