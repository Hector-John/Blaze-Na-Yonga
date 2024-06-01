import React from "react";
import "./ProductDisplay.scss";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";


const ProductDisplay = (props) => {
  const { product } = props;

  return (
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
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="prices">
          <div className="oldPrice">${product.old_price}</div>
          <div className="newPrice">${product.new_price}</div>
          <div className="description">
            Description
          </div>
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
              <span>Category :</span>Women, T-shirt, Shirts
            </p>
            <p className="category">
              <span>Tags :</span>Modern, Trendy, Latest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
