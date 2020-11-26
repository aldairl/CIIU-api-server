// import * as Mongoose from "mongoose";
import Mongoose = require("mongoose");

let database: Mongoose.Connection;

export const connectToDb = () => {  // add your own uri below

    // const uri = "mongodb+srv://<username>:<password>@cluster0-v6q0g.mongodb.net/test?retryWrites=true&w=majority";
    const uri = 'mongodb://127.0.0.1:27017/economic-activities';

    if (database) {
        return;
    }

    Mongoose.connect(uri, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });

    database = Mongoose.connection;
    
    database.once("open", async () => {
        console.log("Connected to database");
    });

    database.on("error", () => {
        console.log("Error connecting to database");
    });

};

export const disconnect = () => {
    if (!database) {
        return;
    }
    Mongoose.disconnect();
};