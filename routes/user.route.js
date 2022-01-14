import express from "express";

import authRequiredMW from "../middlewares/authRequiredMW.js";

import userNewNote from "../controllers/userNewNote.js";
import userNotes from "../controllers/userNotes.js";
import userPatchNote from "../controllers/userPatchNote.js";
import userDeleteNote from "../controllers/userDeleteNote.js";

const router = express.Router();

router
 .post("/new/note", authRequiredMW, userNewNote)
 .get("/notes", authRequiredMW, userNotes)
 .patch("/notes/note", userPatchNote)
 .delete("/notes/note", authRequiredMW, userDeleteNote);


export default router;