const { db } = require("../config/db");

const userCollection = db.collection("users");



const updateUser = async (req, res) => {
  try {
    const email = req.body.email;
    const filter = { email };
    const updateDoc = {
      $set: { lastSignInTime: req.body?.lastSignInTime },
    };
    const result = await userCollection.updateOne(filter, updateDoc);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = { updateUser };
