import React from 'react';

export default function Post(props) {

  return (
    <div className='container'>

      <div className="top">
        <p><b>{props.name}</b> <br /> <span className='location'>{props.location}</span> </p>
        <div>
          <img src="https://cdn2.iconfinder.com/data/icons/interface-vol-3-1/16/more-vertical-menu-dots-512.png" width="15px" alt="thskjnd" />
        </div>
      </div>

      <img src={props.PostImage} alt="" />

      <div className="history">
        <div className="likes">
          <div>
            <img className='likeShare' src="https://www.kindpng.com/picc/m/48-486744_png-file-svg-instagram-love-icon-png-icon.png" width="15px" alt="" />
            <img className='likeShare' src="https://www.pngfind.com/pngs/m/233-2336605_paper-plane-comments-instagram-all-icons-png-transparent.png" width="15px" alt="" />
          </div>
          <p>{props.date}</p>
        </div>

        <div className='info'>
          <p className='postDescripton'>{props.likes} Likes <br /> <b className='description'>{props.description}</b> </p>
        </div>
      </div>

    </div>
  )
}
