const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://Fabrik:Aspirine%407@cluster0.13wndx7.mongodb.net/test";

const ConnectionDB = async () => {
  try {
    const Connection = await mongoose.connect(mongoURL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    if (Connection) console.log("Connected to DB");
    else console.log("Not Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { ConnectionDB };
