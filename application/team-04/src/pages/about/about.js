import React from 'react';
import TeamMember from './TeamMember';
import './about.css';

function AboutPage() {
    const teamMembers = [
        { name: "Ysidro Alfaro De Leon", role: "Team Lead", bio: "I am a Computer Science major at San Francisco State University, driven by a profound curiosity for technology and its vast possibilities. My journey began with a fascination for algorithms and code and has evolved into a passion for software development, artificial intelligence, and cybersecurity.", photoUrl: "https://sdk.bitmoji.com/render/panel/20048676-102595856515_1-s5-v1.png?transparent=1&palette=1&scale=1" },
        { name: "Jhon Raimund Suelto Aclan", role: "Frontend Developer", bio: "I'm currently in my final year at San Francisco State University, majoring in Computer Science and minoring in Mathematics. My journey in the world of programming has been quite the adventure, exploring languages like C/C++, Python, Java, JavaScript/TypeScript, PHP, and diving into the depths of database management with MySQL.", photoUrl: "https://sdk.bitmoji.com/render/panel/20048676-197702727_45-s5-v1.png?transparent=1&palette=1&scale=1" },
        { name: "Jason Chan", role: "Backend Developer", bio: "A Computer Science major at San Francisco State University, currently on my final year. I enjoy exploring the ways of how computers work through code, and working on apps with C/C++ and Java", photoUrl: "/path/to/jason-photo.jpg" },
        { name: "Deep Dhorajiya", role: "Scrum Master", bio: "Deep's bio goes here...", photoUrl: "/path/to/deep-photo.jpg" },
        { name: "Om Dankhara", role: "Github Master", bio: "Om's bio goes here...", photoUrl: "/path/to/om-photo.jpg" }
    ];

    return (
        <div className="about-page">
            <h1>About Us</h1>
            <p>We are an eclectic group of computer science students working together to build this website.</p>
            
            <h2>Meet Our Team</h2>
            <div className="team-list">
                {teamMembers.map((member, index) => (
                    <TeamMember 
                        key={index}
                        name={member.name}
                        role={member.role}
                        bio={member.bio}
                        photoUrl={member.photoUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default AboutPage;
