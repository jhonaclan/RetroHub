import React, { useState } from 'react';
import './createpost.css';
import { useNavigate } from 'react-router-dom';

function CreatePost({ addPost }) {
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    tags: '',
    game: '',
    media: [], // Combined array for both images and videos
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleMediaUpload = (e) => {
    const files = e.target.files;
    setNewPost((prevPost) => ({
      ...prevPost,
      media: [...prevPost.media, ...files],
    }));
  };

  const handleCancel = () => {
    // Implement the cancel functionality here
    setNewPost({
      title: '',
      content: '',
      tags: '',
      game: '',
      media: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newPost.title.trim() || !newPost.content.trim()) {
      // You can display a validation message here.
      return;
    }

    try{
      const post_status = await fetch("/api/posts/create", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if(post_status.status === 200){
        navigate("/forums")
      }
    } catch(error){

    }
    /*
    const formData = new FormData();
    formData.append('title', newPost.title);
    formData.append('content', newPost.content);
    formData.append('tags', newPost.tags);

    for (let i = 0; i < newPost.media.length; i++) {
      formData.append('media', newPost.media[i]);
    }

    const linksArray = newPost.links.split(',').map((link) => link.trim());
    formData.append('links', JSON.stringify(linksArray));

    try {
      const post_status = await fetch('/api/posts/create', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(post_status);
      if (post_status.status === 200) {
        navigate('/forums');
      } else {
        throw new Error('Failed to create a new post');
      }
    } catch (error) {
      console.error('Error creating a new post:', error);
      // You can display an error message to the user.
    }
    */

  };

  const handleAddMediaClick = () => {
    // Trigger the file input click event when the button is clicked
    document.getElementById('media-upload').click();
  };

  return (
    <div className="create-group-container">
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleChange}
            placeholder="Enter the title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={newPost.content}
            onChange={handleChange}
            placeholder="Enter the content"
            rows="6"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="game">Game:</label>
          <input
            type="text"
            id="game"
            name="game"
            value={newPost.game}
            onChange={handleChange}
            placeholder="Enter an associated game"
          />
        </div>

        <div className="form-group">
          <label htmlFor="tags">Tags:</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={newPost.tags}
            onChange={handleChange}
            placeholder="Enter tags (comma-separated)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="media-upload" className="photo-upload-btn" onClick={handleAddMediaClick}>
            ADD PHOTO OR VIDEO
          </label>
          <input
            id="media-upload"
            type="file"
            name="media"
            accept="image/*, video/*"
            multiple
            onChange={handleMediaUpload}
            className="image-upload-input"
          />
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-btn smaller-btn" onClick={handleCancel}>
            Cancel
          </button>
          <div className="button-space"></div>
          <button type="submit" className="create-btn smaller-btn">
            POST
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
