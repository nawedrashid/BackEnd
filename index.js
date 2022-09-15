const express = require("express");
const App = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { ConnectionDB } = require("./Connection");

const port = process.env.PORT || 5000;
ConnectionDB();

App.use(bodyParser.json());
App.use(cors());

App.get("/", (req, res) => res.send("Hello"));

App.listen(port, () => console.log("Successfully connected to PORT", +port));
