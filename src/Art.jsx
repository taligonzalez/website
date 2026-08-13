import React from 'react'
import { Link, Outlet, NavLink } from 'react-router'
import { motion } from "framer-motion";
import './Art.css'

const Art = () => {
  return (
    <motion.div 
      className='art' 
      style={{textAlign:'center'}}
      >
        <motion.div
          className="art-header"
        >
          <motion.h1>Art</motion.h1>
        </motion.div>
        <ul>
            <li><NavLink to="illustration" className={({isActive})=>isActive ? 'custom-active link' : 'link'}>Illustration</NavLink></li>
            <li><NavLink to="conceptart" className={({isActive})=>isActive ? 'custom-active link' : 'link'}>Concept Art</NavLink></li>
            <li><NavLink to="animation" className={({isActive})=>isActive ? 'custom-active link' : 'link'}>Animation</NavLink></li>
        </ul>
        <Outlet/>
    </motion.div>
  )
}

export default Art