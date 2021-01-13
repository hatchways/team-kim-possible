const express = require("express");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user.models");

const auth = async (req, res, next) => {
  try {
    if (!req.cookies.authenticationToken) {
      return res.status(401).send({ responseMessage: "Authentication error!" });
    }

    const decodedToken = jwt.verify(
      req.cookies.authenticationToken,
      process.env.SECRET_KEY
    );
    const userId = decodedToken.userId;
    const user = await User.findOne({ _id: userId });
    //Allows access of user object in authenticated routes by accessing req.user
    req.user = user;

    next();
  } catch (e) {
    res.status(401).send({ responseMessage: `Authentication error: ${e}` });
  }
};

module.exports = auth;
