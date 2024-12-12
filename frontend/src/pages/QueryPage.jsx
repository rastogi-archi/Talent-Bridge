import React, { useRef, useState } from 'react';
import { SquarePlay, Images, Newspaper } from 'lucide-react';
import Post from '../components/Post';
import axios from "axios";

const QueryPage = () => {
  const videoInputRef = useRef(null); // Ref for video file input
  const photoInputRef = useRef(null); // Ref for photo file input

  // State for posts
  const [posts, setPosts] = useState([
    { id: 1, author: 'Archi', bio: 'Bio', time: '1 hour ago', content: 'First post!', image: '/q1.png' },
    { id: 2, author: 'John', bio: 'Photographer', time: '2 hours ago', content: 'Another great post!', image: '/q1.png' },
  ]);

  // State for the new post
  const [newPost, setNewPost] = useState({ content: '', author: 'You', image: null });

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  // Function to handle image selection
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPost((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
    }
  };

  // Function to create a new post
  const createPost = () => {
    if (!newPost.content.trim()) {
      alert('Post content cannot be empty!');
      return;
    }

    const newPostEntry = {
      id: posts.length + 1,
      author: newPost.author,
      bio: 'Your bio',
      time: 'Just now',
      content: newPost.content,
      image: newPost.image,
    };

    setPosts((prevPosts) => [newPostEntry, ...prevPosts]);
    setNewPost({ content: '', author: 'You', image: null }); // Reset new post state
  };

  // Function to handle key press for Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission or page reload
      createPost();
    }
  };

  // Function to delete a post
  const deletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  // Function to handle file selection
  const handleFileSelect = (event, type) => {
    const files = event.target.files;
    if (files.length > 0) {
      alert(`Selected ${type}: ${files[0].name}`);
    }
  };

  return (
    <div className="flex justify-center mt-4 flex-col items-center">
      {/* Create Post Form */}
      <div className="w-full md:w-[60%] 2xl:w-[40%] border rounded-lg p-2 space-y-2">
        <div className="flex items-center">
          <img src="\profile.png" alt="profile" className="w-12 h-12 rounded-full" />
          <input
            type="text"
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}  // Added event listener for Enter key
            placeholder="Post a query"
            className="border-2 p-2 rounded-full pl-3 mr-1 w-full outline-none"
          />
        </div>

        <div className='flex items-center justify-evenly flex-wrap'>
          {/* Video Icon */}
          <div
            className='flex items-center space-x-2 cursor-pointer'
            onClick={() => videoInputRef.current.click()}
          >
            <SquarePlay className='text-green-600' />
            <p className='text-sm'>Video</p>
          </div>
          <input
            type="file"
            accept="video/*"
            ref={videoInputRef}
            style={{ display: 'none' }}
            onChange={(e) => handleFileSelect(e, 'video')}
          />

          <div className="flex items-center justify-evenly flex-wrap">
            {/* Photo Icon */}
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => photoInputRef.current.click()}
            >
              <Images className="text-blue-600" />
              <p className="text-sm">Photo</p>
            </div>
            <input
              type="file"
              accept="image/*"
              ref={photoInputRef}
              style={{ display: 'none' }}
              onChange={handleImageSelect}
            />
          </div>
        </div>
      </div>

      {/* Render Posts */}
      <div className="w-full mt-4 space-y-4">
        {posts.map((post) => (
          <Post key={post.id} post={post} onDelete={deletePost} />
        ))}
      </div>
    </div>
  );
};

export default QueryPage;
