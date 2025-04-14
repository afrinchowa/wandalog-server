// controllers/commentController.js
const { db } = require("../config/db");
const { ObjectId } = require("mongodb");

const commentCollection = db.collection("comments");

// Create a comment on a blog
const createComment = async (req, res) => {
  try {
    const { blogId, author, content } = req.body;

    // Ensure the blogId is valid
    if (!ObjectId.isValid(blogId)) {
      return res.status(400).json({ message: "Invalid Blog ID format" });
    }

    const newComment = { blogId: new ObjectId(blogId), author, content };
    const result = await commentCollection.insertOne(newComment);
    
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all comments for a specific blog
const getCommentsByBlogId = async (req, res) => {
    try {
      const blogId = req.params.blogId;
  
      if (!ObjectId.isValid(blogId)) {
        return res.status(400).json({ message: "Invalid Blog ID format" });
      }
  
      const comments = await commentCollection.find({ blogId: new ObjectId(blogId) }).toArray();
      res.status(200).json(comments); // Always return an array of comments
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  

// Delete a comment by ID
const deleteComment = async (req, res) => {
  try {
    const commentId = req.params.id;

    if (!ObjectId.isValid(commentId)) {
      return res.status(400).json({ message: "Invalid Comment ID format" });
    }

    const result = await commentCollection.deleteOne({ _id: new ObjectId(commentId) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.json({ message: "Comment deleted successfully", deletedCount: result.deletedCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createComment, getCommentsByBlogId, deleteComment };
