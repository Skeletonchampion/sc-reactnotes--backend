import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: new Date()
    },
    color: {
        type: String,
        default: "transparent"
    },
    owner: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Notes_2", NoteSchema);