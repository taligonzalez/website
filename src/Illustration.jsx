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
        <img src='/mainart/willows_room.jpg' alt="Background practice of Willow's room from The Owl House"/>
        <motion.p className='text-ca'>
          2023. Background Practice. Bedroom design belongs to Disney.
        </motion.p>
      </motion.div>

      <motion.div
        className="ca-img"
      >
        <img src='/mainart/background_practice.jpg' alt="Background practice of the Mystery Shack from Gravity Falls"/>
        <motion.p className='text-ca'>
          2022. Background Practice. Building and background design belongs to Disney.
        </motion.p>
      </motion.div>

      <motion.div
        className="ca-img"
      >
        <img src='/mainart/lilyOfTheValley.jpg' alt="Peri and Dale at the Lily of the Valley Cafe"/>
        <motion.p className='text-ca'>
          2025. Characters, Peri Cosma, Dale Dimmadome, and Angela Wells, and background belong to Nickelodeon.
        </motion.p>
      </motion.div>

      <motion.div
        className="ca-img"
      >
        <img src='/mainart/houseOnTheOutlands.jpg' alt="Alena: cyberpunk Hispanic women with silver earpieces, lavender minidress, silver metal corset, silver shoulder jewerly, and white gloves and boots"/>
        <motion.p className='text-ca'>
          2024. Character, Harmony, belongs to Make Originals.
        </motion.p>
      </motion.div>
      <Footer/>
    </motion.div>
  )
}

export default ConceptArt