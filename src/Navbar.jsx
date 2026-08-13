import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'
import './Navbar.css'
import {animate, motion} from "framer-motion";
import { HashLink } from 'react-router-hash-link';

const fadeInUp = {
    initial: {opacity: 0, y: 20},
    animate: {opacity: 1, y: 0},
    transition: {duration: 1.2},
};

const staggerContainer = {
    animate: {
        transition:{
            staggerChildren: 0.1,
        },
    },
};

export const Navbar = () => {
  return (
    <motion.div>
      <motion.nav
        className="navbar"
        initial={{y:-100}} 
        animate={{y:0}}
        transition={{duration: 0.6, ease: "easeOut"}}
      >
        <motion.div
          className="logo"
          whileHover={{scale:1.05}}
          whileTap={{scale: 0.85}}
        >
            <HashLink to="/#home" className='logo'>
              <img src="/tabs/logoimg.png" className="logo-img animate__swing"/>
            </HashLink>
          </motion.div>

        <motion.ul
          className="nav-links"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.li
            variants={fadeInUp}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
          >
            <NavLink to="/programming" className="link">
              Programming
            </NavLink>
          </motion.li>

          <motion.li
            variants={fadeInUp}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
          >
            <NavLink to="/art" className='link'>
              Art
            </NavLink>
          </motion.li>

          {/* <motion.li
            variants={fadeInUp}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
          >
            <NavLink to="/academics" className='link'>
              Academics
            </NavLink>
          </motion.li> */}
          
        </motion.ul>
      </motion.nav>
      <motion.div>
        <Outlet/>
      </motion.div>
    </motion.div>
  )
}

export default Navbar