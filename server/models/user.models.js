const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Flights } = require("./flights.models");
const { Cars } = require("./cars.models");
const { Hotels } = require("./hotels.models");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters in length"],
  },
  profilePictureUrl: {
    type: String,
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Cars,
    required: true,
  },
  flight: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Flights,
    required: true,
  },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Hotels,
    required: true,
  },
  favorites: {
    type: [Object],
  },
});

userSchema.methods.generateAuthenticationToken = async (user) => {
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
  return token;
};

//Password hashing before save
userSchema.pre("save", async function () {
  const user = this;
  const hashedPassword = await bcrypt.hash(user.password, 10);
  this.password = hashedPassword;
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
