const express = require("express");
const {

  deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();


router.delete("/:id", deleteBlog);

module.exports = router;
