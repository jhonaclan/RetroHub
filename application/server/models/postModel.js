const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    post_title: {
        type: String,
        required: true
    },
    post_content: {
        type: String
    },
    post_author_id: {
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    post_author_username: {
        type: String
    },
    game_name:{
        type: String
    },
    post_tags: {
        //strings go in here
        type: Array
    },
    post_likes: {
        //userID strings go in here
        type: Array
    },
    post_views: {
        type: Number
    },
    post_media: {
        //links
        type: Array
    },
    group_id: {
        type: mongoose.Schema.Types.ObjectId
    }
}, {timestamps: true});
module.exports = mongoose.model("post",postSchema);