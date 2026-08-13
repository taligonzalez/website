import { motion } from "framer-motion";

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


export const Footer = () => {
    return(
        <motion.footer
                className="footer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p> &copy; 2026 Natalie Gonzalez. All rights reserved.</p>
              </motion.footer>
    );
};