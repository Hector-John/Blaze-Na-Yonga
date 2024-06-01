import React, { createContext } from 'react';
import products from '../assets/products';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    console.log("Products:", products);
    const contextValue = { products };

    return (
        <ShopContext.Provider value={contextValue}> 
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
