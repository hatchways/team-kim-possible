const mongoose = require("mongoose");

const placeSchema = mongoose.Schema({
    name:{type:String,required:true},
    countryId: {type:String,required:true},
    regionId: {type:String,required:true},
    cityId: {type:String,required:true},
    countryName: {type:String,required:true},
});

const Place = mongoose.model("Place", placeSchema);
module.exports = { Place };
