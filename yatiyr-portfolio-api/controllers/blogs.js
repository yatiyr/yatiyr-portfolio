const mongoose   = require('mongoose');
const Blog       = mongoose.model('Blog');

exports.getBlogs = async (req, res) => {
    const blogs = await Blog.find({}).sort({publishedAt: -1});
    return res.json(blogs);
}

exports.getHighlightedBlogs = async (req, res) => {
    const blogs = await Blog.find({highlighted: "true"}).sort({publishedAt: -1});
    return res.json(blogs);
}

exports.getBlogBySlug = async (req, res) => {
    const blog = await Blog.findOne({slug: req.params.slug});
    return res.json(blog);
}

exports.getBlogsByPostType = async (req, res) => {
    const blogs = await Blog.find({postType: req.params.postType}).sort({publishedAt: -1});
    return res.json(blogs);
}

