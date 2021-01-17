const mongoose = require("mongoose");

const quoteSchema = mongoose.Schema({
    minPrice: {
        type:Number,
        required: true
    },
    direct: {
        type:Boolean,
        required: true,
        default: true
    },
    outboundLeg:{
        // carrierIds: [],
        originId: {type:mongoose.Schema.Types.ObjectId,required:true,ref:'Place'},
        destinationId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'Place'},
        departureDate:{type:String,required:true}
    },
    inboundLeg:{
        // carrierIds: [],
        originId: {type:mongoose.Schema.Types.ObjectId,required:true,ref:'Place'},
        destinationId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'Place'},
        departureDate:{type:String,required:true}
    },  
    quoteDateTime:{type:String,required:true}
})

const Quote = mongoose.model("Quote", quoteSchema);
module.exports = { Quote };
