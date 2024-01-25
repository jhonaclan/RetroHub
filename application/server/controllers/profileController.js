// server/controllers/profileController.js

// Import the user model so we can interact with the MongoDB database
const UserModel = require("../models/userModel");

// Controller function to handle the request to get a user profile
exports.getProfile = async (req, res) => {
    try {
        // Attempt to find a user by their ID, provided as a URL parameter
        const user = await UserModel.findById(req.params.id);
        // If the user isn't found, send a 404 response
        if (!user) return res.status(404).json({ message: "User not found" });
        // If the user is found, send the user data as JSON
        res.json(user);
    } catch (error) {
        // If there's any error during the process, send a 500 response
        res.status(500).json({ message: "Server error" });
    }
};

// Controller function to handle the request to update a user profile
exports.updateProfile = async (req, res) => {
    try {
        // Attempt to find the user by ID and update their profile with the data received from the request body
        // The { new: true } option returns the updated document
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        // If the user isn't found, send a 404 response
        if (!user) return res.status(404).json({ message: "User not found" });
        // If the user is found and updated, send the updated user data as JSON
        res.json(user);
    } catch (error) {
        // If there's any error during the process, send a 500 response
        res.status(500).json({ message: "Server error" });
    }
};
