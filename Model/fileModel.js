const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const fileSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    file3d: {
        type: String,
        required: true,
    }
});

const Filez = model('Filez', fileSchema);

module.exports = { Filez };