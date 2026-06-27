const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const user = require('./models/user.model');


app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));


mongoose.connect("mongodb://127.0.0.1:27017/day7DB").then(() => {
    console.log("connected to database");
})
.catch((err) => {
    console.log(err);
});


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/register", async (req, res) => {
    
    try{
        const newUser = new user({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        await newUser.save();

        res.send("User registerd Successfully");
    }
    catch(error){
        res.send(error.message);
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});