const express = require("express");
const user = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const router = express.Router();

router.post("/submit", bodyParser.urlencoded(), async(req,res) => {
    const { name, email, password } = req.body
    console.log("form submitted:", {name, email, password})

    const username_response = await user.findOne({user_name: name})
    if(username_response) {
        return res.status(400).json({message: "invalid username"})
    }

    const email_response = await user.findOne({user_email: email})
    if(email_response) {
        return res.status(400).json({message: "invalid email"})
    } else if (email.includes("@") == false){
        return res.status(400).json({message: "invalid email"})
    }

    const hashed_password = await bcrypt.hash(password,2)
    
    try{
        const new_user = await user.create({user_name: name, user_email: email, user_password: hashed_password})
        console.log("sending: ", new_user)
        return res.status(200).json(new_user)
    }catch (error){
        return res.status(500).json({message: "server error"})
    }
})

module.exports = router;