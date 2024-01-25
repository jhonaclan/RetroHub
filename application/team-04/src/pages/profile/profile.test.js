import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from './profile';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Profile Component', () => {
  // Test that the Profile component renders and transitions from the loading state to displaying the profile data.
  test('renders Profile component and transitions from loading to loaded state', async () => {
    // Render the Profile component within the Router context since it contains Link components.
    render(
      <Router>
        <Profile />
      </Router>
    );

    // Assert that the initial loading text is present.
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for the mock profile data to be displayed, using findByText to handle the asynchronous nature of the state update.
    const profileName = await screen.findByText('John Doe'); // Assuming 'John Doe' will be rendered after the mock data is loaded.
    
    // Assert that the profile name is in the document, which means that the component has transitioned from the loading state.
    expect(profileName).toBeInTheDocument();

    // Add more assertions here if needed, for example:
    // Check if bio is displayed
    const bio = await screen.findByText('This is my bio.');
    expect(bio).toBeInTheDocument();

    // Check if the profile image has been rendered
    const profileImage = screen.getByAltText('Profile Avatar');
    expect(profileImage).toHaveAttribute('src', 'URL_TO_PROFILE_IMAGE');
  });
});
