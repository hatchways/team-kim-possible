const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({
  path: path.resolve(".env"),
});

const { locations } = require("./locations");
const { Location } = require("../models/location.models");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => console.error(err));

const importData = async () => {
  try {
    await Location.deleteMany();
    await Location.insertMany(locations);
    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Location.deleteMany();

    console.log("Data Deleted!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
