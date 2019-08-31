const express = require('express');
const ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 3001;

const app = express();

if(ENV !== "production") {
    const cors = require("cors");

    app.use(cors());
}

app.get("/api/test", (req, res) => {
    res.send({
        message: "API Test Successful",
        method: req.method,
        url: req.url
    });
});

app.listen(PORT, () =>{
    console.log("Server Running @ localhost: %s", PORT);
}).on("error", (error) => {
    console.log("Server listen error. Do you already have a server running on PORT%s", PORT);
});
