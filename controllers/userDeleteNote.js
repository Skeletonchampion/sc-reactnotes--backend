import Notes_1 from "../models/Notes_1.js";

export default async function userDeleteNote(req, res) {
    try {
        if(req.body.type === "notes_1") {
            const { id } = req.body;
            await Notes_1.deleteOne({ id });
        }
        res.sendStatus(200);
    }
    catch(err) {
        console.error(err);
        res.sendStatus(400);
    }
}