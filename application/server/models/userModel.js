const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_name: {
        type: String,
        require: true
    },
    user_email: {
        type: String,
        require: true
    },
    user_password: {
        type: String,
        require: true
    },
    user_desc: {
        type: String
    },
    user_image: {
        //this should be a URL
        type: String
    },
    user_groups: [{
        group_id: mongoose.Schema.Types.ObjectId,
        group_name: String,
        role: String
    }],
    user_games: [{
        games: String
    }],
    user_follows: [{
        //Array of userID objectIDs
        type: mongoose.Schema.Types.ObjectId
    }],
    user_following: [{
        //Array of userID objectIDs
        type: mongoose.Schema.Types.ObjectId
    }]
}, {timestamps: true});
module.exports = mongoose.model("user_info", userSchema);