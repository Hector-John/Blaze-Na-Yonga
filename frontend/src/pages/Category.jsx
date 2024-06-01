import React, { useContext } from 'react'; 
import './Category.scss';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../assets/dropdown_icon.png'
import Clothes from '../components/Clothes/Clothes'

const Category = (props) => {
  const { products } = useContext(ShopContext);

  return (
    <div className="category">
      <img src={props.banner} className='banner'/>
      <div className="indexSort">
        <p>
          <span>Showing 1-12</span> out of 42 products
        </p>
        <div className="sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="categoryProducts">
        {products.map((item, i)=>{
if (props.category===item.category) {
  return <Clothes 
  key={i} 
id={item.id}
name={item.name}
image={item.image}
new_price={item.new_price}
old_price={item.old_price}
  />
}
else{return(null)}
        })}
      </div>
      <div className="load">
        Explore More
      </div>
    </div>
  );
};

export default Category;
