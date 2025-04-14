// routes/commentRoutes.js
const express = require("express");
const {
  createComment,
  getCommentsByBlogId,
  deleteComment,
} = require("../controllers/commentController");

const router = express.Router();

// POST: Create a comment for a blog
router.post("/", createComment);

// GET: Get all comments for a specific blog
router.get("/:blogId", getCommentsByBlogId);

// DELETE: Delete a comment by ID
router.delete("/:id", deleteComment);

module.exports = router;
