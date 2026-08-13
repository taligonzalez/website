import React from 'react'
import { Hero } from "./components/Hero";
import { Roles } from "./components/Roles";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Typewriter } from "typewriter-effect";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Hero/>
      <Roles/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home