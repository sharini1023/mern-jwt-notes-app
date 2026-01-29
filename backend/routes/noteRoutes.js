const router = require("express").Router();
const Note = require("../models/Note");
const auth = require("../middleware/authMiddleware");

// Add note
router.post("/", auth, async (req, res) => {
  try {
    const note = new Note({
      userId: req.user.id,
      title: req.body.title,
      content: req.body.content
    });

    await note.save();
    res.json(note);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get notes
router.get("/", auth, async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id });
    res.json(notes);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
