const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    group_name: {
        type: String,
        require: true
    },
    group_desc: {
        type: String,
        require: true
    },
    group_tags: {
        type: Array,
        require: true
    },
    group_image: {
        //this should be a URL
        type: String
    },
    group_games: {
        //store the games as a string i guess
        type: Array
    },
    group_members: {
        //Array of userID strings
        members:[{
            member_id: mongoose.Schema.Types.ObjectId,
            member_username: String 
        }]
    },
    group_owner: {
        details: [{
            //userID
            owner_id: mongoose.Schema.Types.ObjectId,
            owner_username: String
        }]
    }
}, {timestamps: true});
module.exports = mongoose.model("group", groupSchema);