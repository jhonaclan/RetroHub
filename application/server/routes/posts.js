const express = require("express");
const { getPosts,getPostByID,createPost,deletePost,updatePost } = require("../controllers/postController");
const { getPostComments, newPostComment } = require("../controllers/commentController")
const router = express.Router();

// Get a list of posts
router.get("/",getPosts);

// Get a single post
router.get("/:id",getPostByID);

// Post post
router.post("/create", createPost);

// Delete post
router.delete("/:id",deletePost);

// Update post
router.patch("/:id", updatePost);

router.get("/:id/comments", getPostComments);

router.get("/:id/newcomment", newPostComment);

module.exports = router;