import React, { useState, useEffect } from 'react';
import './friendsListSideBar.css';

function FriendsListSideBar({ isOpen, toggleSidebar }) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // Fetch the list of friends from the backend currently mock data
    const mockFriends = [
      { id: 1, name: 'Alice', status: 'online' },
      { id: 2, name: 'Bob', status: 'offline' },
      // ...more mock friends
    ];
    setFriends(mockFriends);
  }, []);

  // Conditional class to control the visibility of the sidebar
  const sidebarClass = isOpen ? "sidebar open" : "sidebar";

  return (
    <div className={sidebarClass}>
      <button className="close-btn" onClick={toggleSidebar}>×</button>
      <h2>Friends List</h2>
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>{friend.name} ({friend.status})</li>
        ))}
      </ul>
    </div>
  );
}

export default FriendsListSideBar;