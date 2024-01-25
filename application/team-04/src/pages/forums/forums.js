import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Post from "../../components/post/post";
/* import ExamplePosts from "../../components/examplePost/examplepost"; */

import './forums.css';

function Forums() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("popularity"); // Default filter option

  useEffect(() => {
    // Fetch posts when the component mounts
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts"); // Replace with your API endpoint
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          throw new Error('Failed to fetch posts');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // Sort posts based on the selected filter
  const sortedPosts = posts.slice().sort((a, b) => {
    switch (filter) {
      case "popularity":
        return b.likes - a.likes;
      case "comments":
        return b.comments.length - a.comments.length;
      case "recent":
        return new Date(b.createdAt) - new Date(a.createdAt);
      case "oldest":
        return new Date(a.createdAt) - new Date(b.createdAt);
      default:
        return 0;
    }
  });

  return (
    <div className="forums">
      <h1>Forums</h1>
      <div className="filter">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="popularity">Popularity</option>
          <option value="comments">Number of Comments</option>
          <option value="recent">Most Recent</option>
          <option value="oldest">Oldest</option>
        </select>
        <Link to="/createpost" className="create-post-button">
          Create New Post
        </Link>
      </div>
      {/* <ExamplePosts /> */}
      <div className="posts-container">
        {sortedPosts.map((post, index) => (
          <Post
            key={index}
            id={post.id}
            title={post.title}
            author={post.author}
            timestamp={post.timestamp}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Forums;
