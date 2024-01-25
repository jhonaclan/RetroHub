import React from 'react';
import './TeamMember.css'

const TeamMember = ({ name, bio, role, photoUrl }) => {
    return (
        <div className="team-member">
            <img src={photoUrl} alt={name} className="team-member-photo" />
            <h3 className="team-member-name">{name}</h3>
            <p className="team-member-role">{role}</p>
            <p className="team-member-bio">{bio}</p>
        </div>
    );
};

export default TeamMember;
