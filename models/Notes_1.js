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
    note: {
        type: String,
        default: ""
    },
    labels: {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: new Date()
    },
    dateCreated: {
        type: Date,
        default: new Date()
    },
    color: {
        type: String,
        default: "transparent"
    },
    special: {
        type: Boolean,
        default: false
    },
    tasks: {
        type: Array,
        default: []
    },
    showTasks: {
        type: Boolean,
        default: true
    },
    owner: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Notes_1", NoteSchema);