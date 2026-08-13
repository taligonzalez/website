import React from 'react'
import { motion } from "framer-motion";
import './Art.css'
import { Footer } from "./components/Footer";

const Academics = () => {
  return (
       <motion.div
        className='art' 
        style={{textAlign:'center'}}
      >
          <motion.div className='art-header'>
            <motion.h1>
              Academics
            </motion.h1>
        </motion.div>
  
        <motion.div>
          <motion.h2>
            Education
          </motion.h2>
          <motion.ul>
            <motion.li>
              
            </motion.li>
          </motion.ul>
        </motion.div>
  
        <Footer/>
       </motion.div>
    )
}

export default Academics