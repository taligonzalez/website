import { motion } from "framer-motion";
import { Link, Outlet } from 'react-router'
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

export const Roles = () => {
    return(
        <motion.section 
            id="roles"
            className="roles"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
        >
            <motion.h2
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{once: true}}
            >
                Roles
            </motion.h2>

            <motion.div
                className="role-grid"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{once: true}}
            >
                <motion.div
                    className="role-card"
                    variants={fadeInUp}
                    whileHover={{y: -10, transition: {duration: 0.2}}}
                >
                    <motion.div 
                        className="role-image" 
                        style={{backgroundImage: "url('/tabs/programmer.png')"}}
                        whileHover={{scale: 1.05, transition: {duration: 0.2}}}
                    />
                    <h3>The Engineer</h3>
                </motion.div>

                <motion.div
                    className="role-card"
                    variants={fadeInUp}
                    whileHover={{y: -10, transition: {duration: 0.2}}}
                >
                    <motion.div 
                        className="role-image" 
                        style={{backgroundImage: "url('/tabs/artist.png')"}}
                        whileHover={{scale: 1.05, transition: {duration: 0.2}}}
                    />
                    <h3>The Artist</h3>
                </motion.div>

                {/* <motion.div
                    className="role-card"
                    variants={fadeInUp}
                    whileHover={{y: -10, transition: {duration: 0.2}}}
                >
                    <motion.div 
                        className="role-image" 
                        style={{backgroundImage: "url('/tabs/student.png')"}}
                        whileHover={{scale: 1.05, transition: {duration: 0.2}}}
                    />
                    <h3>The Student</h3>
                </motion.div> */}
            </motion.div>
        </motion.section>
    );
};