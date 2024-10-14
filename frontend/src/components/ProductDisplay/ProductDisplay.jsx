import React from "react";
import "./ProductDisplay.scss";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import DescriptionBox from '../DescriptionBox/DescriptionBox'; 
import RelatedProducts from "../RelatedProducts/RelatedProducts";

const ProductDisplay = (props) => {
  const { product } = props;

  return (
    <>
    <div className="ProductDisplay">
      <div className="left">
        <div className="imgList">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="ImgDisplay">
          <img className="mainDisplayImg" src={product.image} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="star">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="dull star" />
          <p>(122)</p>
        </div>
        <div className="prices">
          <div className="oldPrice">Ksh.{product.old_price}</div>
          <div className="newPrice">Ksh.{product.new_price}</div>
        </div>
        <p className="description">
          {/* {product.description} */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos dolores eligendi rem, obcaecati alias velit quos, omnis ex odit sapiente quia dolorem ducimus facilis ipsa temporibus debitis porro praesentium.
        </p>
        <div className="size">
          <h1>Select Size</h1>
          <div className="sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button>ADD TO CART</button>
          <p className="category">
            <span>Category:</span> Women, T-shirt, Shirts
          </p>
          <p className="category">
            <span>Tags:</span> Modern, Trendy, Latest
          </p>
        </div>
      </div>
    </div>
    <DescriptionBox /> 
    <RelatedProducts/>
    </>
  );
};

export default ProductDisplay;
