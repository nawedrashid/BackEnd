const express = require("express");
const App = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { ConnectionDB } = require("./DB/Connection");
const fileupload = require("express-fileupload");

const port = process.env.PORT || 5000;

ConnectionDB();

App.use(fileupload({
    useTempFiles: true
}))

App.use(bodyParser.json());
App.use(cors());

App.get("/", (req, res) => res.send("Hello"));

const fileRoute = require('./Routes/fileRoute')
App.use('/threeFile',fileRoute)

App.listen(port, () => console.log("Successfully connected to PORT", +port));
