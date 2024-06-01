import React from 'react'
import './Newsletter.scss'
import { motion } from "framer-motion";


const Newsletter = () => {
  return (
  

<motion.div
whileInView={{ x: [100, 0], opacity: [0, 1] }}
transition={{ duration: 0.5 }}
>
<div className="newsletter">
        <h1>Get Exclusive Offers In Your Email</h1>
        <p>Subscribe to our newsletter to stay updated</p>

<div>
    <input type="email" placeholder='Enter your email' />
    <button>Subscribe</button>
</div>


    </div>
</motion.div>
  )
}

export default Newsletter