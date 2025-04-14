const express = require("express");
const {

  updateBlog,

} = require("../controllers/blogController");

const router = express.Router();


router.put("/:id", updateBlog);


module.exports = router;
