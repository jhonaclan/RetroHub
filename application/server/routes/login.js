const express = require("express");
const user = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const router = express.Router();

router.post("/login", bodyParser.urlencoded(), async(req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log("form submitted:", {email, password});

    const login_details = await user.findOne({user_email: email})
    if(login_details){
        const match = await bcrypt.compare(password,login_details.user_password)
        if(match){
            req.session.user_ID = login_details._id;
            req.session.name = login_details.user_name;
            try{
                await req.session.save()
            } catch (err) {
                return res.status(500).json({message: "server error"})
            }
            return res.status(200).json(login_details)
        } else {
           return res.status(400).json({message: "invalid email or password"})
            
        }
    } else {
        return res.status(400).json({message: "invalid email or password"})
    }
})

router.post("/logout", async(req,res) => {
    try {
        await req.session.destroy()
    } catch (err) {
        return res.status(400).json({error: error.message})
    }
})

module.exports = router;