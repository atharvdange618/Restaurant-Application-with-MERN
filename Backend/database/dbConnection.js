import mongoose from "mongoose";

//database connection setup
export const dbConnection = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        dbName: "RESTAURANT APPLICATION"
    }).then(() => {
        console.log("Connected to the database daddy!")
    }).catch((err) => {
        console.error(err.message)
    });
}