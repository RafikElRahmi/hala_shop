import mongoose from "mongoose";
import Envs from "../constants/Envs";

function connectDB() {
    const DB_URI = `${Envs.db.uri}${Envs.db.Name}`;
    mongoose
        .connect(DB_URI)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.log(err)
        });
}

export default connectDB;
 