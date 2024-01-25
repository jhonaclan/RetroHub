import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import CommunityCard from './CommunityCard';
import CommunityPlaceholder from './CommunityPlaceholder';
import CreateGroup from '../../components/createGroup/createGroup';
import Community1 from './community1';
import './community.css';

function Community() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [userCommunities, setUserCommunities] = useState([]);
  const [showCreateGroup, setShowCreateGroup] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search-results?query=${encodeURIComponent(searchTerm)}`);
  };

  const goToCreateGroupPage = () => {
    navigate('/createGroup');
  };

  useEffect(() => {
    const fetchUserCommunities = async () => {
      try {
        let response = await fetch("/api/groups/usergroups", { method: "GET" });
        if (response.ok) {
          const data = await response.json();
          setUserCommunities(data);
        } else {
          throw new Error('Failed to fetch user info');
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserCommunities();
  }, []);

  // Click handler for the Community1 component
  const handleCommunity1Click = () => {
    navigate('/community1');
  };

  // Create placeholder elements when there are no user communities
  const userCommunityPlaceholders = [...Array(4)].map((_, index) => (
    <div className="placeholder-box" key={index}>
      {index === 0 ? (
        <Community1Placeholder />
      ) : (
        <CommunityPlaceholder />
      )}
    </div>
  ));

  return (
    <div className="community-page">
      <h1>Community</h1>
      <p>Top communities that you can join & discuss</p>
      <p>You can join the community you want, discuss, and share with everyone.</p>
      <div className="search-community">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for Community here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
          <button type="button" onClick={goToCreateGroupPage}>
            Create Group
          </button>
        </form>
      </div>
      {showCreateGroup && <CreateGroup />}
      <div className="community-section">
        <div className="user-communities">
          <h2>Your Communities</h2>
          <div className="community-grid">
            {userCommunities.length > 0 ? (
              userCommunities.map((community, index) => (
                <div onClick={community.group_name === "Community1" ? handleCommunity1Click : null} key={index}>
                  <CommunityCard>
                    {community.group_name === "Community1" ? (
                      <Community1 /> // Include the Community1 component here
                    ) : (
                      <>
                        <h3>Group Name: {community.group_name}</h3>
                        <p>Role: {community.role}</p>
                      </>
                    )}
                  </CommunityCard>
                </div>
              ))
            ) : (
              <div className="center-placeholder">
                {userCommunityPlaceholders}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Create a placeholder for Community1 that is clickable
const Community1Placeholder = () => {
  const navigate = useNavigate();

  // Click handler for the Community1 placeholder
  const handleCommunity1Click = () => {
    navigate('/community1');
  };

  return (
    <div className="community-card clickable" onClick={handleCommunity1Click}>
      <h3>Community1</h3>
      <p>Click to enter</p>
    </div>
  );
};

export default Community;
