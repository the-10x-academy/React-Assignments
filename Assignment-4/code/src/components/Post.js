import React from 'react'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'
import PostImage from './PostImage'
import './Postcontainer.css';

export default function Post({ details }) {
    return (
        <div className='Post'>
            <PostHeader details={details} />
            <PostImage details={details} />
            <PostFooter details={details} />
        </div>
    )
}
