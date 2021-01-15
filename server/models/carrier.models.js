const mongoose = require("mongoose");

const carrierSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    }
})

const Carrier = mongoose.model("Carrier", carrierSchema);
module.exports = { Carrier };
