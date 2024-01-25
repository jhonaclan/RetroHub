import React, { useState } from 'react';
import './community1.css';

function Community1() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState(['User1: Hello!', 'User2: Hi there!']);

  const communityDescription = "This is a place for enthusiasts of video gaming to discuss, share, and connect.";
  const communityRules = ["Be respectful to other members.", "No spamming.", "Keep discussions on topic."];
  const communityTags = ["Gaming", "Discussions", "Community"];

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const handleSendMessage = () => {
    if (message) {
      setChatMessages([...chatMessages, `You: ${message}`]);
      setMessage('');
    }
  };

  const videoId = "zViFnhVHPUI";
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  const featuredTopics = [
    {
      title: "Upcoming Game Releases",
      description: "Discuss and get excited about the latest video game releases.",
    },
    {
      title: "Gaming Tips and Tricks",
      description: "Share your gaming strategies and tips with the community.",
    },
    {
      title: "Community Events",
      description: "Stay updated on community gaming events and tournaments.",
    },
  ];

  return (
    <div className="community1-container">
      <h1>Welcome to Community1</h1>
      <p className="community-description">{communityDescription}</p>

      <div className="community-tags">
        {communityTags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
      </div>

      <div className="community-rules">
        <h2>Community Rules</h2>
        <ul>
          {communityRules.map((rule, index) => <li key={index}>{rule}</li>)}
        </ul>
      </div>

      <div className="video-box">
        <iframe
          width="80%"
          height={600}
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen>
        </iframe>
      </div>

      <div className="reaction-box">
        <button onClick={handleLike}>Like ({likes})</button>
        <button onClick={handleDislike}>Dislike ({dislikes})</button>
      </div>

      <div className="chat-box">
        <h2>Chat with the Community</h2>
        <div className="chat-messages">
          {chatMessages.map((msg, index) => <p key={index}>{msg}</p>)}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>

      {/* Optional: Featured Topics or Events Section */}
      <div className="featured-topics">
      <h2>Featured Topics</h2>
        {featuredTopics.map((topic, index) => (
          <li key={index}>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Community1;
