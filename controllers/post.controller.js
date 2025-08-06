const Post = require('../models/post.model');

// Tạo bài viết mới
exports.createPost = async (req, res) => {
    try {
        const { title, content, imageUrl } = req.body;

        const newPost = new Post({
            title,
            content,
            imageUrl,
            userId: req.userId  // userId lấy từ middleware verifyToken
        });

        await newPost.save();

        res.status(201).json({ message: 'Post created successfully', post: newPost });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Lấy danh sách tất cả bài viết
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('userId', 'username email');
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Lấy chi tiết bài viết theo ID
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('userId', 'username email');
        if (!post) return res.status(404).json({ message: 'Post not found' });

        res.json(post);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Sửa bài viết (chỉ user sở hữu mới được sửa)
exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });

        // Kiểm tra quyền sở hữu
        if (post.userId.toString() !== req.userId) {
            return res.status(403).json({ message: 'You are not allowed to update this post' });
        }

        const { title, content, imageUrl } = req.body;
        post.title = title || post.title;
        post.content = content || post.content;
        post.imageUrl = imageUrl || post.imageUrl;

        await post.save();

        res.json({ message: 'Post updated successfully', post });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Xóa bài viết (chỉ user sở hữu mới được xóa)
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });

        // Kiểm tra quyền sở hữu
        if (post.userId.toString() !== req.userId) {
            return res.status(403).json({ message: 'You are not allowed to delete this post' });
        }

        await Post.findByIdAndDelete(req.params.id);
        res.json({ message: 'Post deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
