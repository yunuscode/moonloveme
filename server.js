require("dotenv").config();

const express = require("express");
const app = express();

app.listen(process.env.PORT || 7663);

app.set("view engine", "ejs");

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/privacy", (req, res) => {
	res.render("privacy");
});
