import React from 'react';

function Post({ id, title, author, timestamp, content }) {
  return (
    <div className="post">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Timestamp: {timestamp}</p>
      <p>{content}</p>
    </div>
  );
}

export default Post;
