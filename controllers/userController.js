const { db } = require("../config/db");

const userCollection = db.collection("users");

const getAllUsers = async (req, res) => {
  try {
    const users = await userCollection.find().toArray();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = { getAllUsers, createUser, updateUser, deleteUser };
