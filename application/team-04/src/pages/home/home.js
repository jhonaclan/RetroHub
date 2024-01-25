import React, { useEffect, useState } from "react";
import './home.css';
import HeadlinePost from '../../components/featuredPost/featuredPost';
import Post from '../../components/post/post';

function Home() {
  const [posts, setPosts] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    // Fetch posts and featured posts when the component mounts
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
          setFeaturedPosts(data.slice(0, 2)); // Adjust as needed
        } else {
          throw new Error('Failed to fetch posts');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="home">
      <section className="welcome-section">
        <h1>Welcome to Our Website</h1>
        <p>
        Discover the latest news, updates, and stories in the world of gaming.
        </p>
      </section>

      <section className="featured-posts">
        {featuredPosts.map((featuredPost, index) => (
          <HeadlinePost
            key={index}
            title={featuredPost.post_title}
            content={featuredPost.post_content}
            author={featuredPost.post_author_username}
          />
        ))}
      </section>

      <section className="latest-posts">
        <div className="posts" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between' }}>
          {posts.map((post, index) => (
            <Post
              key={index}
              title={post.post_title}
              content={post.post_content}
              author={post.post_author_username}
            />
          ))}
        </div>
      </section>

      <div className="show-more">
        <button onClick={() => window.location.href='/forums'}>Show More Posts</button>
      </div>
    </div>
  );
}

export default Home;