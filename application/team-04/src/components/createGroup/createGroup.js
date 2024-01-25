import React, { useState } from 'react';
import './createGroup.css';
import { useNavigate } from 'react-router-dom';

function CreateGroup() {
  const navigate = useNavigate();
  const [groupDetails, setGroupDetails] = useState({
    name: '',
    description: '',
    tags: '', 
    games: '',
    image: null, // Add the image field
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGroupDetails({ ...groupDetails, [name]: value });
  };

  const handleImageChange = (event) => {
    setGroupDetails({ ...groupDetails, image: event.target.files[0] });
  };

  const handleSubmit =  async (event) => {
    event.preventDefault();
    // You would handle the group creation logic here
    // This would involve preparing the data and sending it to your backend API
    console.log(groupDetails);
    // After submission, you may want to reset the form or redirect the user
    try{
      const group_status = await fetch("/api/groups/newgroup", {
        method: "POST",
        body: JSON.stringify(groupDetails),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if(group_status.status === 200){
        navigate("/community")
      }
    } catch(error){

    }
  };

  const handleCancel = () => {
    // Implement the cancel functionality here
    setGroupDetails({
      name: '',
      description: '',
      tags: '',
      games: '',
      image: null, // Reset the image field
    });
  };

  return (
    <div className="create-group-container">
      <h1>Create New Group</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Group Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={groupDetails.name}
            onChange={handleInputChange}
            placeholder="Enter the group name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={groupDetails.description}
            onChange={handleInputChange}
            placeholder="Enter the group description"
            rows="6"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="tags">Tags:</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={groupDetails.tags}
            onChange={handleInputChange}
            placeholder="Enter tags (comma-separated)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="games">Games:</label>
          <input
            type="text"
            id="games"
            name="games"
            value={groupDetails.games}
            onChange={handleInputChange}
            placeholder="Enter games (comma-separated)"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="image">Group Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div className="form-group button-group">
          <button type="submit" className="btn create-btn">
            Create Group
          </button>
          <button type="button" className="btn cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateGroup;
