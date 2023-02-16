const { Thought, User } = require("../models");

module.exports = {
  getAllThoughts: async (req, res) => {
    try {
      const allThoughts = await Thought.find({});
      res.json(allThoughts);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
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

  updateThoughtsById: async (req, res) => {
    try {
      const { username, thoughtText } = req.body;
      const { id } = req.params;
      // await User.findByIdAndUpdate{username, thoughtText};
      await Thought.findByIdAndUpdate(id, { username, thoughtText });
      const updatedThought = await Thought.findById(id);
      res.json(updatedThought);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  deleteThoughtsById: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedThought = await Thought.findByIdAndDelete(id);
      res.json(deletedThought);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

    // createReaction: async (req, res) => {
    //   try {
    //     const { reactions } = req.body;
    //     const reaction = await Thought.findOneAndUpdate(
    //       {_id: req.params.thoughtId},
    //     )
    //   }
    // }

};
