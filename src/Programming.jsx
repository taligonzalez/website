import React from 'react'
import { motion } from "framer-motion";
import './Art.css'
import './Prog.css'
import './App.css'
import { Footer } from "./components/Footer";

const Programming = () => {
  return (
     <motion.div
      className='art' 
      style={{textAlign:'center'}}
    >
        <motion.div className='prog-header'>
          <motion.h1>
            Programming
          </motion.h1>
      </motion.div>

      <motion.div
        className='prog'
      >
        <motion.div
          className='prog-layout'
        >
          <motion.div className='prog-project'>
            <img src="./tabs/aboutme.png" width="440"/>
          </motion.div>
          <motion.div className='prog-text'>
            <motion.h3>
              This Website (2026)
            </motion.h3>
            <motion.p>
              This portfolio displays all of my college achievements in an aesthetic and user-friendly website. Although it is a work in progress, it has a responsive layout and is compatible with most devices. All of the website assets were designed and created by me through Procreate.
            </motion.p>
            <motion.span className='prog-span'>React</motion.span>
             <motion.span className='prog-span'>Javascript</motion.span>
             <motion.span className='prog-span'>HTML</motion.span>
            <motion.span className='prog-span'>CSS</motion.span>
            <motion.span className='prog-span'>Procreate</motion.span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className='prog'
      >
        <motion.div
          className='prog-layout'
        >
          <motion.div className='prog-project'>
            <iframe
              id="hashnode"
              title="Hashnode Technical Writing"
              width="600"
              height="600"
              src="https://hashnode.com/@tali-go56">
            </iframe>
          </motion.div>
          <motion.div className='prog-text'>
            <motion.h3>
              Hashnode Technical Writing (2026)
            </motion.h3>
            <motion.p>
              I created a Hashnode account to store software documentation that I have created or maintained. My Hashnode includes lab assignment instructions for CSCE 206: Structured Programming in C, etc.
            </motion.p>
            <motion.span className='prog-span'>C</motion.span>
            <motion.span className='prog-span'>Markdown</motion.span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className='prog'
      >
        <motion.div
          className='prog-layout writing-layout'
        >
          <motion.div className='prog-project'>
            <motion.a
              className="cta-primary prog-samples"
              href = "writingSamples.zip"
              whileHover={{scale: 1.09}}
              whileTap={{scale: 0.85}}
            >
              Writing Samples
            </motion.a>
          </motion.div>
          <motion.div className='prog-text'>
            <motion.h3>
              Technical Writing Samples (2025)
            </motion.h3>
            <motion.p>
              These samples were created in ENGL 210: Technical and Professional Writing class. I received an A in the course and have created a variety of documentation. The samples include resumes, job posts, elevator pitches, research posters, etc.
            </motion.p>
            <motion.span className='prog-span'>Google Suite</motion.span>
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer/>
     </motion.div>
  )
}

export default Programming