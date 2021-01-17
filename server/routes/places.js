const express = require("express");
const router = express.Router();
const axios=require('axios');

// route /search?query=''
router.get(
    '/',
    async function (req, res, next){
        try{
            const response= await axios.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-USD/?",{
            headers:{
                "x-rapidapi-key": "12ace0bfd9msh34dee4306bb93d3p1da922jsn4c10b1bd8ee4",
              "x-rapidapi-host":
                "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "useQueryString": true
             },
             params:req.query,
            })
            if(resonse.length!==0) {
                res.json(data)
                // console.log('ok'); 
            }else{
                res.status(404)
                throw new Error ('Cities not found')
            }
         } catch(error){
            //  console.log('errer')
            //  console.log(req.query)
             res.send(error)
         }
}
)

module.exports = router;