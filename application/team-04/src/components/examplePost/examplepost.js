import React from 'react';
import { Link } from 'react-router-dom';

const examplePosts = [
  {
    id: 1,
    title: 'Favorite Game of All Time',
    content: 'This is the content of the first post.',
    tags: 'gaming, favorites',
    author: 'Gamer1',
    timestamp: '2023-12-15T12:00:00Z',
  },
  {
    id: 2,
    title: 'Upcoming Game Releases',
    content: 'I\'m excited about the upcoming game releases this year. Cyberpunk 2077 and Elden Ring look amazing! Who else is looking forward to them?',
    tags: 'gaming, upcoming, Cyberpunk 2077, Elden Ring',
    author: 'Gamer2',
    timestamp: '2023-12-16T14:30:00Z',
  },
  {
    id: 3,
    title: 'Game Recommendations',
    content: 'I\'m looking for some game recommendations. I enjoy open-world RPGs like The Witcher 3. Any suggestions?',
    tags: 'gaming, recommendations, RPGs, The Witcher 3',
    author: 'Gamer3',
    timestamp: '2023-12-17T10:15:00Z',
  },
  {
    id: 4,
    title: 'Esports Discussion',
    content: 'Let\'s discuss the latest esports tournaments and highlights. What\'s your favorite esports team?',
    tags: 'gaming, esports, discussions',
    author: 'Gamer4',
    timestamp: '2023-12-18T16:45:00Z',
  },
  {
    id: 5,
    title: 'Game Modding Community',
    content: 'I\'m part of a game modding community, and we\'ve created some fantastic mods for Skyrim. Share your modding experiences!',
    tags: 'gaming, modding, Skyrim',
    author: 'Gamer5',
    timestamp: '2023-12-19T09:00:00Z',
  },
];

function ExamplePost({ post }) {
    return (
      <Link to={`/post/${post.id}`} className="post-link"> {/* Add Link component */}
        <div className="example-post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <div className="author">{post.author}</div>
          <div className="timestamp">{post.timestamp}</div>
        </div>
      </Link>
    );
  }
  
  function ExamplePosts() {
    return (
      <div className="example-posts">
        {examplePosts.map((post) => (
          <ExamplePost key={post.id} post={post} />
        ))}
      </div>
    );
  }
  
  export default ExamplePosts;