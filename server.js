const express = require('express');
const db = require("./db");
const ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 3001;



const app = express();

if(ENV !== "production") {
    const cors = require("cors");

    app.use(cors());
}

app.use(express.json());

app.get("/api/test", async(req, res) => {

    const [rows] = await db.query("SELECT * FROM users");

    res.send({
        message: "API Test Successful",
        method: req.method,
        url: req.url,
        users: rows
    });
});

app.post("/api/test", async(req, res) => {

    const {name, email, phone } = req.body;

    const [result] = await db.execute("INSERT INTO users (name, email, phone) VALUES (?,?,?)", [name, email, phone]);


    res.send({
        message: "Post test successful",
        method: req.method,
        url: req.url,
        userId: result.insertId
    });
});

app.listen(PORT, () =>{
    console.log("Server Running @ localhost: %s", PORT);
}).on("error", (error) => {
    console.log("Server listen error. Do you already have a server running on PORT%s", PORT);
});
