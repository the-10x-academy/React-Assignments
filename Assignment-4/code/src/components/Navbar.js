import React from 'react'
import "./Navbar.css"


export default function Navbar() {
    return (
        <div className='Navbar'>
            <div className="left">
                <img className="leftimg"src="../Images/now-united-41876.png" alt="" />
                <span><h2>--OMKARGRAM--</h2></span>
            </div>
            <div className='right'>
                <img className='rightimg' src="../Images/camera.jpg" alt="" />
            </div>
        </div>
    )
}
