const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    //date posted + id handled by mongo
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    comment_content: {
        type: String,
        require: true
    },
    comment_author_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    comment_author_username: {
        type: String,
        require: true
    }
}, {timestamps: true});
module.exports = mongoose.model("post_comment",commentSchema);