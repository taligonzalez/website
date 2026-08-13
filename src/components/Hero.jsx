import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

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

export const Hero = () => {
    return(
        <motion.section 
            id="home" 
            className="hero" 
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{duration: 0.8, delay: 0.2}}
        >
            <div className="hero-container">
                <motion.div 
                    className="hero-content"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h1 
                        className="hero-title"
                        variants={fadeInUp}
                    >
                        Natalie Gonzalez
                    </motion.h1>
                    <motion.h2 
                        className="hero-subtitle"
                        variants={fadeInUp}
                    >
                        <Typewriter
                            options={{loop:true}}
                            onInit={(typewriter) => {
                                loop: true,
                                typewriter
                                .typeString("Software Engineer")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Software Technical Writer")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Concept Artist")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Storyboard Artist")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Game Designer")
                                .pauseFor(2000)
                                .deleteAll()
                                .start()
                            }}  
                        />
                    </motion.h2>
                    <motion.p 
                        className="hero-description"
                        variants={fadeInUp}
                    >
                        Howdy! My name is Natalie Gonzalez and I am a software engineer who focuses on developing creative solutions and products. <br/> <br/>Academically, I am the loudest and proudest member of the Fighting Texas Aggie Class of 2027 with a Bachelor's in Computer Science from the College of Engineering and a minor in Game Development. <br/> <br/> In any project I work on, I make sure to bring a creative flare that makes the work authentic!
                    </motion.p>

                    <motion.div 
                        className="cta-buttons"
                        variants={staggerContainer}
                    >
                        <motion.a 
                            href="resume.pdf"
                            download="resume-Natalie-Gonzalez"
                            className="cta-primary"
                            whileHover={{scale: 1.09}}
                            whileTap={{scale: 0.85}}
                        >
                                View My Work
                        </motion.a>
                        <motion.a 
                            href="#contact"
                            className="cta-secondary"
                            whileHover={{scale: 1.09}}
                            whileTap={{scale: 0.85}}
                        >
                                Contact Me
                        </motion.a>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="hero-image-container"
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x:0}}
                    transition={{duration: 0.8, delay: 0.4}}
                >
                    <motion.div
                        className="hero-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x:0}}
                        transition={{duration: 0.8, delay: 0.4}}
                    >
                        <img src='tabs/aboutme.png' alt="about me image"/>
                    </motion.div>

                    <motion.div 
                        className="floating-card"
                        animate={{y:[0, -10, 0], rotate: [0, 2, 0]}}
                        transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
                    >
                        <div className="card-content">
                            <span className="card-icon">✨</span>
                            <span className="card-text">Looking for work!</span>
                            <span className="card-icon">✨</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};