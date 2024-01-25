import React, { useState, useEffect } from 'react';
import './profile.css';
import { Link } from 'react-router-dom';

function Profile() {
  const [profileData, setProfileData] = useState(null); // Start with no data
  const [loading, setLoading] = useState(true); // Start with loading true

  useEffect(() => {
    // Simulate a fetch call
    setTimeout(() => {
      // Simulated data for demonstration
      setProfileData({
        firstName: 'John',
        lastName: 'Doe',
        bio: 'This is my bio.',
        profileImage: 'data:image/jpeg;base64,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', // Replace with the actual image URL
      });
      setLoading(false); // Set loading to false once data is set
    }, 1000); // Simulate network delay
  }, []);

  // Show a loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Once data is fetched, render the profile data
  return (
    <div className="profile-page">
      <aside className="profile-sidebar">
        <div className="profile-avatar">
          {profileData.profileImage && (
            <img
              src={profileData.profileImage}
              alt="Profile Avatar"
              className="profile-avatar"
            />
          )}
        </div>
        <div className="profile-user-info">
          <input type="text" placeholder="First Name" value={profileData.firstName} readOnly />
          <input type="text" placeholder="Last Name" value={profileData.lastName} readOnly />
          <textarea placeholder="Bio" value={profileData.bio} readOnly></textarea>
          {/* Removed the input for adding a profile image */}
          {/* Use a Link to navigate to the Settings page */}
          <Link to="/settings" className="settings-button">
            Settings
          </Link>
        </div>
      </aside>
      <main className="profile-main">
        <section className="profile-recent-posts">
          <h2>Recent Post:</h2>
          {/* Map over posts and render them here */}
        </section>
        <section className="profile-community-groups">
          <h2>Community groups:</h2>
          {/* Map over groups and render them here */}
        </section>
        <section className="profile-friends-list">
          <h2>Friends</h2>
          {/* Map over friends and render them here */}
          <button className="see-more-button">See more</button>
        </section>
      </main>
    </div>
  );
}

export default Profile;
