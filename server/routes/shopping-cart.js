const express = require("express");
const router = express.Router();
const { User } = require("../models/user.models");

router.post("/", async function (req, res, next) {
	const user = await User.findOne({
		email: req.body.email,
	});

	res.status(404).send({
		responseMesage: "Could Not Update Shopping Cart",
	});
});

module.exports = router;
