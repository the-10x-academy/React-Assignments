import React from 'react'

export default function PostImage({ details }) {
    const img = `../Images/${details.PostImage}`
    return (
        <div className='PostImage'>
            <img className='postimages' src={img} alt="img" />
        </div>
    )
}
