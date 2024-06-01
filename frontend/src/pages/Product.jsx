import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrum/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  console.log("productId:", productId);
  const product = products.find((e) => e.id === Number(productId));

  return (
    <div className="products">
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
