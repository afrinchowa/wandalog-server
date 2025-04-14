const { db } = require("../config/db");

const blogCollection = db.collection("blog");


const updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedBlog = req.body;
    const filter = { _id: new ObjectId(id) };
    const updateDoc = {
      $set: { ...updatedBlog },
    };
    const result = await blogCollection.updateOne(filter, updateDoc);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



  
  

module.exports = { updateBlog, };
