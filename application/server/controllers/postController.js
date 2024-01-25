const mongoose = require("mongoose");
const post_format = require("../models/postModel.js");

//get multiple posts
const getPosts = async(req, res) => {
    const posts = await post_format.find({}).sort({createdAt: -1})
    return res.status(200).json(posts)
}

//get single post
const getPostByID = async(req, res) => {
    const {id} = req.params
    const desired_post = await post_format.findById(id)

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "post ID not found"})
    }
    if(!desired_post){
        return res.status(404).json({error: "post ID not found"})
    }

    return res.status(200).json(desired_post)
}

//create post
const createPost = async(req, res) => {
    const { title, content, game, tags } = req.body;
    const { author_id } = req.session.user_ID
    const { author_username } = req.session.name

    console.log("post data: ",title,content,game,tags)
    try{
        const new_post = await post_format.create({post_title: title, 
                                                   post_content: content, 
                                                   post_author_id: author_id,
                                                   post_author_username: author_username,
                                                   game_name: game,
                                                   post_tags: tags
                                                })
        console.log(new_post)
        return res.status(200).json(new_post)
    } catch (error){
        return res.status(400).json({error: error.message})
    }
}

//delete post
const deletePost = async(req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "post does not exist"})
    }

    const desired_post = await post_format.findOneAndDelete(id)
    
    if(!desired_post){
        return res.status(400).json({error: "post not found"})
    }

    return res.status(200).json({msg: "post deleted"})
}

//edit post
const updatePost = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "post does not exist"})
    }

    const desired_post = await post_format.findByIdAndUpdate(id,{
        ...req.body
    })

    if(!desired_post) {
        return res.status(400).json({error: "post not found"})
    }

    return res.status(200).json(desired_post)
}

module.exports = {
    getPosts,
    getPostByID,
    createPost,
    deletePost,
    updatePost
}