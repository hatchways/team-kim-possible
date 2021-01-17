const express = require("express");
const router = express.Router();
const { User } = require("../models/user.models");

//PUT /favorites
router.put('/',
async function (req, res, next){
    const {cityId, add, remove }=req.body;
    const user=await User.findById(req.user._id)

    if(add){user.favorites=[...user.favorites,cityId]}
    if(remove){user.favorites=user.favorites.filter(i=>i!==cityId)};

    const updatedUser=await user.save()
    res.json(updatedUser)
})

module.exports = router;

