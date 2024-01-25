import React, { createContext, useContext, useState } from 'react';

// Create a new context
export const UserContext = createContext();

// Custom Provider component for UserContext
export const UserProvider = ({ children }) => {
  // State to store user data
  const [user, setUser] = useState(null); // Initialize as null or with default user data

  // Define functions to set user data
  const loginUser = (userData) => {
    setUser(userData);
  };

  const logoutUser = () => {
    setUser(null);
  };

  // Create a value object to provide data and functions to components
  const contextValue = {
    user,
    loginUser,
    logoutUser,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
