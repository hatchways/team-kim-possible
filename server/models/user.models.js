const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

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
});

//Password hashing before save
userSchema.pre("save", async function () {
  const user = this;
  const hashedPassword = await bcrypt.hash(user.password, 10);
  this.password = hashedPassword;
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
