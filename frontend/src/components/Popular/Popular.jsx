import React from "react";
import "./Popular.scss";
import data_product from "../../assets/data"; 
import Clothes from "../Clothes/Clothes"; 

const Popular = () => {
  return (
    <div className="popular container">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popularItem">
        {data_product.map((item, i) => {
          return (
            <Clothes 
              key={i} 
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>



      {/* <motion.div
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
         
        </motion.div> */}





    </div>
  );
};

export default Popular;
