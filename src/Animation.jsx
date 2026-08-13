import React from 'react'
import { motion } from "framer-motion"
import "./Art.css";
import { Footer } from "./components/Footer";

const Animation = () => {
  return (
    <motion.div>
      <motion.div className='video-box'>
        <video className="ani-video" width="240" controls>
          <source src="/mainart/save_your_ego.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <motion.p className='text-ani-vertical'>
          2023. Lipsync animation. Characters, Ripper and Axel, belong to Fresh TV.
        </motion.p>
      </motion.div>

      <motion.div className='video-box'>
        <video className="ani-video" width="640" controls>
          <source src="/mainart/losinStreakLipsync.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <motion.p className='text-ani'>
          2026. Cleanup animation. Characters, Dale Dimmadome and Remy Buxaplenty, belong to Nickelodeon.
        </motion.p>
      </motion.div>

      <motion.div className='video-box'>
        <video className="ani-video" width="640" controls>
          <source src="/mainart/losingStreak.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <motion.p className='text-ani'>
          2026. Storyboard/Rough Animatic. Characters, Dale Dimmadome, Remy Buxaplenty, and Peri Cosma, belong to Nickelodeon.
        </motion.p>
      </motion.div>
      <Footer/>
    </motion.div>
  )
}

export default Animation