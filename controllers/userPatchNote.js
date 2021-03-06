import Notes_1 from "../models/Notes_1.js";

export default async function userPatchNote(req, res) {
    try {
        if(req.body.type === "notes_1") {
            const { id, color, title, note, labels, tasks, showTasks, date, special } = req.body;
            await Notes_1.updateOne({ id }, { title, note, labels, tasks, showTasks, date, color, special });

            res.sendStatus(200);
        }
    }
    catch(err) {
        throw new Error(err);
    }
}