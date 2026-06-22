const express = require('express');

const app = express();

const PORT = 3000; 

app.get('/', (req, res) => {
    res.send("Welcome to Day 04 Backend Development Internship!");
});

app.get('/about', (req, res) => {
    res.send("This is the about page");
});

app.get('/profile', (req, res) => {
    res.send("This is the profile page");
});

app.get('/contact-us', (req, res) => {
    res.send("This is the contact us page");
});

app.get('/setting', (req, res) => {
    res.send("This is the setting page");
});

app.get('/games', (req, res) => {
    res.send("This is the games page");
});

app.listen(PORT, () => {
    console.log("Server is running smoothly on  port " , PORT);
});