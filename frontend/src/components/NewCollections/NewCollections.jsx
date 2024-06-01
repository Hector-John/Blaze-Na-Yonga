import React from 'react'
import './NewCollections.scss'
import new_collections from '../../assets/new_collections'
import Clothes from "../Clothes/Clothes"; 


const NewCollections = () => {
  return (
    <div className="newCollections">
<h1>NEW ARRIVALS</h1>
<hr />
<div className="collections">
{new_collections.map((item, i)=>{
return (<Clothes
key={i} 
id={item.id}
name={item.name}
image={item.image}
new_price={item.new_price}
old_price={item.old_price}
/> )
})}
</div>
    </div>
  )
}

export default NewCollections