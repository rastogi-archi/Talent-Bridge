import mongoose from "mongoose";

export const connectDb = async() => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL);
        console.log("Mongodb connected" + conn.Connection.host);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
