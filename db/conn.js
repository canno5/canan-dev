const mongoose = require("mongoose");
let URL = process.env.DATABASE_URI
const dbFunc = async () => {
    let conns = await mongoose.connect(URL);
    if (!conns) {
        console.log("Connention Failed")
    } else {
        console.log("Connention Sucessed")
    }
}
module.exports = dbFunc
