import React from 'react'
import ErrorImage from './404.png'
import { Link } from 'react-router'
import { Footer } from './components/Footer'
import "./App.css"
import "./Navbar.css"

const ErrorPage = () => {
  return (
    <div className="backHome" style={{textAlign: 'center'}}>
        <p><Link to="/" className='link linkHome'>Back to Home Page</Link> </p>
        <h1 className='errorh1'>This page does not exist!</h1>
        <img src={ErrorImage} alt="404 error image" className='img404'/>
        <Footer/>
    </div>
  )
}

export default ErrorPage