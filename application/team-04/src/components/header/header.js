import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import userIcon from '../../assets/icons/user.png'; // Import the user icon image

function Header({ isAuthenticated }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Close the dropdown if clicked outside
    const closeDropdown = (event) => {
        if (dropdownOpen && !event.target.closest('.search-login')) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        // Bind the event listener for clicks on the document
        document.addEventListener('mousedown', closeDropdown);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', closeDropdown);
        };
    }, [dropdownOpen]);

    return (
        <div className="header">
            <span className="logo">RetroHub</span>
            <ul className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/forums">Forums</Link></li>
                <li><Link to="/community">Community</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <div className="search-login">
                <input type="text" placeholder="Search..." />
                {/* Conditionally render the link based on authentication status */}
                {isAuthenticated ? (
                    <Link to="/profile">
                        <img
                            src={userIcon}
                            alt="User Icon"
                            className="user-icon"
                            onClick={toggleDropdown}
                        />
                    </Link>
                ) : (
                    <Link to="/login">
                        <img
                            src={userIcon}
                            alt="User Icon"
                            className="user-icon"
                            onClick={toggleDropdown}
                        />
                    </Link>
                )}
                {dropdownOpen && (
                    <div className="dropdown-content">
                        <Link to="/profile">Profile</Link>
                        <Link to="/settings">Settings</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
