const express = require("express");
const group = require("../models/groupModel.js");
const user = require("../models/userModel.js");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const router = express.Router();

router.get("/usergroups", async (req,res) => {
    const desired_user = await user.findById(req.session.user_ID)

    if(!desired_user){
        return res.status(404).json({message: "user not found"})
    }

    console.log(desired_user.user_groups)
    return res.status(200).json(desired_user.user_groups)
})

router.get("/:groupid", async(req,res) => {
    const {gid} = req.params
    const group_response = await group.findById(gid)

    if(!mongoose.Types.ObjectId.isValid(gid)){
        return res.status(404).json({error: "group not found"})
    }
    if(!group_response){
        return res.status(404).json({error: "group not found"})
    }
    
    return res.status(200).json(group_response)
})



router.post("/newgroup", bodyParser.urlencoded(), async(req,res) => {
    const { name, description, games, tags} = req.body

    const duplicate_group = await group.findOne({group_name: name})

    if(duplicate_group){
        return res.status(400).json({message: "duplicate group name"})
    }

    try{
        const group_created = await group.create({
                                                group_name: name,
                                                group_desc: description, 
                                                group_games: games,
                                                group_tags: tags,
                                                group_members: {
                                                    members: [{
                                                        member_id: req.session.user_ID,
                                                        member_username: req.session.name
                                                    }]
                                                },
                                                group_owner: {
                                                    details:[{
                                                        owner_id: req.session.user_ID,
                                                        owner_username: req.session.name
                                                    }]
                                                }
                                                })
        const add_user_group = await user.findByIdAndUpdate(req.session.user_ID, { $push: { user_groups: { group_id: group_created._id, group_name: group_created.group_name, role:"Owner"}}})   
        return res.status(200).json(group_created)
    } catch (error) {
        res.status(500).json({message: "server error"});
    }
})

module.exports = router;