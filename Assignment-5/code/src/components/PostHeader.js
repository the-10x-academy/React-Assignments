import React from 'react'
import './Postheader.css';
export default function PostHeader({ details }) {
    return (
        <div className='PostHeader'>
            <div className="name">
                <p className='namelocation'>{details.name}</p>
                <p className='location'>{details.location}</p>
            </div>
            <div className="dot"><p>...</p></div>
        </div>
    )
}
