import React from 'react';
import { useEffect } from 'react';
import "./index.css"
import { useState } from 'react';


const Postview = () => {

  const [data, setdata] = useState([])
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:3004/user");
      const data = await res.json();
      // console.log(data);
      setdata(data);
    }
    getData()
  })

  return (
    <div>
      <nav class="nav">
        <a class="nav-link heading" aria-current="page" href="#">InstaClone</a>
      </nav>
      <img src="https://img.icons8.com/material-outlined/24/000000/camera--v2.png" className='camera rightpart' />

      {data.map((user) => {
        return (
          <div className='container2 main'>
            <div >
              <div className='leftpart'>
                <p className='name'>{user.name}</p>
                <p className='location'> {user.location}</p>
              </div>
              <img src="https://img.icons8.com/material-outlined/24/000000/dots-loading--v5.png" className='rightpart' />
            </div>
            <div>
              <img src={user.PostImage} className="card-img-top img" alt="x" />
              <div className="card-body">
                <div>
                  <div className='leftpart'>
                    <img src="https://img.icons8.com/material-outlined/24/000000/like.png" />
                    <img src="https://img.icons8.com/ios/20/000000/paper-plane.png" className='heart' />
                  </div>
                  <p className='rightpart date'>{user.date}</p>
                </div>
                <br />
                <br />
                <p className='location likes'>{user.likes} likes</p>
                <br />
                <h6 className="card-title">{user.description}</h6>
              </div>
            </div>
          </div>
        )
      })}

    </div>
  );
}

export default Postview;
