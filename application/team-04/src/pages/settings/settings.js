import React, { useState } from 'react';
import './settings.css';

function Settings() {
  // const history = useHistory(); // Commented out for now
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    contactNumber: '',
    city: '',
    state: '',
    password: '',
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [isSaveClicked, setIsSaveClicked] = useState(false); // Define isSaveClicked state
  const [isCancelClicked, setIsCancelClicked] = useState(false); // Define isCancelClicked state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setSelectedImage(URL.createObjectURL(imageFile));
    // You can also upload the image to your server here if needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmed = window.confirm('Are you sure you want to save changes?');
    if (confirmed) {
      // Handle form submission (you can add your logic here)
      setIsSaveClicked(true); // Show confirmation message
      console.log(profile);
      // Redirect to the Profile page (update the path accordingly)
      // history.push('/profile'); // Commented out for now
    }
  };

  const handleCancel = () => {
    const confirmed = window.confirm('Are you sure you want to cancel changes?');
    if (confirmed) {
      setIsCancelClicked(true); // Show confirmation message
      // Handle the cancel action (you can add your logic here)
      // You can also reset the profile state if needed
      // Redirect to the Profile page (update the path accordingly)
      // history.push('/profile'); // Commented out for now
    }
  };

  return (
    <div className="settings-container">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit} className="settings-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
            placeholder="Enter your address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            id="contactNumber"
            type="text"
            name="contactNumber"
            value={profile.contactNumber}
            onChange={handleChange}
            placeholder="Enter your contact number"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              name="city"
              value={profile.city}
              onChange={handleChange}
              placeholder="Enter your city"
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <select
              id="state"
              name="state"
              value={profile.state}
              onChange={handleChange}
              placeholder="Select your state"
            >
              {/* Populate with options */}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={profile.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="profileImage">Profile Image</label>
          <input
            id="profileImage"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Profile Avatar"
              className="profile-avatar-preview" // Added a class for the image preview
            />
          )}
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            {isCancelClicked ? 'Changes Canceled' : 'Cancel'}
          </button>
          <button type="submit" className="save-btn">
            {isSaveClicked ? 'Changes Saved' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Settings;
