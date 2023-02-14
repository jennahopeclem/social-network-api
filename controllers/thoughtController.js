const { Thought, User } = require("../models");

module.exports = {
  getAllThoughts: (req, res) => {
    console.log("Getting all thoughts");
    res.status(200).json("Thoughts go here");
  },

  createThought: async (req, res) => {
    try {
      const { username, thoughtText } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        res.sendStatus(404);
        return;
      }
      const newThought = await Thought.create({ username, thoughtText });
      user.thoughts.push(newThought);
      await user.save();
      res.json(newThought);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  updateThought: async (req, res) => {
    try {
      const { username, thoughtText } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        res.sendStatus(404);
        return;
      }
      const updatedThought = await Thought.updateOne({ username, thoughtText });
      user.thoughts.push(updatedThought);
      await user.save();
      res.json(updatedThought);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }
};
