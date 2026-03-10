const { Schema, model } = require("mongoose");

let contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }, email: {
        type: String,
        required: true
    }, message: {
        type: String
    }
});
let contactModel = model("contacts", contactSchema);
module.exports = contactModel;
