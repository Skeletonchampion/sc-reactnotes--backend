import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        minlength: 4
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    date: {
        type: Date,
        default: new Date()
    },
    notes_1: {
        type: Array,
        default: []
    },
});

UserSchema.pre("save", function(next) {
   bcrypt.hash(this.password, 10, (err, hash) => {
       if(err) throw new Error();

       this.password = hash;
       next();
   });
});

const User = mongoose.model("User", UserSchema);
export default User;