import mongoose from "mongoose";

const UserStatisticSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    created_notes: {
        type: Number,
        default: 0
    },
    deleted_notes: {
        type: Number,
        default: 0
    }
});