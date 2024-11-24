const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
    res.send("<h2>Hello World!!!</h2>")
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log("server has started");
})