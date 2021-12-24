import React from 'react'
import './LandingPage.css';
import { NavLink } from "react-router-dom";

export default function LandingPage() {

    return (
       <div className='pagecontainer'>
                <div className='container'>
                    <img className='images' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png' alt='Error' />
                
                <div className='content'>
                    <input id="idnum" type="text" placeholder='Phone number, username or email' />
                    <br />
                    <br />
                    <input id="password" type="text" placeholder='Password' />
                    <br />
                    <br />
                    <NavLink to={'/postview'} className='Nav_link' activeClassName='activeRoute'>Login</NavLink>
                </div>
                </div>
       </div>
    )

}


