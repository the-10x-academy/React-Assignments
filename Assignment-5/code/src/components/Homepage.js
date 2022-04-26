import React from 'react'
import { Link } from 'react-router-dom';
import "./Homepage.css";

export default function Homepage() {
    return (
        <div className='Homepage'>
            <div className="image">
                <img src="../Images/dog.jpg.jpg" alt="" />
            </div>
            <div className="heading">
                <h1>Welcome to Mooi</h1>
                <Link to='/post'><button className="btn">Enter</button></Link>
            </div>
            
        </div>
    )
}
