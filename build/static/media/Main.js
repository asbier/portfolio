//import logo from './logo.svg';
import React from "react";
import { motion } from "framer-motion";

import {useRef, useEffect, useState} from "react";
import images from "../images";


function Main(props) {
  const[width,setWidth]=useState(0);
  const carousel = useRef();


  useEffect(()=> {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    },[]);
  
  return (

<main className={props.darkMode ? "dark": ""}>
      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel">
          {images.map((image) => {
            return (
              <motion.div className="item" whileHover={{ scale: 1.1 }} key={image}>
                <img src={image} alt="" />
               
              </motion.div> 
            );
          })}
        </motion.div>
      </motion.div>
    </main>


);
}


  export default Main;
