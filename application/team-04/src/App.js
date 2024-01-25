import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

// Components
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import CreatePost from "./components/post/createpost";
import CreateGroup from "./components/createGroup/createGroup";
import Community1 from "./pages/community/community1";
// Pages
import Home from "./pages/home/home";
import Forums from "./pages/forums/forums";
import Community from "./pages/community/community";
import About from "./pages/about/about";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Profile from "./pages/profile/profile";
import Settings from "./pages/settings/settings";
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <UserProvider>
        <div className="site-container">
          <Header />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/forums" element={<Forums posts={posts} setPosts={setPosts} />} />
              <Route path="/createpost" element={<CreatePost addPost={addPost} />} />
              <Route path="/community" element={<Community />} />
              <Route path="/community1" element={<Community1 />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/createGroup" element={<CreateGroup />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
