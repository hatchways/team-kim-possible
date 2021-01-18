const express = require("express");
const router = express.Router();
const { User } = require("../models/user.models");

router.post("/", async function (req, res, next) {
	try {
		const user = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		});

		await user.save();
		const token = await user.generateAuthenticationToken(user);
		res.cookie("authenticationToken", token, { httpOnly: true, expires: 0 })
			.status(201)
			.send({ responseMessage: "Signup success!" });
	} catch (e) {
		res.status(404).send({ responseMesage: e });
	}
});

module.exports = router;
