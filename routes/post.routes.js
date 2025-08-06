const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');
const verifyToken = require('../middlewares/auth.middleware');

// Public Routes
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);

// Protected Routes (cần token)
router.post('/', verifyToken, postController.createPost);
router.put('/:id', verifyToken, postController.updatePost);
router.delete('/:id', verifyToken, postController.deletePost);

module.exports = router;
