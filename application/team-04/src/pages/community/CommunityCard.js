import React from 'react';
import './CommunityCard.css';

function CommunityCard({ name, imageUrl, description }) {
  return (
    <div className="community-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default CommunityCard;
