const { Schema, model } = require("mongoose");
const thoughoutSchema = require("./Thought");

const userSchema = new Schema(
  {
    username: {
      type: String,
      // unique
      required: true,
      // trimmed
    },
    email: {
      type: String,
      required: true,
      // unique
      // Must match a valid email address (look into Mongoose's matching validation) .. ??
    },
    thoughts: [thoughtSchema],
    friends: [userSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model("user", userSchema);

module.exports = User;
