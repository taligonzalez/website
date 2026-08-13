import React from 'react'
import "./Art.css"
import {motion} from "framer-motion"
import { Footer } from "./components/Footer";

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

const ConceptArt = () => {
  return (
    <motion.div
      className='ca-div'
    >
      <motion.div
        className="ca-img"
      >
        <img src='/mainart/boardDesign.png' alt="Catan-style board game for Game Design I"/>
        <motion.p className='text-ca'>
          2025. Catan-style board game for Game Design I.
        </motion.p>
      </motion.div>

      <motion.div
        className="ca-img"
      >
        <img src='/mainart/deerDesign.jpg' alt="Y2K deer girl with red-violet news cap, pastel yellow dress, and red-violet vest for videogame The Gravedigger & The Masseur"/>
        <motion.p className='text-ca'>
          2026. Entry for The Gravedigger & The Masseur Videogame Character Design Contest. Character belongs to me.
        </motion.p>
      </motion.div>

      <motion.div
        className="ca-img"
      >
        <img src='/mainart/Abigail_reference.jpg' alt="Abigail: cyberpunk Hispanic women with a gray shrug, black overalls/jumpsuit, combat boots, fingerless gloves, and neon purple goggles"/>
        <motion.p className='text-ca'>
          2026. Character, Abigail Torres, belongs to me.
        </motion.p>
      </motion.div>

      <motion.div
        className="ca-img"
      >
        <img src='/mainart/Alena_reference.jpg' alt="Alena: cyberpunk Hispanic women with silver earpieces, lavender minidress, silver metal corset, silver shoulder jewerly, and white gloves and boots"/>
        <motion.p className='text-ca'>
          2026. Character, Alena Guerrero, belongs to me.
        </motion.p>
      </motion.div>
      <Footer/>
    </motion.div>
  )
}

export default ConceptArt