const express = require("express");
const router = express.Router();

router.get("/", async function (req, res, next) {
  const carList = [
    { name: "Fiat500", rate: "52", total: "104" },
    { name: "Peugeot 208", rate: "67", total: "134" },

    { name: "Peugeot 308", rate: "100", total: "200" },
  ];
  try {
    res.status(200).send({ carList });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
