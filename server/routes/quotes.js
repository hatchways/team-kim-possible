const express = require("express");
const router = express.Router();
const { Quotes } = require("../models/quote.models");

//route api/quote/:originId/:destinationId/:departureDate
router.get(
    '/:originId/:destinationId/:departureDate',
    async function (req, res, next){
        const data=await Quotes.find({
            inboundLeg:{
                originId:req.params.originId,
                destinationId:req.params.destinationId,
                departureDate: req.params.departureDate,
            },
        })
        if (data){
            res.json(data)
        }else{
            res.status(404)
            throw new Error ('Flights not found')
        }
})

module.exports = router;