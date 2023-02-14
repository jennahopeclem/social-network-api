const { User } = require("../models");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const allUsers = await User.find({});
      res.json(allUsers);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  createUser: async (req, res) => {
    try {
      const { username, email } = req.body;
      const newUser = await User.create({ username, email });
      res.json(newUser);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      res.json(user);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  updateUserById: async (req, res) => {
    try {
      const { username, email } = req.body;
      const { id } = req.params;
      await User.findByIdAndUpdate(id, { username, email });
      const updatedUser = await User.findById(id);
      res.json(updatedUser);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  deleteUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedUser = await User.findByIdAndDelete(id);
      res.json(deletedUser);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};
