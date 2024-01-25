const mongoose = require("mongoose");
const post_format = require("../models/postModel.js");
const comment_format = require("../models/commentModel.js")

const getPostComments = async (req, res) => {
    const {id} = req.params
    parent_post = await post_format.findById(id)

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "post ID not found"})
    }
    if(!parent_post){
        res.status(404).json({error: "post ID not found"})
    }

    const post_with_comments = post_format.aggregate([
    {
        $match: {
            "_id": parent_post._id
        }
    },
    {
        $lookup:{
            from: "post_comments",
            localField: "_id",
            foreignField: "parent",
            as: "comments"
            
        }
    }
    ])
    console.log(post_with_comments[0])
    res.status(200).json((post_with_comments[0]))
}

const newPostComment = async (req,res) => {
    const { parent_id } = req.params
    const { author_id } = req.sessions.user_ID
    const { author_username } = req.sessions.name
    const { content } = req.body

    try{
        const new_comment = await comment_format.create({
                                                        parent: parent_id,
                                                        comment_content: content,
                                                        comment_author_id: author_id,
                                                        comment_author_username: author_username
                                                        
                                                    })
        res.status(200).json(new_comment)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getPostComments,
    newPostComment
}