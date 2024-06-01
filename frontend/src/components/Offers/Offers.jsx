import React from "react";
import "./Offers.scss";
import exclusive_image from "../../assets/exclusive_image.png";
import { motion } from "framer-motion";


const Offers = () => {
  return (
<motion.div
whileInView={{ x: [-100, 0], opacity: [0, 1] }}
transition={{ duration: 0.5 }}
>
<div className="offers">
      <div className="left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS</p>
        <button>Check Now</button>
      </div>
      <div className="right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
</motion.div>




  );
};

export default Offers;
