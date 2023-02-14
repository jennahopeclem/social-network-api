const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    // referenced lesson 21-Ins Virtuals: Post Model for the below code
    thoughts: [{ type: Schema.Types.ObjectId, ref: "thoughts" }],
    friends: [{ type: Schema.Types.ObjectId, ref: "users" }],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("users", userSchema);

module.exports = User;
