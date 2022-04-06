import React from 'react';
import './Postview.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from './component/Header';
import Post from './component/Post';


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentDate = new Date();
const date = currentDate.getDate()+' '+ months[currentDate.getMonth()]+' '+currentDate.getFullYear();


const Postview=()=> {

  const [data,usedata] = useState([])

  const getData = async() => {
    let response = await fetch(`http://localhost:3004/user`);
    let acutalData = await response.json();
    usedata(acutalData);
  }

  useEffect(() => {getData()}, []);
  console.log(data);

  return (
    <div className="site-container">
      <Header/>
      {data.map((element) => {
        return (
          <Post 
            name = {element.name}
            location = {element.location}
            likes = {element.likes}
            description = {element.description}
            PostImage = {element.PostImage}
            date = {date}
          />
        )
      })}
    </div>
  );
}

export default Postview;













