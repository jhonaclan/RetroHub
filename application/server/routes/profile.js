// server/routes/profile.js

// Import the express module to create router instances
const express = require('express');
// Create a new router instance to handle profile routes
const router = express.Router();

// Import the profileController which contains the logic for each route
const profileController = require('../controllers/profileController');

// Route to handle GET requests for a user profile.
// :id is a URL parameter that will be the user's unique identifier
// When a GET request is made to this route, the getProfile function from the profileController is called
router.get('/profile/:id', profileController.getProfile);

// Route to handle PUT requests to update a user profile.
// Similar to the GET route, :id represents the user's unique identifier
// When a PUT request is made to this route, the updateProfile function from the profileController is called
router.put('/profile/:id', profileController.updateProfile);

// Export the router instance so it can be imported and used in the main server file
module.exports = router;
