import React from 'react'
import './Breadcrum.scss'
import { FaCaretDown } from "react-icons/fa";

const Breadcrum = (props) => {

    const {products} = props

  return (
    <div className="breadcrum">
HOME <FaCaretDown /> SHOP <FaCaretDown /> {products.category} <FaCaretDown /> {products.name}
    </div>

  ) 
}

export default Breadcrum