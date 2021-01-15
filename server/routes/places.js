const express = require("express");
const router = express.Router();
const { Places } = require("../models/place.models");

// route api/search?query=''
router.get(
    '/',
    async function (req, res, next){
        const data=await Places.find({name: `/${req.query.query}/i`});
        if(data) {
            res.json(data) 
        }else{
            res.status(404)
            throw new Error ('Places not found')
        }
}
)

module.exports = router;