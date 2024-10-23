<<<<<<< HEAD
let mongoose = require ("mongoose");
let dbURI ="mongodb://localhost:27017/pawII-si5c";

mongoose.connect(dbURI,{
    //useNewUrlParser: true
});
mongoose.connection.on("connected",()=>{
    console.log("Connected to MongoDB");
});
mongoose.connection.on("error",(error)=>{
    console.log("Connection Error:"+ error);
});
mongoose.connection.on("disconnected",()=>{
=======
let mongoose = require("mongoose");
let dbURI = "mongodb://localhost:27017/pawII_si5c";

mongoose.connect(dbURI, {
   // useNewUrlParser: true
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
    console.log("Connection Error : " + error);
});

mongoose.connection.on("diconnected", () => {
>>>>>>> 2ec82254e836b0dae13d9b202959aedc1c8b0171
    console.log("Disconnected from MongoDB");
});