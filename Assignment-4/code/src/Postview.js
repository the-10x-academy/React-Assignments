import React, { useState, useEffect } from 'react';
import Post from './components/Post';
import './Postview.css';



const Postview = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3004/user"); /////fetching data through server
      const data = await response.json(); /////converting fetched data to json file extention
      setPosts(data);
      console.log(data);
    }
    fetchData()
  }, [])



  return (
    <div className="site-container">
      {posts.map((post, index) => (
        <Post key={index} details={post} />
      ))}
    </div>
  );
}

export default Postview;
