import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        typr: String,
        required: true
    },
    profileImg: {
        type: String,
        default: ""
    }
},{timestamps:true})

const User = mongoosemodel("User", userSchema);
export default User;