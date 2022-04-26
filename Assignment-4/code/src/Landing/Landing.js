import React from 'react'
import cover from './../images2/cover.jpg'
import {Link} from 'react-router-dom'
import './Landing.css'

export default function Landing() {
  return (
    <div className='StartPage'>
        <nav className='header2'>
            <h1>1..</h1>
            </nav>
            <section className='section2'>
                <img src={cover} alt='img' className="firstPageImage"/>
                <div className="Enterhere">
                    <h1>10x Team 04</h1>
                    <Link to='/Postview'><button>Enter</button></Link>
                </div>
            </section>
            </div>
  )
}