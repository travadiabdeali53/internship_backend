const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended : true}));

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.post("/register", (req, res) => {
    const{username, email, password} = req.body;

    console.log("Username: ", username)
    console.log("Email: ", email)
    console.log("Password: ", password)

    res.send(`
        <h2>Registration Successful</h2>
        <p>Username: ${username}</p>
        <p>Email: ${email}</p>
        <a href="/">Go Back</a>
        `)
});

app.listen(3000, () => console.log('Server running on port 3000'));