import React from 'react';
import './Clothes.scss';
import {Link} from 'react-router-dom'

const Clothes = (props) => {
  return (
    <div className="clothes">
    <Link to={`/product/${props.id}`}>  <img src={props.image} /> </Link> 
      <p>{props.name}</p>
      <div className="prices">
        <div className="newPrice">Ksh.{props.new_price}</div>
        <div className="oldPrice">Ksh.{props.old_price}</div>
      </div>
    </div>
  );
}

export default Clothes;
