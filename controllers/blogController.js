const { db } = require("../config/db");

const blogCollection = db.collection("blog");









// Delete a blog by ID
const { ObjectId } = require("mongodb"); // Make sure this line is added!

const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Blog ID format" });
    }

    const result = await blogCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json({ message: "Blog deleted successfully", deletedCount: result.deletedCount });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

  
  

module.exports = { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog };
